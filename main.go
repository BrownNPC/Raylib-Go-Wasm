package main

import (
	rl "main.wasm/raylib"
)

func main() {
	// Simple test
	// start := time.Now()
	rl.InitWindow(100, 200, "Nigga")
	// for range 10000 {
	// 	rl.GetCollisionRec(
	// 		rl.NewRectangle(10, 10, 500, 50),
	// 		rl.NewRectangle(30, 30, 20, 20),
	// 	)
	// }
	// fmt.Println(time.Since(start) / 1000)
	// fmt.Printf("Collision: %+v\n", result) // Should show X:30,Y:30,W:20,H:20
}
