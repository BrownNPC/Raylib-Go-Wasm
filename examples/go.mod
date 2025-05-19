module github.com/BrownNPC/Raylib-Go-Wasm/examples

go 1.24.1

replace github.com/gen2brain/raylib-go/raylib => ../raylib

replace github.com/BrownNPC/Raylib-Go-Wasm/wasm => ../wasm

require github.com/gen2brain/raylib-go/raylib v0.0.0-00010101000000-000000000000

require github.com/BrownNPC/Raylib-Go-Wasm/wasm v0.0.0-20250519111955-3a1bd02edef2 // indirect
