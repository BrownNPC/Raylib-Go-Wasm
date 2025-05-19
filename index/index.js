import Module from "./rl/raylib_emscripten.js";

const wasmBinary = await fetch("./rl/raylib.wasm")
  .then(r => r.arrayBuffer());

// var canvas = document.getElementById("canvas").addEventListener('contextmenu', e => e.preventDefault())

let mod = await Module({
  canvas: document.getElementById('canvas'),
  wasmBinary: new Uint8Array(wasmBinary),
});


class Color {
  constructor(init = {}, _address) {
    this._size = 4
    this._address = _address || mod._malloc(this._size)

    this.r = init.r || 0
    this.g = init.g || 0
    this.b = init.b || 0
    this.a = init.a || 0
  }

  get r() {
    return mod.HEAPU8[this._address + 0]
  }
  set r(r) {
    mod.HEAPU8[this._address + 0] = r
  }


  get g() {
    return mod.HEAPU8[this._address + 1]
  }
  set g(g) {
    mod.HEAPU8[this._address + 1] = g
  }


  get b() {
    return mod.HEAPU8[this._address + 2]
  }
  set b(b) {
    mod.HEAPU8[this._address + 2] = b
  }


  get a() {
    return mod.HEAPU8[this._address + 3]
  }
  set a(a) {
    mod.HEAPU8[this._address + 3] = a
  }
}
window.mod = mod
const go = new Go();
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)
  .then(result => {
    go.run(result.instance);
  })
  .catch(console.error);
