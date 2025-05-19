package main

import (
	"encoding/json"
	"fmt"
	"os"
	"slices"
)

var help string = fmt.Sprint("Supported libraries to generate bindings for are: ", supportedLibs)

var mode int

// files to bind for
var supportedLibs = []string{"rcore"}

// go bindings for raylib dont have aliases for some structs
var additions = []string{"color.RGBA", "Texture2D", "RenderTexture2D"}

// get data codegen data for a supported lib
func CodegenDataFor(libname string) (defines string, structNames []string, err error) {
	var DefinesPath = fmt.Sprintf("testdata/%s_defines.txt", libname)
	var JsonPath = fmt.Sprintf("testdata/%s.json", libname)
	var f []byte
	f, err = os.ReadFile(DefinesPath)
	if err != nil {
		return
	}
	defines = string(f)

	// get struct names
	type Value struct {
		Name string `json:"name"`
	}
	var ApiJson map[string][]Value
	var file *os.File
	file, err = os.Open(JsonPath)
	if err != nil {
		return
	}
	err = json.NewDecoder(file).Decode(&ApiJson)
	if err != nil {
		panic(err)
	}
	for _, s := range ApiJson["structs"] {
		structNames = append(structNames, s.Name)
	}
	structNames = append(structNames, additions...)
	return
}

func main() {
	if len(os.Args) < 2 {
		fmt.Println(help)
		os.Exit(0)
	} else if slices.Contains(supportedLibs, os.Args[1]) {
		var LibraryToBind = os.Args[1]
		defines, structNames, err := CodegenDataFor(LibraryToBind)
		if err != nil {
			os.Exit(1)
		}
		ModeBind(defines, structNames)
	} else {
		fmt.Println(help)
	}
}
