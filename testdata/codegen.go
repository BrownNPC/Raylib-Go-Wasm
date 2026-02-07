package main

import (
	"bytes"
	"codegen/api"
	"codegen/templates"
	_ "embed"
	"os"
	"slices"
	"text/template"
)

//go:embed templates/structs.go.gotmpl
var structsTempl string

//go:embed templates/defines.go.gotmpl
var definesTempl string

//go:embed templates/enums.go.gotmpl
var enumsTempl string

type Model struct {
	BuildTags string
	Imports   []string
	Structs   []api.RlStruct
	Defines   []api.RlDefine
	Enums     []api.RlEnum
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
		Defines:   api.FixDefines(api.Api.Defines),
		Enums:     api.Api.Enums,
	}
	{
		structs := templates.LoadTemplate(structsTempl, "structs")
		var buf bytes.Buffer
		if err := structs.Execute(&buf, m); err != nil {
			panic(err)
		}
		if err := os.WriteFile("rl/structs_gen_unformatted.go", buf.Bytes(), 0644); err != nil {
			panic(err)
		}
	}
	{
		defines := templates.LoadTemplateFuncs(definesTempl, "defines",
			template.FuncMap{
				"eq":       func(a, b any) bool { return a == b },
				"contains": func(a any, b ...any) bool { return slices.Contains(b, a) },
			})
		var buf bytes.Buffer
		if err := defines.Execute(&buf, m); err != nil {
			panic(err)
		}
		if err := os.WriteFile("rl/defines_gen_unformatted.go", buf.Bytes(), 0644); err != nil {
			panic(err)
		}
	}
	{
		enums := templates.LoadTemplateFuncs(enumsTempl, "enums",
			template.FuncMap{
				"eq":       func(a, b any) bool { return a == b },
				"contains": func(a any, b ...any) bool { return slices.Contains(b, a) },
			})
		var buf bytes.Buffer
		if err := enums.Execute(&buf, m); err != nil {
			panic(err)
		}
		if err := os.WriteFile("rl/enums_gen_unformatted.go", buf.Bytes(), 0644); err != nil {
			panic(err)
		}
	}

	// formatted, err := format.Source(buf.Bytes())

	// if err != nil {
	// 	panic(err)
	// }

	// if err := os.WriteFile("rl/structs_gen.go", formatted, 0644); err != nil {
	// 	panic(err)
	// }
}
