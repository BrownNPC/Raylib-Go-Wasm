package main

import (
	"codegen/api"
	"fmt"
	"slices"
	"strings"

	"github.com/iancoleman/strcase"
)

// GoTypeFromC maps a C type to a Go type
func GoTypeFromC(t string) string {
	oneToOneTypes := map[string]string{
		"char":          "byte",
		"float":         "float32",
		"unsigned char": "byte",
		"unsigned int":  "uint32",
		"int":           "int32",
	}
	if mapping, ok := oneToOneTypes[t]; ok {
		return mapping
	}
	runed := []rune(t)
	if runed[len(runed)-1] == '*' {
		return "cptr"
	}
	if index := slices.Index(runed, '['); index >= 0 {
		arraySize := runed[index:]
		arrayType := runed[:index]
		arrayType = []rune(GoTypeFromC(string(arrayType)))
		return string(arraySize) + string(arrayType)
	}
	return t
}

// ParseDefines prepares data for inserting into the template.
// Different C #define macros map to different Go constructs.
//
// It also makes the Name of the define PascalCase
// This function maps them to the proper Go constructs.
// See template templates/defines.go.gotmpl
func ParseDefines(defs []api.RlDefine) []api.RlDefine {
	defs = slices.Clone(defs)
	for i, d := range defs {
		def := &defs[i]
		// make name of defines PascalCase
		def.Name = PascalCase(def.Name)
		switch d.Type {
		case "STRING":
			// add quotes around value so the template can do const {{.Name}} = {{.Value}}
			def.Value = "\"" + def.Value + "\""
		case "FLOAT_MATH":
			// remove the trailing "f" from float values.
			def.Value = api.StringyValue(strings.ReplaceAll(string(def.Value), "f", ""))
			// make PI pascal case.
			def.Value = api.StringyValue(strings.ReplaceAll(string(def.Value), "PI", "Pi"))
		case "COLOR":
			// turn CLITERAL(Color){ 200, 200, 200, 255 } into Color{ 200, 200, 200, 255 }
			v := strings.ReplaceAll(string(def.Value), "CLITERAL(Color)", "Color")
			def.Value = api.StringyValue(v)
		case "UNKNOWN":
			// Special cases need to be handled properly.
			switch def.Name {
			case "GetMouseRay":
				def.Value = api.StringyValue(fmt.Sprintf("var %s = %s", def.Name, def.Value))
			case "Rlapi":
				*def = api.RlDefine{}
			default:
				def.Value = api.StringyValue(
					fmt.Sprintf("const %v = %v", def.Name, def.Value),
				)
			}
		}
	}
	return defs
}

// Sets the Name field to PascaleCase. And converts type field to a Go type.
func ProcessStructFields(fields []api.RlField) {
	for i := range fields {
		f := &fields[i]
		f.Name = PascalCase(f.Name)
		f.Type = GoTypeFromC(f.Type)
	}
}

// Use for adding custom acronym mapping for PascalCase conversion. Eg. (DEG2RAD:Deg2Rad)
func RegisterPascalCaseAcronym(key, val string) {
	strcase.ConfigureAcronym(key, val)
}

func PascalCaseEnums(enums []api.RlEnum) {
	for i := range enums {
		enum := enums[i]
		for i := range enum.Values {
			v := &enum.Values[i]
			v.Name = PascalCase(v.Name)
		}
	}
}

// convert string to PascalCase
func PascalCase(v string) string { return strcase.ToCamel(v) }
