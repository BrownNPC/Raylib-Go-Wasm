//go:build !local

package rl

import wasm "main.wasm/internal"

// LoadTexture - Load texture from file into GPU memory (VRAM)
func LoadTexture(fileName string) Texture2D {
	ret, fl := loadTexture.Call(fileName)
	v := wasm.ReadStruct[Texture2D](ret)
	wasm.Free(fl...)
	return v
}
// LoadImage - Load image from file into CPU memory (RAM)
func LoadImage(fileName string) *Image {
	var zero *Image
	return zero
}

// LoadImageRaw - Load image from RAW file data
func LoadImageRaw(fileName string, width int32, height int32, format PixelFormat, headerSize int32) *Image {
	var zero *Image
	return zero
}

// LoadImageAnim - Load image sequence from file (frames appended to image.data)
func LoadImageAnim(fileName string, frames *int32) *Image {
	var zero *Image
	return zero
}


// LoadFont - Load font from file into GPU memory (VRAM)
func LoadFont(fileName string) Font {
	ret, fl := loadFont.Call(fileName)
	v := wasm.ReadStruct[Font](ret)
	wasm.Free(fl...)
	return v
}

// LoadFontEx - Load font from file with extended parameters, use NULL for codepoints and 0 for codepointCount to load the default character setFont
func LoadFontEx(fileName string, fontSize int32, codepoints []rune, runesNumber ...int32) Font {
	ret, fl := loadFontEx.Call(fileName, fontSize, codepoints, runesNumber)
	v := wasm.ReadStruct[Font](ret)
	wasm.Free(fl...)
	return v
} // LoadModel - Load model from files (meshes and materials)
func LoadModel(fileName string) Model {
	ret, fl := loadModel.Call(fileName)
	v := wasm.ReadStruct[Model](ret)
	wasm.Free(fl...)
	return v
} // LoadMaterials - Load materials from model file
func LoadMaterials(fileName string) []Material {
	var zero []Material
	return zero
}

// LoadModelAnimations - Load model animations from file
func LoadModelAnimations(fileName string) []ModelAnimation {
	var zero []ModelAnimation
	return zero
}

// LoadWave - Load wave data from file
func LoadWave(fileName string) Wave {
	ret, fl := loadWave.Call(fileName)
	v := wasm.ReadStruct[Wave](ret)
	wasm.Free(fl...)
	return v
}

// LoadSound - Load sound from file
func LoadSound(fileName string) Sound {
	ret, fl := loadSound.Call(fileName)
	v := wasm.ReadStruct[Sound](ret)
	wasm.Free(fl...)
	return v
}

// LoadMusicStream - Load music stream from file
func LoadMusicStream(fileName string) Music {
	ret, fl := loadMusicStream.Call(fileName)
	v := wasm.ReadStruct[Music](ret)
	wasm.Free(fl...)
	return v
}
