package main

import (
	"fmt"
	"go/format"
	"slices"
	"strings"
)

// make empty definitions
func ModeStub(file string, structs []string) {

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

	var out string = fmt.Sprintln("//go:build !js") + imports
	for _, f := range funcs {
		comments := strings.SplitSeq(f.Description, "\n")
		for comment := range comments {
			out += fmt.Sprintln("//", comment)
		}
		// func InitWindow(width int32, height int32, title string){//binding code}
		var stub string = "//empty code to make gopls happy on non-web\n"
		if f.ReturnType != "" {
			stub += fmt.Sprintf("var zero %s ;return zero", f.ReturnType)
		}
		out += fmt.Sprintln(f.Signature(stub))
	}

	formatted, err := format.Source([]byte(out))
	if err != nil {
		fmt.Println(out)
		panic(fmt.Errorf("format error: %s ", err))
	}
	fmt.Println(string(formatted))
}
