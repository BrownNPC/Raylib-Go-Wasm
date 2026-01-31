package main

import (
	"bytes"
	"codegen/api"
	"codegen/templates"
	_ "embed"
	"go/format"
	"os"
)

//go:embed templates/structs.go.gotmpl
var structsTempl string

type Model struct {
	BuildTags string
	Imports   []string
	Structs   []api.RlStruct
}

func main() {
	m := Model{
		BuildTags: "",
		Imports:   []string{},
		Structs:   api.Api.Structs,
	}
	structs := templates.LoadTemplate(structsTempl, "structs")

	var buf bytes.Buffer
	if err := structs.Execute(&buf, m); err != nil {
		panic(err)
	}
	if err := os.WriteFile("rl/structs_gen_unformatted.go", buf.Bytes(), 0644); err != nil {
		panic(err)
	}

	formatted, err := format.Source(buf.Bytes())
	if err != nil {
		panic(err)
	}
	if err := os.WriteFile("rl/structs_gen.go", formatted, 0644); err != nil {
		panic(err)
	}
}
