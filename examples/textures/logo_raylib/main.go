package main

import (
	"embed"

	"github.com/gen2brain/raylib-go/raylib"
)

// REQUIRED CODE FOR LOADING ASSETS ON WEB
//
//go:embed raylib_logo.png
var ASSETS embed.FS

func init() {
	rl.AddFileSystem(ASSETS)
}

func main() {
	screenWidth := int32(800)
	screenHeight := int32(450)

	rl.InitWindow(screenWidth, screenHeight, "raylib [textures] example - texture loading and drawing")

	// NOTE: Textures MUST be loaded after Window initialization (OpenGL context is required)
	texture := rl.LoadTexture("raylib_logo.png")

	rl.SetTargetFPS(60)

	update := func() {
		rl.BeginDrawing()

		rl.ClearBackground(rl.RayWhite)
		rl.DrawTexture(texture, screenWidth/2-texture.Width/2, screenHeight/2-texture.Height/2, rl.White)
		rl.DrawText("this IS a texture!", 360, 370, 10, rl.Gray)

		rl.EndDrawing()
	}
	rl.SetMainLoop(update)
	for rl.WindowShouldClose() {
		update()
	}
	rl.UnloadTexture(texture)

	rl.CloseWindow()
}
