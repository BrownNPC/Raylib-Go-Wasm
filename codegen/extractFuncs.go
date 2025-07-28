// yes, it's Gippity
package main

import (
	"bytes"
	"go/ast"
	"go/parser"
	"go/printer"
	"go/token"
)

// Function holds the metadata for one top‐level function, including its doc comment.
type Function struct {
	Name          string
	Description   string // the text of the leading comment group, or "" if none
	Params        []Param
	ReturnType    string // "" if none, otherwise the first return’s type
	ReturnsStruct bool
}

// Param holds one parameter’s name and type.
type Param struct {
	Name, Type  string
	isReference bool
	isStruct    bool
}

// ExtractFuncs parses src and returns all top-level FuncDecls along with their comments.
func ExtractFuncs(src string) []Function {
	fset := token.NewFileSet()
	file, err := parser.ParseFile(fset, "", src, parser.ParseComments)
	if err != nil {
		panic(err)
	}

	var funcs []Function
	for _, decl := range file.Decls {
		fd, ok := decl.(*ast.FuncDecl)
		if !ok || fd.Name == nil {
			continue
		}

		f := Function{
			Name:        fd.Name.Name,
			Description: "",
			Params:      nil,
			ReturnType:  "",
		}

		// --- extract the doc-comment text, if any ---
		if fd.Doc != nil {
			// Doc.Text() returns the comment text with line breaks
			f.Description = fd.Doc.Text()
		}

		// --- collect parameters ---
		if fd.Type.Params != nil {
			for _, field := range fd.Type.Params.List {
				// render the type expression to a string
				buf := new(bytes.Buffer)
				printer.Fprint(buf, fset, field.Type)
				typ := buf.String()

				for _, name := range field.Names {
					f.Params = append(f.Params, Param{
						Name: name.Name,
						Type: typ,
					})
				}
				// (could handle anonymous params here if needed)
			}
		}

		// --- collect a single return type, if any ---
		if fd.Type.Results != nil && len(fd.Type.Results.List) > 0 {
			buf := new(bytes.Buffer)
			printer.Fprint(buf, fset, fd.Type.Results.List[0].Type)
			f.ReturnType = buf.String()
		}

		funcs = append(funcs, f)
	}

	return funcs
}
