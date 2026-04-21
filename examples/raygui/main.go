//go:build js

package main

import (
	"github.com/gen2brain/raylib-go/raygui"
	rl "github.com/gen2brain/raylib-go/raylib"
)

func main() {
	rl.InitWindow(500, 500, "RayGUI Example")

	update := func() {
		rl.BeginDrawing()
		rl.ClearBackground(raygui.GetStyle(raygui.DEFAULT, raygui.BASE_COLOR_PRESSED).AsColor())
		rl.EndDrawing()
	}
	rl.SetMain(update)
}
