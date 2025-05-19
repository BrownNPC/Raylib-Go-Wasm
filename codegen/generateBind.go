package main

import (
	"fmt"
	"strings"
)

func (fn Function) BindingCode() string {
	if strings.Contains(fn.Description, "(only PLATFORM_DESKTOP)") || fn.ReturnType == "unsafe.Pointer" {
		if fn.ReturnType == "" {
			return ""
		} else {
			return fmt.Sprintf("var zero %s;return zero", fn.ReturnType)
		}
	}
	if (len(fn.ReturnType) > 0) && (fn.ReturnType[:1] == "*" || fn.ReturnType[:1] == "[") {
		return fmt.Sprintf("var zero %s;return zero", fn.ReturnType)
	}
	var out string
	var param_names string
	for _, p := range fn.Params {
		if !p.isStruct {
			param_names += fmt.Sprintf("%s,", p.Name)
		} else {
			param_names += fmt.Sprintf("wasm.Struct(%s),", p.Name)
		}
	}
	var returnV bool
	if fn.ReturnType == "" {
		out += fmt.Sprintf("_,fl :=%s.Call(%s)\n", Uncapitalize(fn.Name), param_names)
	} else {
		out += fmt.Sprintf("ret,fl :=%s.Call(%s)\n", Uncapitalize(fn.Name), param_names)
		if fn.ReturnType == "bool" {
			out += "v := wasm.Boolean(ret)\n"
		} else if !fn.ReturnsStruct {
			out += fmt.Sprintf("v := wasm.Numeric[%s](ret)\n", fn.ReturnType)
		} else {
			out += fmt.Sprintf("v := wasm.ReadStruct[%s](ret)\n", fn.ReturnType)
		}
		returnV = true
	}
	out += "wasm.Free(fl...)\n"
	if returnV {
		out += "return v"
	}
	return out
}
