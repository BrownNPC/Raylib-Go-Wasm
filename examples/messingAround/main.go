package main

import (
	"structs"
	"unsafe"
)

type cptr = uint32

//go:wasmimport raylib _malloc
func malloc(cptr) cptr

//go:wasmimport raylib _InitWindow
func InitWindow(width, height int32, cstr cptr)

//go:wasmimport raylib _DrawText
func DrawText(textPtr, x, y, fontsize, color cptr)

//go:wasmimport raylib _ClearBackground
func ClearBackground(bg cptr)

//go:wasmimport raylib _BeginDrawing
func BeginDrawing()

//go:wasmimport raylib _EndDrawing
func EndDrawing()

//go:wasmimport raylib _IsWindowReady
func IsWindowReady() bool

type Test struct {
	structs.HostLayout
	Age    int32
	Height int32
}
type Test2 struct {
	structs.HostLayout
	Name string
}

//go:wasmimport gojs array
//go:noescape
func getRandomData(r []byte)

//go:wasmimport gojs struct
//go:noescape
func passStruct(r unsafe.Pointer) unsafe.Pointer

//go:wasmimport raylib _free
func free(cptr)

//go:wasmimport raylib _GetMousePosition
func GetMousePosition(cptr)

//go:wasmimport raylib _GetColor
//go:noescape
func GetColor(cptr, uint32)

//go:wasmimport gojs CopyToGo
//go:noescape
func CopyToGo(dstGoPtr unsafe.Pointer, size cptr, src cptr)

func main() {
	// title := malloc(2)
	// InitWindow(300, 300, title)
	// var c rl.Color
	// size := cptr(unsafe.Sizeof(c)) // 4 bytes
	// p := malloc(uint32(size))      // allocate memory in C/wasm
	// GetColor(p, 0xFF0000FF)        // fill memory
	// fmt.Println("passed cptr", p)
	// CopyToGo(unsafe.Pointer(&c), size, p) // copy memory to Go
	// fmt.Println(c)                        // now prints the color
}
