package main

import (
	"codegen/api"
	"codegen/templates"
	_ "embed"
	"slices"
	"text/template"
)

//go:embed templates/structs.go.gotmpl
var structsTempl string

//go:embed templates/defines.go.gotmpl
var definesTempl string

//go:embed templates/enums.go.gotmpl
var enumsTempl string

//go:embed templates/aliases.go.gotmpl
var aliasesTempl string

//go:embed templates/funcimport.go.gotmpl
var funcImportTempl string

type Model struct {
	BuildTags string
	Imports   []string
	Structs   []api.RlStruct
	Defines   []api.RlDefine
	Enums     []api.RlEnum
	Aliases   []api.RlAlias
	// go:wasmimport based function imports
	FuncImports []FuncDef
}

func main() {
	m := Model{
		BuildTags: "js",
		Imports:   []string{},
		Structs:   slices.Clone(api.Api.Structs),
		// C #define macros need special parsing. And Names need to be PascalCase.
		Defines:     slices.Clone(api.Api.Defines),
		Enums:       slices.Clone(api.Api.Enums),
		Aliases:     slices.Clone(api.Api.Aliases),
		FuncImports: slices.Clone(api.Api.Functions),
	}
	RegisterPascalCaseAcronym("DARKGREEN", "DarkGreen")
	ParseDefines(m.Defines)
	// convert C types to Go and use PascalCase for field names.
	for _, s := range m.Structs {
		ProcessStructFields(s.Fields)
	}
	for i, f := range m.FuncImports {
		m.FuncImports[i] = TransformIntoWasmImport(f)
	}

	// Use PascalCase for enum names.
	PascalCaseEnums(m.Enums)
	funcs := template.FuncMap{
		"eq":       func(a, b any) bool { return a == b },
		"contains": func(a any, b ...any) bool { return slices.Contains(b, a) },
	}
	templates.GenerateCodeFormatted(m, structsTempl, "structs", nil)
	templates.GenerateCodeFormatted(m, enumsTempl, "enums", nil)
	templates.GenerateCodeFormatted(m, definesTempl, "defines", funcs)
	templates.GenerateCodeFormatted(m, aliasesTempl, "aliases", funcs)
	templates.GenerateCodeFormatted(m, aliasesTempl, "aliases", funcs)
	templates.GenerateCode(m, funcImportTempl, "funcimport", funcs)
}
