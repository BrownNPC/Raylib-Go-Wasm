//go:build js && wasm
package rl

// some functions need to be defined manually

import (
	"io/fs"
	"syscall/js"

	wasm "github.com/BrownNPC/Raylib-Go-Wasm/wasm"
)

// Use this instead of a for loop on web platform
func SetMainLoop(UpdateAndDrawFrame func()) {
	wasm.SetMainLoop(UpdateAndDrawFrame)
	<-make(chan struct{}, 0)
}




// Use this to initialize the internal wasm filesystem so asset loading works
// pass it an embed.FS 
func SetFileSystem(efs fs.FS) {
	wasm.AddFileSystem(efs)
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

var initWindow = wasm.Proc("InitWindow")

// InitWindow - Initialize window and OpenGL context
func InitWindow(width int32, height int32, title string) {
	if width == 0 {
		width = int32(js.Global().Get("innerWidth").Int())
	}
	if height == 0 {
		height = int32(js.Global().Get("innerHeight").Int())
	}
	_, fl := initWindow.Call(width, height, title)
	wasm.Free(fl...)
}
