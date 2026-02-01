package api

import (
	"encoding/json"
	"strings"
)

// PublicName just sets the first character as uppercase. Used for making struct members public.
type PublicName string

func (s *PublicName) UnmarshalJSON(b []byte) error {
	var v string
	if err := json.Unmarshal(b, &v); err != nil {
		return err
	}
	firstChar := string(v[0])
	firstChar =strings.ToUpper(firstChar)
	theRest := string(v[1:])
	*s = PublicName(firstChar + theRest)
	return nil
}
