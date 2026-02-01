package api

import (
	"encoding/json"
	"slices"
)

// RlType converts a C type to Go
type RlType string

func (s *RlType) UnmarshalJSON(b []byte) error {
	var v string
	if err := json.Unmarshal(b, &v); err != nil {
		return err
	}
	*s = RlType(GoTypeFromC(v))
	return nil
}
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
