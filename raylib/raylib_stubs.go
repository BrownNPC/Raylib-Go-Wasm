//go:build !js

package rl

// stub the functions we dont auto generate

// InitWindow - Initialize window and OpenGL context
func InitWindow(width int32, height int32, title string) {
	// empty code to make gopls happy on non-web
}

// Use this instead of a for loop on web platform
func SetMain(UpdateAndDrawFrame func()) {
}

// UNSUPPORTED: USE SetMainLoop
func WindowShouldClose() bool {
	return true
}

// SetTraceLogCallback - Set custom trace log
func SetTraceLogCallback(fn TraceLogCallbackFun) {
}
