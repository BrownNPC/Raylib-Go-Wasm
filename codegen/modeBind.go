package main

import (
	"fmt"
	"go/format"
	"slices"
	"strings"
)

var prefix = `
package rl
import (
	"image/color"
	"unsafe"
	wasm "main.wasm/internal"
)
`

func ModeBind(file string, structs []string) {

	funcs := ExtractFuncs(file)
	// check which parameters are struct types
	// and which functions return structs
	for i := range funcs {
		f := &funcs[i]
		if slices.Contains(structs, f.ReturnType) {
			f.ReturnsStruct = true
		}

		for j := range f.Params {
			p := &f.Params[j]
			if slices.Contains(structs, p.Type) {
				p.isStruct = true
			}
		}
	}

	var out string = prefix
	//
	for _, f := range funcs {
		if strings.Contains(f.Description, "(only PLATFORM_DESKTOP)") {
			continue
		}
		// var initWindow = wasm.Proc("InitWindow")
		out += fmt.Sprintln(f.RegisterSignature())
	}
	for _, f := range funcs {
		comments := strings.SplitSeq(f.Description, "\n")
		for comment := range comments {
			out += fmt.Sprintln("//", comment)
		}
		// func InitWindow(width int32, height int32, title string){//binding code}
		out += fmt.Sprintln(f.Signature(f.BindingCode()))
	}

	formatted, err := format.Source([]byte(out))
	if err != nil {
		fmt.Println(out)
		panic(fmt.Errorf("format error: %s ", err))
	}
	fmt.Println(string(formatted))
}
