const overlay = document.getElementById('loading-overlay');
function hideOverlay() { overlay.style.display = 'none' }
function showOverlay() { overlay.style.display = 'flex' }

// show loading overlay
showOverlay();

import Module from "./rl/raylib.js";


const wasmBinary = await fetch("./rl/raylib.wasm")
  .then(r => r.arrayBuffer());

// disable right click context menu
document.getElementById("canvas").addEventListener('contextmenu', e => e.preventDefault())

let mod = await Module({
  canvas: document.getElementById('canvas'),
  wasmBinary: new Uint8Array(wasmBinary),
});

window.mod = mod
const go = new Go();
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)
  .then(result => {
    // hide loading overlay before running code
    hideOverlay();
    go.run(result.instance);
  })
  .catch(console.error);
