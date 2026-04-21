//go:build js
package wasm

import (
	"syscall/js"
	"unsafe"
)

// Cptr is a pointer to raylib wasm memory
type Cptr = uint32

// Allocates memory on raylib heap
//
//go:wasmimport raylib _malloc
//go:noescape
func malloc(size Cptr) Cptr

// malloc the size of V
func mallocV[T any](V T) (Cptr, func()) {
	ptr := malloc(sizeof(V))
	return ptr, func() { free(ptr) }
}

// free memory allocated on raylib heap
//
//go:wasmimport raylib _free
//go:noescape
func free(Cptr)

// _copyToC copies a Go type/struct to C memory. Useful for copying slices and structs.
//
// Destination C array must have enough space.
//
// NOTE: Value must be a type, it cannot be a slice.
// To pass a slice, use [unsafe.SliceData]
//
//go:wasmimport gojs CopyToC
//go:noescape
func _copyToC(Value unsafe.Pointer, srcSize, dstCptr Cptr)

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
func _copyToGo(dstGoPtr unsafe.Pointer, size Cptr, src Cptr)

// Copies the src value to the dst cptr
func copyToC[T any](src T, dst Cptr) {
	size := sizeof(src)
	_copyToC(unsafe.Pointer(&src), size, dst)
}

// The alocated C string lives on the raylib heap and must be free()'d
//
//go:wasmimport gojs CStringFromGoString
//go:noescape
func cString(string) Cptr

// Scan for null terminator and return length excluding the null terminator.
//
//go:wasmimport gojs CStringGetLength
//go:noescape
func _cStringGetLength(cstr Cptr) Cptr

// Copies a C string to Go memory without freeing the C string.
func goString(cstr Cptr) string {
	size := _cStringGetLength(cstr)
	dstStr := make([]byte, size)
	copySliceToGo(cstr, dstStr)
	return string(dstStr)
}

// copyValueToC copies a value to C and returns a pointer to it.
//
// NOTE: Value cannot be a slice. For a slice, use [copySliceToC]
func copyValueToC[T any](srcValue T) (Cptr, func()) {
	dst, free := mallocV(srcValue)
	copyToC(srcValue, dst)
	return dst, free
}

// copySliceToC allocates a copy of a slice in C memory and returns a cptr to it.
//
// NOTE: Value MUST be a slice
func copySliceToC[Slice ~[]E, E any](s Slice) (Cptr, func()) {
	// size of the slice's underlying array in bytes
	sliceSize := Cptr(unsafe.Sizeof(s[:1][0])) * Cptr(len(s))
	// allocate C array to hold Value
	dstCptr := malloc(sliceSize)
	// copy underlying array memory to C
	_copyToC(unsafe.Pointer(unsafe.SliceData(s)), sliceSize, dstCptr)
	return dstCptr, func() { free(dstCptr) }
}

// copyValueToGo copies a value from C memory to Go memory.
// Useful for copying structs
//
// NOTE: Slices are not supported. Use [copySliceToGo]
func copyValueToGo[T any](src Cptr, dst *T) {
	size := sizeof(*dst)
	_copyToGo(unsafe.Pointer(dst), size, src)
}

// copySliceToGo copies a C array into a Go Slice.
//
// It copies bytes to the underlying array of the slice.
func copySliceToGo[Slice ~[]E, E any](src Cptr, dst Slice) {
	// size of underlying array
	var occupiedSize = len(dst)
	if occupiedSize == 0 {
		occupiedSize = cap(dst)
	}
	size := Cptr(unsafe.Sizeof(dst[0])) * Cptr(occupiedSize)
	dstPtr := unsafe.SliceData(dst)
	_copyToGo(unsafe.Pointer(dstPtr), size, src)
}

//go:wasmimport gojs Alert
//go:noescape
func alert(string)

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

// return sizeof of v in bytes
func sizeof[T any](v T) Cptr { return Cptr(unsafe.Sizeof(v)) }
