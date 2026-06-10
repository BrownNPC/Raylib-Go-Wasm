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

const (
	// Texture parameters (equivalent to OpenGL defines)
	TextureWrapS     = 0x2802 // GL_TEXTURE_WRAP_S
	TextureWrapT     = 0x2803 // GL_TEXTURE_WRAP_T
	TextureMagFilter = 0x2800 // GL_TEXTURE_MAG_FILTER
	TextureMinFilter = 0x2801 // GL_TEXTURE_MIN_FILTER

	TextureFilterNearest          = 0x2600 // GL_NEAREST
	TextureFilterLinear           = 0x2601 // GL_LINEAR
	TextureFilterMipNearest       = 0x2700 // GL_NEAREST_MIPMAP_NEAREST
	TextureFilterNearestMipLinear = 0x2702 // GL_NEAREST_MIPMAP_LINEAR
	TextureFilterLinearMipNearest = 0x2701 // GL_LINEAR_MIPMAP_NEAREST
	TextureFilterMipLinear        = 0x2703 // GL_LINEAR_MIPMAP_LINEAR
	TextureFilterAnisotropic      = 0x3000 // Anisotropic filter (custom identifier)
	TextureMipmapBiasRatio        = 0x4000 // Texture mipmap bias, percentage ratio (custom identifier)

	TextureWrapRepeat       = 0x2901 // GL_REPEAT
	TextureWrapClamp        = 0x812F // GL_CLAMP_TO_EDGE
	TextureWrapMirrorRepeat = 0x8370 // GL_MIRRORED_REPEAT
	TextureWrapMirrorClamp  = 0x8742 // GL_MIRROR_CLAMP_EXT

	// Matrix modes (equivalent to OpenGL)
	Modelview  = 0x1700 // GL_MODELVIEW
	Projection = 0x1701 // GL_PROJECTION
	Texture    = 0x1702 // GL_TEXTURE

	// Primitive assembly draw modes
	Lines     = 0x0001 // GL_LINES
	Triangles = 0x0004 // GL_TRIANGLES
	Quads     = 0x0007 // GL_QUADS
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

func SetClipPlanes(nearPlane, farPlane float64) {
	_, fl := setClipPlanes.Call(nearPlane, farPlane)
	wasm.Free(fl...)
}

func DisableBackfaceCulling() {
	_, fl := disableBackfaceCulling.Call()
	wasm.Free(fl...)
}

func PushMatrix() {
	_, fl := pushMatrix.Call()
	wasm.Free(fl...)
}

func Translatef(x float32, y float32, z float32) {
	_, fl := translatef.Call(x, y, z)
	wasm.Free(fl...)
}

func Begin(quads int) {
	_, fl := begin.Call(quads)
	wasm.Free(fl...)
}

func End() {
	_, fl := end.Call()
	wasm.Free(fl...)
}

func PopMatrix() {
	_, fl := popMatrix.Call()
	wasm.Free(fl...)
}

func SetTexture(id uint32) {
	_, fl := setTexture.Call(id)
	wasm.Free(fl...)
}

func TexCoord2f(x float32, y float32) {
	_, fl := texCoord2f.Call(x, y)
	wasm.Free(fl...)
}

func Vertex3f(x float32, y float32, z float32) {
	_, fl := vertex3f.Call(x, y, z)
	wasm.Free(fl...)
}

func Color4f(x float32, y float32, z float32, w float32) {
	_, fl := color4f.Call(x, y, z, w)
	wasm.Free(fl...)
}
