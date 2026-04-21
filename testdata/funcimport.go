package main

import (
	"codegen/api"
	"fmt"
	"slices"
	"strings"
)

// FuncImport defines a go:wasmimport function import
type FuncDef = api.RlFunction /*
	Name        string
	Description string
	ReturnType  string
	Params      []FuncArg
*/
type FuncParam = api.RlParam /*
	Type string
	Name string
*/

// Takes in a raw C function definition from raylib's json.
// and produces a //go:wasmimport _raylib <funcname>
// func <functionName>(args)
func TransformIntoWasmImport(f FuncDef) FuncDef {
	importStatement := fmt.Sprintf("//go:wasmimport _raylib _%s\n", f.Name)

	var comment strings.Builder
	comment.WriteString(importStatement)
	comment.WriteString("//go:noescape")

	for i, p := range f.Params {
		p.Name = firstLetterUpper(p.Name)
		// if the type does not map one to one, then it's a cptr.
		p.Type = mapGoTypeOneToOne(p.Type)
		f.Params[i] = p
	}
	if f.ReturnType != "void" {
		p := FuncParam{Name: "ret", Type: mapGoTypeOneToOne(f.ReturnType)}
		f.Params = slices.Concat([]FuncParam{p}, f.Params)
	}
	final := FuncDef{
		Name:        firstLetterLower(f.Name),
		Description: comment.String(),
		ReturnType:  f.ReturnType,
		Params:      f.Params,
	}
	return final
}

// If the C type maps directly to a Go type. Return that, otherwise return cptr.
func mapGoTypeOneToOne(t string) string {
	if t, isOneToOne := oneToOneTypes[t]; !isOneToOne {
		return "cptr"
	} else {
		return t
	}
}
