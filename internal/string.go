package wasm
// A null-terminated string
type String []byte

// implement Component interface
func (s String) ToBytes() []byte {
	return s
}
// convert Go string to a null-terminated C string
func ToString(s string) String {
	return String(append([]byte(s), 0))
}
