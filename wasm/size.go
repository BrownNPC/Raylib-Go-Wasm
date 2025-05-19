package wasm

import (
	"reflect"
)

// SizeOf returns the byte-size of the concrete type of `zero`.
// • If zero is a nil interface/pointer/slice/maps/etc., it returns 0.
// • If zero is *T, it returns the size of T.
// • Panics if the type isn’t a fixed-size POD (e.g. slice, map, string, chan, func).
func SizeOf[T any](zero T) (uintptr, reflect.Kind) {
	t := reflect.TypeOf(zero)
	if t == nil || t.Size() == 0 {
		// caller passed e.g. nil or the zero of an interface type
		return 0, reflect.Invalid
	}

	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}

	// // Only allow fixed-size types
	// switch t.Kind() {
	// case reflect.Bool,
	// 	reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64,
	// 	reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64,
	// 	reflect.Uintptr,
	// 	reflect.Float32, reflect.Float64,
	// 	reflect.String, reflect.Array,reflect.Slice,
	// 	reflect.Struct:
	// 	// ok
	// default:
	// 	Panic(fmt.Sprintf("SizeOf: unsupported type %s (kind %s)", t, t.Kind()))
	// }
	// 4) t.Size() gives the in-memory size, including padding
	return t.Size(), t.Kind()
}
