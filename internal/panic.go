package wasm

import "syscall/js"

// panic does an alert and then does a go panic
func Panic(msg string) {
	alert := js.Global().Get("alert")
	alert.Invoke(msg)
	panic(msg)
}
