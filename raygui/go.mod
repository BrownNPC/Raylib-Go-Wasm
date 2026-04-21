module github.com/BrownNPC/Raylib-Go-Wasm/raygui

require github.com/BrownNPC/Raylib-Go-Wasm/raylib v0.0.0-20260126231012-27bc0271203c

require (
	github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime v0.0.0-20260421110350-7c24b2d5e6d3 // indirect
	github.com/BrownNPC/wasm-ffi-go v1.2.0 // indirect
)

replace (
	github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime => ../wasm-runtime
)

go 1.26.1
