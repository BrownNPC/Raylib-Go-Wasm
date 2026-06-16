module github.com/BrownNPC/Raylib-Go-Wasm/raygui

require (
	github.com/BrownNPC/Raylib-Go-Wasm/raylib v0.0.0-20260421110350-7c24b2d5e6d3
	github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime v0.0.0-20260421110350-7c24b2d5e6d3
)

require github.com/BrownNPC/wasm-ffi-go v1.3.0 // indirect

replace github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime => ../wasm-runtime

replace github.com/BrownNPC/Raylib-Go-Wasm/raylib => ../raylib

go 1.26.1
