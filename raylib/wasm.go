//go:build js

package rl

import (
	"syscall/js"
	"unsafe"
)

// cptr is a pointer to raylib wasm memory
type cptr = uint32

// Allocates memory on raylib heap
//
//go:wasmimport raylib _malloc
//go:noescape
func malloc(size cptr) cptr

// free memory allocated on raylib heap
//
//go:wasmimport raylib _free
//go:noescape
func free(cptr)

// copyToC copies a Go type/struct to C memory. Useful for copying slices and structs.
//
// Destination C array must have enough space.
//
// NOTE: Value must be a type, it cannot be a slice.
// To pass a slice, use [unsafe.SliceData]
//
//go:wasmimport gojs CopyToC
//go:noescape
func copyToC(dstCArray cptr, srcSize cptr, Value any)

// copies C memory to a Go pointer. Useful for copying C structs into Go structs
//
// example usage:
//
//	type Person struct{
//	 Age string
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
func copyToGo(dstGoPtr unsafe.Pointer, size cptr, src cptr)

// The alocated C string lives on the raylib heap and must be free()'d
//
//go:wasmimport gojs CStringFromGoString
//go:noescape
func cStringFromGoString(string) cptr

// allocValueInC allocates a copy of a concrete type (not a slice) in C memory and returns a cptr to it.
//
// NOTE: v cannot be a pointer
//
// NOTE: For slices use [allocSliceInC]
func allocValueInC[T any](Value T) cptr {
	size := cptr(unsafe.Sizeof(Value))
	// allocate C array to hold Value
	ptr := malloc(size)
	copyToC(ptr, size, Value)
	return ptr
}

// allocValueInC allocates a copy of a slice in C memory and returns a cptr to it.
//
// NOTE: Value MUST be a slice
//
// NOTE: For slices use [allocSliceInC]
func allocSliceInC[Slice ~[]E, E any](s Slice) cptr {
	// size of the slice's underlying array in bytes
	sliceSize := cptr(unsafe.Sizeof(s[0])) * cptr(len(s))
	// allocate C array to hold Value
	ptr := malloc(sliceSize)
	// copy underlying array memory to C
	copyToC(ptr, sliceSize, unsafe.SliceData(s))
	return ptr
}

// copyValueToGo copies a value from C memory to Go memory.
// Useful for copying structs
//
// NOTE: Slices are not supported. Use [copyArrayToGo]
func copyValueToGo[T any](srcPtr cptr) T {
	var value T
	size := cptr(unsafe.Sizeof(value))
	copyToGo(unsafe.Pointer(&value), size, srcPtr)
	return value
}

// copyArrayToGo copies a C array into a Go Slice.
//
// It copies bytes to the underlying array of the slice.
func copyArrayToGo[Slice ~[]E, E any](s Slice, srcPtr cptr) {
	// size of underlying array
	size := cptr(unsafe.Sizeof(s[0])) * cptr(len(s))
	dstPtr := unsafe.SliceData(s)
	copyToGo(unsafe.Pointer(dstPtr), size, srcPtr)
}

//go:wasmimport gojs Alert
//go:noescape
func alert(string)

// Use this instead of a for loop on web platform
func SetMain(UpdateAndDrawFrame func()) {
	var updateLoop js.Func
	updateLoop = js.FuncOf(func(this js.Value, args []js.Value) any {
		UpdateAndDrawFrame()
		js.Global().Call("requestAnimationFrame", updateLoop)
		return nil
	})
	js.Global().Call("requestAnimationFrame", updateLoop)
}
