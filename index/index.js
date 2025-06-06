import Module from "./rl/raylib.js";

const wasmBinary = await fetch("./rl/raylib.wasm")
  .then(r => r.arrayBuffer());

// var canvas = document.getElementById("canvas").addEventListener('contextmenu', e => e.preventDefault())

let mod = await Module({
  canvas: document.getElementById('canvas'),
  wasmBinary: new Uint8Array(wasmBinary),
});

window.mod = mod
const go = new Go();
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)
  .then(result => {
    go.run(result.instance);
  })
  .catch(console.error);
