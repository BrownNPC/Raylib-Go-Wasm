package api

import "encoding/json"

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
