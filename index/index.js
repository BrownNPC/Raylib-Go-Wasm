// disable right click context menu
document.getElementById("canvas").addEventListener(
  "contextmenu",
  (e) => e.preventDefault(),
);

// INITIALIZE RAYLIB
import Module from "./rl/raylib.js";

const wasmBinary = await fetch("./rl/raylib.wasm")
  .then((r) => r.arrayBuffer());

const raylib = await Module({
  canvas: document.getElementById("canvas"),
  wasmBinary: new Uint8Array(wasmBinary),
});

// INITIALIZE GO
const go = new Go();
// inject raylib
go.importObject.raylib = raylib;
globalThis.raylib = raylib;

import { Runtime } from "./runtime.js"; // helper funtions
//init
const runtime = new Runtime();
// inject custom runtime methods
Object.assign(go.importObject.gojs, {
  array: runtime.array.bind(runtime),
  struct: runtime.struct.bind(runtime),
  CStringFromGoString: runtime.CStringFromGoString.bind(runtime),
  CopyToC: runtime.CopyToC.bind(runtime),
});

WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then(
  (result) => {
    const instance = result.instance;
    globalThis.goInstance = instance;
    go.run(instance);
  },
);
