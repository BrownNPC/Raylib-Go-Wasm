//go:build js

package main

import rl "github.com/gen2brain/raylib-go/raylib"

func main() {
	rl.SetMain(func() {
		rl.BeginDrawing()
		rl.EndDrawing()
	})
}
