// Package rl provides raylib-go compatible WASM bindings
package rl

import wasm "main.wasm/internal"

var (
	getCollisionRec = wasm.Func[Rectangle]("GetCollisionRec")
	initWindow      = wasm.Proc("InitWindow")
)

func InitWindow(width int32, height int32, title string) {
	wasm.Call(initWindow, width, height, title)
}

func GetCollisionRec(a, b Rectangle) Rectangle {
	ret := wasm.Call(getCollisionRec, wasm.Struct(a), wasm.Struct(b))
	return wasm.ReadStruct[Rectangle](ret)
}
