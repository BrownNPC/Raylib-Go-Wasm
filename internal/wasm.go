package wasm

import (
	"reflect"
	"syscall/js"
	"unsafe"
)

var (
	Module     = js.Global().Get("mod")
	funcsCache = map[string]js.Value{}
)

type None struct{}

type Pointer = uintptr

// Argument. Byte representation of a data structure. like int, or string
type Component interface {
	ToBytes() []byte
}

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

func ReadStruct[T any](r Return) T {
	v, ok := r.([]byte)
	if !ok {
		panic("Invalid return value")
	}
	return BytesToStruct[T](v)
}
func Struct[T any](t T) structArg {
	return structArg{
		mem: copyToWASM(StructToBytes(t)), size: unsafe.Sizeof(t),
	}
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
	return Func[None](name)
}
func Malloc(size uintptr) Pointer {
	ptr := Pointer(Module.Call("_malloc", size).Int())
	return ptr
}
func Free(addr Pointer) {
	Module.Call("_free", addr)
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

type argumentKinds interface {
	structArg | int
}
type Return any

// Calls the WASM function, optionally capturing the return bytes
func Call(fn Function, inputs ...any) Return {
	wasmFunc, ok := funcsCache[fn.Name]
	if !ok {
		panic("Function was not registered")
	}

	var (
		freeList = []Pointer{}

		ReturnsStruct = fn.Returns == reflect.Struct
		returnAddr    Pointer
	)
	if ReturnsStruct {
		returnAddr = Malloc(fn.ReturnSize)
		freeList = append(freeList, returnAddr)
	}
	for _, i := range inputs {
		switch t := i.(type) {
		case structArg:
			freeList = append(freeList, t.mem)
		}
	}
	var arguments []any
	if ReturnsStruct {
		arguments = append(arguments, returnAddr)
	}
	arguments = append(arguments, inputs...)

	retval := wasmFunc.Invoke(arguments...)
	if fn.Returns == reflect.Struct {
		result := ReadFromWASM(returnAddr, fn.ReturnSize)
		return result
	} else if fn.Returns != reflect.Invalid {
		return retval
	}
	return nil
}

// func (fn Function) Call() []byte {
// 	var callAddrs []any

// 	// Allocate return buffer only if needed
// 	var returnAddr Pointer
// 	if fn.ReturnSize > 0 {
// 		returnAddr = Malloc(fn.ReturnSize)
// 		callAddrs = append(callAddrs, returnAddr)
// 	}

// 	// Allocate and copy each input
// 	for _, input := range fn.Inputs {
// 		addr := copyToWASM(input.ToBytes())
// 		callAddrs = append(callAddrs, addr)
// 	}

// 	// Invoke WASM function
// 	if wasmFunc, ok := funcsCache[fn.Name]; ok {
// 		// wasmFunc.Invoke(callAddrs...)
// 		wasmFunc.Invoke(100, 100, "Hi")
// 	} else {
// 		panic(fmt.Sprintf("Function %s not registered. Use wasm.Func()", fn.Name))
// 	}

// 	// Read return value if applicable
// 	var result []byte
// 	if fn.ReturnSize > 0 {
// 		result = ReadFromWASM(returnAddr, fn.ReturnSize)
// 	}

// 	// Free all allocated memory
// 	for _, arg := range callAddrs {
// 		if ptr, ok := arg.(Pointer); ok && ptr != 0 {
// 			Free(ptr)
// 		}
// 	}

// 	return result
// }
