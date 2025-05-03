package rl

// raylib types should implement wasm.Component
import wasm "main.wasm/internal"

func (r Rectangle) ToBytes() []byte {
	return wasm.StructToBytes(r)
}
func ToRectangle(b []byte) Rectangle {
	return wasm.BytesToStruct[Rectangle](b)
}
