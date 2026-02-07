package templates

import (
	"bytes"
	_ "embed"
	"fmt"
	"go/format"
	"os"
	"text/template"
)

// LoadTemplate takes in a gotempl as a string and a name for the template.
// It panics if template could not be parsed.
func LoadTemplate(templ, name string) *template.Template {
	return template.Must(template.New(name).
		Parse(templ))
}

// LoadTemplate takes in a gotempl as a string and a name for the template.
// It panics if template could not be parsed.
func LoadTemplateFuncs(templ, name string, funcs template.FuncMap) *template.Template {
	return template.Must(template.New(name).
		Funcs(funcs).
		Parse(templ))
}

// GenerateCode will generate the template using model. and write a file to disk in the format:
// rl/{name}_gen_unformatted.go
func GenerateCode(model any, templ string, name string, funcs template.FuncMap) {
	structs := LoadTemplateFuncs(templ, name, funcs)
	var buf bytes.Buffer
	if err := structs.Execute(&buf, model); err != nil {
		panic(err)
	}
	if err := os.WriteFile(fmt.Sprintf("rl/%s_gen_unformatted.go", name), buf.Bytes(), 0644); err != nil {
		panic(err)
	}
}

// GenerateCode will generate the template using model. and write a file to disk in the format:
// rl/{name}_gen_formatted.go
func GenerateCodeFormatted(model any, templ string, name string, funcs template.FuncMap) {
	structs := LoadTemplateFuncs(templ, name, funcs)
	var buf bytes.Buffer
	if err := structs.Execute(&buf, model); err != nil {
		panic(err)
	}

	formatted, err := format.Source(buf.Bytes())
	if err != nil {
		panic(err)
	}

	if err := os.WriteFile(fmt.Sprintf("rl/%s_gen_formatted.go", name), formatted, 0644); err != nil {
		panic(err)
	}
}
