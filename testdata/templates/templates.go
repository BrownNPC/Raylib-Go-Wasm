package templates

import (
	_ "embed"
	"text/template"
)

// LoadTemplate takes in a gotempl as a string and a name for the template.
// It panics if template could not be parsed.
func LoadTemplate(templ, name string) *template.Template {
	return template.Must(template.New(name).
		Parse(templ))
}
