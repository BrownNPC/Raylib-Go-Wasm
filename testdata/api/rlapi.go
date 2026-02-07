package api

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"slices"
	"strings"
)

var Api RlApi

//go:embed rlapi.json
var rlApiJson []byte

func init() {
	err := json.Unmarshal(rlApiJson, &Api)
	if err != nil {
		panic(err)
	}
}

type RlDefine struct {
	Name        string       `json:"name"`
	Type        string       `json:"type"`
	Value       StringyValue `json:"value"`
	Description string       `json:"description"`
}

func FixDefines(defs []RlDefine) []RlDefine {
	defs = slices.Clone(defs)
	for i, d := range defs {
		def := &defs[i]
		switch d.Type {
		case "STRING":
			def.Value = "\"" + def.Value + "\""
		case "FLOAT_MATH":
			def.Value = StringyValue(strings.ReplaceAll(string(def.Value), "f", ""))
		case "COLOR":
			v := strings.ReplaceAll(string(def.Value), "CLITERAL(Color)", "")
			def.Value = StringyValue(v)
		case "UNKNOWN":
			switch def.Name {
			case "GetMouseRay":
				def.Value = StringyValue(fmt.Sprintf("var %s = %s", def.Name, def.Value))
			case "RLAPI":
				*def = RlDefine{}
			default:
				def.Value = StringyValue(
					fmt.Sprintf("const %v = %v", def.Name, def.Value),
				)
			}
		}
	}
	return defs
}

type RlField struct {
	Type        RlType     `json:"type"`
	Name        PublicName `json:"name"`
	Description string     `json:"description"`
}
type RlStruct struct {
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Fields      []RlField `json:"fields"`
}
type RlAlias struct {
	Type        string `json:"type"`
	Name        string `json:"name"`
	Description string `json:"description"`
}
type RlValue struct {
	Name        string `json:"name"`
	Value       int    `json:"value"`
	Description string `json:"description"`
}
type RlEnum struct {
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Values      []RlValue `json:"values"`
}
type RlParam struct {
	Type string `json:"type"`
	Name string `json:"name"`
}
type RlCallback struct {
	Name        string    `json:"name"`
	Description string    `json:"description"`
	ReturnType  string    `json:"returnType"`
	Params      []RlParam `json:"params"`
}
type RlFunction struct {
	Name        string    `json:"name"`
	Description string    `json:"description"`
	ReturnType  string    `json:"returnType"`
	Params      []RlParam `json:"params,omitempty"`
}
type RlApi struct {
	Defines   []RlDefine   `json:"defines"`
	Structs   []RlStruct   `json:"structs"`
	Aliases   []RlAlias    `json:"aliases"`
	Enums     []RlEnum     `json:"enums"`
	Callbacks []RlCallback `json:"callbacks"`
	Functions []RlFunction `json:"functions"`
}
