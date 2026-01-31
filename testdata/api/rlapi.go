package api

import (
	_ "embed"
	"encoding/json"
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
type RlField struct {
	Type        string `json:"type"`
	Name        string `json:"name"`
	Description string `json:"description"`
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
type StringyValue string

func (s *StringyValue) UnmarshalJSON(b []byte) error {
	// null
	if string(b) == "null" {
		*s = ""
		return nil
	}

	// quoted string
	if len(b) > 0 && b[0] == '"' {
		var v string
		if err := json.Unmarshal(b, &v); err != nil {
			return err
		}
		*s = StringyValue(v)
		return nil
	}

	// number / bare token → keep textual form
	*s = StringyValue(b)
	return nil
}
