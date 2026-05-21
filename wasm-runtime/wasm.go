//go:build js

package wasm

import (
	"reflect"
	"syscall/js"
	"unsafe"
)

// Ptr is a pointer to raylib wasm memory
type Ptr = uint32

const PTR_SIZE = 4 // bytes

// Allocates memory on raylib heap
//
//go:wasmimport raylib _malloc
//go:noescape
func malloc(size Ptr) Ptr

// malloc the size of V
func MallocV[T any]() (Ptr, func()) {
	ptr := malloc(Ptr(reflect.TypeFor[T]().Size()))
	return ptr, func() { Free(ptr) }
}

// Free memory allocated on raylib heap
//
//go:wasmimport raylib _free
//go:noescape
func Free(Ptr)

// _copyToC copies a Go type/struct to C memory. Useful for copying slices and structs.
//
// Destination C array must have enough space.
//
// NOTE: Value must be a type, it cannot be a slice.
// To pass a slice, use [unsafe.SliceData]
//
//go:wasmimport gojs CopyToC
//go:noescape
func _copyToC(Value unsafe.Pointer, srcSize, dstCptr Ptr)

// copies C memory to a Go pointer. Useful for copying C structs into Go structs
//
// example usage:
//
//	type Person struct{
//	 Age int32
//	}
//
// var cPtrToPersonInCHeap cptr = ...
//
// var p Person
// CopyToGo(unsafe.Pointer(&p),unsafe.SizeOf(p),cPtrToPersonInCHeap)
//
// p.Age == (whatever it was in C)
//
//go:wasmimport gojs CopyToGo
//go:noescape
func _copyToGo(dstGoPtr unsafe.Pointer, size Ptr, src Ptr)

// Copies the src value to the dst cptr
func CopyToC[T any](src *T, dst Ptr) {
	size := Ptr(reflect.TypeFor[T]().Size())
	_copyToC(unsafe.Pointer(src), size, dst)
}

// Copies srcSize bytes from src into dst.
func CopyToGo[T any](src Ptr, srcSize Ptr, dst *T) {
	_copyToGo(unsafe.Pointer(dst), srcSize, src)
}

// The allocated C string lives on the raylib heap and must be free()'d
//
//go:wasmimport gojs CStringFromGoString
//go:noescape
func CString(string) Ptr

// Scan for null terminator and return length excluding the null terminator.
//
//go:wasmimport gojs CStringGetLength
//go:noescape
func _cStringGetLength(cstr Ptr) Ptr

// Scan for null terminator and return length excluding the null terminator.
//
//go:wasmimport gojs CStringArrayGetLength
//go:noescape
func CStringArrayGetLength(cstrArray Ptr) Ptr

// Copies a C string to Go memory without freeing the C string.
func GoString(cstr Ptr) string {
	size := _cStringGetLength(cstr)
	dstStr := make([]byte, size)
	CopySliceToGo(cstr, dstStr)
	return string(dstStr)
}

// Convert boolean to int32
func BtoI(v bool) int32 {
	if v == true {
		return 1
	} else {
		return 0
	}
}

// CopyValueToC copies a value to C and returns a pointer to it.
//
// NOTE: Value cannot be a slice. For a slice, use [CopySliceToC]
func CopyValueToC[T any](srcValue *T) (Ptr, func()) {
	dst, free := MallocV[T]()
	CopyToC(srcValue, dst)
	return dst, free
}

// CopySliceToC allocates a copy of a slice in C memory and returns a cptr to it.
//
// NOTE: Value MUST be a slice
func CopySliceToC[Slice ~[]E, E any](s Slice) (Ptr, func()) {
	// size of the slice's underlying array in bytes
	sliceSize := Ptr(unsafe.Sizeof(s[:1][0])) * Ptr(len(s))
	// allocate C array to hold Value
	dstCptr := malloc(sliceSize)
	// copy underlying array memory to C
	_copyToC(unsafe.Pointer(unsafe.SliceData(s)), sliceSize, dstCptr)
	return dstCptr, func() { Free(dstCptr) }
}

// CopyValueToGo copies a value from C memory to Go memory.
// Useful for copying structs
//
// NOTE: Slices are not supported. Use [CopySliceToGo]
func CopyValueToGo[T any](src Ptr, dst *T) {
	size := Ptr(unsafe.Sizeof(*dst))
	_copyToGo(unsafe.Pointer(dst), size, src)
}

// CopySliceToGo copies a C array into a Go Slice.
//
// It copies bytes to the underlying array of the slice.
func CopySliceToGo[Slice ~[]E, E any](src Ptr, dst Slice) {
	// size of underlying array
	var occupiedSize = len(dst)
	if occupiedSize == 0 {
		occupiedSize = cap(dst)
	}
	size := Ptr(unsafe.Sizeof(dst[0])) * Ptr(occupiedSize)
	dstPtr := unsafe.SliceData(dst)
	_copyToGo(unsafe.Pointer(dstPtr), size, src)
}

//go:wasmimport gojs Alert
//go:noescape
func Alert(string)

// Use this instead of a for loop on web platform
// Everything that you would do inside the for-loop must be done inside UpdateAndDrawFrame
func SetMain(UpdateAndDrawFrame func()) {
	var updateLoop js.Func
	updateLoop = js.FuncOf(func(this js.Value, args []js.Value) any {
		UpdateAndDrawFrame()
		js.Global().Call("requestAnimationFrame", updateLoop)
		return nil
	})
	js.Global().Call("requestAnimationFrame", updateLoop)
	select {}
}
