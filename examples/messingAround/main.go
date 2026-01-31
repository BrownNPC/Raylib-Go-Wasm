//go:build js

package main

import (
	rl "github.com/gen2brain/raylib-go/raylib"
)

func main() {
	rl.InitWindow(300, 300, "We are on web bois")
	rl.SetMain(func() {
		rl.BeginDrawing()
		rl.EndDrawing()
	})
}
