//go:build js

package rl

import (
	"image/color"
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

	ret, f := mallocV(v)
	defer f()
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
	ret, f := mallocV(v)
	defer f()
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
	ret, f := mallocV(v)
	defer f()
	getWindowScaleDPI(ret)
	copyValueToGo(ret, &v)
	return v
}

// GetMonitorName - Get the human-readable, UTF-8 encoded name of the primary monitor
func GetMonitorName(monitor int) string { return "" }

//go:wasmimport raylib _SetClipboardText
//go:noescape
func setClipboardText(data cptr)

// SetClipboardText - Set clipboard text content
func SetClipboardText(data string) {
	cdata := cString(data)
	defer free(cdata)
	setClipboardText(cdata)
}

//go:wasmimport raylib _GetClipboardText
//go:noescape
func getClipboardText() cptr

// GetClipboardText - Get clipboard text content
func GetClipboardText() string {
	ret := getClipboardText()
	defer free(ret)
	v := goString(ret)
	return v
}

//go:wasmimport raylib _GetClipboardImage
//go:noescape
func getClipboardImage(img cptr)

// GetClipboardImage - Get clipboard image content
//
// Only works with SDL3 backend or Windows with GLFW/RGFW
func GetClipboardImage() Image {
	var v Image
	ret, f := mallocV(v)
	defer f()
	getClipboardImage(ret)
	copyValueToGo(ret, &v)
	return v
}

// EnableEventWaiting - Enable waiting for events on EndDrawing(), no automatic event polling
//
//go:wasmimport raylib _EnableEventWaiting
//go:noescape
func EnableEventWaiting()

// DisableEventWaiting - Disable waiting for events on EndDrawing(), automatic events polling
//
//go:wasmimport raylib _DisableEventWaiting
//go:noescape
func DisableEventWaiting()

//go:wasmimport raylib _ClearBackground
//go:noescape
func clearBackground(col cptr)

// ClearBackground - Sets Background Color
func ClearBackground(col color.RGBA) {
	ccolor, f := copyValueToC(col)
	defer f()
	clearBackground(ccolor)
}

// BeginDrawing - Setup drawing canvas to start drawing
//
//go:wasmimport raylib _BeginDrawing
//go:noescape
func BeginDrawing()

// EndDrawing - End canvas drawing and Swap Buffers (Double Buffering)
//
//go:wasmimport raylib _EndDrawing
//go:noescape
func EndDrawing()

//go:wasmimport raylib _BeginMode2D
//go:noescape
func beginMode2D(camera cptr)

// BeginMode2D - Initialize 2D mode with custom camera
func BeginMode2D(camera Camera2D) {
	ccamera, f := copyValueToC(camera)
	defer f()
	beginMode2D(ccamera)
}

// EndMode2D - Ends 2D mode custom camera usage
//
//go:wasmimport raylib _EndMode2D
//go:noescape
func EndMode2D()

//go:wasmimport raylib _BeginMode3D
//go:noescape
func beginMode3D(camera cptr)

// BeginMode3D - Initializes 3D mode for drawing (Camera setup)
func BeginMode3D(camera Camera) {
	c, f := copyValueToC(camera)
	defer f()
	beginMode3D(c)
}

// EndMode3D - Ends 3D mode and returns to default 2D orthographic mode
//
//go:wasmimport raylib _EndMode3D
//go:noescape
func EndMode3D()

//go:wasmimport raylib _BeginTextureMode
//go:noescape
func beginTextureMode(target cptr)

// BeginTextureMode - Initializes render texture for drawing
func BeginTextureMode(target RenderTexture2D) {
	c, f := copyValueToC(target)
	defer f()
	beginTextureMode(c)
}

// EndTextureMode - Ends drawing to render texture
//
//go:wasmimport raylib _EndTextureMode
//go:noescape
func EndTextureMode()

// BeginScissorMode - Begins scissor mode (define screen area for following drawing)
//
//go:wasmimport raylib _BeginScissorMode
//go:noescape
func BeginScissorMode(x, y, width, height int32)

// EndScissorMode - Ends scissor mode
//
//go:wasmimport raylib _EndScissorMode
//go:noescape
func EndScissorMode()

// LoadShader - Load a custom shader and bind default locations
//
//go:wasmimport raylib _LoadShader
//go:noescape
func loadShader(shader, vsFileName cptr, fsFileName cptr)

// LoadShader - Load a custom shader and bind default locations
func LoadShader(vsFileName string, fsFileName string) Shader {
	cvsFileName := cString(vsFileName)
	defer free(cvsFileName)

	cfsFileName := cString(fsFileName)
	defer free(cfsFileName)

	var v Shader
	ret, f := mallocV(v)
	defer f()
	loadShader(ret, cvsFileName, cfsFileName)
	copyValueToGo(ret, &v)
	return v
}

// LoadShaderFromMemory - Load shader from code strings and bind default locations
//
//go:wasmimport raylib _LoadShaderFromMemory
//go:noescape
func loadShaderFromMemory(shader, vsCode cptr, fsCode cptr)

// LoadShaderFromMemory - Load shader from code strings and bind default locations
func LoadShaderFromMemory(vsCode string, fsCode string) Shader {
	cvsCode := cString(vsCode)
	defer free(cvsCode)

	cfsCode := cString(fsCode)
	defer free(cfsCode)

	var v Shader
	ret, f := mallocV(v)
	defer f()
	loadShaderFromMemory(ret, cvsCode, cfsCode)
	copyValueToGo(ret, &v)
	return v
}

// IsShaderValid - Check if a shader is valid (loaded on GPU)
//
//go:wasmimport raylib _IsShaderValid
//go:noescape
func isShaderValid(shader cptr) bool

// IsShaderValid - Check if a shader is valid (loaded on GPU)
func IsShaderValid(shader Shader) bool {
	c, f := copyValueToC(shader)
	defer f()
	v := isShaderValid(c)
	return v
}

// GetShaderLocation - Get shader uniform location
//
//go:wasmimport raylib _GetShaderLocation
//go:noescape
func getShaderLocation(shader cptr, uniformName cptr) int32

// GetShaderLocation - Get shader uniform location
func GetShaderLocation(shader Shader, uniformName string) int32 {
	cshader, f := copyValueToC(shader)
	defer f()

	cuniformName := cString(uniformName)
	defer free(cuniformName)

	v := getShaderLocation(cshader, cuniformName)
	return v
}

// GetShaderLocationAttrib - Get shader attribute location
//
//go:wasmimport raylib _GetShaderLocationAttrib
//go:noescape
func getShaderLocationAttrib(shader cptr, attribName cptr) int32

// GetShaderLocationAttrib - Get shader attribute location
func GetShaderLocationAttrib(shader Shader, attribName string) int32 {
	cshader, f := copyValueToC(shader)
	defer f()
	cuniformName := cString(attribName)
	defer free(cuniformName)
	return getShaderLocationAttrib(cshader, cuniformName)
}

// SetShaderValue - Set shader uniform value (float)
//
//go:wasmimport raylib _SetShaderValue
//go:noescape
func setShaderValue(shader cptr, locIndex int32, value cptr, uniformType ShaderUniformDataType)

// SetShaderValue - Set shader uniform value (float)
func SetShaderValue(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType) {
	cshader, f := copyValueToC(shader)
	defer f()
	clocIndex := (int32)(locIndex)
	cvalue, f := copySliceToC(value)
	defer f()
	cuniformType := (int32)(uniformType)
	setShaderValue(cshader, clocIndex, cvalue, cuniformType)
}

// SetShaderValueV - Set shader uniform value (float)
//
//go:wasmimport raylib _SetShaderValueV
//go:noescape
func setShaderValueV(shader cptr, locIndex int32, value cptr, uniformType ShaderUniformDataType, count int32)

// SetShaderValueV - Set shader uniform value (float)
func SetShaderValueV(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType, count int32) {
	cshader, f := copyValueToC(shader)
	defer f()
	clocIndex := (int32)(locIndex)
	cvalue, f := copySliceToC(value)
	defer f()
	cuniformType := (int32)(uniformType)
	ccount := (int32)(count)
	setShaderValueV(cshader, clocIndex, cvalue, cuniformType, ccount)
}

// SetShaderValueMatrix - Set shader uniform value (matrix 4x4)
//
//go:wasmimport raylib _SetShaderValueMatrix
//go:noescape
func setShaderValueMatrix(shader cptr, locIndex int32, mat cptr)

// SetShaderValueMatrix - Set shader uniform value (matrix 4x4)
func SetShaderValueMatrix(shader Shader, locIndex int32, mat Matrix) {
	cshader, f := copyValueToC(shader)
	defer f()
	clocIndex := (int32)(locIndex)
	cmat, f := copyValueToC(mat)
	defer f()
	setShaderValueMatrix(cshader, clocIndex, cmat)
}

// SetShaderValueTexture - Set shader uniform value for texture (sampler2d)
//
//go:wasmimport raylib _SetShaderValueTexture
//go:noescape
func setShaderValueTexture(shader cptr, locIndex int32, texture cptr)

// SetShaderValueTexture - Set shader uniform value for texture (sampler2d)
func SetShaderValueTexture(shader Shader, locIndex int32, texture Texture2D) {
	cshader, f := copyValueToC(shader)
	defer f()
	clocIndex := (int32)(locIndex)
	ctexture, f := copyValueToC(texture)
	defer f()
	setShaderValueTexture(cshader, clocIndex, ctexture)
}

// UnloadShader - Unload a custom shader from memory
//
//go:wasmimport raylib _UnloadShader
//go:noescape
func unloadShader(shader cptr)

// UnloadShader - Unload a custom shader from memory
func UnloadShader(shader Shader) {

	cshader, f := copyValueToC(shader)
	defer f()
	unloadShader(cshader)
}

// GetMouseRay - Get a ray trace from mouse position
//
// Deprecated: Use [GetScreenToWorldRay] instead.
func GetMouseRay(mousePosition Vector2, camera Camera) Ray {
	return GetScreenToWorldRay(mousePosition, camera)
}

// GetScreenToWorldRay - Get a ray trace from screen position (i.e mouse)
//
//go:wasmimport raylib _GetScreenToWorldRay
//go:noescape
func getScreenToWorldRay(ray cptr, position cptr, camera cptr)

// GetScreenToWorldRay - Get a ray trace from screen position (i.e mouse)
func GetScreenToWorldRay(position Vector2, camera Camera) Ray {
	cposition, f := copyValueToC(position)
	defer f()
	ccamera, f := copyValueToC(camera)
	defer f()
	var v Ray
	ret, f := mallocV(v)
	defer f()
	getScreenToWorldRay(ret, cposition, ccamera)
	copyValueToGo(ret, &v)
	return v
}

// GetScreenToWorldRayEx - Get a ray trace from screen position (i.e mouse) in a viewport
//
//go:wasmimport raylib _GetScreenToWorldRayEx
//go:noescape
func getScreenToWorldRayEx(ray cptr, position cptr, camera cptr, width, height int32)

// GetScreenToWorldRayEx - Get a ray trace from screen position (i.e mouse) in a viewport
func GetScreenToWorldRayEx(position Vector2, camera Camera, width, height int32) Ray {
	cposition, f := copyValueToC(position)
	defer f()
	ccamera, f := copyValueToC(camera)
	cwidth := (int32)(width)
	cheight := (int32)(height)
	var v Ray
	ret, f := mallocV(v)
	defer f()
	getScreenToWorldRayEx(ret, cposition, ccamera, cwidth, cheight)
	copyValueToGo(ret, &v)
	return v
}

// GetCameraMatrix - Returns camera transform matrix (view matrix)
//
//go:wasmimport raylib _GetCameraMatrix
//go:noescape
func getCameraMatrix(mat cptr, camera cptr)

// GetCameraMatrix - Returns camera transform matrix (view matrix)
func GetCameraMatrix(camera Camera) Matrix {
	ccamera, f := copyValueToC(camera)
	defer f()
	var v Matrix
	ret, f := mallocV(v)
	defer f()

	getCameraMatrix(ret, ccamera)
	copyValueToGo(ret, &v)
	return v
}

// GetCameraMatrix2D - Returns camera 2d transform matrix
//
//go:wasmimport raylib _GetCameraMatrix2D
//go:noescape
func getCameraMatrix2D(mat, camera cptr)

// GetCameraMatrix2D - Returns camera 2d transform matrix
func GetCameraMatrix2D(camera Camera2D) Matrix {
	ccamera, f := copyValueToC(camera)
	defer f()
	var v Matrix
	ret, f := mallocV(v)
	defer f()
	getCameraMatrix2D(ret, ccamera)
	copyValueToGo(ret, &v)
	return v
}

// GetWorldToScreen - Returns the screen space position from a 3d world space position
//
//go:wasmimport raylib _GetWorldToScreen
//go:noescape
func getWorldToScreen(vector2, position, camera cptr)

// GetWorldToScreen - Returns the screen space position from a 3d world space position
func GetWorldToScreen(position Vector3, camera Camera) Vector2 {
	cposition, f := copyValueToC(position)
	defer f()
	ccamera, f := copyValueToC(position)
	defer f()
	var v Vector2
	ret, f := mallocV(v)
	defer f()
	getWorldToScreen(ret, cposition, ccamera)
	copyValueToGo(ret, &v)
	return v
}

// GetScreenToWorld2D - Returns the world space position for a 2d camera screen space position
//
//go:wasmimport raylib _GetScreenToWorld2D
//go:noescape
func getScreenToWorld2D(vector2, position cptr, camera cptr)

// GetScreenToWorld2D - Returns the world space position for a 2d camera screen space position
func GetScreenToWorld2D(position Vector2, camera Camera2D) Vector2 {
	cposition, f := copyValueToC(position)
	defer f()
	ccamera, f := copyValueToC(camera)
	defer f()
	var v Vector2
	ret, f := mallocV(v)
	defer f()
	getScreenToWorld2D(ret, cposition, ccamera)
	copyValueToGo(ret, &v)
	return v
}

// GetWorldToScreenEx - Get size position for a 3d world space position
//
//go:wasmimport raylib _GetWorldToScreenEx
//go:noescape
func getWorldToScreenEx(vector2, position, camera cptr, width int32, height int32)

// GetWorldToScreenEx - Get size position for a 3d world space position
func GetWorldToScreenEx(position Vector3, camera Camera, width int32, height int32) Vector2 {
	cposition, f := copyValueToC(position)
	defer f()
	ccamera, f := copyValueToC(camera)
	defer f()
	cwidth := (int32)(width)
	cheight := (int32)(height)
	var v Vector2
	ret, f := mallocV(v)
	defer f()

	getWorldToScreenEx(ret, cposition, ccamera, cwidth, cheight)
	copyValueToGo(ret, &v)
	return v
}

// GetWorldToScreen2D - Returns the screen space position for a 2d camera world space position
//
//go:wasmimport raylib _GetWorldToScreen2D
//go:noescape
func getWorldToScreen2D(vector2, position, camera cptr)

// GetWorldToScreen2D - Returns the screen space position for a 2d camera world space position
func GetWorldToScreen2D(position Vector2, camera Camera2D) Vector2 {
	cposition, f := copyValueToC(position)
	defer f()
	ccamera, f := copyValueToC(camera)
	defer f()
	var v Vector2
	ret, f := mallocV(v)
	defer f()

	getWorldToScreen2D(ret, cposition, ccamera)
	copyValueToGo(ret, &v)
	return v
}

// SetTargetFPS - Set target FPS (maximum)
//
//go:wasmimport raylib _SetTargetFPS
//go:noescape
func SetTargetFPS(fps int32)

// GetFPS - Returns current FPS
//
//go:wasmimport raylib _GetFPS
//go:noescape
func GetFPS() int32

// GetFrameTime - Returns time in seconds for one frame
//
//go:wasmimport raylib _GetFrameTime
//go:noescape
func GetFrameTime() float32

// GetTime - Return time in seconds
//
//go:wasmimport raylib _GetTime
//go:noescape
func GetTime() float64

// Custom frame control functions
// NOTE: SwapScreenBuffer and PollInputEvents are intended for advanced users that want full control over the frame processing
// By default EndDrawing() does this job: draws everything + SwapScreenBuffer() + manage frame timing + PollInputEvents()
// To avoid that behaviour and control frame processes manually you can either enable in config.h: SUPPORT_CUSTOM_FRAME_CONTROL
// or add CGO_CFLAGS="-DSUPPORT_CUSTOM_FRAME_CONTROL=1" to your build
// SwapScreenBuffer - Swap back buffer to front buffer
//
//go:wasmimport raylib _SwapScreenBuffer
//go:noescape
func SwapScreenBuffer()

// Register all input events
//
//go:wasmimport raylib _PollInputEvents
//go:noescape
func PollInputEvents()

// WaitTime - Wait for some time (halt program execution)
//
//go:wasmimport raylib _WaitTime
//go:noescape
func WaitTime(seconds float64)

// Fade - Returns color with alpha applied, alpha goes from 0.0f to 1.0f
//
//go:wasmimport raylib _Fade
func fade(color, col cptr, alpha float32)

// Fade - Returns color with alpha applied, alpha goes from 0.0f to 1.0f
func Fade(col color.RGBA, alpha float32) color.RGBA {
	ccolor, f := copyValueToC(col)
	defer f()
	var v Color
	ret, f := mallocV(v)
	defer f()
	fade(ret, ccolor, alpha)
	copyValueToGo(ret, &v)
	return v
}

// ColorToInt - Get hexadecimal value for a Color (0xRRGGBBAA)
//
//go:wasmimport raylib _ColorToInt
func colorToInt(col cptr) int32

// ColorToInt - Get hexadecimal value for a Color (0xRRGGBBAA)
func ColorToInt(col color.RGBA) int32 {
	ccolor, f := copyValueToC(col)
	defer f()
	return colorToInt(ccolor)
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
//
//go:wasmimport raylib _ColorNormalized
func colorFromNormalized(col, normalized cptr)

// ColorFromNormalized - Returns Color from normalized values [0..1]
func ColorFromNormalized(normalized Vector4) color.RGBA {
	cnormalized, f := copyValueToC(normalized)
	defer f()
	var v Color
	ret, f := mallocV(v)
	colorFromNormalized(ret, cnormalized)
	copyValueToGo(ret, &v)
	return v
}

// ColorToHSV - Returns HSV values for a Color, hue [0..360], saturation/value [0..1]
func colorToHSV(vector3, col cptr)

// ColorToHSV - Returns HSV values for a Color, hue [0..360], saturation/value [0..1]
func ColorToHSV(col color.RGBA) Vector3 {
	ccolor, f := copyValueToC(col)
	defer f()
	var v Vector3
	ret, f := mallocV(v)
	defer f()
	colorToHSV(ret, ccolor)
	copyValueToGo(ret, &v)
	return v
}

/*


// ColorFromHSV - Returns a Color from HSV values, hue [0..360], saturation/value [0..1]
func ColorFromHSV(hue, saturation, value float32) color.RGBA {
	chue := (float)(hue)
	csaturation := (float)(saturation)
	cvalue := (float)(value)
	ret := colorFromHSV(chue, csaturation, cvalue)
	v := newColorFromPointer(&ret)
	return v
}

// ColorTint - Get color multiplied with another color
func ColorTint(col color.RGBA, tint color.RGBA) color.RGBA {
	ccolor := colorCptr(col)
	ctint := colorCptr(tint)
	ret := colorTint(*ccolor, *ctint)
	v := newColorFromPointer(&ret)
	return v
}

// ColorBrightness - Get color with brightness correction, brightness factor goes from -1.0f to 1.0f
func ColorBrightness(col color.RGBA, factor float32) color.RGBA {
	ccolor := colorCptr(col)
	cfactor := float(factor)
	ret := colorBrightness(*ccolor, cfactor)
	v := newColorFromPointer(&ret)
	return v
}

// ColorContrast - Get color with contrast correction, contrast values between -1.0f and 1.0f
func ColorContrast(col color.RGBA, contrast float32) color.RGBA {
	ccolor := colorCptr(col)
	ccontrast := float(contrast)
	ret := colorContrast(*ccolor, ccontrast)
	v := newColorFromPointer(&ret)
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
	v := newColorFromPointer(&ret)
	return v
}

// ColorLerp - Get color lerp interpolation between two colors, factor [0.0f..1.0f]
func ColorLerp(col1, col2 color.RGBA, factor float32) color.RGBA {
	ccol1 := colorCptr(col1)
	ccol2 := colorCptr(col2)
	ret := colorLerp(*ccol1, *ccol2, float(factor))
	v := newColorFromPointer(&ret)
	return v
}

// GetColor - Returns a Color struct from hexadecimal value
func GetColor(hexValue uint) color.RGBA {
	chexValue := (uint)(hexValue)
	ret := getColor(chexValue)
	v := newColorFromPointer(&ret)
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
	defer free(curl)
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
	defer free(cname)
	takeScreenshot(cname)
}

// LoadAutomationEventList - Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS
func LoadAutomationEventList(fileName string) AutomationEventList {
	cfileName := cString(fileName)
	defer free(cfileName)

	ret := loadAutomationEventList(cfileName)
	v := newAutomationEventListFromPointer(&ret)

	return v
}

// UnloadAutomationEventList - Unload automation events list from file
func UnloadAutomationEventList(list *AutomationEventList) {
	unloadAutomationEventList(*list.cptr())
}

// ExportAutomationEventList - Export automation events list as text file
func ExportAutomationEventList(list AutomationEventList, fileName string) bool {
	cfileName := cString(fileName)
	defer free(cfileName)

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
	defer free(cmappings)
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
	v := newVector2FromPointer(&ret)
	return v
}

// GetMouseDelta - Get mouse delta between frames
func GetMouseDelta() Vector2 {
	ret := getMouseDelta()
	v := newVector2FromPointer(&ret)
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
	v := newVector2FromPointer(&ret)
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
	v := newVector2FromPointer(&ret)
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
	beginVrStereoMode(*(*vrStereoConfig)(&config))
}

// EndVrStereoMode - End stereo rendering (requires VR simulator)
func EndVrStereoMode() {
	endVrStereoMode()
}

// LoadVrStereoConfig - Load VR stereo config for VR simulator device parameters
func LoadVrStereoConfig(device VrDeviceInfo) VrStereoConfig {
	ret := loadVrStereoConfig(*(*vrDeviceInfo)(&device))
	return *(*VrStereoConfig)(&ret)
}

// UnloadVrStereoConfig - Unload VR stereo config
func UnloadVrStereoConfig(config VrStereoConfig) {
	unloadVrStereoConfig(*(*vrStereoConfig)(&config))
}
*/
