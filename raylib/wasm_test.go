//go:build js

package rl

import (
	"reflect"
	"testing"
)

// Test copyValueToC + copyValueToGo round-trip for a struct and for a primitive.
func TestCopyValueToCAndBack(t *testing.T) {
	type Person struct {
		Age   int32
		Score float32
	}

	original := Person{Age: 42, Score: 3.14}
	// copy struct to C
	cptr := copyValueToC(original)
	if cptr == 0 {
		t.Fatalf("copyValueToC returned null pointer")
	}
	// ensure we free at the end
	defer free(cptr)

	var got Person
	copyValueToGo(cptr, &got)

	if !reflect.DeepEqual(original, got) {
		t.Fatalf("person round-trip mismatch: want %+v, got %+v", original, got)
	}

	// test primitive type (int64)
	var originalInt int64 = -1234567890
	cptr2 := copyValueToC(originalInt)
	if cptr2 == 0 {
		t.Fatalf("copyValueToC returned null pointer for primitive")
	}
	defer free(cptr2)

	var gotInt int64
	copyValueToGo(cptr2, &gotInt)
	if originalInt != gotInt {
		t.Fatalf("primitive round-trip mismatch: want %d, got %d", originalInt, gotInt)
	}
}

// Test copySliceToC + copySliceToGo round-trip for a byte slice and for an int slice.
func TestCopySliceToCAndBack(t *testing.T) {
	// byte slice
	origBytes := []byte("hello, raylib wasm")
	cptr := copySliceToC(origBytes)
	if cptr == 0 {
		t.Fatalf("copySliceToC returned null pointer for bytes")
	}
	defer free(cptr)

	dstBytes := make([]byte, len(origBytes))
	copySliceToGo(cptr, dstBytes)
	if !reflect.DeepEqual(origBytes, dstBytes) {
		t.Fatalf("byte slice round-trip mismatch: want %v, got %v", origBytes, dstBytes)
	}

	// int slice
	origInts := []int32{1, 2, 3, 4, 5}
	cptrInts := copySliceToC(origInts)
	if cptrInts == 0 {
		t.Fatalf("copySliceToC returned null pointer for ints")
	}
	defer free(cptrInts)

	dstInts := make([]int32, len(origInts))
	copySliceToGo(cptrInts, dstInts)
	if !reflect.DeepEqual(origInts, dstInts) {
		t.Fatalf("int slice round-trip mismatch: want %v, got %v", origInts, dstInts)
	}
}

// Test copySliceToGo behavior when dst has len==0 but cap>0.
// The function should copy into the underlying array (up to cap).
func TestCopySliceToGoCopiesToUnderlyingArrayWhenLenZero(t *testing.T) {
	orig := []int32{10, 20, 30}
	cptr := copySliceToC(orig)
	if cptr == 0 {
		t.Fatalf("copySliceToC returned null pointer")
	}
	defer free(cptr)

	// dst has length 0 but capacity 3
	dst := make([]int32, 0, 3)
	// perform copy; after this the content should be in dst[:cap(dst)]
	copySliceToGo(cptr, dst)

	// inspect underlying array by slicing up to capacity
	gotUnderlying := dst[:cap(dst)]
	if !reflect.DeepEqual(orig, gotUnderlying) {
		t.Fatalf("underlying array mismatch: want %v, got %v", orig, gotUnderlying)
	}
}

// Test goString - constructs a C string via cString (wasm import) and reads it back via goString.
// Note: this test relies on cString and _cStringGetLength being available in the environment.
func TestGoString(t *testing.T) {
	const s = "testing goString 🚀"
	cstr := cString(s)
	if cstr == 0 {
		t.Fatalf("cString returned null pointer")
	}
	// cString allocates on raylib heap; free after test
	defer free(cstr)

	got := goString(cstr)
	if got != s {
		t.Fatalf("goString returned %q, want %q", got, s)
	}
}

