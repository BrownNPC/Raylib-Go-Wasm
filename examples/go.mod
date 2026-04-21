module github.com/BrownNPC/Raylib-Go-Wasm/examples

go 1.26.1

replace github.com/gen2brain/raylib-go/raylib => ../raylib

replace github.com/gen2brain/raylib-go/raygui => ../raygui

require (
	github.com/gen2brain/raylib-go/raygui v0.0.0-00010101000000-000000000000
	github.com/gen2brain/raylib-go/raylib v0.0.0-00010101000000-000000000000
)

require (
	github.com/BrownNPC/Raylib-Go-Wasm/raylib v0.0.0-20260126231012-27bc0271203c // indirect
	github.com/BrownNPC/wasm-ffi-go v1.2.0 // indirect
)
