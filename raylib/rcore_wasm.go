//go:build js

package rl

import (
	"syscall/js"
	"unsafe"
)

// WindowShouldClose - Check if KeyEscape pressed or Close icon pressed
func WindowShouldClose() bool {
	const err = "WindowShouldClose is unsupported on the web, use SetMain"
	alert(err)
	panic(err)
}

//go:wasmimport raylib _InitWindow
func initWindow(width, height int32, cstr cptr)

// InitWindow - Initialize Window and OpenGL Graphics
func InitWindow(width int32, height int32, title string) {
	// prevents crash.
	if width == 0 {
		width = int32(js.Global().Get("innerWidth").Int())
	}
	if height == 0 {
		height = int32(js.Global().Get("innerHeight").Int())
	}
	ctitle := cString(title)
	defer free(ctitle)
	initWindow(width, height, ctitle)
}

// CloseWindow - Close Window and Terminate Context
//
//go:wasmimport raylib _CloseWindow
//go:noescape
func CloseWindow()

// IsWindowReady - Check if window has been initialized successfully
//
//go:wasmimport raylib _IsWindowReady
//go:noescape
func IsWindowReady() bool

// IsWindowFullscreen - Check if window is currently fullscreen
//
//go:wasmimport raylib _IsWindowFullscreen
//go:noescape
func IsWindowFullscreen() bool

// IsWindowHidden - Check if window is currently hidden
//
//go:wasmimport raylib _IsWindowHidden
//go:noescape
func IsWindowHidden() bool

// IsWindowMinimized - Check if window is currently minimized
//
//go:wasmimport raylib _IsWindowMinimized
//go:noescape
func IsWindowMinimized() bool

// IsWindowMaximized - Check if window is currently maximized
//
//go:wasmimport raylib _IsWindowMaximized
//go:noescape
func IsWindowMaximized() bool

// IsWindowFocused - Check if window is currently focused
//
//go:wasmimport raylib _IsWindowFocused
//go:noescape
func IsWindowFocused() bool

// IsWindowResized - Check if window has been resized
//
//go:wasmimport raylib _IsWindowResized
//go:noescape
func IsWindowResized() bool

// IsWindowState - Check if one specific window flag is enabled
//
//go:wasmimport raylib _IsWindowState
//go:noescape
func IsWindowState(flag uint32) bool

// SetWindowFocused - Sets the window to have focus
//
//go:wasmimport raylib _SetWindowFocused
//go:noescape
func SetWindowFocused()

// SetWindowState - Set window configuration state using flags
//
//go:wasmimport raylib _SetWindowState
//go:noescape
func SetWindowState(flags uint32)

// ClearWindowState - Clear window configuration state flags
//
//go:wasmimport raylib _ClearWindowState
//go:noescape
func ClearWindowState(flags uint32)

// ToggleFullscreen - Fullscreen toggle (only PLATFORM_DESKTOP)
//
//go:wasmimport raylib _ToggleFullscreen
//go:noescape
func ToggleFullscreen()

// ToggleBorderlessWindowed - Borderless fullscreen toggle (only PLATFORM_DESKTOP)
//
//go:wasmimport raylib _ToggleBorderlessWindowed
//go:noescape
func ToggleBorderlessWindowed()

// MaximizeWindow - Set window state: maximized, if resizable
//
//go:wasmimport raylib _MaximizeWindow
//go:noescape
func MaximizeWindow()

// MinimizeWindow - Set window state: minimized, if resizable
//
//go:wasmimport raylib _MinimizeWindow
//go:noescape
func MinimizeWindow()

// RestoreWindow - Set window state: not minimized/maximized
//
//go:wasmimport raylib _RestoreWindow
//go:noescape
func RestoreWindow()

// SetWindowIcon - Set icon for window (single image, RGBA 32bit, only PLATFORM_DESKTOP)
func SetWindowIcon(image Image) {}

// SetWindowIcons - Set icon for window (multiple images, RGBA 32bit, only PLATFORM_DESKTOP)
func SetWindowIcons(images []Image, count int32) {}

// SetWindowTitle - Set title for window
//
//go:wasmimport raylib _SetWindowTitle
//go:noescape
func setWindowTitle(title cptr)

// SetWindowTitle - Set title for window (only PLATFORM_DESKTOP)
func SetWindowTitle(title string) {
	ptr := cString(title)
	defer free(ptr)
	setWindowTitle(ptr)
}

// SetWindowPosition - Set window position on screen (only PLATFORM_DESKTOP)
//
//go:wasmimport raylib _SetWindowPosition
//go:noescape
func setWindowPosition(x, y int32)

// SetWindowPosition - Set window position on screen (only PLATFORM_DESKTOP)
func SetWindowPosition(x, y int) {
	cx := int32(x)
	cy := int32(y)
	setWindowPosition(cx, cy)
}

// SetWindowMonitor - Set monitor for the current window (fullscreen mode)
//
//go:wasmimport raylib _SetWindowMonitor
//go:noescape
func setWindowMonitor(monitor int32)

// SetWindowMonitor - Set monitor for the current window (fullscreen mode)
func SetWindowMonitor(monitor int) {
	cmonitor := (int32)(monitor)
	setWindowMonitor(cmonitor)
}

// SetWindowMinSize - Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)
//
//go:wasmimport raylib _SetWindowMinSize
//go:noescape
func setWindowMinSize(w, h int32)

// SetWindowMinSize - Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)
func SetWindowMinSize(w, h int) {
	cw := (int32)(w)
	ch := (int32)(h)
	setWindowMinSize(cw, ch)
}

//go:wasmimport raylib _SetWindowMaxSize
//go:noescape
func setWindowMaxSize(w, h int32)

// SetWindowMaxSize - Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE)
func SetWindowMaxSize(w, h int) {
	cw := (int32)(w)
	ch := (int32)(h)
	setWindowMaxSize(cw, ch)
}

//go:wasmimport raylib _SetWindowSize
//go:noescape
func setWindowSize(w, h int32)

// SetWindowSize - Set window dimensions
func SetWindowSize(w, h int) {
	cw := (int32)(w)
	ch := (int32)(h)
	setWindowSize(cw, ch)
}

// SetWindowOpacity - Set window opacity [0.0f..1.0f] (only PLATFORM_DESKTOP)
//
//go:wasmimport raylib _SetWindowOpacity
//go:noescape
func SetWindowOpacity(opacity float32)

// GetWindowHandle - Get native window handle
func GetWindowHandle() unsafe.Pointer {
	return nil
}

//go:wasmimport raylib _GetScreenWidth
//go:noescape
func getScreenWidth() int32

// GetScreenWidth - Get current screen width
func GetScreenWidth() int {
	ret := getScreenWidth()
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetScreenHeight
//go:noescape
func getScreenHeight() int32

// GetScreenHeight - Get current screen height
func GetScreenHeight() int {
	ret := getScreenHeight()
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetRenderWidth
//go:noescape
func getRenderWidth() int32

// GetRenderWidth - Get current render width (it considers HiDPI)
func GetRenderWidth() int {
	ret := getRenderWidth()
	v := (int)(ret)
	return v
}

// GetRenderHeight - Get current render height (it considers HiDPI)
//
//go:wasmimport raylib _GetRenderHeight
//go:noescape
func getRenderHeight() int32
func GetRenderHeight() int {
	ret := getRenderHeight()
	v := (int)(ret)
	return v
}

// GetMonitorCount - Get number of connected monitors
//
//go:wasmimport raylib _GetMonitorCount
//go:noescape
func getMonitorCount() int32

// GetMonitorCount - Get number of connected monitors
func GetMonitorCount() int {
	ret := getMonitorCount()
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetCurrentMonitor
//go:noescape
func getCurrentMonitor() int32

// GetCurrentMonitor - Get current monitor where window is placed
func GetCurrentMonitor() int {
	ret := getCurrentMonitor()
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetMonitorPosition
//go:noescape
func getMonitorPosition(vector2 cptr, monitor int32)

// GetMonitorPosition - Get specified monitor position
func GetMonitorPosition(monitor int) Vector2 {
	var v Vector2
	cmonitor := (int32)(monitor)

	ret := mallocV(v)
	defer free(ret)
	getMonitorPosition(ret, cmonitor)
	copyValueToGo(ret, &v)
	return v
}

//go:wasmimport raylib _GetMonitorWidth
//go:noescape
func getMonitorWidth(monitor int32) int32

// GetMonitorWidth - Get primary monitor width
func GetMonitorWidth(monitor int) int {
	cmonitor := (int32)(monitor)
	ret := getMonitorWidth(cmonitor)
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetMonitorHeight
//go:noescape
func getMonitorHeight(monitor int32) int32

// GetMonitorHeight - Get primary monitor height
func GetMonitorHeight(monitor int) int {
	cmonitor := (int32)(monitor)
	ret := getMonitorHeight(cmonitor)
	v := (int)(ret)
	return v
}

//
//go:wasmimport raylib _GetMonitorPhysicalWidth
//go:noescape
func getMonitorPhysicalWidth(monitor int32) int32

// GetMonitorPhysicalWidth - Get primary monitor physical width in millimetres
func GetMonitorPhysicalWidth(monitor int) int {
	cmonitor := (int32)(monitor)
	ret := getMonitorPhysicalWidth(cmonitor)
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetMonitorPhysicalHeight
//go:noescape
func getMonitorPhysicalHeight(monitor int32) int32

// GetMonitorPhysicalHeight - Get primary monitor physical height in millimetres
func GetMonitorPhysicalHeight(monitor int) int {
	cmonitor := (int32)(monitor)
	ret := getMonitorPhysicalHeight(cmonitor)
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetMonitorRefreshRate
//go:noescape
func getMonitorRefreshRate(monitor int32) int32

// GetMonitorRefreshRate - Get specified monitor refresh rate
func GetMonitorRefreshRate(monitor int) int {
	cmonitor := (int32)(monitor)
	ret := getMonitorRefreshRate(cmonitor)
	v := (int)(ret)
	return v
}

//go:wasmimport raylib _GetWindowPosition
//go:noescape
func getWindowPosition(vector2 cptr)

// GetWindowPosition - Get window position XY on monitor
func GetWindowPosition() Vector2 {
	var v Vector2
	ret := mallocV(v)
	defer free(ret)
	getWindowPosition(ret)
	copyValueToGo(ret, &v)
	return v
}

//go:wasmimport raylib _GetWindowScaleDPI
//go:noescape
func getWindowScaleDPI(vector2 cptr)

// GetWindowScaleDPI - Get window scale DPI factor
func GetWindowScaleDPI() Vector2 {
	var v Vector2
	ret := mallocV(v)
	defer free(ret)
	getWindowScaleDPI(ret)
	copyValueToGo(ret, &v)
	return v
}

// GetMonitorName - Get the human-readable, UTF-8 encoded name of the primary monitor
func GetMonitorName(monitor int) string { return "" }

// SetClipboardText - Set clipboard text content
//
//go:wasmimport raylib _SetClipboardText
//go:noescape
func setClipboardText(data cptr)
func SetClipboardText(data string) {
	cdata := cString(data)
	defer free(cdata)
	setClipboardText(cdata)
}

/*
// GetClipboardText - Get clipboard text content
func GetClipboardText() string {
	ret := getClipboardText()
	v := goString(ret)
	return v
}

// GetClipboardImage - Get clipboard image content
//
// Only works with SDL3 backend or Windows with GLFW/RGFW
func GetClipboardImage() Image {
	ret := getClipboardImage()
	v := newImageFromPointer(unsafe.Pointer(&ret))
	return *v
}

// EnableEventWaiting - Enable waiting for events on EndDrawing(), no automatic event polling
func EnableEventWaiting() {
	enableEventWaiting()
}

// DisableEventWaiting - Disable waiting for events on EndDrawing(), automatic events polling
func DisableEventWaiting() {
	disableEventWaiting()
}

// ClearBackground - Sets Background Color
func ClearBackground(col color.RGBA) {
	ccolor := colorCptr(col)
	clearBackground(*ccolor)
}

// BeginDrawing - Setup drawing canvas to start drawing
func BeginDrawing() {
	beginDrawing()
}

// EndDrawing - End canvas drawing and Swap Buffers (Double Buffering)
func EndDrawing() {
	endDrawing()
}

// BeginMode2D - Initialize 2D mode with custom camera
func BeginMode2D(camera Camera2D) {
	ccamera := camera.cptr()
	beginMode2D(*ccamera)
}

// EndMode2D - Ends 2D mode custom camera usage
func EndMode2D() {
	endMode2D()
}

// BeginMode3D - Initializes 3D mode for drawing (Camera setup)
func BeginMode3D(camera Camera) {
	ccamera := camera.cptr()
	beginMode3D(*ccamera)
}

// EndMode3D - Ends 3D mode and returns to default 2D orthographic mode
func EndMode3D() {
	endMode3D()
}

// BeginTextureMode - Initializes render texture for drawing
func BeginTextureMode(target RenderTexture2D) {
	ctarget := target.cptr()
	beginTextureMode(*ctarget)
}

// EndTextureMode - Ends drawing to render texture
func EndTextureMode() {
	endTextureMode()
}

// BeginScissorMode - Begins scissor mode (define screen area for following drawing)
func BeginScissorMode(x, y, width, height int32) {
	cx := (int32)(x)
	cy := (int32)(y)
	cwidth := (int32)(width)
	cheight := (int32)(height)
	beginScissorMode(cx, cy, cwidth, cheight)
}

// EndScissorMode - Ends scissor mode
func EndScissorMode() {
	endScissorMode()
}

// LoadShader - Load a custom shader and bind default locations
func LoadShader(vsFileName string, fsFileName string) Shader {
	cvsFileName := cString(vsFileName)
	defer free(unsafe.Pointer(cvsFileName))

	cfsFileName := cString(fsFileName)
	defer free(unsafe.Pointer(cfsFileName))

	if vsFileName == "" {
		cvsFileName = nil
	}

	if fsFileName == "" {
		cfsFileName = nil
	}

	ret := loadShader(cvsFileName, cfsFileName)
	v := newShaderFromPointer(unsafe.Pointer(&ret))

	return v
}

// LoadShaderFromMemory - Load shader from code strings and bind default locations
func LoadShaderFromMemory(vsCode string, fsCode string) Shader {
	cvsCode := cString(vsCode)
	defer free(unsafe.Pointer(cvsCode))

	cfsCode := cString(fsCode)
	defer free(unsafe.Pointer(cfsCode))

	if vsCode == "" {
		cvsCode = nil
	}

	if fsCode == "" {
		cfsCode = nil
	}

	ret := loadShaderFromMemory(cvsCode, cfsCode)
	v := newShaderFromPointer(unsafe.Pointer(&ret))

	return v
}

// IsShaderValid - Check if a shader is valid (loaded on GPU)
func IsShaderValid(shader Shader) bool {
	cshader := shader.cptr()
	ret := isShaderValid(*cshader)
	v := bool(ret)
	return v
}

// GetShaderLocation - Get shader uniform location
func GetShaderLocation(shader Shader, uniformName string) int32 {
	cshader := shader.cptr()
	cuniformName := cString(uniformName)
	defer free(unsafe.Pointer(cuniformName))

	ret := getShaderLocation(*cshader, cuniformName)
	v := (int32)(ret)
	return v
}

// GetShaderLocationAttrib - Get shader attribute location
func GetShaderLocationAttrib(shader Shader, attribName string) int32 {
	cshader := shader.cptr()
	cuniformName := cString(attribName)
	defer free(unsafe.Pointer(cuniformName))

	ret := getShaderLocationAttrib(*cshader, cuniformName)
	v := (int32)(ret)
	return v
}

// SetShaderValue - Set shader uniform value (float)
func SetShaderValue(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType) {
	cshader := shader.cptr()
	clocIndex := (int32)(locIndex)
	cvalue := (*float)(unsafe.Pointer(&value[0]))
	cuniformType := (int32)(uniformType)
	setShaderValue(*cshader, clocIndex, unsafe.Pointer(cvalue), cuniformType)
}

// SetShaderValueV - Set shader uniform value (float)
func SetShaderValueV(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType, count int32) {
	cshader := shader.cptr()
	clocIndex := (int32)(locIndex)
	cvalue := (*float)(unsafe.Pointer(&value[0]))
	cuniformType := (int32)(uniformType)
	ccount := (int32)(count)
	setShaderValueV(*cshader, clocIndex, unsafe.Pointer(cvalue), cuniformType, ccount)
}

// SetShaderValueMatrix - Set shader uniform value (matrix 4x4)
func SetShaderValueMatrix(shader Shader, locIndex int32, mat Matrix) {
	cshader := shader.cptr()
	clocIndex := (int32)(locIndex)
	cmat := mat.cptr()
	setShaderValueMatrix(*cshader, clocIndex, *cmat)
}

// SetShaderValueTexture - Set shader uniform value for texture (sampler2d)
func SetShaderValueTexture(shader Shader, locIndex int32, texture Texture2D) {
	cshader := shader.cptr()
	clocIndex := (int32)(locIndex)
	ctexture := texture.cptr()
	setShaderValueTexture(*cshader, clocIndex, *ctexture)
}

// UnloadShader - Unload a custom shader from memory
func UnloadShader(shader Shader) {
	cshader := shader.cptr()
	unloadShader(*cshader)
}

// GetMouseRay - Get a ray trace from mouse position
//
// Deprecated: Use [GetScreenToWorldRay] instead.
func GetMouseRay(mousePosition Vector2, camera Camera) Ray {
	return GetScreenToWorldRay(mousePosition, camera)
}

// GetScreenToWorldRay - Get a ray trace from screen position (i.e mouse)
func GetScreenToWorldRay(position Vector2, camera Camera) Ray {
	cposition := position.cptr()
	ccamera := camera.cptr()
	ret := getScreenToWorldRay(*cposition, *ccamera)
	v := newRayFromPointer(unsafe.Pointer(&ret))
	return v
}

// GetScreenToWorldRayEx - Get a ray trace from screen position (i.e mouse) in a viewport
func GetScreenToWorldRayEx(position Vector2, camera Camera, width, height int32) Ray {
	cposition := position.cptr()
	ccamera := camera.cptr()
	cwidth := (int32)(width)
	cheight := (int32)(height)
	ret := getScreenToWorldRayEx(*cposition, *ccamera, cwidth, cheight)
	v := newRayFromPointer(unsafe.Pointer(&ret))
	return v
}

// GetCameraMatrix - Returns camera transform matrix (view matrix)
func GetCameraMatrix(camera Camera) Matrix {
	ccamera := camera.cptr()
	ret := getCameraMatrix(*ccamera)
	v := newMatrixFromPointer(unsafe.Pointer(&ret))
	return v
}

// GetCameraMatrix2D - Returns camera 2d transform matrix
func GetCameraMatrix2D(camera Camera2D) Matrix {
	ccamera := camera.cptr()
	ret := getCameraMatrix2D(*ccamera)
	v := newMatrixFromPointer(unsafe.Pointer(&ret))
	return v
}

// GetWorldToScreen - Returns the screen space position from a 3d world space position
func GetWorldToScreen(position Vector3, camera Camera) Vector2 {
	cposition := position.cptr()
	ccamera := camera.cptr()
	ret := getWorldToScreen(*cposition, *ccamera)
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// GetScreenToWorld2D - Returns the world space position for a 2d camera screen space position
func GetScreenToWorld2D(position Vector2, camera Camera2D) Vector2 {
	cposition := position.cptr()
	ccamera := camera.cptr()
	ret := getScreenToWorld2D(*cposition, *ccamera)
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// GetWorldToScreenEx - Get size position for a 3d world space position
func GetWorldToScreenEx(position Vector3, camera Camera, width int32, height int32) Vector2 {
	cposition := position.cptr()
	ccamera := camera.cptr()
	cwidth := (int32)(width)
	cheight := (int32)(height)
	ret := getWorldToScreenEx(*cposition, *ccamera, cwidth, cheight)
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// GetWorldToScreen2D - Returns the screen space position for a 2d camera world space position
func GetWorldToScreen2D(position Vector2, camera Camera2D) Vector2 {
	cposition := position.cptr()
	ccamera := camera.cptr()
	ret := getWorldToScreen2D(*cposition, *ccamera)
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// SetTargetFPS - Set target FPS (maximum)
func SetTargetFPS(fps int32) {
	cfps := (int32)(fps)
	setTargetFPS(cfps)
}

// GetFPS - Returns current FPS
func GetFPS() int32 {
	ret := getFPS()
	v := (int32)(ret)
	return v
}

// GetFrameTime - Returns time in seconds for one frame
func GetFrameTime() float32 {
	ret := getFrameTime()
	v := (float32)(ret)
	return v
}

// GetTime - Return time in seconds
func GetTime() float64 {
	ret := getTime()
	v := (float64)(ret)
	return v
}

// Custom frame control functions
// NOTE: SwapScreenBuffer and PollInputEvents are intended for advanced users that want full control over the frame processing
// By default EndDrawing() does this job: draws everything + SwapScreenBuffer() + manage frame timing + PollInputEvents()
// To avoid that behaviour and control frame processes manually you can either enable in config.h: SUPPORT_CUSTOM_FRAME_CONTROL
// or add CGO_CFLAGS="-DSUPPORT_CUSTOM_FRAME_CONTROL=1" to your build

// SwapScreenBuffer - Swap back buffer to front buffer
func SwapScreenBuffer() {
	swapScreenBuffer()
}

// Register all input events
func PollInputEvents() {
	pollInputEvents()
}

// WaitTime - Wait for some time (halt program execution)
func WaitTime(seconds float64) {
	cseconds := (double)(seconds)
	waitTime(cseconds)
}

// Fade - Returns color with alpha applied, alpha goes from 0.0f to 1.0f
func Fade(col color.RGBA, alpha float32) color.RGBA {
	ccolor := colorCptr(col)
	calpha := (float)(alpha)
	ret := fade(*ccolor, calpha)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorToInt - Get hexadecimal value for a Color (0xRRGGBBAA)
func ColorToInt(col color.RGBA) int32 {
	ccolor := colorCptr(col)
	ret := colorToInt(*ccolor)
	v := (int32)(ret)
	return v
}

// ColorNormalize - Returns color normalized as float [0..1]
func ColorNormalize(col color.RGBA) Vector4 {
	result := Vector4{}
	r, g, b, a := col.R, col.G, col.B, col.A
	result.X = float32(r) / 255
	result.Y = float32(g) / 255
	result.Z = float32(b) / 255
	result.W = float32(a) / 255

	return result
}

// ColorFromNormalized - Returns Color from normalized values [0..1]
func ColorFromNormalized(normalized Vector4) color.RGBA {
	cnormalized := normalized.cptr()
	ret := colorFromNormalized(*cnormalized)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorToHSV - Returns HSV values for a Color, hue [0..360], saturation/value [0..1]
func ColorToHSV(col color.RGBA) Vector3 {
	ccolor := colorCptr(col)
	ret := colorToHSV(*ccolor)
	v := newVector3FromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorFromHSV - Returns a Color from HSV values, hue [0..360], saturation/value [0..1]
func ColorFromHSV(hue, saturation, value float32) color.RGBA {
	chue := (float)(hue)
	csaturation := (float)(saturation)
	cvalue := (float)(value)
	ret := colorFromHSV(chue, csaturation, cvalue)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorTint - Get color multiplied with another color
func ColorTint(col color.RGBA, tint color.RGBA) color.RGBA {
	ccolor := colorCptr(col)
	ctint := colorCptr(tint)
	ret := colorTint(*ccolor, *ctint)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorBrightness - Get color with brightness correction, brightness factor goes from -1.0f to 1.0f
func ColorBrightness(col color.RGBA, factor float32) color.RGBA {
	ccolor := colorCptr(col)
	cfactor := float(factor)
	ret := colorBrightness(*ccolor, cfactor)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorContrast - Get color with contrast correction, contrast values between -1.0f and 1.0f
func ColorContrast(col color.RGBA, contrast float32) color.RGBA {
	ccolor := colorCptr(col)
	ccontrast := float(contrast)
	ret := colorContrast(*ccolor, ccontrast)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorAlpha - Returns color with alpha applied, alpha goes from 0.0f to 1.0f
func ColorAlpha(col color.RGBA, alpha float32) color.RGBA {
	return Fade(col, alpha)
}

// ColorAlphaBlend - Returns src alpha-blended into dst color with tint
func ColorAlphaBlend(src, dst, tint color.RGBA) color.RGBA {
	csrc := colorCptr(src)
	cdst := colorCptr(dst)
	ctint := colorCptr(tint)
	ret := colorAlphaBlend(*csrc, *cdst, *ctint)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// ColorLerp - Get color lerp interpolation between two colors, factor [0.0f..1.0f]
func ColorLerp(col1, col2 color.RGBA, factor float32) color.RGBA {
	ccol1 := colorCptr(col1)
	ccol2 := colorCptr(col2)
	ret := colorLerp(*ccol1, *ccol2, float(factor))
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// GetColor - Returns a Color struct from hexadecimal value
func GetColor(hexValue uint) color.RGBA {
	chexValue := (uint)(hexValue)
	ret := getColor(chexValue)
	v := newColorFromPointer(unsafe.Pointer(&ret))
	return v
}

// GetPixelDataSize - Get pixel data size in bytes for certain format
func GetPixelDataSize(width, height, format int32) int32 {
	cwidth := (int32)(width)
	cheight := (int32)(height)
	cformat := (int32)(format)
	ret := getPixelDataSize(cwidth, cheight, cformat)
	v := (int32)(ret)
	return v
}

// GetRandomValue - Returns a random value between min and max (both included)
func GetRandomValue(min, max int32) int32 {
	cmin := (int32)(min)
	cmax := (int32)(max)
	ret := getRandomValue(cmin, cmax)
	v := (int32)(ret)
	return v
}

// OpenURL - Open URL with default system browser (if available)
func OpenURL(url string) {
	curl := cString(url)
	defer free(unsafe.Pointer(curl))
	openURL(curl)
}

// SetConfigFlags - Setup some window configuration flags
func SetConfigFlags(flags uint32) {
	cflags := (uint)(flags)
	setConfigFlags(cflags)
}

// TakeScreenshot - Takes a screenshot of current screen (saved a .png)
func TakeScreenshot(name string) {
	cname := cString(name)
	defer free(unsafe.Pointer(cname))
	takeScreenshot(cname)
}

// LoadAutomationEventList - Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS
func LoadAutomationEventList(fileName string) AutomationEventList {
	cfileName := cString(fileName)
	defer free(unsafe.Pointer(cfileName))

	ret := loadAutomationEventList(cfileName)
	v := newAutomationEventListFromPointer(unsafe.Pointer(&ret))

	return v
}

// UnloadAutomationEventList - Unload automation events list from file
func UnloadAutomationEventList(list *AutomationEventList) {
	unloadAutomationEventList(*list.cptr())
}

// ExportAutomationEventList - Export automation events list as text file
func ExportAutomationEventList(list AutomationEventList, fileName string) bool {
	cfileName := cString(fileName)
	defer free(unsafe.Pointer(cfileName))

	ret := exportAutomationEventList(*list.cptr(), cfileName)
	v := bool(ret)

	return v
}

// SetAutomationEventList - Set automation event list to record to
func SetAutomationEventList(list *AutomationEventList) {
	setAutomationEventList(list.cptr())
}

// SetAutomationEventBaseFrame - Set automation event internal base frame to start recording
func SetAutomationEventBaseFrame(frame int) {
	cframe := (int32)(frame)
	setAutomationEventBaseFrame(cframe)
}

// StartAutomationEventRecording - Start recording automation events (AutomationEventList must be set)
func StartAutomationEventRecording() {
	startAutomationEventRecording()
}

// StopAutomationEventRecording - Stop recording automation events
func StopAutomationEventRecording() {
	stopAutomationEventRecording()
}

// PlayAutomationEvent - Play a recorded automation event
func PlayAutomationEvent(event AutomationEvent) {
	playAutomationEvent(*event.cptr())
}

// IsKeyPressed - Detect if a key has been pressed once
func IsKeyPressed(key int32) bool {
	ckey := (int32)(key)
	ret := isKeyPressed(ckey)
	v := bool(ret)
	return v
}

// IsKeyPressedRepeat - Detect if a key has been pressed again (Only PLATFORM_DESKTOP)
func IsKeyPressedRepeat(key int32) bool {
	ckey := (int32)(key)
	ret := isKeyPressedRepeat(ckey)
	v := bool(ret)
	return v
}

// IsKeyDown - Detect if a key is being pressed
func IsKeyDown(key int32) bool {
	ckey := (int32)(key)
	ret := isKeyDown(ckey)
	v := bool(ret)
	return v
}

// IsKeyReleased - Detect if a key has been released once
func IsKeyReleased(key int32) bool {
	ckey := (int32)(key)
	ret := isKeyReleased(ckey)
	v := bool(ret)
	return v
}

// IsKeyUp - Detect if a key is NOT being pressed
func IsKeyUp(key int32) bool {
	ckey := (int32)(key)
	ret := isKeyUp(ckey)
	v := bool(ret)
	return v
}

// GetKeyPressed - Get latest key pressed
func GetKeyPressed() int32 {
	ret := getKeyPressed()
	v := (int32)(ret)
	return v
}

// GetCharPressed - Get the last char pressed
func GetCharPressed() int32 {
	ret := getCharPressed()
	v := (int32)(ret)
	return v
}

// SetExitKey - Set a custom key to exit program (default is ESC)
func SetExitKey(key int32) {
	ckey := (int32)(key)
	setExitKey(ckey)
}

// IsGamepadAvailable - Detect if a gamepad is available
func IsGamepadAvailable(gamepad int32) bool {
	cgamepad := (int32)(gamepad)
	ret := isGamepadAvailable(cgamepad)
	v := bool(ret)
	return v
}

// GetGamepadName - Return gamepad internal name id
func GetGamepadName(gamepad int32) string {
	cgamepad := (int32)(gamepad)
	ret := getGamepadName(cgamepad)
	v := goString(ret)
	return v
}

// IsGamepadButtonPressed - Detect if a gamepad button has been pressed once
func IsGamepadButtonPressed(gamepad, button int32) bool {
	cgamepad := (int32)(gamepad)
	cbutton := (int32)(button)
	ret := isGamepadButtonPressed(cgamepad, cbutton)
	v := bool(ret)
	return v
}

// IsGamepadButtonDown - Detect if a gamepad button is being pressed
func IsGamepadButtonDown(gamepad, button int32) bool {
	cgamepad := (int32)(gamepad)
	cbutton := (int32)(button)
	ret := isGamepadButtonDown(cgamepad, cbutton)
	v := bool(ret)
	return v
}

// IsGamepadButtonReleased - Detect if a gamepad button has been released once
func IsGamepadButtonReleased(gamepad, button int32) bool {
	cgamepad := (int32)(gamepad)
	cbutton := (int32)(button)
	ret := isGamepadButtonReleased(cgamepad, cbutton)
	v := bool(ret)
	return v
}

// IsGamepadButtonUp - Detect if a gamepad button is NOT being pressed
func IsGamepadButtonUp(gamepad, button int32) bool {
	cgamepad := (int32)(gamepad)
	cbutton := (int32)(button)
	ret := isGamepadButtonUp(cgamepad, cbutton)
	v := bool(ret)
	return v
}

// GetGamepadButtonPressed - Get the last gamepad button pressed
func GetGamepadButtonPressed() int32 {
	ret := getGamepadButtonPressed()
	v := (int32)(ret)
	return v
}

// GetGamepadAxisCount - Return gamepad axis count for a gamepad
func GetGamepadAxisCount(gamepad int32) int32 {
	cgamepad := (int32)(gamepad)
	ret := getGamepadAxisCount(cgamepad)
	v := (int32)(ret)
	return v
}

// GetGamepadAxisMovement - Return axis movement value for a gamepad axis
func GetGamepadAxisMovement(gamepad, axis int32) float32 {
	cgamepad := (int32)(gamepad)
	caxis := (int32)(axis)
	ret := getGamepadAxisMovement(cgamepad, caxis)
	v := (float32)(ret)
	return v
}

// SetGamepadMappings - Set internal gamepad mappings (SDL_GameControllerDB)
func SetGamepadMappings(mappings string) int32 {
	cmappings := cString(mappings)
	defer free(unsafe.Pointer(cmappings))
	ret := setGamepadMappings(cmappings)
	v := (int32)(ret)
	return v
}

// SetGamepadVibration - Set gamepad vibration for both motors (duration in seconds)
func SetGamepadVibration(gamepad int32, leftMotor, rightMotor, duration float32) {
	setGamepadVibration(int32(gamepad), float(leftMotor), float(rightMotor), float(duration))
}

// IsMouseButtonPressed - Detect if a mouse button has been pressed once
func IsMouseButtonPressed(button MouseButton) bool {
	cbutton := (int32)(button)
	ret := isMouseButtonPressed(cbutton)
	v := bool(ret)
	return v
}

// IsMouseButtonDown - Detect if a mouse button is being pressed
func IsMouseButtonDown(button MouseButton) bool {
	cbutton := (int32)(button)
	ret := isMouseButtonDown(cbutton)
	v := bool(ret)
	return v
}

// IsMouseButtonReleased - Detect if a mouse button has been released once
func IsMouseButtonReleased(button MouseButton) bool {
	cbutton := (int32)(button)
	ret := isMouseButtonReleased(cbutton)
	v := bool(ret)
	return v
}

// IsMouseButtonUp - Detect if a mouse button is NOT being pressed
func IsMouseButtonUp(button MouseButton) bool {
	cbutton := (int32)(button)
	ret := isMouseButtonUp(cbutton)
	v := bool(ret)
	return v
}

// GetMouseX - Returns mouse position X
func GetMouseX() int32 {
	ret := getMouseX()
	v := (int32)(ret)
	return v
}

// GetMouseY - Returns mouse position Y
func GetMouseY() int32 {
	ret := getMouseY()
	v := (int32)(ret)
	return v
}

// GetMousePosition - Returns mouse position XY
func GetMousePosition() Vector2 {
	ret := getMousePosition()
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// GetMouseDelta - Get mouse delta between frames
func GetMouseDelta() Vector2 {
	ret := getMouseDelta()
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// SetMousePosition - Set mouse position XY
func SetMousePosition(x, y int) {
	cx := (int32)(x)
	cy := (int32)(y)
	setMousePosition(cx, cy)
}

// SetMouseOffset - Set mouse offset
func SetMouseOffset(offsetX, offsetY int) {
	ox := (int32)(offsetX)
	oy := (int32)(offsetY)
	setMouseOffset(ox, oy)
}

// SetMouseScale - Set mouse scaling
func SetMouseScale(scaleX, scaleY float32) {
	cscaleX := (float)(scaleX)
	cscaleY := (float)(scaleY)
	setMouseScale(cscaleX, cscaleY)
}

// GetMouseWheelMove - Get mouse wheel movement for X or Y, whichever is larger
func GetMouseWheelMove() float32 {
	ret := getMouseWheelMove()
	v := (float32)(ret)
	return v
}

// GetMouseWheelMoveV - Get mouse wheel movement for both X and Y
func GetMouseWheelMoveV() Vector2 {
	ret := getMouseWheelMoveV()
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// SetMouseCursor - Set mouse cursor
func SetMouseCursor(cursor int32) {
	ccursor := (int32)(cursor)
	setMouseCursor(ccursor)
}

// GetTouchX - Returns touch position X for touch point 0 (relative to screen size)
func GetTouchX() int32 {
	ret := getTouchX()
	v := (int32)(ret)
	return v
}

// GetTouchY - Returns touch position Y for touch point 0 (relative to screen size)
func GetTouchY() int32 {
	ret := getTouchY()
	v := (int32)(ret)
	return v
}

// GetTouchPosition - Returns touch position XY for a touch point index (relative to screen size)
func GetTouchPosition(index int32) Vector2 {
	cindex := (int32)(index)
	ret := getTouchPosition(cindex)
	v := newVector2FromPointer(unsafe.Pointer(&ret))
	return v
}

// GetTouchPointId - Get touch point identifier for given index
func GetTouchPointId(index int32) int32 {
	cindex := (int32)(index)
	ret := getTouchPointId(cindex)
	v := (int32)(ret)
	return v
}

// GetTouchPointCount - Get number of touch points
func GetTouchPointCount() int32 {
	ret := getTouchPointCount()
	v := (int32)(ret)
	return v
}

// BeginVrStereoMode - Begin stereo rendering (requires VR simulator)
func BeginVrStereoMode(config VrStereoConfig) {
	beginVrStereoMode(*(*vrStereoConfig)(unsafe.Pointer(&config)))
}

// EndVrStereoMode - End stereo rendering (requires VR simulator)
func EndVrStereoMode() {
	endVrStereoMode()
}

// LoadVrStereoConfig - Load VR stereo config for VR simulator device parameters
func LoadVrStereoConfig(device VrDeviceInfo) VrStereoConfig {
	ret := loadVrStereoConfig(*(*vrDeviceInfo)(unsafe.Pointer(&device)))
	return *(*VrStereoConfig)(unsafe.Pointer(&ret))
}

// UnloadVrStereoConfig - Unload VR stereo config
func UnloadVrStereoConfig(config VrStereoConfig) {
	unloadVrStereoConfig(*(*vrStereoConfig)(unsafe.Pointer(&config)))
}
*/
