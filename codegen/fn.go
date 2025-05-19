package main

import "fmt"



func (fn Function) RegisterSignature() string {
	var out string
	var ProcOrFunction = fmt.Sprintf("wasm.Func[%s](\"%s\")", fn.ReturnType, fn.Name)
	if fn.ReturnType == "" {
		ProcOrFunction = fmt.Sprintf("wasm.Proc(\"%s\")", fn.Name)
	}
	out += fmt.Sprintf("var %s = %s ", Uncapitalize(fn.Name), ProcOrFunction)
	return out
}

func (fn Function) Signature(code string) string {
	var out string
	out += fmt.Sprintf("func %s(%s) %s {\n%s}\n", fn.Name, fn.Expand(), fn.ReturnType, code)
	return out
}

func (fn Function) Expand() string {
	var out string
	for _, p := range fn.Params {
		out += fmt.Sprintf("%s %s,", p.Name, p.Type)
	}
	return out
}

