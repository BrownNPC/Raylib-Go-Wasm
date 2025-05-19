package wasm

import (
	"syscall/js"
)

type types interface {
	~int | ~int8 | ~int16 | ~int32 | ~int64 |
		~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64 | ~uintptr |
		~float32 | ~float64 |
		~string
}

func Numeric[T types](rv ReturnValue) T {
	val := rv.(js.Value)
	var result any
	var t T
	switch any(t).(type) {

	case float64:
		result = val.Float()
	case float32:
		result = float32(val.Float())
	case string:
		result = val.String()
	default:
		result = T(val.Int())
	}
	return result.(T)
}
func Boolean(rv ReturnValue) bool {
	val := rv.(js.Value)
	return val.Truthy()
}

// func makeConvertor[T any](kind reflect.Kind) (converter func(ReturnValue) T) {

// 	if kind == reflect.Struct {
// 		converter = func(rv ReturnValue) T {
// 			return ReadStruct[T](rv)
// 		}
// 	} else if kind != reflect.Invalid {
// 		converter = func(rv ReturnValue) T {
// 			jsval, ok := rv.(js.Value)
// 			if !ok {
// 				panic("return type is not a js.Value")
// 			}
// 			ret, ok := FromJSValue[T](jsval).(T)
// 			if !ok {
// 				panic("unsupported type, try making an alias")
// 			}
// 			return ret
// 		}

// 	}
// 	return
// }
