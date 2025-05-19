package wasm

import (
	"reflect"
	"syscall/js"
)

var (
	Module     = js.Global().Get("mod")
	funcsCache = map[string]js.Value{}
)

type None struct{}
type ReturnValue any
type Pointer = uintptr

type Function struct {
	Name       string
	Inputs     []Pointer
	Returns    reflect.Kind
	ReturnSize uintptr
}
type structArg struct {
	mem  Pointer
	size uintptr
}

// Func creates a WASM function with a return type.
// Use `wasm.None` to indicate no return value.
func Func[T any](name string) Function {
	var returnType T
	var returnSize, kind = SizeOf(returnType)
	fn := Function{
		Name:       "_" + name,
		ReturnSize: returnSize,
		Returns:    kind,
	}

	funcsCache[fn.Name] = Module.Get(fn.Name)
	return fn
}

// Proc creates a Procedure. aka function that has no return value (void)
func Proc(name string) Function {
	fn := Function{
		Name:       "_" + name,
		Returns:    reflect.Invalid,
		ReturnSize: 0,
	}
	funcsCache[fn.Name] = Module.Get(fn.Name)
	return fn
}
func Malloc(size uintptr) Pointer {
	ptr := Pointer(Module.Call("_malloc", size).Int())
	return ptr
}
func Free(addrs ...Pointer) {
	for _, addr := range addrs {
		Module.Call("_free", addr)
	}
}

// copy bytes to wasm memory
func copyToWASM(data []byte) Pointer {

	address := Malloc(uintptr(len(data)))
	jsBuffer := Module.Get("HEAPU8").
		Call("subarray", address, address+Pointer(len(data)))

	js.CopyBytesToJS(jsBuffer, data)

	return address
}

// read bytes from wasm memory
func ReadFromWASM(addr Pointer, size uintptr) []byte {

	jsBuf := Module.Get("HEAPU8").Call("subarray", addr, addr+Pointer(size))
	data := make([]byte, size)
	js.CopyBytesToGo(data, jsBuf)

	return data
}

// Calls the WASM function, optionally capturing the return bytes
func (fn Function) Call(inputs ...any) (ReturnValue, []Pointer) {
	wasmFunc, ok := funcsCache[fn.Name]
	if !ok {
		Panic("Function was not registered")
	}

	var (
		freeList = []Pointer{}

		ReturnsStruct = fn.Returns == reflect.Struct
		returnAddr    Pointer
		retval        ReturnValue
	)

	for _, i := range inputs {
		switch t := i.(type) {
		case structArg:
			freeList = append(freeList, t.mem)
		}
	}

	var arguments []any
	if ReturnsStruct {
		returnAddr = Malloc(fn.ReturnSize)
		freeList = append(freeList, returnAddr)
		arguments = append(arguments, returnAddr)
	}
	for _, input := range inputs {
		if sa, ok := input.(structArg); ok {
			arguments = append(arguments, sa.mem)
		} else {
			arguments = append(arguments, input)
		}
	}
	if len(arguments) == 0 {
		retval = wasmFunc.Invoke()
	} else {
		retval = wasmFunc.Invoke(arguments...)
	}

	var result ReturnValue
	if fn.Returns == reflect.Invalid {

		return nil, freeList
	}
	if fn.Returns == reflect.Struct {
		result = ReadFromWASM(returnAddr, fn.ReturnSize)
	} else {
		result = retval
	}
	return result, freeList
}
