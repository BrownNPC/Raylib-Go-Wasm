//go:build !js

package rl

import (
	"image/color"
	"unsafe"
)

// CloseWindow - Close window and unload OpenGL context
func CloseWindow() {
	// empty code to make gopls happy on non-web
}

// IsWindowReady - Check if window has been initialized successfully
func IsWindowReady() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsWindowFullscreen - Check if window is currently fullscreen
func IsWindowFullscreen() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsWindowHidden - Check if window is currently hidden (only PLATFORM_DESKTOP)
func IsWindowHidden() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsWindowMinimized - Check if window is currently minimized (only PLATFORM_DESKTOP)
func IsWindowMinimized() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsWindowMaximized - Check if window is currently maximized (only PLATFORM_DESKTOP)
func IsWindowMaximized() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsWindowFocused - Check if window is currently focused (only PLATFORM_DESKTOP)
func IsWindowFocused() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsWindowResized - Check if window has been resized last frame
func IsWindowResized() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsWindowState - Check if one specific window flag is enabled
func IsWindowState(flag uint32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// SetWindowState - Set window configuration state using flags (only PLATFORM_DESKTOP)
func SetWindowState(flags uint32) {
	// empty code to make gopls happy on non-web
}

// ClearWindowState - Clear window configuration state flags
func ClearWindowState(flags uint32) {
	// empty code to make gopls happy on non-web
}

// ToggleFullscreen - Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP)
func ToggleFullscreen() {
	// empty code to make gopls happy on non-web
}

// ToggleBorderlessWindowed - Toggle window state: borderless windowed (only PLATFORM_DESKTOP)
func ToggleBorderlessWindowed() {
	// empty code to make gopls happy on non-web
}

// MaximizeWindow - Set window state: maximized, if resizable (only PLATFORM_DESKTOP)
func MaximizeWindow() {
	// empty code to make gopls happy on non-web
}

// MinimizeWindow - Set window state: minimized, if resizable (only PLATFORM_DESKTOP)
func MinimizeWindow() {
	// empty code to make gopls happy on non-web
}

// RestoreWindow - Set window state: not minimized/maximized (only PLATFORM_DESKTOP)
func RestoreWindow() {
	// empty code to make gopls happy on non-web
}

// SetWindowIcon - Set icon for window (single image, RGBA 32bit, (only PLATFORM_DESKTOP)
func SetWindowIcon(image Image) {
	// empty code to make gopls happy on non-web
}

// SetWindowIcons - Set icon for window (multiple images, RGBA 32bit, only PLATFORM_DESKTOP)
func SetWindowIcons(images []Image, count int32) {
	// empty code to make gopls happy on non-web
}

// SetWindowTitle - Set title for window (only PLATFORM_DESKTOP and PLATFORM_WEB)
func SetWindowTitle(title string) {
	// empty code to make gopls happy on non-web
}

// SetWindowPosition - Set window position on screen (only PLATFORM_DESKTOP)
func SetWindowPosition(x int, y int) {
	// empty code to make gopls happy on non-web
}

// SetWindowMonitor - Set monitor for the current window
func SetWindowMonitor(monitor int) {
	// empty code to make gopls happy on non-web
}

// SetWindowMinSize - Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)
func SetWindowMinSize(width int, height int) {
	// empty code to make gopls happy on non-web
}

// SetWindowMaxSize - Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE)
func SetWindowMaxSize(width int, height int) {
	// empty code to make gopls happy on non-web
}

// SetWindowSize - Set window dimensions
func SetWindowSize(width int, height int) {
	// empty code to make gopls happy on non-web
}

// SetWindowOpacity - Set window opacity [0.0f..1.0f] (only PLATFORM_DESKTOP)
func SetWindowOpacity(opacity float32) {
	// empty code to make gopls happy on non-web
}

// SetWindowFocused - Set window focused (only PLATFORM_DESKTOP)
func SetWindowFocused() {
	// empty code to make gopls happy on non-web
}

// GetWindowHandle - Get native window handle (only PLATFORM_DESKTOP)
func GetWindowHandle() unsafe.Pointer {
	// empty code to make gopls happy on non-web
	var zero unsafe.Pointer
	return zero
}

// GetScreenWidth - Get current screen width
func GetScreenWidth() int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetScreenHeight - Get current screen height
func GetScreenHeight() int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetRenderWidth - Get current render width (it considers HiDPI)
func GetRenderWidth() int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetRenderHeight - Get current render height (it considers HiDPI)
func GetRenderHeight() int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetMonitorCount - Get number of connected monitors
func GetMonitorCount() int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetCurrentMonitor - Get current monitor where window is placed
func GetCurrentMonitor() int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetMonitorPosition - Get specified monitor position
func GetMonitorPosition(monitor int) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetMonitorWidth - Get specified monitor width (current video mode used by monitor)
func GetMonitorWidth(monitor int) int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetMonitorHeight - Get specified monitor height (current video mode used by monitor)
func GetMonitorHeight(monitor int) int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetMonitorPhysicalWidth - Get specified monitor physical width in millimetres
func GetMonitorPhysicalWidth(monitor int) int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetMonitorPhysicalHeight - Get specified monitor physical height in millimetres
func GetMonitorPhysicalHeight(monitor int) int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetMonitorRefreshRate - Get specified monitor refresh rate
func GetMonitorRefreshRate(monitor int) int {
	// empty code to make gopls happy on non-web
	var zero int
	return zero
}

// GetWindowPosition - Get window position XY on monitor
func GetWindowPosition() Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetWindowScaleDPI - Get window scale DPI factor
func GetWindowScaleDPI() Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetMonitorName - Get the human-readable, UTF-8 encoded name of the specified monitor
func GetMonitorName(monitor int) string {
	// empty code to make gopls happy on non-web
	var zero string
	return zero
}

// SetClipboardText - Set clipboard text content
func SetClipboardText(text string) {
	// empty code to make gopls happy on non-web
}

// GetClipboardText - Get clipboard text content
func GetClipboardText() string {
	// empty code to make gopls happy on non-web
	var zero string
	return zero
}

// GetClipboardImage - Get clipboard image content
//
// Only works with SDL3 backend or Windows with RGFW/GLFW
func GetClipboardImage() Image {
	// empty code to make gopls happy on non-web
	var zero Image
	return zero
}

// EnableEventWaiting - Enable waiting for events on EndDrawing(), no automatic event polling
func EnableEventWaiting() {
	// empty code to make gopls happy on non-web
}

// DisableEventWaiting - Disable waiting for events on EndDrawing(), automatic events polling
func DisableEventWaiting() {
	// empty code to make gopls happy on non-web
}

// ShowCursor - Shows cursor
func ShowCursor() {
	// empty code to make gopls happy on non-web
}

// HideCursor - Hides cursor
func HideCursor() {
	// empty code to make gopls happy on non-web
}

// IsCursorHidden - Check if cursor is not visible
func IsCursorHidden() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// EnableCursor - Enables cursor (unlock cursor)
func EnableCursor() {
	// empty code to make gopls happy on non-web
}

// DisableCursor - Disables cursor (lock cursor)
func DisableCursor() {
	// empty code to make gopls happy on non-web
}

// IsCursorOnScreen - Check if cursor is on the screen
func IsCursorOnScreen() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// ClearBackground - Set background color (framebuffer clear color)
func ClearBackground(col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// BeginDrawing - Setup canvas (framebuffer) to start drawing
func BeginDrawing() {
	// empty code to make gopls happy on non-web
}

// EndDrawing - End canvas drawing and swap buffers (double buffering)
func EndDrawing() {
	// empty code to make gopls happy on non-web
}

// BeginMode2D - Begin 2D mode with custom camera (2D)
func BeginMode2D(camera Camera2D) {
	// empty code to make gopls happy on non-web
}

// EndMode2D - Ends 2D mode with custom camera
func EndMode2D() {
	// empty code to make gopls happy on non-web
}

// BeginMode3D - Begin 3D mode with custom camera (3D)
func BeginMode3D(camera Camera3D) {
	// empty code to make gopls happy on non-web
}

// EndMode3D - Ends 3D mode and returns to default 2D orthographic mode
func EndMode3D() {
	// empty code to make gopls happy on non-web
}

// BeginTextureMode - Begin drawing to render texture
func BeginTextureMode(target RenderTexture2D) {
	// empty code to make gopls happy on non-web
}

// EndTextureMode - Ends drawing to render texture
func EndTextureMode() {
	// empty code to make gopls happy on non-web
}

// BeginShaderMode - Begin custom shader drawing
func BeginShaderMode(shader Shader) {
	// empty code to make gopls happy on non-web
}

// EndShaderMode - End custom shader drawing (use default shader)
func EndShaderMode() {
	// empty code to make gopls happy on non-web
}

// BeginBlendMode - Begin blending mode (alpha, additive, multiplied, subtract, custom)
func BeginBlendMode(mode BlendMode) {
	// empty code to make gopls happy on non-web
}

// EndBlendMode - End blending mode (reset to default: alpha blending)
func EndBlendMode() {
	// empty code to make gopls happy on non-web
}

// BeginScissorMode - Begin scissor mode (define screen area for following drawing)
func BeginScissorMode(x int32, y int32, width int32, height int32) {
	// empty code to make gopls happy on non-web
}

// EndScissorMode - End scissor mode
func EndScissorMode() {
	// empty code to make gopls happy on non-web
}

// BeginVrStereoMode - Begin stereo rendering (requires VR simulator)
func BeginVrStereoMode(config VrStereoConfig) {
	// empty code to make gopls happy on non-web
}

// EndVrStereoMode - End stereo rendering (requires VR simulator)
func EndVrStereoMode() {
	// empty code to make gopls happy on non-web
}

// LoadVrStereoConfig - Load VR stereo config for VR simulator device parameters
func LoadVrStereoConfig(device VrDeviceInfo) VrStereoConfig {
	// empty code to make gopls happy on non-web
	var zero VrStereoConfig
	return zero
}

// UnloadVrStereoConfig - Unload VR stereo config
func UnloadVrStereoConfig(config VrStereoConfig) {
	// empty code to make gopls happy on non-web
}

// LoadShader - Load shader from files and bind default locations
func LoadShader(vsFileName string, fsFileName string) Shader {
	// empty code to make gopls happy on non-web
	var zero Shader
	return zero
}

// LoadShaderFromMemory - Load shader from code strings and bind default locations
func LoadShaderFromMemory(vsCode string, fsCode string) Shader {
	// empty code to make gopls happy on non-web
	var zero Shader
	return zero
}

// IsShaderValid - Check if a shader is valid (loaded on GPU)
func IsShaderValid(shader Shader) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetShaderLocation - Get shader uniform location
func GetShaderLocation(shader Shader, uniformName string) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetShaderLocationAttrib - Get shader attribute location
func GetShaderLocationAttrib(shader Shader, attribName string) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// SetShaderValue - Set shader uniform value
func SetShaderValue(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType) {
	// empty code to make gopls happy on non-web
}

// SetShaderValueV - Set shader uniform value vector
func SetShaderValueV(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType, count int32) {
	// empty code to make gopls happy on non-web
}

// SetShaderValueMatrix - Set shader uniform value (matrix 4x4)
func SetShaderValueMatrix(shader Shader, locIndex int32, mat Matrix) {
	// empty code to make gopls happy on non-web
}

// SetShaderValueTexture - Set shader uniform value for texture (sampler2d)
func SetShaderValueTexture(shader Shader, locIndex int32, texture Texture2D) {
	// empty code to make gopls happy on non-web
}

// UnloadShader - Unload shader from GPU memory (VRAM)
func UnloadShader(shader Shader) {
	// empty code to make gopls happy on non-web
}

// GetMouseRay - Get a ray trace from mouse position
//
// Deprecated: Use [GetScreenToWorldRay] instead.
func GetMouseRay(mousePosition Vector2, camera Camera) Ray {
	// empty code to make gopls happy on non-web
	var zero Ray
	return zero
}

// GetScreenToWorldRay - Get a ray trace from screen position (i.e mouse)
func GetScreenToWorldRay(position Vector2, camera Camera) Ray {
	// empty code to make gopls happy on non-web
	var zero Ray
	return zero
}

// GetScreenToWorldRayEx - Get a ray trace from screen position (i.e mouse) in a viewport
func GetScreenToWorldRayEx(position Vector2, camera Camera, width int32, height int32) Ray {
	// empty code to make gopls happy on non-web
	var zero Ray
	return zero
}

// GetCameraMatrix - Get camera transform matrix (view matrix)
func GetCameraMatrix(camera Camera) Matrix {
	// empty code to make gopls happy on non-web
	var zero Matrix
	return zero
}

// GetCameraMatrix2D - Get camera 2d transform matrix
func GetCameraMatrix2D(camera Camera2D) Matrix {
	// empty code to make gopls happy on non-web
	var zero Matrix
	return zero
}

// GetWorldToScreen - Get the screen space position for a 3d world space position
func GetWorldToScreen(position Vector3, camera Camera) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetScreenToWorld2D - Get the world space position for a 2d camera screen space position
func GetScreenToWorld2D(position Vector2, camera Camera2D) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetWorldToScreenEx - Get size position for a 3d world space position
func GetWorldToScreenEx(position Vector3, camera Camera, width int32, height int32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetWorldToScreen2D - Get the screen space position for a 2d camera world space position
func GetWorldToScreen2D(position Vector2, camera Camera2D) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// SetTargetFPS - Set target FPS (maximum)
func SetTargetFPS(fps int32) {
	// empty code to make gopls happy on non-web
}

// GetFrameTime - Get time in seconds for last frame drawn (delta time)
func GetFrameTime() float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// GetTime - Get elapsed time in seconds since InitWindow()
func GetTime() float64 {
	// empty code to make gopls happy on non-web
	var zero float64
	return zero
}

// GetFPS - Get current FPS
func GetFPS() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// SwapScreenBuffer - Swap back buffer with front buffer (screen drawing)
func SwapScreenBuffer() {
	// empty code to make gopls happy on non-web
}

// PollInputEvents - Register all input events
func PollInputEvents() {
	// empty code to make gopls happy on non-web
}

// WaitTime - Wait for some time (halt program execution)
func WaitTime(seconds float64) {
	// empty code to make gopls happy on non-web
}

// SetRandomSeed - Set the seed for the random number generator
//
// Note: You can use go's math/rand package instead
func SetRandomSeed(seed uint32) {
	// empty code to make gopls happy on non-web
}

// GetRandomValue - Get a random value between min and max (both included)
//
// Note: You can use go's math/rand package instead
func GetRandomValue(minimum int32, maximum int32) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// LoadRandomSequence - Load random values sequence, no values repeated
//
// Note: Use UnloadRandomSequence if you don't need the sequence any more. You can use go's math/rand.Perm function instead.
func LoadRandomSequence(count uint32, minimum int32, maximum int32) []int32 {
	// empty code to make gopls happy on non-web
	var zero []int32
	return zero
}

// UnloadRandomSequence - Unload random values sequence
func UnloadRandomSequence(sequence []int32) {
	// empty code to make gopls happy on non-web
}

// TakeScreenshot - Takes a screenshot of current screen (filename extension defines format)
func TakeScreenshot(fileName string) {
	// empty code to make gopls happy on non-web
}

// SetConfigFlags - Setup init configuration flags (view FLAGS)
func SetConfigFlags(flags uint32) {
	// empty code to make gopls happy on non-web
}

// OpenURL - Open URL with default system browser (if available)
func OpenURL(url string) {
	// empty code to make gopls happy on non-web
}

// TraceLog - Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR...)
func TraceLog(logLevel TraceLogLevel, text string, args ...any) {
	// empty code to make gopls happy on non-web
}

// SetTraceLogLevel - Set the current threshold (minimum) log level
func SetTraceLogLevel(logLevel TraceLogLevel) {
	// empty code to make gopls happy on non-web
}

// MemAlloc - Internal memory allocator
func MemAlloc(size uint32) unsafe.Pointer {
	// empty code to make gopls happy on non-web
	var zero unsafe.Pointer
	return zero
}

// MemRealloc - Internal memory reallocator
func MemRealloc(ptr unsafe.Pointer, size uint32) unsafe.Pointer {
	// empty code to make gopls happy on non-web
	var zero unsafe.Pointer
	return zero
}

// MemFree - Internal memory free
func MemFree(ptr unsafe.Pointer) {
	// empty code to make gopls happy on non-web
}

// IsFileDropped - Check if a file has been dropped into window
func IsFileDropped() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// LoadDroppedFiles - Load dropped filepaths
func LoadDroppedFiles() []string {
	// empty code to make gopls happy on non-web
	var zero []string
	return zero
}

// UnloadDroppedFiles - Unload dropped filepaths
func UnloadDroppedFiles() {
	// empty code to make gopls happy on non-web
}

// LoadAutomationEventList - Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS
func LoadAutomationEventList(fileName string) AutomationEventList {
	// empty code to make gopls happy on non-web
	var zero AutomationEventList
	return zero
}

// UnloadAutomationEventList - Unload automation events list from file
func UnloadAutomationEventList(list *AutomationEventList) {
	// empty code to make gopls happy on non-web
}

// ExportAutomationEventList - Export automation events list as text file
func ExportAutomationEventList(list AutomationEventList, fileName string) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// SetAutomationEventList - Set automation event list to record to
func SetAutomationEventList(list *AutomationEventList) {
	// empty code to make gopls happy on non-web
}

// SetAutomationEventBaseFrame - Set automation event internal base frame to start recording
func SetAutomationEventBaseFrame(frame int) {
	// empty code to make gopls happy on non-web
}

// StartAutomationEventRecording - Start recording automation events (AutomationEventList must be set)
func StartAutomationEventRecording() {
	// empty code to make gopls happy on non-web
}

// StopAutomationEventRecording - Stop recording automation events
func StopAutomationEventRecording() {
	// empty code to make gopls happy on non-web
}

// PlayAutomationEvent - Play a recorded automation event
func PlayAutomationEvent(event AutomationEvent) {
	// empty code to make gopls happy on non-web
}

// IsKeyPressed - Check if a key has been pressed once
func IsKeyPressed(key int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsKeyPressedRepeat - Check if a key has been pressed again (Only PLATFORM_DESKTOP)
func IsKeyPressedRepeat(key int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsKeyDown - Check if a key is being pressed
func IsKeyDown(key int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsKeyReleased - Check if a key has been released once
func IsKeyReleased(key int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsKeyUp - Check if a key is NOT being pressed
func IsKeyUp(key int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetKeyPressed - Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty
func GetKeyPressed() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetCharPressed - Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty
func GetCharPressed() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// SetExitKey - Set a custom key to exit program (default is ESC)
func SetExitKey(key int32) {
	// empty code to make gopls happy on non-web
}

// IsGamepadAvailable - Check if a gamepad is available
func IsGamepadAvailable(gamepad int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetGamepadName - Get gamepad internal name id
func GetGamepadName(gamepad int32) string {
	// empty code to make gopls happy on non-web
	var zero string
	return zero
}

// IsGamepadButtonPressed - Check if a gamepad button has been pressed once
func IsGamepadButtonPressed(gamepad int32, button int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsGamepadButtonDown - Check if a gamepad button is being pressed
func IsGamepadButtonDown(gamepad int32, button int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsGamepadButtonReleased - Check if a gamepad button has been released once
func IsGamepadButtonReleased(gamepad int32, button int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsGamepadButtonUp - Check if a gamepad button is NOT being pressed
func IsGamepadButtonUp(gamepad int32, button int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetGamepadButtonPressed - Get the last gamepad button pressed
func GetGamepadButtonPressed() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetGamepadAxisCount - Get gamepad axis count for a gamepad
func GetGamepadAxisCount(gamepad int32) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetGamepadAxisMovement - Get axis movement value for a gamepad axis
func GetGamepadAxisMovement(gamepad int32, axis int32) float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// SetGamepadMappings - Set internal gamepad mappings (SDL_GameControllerDB)
func SetGamepadMappings(mappings string) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// SetGamepadVibration - Set gamepad vibration for both motors (duration in seconds)
func SetGamepadVibration(gamepad int32, leftMotor float32, rightMotor float32, duration float32) {
	// empty code to make gopls happy on non-web
}

// IsMouseButtonPressed - Check if a mouse button has been pressed once
func IsMouseButtonPressed(button MouseButton) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsMouseButtonDown - Check if a mouse button is being pressed
func IsMouseButtonDown(button MouseButton) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsMouseButtonReleased - Check if a mouse button has been released once
func IsMouseButtonReleased(button MouseButton) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// IsMouseButtonUp - Check if a mouse button is NOT being pressed
func IsMouseButtonUp(button MouseButton) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetMouseX - Get mouse position X
func GetMouseX() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetMouseY - Get mouse position Y
func GetMouseY() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetMousePosition - Get mouse position XY
func GetMousePosition() Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetMouseDelta - Get mouse delta between frames
func GetMouseDelta() Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// SetMousePosition - Set mouse position XY
func SetMousePosition(x int32, y int32) {
	// empty code to make gopls happy on non-web
}

// SetMouseOffset - Set mouse offset
func SetMouseOffset(offsetX int32, offsetY int32) {
	// empty code to make gopls happy on non-web
}

// SetMouseScale - Set mouse scaling
func SetMouseScale(scaleX float32, scaleY float32) {
	// empty code to make gopls happy on non-web
}

// GetMouseWheelMove - Get mouse wheel movement for X or Y, whichever is larger
func GetMouseWheelMove() float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// GetMouseWheelMoveV - Get mouse wheel movement for both X and Y
func GetMouseWheelMoveV() Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// SetMouseCursor - Set mouse cursor
func SetMouseCursor(cursor int32) {
	// empty code to make gopls happy on non-web
}

// GetTouchX - Get touch position X for touch point 0 (relative to screen size)
func GetTouchX() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetTouchY - Get touch position Y for touch point 0 (relative to screen size)
func GetTouchY() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetTouchPosition - Get touch position XY for a touch point index (relative to screen size)
func GetTouchPosition(index int32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetTouchPointId - Get touch point identifier for given index
func GetTouchPointId(index int32) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetTouchPointCount - Get number of touch points
func GetTouchPointCount() int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// SetGesturesEnabled - Enable a set of gestures using flags
func SetGesturesEnabled(flags uint32) {
	// empty code to make gopls happy on non-web
}

// IsGestureDetected - Check if a gesture have been detected
func IsGestureDetected(gesture Gestures) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetGestureDetected - Get latest detected gesture
func GetGestureDetected() Gestures {
	// empty code to make gopls happy on non-web
	var zero Gestures
	return zero
}

// GetGestureHoldDuration - Get gesture hold time in milliseconds
func GetGestureHoldDuration() float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// GetGestureDragVector - Get gesture drag vector
func GetGestureDragVector() Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetGestureDragAngle - Get gesture drag angle
func GetGestureDragAngle() float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// GetGesturePinchVector - Get gesture pinch delta
func GetGesturePinchVector() Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetGesturePinchAngle - Get gesture pinch angle
func GetGesturePinchAngle() float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// SetShapesTexture - Set texture and rectangle to be used on shapes drawing
func SetShapesTexture(texture Texture2D, source Rectangle) {
	// empty code to make gopls happy on non-web
}

// GetShapesTexture - Get texture that is used for shapes drawing
func GetShapesTexture() Texture2D {
	// empty code to make gopls happy on non-web
	var zero Texture2D
	return zero
}

// GetShapesTextureRectangle - Get texture source rectangle that is used for shapes drawing
func GetShapesTextureRectangle() Rectangle {
	// empty code to make gopls happy on non-web
	var zero Rectangle
	return zero
}

// DrawPixel - Draw a pixel
func DrawPixel(posX int32, posY int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawPixelV - Draw a pixel (Vector version)
func DrawPixelV(position Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawLine - Draw a line
func DrawLine(startPosX int32, startPosY int32, endPosX int32, endPosY int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawLineV - Draw a line (using gl lines)
func DrawLineV(startPos Vector2, endPos Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawLineEx - Draw a line (using triangles/quads)
func DrawLineEx(startPos Vector2, endPos Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawLineStrip - Draw lines sequence (using gl lines)
func DrawLineStrip(points []Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawLineBezier - Draw line segment cubic-bezier in-out interpolation
func DrawLineBezier(startPos Vector2, endPos Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircle - Draw a color-filled circle
func DrawCircle(centerX int32, centerY int32, radius float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircleSector - Draw a piece of a circle
func DrawCircleSector(center Vector2, radius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircleSectorLines - Draw circle sector outline
func DrawCircleSectorLines(center Vector2, radius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircleGradient - Draw a gradient-filled circle
func DrawCircleGradient(centerX int32, centerY int32, radius float32, inner color.RGBA, outer color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircleV - Draw a color-filled circle (Vector version)
func DrawCircleV(center Vector2, radius float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircleLines - Draw circle outline
func DrawCircleLines(centerX int32, centerY int32, radius float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircleLinesV - Draw circle outline (Vector version)
func DrawCircleLinesV(center Vector2, radius float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawEllipse - Draw ellipse
func DrawEllipse(centerX int32, centerY int32, radiusH float32, radiusV float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawEllipseLines - Draw ellipse outline
func DrawEllipseLines(centerX int32, centerY int32, radiusH float32, radiusV float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRing - Draw ring
func DrawRing(center Vector2, innerRadius float32, outerRadius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRingLines - Draw ring outline
func DrawRingLines(center Vector2, innerRadius float32, outerRadius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangle - Draw a color-filled rectangle
func DrawRectangle(posX int32, posY int32, width int32, height int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleV - Draw a color-filled rectangle (Vector version)
func DrawRectangleV(position Vector2, size Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleRec - Draw a color-filled rectangle
func DrawRectangleRec(rec Rectangle, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectanglePro - Draw a color-filled rectangle with pro parameters
func DrawRectanglePro(rec Rectangle, origin Vector2, rotation float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleGradientV - Draw a vertical-gradient-filled rectangle
func DrawRectangleGradientV(posX int32, posY int32, width int32, height int32, top color.RGBA, bottom color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleGradientH - Draw a horizontal-gradient-filled rectangle
func DrawRectangleGradientH(posX int32, posY int32, width int32, height int32, left color.RGBA, right color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleGradientEx - Draw a gradient-filled rectangle with custom vertex colors
func DrawRectangleGradientEx(rec Rectangle, topLeft color.RGBA, bottomLeft color.RGBA, topRight color.RGBA, bottomRight color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleLines - Draw rectangle outline
func DrawRectangleLines(posX int32, posY int32, width int32, height int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleLinesEx - Draw rectangle outline with extended parameters
func DrawRectangleLinesEx(rec Rectangle, lineThick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleRounded - Draw rectangle with rounded edges
func DrawRectangleRounded(rec Rectangle, roundness float32, segments int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleRoundedLines - Draw rectangle lines with rounded edges
func DrawRectangleRoundedLines(rec Rectangle, roundness float32, segments int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRectangleRoundedLinesEx - Draw rectangle with rounded edges outline
func DrawRectangleRoundedLinesEx(rec Rectangle, roundness float32, segments int32, lineThick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTriangle - Draw a color-filled triangle (vertex in counter-clockwise order!)
func DrawTriangle(v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTriangleLines - Draw triangle outline (vertex in counter-clockwise order!)
func DrawTriangleLines(v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTriangleFan - Draw a triangle fan defined by points (first vertex is the center)
func DrawTriangleFan(points []Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTriangleStrip - Draw a triangle strip defined by points
func DrawTriangleStrip(points []Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawPoly - Draw a regular polygon (Vector version)
func DrawPoly(center Vector2, sides int32, radius float32, rotation float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawPolyLines - Draw a polygon outline of n sides
func DrawPolyLines(center Vector2, sides int32, radius float32, rotation float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawPolyLinesEx - Draw a polygon outline of n sides with extended parameters
func DrawPolyLinesEx(center Vector2, sides int32, radius float32, rotation float32, lineThick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineLinear - Draw spline: Linear, minimum 2 points
func DrawSplineLinear(points []Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineBasis - Draw spline: B-Spline, minimum 4 points
func DrawSplineBasis(points []Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineCatmullRom - Draw spline: Catmull-Rom, minimum 4 points
func DrawSplineCatmullRom(points []Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineBezierQuadratic - Draw spline: Quadratic Bezier, minimum 3 points (1 control point): [p1, c2, p3, c4...]
func DrawSplineBezierQuadratic(points []Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineBezierCubic - Draw spline: Cubic Bezier, minimum 4 points (2 control points): [p1, c2, c3, p4, c5, c6...]
func DrawSplineBezierCubic(points []Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineSegmentLinear - Draw spline segment: Linear, 2 points
func DrawSplineSegmentLinear(p1 Vector2, p2 Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineSegmentBasis - Draw spline segment: B-Spline, 4 points
func DrawSplineSegmentBasis(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineSegmentCatmullRom - Draw spline segment: Catmull-Rom, 4 points
func DrawSplineSegmentCatmullRom(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineSegmentBezierQuadratic - Draw spline segment: Quadratic Bezier, 2 points, 1 control point
func DrawSplineSegmentBezierQuadratic(p1 Vector2, c2 Vector2, p3 Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSplineSegmentBezierCubic - Draw spline segment: Cubic Bezier, 2 points, 2 control points
func DrawSplineSegmentBezierCubic(p1 Vector2, c2 Vector2, c3 Vector2, p4 Vector2, thick float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// GetSplinePointLinear - Get (evaluate) spline point: Linear
func GetSplinePointLinear(startPos Vector2, endPos Vector2, t float32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetSplinePointBasis - Get (evaluate) spline point: B-Spline
func GetSplinePointBasis(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, t float32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetSplinePointCatmullRom - Get (evaluate) spline point: Catmull-Rom
func GetSplinePointCatmullRom(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, t float32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetSplinePointBezierQuad - Get (evaluate) spline point: Quadratic Bezier
func GetSplinePointBezierQuad(p1 Vector2, c2 Vector2, p3 Vector2, t float32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetSplinePointBezierCubic - Get (evaluate) spline point: Cubic Bezier
func GetSplinePointBezierCubic(p1 Vector2, c2 Vector2, c3 Vector2, p4 Vector2, t float32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// CheckCollisionRecs - Check collision between two rectangles
func CheckCollisionRecs(rec1 Rectangle, rec2 Rectangle) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionCircles - Check collision between two circles
func CheckCollisionCircles(center1 Vector2, radius1 float32, center2 Vector2, radius2 float32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionCircleRec - Check collision between circle and rectangle
func CheckCollisionCircleRec(center Vector2, radius float32, rec Rectangle) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionCircleLine - Check if circle collides with a line created betweeen two points [p1] and [p2]
func CheckCollisionCircleLine(center Vector2, radius float32, p1 Vector2, p2 Vector2) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionPointRec - Check if point is inside rectangle
func CheckCollisionPointRec(point Vector2, rec Rectangle) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionPointCircle - Check if point is inside circle
func CheckCollisionPointCircle(point Vector2, center Vector2, radius float32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionPointTriangle - Check if point is inside a triangle
func CheckCollisionPointTriangle(point Vector2, p1 Vector2, p2 Vector2, p3 Vector2) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionPointPoly - Check if point is within a polygon described by array of vertices
func CheckCollisionPointPoly(point Vector2, points []Vector2) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionLines - Check the collision between two lines defined by two points each, returns collision point by reference
func CheckCollisionLines(startPos1 Vector2, endPos1 Vector2, startPos2 Vector2, endPos2 Vector2, collisionPoint *Vector2) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionPointLine - Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]
func CheckCollisionPointLine(point Vector2, p1 Vector2, p2 Vector2, threshold int32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetCollisionRec - Get collision rectangle for two rectangles collision
func GetCollisionRec(rec1 Rectangle, rec2 Rectangle) Rectangle {
	// empty code to make gopls happy on non-web
	var zero Rectangle
	return zero
}

// LoadImageAnimFromMemory - Load image sequence from memory buffer
func LoadImageAnimFromMemory(fileType string, fileData []byte, dataSize int32, frames *int32) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// LoadImageFromMemory - Load image from memory buffer, fileType refers to extension: i.e. '.png'
func LoadImageFromMemory(fileType string, fileData []byte, dataSize int32) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// LoadImageFromTexture - Load image from GPU texture data
func LoadImageFromTexture(texture Texture2D) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// LoadImageFromScreen - Load image from screen buffer and (screenshot)
func LoadImageFromScreen() *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// IsImageValid - Check if an image is valid (data and parameters)
func IsImageValid(image *Image) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UnloadImage - Unload image from CPU memory (RAM)
func UnloadImage(image *Image) {
	// empty code to make gopls happy on non-web
}

// ExportImage - Export image data to file, returns true on success
func ExportImage(image Image, fileName string) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// ExportImageToMemory - Export image to memory buffer
func ExportImageToMemory(image Image, fileType string) []byte {
	// empty code to make gopls happy on non-web
	var zero []byte
	return zero
}

// GenImageColor - Generate image: plain color
func GenImageColor(width int, height int, col color.RGBA) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImageGradientLinear - Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient
func GenImageGradientLinear(width int, height int, direction int, start color.RGBA, end color.RGBA) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImageGradientRadial - Generate image: radial gradient
func GenImageGradientRadial(width int, height int, density float32, inner color.RGBA, outer color.RGBA) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImageGradientSquare - Generate image: square gradient
func GenImageGradientSquare(width int, height int, density float32, inner color.RGBA, outer color.RGBA) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImageChecked - Generate image: checked
func GenImageChecked(width int, height int, checksX int, checksY int, col1 color.RGBA, col2 color.RGBA) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImageWhiteNoise - Generate image: white noise
func GenImageWhiteNoise(width int, height int, factor float32) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImagePerlinNoise - Generate image: perlin noise
func GenImagePerlinNoise(width int, height int, offsetX int32, offsetY int32, scale float32) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImageCellular - Generate image: cellular algorithm, bigger tileSize means bigger cells
func GenImageCellular(width int, height int, tileSize int) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// GenImageText - Generate image: grayscale image from text data
func GenImageText(width int, height int, text string) Image {
	// empty code to make gopls happy on non-web
	var zero Image
	return zero
}

// ImageCopy - Create an image duplicate (useful for transformations)
func ImageCopy(image *Image) *Image {
	// empty code to make gopls happy on non-web
	var zero *Image
	return zero
}

// ImageFromImage - Create an image from another image piece
func ImageFromImage(image Image, rec Rectangle) Image {
	// empty code to make gopls happy on non-web
	var zero Image
	return zero
}

// ImageFromChannel - Create an image from a selected channel of another image (GRAYSCALE)
func ImageFromChannel(image Image, selectedChannel int32) Image {
	// empty code to make gopls happy on non-web
	var zero Image
	return zero
}

// ImageText - Create an image from text (default font)
func ImageText(text string, fontSize int32, col color.RGBA) Image {
	// empty code to make gopls happy on non-web
	var zero Image
	return zero
}

// ImageTextEx - Create an image from text (custom sprite font)
func ImageTextEx(font Font, text string, fontSize float32, spacing float32, tint color.RGBA) Image {
	// empty code to make gopls happy on non-web
	var zero Image
	return zero
}

// ImageFormat - Convert image data to desired format
func ImageFormat(image *Image, newFormat PixelFormat) {
	// empty code to make gopls happy on non-web
}

// ImageToPOT - Convert image to POT (power-of-two)
func ImageToPOT(image *Image, fill color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageCrop - Crop an image to a defined rectangle
func ImageCrop(image *Image, crop Rectangle) {
	// empty code to make gopls happy on non-web
}

// ImageAlphaCrop - Crop image depending on alpha value
func ImageAlphaCrop(image *Image, threshold float32) {
	// empty code to make gopls happy on non-web
}

// ImageAlphaClear - Clear alpha channel to desired color
func ImageAlphaClear(image *Image, col color.RGBA, threshold float32) {
	// empty code to make gopls happy on non-web
}

// ImageAlphaMask - Apply alpha mask to image
func ImageAlphaMask(image *Image, alphaMask *Image) {
	// empty code to make gopls happy on non-web
}

// ImageAlphaPremultiply - Premultiply alpha channel
func ImageAlphaPremultiply(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageBlurGaussian - Apply Gaussian blur using a box blur approximation
func ImageBlurGaussian(image *Image, blurSize int32) {
	// empty code to make gopls happy on non-web
}

// ImageKernelConvolution - Apply custom square convolution kernel to image
func ImageKernelConvolution(image *Image, kernel []float32) {
	// empty code to make gopls happy on non-web
}

// ImageResize - Resize image (Bicubic scaling algorithm)
func ImageResize(image *Image, newWidth int32, newHeight int32) {
	// empty code to make gopls happy on non-web
}

// ImageResizeNN - Resize image (Nearest-Neighbor scaling algorithm)
func ImageResizeNN(image *Image, newWidth int32, newHeight int32) {
	// empty code to make gopls happy on non-web
}

// ImageResizeCanvas - Resize canvas and fill with color
func ImageResizeCanvas(image *Image, newWidth int32, newHeight int32, offsetX int32, offsetY int32, fill color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageMipmaps - Compute all mipmap levels for a provided image
func ImageMipmaps(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageDither - Dither image data to 16bpp or lower (Floyd-Steinberg dithering)
func ImageDither(image *Image, rBpp int32, gBpp int32, bBpp int32, aBpp int32) {
	// empty code to make gopls happy on non-web
}

// ImageFlipVertical - Flip image vertically
func ImageFlipVertical(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageFlipHorizontal - Flip image horizontally
func ImageFlipHorizontal(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageRotate - Rotate image by input angle in degrees (-359 to 359)
func ImageRotate(image *Image, degrees int32) {
	// empty code to make gopls happy on non-web
}

// ImageRotateCW - Rotate image clockwise 90deg
func ImageRotateCW(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageRotateCCW - Rotate image counter-clockwise 90deg
func ImageRotateCCW(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageColorTint - Modify image color: tint
func ImageColorTint(image *Image, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageColorInvert - Modify image color: invert
func ImageColorInvert(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageColorGrayscale - Modify image color: grayscale
func ImageColorGrayscale(image *Image) {
	// empty code to make gopls happy on non-web
}

// ImageColorContrast - Modify image color: contrast (-100 to 100)
func ImageColorContrast(image *Image, contrast float32) {
	// empty code to make gopls happy on non-web
}

// ImageColorBrightness - Modify image color: brightness (-255 to 255)
func ImageColorBrightness(image *Image, brightness int32) {
	// empty code to make gopls happy on non-web
}

// ImageColorReplace - Modify image color: replace color
func ImageColorReplace(image *Image, col color.RGBA, replace color.RGBA) {
	// empty code to make gopls happy on non-web
}

// LoadImageColors - Load color data from image as a Color array (RGBA - 32bit)
//
// NOTE: Memory allocated should be freed using UnloadImageColors()
func LoadImageColors(image *Image) []color.RGBA {
	// empty code to make gopls happy on non-web
	var zero []color.RGBA
	return zero
}

// LoadImagePalette - Load colors palette from image as a Color array (RGBA - 32bit)
//
// NOTE: Memory allocated should be freed using UnloadImagePalette()
func LoadImagePalette(image Image, maxPaletteSize int32) []color.RGBA {
	// empty code to make gopls happy on non-web
	var zero []color.RGBA
	return zero
}

// UnloadImageColors - Unload color data loaded with LoadImageColors()
func UnloadImageColors(colors []color.RGBA) {
	// empty code to make gopls happy on non-web
}

// UnloadImagePalette - Unload colors palette loaded with LoadImagePalette()
func UnloadImagePalette(colors []color.RGBA) {
	// empty code to make gopls happy on non-web
}

// GetImageAlphaBorder - Get image alpha border rectangle
func GetImageAlphaBorder(image Image, threshold float32) Rectangle {
	// empty code to make gopls happy on non-web
	var zero Rectangle
	return zero
}

// GetImageColor - Get image pixel color at (x, y) position
func GetImageColor(image Image, x int32, y int32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ImageClearBackground - Clear image background with given color
func ImageClearBackground(dst *Image, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawPixel - Draw pixel within an image
func ImageDrawPixel(dst *Image, posX int32, posY int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawPixelV - Draw pixel within an image (Vector version)
func ImageDrawPixelV(dst *Image, position Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawLine - Draw line within an image
func ImageDrawLine(dst *Image, startPosX int32, startPosY int32, endPosX int32, endPosY int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawLineV - Draw line within an image (Vector version)
func ImageDrawLineV(dst *Image, start Vector2, end Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawLineEx - Draw a line defining thickness within an image
func ImageDrawLineEx(dst *Image, start Vector2, end Vector2, thick int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawCircle - Draw a filled circle within an image
func ImageDrawCircle(dst *Image, centerX int32, centerY int32, radius int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawCircleV - Draw a filled circle within an image (Vector version)
func ImageDrawCircleV(dst *Image, center Vector2, radius int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawCircleLines - Draw circle outline within an image
func ImageDrawCircleLines(dst *Image, centerX int32, centerY int32, radius int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawCircleLinesV - Draw circle outline within an image (Vector version)
func ImageDrawCircleLinesV(dst *Image, center Vector2, radius int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawRectangle - Draw rectangle within an image
func ImageDrawRectangle(dst *Image, posX int32, posY int32, width int32, height int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawRectangleV - Draw rectangle within an image (Vector version)
func ImageDrawRectangleV(dst *Image, position Vector2, size Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawRectangleRec - Draw rectangle within an image
func ImageDrawRectangleRec(dst *Image, rec Rectangle, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawRectangleLines - Draw rectangle lines within an image
func ImageDrawRectangleLines(dst *Image, rec Rectangle, thick int, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawTriangle - Draw triangle within an image
func ImageDrawTriangle(dst *Image, v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawTriangleEx - Draw triangle with interpolated colors within an image
func ImageDrawTriangleEx(dst *Image, v1 Vector2, v2 Vector2, v3 Vector2, c1 color.RGBA, c2 color.RGBA, c3 color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawTriangleLines - Draw triangle outline within an image
func ImageDrawTriangleLines(dst *Image, v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawTriangleFan - Draw a triangle fan defined by points within an image (first vertex is the center)
func ImageDrawTriangleFan(dst *Image, points []Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawTriangleStrip - Draw a triangle strip defined by points within an image
func ImageDrawTriangleStrip(dst *Image, points []Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDraw - Draw a source image within a destination image (tint applied to source)
func ImageDraw(dst *Image, src *Image, srcRec Rectangle, dstRec Rectangle, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawText - Draw text (using default font) within an image (destination)
func ImageDrawText(dst *Image, posX int32, posY int32, text string, fontSize int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// ImageDrawTextEx - Draw text (custom sprite font) within an image (destination)
func ImageDrawTextEx(dst *Image, position Vector2, font Font, text string, fontSize float32, spacing float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// LoadTextureFromImage - Load texture from image data
func LoadTextureFromImage(image *Image) Texture2D {
	// empty code to make gopls happy on non-web
	var zero Texture2D
	return zero
}

// LoadTextureCubemap - Load cubemap from image, multiple image cubemap layouts supported
func LoadTextureCubemap(image *Image, layout int32) Texture2D {
	// empty code to make gopls happy on non-web
	var zero Texture2D
	return zero
}

// LoadRenderTexture - Load texture for rendering (framebuffer)
func LoadRenderTexture(width int32, height int32) RenderTexture2D {
	// empty code to make gopls happy on non-web
	var zero RenderTexture2D
	return zero
}

// IsTextureValid - Check if a texture is valid (loaded in GPU)
func IsTextureValid(texture Texture2D) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UnloadTexture - Unload texture from GPU memory (VRAM)
func UnloadTexture(texture Texture2D) {
	// empty code to make gopls happy on non-web
}

// IsRenderTextureValid - Check if a render texture is valid (loaded in GPU)
func IsRenderTextureValid(target RenderTexture2D) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UnloadRenderTexture - Unload render texture from GPU memory (VRAM)
func UnloadRenderTexture(target RenderTexture2D) {
	// empty code to make gopls happy on non-web
}

// UpdateTexture - Update GPU texture with new data
func UpdateTexture(texture Texture2D, pixels []color.RGBA) {
	// empty code to make gopls happy on non-web
}

// UpdateTextureRec - Update GPU texture rectangle with new data
func UpdateTextureRec(texture Texture2D, rec Rectangle, pixels []color.RGBA) {
	// empty code to make gopls happy on non-web
}

// GenTextureMipmaps - Generate GPU mipmaps for a texture
func GenTextureMipmaps(texture *Texture2D) {
	// empty code to make gopls happy on non-web
}

// SetTextureFilter - Set texture scaling filter mode
func SetTextureFilter(texture Texture2D, filter TextureFilterMode) {
	// empty code to make gopls happy on non-web
}

// SetTextureWrap - Set texture wrapping mode
func SetTextureWrap(texture Texture2D, wrap TextureWrapMode) {
	// empty code to make gopls happy on non-web
}

// DrawTexture - Draw a Texture2D
func DrawTexture(texture Texture2D, posX int32, posY int32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextureV - Draw a Texture2D with position defined as Vector2
func DrawTextureV(texture Texture2D, position Vector2, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextureEx - Draw a Texture2D with extended parameters
func DrawTextureEx(texture Texture2D, position Vector2, rotation float32, scale float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextureRec - Draw a part of a texture defined by a rectangle
func DrawTextureRec(texture Texture2D, source Rectangle, position Vector2, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTexturePro - Draw a part of a texture defined by a rectangle with 'pro' parameters
func DrawTexturePro(texture Texture2D, source Rectangle, dest Rectangle, origin Vector2, rotation float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextureNPatch - Draws a texture (or part of it) that stretches or shrinks nicely
func DrawTextureNPatch(texture Texture2D, nPatchInfo NPatchInfo, dest Rectangle, origin Vector2, rotation float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// Fade - Get color with alpha applied, alpha goes from 0.0f to 1.0f
func Fade(col color.RGBA, alpha float32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorToInt - Get hexadecimal value for a Color (0xRRGGBBAA)
func ColorToInt(col color.RGBA) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// ColorNormalize - Get Color normalized as float [0..1]
func ColorNormalize(col color.RGBA) Vector4 {
	// empty code to make gopls happy on non-web
	var zero Vector4
	return zero
}

// ColorFromNormalized - Get Color from normalized values [0..1]
func ColorFromNormalized(normalized Vector4) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorToHSV - Get HSV values for a Color, hue [0..360], saturation/value [0..1]
func ColorToHSV(col color.RGBA) Vector3 {
	// empty code to make gopls happy on non-web
	var zero Vector3
	return zero
}

// ColorFromHSV - Get a Color from HSV values, hue [0..360], saturation/value [0..1]
func ColorFromHSV(hue float32, saturation float32, value float32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorTint - Get color multiplied with another color
func ColorTint(col color.RGBA, tint color.RGBA) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorBrightness - Get color with brightness correction, brightness factor goes from -1.0f to 1.0f
func ColorBrightness(col color.RGBA, factor float32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorContrast - Get color with contrast correction, contrast values between -1.0f and 1.0f
func ColorContrast(col color.RGBA, contrast float32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorAlpha - Get color with alpha applied, alpha goes from 0.0f to 1.0f
func ColorAlpha(col color.RGBA, alpha float32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorAlphaBlend - Get src alpha-blended into dst color with tint
func ColorAlphaBlend(dst color.RGBA, src color.RGBA, tint color.RGBA) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// ColorLerp - Get color lerp interpolation between two colors, factor [0.0f..1.0f]
func ColorLerp(col1 color.RGBA, col2 color.RGBA, factor float32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// GetColor - Get Color structure from hexadecimal value
func GetColor(hexValue uint) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// GetPixelColor - Get Color from a source pixel pointer of certain format
func GetPixelColor(srcPtr unsafe.Pointer, format int32) color.RGBA {
	// empty code to make gopls happy on non-web
	var zero color.RGBA
	return zero
}

// SetPixelColor - Set color formatted into destination pixel pointer
func SetPixelColor(dstPtr unsafe.Pointer, col color.RGBA, format int32) {
	// empty code to make gopls happy on non-web
}

// GetPixelDataSize - Get pixel data size in bytes for certain format
func GetPixelDataSize(width int32, height int32, format int32) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetFontDefault - Get the default Font
func GetFontDefault() Font {
	// empty code to make gopls happy on non-web
	var zero Font
	return zero
}

// LoadFontFromImage - Load font from Image (XNA style)
func LoadFontFromImage(image Image, key color.RGBA, firstChar rune) Font {
	// empty code to make gopls happy on non-web
	var zero Font
	return zero
}

// LoadFontFromMemory - Load font from memory buffer, fileType refers to extension: i.e. '.ttf'
func LoadFontFromMemory(fileType string, fileData []byte, fontSize int32, codepoints []rune) Font {
	// empty code to make gopls happy on non-web
	var zero Font
	return zero
}

// IsFontValid - Check if a font is valid (font data loaded, WARNING: GPU texture not checked)
func IsFontValid(font Font) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// LoadFontData - Load font data for further use
func LoadFontData(fileData []byte, fontSize int32, codepoints []rune, codepointCount int32, typ int32) []GlyphInfo {
	// empty code to make gopls happy on non-web
	var zero []GlyphInfo
	return zero
}

// GenImageFontAtlas - Generate image font atlas using chars info
func GenImageFontAtlas(glyphs []GlyphInfo, glyphRecs []*Rectangle, fontSize int32, padding int32, packMethod int32) Image {
	// empty code to make gopls happy on non-web
	var zero Image
	return zero
}

// UnloadFontData - Unload font chars info data (RAM)
func UnloadFontData(glyphs []GlyphInfo) {
	// empty code to make gopls happy on non-web
}

// UnloadFont - Unload font from GPU memory (VRAM)
func UnloadFont(font Font) {
	// empty code to make gopls happy on non-web
}

// DrawFPS - Draw current FPS
func DrawFPS(posX int32, posY int32) {
	// empty code to make gopls happy on non-web
}

// DrawText - Draw text (using default font)
func DrawText(text string, posX int32, posY int32, fontSize int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextEx - Draw text using font and additional parameters
func DrawTextEx(font Font, text string, position Vector2, fontSize float32, spacing float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextPro - Draw text using Font and pro parameters (rotation)
func DrawTextPro(font Font, text string, position Vector2, origin Vector2, rotation float32, fontSize float32, spacing float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextCodepoint - Draw one character (codepoint)
func DrawTextCodepoint(font Font, codepoint rune, position Vector2, fontSize float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTextCodepoints - Draw multiple character (codepoint)
func DrawTextCodepoints(font Font, codepoints []rune, position Vector2, fontSize float32, spacing float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// SetTextLineSpacing - Set vertical line spacing when drawing with line-breaks
func SetTextLineSpacing(spacing int) {
	// empty code to make gopls happy on non-web
}

// MeasureText - Measure string width for default font
func MeasureText(text string, fontSize int32) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// MeasureTextEx - Measure string size for Font
func MeasureTextEx(font Font, text string, fontSize float32, spacing float32) Vector2 {
	// empty code to make gopls happy on non-web
	var zero Vector2
	return zero
}

// GetGlyphIndex - Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found
func GetGlyphIndex(font Font, codepoint rune) int32 {
	// empty code to make gopls happy on non-web
	var zero int32
	return zero
}

// GetGlyphInfo - Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found
func GetGlyphInfo(font Font, codepoint rune) GlyphInfo {
	// empty code to make gopls happy on non-web
	var zero GlyphInfo
	return zero
}

// GetGlyphAtlasRec - Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found
func GetGlyphAtlasRec(font Font, codepoint rune) Rectangle {
	// empty code to make gopls happy on non-web
	var zero Rectangle
	return zero
}

// DrawLine3D - Draw a line in 3D world space
func DrawLine3D(startPos Vector3, endPos Vector3, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawPoint3D - Draw a point in 3D space, actually a small line
func DrawPoint3D(position Vector3, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCircle3D - Draw a circle in 3D world space
func DrawCircle3D(center Vector3, radius float32, rotationAxis Vector3, rotationAngle float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTriangle3D - Draw a color-filled triangle (vertex in counter-clockwise order!)
func DrawTriangle3D(v1 Vector3, v2 Vector3, v3 Vector3, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawTriangleStrip3D - Draw a triangle strip defined by points
func DrawTriangleStrip3D(points []Vector3, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCube - Draw cube
func DrawCube(position Vector3, width float32, height float32, length float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCubeV - Draw cube (Vector version)
func DrawCubeV(position Vector3, size Vector3, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCubeWires - Draw cube wires
func DrawCubeWires(position Vector3, width float32, height float32, length float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCubeWiresV - Draw cube wires (Vector version)
func DrawCubeWiresV(position Vector3, size Vector3, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSphere - Draw sphere
func DrawSphere(centerPos Vector3, radius float32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSphereEx - Draw sphere with extended parameters
func DrawSphereEx(centerPos Vector3, radius float32, rings int32, slices int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawSphereWires - Draw sphere wires
func DrawSphereWires(centerPos Vector3, radius float32, rings int32, slices int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCylinder - Draw a cylinder/cone
func DrawCylinder(position Vector3, radiusTop float32, radiusBottom float32, height float32, slices int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCylinderEx - Draw a cylinder with base at startPos and top at endPos
func DrawCylinderEx(startPos Vector3, endPos Vector3, startRadius float32, endRadius float32, sides int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCylinderWires - Draw a cylinder/cone wires
func DrawCylinderWires(position Vector3, radiusTop float32, radiusBottom float32, height float32, slices int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCylinderWiresEx - Draw a cylinder wires with base at startPos and top at endPos
func DrawCylinderWiresEx(startPos Vector3, endPos Vector3, startRadius float32, endRadius float32, sides int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCapsule - Draw a capsule with the center of its sphere caps at startPos and endPos
func DrawCapsule(startPos Vector3, endPos Vector3, radius float32, slices int32, rings int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawCapsuleWires - Draw capsule wireframe with the center of its sphere caps at startPos and endPos
func DrawCapsuleWires(startPos Vector3, endPos Vector3, radius float32, slices int32, rings int32, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawPlane - Draw a plane XZ
func DrawPlane(centerPos Vector3, size Vector2, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawRay - Draw a ray line
func DrawRay(ray Ray, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawGrid - Draw a grid (centered at (0, 0, 0))
func DrawGrid(slices int32, spacing float32) {
	// empty code to make gopls happy on non-web
}

// LoadModelFromMesh - Load model from generated mesh (default material)
func LoadModelFromMesh(mesh Mesh) Model {
	// empty code to make gopls happy on non-web
	var zero Model
	return zero
}

// IsModelValid - Check if a model is valid (loaded in GPU, VAO/VBOs)
func IsModelValid(model Model) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UnloadModel - Unload model (including meshes) from memory (RAM and/or VRAM)
func UnloadModel(model Model) {
	// empty code to make gopls happy on non-web
}

// GetModelBoundingBox - Compute model bounding box limits (considers all meshes)
func GetModelBoundingBox(model Model) BoundingBox {
	// empty code to make gopls happy on non-web
	var zero BoundingBox
	return zero
}

// DrawModel - Draw a model (with texture if set)
func DrawModel(model Model, position Vector3, scale float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawModelEx - Draw a model with extended parameters
func DrawModelEx(model Model, position Vector3, rotationAxis Vector3, rotationAngle float32, scale Vector3, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawModelWires - Draw a model wires (with texture if set)
func DrawModelWires(model Model, position Vector3, scale float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawModelWiresEx - Draw a model wires (with texture if set) with extended parameters
func DrawModelWiresEx(model Model, position Vector3, rotationAxis Vector3, rotationAngle float32, scale Vector3, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawModelPoints - Draw a model as points
func DrawModelPoints(model Model, position Vector3, scale float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawModelPointsEx - Draw a model as points with extended parameters
func DrawModelPointsEx(model Model, position Vector3, rotationAxis Vector3, rotationAngle float32, scale Vector3, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawBoundingBox - Draw bounding box (wires)
func DrawBoundingBox(box BoundingBox, col color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawBillboard - Draw a billboard texture
func DrawBillboard(camera Camera, texture Texture2D, position Vector3, scale float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawBillboardRec - Draw a billboard texture defined by source
func DrawBillboardRec(camera Camera, texture Texture2D, source Rectangle, position Vector3, size Vector2, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// DrawBillboardPro - Draw a billboard texture defined by source and rotation
func DrawBillboardPro(camera Camera, texture Texture2D, source Rectangle, position Vector3, up Vector3, size Vector2, origin Vector2, rotation float32, tint color.RGBA) {
	// empty code to make gopls happy on non-web
}

// UploadMesh - Upload mesh vertex data in GPU and provide VAO/VBO ids
func UploadMesh(mesh *Mesh, dynamic bool) {
	// empty code to make gopls happy on non-web
}

// UpdateMeshBuffer - Update mesh vertex data in GPU for a specific buffer index
func UpdateMeshBuffer(mesh Mesh, index int32, data []byte, offset int) {
	// empty code to make gopls happy on non-web
}

// UnloadMesh - Unload mesh data from CPU and GPU
func UnloadMesh(mesh *Mesh) {
	// empty code to make gopls happy on non-web
}

// DrawMesh - Draw a 3d mesh with material and transform
func DrawMesh(mesh Mesh, material Material, transform Matrix) {
	// empty code to make gopls happy on non-web
}

// DrawMeshInstanced - Draw multiple mesh instances with material and different transforms
func DrawMeshInstanced(mesh Mesh, material Material, transforms []Matrix, instances int32) {
	// empty code to make gopls happy on non-web
}

// ExportMesh - Export mesh data to file, returns true on success
func ExportMesh(mesh Mesh, fileName string) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetMeshBoundingBox - Compute mesh bounding box limits
func GetMeshBoundingBox(mesh Mesh) BoundingBox {
	// empty code to make gopls happy on non-web
	var zero BoundingBox
	return zero
}

// GenMeshTangents - Compute mesh tangents
func GenMeshTangents(mesh *Mesh) {
	// empty code to make gopls happy on non-web
}

// GenMeshPoly - Generate polygonal mesh
func GenMeshPoly(sides int, radius float32) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshPlane - Generate plane mesh (with subdivisions)
func GenMeshPlane(width float32, length float32, resX int, resZ int) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshCube - Generate cuboid mesh
func GenMeshCube(width float32, height float32, length float32) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshSphere - Generate sphere mesh (standard sphere)
func GenMeshSphere(radius float32, rings int, slices int) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshHemiSphere - Generate half-sphere mesh (no bottom cap)
func GenMeshHemiSphere(radius float32, rings int, slices int) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshCylinder - Generate cylinder mesh
func GenMeshCylinder(radius float32, height float32, slices int) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshCone - Generate cone/pyramid mesh
func GenMeshCone(radius float32, height float32, slices int) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshTorus - Generate torus mesh
func GenMeshTorus(radius float32, size float32, radSeg int, sides int) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshKnot - Generate trefoil knot mesh
func GenMeshKnot(radius float32, size float32, radSeg int, sides int) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshHeightmap - Generate heightmap mesh from image data
func GenMeshHeightmap(heightmap Image, size Vector3) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// GenMeshCubicmap - Generate cubes-based map mesh from image data
func GenMeshCubicmap(cubicmap Image, cubeSize Vector3) Mesh {
	// empty code to make gopls happy on non-web
	var zero Mesh
	return zero
}

// LoadMaterialDefault - Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps)
func LoadMaterialDefault() Material {
	// empty code to make gopls happy on non-web
	var zero Material
	return zero
}

// IsMaterialValid - Check if a material is valid (shader assigned, map textures loaded in GPU)
func IsMaterialValid(material Material) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UnloadMaterial - Unload material from GPU memory (VRAM)
func UnloadMaterial(material Material) {
	// empty code to make gopls happy on non-web
}

// SetMaterialTexture - Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...)
func SetMaterialTexture(material *Material, mapType int32, texture Texture2D) {
	// empty code to make gopls happy on non-web
}

// SetModelMeshMaterial - Set material for a mesh
func SetModelMeshMaterial(model *Model, meshId int32, materialId int32) {
	// empty code to make gopls happy on non-web
}

// UpdateModelAnimation - Update model animation pose (CPU)
func UpdateModelAnimation(model Model, anim ModelAnimation, frame int32) {
	// empty code to make gopls happy on non-web
}

// UpdateModelAnimationBones - Update model animation mesh bone matrices (GPU skinning)
func UpdateModelAnimationBones(model Model, anim ModelAnimation, frame int32) {
	// empty code to make gopls happy on non-web
}

// UnloadModelAnimation - Unload animation data
func UnloadModelAnimation(anim ModelAnimation) {
	// empty code to make gopls happy on non-web
}

// UnloadModelAnimations - Unload animation array data
func UnloadModelAnimations(animations []ModelAnimation) {
	// empty code to make gopls happy on non-web
}

// IsModelAnimationValid - Check model animation skeleton match
func IsModelAnimationValid(model Model, anim ModelAnimation) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionSpheres - Check collision between two spheres
func CheckCollisionSpheres(center1 Vector3, radius1 float32, center2 Vector3, radius2 float32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionBoxes - Check collision between two bounding boxes
func CheckCollisionBoxes(box1 BoundingBox, box2 BoundingBox) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// CheckCollisionBoxSphere - Check collision between box and sphere
func CheckCollisionBoxSphere(box BoundingBox, center Vector3, radius float32) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// GetRayCollisionSphere - Get collision info between ray and sphere
func GetRayCollisionSphere(ray Ray, center Vector3, radius float32) RayCollision {
	// empty code to make gopls happy on non-web
	var zero RayCollision
	return zero
}

// GetRayCollisionBox - Get collision info between ray and box
func GetRayCollisionBox(ray Ray, box BoundingBox) RayCollision {
	// empty code to make gopls happy on non-web
	var zero RayCollision
	return zero
}

// GetRayCollisionMesh - Get collision info between ray and mesh
func GetRayCollisionMesh(ray Ray, mesh Mesh, transform Matrix) RayCollision {
	// empty code to make gopls happy on non-web
	var zero RayCollision
	return zero
}

// GetRayCollisionTriangle - Get collision info between ray and triangle
func GetRayCollisionTriangle(ray Ray, p1 Vector3, p2 Vector3, p3 Vector3) RayCollision {
	// empty code to make gopls happy on non-web
	var zero RayCollision
	return zero
}

// GetRayCollisionQuad - Get collision info between ray and quad
func GetRayCollisionQuad(ray Ray, p1 Vector3, p2 Vector3, p3 Vector3, p4 Vector3) RayCollision {
	// empty code to make gopls happy on non-web
	var zero RayCollision
	return zero
}

// InitAudioDevice - Initialize audio device and context
func InitAudioDevice() {
	// empty code to make gopls happy on non-web
}

// CloseAudioDevice - Close the audio device and context
func CloseAudioDevice() {
	// empty code to make gopls happy on non-web
}

// IsAudioDeviceReady - Check if audio device has been initialized successfully
func IsAudioDeviceReady() bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// SetMasterVolume - Set master volume (listener)
func SetMasterVolume(volume float32) {
	// empty code to make gopls happy on non-web
}

// GetMasterVolume - Get master volume (listener)
func GetMasterVolume() float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// LoadWaveFromMemory - Load wave from memory buffer, fileType refers to extension: i.e. '.wav'
func LoadWaveFromMemory(fileType string, fileData []byte, dataSize int32) Wave {
	// empty code to make gopls happy on non-web
	var zero Wave
	return zero
}

// IsWaveValid - Checks if wave data is valid (data loaded and parameters)
func IsWaveValid(wave Wave) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// LoadSoundFromWave - Load sound from wave data
func LoadSoundFromWave(wave Wave) Sound {
	// empty code to make gopls happy on non-web
	var zero Sound
	return zero
}

// LoadSoundAlias - Create a new sound that shares the same sample data as the source sound, does not own the sound data
func LoadSoundAlias(source Sound) Sound {
	// empty code to make gopls happy on non-web
	var zero Sound
	return zero
}

// IsSoundValid - Checks if a sound is valid (data loaded and buffers initialized)
func IsSoundValid(sound Sound) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UpdateSound - Update sound buffer with new data
func UpdateSound(sound Sound, data []byte, sampleCount int32) {
	// empty code to make gopls happy on non-web
}

// UnloadWave - Unload wave data
func UnloadWave(wave Wave) {
	// empty code to make gopls happy on non-web
}

// UnloadSound - Unload sound
func UnloadSound(sound Sound) {
	// empty code to make gopls happy on non-web
}

// UnloadSoundAlias - Unload a sound alias (does not deallocate sample data)
func UnloadSoundAlias(alias Sound) {
	// empty code to make gopls happy on non-web
}

// ExportWave - Export wave data to file, returns true on success
func ExportWave(wave Wave, fileName string) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// PlaySound - Play a sound
func PlaySound(sound Sound) {
	// empty code to make gopls happy on non-web
}

// StopSound - Stop playing a sound
func StopSound(sound Sound) {
	// empty code to make gopls happy on non-web
}

// PauseSound - Pause a sound
func PauseSound(sound Sound) {
	// empty code to make gopls happy on non-web
}

// ResumeSound - Resume a paused sound
func ResumeSound(sound Sound) {
	// empty code to make gopls happy on non-web
}

// IsSoundPlaying - Check if a sound is currently playing
func IsSoundPlaying(sound Sound) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// SetSoundVolume - Set volume for a sound (1.0 is max level)
func SetSoundVolume(sound Sound, volume float32) {
	// empty code to make gopls happy on non-web
}

// SetSoundPitch - Set pitch for a sound (1.0 is base level)
func SetSoundPitch(sound Sound, pitch float32) {
	// empty code to make gopls happy on non-web
}

// SetSoundPan - Set pan for a sound (0.5 is center)
func SetSoundPan(sound Sound, pan float32) {
	// empty code to make gopls happy on non-web
}

// WaveCopy - Copy a wave to a new wave
func WaveCopy(wave Wave) Wave {
	// empty code to make gopls happy on non-web
	var zero Wave
	return zero
}

// WaveCrop - Crop a wave to defined frames range
func WaveCrop(wave *Wave, initFrame int32, finalFrame int32) {
	// empty code to make gopls happy on non-web
}

// WaveFormat - Convert wave data to desired format
func WaveFormat(wave *Wave, sampleRate int32, sampleSize int32, channels int32) {
	// empty code to make gopls happy on non-web
}

// LoadWaveSamples - Load samples data from wave as a 32bit float data array
func LoadWaveSamples(wave Wave) []float32 {
	// empty code to make gopls happy on non-web
	var zero []float32
	return zero
}

// UnloadWaveSamples - Unload samples data loaded with LoadWaveSamples()
func UnloadWaveSamples(samples []float32) {
	// empty code to make gopls happy on non-web
}

// LoadMusicStreamFromMemory - Load music stream from data
func LoadMusicStreamFromMemory(fileType string, data []byte, dataSize int32) Music {
	// empty code to make gopls happy on non-web
	var zero Music
	return zero
}

// IsMusicValid - Checks if a music stream is valid (context and buffers initialized)
func IsMusicValid(music Music) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UnloadMusicStream - Unload music stream
func UnloadMusicStream(music Music) {
	// empty code to make gopls happy on non-web
}

// PlayMusicStream - Start music playing
func PlayMusicStream(music Music) {
	// empty code to make gopls happy on non-web
}

// IsMusicStreamPlaying - Check if music is playing
func IsMusicStreamPlaying(music Music) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UpdateMusicStream - Updates buffers for music streaming
func UpdateMusicStream(music Music) {
	// empty code to make gopls happy on non-web
}

// StopMusicStream - Stop music playing
func StopMusicStream(music Music) {
	// empty code to make gopls happy on non-web
}

// PauseMusicStream - Pause music playing
func PauseMusicStream(music Music) {
	// empty code to make gopls happy on non-web
}

// ResumeMusicStream - Resume playing paused music
func ResumeMusicStream(music Music) {
	// empty code to make gopls happy on non-web
}

// SeekMusicStream - Seek music to a position (in seconds)
func SeekMusicStream(music Music, position float32) {
	// empty code to make gopls happy on non-web
}

// SetMusicVolume - Set volume for music (1.0 is max level)
func SetMusicVolume(music Music, volume float32) {
	// empty code to make gopls happy on non-web
}

// SetMusicPitch - Set pitch for a music (1.0 is base level)
func SetMusicPitch(music Music, pitch float32) {
	// empty code to make gopls happy on non-web
}

// SetMusicPan - Set pan for a music (0.5 is center)
func SetMusicPan(music Music, pan float32) {
	// empty code to make gopls happy on non-web
}

// GetMusicTimeLength - Get music time length (in seconds)
func GetMusicTimeLength(music Music) float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// GetMusicTimePlayed - Get current music time played (in seconds)
func GetMusicTimePlayed(music Music) float32 {
	// empty code to make gopls happy on non-web
	var zero float32
	return zero
}

// LoadAudioStream - Load audio stream (to stream raw audio pcm data)
func LoadAudioStream(sampleRate uint32, sampleSize uint32, channels uint32) AudioStream {
	// empty code to make gopls happy on non-web
	var zero AudioStream
	return zero
}

// IsAudioStreamValid - Checks if an audio stream is valid (buffers initialized)
func IsAudioStreamValid(stream AudioStream) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// UnloadAudioStream - Unload audio stream and free memory
func UnloadAudioStream(stream AudioStream) {
	// empty code to make gopls happy on non-web
}

// UpdateAudioStream - Update audio stream buffers with data
func UpdateAudioStream(stream AudioStream, data []float32) {
	// empty code to make gopls happy on non-web
}

// IsAudioStreamProcessed - Check if any audio stream buffers requires refill
func IsAudioStreamProcessed(stream AudioStream) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// PlayAudioStream - Play audio stream
func PlayAudioStream(stream AudioStream) {
	// empty code to make gopls happy on non-web
}

// PauseAudioStream - Pause audio stream
func PauseAudioStream(stream AudioStream) {
	// empty code to make gopls happy on non-web
}

// ResumeAudioStream - Resume audio stream
func ResumeAudioStream(stream AudioStream) {
	// empty code to make gopls happy on non-web
}

// IsAudioStreamPlaying - Check if audio stream is playing
func IsAudioStreamPlaying(stream AudioStream) bool {
	// empty code to make gopls happy on non-web
	var zero bool
	return zero
}

// StopAudioStream - Stop audio stream
func StopAudioStream(stream AudioStream) {
	// empty code to make gopls happy on non-web
}

// SetAudioStreamVolume - Set volume for audio stream (1.0 is max level)
func SetAudioStreamVolume(stream AudioStream, volume float32) {
	// empty code to make gopls happy on non-web
}

// SetAudioStreamPitch - Set pitch for audio stream (1.0 is base level)
func SetAudioStreamPitch(stream AudioStream, pitch float32) {
	// empty code to make gopls happy on non-web
}

// SetAudioStreamPan - Set pan for audio stream (0.5 is centered)
func SetAudioStreamPan(stream AudioStream, pan float32) {
	// empty code to make gopls happy on non-web
}

// SetAudioStreamBufferSizeDefault - Default size for new audio streams
func SetAudioStreamBufferSizeDefault(size int32) {
	// empty code to make gopls happy on non-web
}

