package rl

import (
	"unsafe"
)

// cptr is a pointer to raylib wasm memory
type cptr = int32

// Allocates memory on raylib heap
//
//go:wasmimport raylib _malloc
//go:noescape
func malloc(size int32) cptr

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
func copyToC(dstCArray cptr, srcSize int32, Value any)

// The alocated C string lives on the raylib heap and must be free()'d
//go:wasmimport gojs CStringFromGoString
//go:noescape
func cStringFromGoString(string) cptr


// allocValueInC allocates a copy of a concrete type (not a slice) in C memory and returns a cptr to it.
//
// NOTE: v cannot be a pointer
//
// NOTE: For slices use [allocSliceInC]
func allocValueInC[T any](Value T) cptr {
	size := int32(unsafe.Sizeof(Value))
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
	sliceSize := int32(unsafe.Sizeof(s[0])) * int32(len(s))

	// allocate C array to hold Value
	ptr := malloc(sliceSize)

	// copy underlying array memory to C
	copyToC(ptr, sliceSize, unsafe.SliceData(s))

	return ptr
}

