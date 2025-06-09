# Raylib Go (golang) bindings for the web.

### What works?
- Loading Fonts, Sounds Textures etc.
- Drawing Shapes and Graphics

## Getting started


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

## Loading assets
See [here]()

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
> this will serve your app on http://localhost:8080

#### You dont need to restart the server after you recompile

### Tips

I recommend you run the server in a seperate terminal, so you can recompile your code easier.


You can also setup [air](https://github.com/air-verse/air) to automatically recompile your code when a file changes

firstly make sure `air` is installed and then make a file called `.air.toml` next to your `main.go`
(dont forget the dot in `.air.toml`)

put this in the file and simply run the `air` command while in the same directory as the `.air.toml` file

```toml
[build]
  cmd = "GOOS=js GOARCH=wasm go build -o ./Raylib-Go-Wasm/index/main.wasm ."
  bin = ""                     
  include_ext = ["go"]
  exclude_dir = ["vendor"]
  delay = 100
[log]
  time = false
```

# Publish to Github Pages

copy the contents of the folder Raylib-Go-Wasm/index into your github pages repository
