// Helper functions called from Go via go:wasmimport

class Runtime {
  constructor() {
  }
  get mem() {
    return new DataView(globalThis.goInstance.exports.mem.buffer);
  }
  getmem(addr, len) {
    return new Uint8Array(globalThis.goInstance.exports.mem.buffer, addr, len);
  }
  get Sp() {
    return globalThis.goInstance.exports.getsp() >>> 0;
  }
  // ---- Helpers from wasm_exec.js ----
  setInt32 = (addr, v) => {
    return this.mem.setUint32(addr + 0, v, true);
  };
  getInt32 = (addr) => {
    return this.mem.getUint32(addr + 0, true);
  };

  setInt64 = (addr, v) => {
    this.mem.setUint32(addr + 0, v, true);
    this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
  };

  getInt64 = (addr) => {
    const low = this.mem.getUint32(addr + 0, true);
    const high = this.mem.getInt32(addr + 4, true);
    return low + high * 4294967296;
  };

  loadSlice = (addr) => {
    const array = this.getInt64(addr + 0);
    const len = this.getInt64(addr + 8);
    return this.getmem(array, len);
  };

  // ---- Runtime helpers  ----
  array = (sp) => {
    // messing around with slice
    sp >>>= 0;
    console.log(sp);
    // slice capacity
    console.log(this.getInt64(sp + 8 + 8));
    console.log(sp + 8);
  };
  // function messing around with struct
  struct = (sp) => {
    sp >>>= 0;
    const ptr = this.getInt64(sp + 8);
    // this.setInt32(ptr, 99);
    // // 2nd field of struct
    // this.setInt32(ptr + 4, 69);
    // return
    this.setInt64(sp + 16, ptr);
  };

  getRaylibU8Array(cptr, len) {
    return new Uint8Array( // js slice
      globalThis.raylib.HEAPU8.buffer,
      cptr,
      len,
    );
  }
  // func(cptr) cstr
  // Scans for null terminator and returns the length
  CStringGetLength = (sp) => {
    sp >>>= 0;
    const cStr = this.getInt32(sp + 8 * 1);
    const view = raylib.HEAPU8.subarray(cStr);
    let len = 0;
    while (view[len] !== 0) {
      len++;
    }
    this.setInt32(sp + 8 * 2, len);
  };
  // func(string) cptr
  // returns pointer to C string in raylib memory
  CStringFromGoString = (sp) => {
    sp >>>= 0;
    // get string addr and length
    const saddr = this.getInt64(sp + 8 * 1); // go string address
    const len = this.getInt64(sp + 8 * 2); // go string length

    const goStrView = this.getmem(saddr, len); // js slice

    // malloc cstr with room for null terminator
    const cstr = globalThis.raylib._malloc(len + 1);
    const cStrView = this.getRaylibU8Array(cstr, len + 1);

    // copy Go string to C
    cStrView.set(goStrView);
    // // set last byte to null terminator
    cStrView[len] = 0;
    // return cstr
    this.setInt32(sp + 8 * 3, cstr);
  };
  // func(src unsafe.Pointer, srcSize, dstCptr cptr)
  // copies Go memory to C memory. Useful for copying slices and structs.
  // Destination C array must have enough space.
  // src must be a type. cannot be a slice. To pass a slice, use unsafe.SliceData
  CopyToC = (sp) => {
    sp >>>= 0;
    const srcGoPtr = this.getInt64(sp + 8 * 1);
    const srcSize = this.getInt32(sp + 8 * 2); // size of the dstGoPtr
    // size and pointer are packed into a single 64bit int by Go's compiler
    const dstCptr = this.getInt32(sp + 8 * 2 + 4);

    const goBytes = this.getmem(srcGoPtr, srcSize);
    this.getRaylibU8Array(dstCptr, srcSize).set(goBytes);
  };
  // func(dstGoPtr unsafe.Pointer, size int32, src cptr)
  // copies C memory to a Go pointer. Useful for copying C structs into Go structs
  //
  // example usage:
  // type Person struct{
  //  Age string
  // }
  //
  // var cPtrToPersonInCHeap cptr = ...
  //
  // var p Person
  // CopyToGo(unsafe.Pointer(&p),unsafe.SizeOf(p),cPtrToPersonInCHeap)
  //
  // p.Age == (whatever it was in C)
  CopyToGo = (sp) => {
    sp >>>= 0;
    const dstGoPtr = this.getInt64(sp + 8 * 1);
    const size = this.getInt32(sp + 8 * 2); // size of the dstGoPtr
    // size and pointer are packed into a single 64bit int by Go's compiler
    const srcCptr = this.getInt32(sp + 8 * 2 + 4);

    const srcCBytes = this.getRaylibU8Array(srcCptr, size);
    const dstGoBytes = this.getmem(dstGoPtr, size);
    // copy C bytes to Go
    dstGoBytes.set(srcCBytes);
  };
  // func alert(string)
  Alert = (sp) => {
    sp >>>= 0;
    const saddr = this.getInt64(sp + 8 * 1);
    const len = this.getInt64(sp + 8 * 2);
    const strU8 = this.getmem(saddr, len);

    const decoder = new TextDecoder("utf-8"); // 'utf-8' is the default encoding
    const str = decoder.decode(strU8);
    alert(str);
  };
}

export { Runtime };
