# Raylib Go (golang) bindings for the web.

## Getting started
> Please note these bindings are not 100% complete, currently loading assets is not implemented.

### 1. Download this repository. 
Either use `git clone` or click the green "Code" button and download it in your project folder.

### 2. Inside your `go.mod` file put this code:
```go.mod
replace github.com/gen2brain/raylib-go/raylib => ./Raylib-Go-Wasm/raylib 
```
and then run `go mod tidy`

### 3. Compile your code to a `.wasm` file.
For **MacOS and Linux**:
```sh
GOOS=js GOARCH=wasm go build -o ./Raylib-Go-Wasm/index/main.wasm .
```
For **Windows Powershell**:
```powershell
$env:GOOS="js"; $env:GOARCH="wasm"; go build -o ./Raylib-Go-Wasm/index/main.wasm .
```

## Copy Golang wasm runtime (only needs to be copied once)
For **All** platforms:
```sh
  cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" ./Raylib-Go-Wasm/index/wasm_exec.js
```

## Compile the server
```
go build ./Raylib-Go-Wasm/server/server.go
```

# Running
```
./server.go
```
this will serve your app on https://localhost:8080


# Publish to Github Pages

**TODO**
