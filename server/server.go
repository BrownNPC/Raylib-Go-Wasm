// A basic HTTP server.
// By default, it serves the current working directory on port 8080.
package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

var (
	port = ":8080"
	dir  = filepath.Join(os.Args[0], "../index/")
)

func main() {
	flag.Parse()
	fmt.Printf("Serving %s on localhost%s", dir, port)

	err := http.ListenAndServe(port, http.FileServer(http.Dir(dir)))
	log.Fatalln(err)
}
