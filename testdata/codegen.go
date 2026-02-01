package main

import (
	"bytes"
	"codegen/api"
	"codegen/templates"
	_ "embed"
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

	// recordedTypes := map[string]struct{}{}

	// for _, s := range api.Api.Structs {
	// 	for _, t := range s.Fields {
	// 		if _, ok := recordedTypes[t.Type]; !ok {
	// 			recordedTypes[t.Type] = struct{}{}
	// 			fmt.Println(t.Type)
	// 		}
	// 	}
	// }

	m := Model{
		BuildTags: "js",
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

	// formatted, err := format.Source(buf.Bytes())

	// if err != nil {
	// 	panic(err)
	// }

	// if err := os.WriteFile("rl/structs_gen.go", formatted, 0644); err != nil {
	// 	panic(err)
	// }
}
