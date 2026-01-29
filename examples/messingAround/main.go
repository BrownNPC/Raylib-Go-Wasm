//go:build js

package main

import rl "github.com/gen2brain/raylib-go/raylib"

func main() {
	rl.InitWindow(0,0,"Hello WASM")
}
