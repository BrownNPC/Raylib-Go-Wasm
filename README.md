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


### 3. Porting code to web
There is only one change you need to make!


In your file go to where you have defined
```go
for !rl.WindowShouldClose(){
```
and replace that with
```go
var update = func(){
```
after the function definition add the line
```go
rl.SetMainLoop(update)
for !rl.WindowShouldClose(){
  update()
}
```
Look at [this example](https://github.com/BrownNPC/Raylib-Go-Wasm/blob/master/examples/basic_window/main.go)
 if you dont understand.


## Making it compatible with desktop again
Comment the line 
```go
rl.SetMainLoop(update)
```
and in your `go.mod` comment the line
```go.mod
replace github.com/gen2brain/raylib-go/raylib => ./Raylib-Go-Wasm/raylib
```
# Running

### 1. Compile your code to a `.wasm` file.
For **MacOS and Linux**:
```sh
GOOS=js GOARCH=wasm go build -o ./Raylib-Go-Wasm/index/main.wasm .
```
For **Windows Powershell**:
```powershell
$env:GOOS="js"; $env:GOARCH="wasm"; go build -o ./Raylib-Go-Wasm/index/main.wasm .
```

## 2. Copy Golang wasm runtime (only needs to be copied once)
For **All** platforms:
```sh
  cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" ./Raylib-Go-Wasm/index/wasm_exec.js
```

## 3. Compile the server (only needs to be compiled once)
```sh
go build ./Raylib-Go-Wasm/server/server.go
```
## 4. Run the code with:
```
./server
```
or if you're using Windows
```
./server.exe
```
this will serve your app on https://localhost:8080

You dont need to restart the server after you recompile

I recommend you run the server in a seperate terminal, so you can recompile your code easier.

# Publish to Github Pages

copy the contents of the folder Raylib-Go-Wasm/index into your github pages repository
