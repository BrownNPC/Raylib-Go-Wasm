//go:build js

package raygui

import (
	"github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime"
)

func makeStringArray(size int) wasm.Ptr {
	var arr = make([]wasm.Ptr, size)
	ptr, _ := wasm.CopySliceToC(arr)
	return ptr
}

func setStringArray(arr wasm.Ptr, idx int, cstring wasm.Ptr) {
	wasm.CopyToC(&cstring, arr+(wasm.Ptr(idx*wasm.PTR_SIZE)))
}

// TODO: do this in the runtime if possible.
// CStringArray represents an array of pointers to NULL terminated C strings,
// the array itself is terminated with a NULL
type CStringArray struct {
	Pointer wasm.Ptr
	Length  int
}

// NewCStringArray returns an instance of CStringArray
func NewCStringArray() *CStringArray {
	return &CStringArray{}
}

// NewCStringArray returns an instance of CStringArray
func NewCStringArrayFromPointer(p wasm.Ptr) *CStringArray {
	length := wasm.CStringArrayGetLength(p)
	return &CStringArray{
		Pointer: p,
		Length:  int(length),
	}
}

// NewCStringArrayFromSlice makes an instance of CStringArray then copy the
// input slice to it. The returned CStringArray takes ownership of the allocated
// C memory and must be Free()d by the caller.
func NewCStringArrayFromSlice(ss []string) *CStringArray {
	var arr CStringArray
	arr.Copy(ss)
	return &arr
}

// TODO: do this in the runtime if possible.
// ToSlice converts CStringArray to Go slice of strings
func (arr *CStringArray) ToSlice() []string {
	if arr.Length == 0 || arr.Pointer == 0 {
		return []string{}
	}

	var ss []string
	p := arr.Pointer
	//NOTE: upstream raylib-go does this wrong.
	for i := 0; i < arr.Length; i++ {
		var cs wasm.Ptr
		wasm.CopyToGo(p, wasm.PTR_SIZE, &cs)
		if cs == 0 { // skip NULL - the last element
			break
		}
		ss = append(ss, wasm.GoString(cs))
		p += wasm.PTR_SIZE
	}
	return ss
}

// TODO: do this in the runtime if possible.
// Copy converts Go slice of strings to C underlying struct of CStringArray
func (arr *CStringArray) Copy(ss []string) {
	// Free existing C memory if any
	if arr.Pointer != 0 || arr.Length > 0 {
		arr.Free()
	}

	arr.Length = len(ss) + 1 // one more element for NULL at the end
	arr.Pointer = makeStringArray(arr.Length)

	for i, s := range ss {
		str := wasm.CString(s)
		// copy the pointer into the array.
		// A CStringArray is an array of pointers.
		wasm.CopyToC(&str, arr.Pointer+wasm.Ptr(i*wasm.PTR_SIZE))
	}
}

// TODO: do this in the runtime if possible.
//
// Free frees C underlying struct of CStringArray
// MUST call this method after using CStringArray
// Exception: If you use NewCStringArrayFromPointer() to create CStringArray object
// and you use other way to free C underlying structure pointed by the pointer,
// then don't need to call Free()
func (arr *CStringArray) Free() {
	for i := range wasm.Ptr(arr.Length) {
		idx := (i * wasm.PTR_SIZE)
		var cs wasm.Ptr
		wasm.CopyToGo(arr.Pointer+idx, wasm.PTR_SIZE, &cs)
		if cs == 0 { // skip NULL - the last element
			break
		}
		wasm.Free(cs)
	}
	wasm.Free(arr.Pointer)
}
