package wasm

import "syscall/js"

func SetMainLoop(UpdateAndDrawFrame func()) {

	var updateLoop js.Func
	updateLoop = js.FuncOf(func(this js.Value, args []js.Value) any {
		UpdateAndDrawFrame()
		js.Global().Call("requestAnimationFrame", updateLoop)
		return nil
	})
	js.Global().Call("requestAnimationFrame", updateLoop)
}
