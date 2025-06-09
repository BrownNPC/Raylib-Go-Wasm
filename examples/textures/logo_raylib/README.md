## Loading assets tutorial

first make a regular project
```go
package main
import (
	"github.com/gen2brain/raylib-go/raylib"
)
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
```

if you run this code, the texture will fail to load.


We need to copy our texture into our .wasm file


add this code before your main function
```go
// REQUIRED CODE FOR LOADING ASSETS ON WEB
//
//go:embed raylib_logo.png
var ASSETS embed.FS

func init() {
	rl.AddFileSystem(ASSETS)
}
```
the most important line is `//go:embed` this is a builtin way to store files and folders inside our binary
Right now we just tell it to store `raylib_logo.png` which is next to our `main.go` but we could also tell it to store an entire folder

The `init` function is called by the go runtime. Inside it we just copy the embed.FS's contents into the wasm virtual filesystem

also see https://github.com/BrownNPC/Raylib-Go-Wasm/tree/master/examples/audio/sound_loading
