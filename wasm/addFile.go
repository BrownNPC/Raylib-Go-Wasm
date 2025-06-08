package wasm

import (
	"io"
	"io/fs"
	"syscall/js"
)

// add a file to the stored path in the wasm filesystem
func AddFileSystem(efs fs.FS) {
	var files []string // filenames to add after making directories
	var MODFS = Module.Get("FS")
	// create required directories
	err := fs.WalkDir(efs, ".", func(path string, d fs.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}
		if d.IsDir() {
			MODFS.Call("createPath", "/", path, true, true)
		} else {
			files = append(files, path)
		}
		return nil
	})
	if err != nil {
		Panic(err)
	}
	// create the files
	for _, targetPath := range files {
		// copy file bytes to JS
		f, _ := efs.Open(targetPath)
		goBytes, _ := io.ReadAll(f)
		jsUint8Array := js.Global().Get("Uint8Array").New(len(goBytes))
		js.CopyBytesToJS(jsUint8Array, goBytes)
		MODFS.Call("writeFile", targetPath, jsUint8Array)
	}
}
