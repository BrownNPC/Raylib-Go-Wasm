package rl

import "github.com/BrownNPC/Raylib-Go-Wasm/wasm"

var loadTexture = wasm.Func[Texture2D]("LoadTexture")
var loadFont = wasm.Func[Font]("LoadFont")
var loadFontEx = wasm.Func[Font]("LoadFontEx")
var loadModel = wasm.Func[Model]("LoadModel")
var loadWave = wasm.Func[Wave]("LoadWave")
var loadSound= wasm.Func[Sound]("LoadSound")
var loadMusicStream= wasm.Func[Music]("LoadMusicStream")
