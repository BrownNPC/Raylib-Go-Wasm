module github.com/BrownNPC/Raylib-Go-Wasm/raygui

require (
	github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime v0.0.0-20260421110350-7c24b2d5e6d3
	github.com/gen2brain/raylib-go/raylib v0.55.1
)

require (
	github.com/ebitengine/purego v0.7.1 // indirect
	golang.org/x/exp v0.0.0-20240506185415-9bf2ced13842 // indirect
	golang.org/x/sys v0.20.0 // indirect
)

replace github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime => ../wasm-runtime

go 1.26.1
