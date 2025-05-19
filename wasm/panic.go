package wasm

import (
	"fmt"
	"syscall/js"
)

// panic does an alert and then does a go panic
func Panic(message ...any) {
	msg := fmt.Sprint(message...)
	alert := js.Global().Get("alert")
	alert.Invoke(msg)
	panic(msg)
}
