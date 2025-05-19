package rl

import (
	"syscall/js"

	wasm "main.wasm/internal"
)
// Use this instead of a for loop on web platform
func SetMainLoop(UpdateAndDrawFrame func()) {
	wasm.SetMainLoop(UpdateAndDrawFrame)
	select {}
}

// UNSUPPORTED: USE SetMainLoop
func WindowShouldClose() bool {
	wasm.Panic("WindowShouldClose is unsupported on the web, use SetMainLoop")
	return true
}


var setTraceLogCallback = wasm.Proc("SetTraceLogCallback")
// SetTraceLogCallback - Set custom trace log
func SetTraceLogCallback(fn TraceLogCallbackFun) {
	_, fl := setTraceLogCallback.Call(js.FuncOf(func(this js.Value, args []js.Value) any {
		fn(args[0].Int(), args[1].String())
		return nil
	}))
	wasm.Free(fl...)
}
