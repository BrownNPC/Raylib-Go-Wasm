module github.com/BrownNPC/Raylib-Go-Wasm/examples

go 1.26.1

require (
	github.com/gen2brain/raylib-go/raygui v0.0.0-00010101000000-000000000000
	github.com/gen2brain/raylib-go/raylib v0.60.0
)

replace (
	github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime => ../wasm-runtime

	github.com/gen2brain/raylib-go/raygui => ../raygui
	github.com/gen2brain/raylib-go/raylib => ../raylib
)

require (
	github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime v0.0.0-20260421110350-7c24b2d5e6d3 // indirect
	github.com/BrownNPC/wasm-ffi-go v1.3.0 // indirect
)
