//go:build js

package main

import (
	rg "github.com/gen2brain/raylib-go/raygui"
	rl "github.com/gen2brain/raylib-go/raylib"
)

func main() {
	rl.InitWindow(500, 500, "RayGUI Example")

	update := func() {
		rl.BeginDrawing()
		rl.ClearBackground(rg.GetStyle(rg.DEFAULT, rg.BASE_COLOR_PRESSED).AsColor())
		rl.EndDrawing()
	}
	rl.SetMain(update)
}
