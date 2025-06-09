package main

import (
	"embed"

	rl "github.com/gen2brain/raylib-go/raylib"
)

//go:embed assets
var ASSETS embed.FS
func init() {
	rl.AddFileSystem(ASSETS)
}

func main() {
	rl.InitWindow(800, 450, "raylib [audio] example - sound loading and playing")

	rl.InitAudioDevice()

	fxWav := rl.LoadSound("assets/weird.wav")
	fxOgg := rl.LoadSound("assets/tanatana.ogg")
	
	rl.SetTargetFPS(60)

	update := func() {
		if rl.IsKeyPressed(rl.KeySpace) {
			rl.PlaySound(fxWav)
		}
		if rl.IsKeyPressed(rl.KeyEnter) {
			rl.PlaySound(fxOgg)
		}

		rl.BeginDrawing()

		rl.ClearBackground(rl.RayWhite)

		rl.DrawText("Press SPACE to PLAY the WAV sound!", 200, 180, 20, rl.LightGray)
		rl.DrawText("Press ENTER to PLAY the OGG sound!", 200, 220, 20, rl.LightGray)

		rl.EndDrawing()
	}
	rl.SetMainLoop(update)
	for !rl.WindowShouldClose() {
		update()
	}
	rl.UnloadSound(fxWav)
	rl.UnloadSound(fxOgg)

	rl.CloseAudioDevice()

	rl.CloseWindow()
}
