//go:build js && wasm

package rl

// some functions need to be defined manually

import (
	"image"
	"image/color"
	"io/fs"
	"syscall/js"

	"github.com/BrownNPC/wasm-ffi-go"
)

// DEPRECATED: use SetMain instead.
var SetMainLoop = SetMain

// Use this instead of a for loop on web platform
func SetMain(UpdateAndDrawFrame func()) {
	wasm.SetMainLoop(UpdateAndDrawFrame)
	<-make(chan struct{}, 0)
}

// Copy embed.FS to wasm memory. This must be called before loading assets
// pass it an embed.FS
func AddFileSystem(efs fs.FS) {
	wasm.AddFileSystem(efs)
}

// UNSUPPORTED: USE SetMainLoop
func WindowShouldClose() bool {
	wasm.Panic("WindowShouldClose is unsupported on the web, use SetMainLoop")
	return true
}

var setTraceLogCallback = wasm.Proc("SetTraceLogCallback")

// SetTraceLogCallback - Set custom trace log
func SetTraceLogCallback(fn TraceLogCallbackFun) {
	_, fl := setTraceLogCallback.Call(js.FuncOf(func(this js.Value, args []js.Value) any {
		fn(args[0].Int(), args[1].String())
		return nil
	}))
	wasm.Free(fl...)
}

var initWindow = wasm.Proc("InitWindow")

// InitWindow - Initialize window and OpenGL context
func InitWindow(width int32, height int32, title string) {
	if width == 0 {
		width = int32(js.Global().Get("innerWidth").Int())
	}
	if height == 0 {
		height = int32(js.Global().Get("innerHeight").Int())
	}
	_, fl := initWindow.Call(width, height, title)
	wasm.Free(fl...)
}

var loadFontEx = wasm.Func[Font]("LoadFontEx")

// LoadFontEx - Load font from file with extended parameters, use NULL for codepoints and 0 for codepointCount to load the default character setFont
func LoadFontEx(fileName string, fontSize int32, codepoints []rune, runesNumber ...int32) Font {
	codepointCount := int32(len(codepoints))
	if len(runesNumber) > 0 {
		codepointCount = int32(runesNumber[0])
	}

	// Handle empty codepoints slice by passing nil
	var codepointsToPass any = codepoints
	if len(codepoints) == 0 {
		codepointsToPass = nil
	}

	ret, fl := loadFontEx.Call(fileName, fontSize, codepointsToPass, codepointCount)
	v := wasm.ReadStruct[Font](ret)
	wasm.Free(fl...)
	return v
}

// NewImageFromImage - Returns new Image from Go image.Image

// NewImageFromImage - Returns new Image from Go image.Image
func NewImageFromImage(img image.Image) *Image {
	size := img.Bounds().Size()

	ret := GenImageColor(size.X, size.Y, White)

	for y := range size.Y {
		for x := range size.X {
			col := img.At(x, y)
			r, g, b, a := col.RGBA()
			rcolor := NewColor(uint8(r>>8), uint8(g>>8), uint8(b>>8), uint8(a>>8))
			ImageDrawPixel(ret, int32(x), int32(y), rcolor)
		}
	}
	return ret
}

// GenImageColor - Generate image: plain color
func GenImageColor(width int, height int, col color.RGBA) *Image {
	ret, fl := genImageColor.Call(width, height, wasm.Struct(col))
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return &v
}

// LoadTextureFromImage - Load texture from image data
func LoadTextureFromImage(image *Image) Texture2D {
	ret, fl := loadTextureFromImage.Call(wasm.Struct(*image))
	v := wasm.ReadStruct[Texture2D](ret)
	wasm.Free(fl...)
	return v
}

// ImageDrawPixel - Draw pixel within an image
func ImageDrawPixel(dst *Image, posX int32, posY int32, col color.RGBA) {
	_, fl := imageDrawPixel.Call(wasm.Struct(*dst), posX, posY, wasm.Struct(col))
	wasm.Free(fl...)
}
