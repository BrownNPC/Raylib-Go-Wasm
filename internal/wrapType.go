package wasm

// A wrapped component is useful for convering primitive types to a Component
type WrappedComponent[T any] struct {
	v T
}

func (c WrappedComponent[T]) ToBytes() []byte {
	return StructToBytes(c.v)
}

// A wrapped component is useful for convering primitive types to a Component
// The type's size MUST be known at compile time. that means no strings, or slices. But arrays, ints, bools etc. are allowed.
func Wrap[T any](t T) Component {
	return WrappedComponent[T]{v: t}
}
