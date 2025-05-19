package wasm

import (
	"fmt"
	"slices"
	"unsafe"
)

// this does NOT allocate memory, it only gives memory of the struct.
// The returned byte slice will reference the same memory as the struct.
func structRawMemory[T any](t *T) []byte {
	var ptrToT unsafe.Pointer = unsafe.Pointer(t)

	// Cast that pointer to a pointer to the first byte
	var bytePtr *byte = (*byte)(ptrToT)

	// Determine the size of the struct in bytes
	var size uintptr = unsafe.Sizeof(*t)

	// Create a byte slice from the byte pointer with the given size
	var byteSlice []byte = unsafe.Slice(bytePtr, size)

	// Return the byte slice
	return byteSlice
}

// make a copy of the struct's memory.
// The struct fields must not contain: strings, slices, pointers, or interfaces
func StructToBytes[T any](t T) []byte {
	return slices.Clone(structRawMemory(&t))
}

// BytesToStruct copies len(b) bytes into a new value of type T and returns it.
// Panics if b is too short.
func BytesToStruct[T any](b []byte) T {
	var result T
	size := unsafe.Sizeof(result)
	if uintptr(len(b)) < size {
		Panic(fmt.Sprintf("byte slice too short for type %T", result))
	}
	dst := structRawMemory(&result)

	//Copy the input bytes into result’s memory
	copy(dst, b)

	// result holds the binary data and we can return it
	return result
}

// Convert struct to a struct argument
func Struct[T any](t T) structArg {
	return structArg{
		mem: copyToWASM(StructToBytes(t)), size: unsafe.Sizeof(t),
	}
}

// Read a struct from a Return value
func ReadStruct[T any](r ReturnValue) T {
	v, ok := r.([]byte)
	if !ok {
		var name T
		Panic(fmt.Sprintf("Invalid return value for %T", name))
	}
	return BytesToStruct[T](v)
}
