
import Module from './raylib_emscripten.js'


// run this function before calling anything
export async function raylib_run(canvas, userInit, userUpdate) {
  const raylib = {}
  const wasmBinary = new Uint8Array(await fetch(import.meta.url.replace('raylib.js', 'raylib.wasm')).then(r => r.arrayBuffer()))
  const mod = await Module({ canvas, wasmBinary })
  raylib.mod = mod
  // Vector2, 2 components
  raylib.Vector2 = class Vector2 {
    constructor(init = {}, _address) {
      this._size = 8
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
    }

    get x() {
      return mod.getValue(this._address + 0, 'float')
    }
    set x(x) {
      mod.setValue(this._address + 0, x, 'float')
    }


    get y() {
      return mod.getValue(this._address + 4, 'float')
    }
    set y(y) {
      mod.setValue(this._address + 4, y, 'float')
    }

  }

  // Vector3, 3 components
  raylib.Vector3 = class Vector3 {
    constructor(init = {}, _address) {
      this._size = 12
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
    }

    get x() {
      return mod.getValue(this._address + 0, 'float')
    }
    set x(x) {
      mod.setValue(this._address + 0, x, 'float')
    }


    get y() {
      return mod.getValue(this._address + 4, 'float')
    }
    set y(y) {
      mod.setValue(this._address + 4, y, 'float')
    }


    get z() {
      return mod.getValue(this._address + 8, 'float')
    }
    set z(z) {
      mod.setValue(this._address + 8, z, 'float')
    }

  }

  // Vector4, 4 components
  raylib.Vector4 = class Vector4 {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
      this.w = init.w || 0
    }

    get x() {
      return mod.getValue(this._address + 0, 'float')
    }
    set x(x) {
      mod.setValue(this._address + 0, x, 'float')
    }


    get y() {
      return mod.getValue(this._address + 4, 'float')
    }
    set y(y) {
      mod.setValue(this._address + 4, y, 'float')
    }


    get z() {
      return mod.getValue(this._address + 8, 'float')
    }
    set z(z) {
      mod.setValue(this._address + 8, z, 'float')
    }


    get w() {
      return mod.getValue(this._address + 12, 'float')
    }
    set w(w) {
      mod.setValue(this._address + 12, w, 'float')
    }

  }

  // Matrix, 4x4 components, column major, OpenGL style, right-handed
  raylib.Matrix = class Matrix {
    constructor(init = {}, _address) {
      this._size = 64
      this._address = _address || mod._malloc(this._size)

      this.m0 = init.m0 || 0
      this.m4 = init.m4 || 0
      this.m8 = init.m8 || 0
      this.m12 = init.m12 || 0
      this.m1 = init.m1 || 0
      this.m5 = init.m5 || 0
      this.m9 = init.m9 || 0
      this.m13 = init.m13 || 0
      this.m2 = init.m2 || 0
      this.m6 = init.m6 || 0
      this.m10 = init.m10 || 0
      this.m14 = init.m14 || 0
      this.m3 = init.m3 || 0
      this.m7 = init.m7 || 0
      this.m11 = init.m11 || 0
      this.m15 = init.m15 || 0
    }

    get m0() {
      return mod.getValue(this._address + 0, 'float')
    }
    set m0(m0) {
      mod.setValue(this._address + 0, m0, 'float')
    }


    get m4() {
      return mod.getValue(this._address + 4, 'float')
    }
    set m4(m4) {
      mod.setValue(this._address + 4, m4, 'float')
    }


    get m8() {
      return mod.getValue(this._address + 8, 'float')
    }
    set m8(m8) {
      mod.setValue(this._address + 8, m8, 'float')
    }


    get m12() {
      return mod.getValue(this._address + 12, 'float')
    }
    set m12(m12) {
      mod.setValue(this._address + 12, m12, 'float')
    }


    get m1() {
      return mod.getValue(this._address + 16, 'float')
    }
    set m1(m1) {
      mod.setValue(this._address + 16, m1, 'float')
    }


    get m5() {
      return mod.getValue(this._address + 20, 'float')
    }
    set m5(m5) {
      mod.setValue(this._address + 20, m5, 'float')
    }


    get m9() {
      return mod.getValue(this._address + 24, 'float')
    }
    set m9(m9) {
      mod.setValue(this._address + 24, m9, 'float')
    }


    get m13() {
      return mod.getValue(this._address + 28, 'float')
    }
    set m13(m13) {
      mod.setValue(this._address + 28, m13, 'float')
    }


    get m2() {
      return mod.getValue(this._address + 32, 'float')
    }
    set m2(m2) {
      mod.setValue(this._address + 32, m2, 'float')
    }


    get m6() {
      return mod.getValue(this._address + 36, 'float')
    }
    set m6(m6) {
      mod.setValue(this._address + 36, m6, 'float')
    }


    get m10() {
      return mod.getValue(this._address + 40, 'float')
    }
    set m10(m10) {
      mod.setValue(this._address + 40, m10, 'float')
    }


    get m14() {
      return mod.getValue(this._address + 44, 'float')
    }
    set m14(m14) {
      mod.setValue(this._address + 44, m14, 'float')
    }


    get m3() {
      return mod.getValue(this._address + 48, 'float')
    }
    set m3(m3) {
      mod.setValue(this._address + 48, m3, 'float')
    }


    get m7() {
      return mod.getValue(this._address + 52, 'float')
    }
    set m7(m7) {
      mod.setValue(this._address + 52, m7, 'float')
    }


    get m11() {
      return mod.getValue(this._address + 56, 'float')
    }
    set m11(m11) {
      mod.setValue(this._address + 56, m11, 'float')
    }


    get m15() {
      return mod.getValue(this._address + 60, 'float')
    }
    set m15(m15) {
      mod.setValue(this._address + 60, m15, 'float')
    }

  }

  // Color, 4 components, R8G8B8A8 (32bit)
  raylib.Color = class Color {
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

  // Rectangle, 4 components
  raylib.Rectangle = class Rectangle {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.width = init.width || 0
      this.height = init.height || 0
    }

    get x() {
      return mod.getValue(this._address + 0, 'float')
    }
    set x(x) {
      mod.setValue(this._address + 0, x, 'float')
    }


    get y() {
      return mod.getValue(this._address + 4, 'float')
    }
    set y(y) {
      mod.setValue(this._address + 4, y, 'float')
    }


    get width() {
      return mod.getValue(this._address + 8, 'float')
    }
    set width(width) {
      mod.setValue(this._address + 8, width, 'float')
    }


    get height() {
      return mod.getValue(this._address + 12, 'float')
    }
    set height(height) {
      mod.setValue(this._address + 12, height, 'float')
    }

  }

  // Image, pixel data stored in CPU memory (RAM)
  raylib.Image = class Image {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.data = init.data || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }

    get data() {
      return mod.getValue(this._address + 0, '*')
    }
    set data(data) {
      mod.setValue(this._address + 0, data, '*')
    }


    get width() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width(width) {
      mod.setValue(this._address + 4, width, 'i32')
    }


    get height() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height(height) {
      mod.setValue(this._address + 8, height, 'i32')
    }


    get mipmaps() {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps(mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }


    get format() {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format(format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // Texture, tex data stored in GPU memory (VRAM)
  raylib.Texture = class Texture {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }

    get id() {
      return mod.HEAPU32[this._address + 0]
    }
    set id(id) {
      mod.HEAPU32[this._address + 0] = id
    }


    get width() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width(width) {
      mod.setValue(this._address + 4, width, 'i32')
    }


    get height() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height(height) {
      mod.setValue(this._address + 8, height, 'i32')
    }


    get mipmaps() {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps(mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }


    get format() {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format(format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // RenderTexture, fbo for texture rendering
  raylib.RenderTexture = class RenderTexture {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.texture = new raylib.Texture(init.texture || {}, this._address + 4)
      this.depth = new raylib.Texture(init.depth || {}, this._address + 24)
    }

    get id() {
      return mod.HEAPU32[this._address + 0]
    }
    set id(id) {
      mod.HEAPU32[this._address + 0] = id
    }



  }

  // NPatchInfo, n-patch layout info
  raylib.NPatchInfo = class NPatchInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)

      this.source = new raylib.Rectangle(init.source || {}, this._address + 0)
      this.left = init.left || 0
      this.top = init.top || 0
      this.right = init.right || 0
      this.bottom = init.bottom || 0
      this.layout = init.layout || 0
    }


    get left() {
      return mod.getValue(this._address + 16, 'i32')
    }
    set left(left) {
      mod.setValue(this._address + 16, left, 'i32')
    }


    get top() {
      return mod.getValue(this._address + 20, 'i32')
    }
    set top(top) {
      mod.setValue(this._address + 20, top, 'i32')
    }


    get right() {
      return mod.getValue(this._address + 24, 'i32')
    }
    set right(right) {
      mod.setValue(this._address + 24, right, 'i32')
    }


    get bottom() {
      return mod.getValue(this._address + 28, 'i32')
    }
    set bottom(bottom) {
      mod.setValue(this._address + 28, bottom, 'i32')
    }


    get layout() {
      return mod.getValue(this._address + 32, 'i32')
    }
    set layout(layout) {
      mod.setValue(this._address + 32, layout, 'i32')
    }

  }

  // GlyphInfo, font characters glyphs info
  raylib.GlyphInfo = class GlyphInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)

      this.value = init.value || 0
      this.offsetX = init.offsetX || 0
      this.offsetY = init.offsetY || 0
      this.advanceX = init.advanceX || 0
      this.image = new raylib.Image(init.image || {}, this._address + 16)
    }

    get value() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set value(value) {
      mod.setValue(this._address + 0, value, 'i32')
    }


    get offsetX() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set offsetX(offsetX) {
      mod.setValue(this._address + 4, offsetX, 'i32')
    }


    get offsetY() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set offsetY(offsetY) {
      mod.setValue(this._address + 8, offsetY, 'i32')
    }


    get advanceX() {
      return mod.getValue(this._address + 12, 'i32')
    }
    set advanceX(advanceX) {
      mod.setValue(this._address + 12, advanceX, 'i32')
    }


  }

  // Font, font texture and GlyphInfo array data
  raylib.Font = class Font {
    constructor(init = {}, _address) {
      this._size = 40
      this._address = _address || mod._malloc(this._size)

      this.baseSize = init.baseSize || 0
      this.glyphCount = init.glyphCount || 0
      this.glyphPadding = init.glyphPadding || 0
      this.texture = new raylib.Texture2D(init.texture || {}, this._address + 12)
      this.recs = new raylib.Rectangle(init.recs || {}, this._address + 32)
      this.glyphs = new raylib.GlyphInfo(init.glyphs || {}, this._address + 36)
    }

    get baseSize() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set baseSize(baseSize) {
      mod.setValue(this._address + 0, baseSize, 'i32')
    }


    get glyphCount() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set glyphCount(glyphCount) {
      mod.setValue(this._address + 4, glyphCount, 'i32')
    }


    get glyphPadding() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set glyphPadding(glyphPadding) {
      mod.setValue(this._address + 8, glyphPadding, 'i32')
    }




  }

  // Camera, defines position/orientation in 3d space
  raylib.Camera3D = class Camera3D {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.position = new raylib.Vector3(init.position || {}, this._address + 0)
      this.target = new raylib.Vector3(init.target || {}, this._address + 12)
      this.up = new raylib.Vector3(init.up || {}, this._address + 24)
      this.fovy = init.fovy || 0
      this.projection = init.projection || 0
    }




    get fovy() {
      return mod.getValue(this._address + 36, 'float')
    }
    set fovy(fovy) {
      mod.setValue(this._address + 36, fovy, 'float')
    }


    get projection() {
      return mod.getValue(this._address + 40, 'i32')
    }
    set projection(projection) {
      mod.setValue(this._address + 40, projection, 'i32')
    }

  }

  // Camera2D, defines position/orientation in 2d space
  raylib.Camera2D = class Camera2D {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.offset = new raylib.Vector2(init.offset || {}, this._address + 0)
      this.target = new raylib.Vector2(init.target || {}, this._address + 8)
      this.rotation = init.rotation || 0
      this.zoom = init.zoom || 0
    }



    get rotation() {
      return mod.getValue(this._address + 16, 'float')
    }
    set rotation(rotation) {
      mod.setValue(this._address + 16, rotation, 'float')
    }


    get zoom() {
      return mod.getValue(this._address + 20, 'float')
    }
    set zoom(zoom) {
      mod.setValue(this._address + 20, zoom, 'float')
    }

  }

  // Mesh, vertex data and vao/vbo
  raylib.Mesh = class Mesh {
    constructor(init = {}, _address) {
      this._size = 68
      this._address = _address || mod._malloc(this._size)

      this.vertexCount = init.vertexCount || 0
      this.triangleCount = init.triangleCount || 0
      this.vertices = init.vertices || 0
      this.texcoords = init.texcoords || 0
      this.texcoords2 = init.texcoords2 || 0
      this.normals = init.normals || 0
      this.tangents = init.tangents || 0
      this.colors = init.colors || 0
      this.indices = init.indices || 0
      this.animVertices = init.animVertices || 0
      this.animNormals = init.animNormals || 0
      this.boneIds = init.boneIds || 0
      this.boneWeights = init.boneWeights || 0
      this.boneMatrices = new raylib.Matrix(init.boneMatrices || {}, this._address + 52)
      this.boneCount = init.boneCount || 0
      this.vaoId = init.vaoId || 0
      this.vboId = init.vboId || 0
    }

    get vertexCount() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set vertexCount(vertexCount) {
      mod.setValue(this._address + 0, vertexCount, 'i32')
    }


    get triangleCount() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set triangleCount(triangleCount) {
      mod.setValue(this._address + 4, triangleCount, 'i32')
    }


    get vertices() {
      return mod.getValue(this._address + 8, '*')
    }
    set vertices(vertices) {
      mod.setValue(this._address + 8, vertices, '*')
    }


    get texcoords() {
      return mod.getValue(this._address + 12, '*')
    }
    set texcoords(texcoords) {
      mod.setValue(this._address + 12, texcoords, '*')
    }


    get texcoords2() {
      return mod.getValue(this._address + 16, '*')
    }
    set texcoords2(texcoords2) {
      mod.setValue(this._address + 16, texcoords2, '*')
    }


    get normals() {
      return mod.getValue(this._address + 20, '*')
    }
    set normals(normals) {
      mod.setValue(this._address + 20, normals, '*')
    }


    get tangents() {
      return mod.getValue(this._address + 24, '*')
    }
    set tangents(tangents) {
      mod.setValue(this._address + 24, tangents, '*')
    }


    get colors() {
      return mod.getValue(this._address + 28, '*')
    }
    set colors(colors) {
      mod.setValue(this._address + 28, colors, '*')
    }


    get indices() {
      return mod.getValue(this._address + 32, '*')
    }
    set indices(indices) {
      mod.setValue(this._address + 32, indices, '*')
    }


    get animVertices() {
      return mod.getValue(this._address + 36, '*')
    }
    set animVertices(animVertices) {
      mod.setValue(this._address + 36, animVertices, '*')
    }


    get animNormals() {
      return mod.getValue(this._address + 40, '*')
    }
    set animNormals(animNormals) {
      mod.setValue(this._address + 40, animNormals, '*')
    }


    get boneIds() {
      return mod.getValue(this._address + 44, '*')
    }
    set boneIds(boneIds) {
      mod.setValue(this._address + 44, boneIds, '*')
    }


    get boneWeights() {
      return mod.getValue(this._address + 48, '*')
    }
    set boneWeights(boneWeights) {
      mod.setValue(this._address + 48, boneWeights, '*')
    }



    get boneCount() {
      return mod.getValue(this._address + 56, 'i32')
    }
    set boneCount(boneCount) {
      mod.setValue(this._address + 56, boneCount, 'i32')
    }


    get vaoId() {
      return mod.HEAPU32[this._address + 60]
    }
    set vaoId(vaoId) {
      mod.HEAPU32[this._address + 60] = vaoId
    }


    get vboId() {
      return mod.getValue(this._address + 64, '*')
    }
    set vboId(vboId) {
      mod.setValue(this._address + 64, vboId, '*')
    }

  }

  // Shader
  raylib.Shader = class Shader {
    constructor(init = {}, _address) {
      this._size = 8
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.locs = init.locs || 0
    }

    get id() {
      return mod.HEAPU32[this._address + 0]
    }
    set id(id) {
      mod.HEAPU32[this._address + 0] = id
    }


    get locs() {
      return mod.getValue(this._address + 4, '*')
    }
    set locs(locs) {
      mod.setValue(this._address + 4, locs, '*')
    }

  }

  // MaterialMap
  raylib.MaterialMap = class MaterialMap {
    constructor(init = {}, _address) {
      this._size = 28
      this._address = _address || mod._malloc(this._size)

      this.texture = new raylib.Texture2D(init.texture || {}, this._address + 0)
      this.color = new raylib.Color(init.color || {}, this._address + 20)
      this.value = init.value || 0
    }



    get value() {
      return mod.getValue(this._address + 24, 'float')
    }
    set value(value) {
      mod.setValue(this._address + 24, value, 'float')
    }

  }

  // Material, includes shader and maps
  raylib.Material = class Material {
    constructor(init = {}, _address) {
      this._size = 28
      this._address = _address || mod._malloc(this._size)

      this.shader = new raylib.Shader(init.shader || {}, this._address + 0)
      this.maps = new raylib.MaterialMap(init.maps || {}, this._address + 8)
      this.params = init.params || [0, 0, 0, 0]
    }



    get params() {
      return mod.getValue(this._address + 12, '*')
    }
    set params(params) {
      mod.setValue(this._address + 12, params, '*')
    }

  }

  // Transform, vertex transformation data
  raylib.Transform = class Transform {
    constructor(init = {}, _address) {
      this._size = 40
      this._address = _address || mod._malloc(this._size)

      this.translation = new raylib.Vector3(init.translation || {}, this._address + 0)
      this.rotation = new raylib.Quaternion(init.rotation || {}, this._address + 12)
      this.scale = new raylib.Vector3(init.scale || {}, this._address + 28)
    }



  }

  // Bone, skeletal animation bone
  raylib.BoneInfo = class BoneInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)

      this.name = init.name || ''
      this.parent = init.parent || 0
    }

    get name() {
      return mod.UTF8ToString(this._address + 0)
    }
    set name(name) {
      mod.stringToUTF8(this._address + 0, name)
    }


    get parent() {
      return mod.getValue(this._address + 32, 'i32')
    }
    set parent(parent) {
      mod.setValue(this._address + 32, parent, 'i32')
    }

  }

  // Model, meshes, materials and animation data
  raylib.Model = class Model {
    constructor(init = {}, _address) {
      this._size = 96
      this._address = _address || mod._malloc(this._size)

      this.transform = new raylib.Matrix(init.transform || {}, this._address + 0)
      this.meshCount = init.meshCount || 0
      this.materialCount = init.materialCount || 0
      this.meshes = new raylib.Mesh(init.meshes || {}, this._address + 72)
      this.materials = new raylib.Material(init.materials || {}, this._address + 76)
      this.meshMaterial = init.meshMaterial || 0
      this.boneCount = init.boneCount || 0
      this.bones = new raylib.BoneInfo(init.bones || {}, this._address + 88)
      this.bindPose = new raylib.Transform(init.bindPose || {}, this._address + 92)
    }


    get meshCount() {
      return mod.getValue(this._address + 64, 'i32')
    }
    set meshCount(meshCount) {
      mod.setValue(this._address + 64, meshCount, 'i32')
    }


    get materialCount() {
      return mod.getValue(this._address + 68, 'i32')
    }
    set materialCount(materialCount) {
      mod.setValue(this._address + 68, materialCount, 'i32')
    }




    get meshMaterial() {
      return mod.getValue(this._address + 80, '*')
    }
    set meshMaterial(meshMaterial) {
      mod.setValue(this._address + 80, meshMaterial, '*')
    }


    get boneCount() {
      return mod.getValue(this._address + 84, 'i32')
    }
    set boneCount(boneCount) {
      mod.setValue(this._address + 84, boneCount, 'i32')
    }



  }

  // ModelAnimation
  raylib.ModelAnimation = class ModelAnimation {
    constructor(init = {}, _address) {
      this._size = 48
      this._address = _address || mod._malloc(this._size)

      this.boneCount = init.boneCount || 0
      this.frameCount = init.frameCount || 0
      this.bones = new raylib.BoneInfo(init.bones || {}, this._address + 8)
      this.framePoses = init.framePoses || new raylib.Transform()
      this.name = init.name || ''
    }

    get boneCount() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set boneCount(boneCount) {
      mod.setValue(this._address + 0, boneCount, 'i32')
    }


    get frameCount() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set frameCount(frameCount) {
      mod.setValue(this._address + 4, frameCount, 'i32')
    }



    get framePoses() {
      return mod.getValue(this._address + 12, '*')
    }
    set framePoses(framePoses) {
      mod.setValue(this._address + 12, framePoses, '*')
    }


    get name() {
      return mod.UTF8ToString(this._address + 16)
    }
    set name(name) {
      mod.stringToUTF8(this._address + 16, name)
    }

  }

  // Ray, ray for raycasting
  raylib.Ray = class Ray {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.position = new raylib.Vector3(init.position || {}, this._address + 0)
      this.direction = new raylib.Vector3(init.direction || {}, this._address + 12)
    }


  }

  // RayCollision, ray hit information
  raylib.RayCollision = class RayCollision {
    constructor(init = {}, _address) {
      this._size = 29
      this._address = _address || mod._malloc(this._size)

      this.hit = init.hit || 0
      this.distance = init.distance || 0
      this.point = new raylib.Vector3(init.point || {}, this._address + 5)
      this.normal = new raylib.Vector3(init.normal || {}, this._address + 17)
    }

    get hit() {
      return mod.getValue(this._address + 0, 'i1')
    }
    set hit(hit) {
      mod.setValue(this._address + 0, hit, 'i1')
    }


    get distance() {
      return mod.getValue(this._address + 1, 'float')
    }
    set distance(distance) {
      mod.setValue(this._address + 1, distance, 'float')
    }



  }

  // BoundingBox
  raylib.BoundingBox = class BoundingBox {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.min = new raylib.Vector3(init.min || {}, this._address + 0)
      this.max = new raylib.Vector3(init.max || {}, this._address + 12)
    }


  }

  // Wave, audio wave data
  raylib.Wave = class Wave {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.frameCount = init.frameCount || 0
      this.sampleRate = init.sampleRate || 0
      this.sampleSize = init.sampleSize || 0
      this.channels = init.channels || 0
      this.data = init.data || 0
    }

    get frameCount() {
      return mod.HEAPU32[this._address + 0]
    }
    set frameCount(frameCount) {
      mod.HEAPU32[this._address + 0] = frameCount
    }


    get sampleRate() {
      return mod.HEAPU32[this._address + 4]
    }
    set sampleRate(sampleRate) {
      mod.HEAPU32[this._address + 4] = sampleRate
    }


    get sampleSize() {
      return mod.HEAPU32[this._address + 8]
    }
    set sampleSize(sampleSize) {
      mod.HEAPU32[this._address + 8] = sampleSize
    }


    get channels() {
      return mod.HEAPU32[this._address + 12]
    }
    set channels(channels) {
      mod.HEAPU32[this._address + 12] = channels
    }


    get data() {
      return mod.getValue(this._address + 16, '*')
    }
    set data(data) {
      mod.setValue(this._address + 16, data, '*')
    }

  }

  // AudioStream, custom audio stream
  raylib.AudioStream = class AudioStream {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.buffer = init.buffer || 0
      this.processor = init.processor || 0
      this.sampleRate = init.sampleRate || 0
      this.sampleSize = init.sampleSize || 0
      this.channels = init.channels || 0
    }

    get buffer() {
      return mod.getValue(this._address + 0, '*')
    }
    set buffer(buffer) {
      mod.setValue(this._address + 0, buffer, '*')
    }


    get processor() {
      return mod.getValue(this._address + 4, '*')
    }
    set processor(processor) {
      mod.setValue(this._address + 4, processor, '*')
    }


    get sampleRate() {
      return mod.HEAPU32[this._address + 8]
    }
    set sampleRate(sampleRate) {
      mod.HEAPU32[this._address + 8] = sampleRate
    }


    get sampleSize() {
      return mod.HEAPU32[this._address + 12]
    }
    set sampleSize(sampleSize) {
      mod.HEAPU32[this._address + 12] = sampleSize
    }


    get channels() {
      return mod.HEAPU32[this._address + 16]
    }
    set channels(channels) {
      mod.HEAPU32[this._address + 16] = channels
    }

  }

  // Sound
  raylib.Sound = class Sound {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.stream = new raylib.AudioStream(init.stream || {}, this._address + 0)
      this.frameCount = init.frameCount || 0
    }


    get frameCount() {
      return mod.HEAPU32[this._address + 20]
    }
    set frameCount(frameCount) {
      mod.HEAPU32[this._address + 20] = frameCount
    }

  }

  // Music, audio stream, anything longer than ~10 seconds should be streamed
  raylib.Music = class Music {
    constructor(init = {}, _address) {
      this._size = 33
      this._address = _address || mod._malloc(this._size)

      this.stream = new raylib.AudioStream(init.stream || {}, this._address + 0)
      this.frameCount = init.frameCount || 0
      this.looping = init.looping || 0
      this.ctxType = init.ctxType || 0
      this.ctxData = init.ctxData || 0
    }


    get frameCount() {
      return mod.HEAPU32[this._address + 20]
    }
    set frameCount(frameCount) {
      mod.HEAPU32[this._address + 20] = frameCount
    }


    get looping() {
      return mod.getValue(this._address + 24, 'i1')
    }
    set looping(looping) {
      mod.setValue(this._address + 24, looping, 'i1')
    }


    get ctxType() {
      return mod.getValue(this._address + 25, 'i32')
    }
    set ctxType(ctxType) {
      mod.setValue(this._address + 25, ctxType, 'i32')
    }


    get ctxData() {
      return mod.getValue(this._address + 29, '*')
    }
    set ctxData(ctxData) {
      mod.setValue(this._address + 29, ctxData, '*')
    }

  }

  // VrDeviceInfo, Head-Mounted-Display device parameters
  raylib.VrDeviceInfo = class VrDeviceInfo {
    constructor(init = {}, _address) {
      this._size = 60
      this._address = _address || mod._malloc(this._size)

      this.hResolution = init.hResolution || 0
      this.vResolution = init.vResolution || 0
      this.hScreenSize = init.hScreenSize || 0
      this.vScreenSize = init.vScreenSize || 0
      this.eyeToScreenDistance = init.eyeToScreenDistance || 0
      this.lensSeparationDistance = init.lensSeparationDistance || 0
      this.interpupillaryDistance = init.interpupillaryDistance || 0
      this.lensDistortionValues = init.lensDistortionValues || [0, 0, 0, 0]
      this.chromaAbCorrection = init.chromaAbCorrection || [0, 0, 0, 0]
    }

    get hResolution() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set hResolution(hResolution) {
      mod.setValue(this._address + 0, hResolution, 'i32')
    }


    get vResolution() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set vResolution(vResolution) {
      mod.setValue(this._address + 4, vResolution, 'i32')
    }


    get hScreenSize() {
      return mod.getValue(this._address + 8, 'float')
    }
    set hScreenSize(hScreenSize) {
      mod.setValue(this._address + 8, hScreenSize, 'float')
    }


    get vScreenSize() {
      return mod.getValue(this._address + 12, 'float')
    }
    set vScreenSize(vScreenSize) {
      mod.setValue(this._address + 12, vScreenSize, 'float')
    }


    get eyeToScreenDistance() {
      return mod.getValue(this._address + 16, 'float')
    }
    set eyeToScreenDistance(eyeToScreenDistance) {
      mod.setValue(this._address + 16, eyeToScreenDistance, 'float')
    }


    get lensSeparationDistance() {
      return mod.getValue(this._address + 20, 'float')
    }
    set lensSeparationDistance(lensSeparationDistance) {
      mod.setValue(this._address + 20, lensSeparationDistance, 'float')
    }


    get interpupillaryDistance() {
      return mod.getValue(this._address + 24, 'float')
    }
    set interpupillaryDistance(interpupillaryDistance) {
      mod.setValue(this._address + 24, interpupillaryDistance, 'float')
    }


    get lensDistortionValues() {
      return mod.getValue(this._address + 28, '*')
    }
    set lensDistortionValues(lensDistortionValues) {
      mod.setValue(this._address + 28, lensDistortionValues, '*')
    }


    get chromaAbCorrection() {
      return mod.getValue(this._address + 44, '*')
    }
    set chromaAbCorrection(chromaAbCorrection) {
      mod.setValue(this._address + 44, chromaAbCorrection, '*')
    }

  }

  // VrStereoConfig, VR stereo rendering configuration for simulator
  raylib.VrStereoConfig = class VrStereoConfig {
    constructor(init = {}, _address) {
      this._size = 304
      this._address = _address || mod._malloc(this._size)

      this.projection = init.projection || [new raylib.Matrix(), new raylib.Matrix()]
      this.viewOffset = init.viewOffset || [new raylib.Matrix(), new raylib.Matrix()]
      this.leftLensCenter = init.leftLensCenter || [0, 0]
      this.rightLensCenter = init.rightLensCenter || [0, 0]
      this.leftScreenCenter = init.leftScreenCenter || [0, 0]
      this.rightScreenCenter = init.rightScreenCenter || [0, 0]
      this.scale = init.scale || [0, 0]
      this.scaleIn = init.scaleIn || [0, 0]
    }

    get projection() {
      return mod.getValue(this._address + 0, '*')
    }
    set projection(projection) {
      mod.setValue(this._address + 0, projection, '*')
    }


    get viewOffset() {
      return mod.getValue(this._address + 128, '*')
    }
    set viewOffset(viewOffset) {
      mod.setValue(this._address + 128, viewOffset, '*')
    }


    get leftLensCenter() {
      return mod.getValue(this._address + 256, '*')
    }
    set leftLensCenter(leftLensCenter) {
      mod.setValue(this._address + 256, leftLensCenter, '*')
    }


    get rightLensCenter() {
      return mod.getValue(this._address + 264, '*')
    }
    set rightLensCenter(rightLensCenter) {
      mod.setValue(this._address + 264, rightLensCenter, '*')
    }


    get leftScreenCenter() {
      return mod.getValue(this._address + 272, '*')
    }
    set leftScreenCenter(leftScreenCenter) {
      mod.setValue(this._address + 272, leftScreenCenter, '*')
    }


    get rightScreenCenter() {
      return mod.getValue(this._address + 280, '*')
    }
    set rightScreenCenter(rightScreenCenter) {
      mod.setValue(this._address + 280, rightScreenCenter, '*')
    }


    get scale() {
      return mod.getValue(this._address + 288, '*')
    }
    set scale(scale) {
      mod.setValue(this._address + 288, scale, '*')
    }


    get scaleIn() {
      return mod.getValue(this._address + 296, '*')
    }
    set scaleIn(scaleIn) {
      mod.setValue(this._address + 296, scaleIn, '*')
    }

  }

  // File path list
  raylib.FilePathList = class FilePathList {
    constructor(init = {}, _address) {
      this._size = 12
      this._address = _address || mod._malloc(this._size)

      this.capacity = init.capacity || 0
      this.count = init.count || 0
      this.paths = init.paths || 0
    }

    get capacity() {
      return mod.HEAPU32[this._address + 0]
    }
    set capacity(capacity) {
      mod.HEAPU32[this._address + 0] = capacity
    }


    get count() {
      return mod.HEAPU32[this._address + 4]
    }
    set count(count) {
      mod.HEAPU32[this._address + 4] = count
    }


    get paths() {
      return mod.getValue(this._address + 8, '*')
    }
    set paths(paths) {
      mod.setValue(this._address + 8, paths, '*')
    }

  }

  // Automation event
  raylib.AutomationEvent = class AutomationEvent {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.frame = init.frame || 0
      this.type = init.type || 0
      this.params = init.params || [0, 0, 0, 0]
    }

    get frame() {
      return mod.HEAPU32[this._address + 0]
    }
    set frame(frame) {
      mod.HEAPU32[this._address + 0] = frame
    }


    get type() {
      return mod.HEAPU32[this._address + 4]
    }
    set type(type) {
      mod.HEAPU32[this._address + 4] = type
    }


    get params() {
      return mod.getValue(this._address + 8, '*')
    }
    set params(params) {
      mod.setValue(this._address + 8, params, '*')
    }

  }

  // Automation event list
  raylib.AutomationEventList = class AutomationEventList {
    constructor(init = {}, _address) {
      this._size = 12
      this._address = _address || mod._malloc(this._size)

      this.capacity = init.capacity || 0
      this.count = init.count || 0
      this.events = new raylib.AutomationEvent(init.events || {}, this._address + 8)
    }

    get capacity() {
      return mod.HEAPU32[this._address + 0]
    }
    set capacity(capacity) {
      mod.HEAPU32[this._address + 0] = capacity
    }


    get count() {
      return mod.HEAPU32[this._address + 4]
    }
    set count(count) {
      mod.HEAPU32[this._address + 4] = count
    }


  }

  // Texture2D, same as Texture
  raylib.Texture2D = class Texture2D {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }

    get id() {
      return mod.HEAPU32[this._address + 0]
    }
    set id(id) {
      mod.HEAPU32[this._address + 0] = id
    }


    get width() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width(width) {
      mod.setValue(this._address + 4, width, 'i32')
    }


    get height() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height(height) {
      mod.setValue(this._address + 8, height, 'i32')
    }


    get mipmaps() {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps(mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }


    get format() {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format(format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // NOTE: Used when exporting style as code for convenience
  raylib.GuiStyleProp = class GuiStyleProp {
    constructor(init = {}, _address) {
      this._size = 4
      this._address = _address || mod._malloc(this._size)

      this.controlId = init.controlId || 0
      this.propertyId = init.propertyId || 0
      this.propertyValue = init.propertyValue || 0
    }

    get controlId() {
      return mod.getValue(this._address + 0, '*')
    }
    set controlId(controlId) {
      mod.setValue(this._address + 0, controlId, '*')
    }


    get propertyId() {
      return mod.getValue(this._address + 0, '*')
    }
    set propertyId(propertyId) {
      mod.setValue(this._address + 0, propertyId, '*')
    }


    get propertyValue() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set propertyValue(propertyValue) {
      mod.setValue(this._address + 0, propertyValue, 'i32')
    }

  }

  // NOTE: Text style is defined by control
  raylib.GuiTextStyle = class GuiTextStyle {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.size = init.size || 0
      this.charSpacing = init.charSpacing || 0
      this.lineSpacing = init.lineSpacing || 0
      this.alignmentH = init.alignmentH || 0
      this.alignmentV = init.alignmentV || 0
      this.padding = init.padding || 0
    }

    get size() {
      return mod.HEAPU32[this._address + 0]
    }
    set size(size) {
      mod.HEAPU32[this._address + 0] = size
    }


    get charSpacing() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set charSpacing(charSpacing) {
      mod.setValue(this._address + 4, charSpacing, 'i32')
    }


    get lineSpacing() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set lineSpacing(lineSpacing) {
      mod.setValue(this._address + 8, lineSpacing, 'i32')
    }


    get alignmentH() {
      return mod.getValue(this._address + 12, 'i32')
    }
    set alignmentH(alignmentH) {
      mod.setValue(this._address + 12, alignmentH, 'i32')
    }


    get alignmentV() {
      return mod.getValue(this._address + 16, 'i32')
    }
    set alignmentV(alignmentV) {
      mod.setValue(this._address + 16, alignmentV, 'i32')
    }


    get padding() {
      return mod.getValue(this._address + 20, 'i32')
    }
    set padding(padding) {
      mod.setValue(this._address + 20, padding, 'i32')
    }

  }

  // Dynamic vertex buffers (position + texcoords + colors + indices arrays)
  raylib.rlVertexBuffer = class rlVertexBuffer {
    constructor(init = {}, _address) {
      this._size = 56
      this._address = _address || mod._malloc(this._size)

      this.elementCount = init.elementCount || 0
      this.vertices = init.vertices || 0
      this.texcoords = init.texcoords || 0
      this.normals = init.normals || 0
      this.colors = init.colors || 0
      this.indices = init.indices || 0
      this.indices = init.indices || 0
      this.indices = init.indices || 0
      this.indices = init.indices || 0
      this.indices = init.indices || 0
      this.vaoId = init.vaoId || 0
      this.vaoId = init.vaoId || 0
      this.vboId = init.vboId || [0, 0, 0, 0, 0]
    }

    get elementCount() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set elementCount(elementCount) {
      mod.setValue(this._address + 0, elementCount, 'i32')
    }


    get vertices() {
      return mod.getValue(this._address + 4, '*')
    }
    set vertices(vertices) {
      mod.setValue(this._address + 4, vertices, '*')
    }


    get texcoords() {
      return mod.getValue(this._address + 8, '*')
    }
    set texcoords(texcoords) {
      mod.setValue(this._address + 8, texcoords, '*')
    }


    get normals() {
      return mod.getValue(this._address + 12, '*')
    }
    set normals(normals) {
      mod.setValue(this._address + 12, normals, '*')
    }


    get colors() {
      return mod.getValue(this._address + 16, '*')
    }
    set colors(colors) {
      mod.setValue(this._address + 16, colors, '*')
    }


    get indices() {
      return mod.getValue(this._address + 20, '*')
    }
    set indices(indices) {
      mod.setValue(this._address + 20, indices, '*')
    }


    get indices() {
      return mod.getValue(this._address + 24, '*')
    }
    set indices(indices) {
      mod.setValue(this._address + 24, indices, '*')
    }


    get indices() {
      return mod.getValue(this._address + 28, '*')
    }
    set indices(indices) {
      mod.setValue(this._address + 28, indices, '*')
    }


    get indices() {
      return mod.getValue(this._address + 28, '*')
    }
    set indices(indices) {
      mod.setValue(this._address + 28, indices, '*')
    }


    get indices() {
      return mod.getValue(this._address + 28, '*')
    }
    set indices(indices) {
      mod.setValue(this._address + 28, indices, '*')
    }


    get vaoId() {
      return mod.getValue(this._address + 32, '*')
    }
    set vaoId(vaoId) {
      mod.setValue(this._address + 32, vaoId, '*')
    }


    get vaoId() {
      return mod.HEAPU32[this._address + 32]
    }
    set vaoId(vaoId) {
      mod.HEAPU32[this._address + 32] = vaoId
    }


    get vboId() {
      return mod.getValue(this._address + 36, '*')
    }
    set vboId(vboId) {
      mod.setValue(this._address + 36, vboId, '*')
    }

  }

  // of those state-change happens (this is done in core module)
  raylib.rlDrawCall = class rlDrawCall {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)

      this.mode = init.mode || 0
      this.vertexCount = init.vertexCount || 0
      this.vertexAlignment = init.vertexAlignment || 0
      this.textureId = init.textureId || 0
    }

    get mode() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set mode(mode) {
      mod.setValue(this._address + 0, mode, 'i32')
    }


    get vertexCount() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set vertexCount(vertexCount) {
      mod.setValue(this._address + 4, vertexCount, 'i32')
    }


    get vertexAlignment() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set vertexAlignment(vertexAlignment) {
      mod.setValue(this._address + 8, vertexAlignment, 'i32')
    }


    get textureId() {
      return mod.HEAPU32[this._address + 12]
    }
    set textureId(textureId) {
      mod.HEAPU32[this._address + 12] = textureId
    }

  }

  // rlRenderBatch type
  raylib.rlRenderBatch = class rlRenderBatch {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.bufferCount = init.bufferCount || 0
      this.currentBuffer = init.currentBuffer || 0
      this.vertexBuffer = new raylib.rlVertexBuffer(init.vertexBuffer || {}, this._address + 8)
      this.draws = new raylib.rlDrawCall(init.draws || {}, this._address + 12)
      this.drawCounter = init.drawCounter || 0
      this.currentDepth = init.currentDepth || 0
    }

    get bufferCount() {
      return mod.getValue(this._address + 0, 'i32')
    }
    set bufferCount(bufferCount) {
      mod.setValue(this._address + 0, bufferCount, 'i32')
    }


    get currentBuffer() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set currentBuffer(currentBuffer) {
      mod.setValue(this._address + 4, currentBuffer, 'i32')
    }




    get drawCounter() {
      return mod.getValue(this._address + 16, 'i32')
    }
    set drawCounter(drawCounter) {
      mod.setValue(this._address + 16, drawCounter, 'i32')
    }


    get currentDepth() {
      return mod.getValue(this._address + 20, 'float')
    }
    set currentDepth(currentDepth) {
      mod.setValue(this._address + 20, currentDepth, 'float')
    }

  }

  // Quaternion, 4 components (Vector4 alias)
  raylib.Quaternion = class Quaternion {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
      this.w = init.w || 0
    }

    get x() {
      return mod.getValue(this._address + 0, 'float')
    }
    set x(x) {
      mod.setValue(this._address + 0, x, 'float')
    }


    get y() {
      return mod.getValue(this._address + 4, 'float')
    }
    set y(y) {
      mod.setValue(this._address + 4, y, 'float')
    }


    get z() {
      return mod.getValue(this._address + 8, 'float')
    }
    set z(z) {
      mod.setValue(this._address + 8, z, 'float')
    }


    get w() {
      return mod.getValue(this._address + 12, 'float')
    }
    set w(w) {
      mod.setValue(this._address + 12, w, 'float')
    }

  }

  // TextureCubemap, same as Texture
  raylib.TextureCubemap = class TextureCubemap {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }

    get id() {
      return mod.HEAPU32[this._address + 0]
    }
    set id(id) {
      mod.HEAPU32[this._address + 0] = id
    }


    get width() {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width(width) {
      mod.setValue(this._address + 4, width, 'i32')
    }


    get height() {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height(height) {
      mod.setValue(this._address + 8, height, 'i32')
    }


    get mipmaps() {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps(mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }


    get format() {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format(format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // RenderTexture2D, same as RenderTexture
  raylib.RenderTexture2D = class RenderTexture2D {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.texture = new raylib.Texture(init.texture || {}, this._address + 4)
      this.depth = new raylib.Texture(init.depth || {}, this._address + 24)
    }

    get id() {
      return mod.HEAPU32[this._address + 0]
    }
    set id(id) {
      mod.HEAPU32[this._address + 0] = id
    }



  }

  // Camera type fallback, defaults to Camera3D
  raylib.Camera = class Camera {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.position = new raylib.Vector3(init.position || {}, this._address + 0)
      this.target = new raylib.Vector3(init.target || {}, this._address + 12)
      this.up = new raylib.Vector3(init.up || {}, this._address + 24)
      this.fovy = init.fovy || 0
      this.projection = init.projection || 0
    }




    get fovy() {
      return mod.getValue(this._address + 36, 'float')
    }
    set fovy(fovy) {
      mod.setValue(this._address + 36, fovy, 'float')
    }


    get projection() {
      return mod.getValue(this._address + 40, 'i32')
    }
    set projection(projection) {
      mod.setValue(this._address + 40, projection, 'i32')
    }

  }

  // ENUM ConfigFlags
  // System/Window config flags
  raylib.FLAG_VSYNC_HINT = 64 // Set to try enabling V-Sync on GPU
  raylib.FLAG_FULLSCREEN_MODE = 2 // Set to run program in fullscreen
  raylib.FLAG_WINDOW_RESIZABLE = 4 // Set to allow resizable window
  raylib.FLAG_WINDOW_UNDECORATED = 8 // Set to disable window decoration (frame and buttons)
  raylib.FLAG_WINDOW_HIDDEN = 128 // Set to hide window
  raylib.FLAG_WINDOW_MINIMIZED = 512 // Set to minimize window (iconify)
  raylib.FLAG_WINDOW_MAXIMIZED = 1024 // Set to maximize window (expanded to monitor)
  raylib.FLAG_WINDOW_UNFOCUSED = 2048 // Set to window non focused
  raylib.FLAG_WINDOW_TOPMOST = 4096 // Set to window always on top
  raylib.FLAG_WINDOW_ALWAYS_RUN = 256 // Set to allow windows running while minimized
  raylib.FLAG_WINDOW_TRANSPARENT = 16 // Set to allow transparent framebuffer
  raylib.FLAG_WINDOW_HIGHDPI = 8192 // Set to support HighDPI
  raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384 // Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED
  raylib.FLAG_BORDERLESS_WINDOWED_MODE = 32768 // Set to run program in borderless windowed mode
  raylib.FLAG_MSAA_4X_HINT = 32 // Set to try enabling MSAA 4X
  raylib.FLAG_INTERLACED_HINT = 65536 // Set to try enabling interlaced video format (for V3D)

  // ENUM TraceLogLevel
  // Trace log level
  raylib.LOG_ALL = 0 // Display all logs
  raylib.LOG_TRACE = 1 // Trace logging, intended for internal use only
  raylib.LOG_DEBUG = 2 // Debug logging, used for internal debugging, it should be disabled on release builds
  raylib.LOG_INFO = 3 // Info logging, used for program execution info
  raylib.LOG_WARNING = 4 // Warning logging, used on recoverable failures
  raylib.LOG_ERROR = 5 // Error logging, used on unrecoverable failures
  raylib.LOG_FATAL = 6 // Fatal logging, used to abort program: exit(EXIT_FAILURE)
  raylib.LOG_NONE = 7 // Disable logging

  // ENUM KeyboardKey
  // Keyboard keys (US keyboard layout)
  raylib.KEY_NULL = 0 // Key: NULL, used for no key pressed
  raylib.KEY_APOSTROPHE = 39 // Key: '
  raylib.KEY_COMMA = 44 // Key: ,
  raylib.KEY_MINUS = 45 // Key: -
  raylib.KEY_PERIOD = 46 // Key: .
  raylib.KEY_SLASH = 47 // Key: /
  raylib.KEY_ZERO = 48 // Key: 0
  raylib.KEY_ONE = 49 // Key: 1
  raylib.KEY_TWO = 50 // Key: 2
  raylib.KEY_THREE = 51 // Key: 3
  raylib.KEY_FOUR = 52 // Key: 4
  raylib.KEY_FIVE = 53 // Key: 5
  raylib.KEY_SIX = 54 // Key: 6
  raylib.KEY_SEVEN = 55 // Key: 7
  raylib.KEY_EIGHT = 56 // Key: 8
  raylib.KEY_NINE = 57 // Key: 9
  raylib.KEY_SEMICOLON = 59 // Key: ;
  raylib.KEY_EQUAL = 61 // Key: =
  raylib.KEY_A = 65 // Key: A | a
  raylib.KEY_B = 66 // Key: B | b
  raylib.KEY_C = 67 // Key: C | c
  raylib.KEY_D = 68 // Key: D | d
  raylib.KEY_E = 69 // Key: E | e
  raylib.KEY_F = 70 // Key: F | f
  raylib.KEY_G = 71 // Key: G | g
  raylib.KEY_H = 72 // Key: H | h
  raylib.KEY_I = 73 // Key: I | i
  raylib.KEY_J = 74 // Key: J | j
  raylib.KEY_K = 75 // Key: K | k
  raylib.KEY_L = 76 // Key: L | l
  raylib.KEY_M = 77 // Key: M | m
  raylib.KEY_N = 78 // Key: N | n
  raylib.KEY_O = 79 // Key: O | o
  raylib.KEY_P = 80 // Key: P | p
  raylib.KEY_Q = 81 // Key: Q | q
  raylib.KEY_R = 82 // Key: R | r
  raylib.KEY_S = 83 // Key: S | s
  raylib.KEY_T = 84 // Key: T | t
  raylib.KEY_U = 85 // Key: U | u
  raylib.KEY_V = 86 // Key: V | v
  raylib.KEY_W = 87 // Key: W | w
  raylib.KEY_X = 88 // Key: X | x
  raylib.KEY_Y = 89 // Key: Y | y
  raylib.KEY_Z = 90 // Key: Z | z
  raylib.KEY_LEFT_BRACKET = 91 // Key: [
  raylib.KEY_BACKSLASH = 92 // Key: '\'
  raylib.KEY_RIGHT_BRACKET = 93 // Key: ]
  raylib.KEY_GRAVE = 96 // Key: `
  raylib.KEY_SPACE = 32 // Key: Space
  raylib.KEY_ESCAPE = 256 // Key: Esc
  raylib.KEY_ENTER = 257 // Key: Enter
  raylib.KEY_TAB = 258 // Key: Tab
  raylib.KEY_BACKSPACE = 259 // Key: Backspace
  raylib.KEY_INSERT = 260 // Key: Ins
  raylib.KEY_DELETE = 261 // Key: Del
  raylib.KEY_RIGHT = 262 // Key: Cursor right
  raylib.KEY_LEFT = 263 // Key: Cursor left
  raylib.KEY_DOWN = 264 // Key: Cursor down
  raylib.KEY_UP = 265 // Key: Cursor up
  raylib.KEY_PAGE_UP = 266 // Key: Page up
  raylib.KEY_PAGE_DOWN = 267 // Key: Page down
  raylib.KEY_HOME = 268 // Key: Home
  raylib.KEY_END = 269 // Key: End
  raylib.KEY_CAPS_LOCK = 280 // Key: Caps lock
  raylib.KEY_SCROLL_LOCK = 281 // Key: Scroll down
  raylib.KEY_NUM_LOCK = 282 // Key: Num lock
  raylib.KEY_PRINT_SCREEN = 283 // Key: Print screen
  raylib.KEY_PAUSE = 284 // Key: Pause
  raylib.KEY_F1 = 290 // Key: F1
  raylib.KEY_F2 = 291 // Key: F2
  raylib.KEY_F3 = 292 // Key: F3
  raylib.KEY_F4 = 293 // Key: F4
  raylib.KEY_F5 = 294 // Key: F5
  raylib.KEY_F6 = 295 // Key: F6
  raylib.KEY_F7 = 296 // Key: F7
  raylib.KEY_F8 = 297 // Key: F8
  raylib.KEY_F9 = 298 // Key: F9
  raylib.KEY_F10 = 299 // Key: F10
  raylib.KEY_F11 = 300 // Key: F11
  raylib.KEY_F12 = 301 // Key: F12
  raylib.KEY_LEFT_SHIFT = 340 // Key: Shift left
  raylib.KEY_LEFT_CONTROL = 341 // Key: Control left
  raylib.KEY_LEFT_ALT = 342 // Key: Alt left
  raylib.KEY_LEFT_SUPER = 343 // Key: Super left
  raylib.KEY_RIGHT_SHIFT = 344 // Key: Shift right
  raylib.KEY_RIGHT_CONTROL = 345 // Key: Control right
  raylib.KEY_RIGHT_ALT = 346 // Key: Alt right
  raylib.KEY_RIGHT_SUPER = 347 // Key: Super right
  raylib.KEY_KB_MENU = 348 // Key: KB menu
  raylib.KEY_KP_0 = 320 // Key: Keypad 0
  raylib.KEY_KP_1 = 321 // Key: Keypad 1
  raylib.KEY_KP_2 = 322 // Key: Keypad 2
  raylib.KEY_KP_3 = 323 // Key: Keypad 3
  raylib.KEY_KP_4 = 324 // Key: Keypad 4
  raylib.KEY_KP_5 = 325 // Key: Keypad 5
  raylib.KEY_KP_6 = 326 // Key: Keypad 6
  raylib.KEY_KP_7 = 327 // Key: Keypad 7
  raylib.KEY_KP_8 = 328 // Key: Keypad 8
  raylib.KEY_KP_9 = 329 // Key: Keypad 9
  raylib.KEY_KP_DECIMAL = 330 // Key: Keypad .
  raylib.KEY_KP_DIVIDE = 331 // Key: Keypad /
  raylib.KEY_KP_MULTIPLY = 332 // Key: Keypad *
  raylib.KEY_KP_SUBTRACT = 333 // Key: Keypad -
  raylib.KEY_KP_ADD = 334 // Key: Keypad +
  raylib.KEY_KP_ENTER = 335 // Key: Keypad Enter
  raylib.KEY_KP_EQUAL = 336 // Key: Keypad =
  raylib.KEY_BACK = 4 // Key: Android back button
  raylib.KEY_MENU = 5 // Key: Android menu button
  raylib.KEY_VOLUME_UP = 24 // Key: Android volume up button
  raylib.KEY_VOLUME_DOWN = 25 // Key: Android volume down button

  // ENUM MouseButton
  // Mouse buttons
  raylib.MOUSE_BUTTON_LEFT = 0 // Mouse button left
  raylib.MOUSE_BUTTON_RIGHT = 1 // Mouse button right
  raylib.MOUSE_BUTTON_MIDDLE = 2 // Mouse button middle (pressed wheel)
  raylib.MOUSE_BUTTON_SIDE = 3 // Mouse button side (advanced mouse device)
  raylib.MOUSE_BUTTON_EXTRA = 4 // Mouse button extra (advanced mouse device)
  raylib.MOUSE_BUTTON_FORWARD = 5 // Mouse button forward (advanced mouse device)
  raylib.MOUSE_BUTTON_BACK = 6 // Mouse button back (advanced mouse device)

  // ENUM MouseCursor
  // Mouse cursor
  raylib.MOUSE_CURSOR_DEFAULT = 0 // Default pointer shape
  raylib.MOUSE_CURSOR_ARROW = 1 // Arrow shape
  raylib.MOUSE_CURSOR_IBEAM = 2 // Text writing cursor shape
  raylib.MOUSE_CURSOR_CROSSHAIR = 3 // Cross shape
  raylib.MOUSE_CURSOR_POINTING_HAND = 4 // Pointing hand cursor
  raylib.MOUSE_CURSOR_RESIZE_EW = 5 // Horizontal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NS = 6 // Vertical resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NWSE = 7 // Top-left to bottom-right diagonal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NESW = 8 // The top-right to bottom-left diagonal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_ALL = 9 // The omnidirectional resize/move cursor shape
  raylib.MOUSE_CURSOR_NOT_ALLOWED = 10 // The operation-not-allowed shape

  // ENUM GamepadButton
  // Gamepad buttons
  raylib.GAMEPAD_BUTTON_UNKNOWN = 0 // Unknown button, just for error checking
  raylib.GAMEPAD_BUTTON_LEFT_FACE_UP = 1 // Gamepad left DPAD up button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2 // Gamepad left DPAD right button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3 // Gamepad left DPAD down button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4 // Gamepad left DPAD left button
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP = 5 // Gamepad right button up (i.e. PS3: Triangle, Xbox: Y)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6 // Gamepad right button right (i.e. PS3: Circle, Xbox: B)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7 // Gamepad right button down (i.e. PS3: Cross, Xbox: A)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8 // Gamepad right button left (i.e. PS3: Square, Xbox: X)
  raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9 // Gamepad top/back trigger left (first), it could be a trailing button
  raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10 // Gamepad top/back trigger left (second), it could be a trailing button
  raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11 // Gamepad top/back trigger right (first), it could be a trailing button
  raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12 // Gamepad top/back trigger right (second), it could be a trailing button
  raylib.GAMEPAD_BUTTON_MIDDLE_LEFT = 13 // Gamepad center buttons, left one (i.e. PS3: Select)
  raylib.GAMEPAD_BUTTON_MIDDLE = 14 // Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX)
  raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT = 15 // Gamepad center buttons, right one (i.e. PS3: Start)
  raylib.GAMEPAD_BUTTON_LEFT_THUMB = 16 // Gamepad joystick pressed button left
  raylib.GAMEPAD_BUTTON_RIGHT_THUMB = 17 // Gamepad joystick pressed button right

  // ENUM GamepadAxis
  // Gamepad axis
  raylib.GAMEPAD_AXIS_LEFT_X = 0 // Gamepad left stick X axis
  raylib.GAMEPAD_AXIS_LEFT_Y = 1 // Gamepad left stick Y axis
  raylib.GAMEPAD_AXIS_RIGHT_X = 2 // Gamepad right stick X axis
  raylib.GAMEPAD_AXIS_RIGHT_Y = 3 // Gamepad right stick Y axis
  raylib.GAMEPAD_AXIS_LEFT_TRIGGER = 4 // Gamepad back trigger left, pressure level: [1..-1]
  raylib.GAMEPAD_AXIS_RIGHT_TRIGGER = 5 // Gamepad back trigger right, pressure level: [1..-1]

  // ENUM MaterialMapIndex
  // Material map index
  raylib.MATERIAL_MAP_ALBEDO = 0 // Albedo material (same as: MATERIAL_MAP_DIFFUSE)
  raylib.MATERIAL_MAP_METALNESS = 1 // Metalness material (same as: MATERIAL_MAP_SPECULAR)
  raylib.MATERIAL_MAP_NORMAL = 2 // Normal material
  raylib.MATERIAL_MAP_ROUGHNESS = 3 // Roughness material
  raylib.MATERIAL_MAP_OCCLUSION = 4 // Ambient occlusion material
  raylib.MATERIAL_MAP_EMISSION = 5 // Emission material
  raylib.MATERIAL_MAP_HEIGHT = 6 // Heightmap material
  raylib.MATERIAL_MAP_CUBEMAP = 7 // Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_IRRADIANCE = 8 // Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_PREFILTER = 9 // Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_BRDF = 10 // Brdf material

  // ENUM ShaderLocationIndex
  // Shader location index
  raylib.SHADER_LOC_VERTEX_POSITION = 0 // Shader location: vertex attribute: position
  raylib.SHADER_LOC_VERTEX_TEXCOORD01 = 1 // Shader location: vertex attribute: texcoord01
  raylib.SHADER_LOC_VERTEX_TEXCOORD02 = 2 // Shader location: vertex attribute: texcoord02
  raylib.SHADER_LOC_VERTEX_NORMAL = 3 // Shader location: vertex attribute: normal
  raylib.SHADER_LOC_VERTEX_TANGENT = 4 // Shader location: vertex attribute: tangent
  raylib.SHADER_LOC_VERTEX_COLOR = 5 // Shader location: vertex attribute: color
  raylib.SHADER_LOC_MATRIX_MVP = 6 // Shader location: matrix uniform: model-view-projection
  raylib.SHADER_LOC_MATRIX_VIEW = 7 // Shader location: matrix uniform: view (camera transform)
  raylib.SHADER_LOC_MATRIX_PROJECTION = 8 // Shader location: matrix uniform: projection
  raylib.SHADER_LOC_MATRIX_MODEL = 9 // Shader location: matrix uniform: model (transform)
  raylib.SHADER_LOC_MATRIX_NORMAL = 10 // Shader location: matrix uniform: normal
  raylib.SHADER_LOC_VECTOR_VIEW = 11 // Shader location: vector uniform: view
  raylib.SHADER_LOC_COLOR_DIFFUSE = 12 // Shader location: vector uniform: diffuse color
  raylib.SHADER_LOC_COLOR_SPECULAR = 13 // Shader location: vector uniform: specular color
  raylib.SHADER_LOC_COLOR_AMBIENT = 14 // Shader location: vector uniform: ambient color
  raylib.SHADER_LOC_MAP_ALBEDO = 15 // Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE)
  raylib.SHADER_LOC_MAP_METALNESS = 16 // Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR)
  raylib.SHADER_LOC_MAP_NORMAL = 17 // Shader location: sampler2d texture: normal
  raylib.SHADER_LOC_MAP_ROUGHNESS = 18 // Shader location: sampler2d texture: roughness
  raylib.SHADER_LOC_MAP_OCCLUSION = 19 // Shader location: sampler2d texture: occlusion
  raylib.SHADER_LOC_MAP_EMISSION = 20 // Shader location: sampler2d texture: emission
  raylib.SHADER_LOC_MAP_HEIGHT = 21 // Shader location: sampler2d texture: height
  raylib.SHADER_LOC_MAP_CUBEMAP = 22 // Shader location: samplerCube texture: cubemap
  raylib.SHADER_LOC_MAP_IRRADIANCE = 23 // Shader location: samplerCube texture: irradiance
  raylib.SHADER_LOC_MAP_PREFILTER = 24 // Shader location: samplerCube texture: prefilter
  raylib.SHADER_LOC_MAP_BRDF = 25 // Shader location: sampler2d texture: brdf
  raylib.SHADER_LOC_VERTEX_BONEIDS = 26 // Shader location: vertex attribute: boneIds
  raylib.SHADER_LOC_VERTEX_BONEWEIGHTS = 27 // Shader location: vertex attribute: boneWeights
  raylib.SHADER_LOC_BONE_MATRICES = 28 // Shader location: array of matrices uniform: boneMatrices

  // ENUM ShaderUniformDataType
  // Shader uniform data type
  raylib.SHADER_UNIFORM_FLOAT = 0 // Shader uniform type: float
  raylib.SHADER_UNIFORM_VEC2 = 1 // Shader uniform type: vec2 (2 float)
  raylib.SHADER_UNIFORM_VEC3 = 2 // Shader uniform type: vec3 (3 float)
  raylib.SHADER_UNIFORM_VEC4 = 3 // Shader uniform type: vec4 (4 float)
  raylib.SHADER_UNIFORM_INT = 4 // Shader uniform type: int
  raylib.SHADER_UNIFORM_IVEC2 = 5 // Shader uniform type: ivec2 (2 int)
  raylib.SHADER_UNIFORM_IVEC3 = 6 // Shader uniform type: ivec3 (3 int)
  raylib.SHADER_UNIFORM_IVEC4 = 7 // Shader uniform type: ivec4 (4 int)
  raylib.SHADER_UNIFORM_SAMPLER2D = 8 // Shader uniform type: sampler2d

  // ENUM ShaderAttributeDataType
  // Shader attribute data types
  raylib.SHADER_ATTRIB_FLOAT = 0 // Shader attribute type: float
  raylib.SHADER_ATTRIB_VEC2 = 1 // Shader attribute type: vec2 (2 float)
  raylib.SHADER_ATTRIB_VEC3 = 2 // Shader attribute type: vec3 (3 float)
  raylib.SHADER_ATTRIB_VEC4 = 3 // Shader attribute type: vec4 (4 float)

  // ENUM PixelFormat
  // Pixel formats
  raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1 // 8 bit per pixel (no alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2 // 8*2 bpp (2 channels)
  raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3 // 16 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4 // 24 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5 // 16 bpp (1 bit alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6 // 16 bpp (4 bit alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7 // 32 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R32 = 8 // 32 bpp (1 channel - float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9 // 32*3 bpp (3 channels - float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10 // 32*4 bpp (4 channels - float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R16 = 11 // 16 bpp (1 channel - half float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16 = 12 // 16*3 bpp (3 channels - half float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = 13 // 16*4 bpp (4 channels - half float)
  raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB = 14 // 4 bpp (no alpha)
  raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA = 15 // 4 bpp (1 bit alpha)
  raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA = 16 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA = 17 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB = 18 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB = 19 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 20 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB = 21 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA = 22 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 23 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 24 // 2 bpp

  // ENUM TextureFilter
  // Texture parameters: filter mode
  raylib.TEXTURE_FILTER_POINT = 0 // No filter, just pixel approximation
  raylib.TEXTURE_FILTER_BILINEAR = 1 // Linear filtering
  raylib.TEXTURE_FILTER_TRILINEAR = 2 // Trilinear filtering (linear with mipmaps)
  raylib.TEXTURE_FILTER_ANISOTROPIC_4X = 3 // Anisotropic filtering 4x
  raylib.TEXTURE_FILTER_ANISOTROPIC_8X = 4 // Anisotropic filtering 8x
  raylib.TEXTURE_FILTER_ANISOTROPIC_16X = 5 // Anisotropic filtering 16x

  // ENUM TextureWrap
  // Texture parameters: wrap mode
  raylib.TEXTURE_WRAP_REPEAT = 0 // Repeats texture in tiled mode
  raylib.TEXTURE_WRAP_CLAMP = 1 // Clamps texture to edge pixel in tiled mode
  raylib.TEXTURE_WRAP_MIRROR_REPEAT = 2 // Mirrors and repeats the texture in tiled mode
  raylib.TEXTURE_WRAP_MIRROR_CLAMP = 3 // Mirrors and clamps to border the texture in tiled mode

  // ENUM CubemapLayout
  // Cubemap layouts
  raylib.CUBEMAP_LAYOUT_AUTO_DETECT = 0 // Automatically detect layout type
  raylib.CUBEMAP_LAYOUT_LINE_VERTICAL = 1 // Layout is defined by a vertical line with faces
  raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2 // Layout is defined by a horizontal line with faces
  raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3 // Layout is defined by a 3x4 cross with cubemap faces
  raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4 // Layout is defined by a 4x3 cross with cubemap faces

  // ENUM FontType
  // Font type, defines generation method
  raylib.FONT_DEFAULT = 0 // Default font generation, anti-aliased
  raylib.FONT_BITMAP = 1 // Bitmap font generation, no anti-aliasing
  raylib.FONT_SDF = 2 // SDF font generation, requires external shader

  // ENUM BlendMode
  // Color blending modes (pre-defined)
  raylib.BLEND_ALPHA = 0 // Blend textures considering alpha (default)
  raylib.BLEND_ADDITIVE = 1 // Blend textures adding colors
  raylib.BLEND_MULTIPLIED = 2 // Blend textures multiplying colors
  raylib.BLEND_ADD_COLORS = 3 // Blend textures adding colors (alternative)
  raylib.BLEND_SUBTRACT_COLORS = 4 // Blend textures subtracting colors (alternative)
  raylib.BLEND_ALPHA_PREMULTIPLY = 5 // Blend premultiplied textures considering alpha
  raylib.BLEND_CUSTOM = 6 // Blend textures using custom src/dst factors (use rlSetBlendFactors())
  raylib.BLEND_CUSTOM_SEPARATE = 7 // Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate())

  // ENUM Gesture
  // Gesture
  raylib.GESTURE_NONE = 0 // No gesture
  raylib.GESTURE_TAP = 1 // Tap gesture
  raylib.GESTURE_DOUBLETAP = 2 // Double tap gesture
  raylib.GESTURE_HOLD = 4 // Hold gesture
  raylib.GESTURE_DRAG = 8 // Drag gesture
  raylib.GESTURE_SWIPE_RIGHT = 16 // Swipe right gesture
  raylib.GESTURE_SWIPE_LEFT = 32 // Swipe left gesture
  raylib.GESTURE_SWIPE_UP = 64 // Swipe up gesture
  raylib.GESTURE_SWIPE_DOWN = 128 // Swipe down gesture
  raylib.GESTURE_PINCH_IN = 256 // Pinch in gesture
  raylib.GESTURE_PINCH_OUT = 512 // Pinch out gesture

  // ENUM CameraMode
  // Camera system modes
  raylib.CAMERA_CUSTOM = 0 // Camera custom, controlled by user (UpdateCamera() does nothing)
  raylib.CAMERA_FREE = 1 // Camera free mode
  raylib.CAMERA_ORBITAL = 2 // Camera orbital, around target, zoom supported
  raylib.CAMERA_FIRST_PERSON = 3 // Camera first person
  raylib.CAMERA_THIRD_PERSON = 4 // Camera third person

  // ENUM CameraProjection
  // Camera projection
  raylib.CAMERA_PERSPECTIVE = 0 // Perspective projection
  raylib.CAMERA_ORTHOGRAPHIC = 1 // Orthographic projection

  // ENUM NPatchLayout
  // N-patch layout
  raylib.NPATCH_NINE_PATCH = 0 // Npatch layout: 3x3 tiles
  raylib.NPATCH_THREE_PATCH_VERTICAL = 1 // Npatch layout: 1x3 tiles
  raylib.NPATCH_THREE_PATCH_HORIZONTAL = 2 // Npatch layout: 3x1 tiles

  // ENUM GuiState
  // Gui control state
  raylib.STATE_NORMAL = 0 // 
  raylib.STATE_FOCUSED = 1 // 
  raylib.STATE_PRESSED = 2 // 
  raylib.STATE_DISABLED = 3 // 

  // ENUM GuiTextAlignment
  // Gui control text alignment
  raylib.TEXT_ALIGN_LEFT = 0 // 
  raylib.TEXT_ALIGN_CENTER = 1 // 
  raylib.TEXT_ALIGN_RIGHT = 2 // 

  // ENUM GuiTextAlignmentVertical
  // Gui control text alignment vertical
  raylib.TEXT_ALIGN_TOP = 0 // 
  raylib.TEXT_ALIGN_MIDDLE = 1 // 
  raylib.TEXT_ALIGN_BOTTOM = 2 // 

  // ENUM GuiTextWrapMode
  // Gui control text wrap mode
  raylib.TEXT_WRAP_NONE = 0 // 
  raylib.TEXT_WRAP_CHAR = 1 // 
  raylib.TEXT_WRAP_WORD = 2 // 

  // ENUM GuiControl
  // Gui controls
  raylib.DEFAULT = 0 // 
  raylib.LABEL = 1 // Used also for: LABELBUTTON
  raylib.BUTTON = 2 // 
  raylib.TOGGLE = 3 // Used also for: TOGGLEGROUP
  raylib.SLIDER = 4 // Used also for: SLIDERBAR, TOGGLESLIDER
  raylib.PROGRESSBAR = 5 // 
  raylib.CHECKBOX = 6 // 
  raylib.COMBOBOX = 7 // 
  raylib.DROPDOWNBOX = 8 // 
  raylib.TEXTBOX = 9 // Used also for: TEXTBOXMULTI
  raylib.VALUEBOX = 10 // 
  raylib.SPINNER = 11 // Uses: BUTTON, VALUEBOX
  raylib.LISTVIEW = 12 // 
  raylib.COLORPICKER = 13 // 
  raylib.SCROLLBAR = 14 // 
  raylib.STATUSBAR = 15 // 

  // ENUM GuiControlProperty
  // Gui base properties for every control
  raylib.BORDER_COLOR_NORMAL = 0 // Control border color in STATE_NORMAL
  raylib.BASE_COLOR_NORMAL = 1 // Control base color in STATE_NORMAL
  raylib.TEXT_COLOR_NORMAL = 2 // Control text color in STATE_NORMAL
  raylib.BORDER_COLOR_FOCUSED = 3 // Control border color in STATE_FOCUSED
  raylib.BASE_COLOR_FOCUSED = 4 // Control base color in STATE_FOCUSED
  raylib.TEXT_COLOR_FOCUSED = 5 // Control text color in STATE_FOCUSED
  raylib.BORDER_COLOR_PRESSED = 6 // Control border color in STATE_PRESSED
  raylib.BASE_COLOR_PRESSED = 7 // Control base color in STATE_PRESSED
  raylib.TEXT_COLOR_PRESSED = 8 // Control text color in STATE_PRESSED
  raylib.BORDER_COLOR_DISABLED = 9 // Control border color in STATE_DISABLED
  raylib.BASE_COLOR_DISABLED = 10 // Control base color in STATE_DISABLED
  raylib.TEXT_COLOR_DISABLED = 11 // Control text color in STATE_DISABLED
  raylib.BORDER_WIDTH = 12 // Control border size, 0 for no border
  raylib.TEXT_PADDING = 13 // Control text padding, not considering border
  raylib.TEXT_ALIGNMENT = 14 // Control text horizontal alignment inside control text bound (after border and padding)

  // ENUM GuiDefaultProperty
  // DEFAULT extended properties
  raylib.TEXT_SIZE = 16 // Text size (glyphs max height)
  raylib.TEXT_SPACING = 17 // Text spacing between glyphs
  raylib.LINE_COLOR = 18 // Line control color
  raylib.BACKGROUND_COLOR = 19 // Background color
  raylib.TEXT_LINE_SPACING = 20 // Text spacing between lines
  raylib.TEXT_ALIGNMENT_VERTICAL = 21 // Text vertical alignment inside text bounds (after border and padding)
  raylib.TEXT_WRAP_MODE = 22 // Text wrap-mode inside text bounds

  // ENUM GuiToggleProperty
  // Toggle/ToggleGroup
  raylib.GROUP_PADDING = 16 // ToggleGroup separation between toggles

  // ENUM GuiSliderProperty
  // Slider/SliderBar
  raylib.SLIDER_WIDTH = 16 // Slider size of internal bar
  raylib.SLIDER_PADDING = 17 // Slider/SliderBar internal bar padding

  // ENUM GuiProgressBarProperty
  // ProgressBar
  raylib.PROGRESS_PADDING = 16 // ProgressBar internal padding

  // ENUM GuiScrollBarProperty
  // ScrollBar
  raylib.ARROWS_SIZE = 16 // ScrollBar arrows size
  raylib.ARROWS_VISIBLE = 17 // ScrollBar arrows visible
  raylib.SCROLL_SLIDER_PADDING = 18 // ScrollBar slider internal padding
  raylib.SCROLL_SLIDER_SIZE = 19 // ScrollBar slider size
  raylib.SCROLL_PADDING = 20 // ScrollBar scroll padding from arrows
  raylib.SCROLL_SPEED = 21 // ScrollBar scrolling speed

  // ENUM GuiCheckBoxProperty
  // CheckBox
  raylib.CHECK_PADDING = 16 // CheckBox internal check padding

  // ENUM GuiComboBoxProperty
  // ComboBox
  raylib.COMBO_BUTTON_WIDTH = 16 // ComboBox right button width
  raylib.COMBO_BUTTON_SPACING = 17 // ComboBox button separation

  // ENUM GuiDropdownBoxProperty
  // DropdownBox
  raylib.ARROW_PADDING = 16 // DropdownBox arrow separation from border and items
  raylib.DROPDOWN_ITEMS_SPACING = 17 // DropdownBox items separation

  // ENUM GuiTextBoxProperty
  // TextBox/TextBoxMulti/ValueBox/Spinner
  raylib.TEXT_READONLY = 16 // TextBox in read-only mode: 0-text editable, 1-text no-editable

  // ENUM GuiSpinnerProperty
  // Spinner
  raylib.SPIN_BUTTON_WIDTH = 16 // Spinner left/right buttons width
  raylib.SPIN_BUTTON_SPACING = 17 // Spinner buttons separation

  // ENUM GuiListViewProperty
  // ListView
  raylib.LIST_ITEMS_HEIGHT = 16 // ListView items height
  raylib.LIST_ITEMS_SPACING = 17 // ListView items separation
  raylib.SCROLLBAR_WIDTH = 18 // ListView scrollbar size (usually width)
  raylib.SCROLLBAR_SIDE = 19 // ListView scrollbar side (0-SCROLLBAR_LEFT_SIDE, 1-SCROLLBAR_RIGHT_SIDE)

  // ENUM GuiColorPickerProperty
  // ColorPicker
  raylib.COLOR_SELECTOR_SIZE = 16 // 
  raylib.HUEBAR_WIDTH = 17 // ColorPicker right hue bar width
  raylib.HUEBAR_PADDING = 18 // ColorPicker right hue bar separation from panel
  raylib.HUEBAR_SELECTOR_HEIGHT = 19 // ColorPicker right hue bar selector height
  raylib.HUEBAR_SELECTOR_OVERFLOW = 20 // ColorPicker right hue bar selector overflow

  // ENUM GuiIconName
  // 
  raylib.ICON_NONE = 0 // 
  raylib.ICON_FOLDER_FILE_OPEN = 1 // 
  raylib.ICON_FILE_SAVE_CLASSIC = 2 // 
  raylib.ICON_FOLDER_OPEN = 3 // 
  raylib.ICON_FOLDER_SAVE = 4 // 
  raylib.ICON_FILE_OPEN = 5 // 
  raylib.ICON_FILE_SAVE = 6 // 
  raylib.ICON_FILE_EXPORT = 7 // 
  raylib.ICON_FILE_ADD = 8 // 
  raylib.ICON_FILE_DELETE = 9 // 
  raylib.ICON_FILETYPE_TEXT = 10 // 
  raylib.ICON_FILETYPE_AUDIO = 11 // 
  raylib.ICON_FILETYPE_IMAGE = 12 // 
  raylib.ICON_FILETYPE_PLAY = 13 // 
  raylib.ICON_FILETYPE_VIDEO = 14 // 
  raylib.ICON_FILETYPE_INFO = 15 // 
  raylib.ICON_FILE_COPY = 16 // 
  raylib.ICON_FILE_CUT = 17 // 
  raylib.ICON_FILE_PASTE = 18 // 
  raylib.ICON_CURSOR_HAND = 19 // 
  raylib.ICON_CURSOR_POINTER = 20 // 
  raylib.ICON_CURSOR_CLASSIC = 21 // 
  raylib.ICON_PENCIL = 22 // 
  raylib.ICON_PENCIL_BIG = 23 // 
  raylib.ICON_BRUSH_CLASSIC = 24 // 
  raylib.ICON_BRUSH_PAINTER = 25 // 
  raylib.ICON_WATER_DROP = 26 // 
  raylib.ICON_COLOR_PICKER = 27 // 
  raylib.ICON_RUBBER = 28 // 
  raylib.ICON_COLOR_BUCKET = 29 // 
  raylib.ICON_TEXT_T = 30 // 
  raylib.ICON_TEXT_A = 31 // 
  raylib.ICON_SCALE = 32 // 
  raylib.ICON_RESIZE = 33 // 
  raylib.ICON_FILTER_POINT = 34 // 
  raylib.ICON_FILTER_BILINEAR = 35 // 
  raylib.ICON_CROP = 36 // 
  raylib.ICON_CROP_ALPHA = 37 // 
  raylib.ICON_SQUARE_TOGGLE = 38 // 
  raylib.ICON_SYMMETRY = 39 // 
  raylib.ICON_SYMMETRY_HORIZONTAL = 40 // 
  raylib.ICON_SYMMETRY_VERTICAL = 41 // 
  raylib.ICON_LENS = 42 // 
  raylib.ICON_LENS_BIG = 43 // 
  raylib.ICON_EYE_ON = 44 // 
  raylib.ICON_EYE_OFF = 45 // 
  raylib.ICON_FILTER_TOP = 46 // 
  raylib.ICON_FILTER = 47 // 
  raylib.ICON_TARGET_POINT = 48 // 
  raylib.ICON_TARGET_SMALL = 49 // 
  raylib.ICON_TARGET_BIG = 50 // 
  raylib.ICON_TARGET_MOVE = 51 // 
  raylib.ICON_CURSOR_MOVE = 52 // 
  raylib.ICON_CURSOR_SCALE = 53 // 
  raylib.ICON_CURSOR_SCALE_RIGHT = 54 // 
  raylib.ICON_CURSOR_SCALE_LEFT = 55 // 
  raylib.ICON_UNDO = 56 // 
  raylib.ICON_REDO = 57 // 
  raylib.ICON_REREDO = 58 // 
  raylib.ICON_MUTATE = 59 // 
  raylib.ICON_ROTATE = 60 // 
  raylib.ICON_REPEAT = 61 // 
  raylib.ICON_SHUFFLE = 62 // 
  raylib.ICON_EMPTYBOX = 63 // 
  raylib.ICON_TARGET = 64 // 
  raylib.ICON_TARGET_SMALL_FILL = 65 // 
  raylib.ICON_TARGET_BIG_FILL = 66 // 
  raylib.ICON_TARGET_MOVE_FILL = 67 // 
  raylib.ICON_CURSOR_MOVE_FILL = 68 // 
  raylib.ICON_CURSOR_SCALE_FILL = 69 // 
  raylib.ICON_CURSOR_SCALE_RIGHT_FILL = 70 // 
  raylib.ICON_CURSOR_SCALE_LEFT_FILL = 71 // 
  raylib.ICON_UNDO_FILL = 72 // 
  raylib.ICON_REDO_FILL = 73 // 
  raylib.ICON_REREDO_FILL = 74 // 
  raylib.ICON_MUTATE_FILL = 75 // 
  raylib.ICON_ROTATE_FILL = 76 // 
  raylib.ICON_REPEAT_FILL = 77 // 
  raylib.ICON_SHUFFLE_FILL = 78 // 
  raylib.ICON_EMPTYBOX_SMALL = 79 // 
  raylib.ICON_BOX = 80 // 
  raylib.ICON_BOX_TOP = 81 // 
  raylib.ICON_BOX_TOP_RIGHT = 82 // 
  raylib.ICON_BOX_RIGHT = 83 // 
  raylib.ICON_BOX_BOTTOM_RIGHT = 84 // 
  raylib.ICON_BOX_BOTTOM = 85 // 
  raylib.ICON_BOX_BOTTOM_LEFT = 86 // 
  raylib.ICON_BOX_LEFT = 87 // 
  raylib.ICON_BOX_TOP_LEFT = 88 // 
  raylib.ICON_BOX_CENTER = 89 // 
  raylib.ICON_BOX_CIRCLE_MASK = 90 // 
  raylib.ICON_POT = 91 // 
  raylib.ICON_ALPHA_MULTIPLY = 92 // 
  raylib.ICON_ALPHA_CLEAR = 93 // 
  raylib.ICON_DITHERING = 94 // 
  raylib.ICON_MIPMAPS = 95 // 
  raylib.ICON_BOX_GRID = 96 // 
  raylib.ICON_GRID = 97 // 
  raylib.ICON_BOX_CORNERS_SMALL = 98 // 
  raylib.ICON_BOX_CORNERS_BIG = 99 // 
  raylib.ICON_FOUR_BOXES = 100 // 
  raylib.ICON_GRID_FILL = 101 // 
  raylib.ICON_BOX_MULTISIZE = 102 // 
  raylib.ICON_ZOOM_SMALL = 103 // 
  raylib.ICON_ZOOM_MEDIUM = 104 // 
  raylib.ICON_ZOOM_BIG = 105 // 
  raylib.ICON_ZOOM_ALL = 106 // 
  raylib.ICON_ZOOM_CENTER = 107 // 
  raylib.ICON_BOX_DOTS_SMALL = 108 // 
  raylib.ICON_BOX_DOTS_BIG = 109 // 
  raylib.ICON_BOX_CONCENTRIC = 110 // 
  raylib.ICON_BOX_GRID_BIG = 111 // 
  raylib.ICON_OK_TICK = 112 // 
  raylib.ICON_CROSS = 113 // 
  raylib.ICON_ARROW_LEFT = 114 // 
  raylib.ICON_ARROW_RIGHT = 115 // 
  raylib.ICON_ARROW_DOWN = 116 // 
  raylib.ICON_ARROW_UP = 117 // 
  raylib.ICON_ARROW_LEFT_FILL = 118 // 
  raylib.ICON_ARROW_RIGHT_FILL = 119 // 
  raylib.ICON_ARROW_DOWN_FILL = 120 // 
  raylib.ICON_ARROW_UP_FILL = 121 // 
  raylib.ICON_AUDIO = 122 // 
  raylib.ICON_FX = 123 // 
  raylib.ICON_WAVE = 124 // 
  raylib.ICON_WAVE_SINUS = 125 // 
  raylib.ICON_WAVE_SQUARE = 126 // 
  raylib.ICON_WAVE_TRIANGULAR = 127 // 
  raylib.ICON_CROSS_SMALL = 128 // 
  raylib.ICON_PLAYER_PREVIOUS = 129 // 
  raylib.ICON_PLAYER_PLAY_BACK = 130 // 
  raylib.ICON_PLAYER_PLAY = 131 // 
  raylib.ICON_PLAYER_PAUSE = 132 // 
  raylib.ICON_PLAYER_STOP = 133 // 
  raylib.ICON_PLAYER_NEXT = 134 // 
  raylib.ICON_PLAYER_RECORD = 135 // 
  raylib.ICON_MAGNET = 136 // 
  raylib.ICON_LOCK_CLOSE = 137 // 
  raylib.ICON_LOCK_OPEN = 138 // 
  raylib.ICON_CLOCK = 139 // 
  raylib.ICON_TOOLS = 140 // 
  raylib.ICON_GEAR = 141 // 
  raylib.ICON_GEAR_BIG = 142 // 
  raylib.ICON_BIN = 143 // 
  raylib.ICON_HAND_POINTER = 144 // 
  raylib.ICON_LASER = 145 // 
  raylib.ICON_COIN = 146 // 
  raylib.ICON_EXPLOSION = 147 // 
  raylib.ICON_1UP = 148 // 
  raylib.ICON_PLAYER = 149 // 
  raylib.ICON_PLAYER_JUMP = 150 // 
  raylib.ICON_KEY = 151 // 
  raylib.ICON_DEMON = 152 // 
  raylib.ICON_TEXT_POPUP = 153 // 
  raylib.ICON_GEAR_EX = 154 // 
  raylib.ICON_CRACK = 155 // 
  raylib.ICON_CRACK_POINTS = 156 // 
  raylib.ICON_STAR = 157 // 
  raylib.ICON_DOOR = 158 // 
  raylib.ICON_EXIT = 159 // 
  raylib.ICON_MODE_2D = 160 // 
  raylib.ICON_MODE_3D = 161 // 
  raylib.ICON_CUBE = 162 // 
  raylib.ICON_CUBE_FACE_TOP = 163 // 
  raylib.ICON_CUBE_FACE_LEFT = 164 // 
  raylib.ICON_CUBE_FACE_FRONT = 165 // 
  raylib.ICON_CUBE_FACE_BOTTOM = 166 // 
  raylib.ICON_CUBE_FACE_RIGHT = 167 // 
  raylib.ICON_CUBE_FACE_BACK = 168 // 
  raylib.ICON_CAMERA = 169 // 
  raylib.ICON_SPECIAL = 170 // 
  raylib.ICON_LINK_NET = 171 // 
  raylib.ICON_LINK_BOXES = 172 // 
  raylib.ICON_LINK_MULTI = 173 // 
  raylib.ICON_LINK = 174 // 
  raylib.ICON_LINK_BROKE = 175 // 
  raylib.ICON_TEXT_NOTES = 176 // 
  raylib.ICON_NOTEBOOK = 177 // 
  raylib.ICON_SUITCASE = 178 // 
  raylib.ICON_SUITCASE_ZIP = 179 // 
  raylib.ICON_MAILBOX = 180 // 
  raylib.ICON_MONITOR = 181 // 
  raylib.ICON_PRINTER = 182 // 
  raylib.ICON_PHOTO_CAMERA = 183 // 
  raylib.ICON_PHOTO_CAMERA_FLASH = 184 // 
  raylib.ICON_HOUSE = 185 // 
  raylib.ICON_HEART = 186 // 
  raylib.ICON_CORNER = 187 // 
  raylib.ICON_VERTICAL_BARS = 188 // 
  raylib.ICON_VERTICAL_BARS_FILL = 189 // 
  raylib.ICON_LIFE_BARS = 190 // 
  raylib.ICON_INFO = 191 // 
  raylib.ICON_CROSSLINE = 192 // 
  raylib.ICON_HELP = 193 // 
  raylib.ICON_FILETYPE_ALPHA = 194 // 
  raylib.ICON_FILETYPE_HOME = 195 // 
  raylib.ICON_LAYERS_VISIBLE = 196 // 
  raylib.ICON_LAYERS = 197 // 
  raylib.ICON_WINDOW = 198 // 
  raylib.ICON_HIDPI = 199 // 
  raylib.ICON_FILETYPE_BINARY = 200 // 
  raylib.ICON_HEX = 201 // 
  raylib.ICON_SHIELD = 202 // 
  raylib.ICON_FILE_NEW = 203 // 
  raylib.ICON_FOLDER_ADD = 204 // 
  raylib.ICON_ALARM = 205 // 
  raylib.ICON_CPU = 206 // 
  raylib.ICON_ROM = 207 // 
  raylib.ICON_STEP_OVER = 208 // 
  raylib.ICON_STEP_INTO = 209 // 
  raylib.ICON_STEP_OUT = 210 // 
  raylib.ICON_RESTART = 211 // 
  raylib.ICON_BREAKPOINT_ON = 212 // 
  raylib.ICON_BREAKPOINT_OFF = 213 // 
  raylib.ICON_BURGER_MENU = 214 // 
  raylib.ICON_CASE_SENSITIVE = 215 // 
  raylib.ICON_REG_EXP = 216 // 
  raylib.ICON_FOLDER = 217 // 
  raylib.ICON_FILE = 218 // 
  raylib.ICON_SAND_TIMER = 219 // 
  raylib.ICON_220 = 220 // 
  raylib.ICON_221 = 221 // 
  raylib.ICON_222 = 222 // 
  raylib.ICON_223 = 223 // 
  raylib.ICON_224 = 224 // 
  raylib.ICON_225 = 225 // 
  raylib.ICON_226 = 226 // 
  raylib.ICON_227 = 227 // 
  raylib.ICON_228 = 228 // 
  raylib.ICON_229 = 229 // 
  raylib.ICON_230 = 230 // 
  raylib.ICON_231 = 231 // 
  raylib.ICON_232 = 232 // 
  raylib.ICON_233 = 233 // 
  raylib.ICON_234 = 234 // 
  raylib.ICON_235 = 235 // 
  raylib.ICON_236 = 236 // 
  raylib.ICON_237 = 237 // 
  raylib.ICON_238 = 238 // 
  raylib.ICON_239 = 239 // 
  raylib.ICON_240 = 240 // 
  raylib.ICON_241 = 241 // 
  raylib.ICON_242 = 242 // 
  raylib.ICON_243 = 243 // 
  raylib.ICON_244 = 244 // 
  raylib.ICON_245 = 245 // 
  raylib.ICON_246 = 246 // 
  raylib.ICON_247 = 247 // 
  raylib.ICON_248 = 248 // 
  raylib.ICON_249 = 249 // 
  raylib.ICON_250 = 250 // 
  raylib.ICON_251 = 251 // 
  raylib.ICON_252 = 252 // 
  raylib.ICON_253 = 253 // 
  raylib.ICON_254 = 254 // 
  raylib.ICON_255 = 255 // 

  // ENUM rlGlVersion
  // OpenGL version
  raylib.RL_OPENGL_11 = 1 // OpenGL 1.1
  raylib.RL_OPENGL_21 = 2 // OpenGL 2.1 (GLSL 120)
  raylib.RL_OPENGL_33 = 3 // OpenGL 3.3 (GLSL 330)
  raylib.RL_OPENGL_43 = 4 // OpenGL 4.3 (using GLSL 330)
  raylib.RL_OPENGL_ES_20 = 5 // OpenGL ES 2.0 (GLSL 100)
  raylib.RL_OPENGL_ES_30 = 6 // OpenGL ES 3.0 (GLSL 300 es)

  // ENUM rlTraceLogLevel
  // Trace log level
  raylib.RL_LOG_ALL = 0 // Display all logs
  raylib.RL_LOG_TRACE = 1 // Trace logging, intended for internal use only
  raylib.RL_LOG_DEBUG = 2 // Debug logging, used for internal debugging, it should be disabled on release builds
  raylib.RL_LOG_INFO = 3 // Info logging, used for program execution info
  raylib.RL_LOG_WARNING = 4 // Warning logging, used on recoverable failures
  raylib.RL_LOG_ERROR = 5 // Error logging, used on unrecoverable failures
  raylib.RL_LOG_FATAL = 6 // Fatal logging, used to abort program: exit(EXIT_FAILURE)
  raylib.RL_LOG_NONE = 7 // Disable logging

  // ENUM rlPixelFormat
  // Texture pixel formats
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1 // 8 bit per pixel (no alpha)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2 // 8*2 bpp (2 channels)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3 // 16 bpp
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4 // 24 bpp
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5 // 16 bpp (1 bit alpha)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6 // 16 bpp (4 bit alpha)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7 // 32 bpp
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32 = 8 // 32 bpp (1 channel - float)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9 // 32*3 bpp (3 channels - float)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10 // 32*4 bpp (4 channels - float)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16 = 11 // 16 bpp (1 channel - half float)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16 = 12 // 16*3 bpp (3 channels - half float)
  raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = 13 // 16*4 bpp (4 channels - half float)
  raylib.RL_PIXELFORMAT_COMPRESSED_DXT1_RGB = 14 // 4 bpp (no alpha)
  raylib.RL_PIXELFORMAT_COMPRESSED_DXT1_RGBA = 15 // 4 bpp (1 bit alpha)
  raylib.RL_PIXELFORMAT_COMPRESSED_DXT3_RGBA = 16 // 8 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_DXT5_RGBA = 17 // 8 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_ETC1_RGB = 18 // 4 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_ETC2_RGB = 19 // 4 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 20 // 8 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_PVRT_RGB = 21 // 4 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_PVRT_RGBA = 22 // 4 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 23 // 8 bpp
  raylib.RL_PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 24 // 2 bpp

  // ENUM rlTextureFilter
  // Texture parameters: filter mode
  raylib.RL_TEXTURE_FILTER_POINT = 0 // No filter, just pixel approximation
  raylib.RL_TEXTURE_FILTER_BILINEAR = 1 // Linear filtering
  raylib.RL_TEXTURE_FILTER_TRILINEAR = 2 // Trilinear filtering (linear with mipmaps)
  raylib.RL_TEXTURE_FILTER_ANISOTROPIC_4X = 3 // Anisotropic filtering 4x
  raylib.RL_TEXTURE_FILTER_ANISOTROPIC_8X = 4 // Anisotropic filtering 8x
  raylib.RL_TEXTURE_FILTER_ANISOTROPIC_16X = 5 // Anisotropic filtering 16x

  // ENUM rlBlendMode
  // Color blending modes (pre-defined)
  raylib.RL_BLEND_ALPHA = 0 // Blend textures considering alpha (default)
  raylib.RL_BLEND_ADDITIVE = 1 // Blend textures adding colors
  raylib.RL_BLEND_MULTIPLIED = 2 // Blend textures multiplying colors
  raylib.RL_BLEND_ADD_COLORS = 3 // Blend textures adding colors (alternative)
  raylib.RL_BLEND_SUBTRACT_COLORS = 4 // Blend textures subtracting colors (alternative)
  raylib.RL_BLEND_ALPHA_PREMULTIPLY = 5 // Blend premultiplied textures considering alpha
  raylib.RL_BLEND_CUSTOM = 6 // Blend textures using custom src/dst factors (use rlSetBlendFactors())
  raylib.RL_BLEND_CUSTOM_SEPARATE = 7 // Blend textures using custom src/dst factors (use rlSetBlendFactorsSeparate())

  // ENUM rlShaderLocationIndex
  // Shader location point type
  raylib.RL_SHADER_LOC_VERTEX_POSITION = 0 // Shader location: vertex attribute: position
  raylib.RL_SHADER_LOC_VERTEX_TEXCOORD01 = 1 // Shader location: vertex attribute: texcoord01
  raylib.RL_SHADER_LOC_VERTEX_TEXCOORD02 = 2 // Shader location: vertex attribute: texcoord02
  raylib.RL_SHADER_LOC_VERTEX_NORMAL = 3 // Shader location: vertex attribute: normal
  raylib.RL_SHADER_LOC_VERTEX_TANGENT = 4 // Shader location: vertex attribute: tangent
  raylib.RL_SHADER_LOC_VERTEX_COLOR = 5 // Shader location: vertex attribute: color
  raylib.RL_SHADER_LOC_MATRIX_MVP = 6 // Shader location: matrix uniform: model-view-projection
  raylib.RL_SHADER_LOC_MATRIX_VIEW = 7 // Shader location: matrix uniform: view (camera transform)
  raylib.RL_SHADER_LOC_MATRIX_PROJECTION = 8 // Shader location: matrix uniform: projection
  raylib.RL_SHADER_LOC_MATRIX_MODEL = 9 // Shader location: matrix uniform: model (transform)
  raylib.RL_SHADER_LOC_MATRIX_NORMAL = 10 // Shader location: matrix uniform: normal
  raylib.RL_SHADER_LOC_VECTOR_VIEW = 11 // Shader location: vector uniform: view
  raylib.RL_SHADER_LOC_COLOR_DIFFUSE = 12 // Shader location: vector uniform: diffuse color
  raylib.RL_SHADER_LOC_COLOR_SPECULAR = 13 // Shader location: vector uniform: specular color
  raylib.RL_SHADER_LOC_COLOR_AMBIENT = 14 // Shader location: vector uniform: ambient color
  raylib.RL_SHADER_LOC_MAP_ALBEDO = 15 // Shader location: sampler2d texture: albedo (same as: RL_SHADER_LOC_MAP_DIFFUSE)
  raylib.RL_SHADER_LOC_MAP_METALNESS = 16 // Shader location: sampler2d texture: metalness (same as: RL_SHADER_LOC_MAP_SPECULAR)
  raylib.RL_SHADER_LOC_MAP_NORMAL = 17 // Shader location: sampler2d texture: normal
  raylib.RL_SHADER_LOC_MAP_ROUGHNESS = 18 // Shader location: sampler2d texture: roughness
  raylib.RL_SHADER_LOC_MAP_OCCLUSION = 19 // Shader location: sampler2d texture: occlusion
  raylib.RL_SHADER_LOC_MAP_EMISSION = 20 // Shader location: sampler2d texture: emission
  raylib.RL_SHADER_LOC_MAP_HEIGHT = 21 // Shader location: sampler2d texture: height
  raylib.RL_SHADER_LOC_MAP_CUBEMAP = 22 // Shader location: samplerCube texture: cubemap
  raylib.RL_SHADER_LOC_MAP_IRRADIANCE = 23 // Shader location: samplerCube texture: irradiance
  raylib.RL_SHADER_LOC_MAP_PREFILTER = 24 // Shader location: samplerCube texture: prefilter
  raylib.RL_SHADER_LOC_MAP_BRDF = 25 // Shader location: sampler2d texture: brdf

  // ENUM rlShaderUniformDataType
  // Shader uniform data type
  raylib.RL_SHADER_UNIFORM_FLOAT = 0 // Shader uniform type: float
  raylib.RL_SHADER_UNIFORM_VEC2 = 1 // Shader uniform type: vec2 (2 float)
  raylib.RL_SHADER_UNIFORM_VEC3 = 2 // Shader uniform type: vec3 (3 float)
  raylib.RL_SHADER_UNIFORM_VEC4 = 3 // Shader uniform type: vec4 (4 float)
  raylib.RL_SHADER_UNIFORM_INT = 4 // Shader uniform type: int
  raylib.RL_SHADER_UNIFORM_IVEC2 = 5 // Shader uniform type: ivec2 (2 int)
  raylib.RL_SHADER_UNIFORM_IVEC3 = 6 // Shader uniform type: ivec3 (3 int)
  raylib.RL_SHADER_UNIFORM_IVEC4 = 7 // Shader uniform type: ivec4 (4 int)
  raylib.RL_SHADER_UNIFORM_UINT = 8 // Shader uniform type: unsigned int
  raylib.RL_SHADER_UNIFORM_UIVEC2 = 9 // Shader uniform type: uivec2 (2 unsigned int)
  raylib.RL_SHADER_UNIFORM_UIVEC3 = 10 // Shader uniform type: uivec3 (3 unsigned int)
  raylib.RL_SHADER_UNIFORM_UIVEC4 = 11 // Shader uniform type: uivec4 (4 unsigned int)
  raylib.RL_SHADER_UNIFORM_SAMPLER2D = 12 // Shader uniform type: sampler2d

  // ENUM rlShaderAttributeDataType
  // Shader attribute data types
  raylib.RL_SHADER_ATTRIB_FLOAT = 0 // Shader attribute type: float
  raylib.RL_SHADER_ATTRIB_VEC2 = 1 // Shader attribute type: vec2 (2 float)
  raylib.RL_SHADER_ATTRIB_VEC3 = 2 // Shader attribute type: vec3 (3 float)
  raylib.RL_SHADER_ATTRIB_VEC4 = 3 // Shader attribute type: vec4 (4 float)

  // ENUM rlFramebufferAttachType
  // Framebuffer attachment type
  raylib.RL_ATTACHMENT_COLOR_CHANNEL0 = 0 // Framebuffer attachment type: color 0
  raylib.RL_ATTACHMENT_COLOR_CHANNEL1 = 1 // Framebuffer attachment type: color 1
  raylib.RL_ATTACHMENT_COLOR_CHANNEL2 = 2 // Framebuffer attachment type: color 2
  raylib.RL_ATTACHMENT_COLOR_CHANNEL3 = 3 // Framebuffer attachment type: color 3
  raylib.RL_ATTACHMENT_COLOR_CHANNEL4 = 4 // Framebuffer attachment type: color 4
  raylib.RL_ATTACHMENT_COLOR_CHANNEL5 = 5 // Framebuffer attachment type: color 5
  raylib.RL_ATTACHMENT_COLOR_CHANNEL6 = 6 // Framebuffer attachment type: color 6
  raylib.RL_ATTACHMENT_COLOR_CHANNEL7 = 7 // Framebuffer attachment type: color 7
  raylib.RL_ATTACHMENT_DEPTH = 100 // Framebuffer attachment type: depth
  raylib.RL_ATTACHMENT_STENCIL = 200 // Framebuffer attachment type: stencil

  // ENUM rlFramebufferAttachTextureType
  // Framebuffer texture attachment type
  raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_X = 0 // Framebuffer texture attachment type: cubemap, +X side
  raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_X = 1 // Framebuffer texture attachment type: cubemap, -X side
  raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_Y = 2 // Framebuffer texture attachment type: cubemap, +Y side
  raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_Y = 3 // Framebuffer texture attachment type: cubemap, -Y side
  raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_Z = 4 // Framebuffer texture attachment type: cubemap, +Z side
  raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_Z = 5 // Framebuffer texture attachment type: cubemap, -Z side
  raylib.RL_ATTACHMENT_TEXTURE2D = 100 // Framebuffer texture attachment type: texture2d
  raylib.RL_ATTACHMENT_RENDERBUFFER = 200 // Framebuffer texture attachment type: renderbuffer

  // ENUM rlCullMode
  // Face culling mode
  raylib.RL_CULL_FACE_FRONT = 0 // 
  raylib.RL_CULL_FACE_BACK = 1 // 


  raylib.LIGHTGRAY = new raylib.Color({ r: 200, g: 200, b: 200, a: 255 }) // Light Gray
  raylib.GRAY = new raylib.Color({ r: 130, g: 130, b: 130, a: 255 }) // Gray
  raylib.DARKGRAY = new raylib.Color({ r: 80, g: 80, b: 80, a: 255 }) // Dark Gray
  raylib.YELLOW = new raylib.Color({ r: 253, g: 249, b: 0, a: 255 }) // Yellow
  raylib.GOLD = new raylib.Color({ r: 255, g: 203, b: 0, a: 255 }) // Gold
  raylib.ORANGE = new raylib.Color({ r: 255, g: 161, b: 0, a: 255 }) // Orange
  raylib.PINK = new raylib.Color({ r: 255, g: 109, b: 194, a: 255 }) // Pink
  raylib.RED = new raylib.Color({ r: 230, g: 41, b: 55, a: 255 }) // Red
  raylib.MAROON = new raylib.Color({ r: 190, g: 33, b: 55, a: 255 }) // Maroon
  raylib.GREEN = new raylib.Color({ r: 0, g: 228, b: 48, a: 255 }) // Green
  raylib.LIME = new raylib.Color({ r: 0, g: 158, b: 47, a: 255 }) // Lime
  raylib.DARKGREEN = new raylib.Color({ r: 0, g: 117, b: 44, a: 255 }) // Dark Green
  raylib.SKYBLUE = new raylib.Color({ r: 102, g: 191, b: 255, a: 255 }) // Sky Blue
  raylib.BLUE = new raylib.Color({ r: 0, g: 121, b: 241, a: 255 }) // Blue
  raylib.DARKBLUE = new raylib.Color({ r: 0, g: 82, b: 172, a: 255 }) // Dark Blue
  raylib.PURPLE = new raylib.Color({ r: 200, g: 122, b: 255, a: 255 }) // Purple
  raylib.VIOLET = new raylib.Color({ r: 135, g: 60, b: 190, a: 255 }) // Violet
  raylib.DARKPURPLE = new raylib.Color({ r: 112, g: 31, b: 126, a: 255 }) // Dark Purple
  raylib.BEIGE = new raylib.Color({ r: 211, g: 176, b: 131, a: 255 }) // Beige
  raylib.BROWN = new raylib.Color({ r: 127, g: 106, b: 79, a: 255 }) // Brown
  raylib.DARKBROWN = new raylib.Color({ r: 76, g: 63, b: 47, a: 255 }) // Dark Brown
  raylib.WHITE = new raylib.Color({ r: 255, g: 255, b: 255, a: 255 }) // White
  raylib.BLACK = new raylib.Color({ r: 0, g: 0, b: 0, a: 255 }) // Black
  raylib.BLANK = new raylib.Color({ r: 0, g: 0, b: 0, a: 0 }) // Blank (Transparent)
  raylib.MAGENTA = new raylib.Color({ r: 255, g: 0, b: 255, a: 255 }) // Magenta
  raylib.RAYWHITE = new raylib.Color({ r: 245, g: 245, b: 245, a: 255 }) // My own White (raylib logo)

  // Initialize window and OpenGL context: InitWindow(int, int, const char *) => void
  const _InitWindow = mod.cwrap('InitWindow', 'pointer', ['number', 'number', 'string'])
  raylib.InitWindow = (width, height, title) => _InitWindow(width, height, title)

  // Close window and unload OpenGL context: CloseWindow() => void
  const _CloseWindow = mod.cwrap('CloseWindow', 'pointer', [])
  raylib.CloseWindow = () => _CloseWindow()

  // Check if application should close (KEY_ESCAPE pressed or windows close icon clicked): WindowShouldClose() => bool
  const _WindowShouldClose = mod.cwrap('WindowShouldClose', 'boolean', [])
  raylib.WindowShouldClose = () => _WindowShouldClose()

  // Check if window has been initialized successfully: IsWindowReady() => bool
  const _IsWindowReady = mod.cwrap('IsWindowReady', 'boolean', [])
  raylib.IsWindowReady = () => _IsWindowReady()

  // Check if window is currently fullscreen: IsWindowFullscreen() => bool
  const _IsWindowFullscreen = mod.cwrap('IsWindowFullscreen', 'boolean', [])
  raylib.IsWindowFullscreen = () => _IsWindowFullscreen()

  // Check if window is currently hidden: IsWindowHidden() => bool
  const _IsWindowHidden = mod.cwrap('IsWindowHidden', 'boolean', [])
  raylib.IsWindowHidden = () => _IsWindowHidden()

  // Check if window is currently minimized: IsWindowMinimized() => bool
  const _IsWindowMinimized = mod.cwrap('IsWindowMinimized', 'boolean', [])
  raylib.IsWindowMinimized = () => _IsWindowMinimized()

  // Check if window is currently maximized: IsWindowMaximized() => bool
  const _IsWindowMaximized = mod.cwrap('IsWindowMaximized', 'boolean', [])
  raylib.IsWindowMaximized = () => _IsWindowMaximized()

  // Check if window is currently focused: IsWindowFocused() => bool
  const _IsWindowFocused = mod.cwrap('IsWindowFocused', 'boolean', [])
  raylib.IsWindowFocused = () => _IsWindowFocused()

  // Check if window has been resized last frame: IsWindowResized() => bool
  const _IsWindowResized = mod.cwrap('IsWindowResized', 'boolean', [])
  raylib.IsWindowResized = () => _IsWindowResized()

  // Check if one specific window flag is enabled: IsWindowState(unsigned int) => bool
  const _IsWindowState = mod.cwrap('IsWindowState', 'boolean', ['number'])
  raylib.IsWindowState = (flag) => _IsWindowState(flag)

  // Set window configuration state using flags: SetWindowState(unsigned int) => void
  const _SetWindowState = mod.cwrap('SetWindowState', 'pointer', ['number'])
  raylib.SetWindowState = (flags) => _SetWindowState(flags)

  // Clear window configuration state flags: ClearWindowState(unsigned int) => void
  const _ClearWindowState = mod.cwrap('ClearWindowState', 'pointer', ['number'])
  raylib.ClearWindowState = (flags) => _ClearWindowState(flags)

  // Toggle window state: fullscreen/windowed, resizes monitor to match window resolution: ToggleFullscreen() => void
  const _ToggleFullscreen = mod.cwrap('ToggleFullscreen', 'pointer', [])
  raylib.ToggleFullscreen = () => _ToggleFullscreen()

  // Toggle window state: borderless windowed, resizes window to match monitor resolution: ToggleBorderlessWindowed() => void
  const _ToggleBorderlessWindowed = mod.cwrap('ToggleBorderlessWindowed', 'pointer', [])
  raylib.ToggleBorderlessWindowed = () => _ToggleBorderlessWindowed()

  // Set window state: maximized, if resizable: MaximizeWindow() => void
  const _MaximizeWindow = mod.cwrap('MaximizeWindow', 'pointer', [])
  raylib.MaximizeWindow = () => _MaximizeWindow()

  // Set window state: minimized, if resizable: MinimizeWindow() => void
  const _MinimizeWindow = mod.cwrap('MinimizeWindow', 'pointer', [])
  raylib.MinimizeWindow = () => _MinimizeWindow()

  // Set window state: not minimized/maximized: RestoreWindow() => void
  const _RestoreWindow = mod.cwrap('RestoreWindow', 'pointer', [])
  raylib.RestoreWindow = () => _RestoreWindow()

  // Set icon for window (single image, RGBA 32bit): SetWindowIcon(Image) => void
  const _SetWindowIcon = mod.cwrap('SetWindowIcon', 'pointer', ['pointer'])
  raylib.SetWindowIcon = (image) => _SetWindowIcon(image._address)

  // Set icon for window (multiple images, RGBA 32bit): SetWindowIcons(Image *, int) => void
  const _SetWindowIcons = mod.cwrap('SetWindowIcons', 'pointer', ['pointer', 'number'])
  raylib.SetWindowIcons = (images, count) => _SetWindowIcons(images._address, count)

  // Set title for window: SetWindowTitle(const char *) => void
  const _SetWindowTitle = mod.cwrap('SetWindowTitle', 'pointer', ['string'])
  raylib.SetWindowTitle = (title) => _SetWindowTitle(title)

  // Set window position on screen: SetWindowPosition(int, int) => void
  const _SetWindowPosition = mod.cwrap('SetWindowPosition', 'pointer', ['number', 'number'])
  raylib.SetWindowPosition = (x, y) => _SetWindowPosition(x, y)

  // Set monitor for the current window: SetWindowMonitor(int) => void
  const _SetWindowMonitor = mod.cwrap('SetWindowMonitor', 'pointer', ['number'])
  raylib.SetWindowMonitor = (monitor) => _SetWindowMonitor(monitor)

  // Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE): SetWindowMinSize(int, int) => void
  const _SetWindowMinSize = mod.cwrap('SetWindowMinSize', 'pointer', ['number', 'number'])
  raylib.SetWindowMinSize = (width, height) => _SetWindowMinSize(width, height)

  // Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE): SetWindowMaxSize(int, int) => void
  const _SetWindowMaxSize = mod.cwrap('SetWindowMaxSize', 'pointer', ['number', 'number'])
  raylib.SetWindowMaxSize = (width, height) => _SetWindowMaxSize(width, height)

  // Set window dimensions: SetWindowSize(int, int) => void
  const _SetWindowSize = mod.cwrap('SetWindowSize', 'pointer', ['number', 'number'])
  raylib.SetWindowSize = (width, height) => _SetWindowSize(width, height)

  // Set window opacity [0.0f..1.0f]: SetWindowOpacity(float) => void
  const _SetWindowOpacity = mod.cwrap('SetWindowOpacity', 'pointer', ['number'])
  raylib.SetWindowOpacity = (opacity) => _SetWindowOpacity(opacity)

  // Set window focused: SetWindowFocused() => void
  const _SetWindowFocused = mod.cwrap('SetWindowFocused', 'pointer', [])
  raylib.SetWindowFocused = () => _SetWindowFocused()

  // Get native window handle: GetWindowHandle() => void *
  const _GetWindowHandle = mod.cwrap('GetWindowHandle', 'pointer', [])
  raylib.GetWindowHandle = () => _GetWindowHandle()

  // Get current screen width: GetScreenWidth() => int
  const _GetScreenWidth = mod.cwrap('GetScreenWidth', 'number', [])
  raylib.GetScreenWidth = () => _GetScreenWidth()

  // Get current screen height: GetScreenHeight() => int
  const _GetScreenHeight = mod.cwrap('GetScreenHeight', 'number', [])
  raylib.GetScreenHeight = () => _GetScreenHeight()

  // Get current render width (it considers HiDPI): GetRenderWidth() => int
  const _GetRenderWidth = mod.cwrap('GetRenderWidth', 'number', [])
  raylib.GetRenderWidth = () => _GetRenderWidth()

  // Get current render height (it considers HiDPI): GetRenderHeight() => int
  const _GetRenderHeight = mod.cwrap('GetRenderHeight', 'number', [])
  raylib.GetRenderHeight = () => _GetRenderHeight()

  // Get number of connected monitors: GetMonitorCount() => int
  const _GetMonitorCount = mod.cwrap('GetMonitorCount', 'number', [])
  raylib.GetMonitorCount = () => _GetMonitorCount()

  // Get current monitor where window is placed: GetCurrentMonitor() => int
  const _GetCurrentMonitor = mod.cwrap('GetCurrentMonitor', 'number', [])
  raylib.GetCurrentMonitor = () => _GetCurrentMonitor()

  // Get specified monitor position: GetMonitorPosition(int) => Vector2
  const _GetMonitorPosition = mod.cwrap('GetMonitorPosition', 'void', ['pointer', 'number'])
  raylib.GetMonitorPosition = (monitor) => {
    const _ret = new raylib.Vector2()
    _GetMonitorPosition(_ret._address, monitor)
    return _ret
  }

  // Get specified monitor width (current video mode used by monitor): GetMonitorWidth(int) => int
  const _GetMonitorWidth = mod.cwrap('GetMonitorWidth', 'number', ['number'])
  raylib.GetMonitorWidth = (monitor) => _GetMonitorWidth(monitor)

  // Get specified monitor height (current video mode used by monitor): GetMonitorHeight(int) => int
  const _GetMonitorHeight = mod.cwrap('GetMonitorHeight', 'number', ['number'])
  raylib.GetMonitorHeight = (monitor) => _GetMonitorHeight(monitor)

  // Get specified monitor physical width in millimetres: GetMonitorPhysicalWidth(int) => int
  const _GetMonitorPhysicalWidth = mod.cwrap('GetMonitorPhysicalWidth', 'number', ['number'])
  raylib.GetMonitorPhysicalWidth = (monitor) => _GetMonitorPhysicalWidth(monitor)

  // Get specified monitor physical height in millimetres: GetMonitorPhysicalHeight(int) => int
  const _GetMonitorPhysicalHeight = mod.cwrap('GetMonitorPhysicalHeight', 'number', ['number'])
  raylib.GetMonitorPhysicalHeight = (monitor) => _GetMonitorPhysicalHeight(monitor)

  // Get specified monitor refresh rate: GetMonitorRefreshRate(int) => int
  const _GetMonitorRefreshRate = mod.cwrap('GetMonitorRefreshRate', 'number', ['number'])
  raylib.GetMonitorRefreshRate = (monitor) => _GetMonitorRefreshRate(monitor)

  // Get window position XY on monitor: GetWindowPosition() => Vector2
  const _GetWindowPosition = mod.cwrap('GetWindowPosition', 'void', ['pointer'])
  raylib.GetWindowPosition = () => {
    const _ret = new raylib.Vector2()
    _GetWindowPosition(_ret._address)
    return _ret
  }

  // Get window scale DPI factor: GetWindowScaleDPI() => Vector2
  const _GetWindowScaleDPI = mod.cwrap('GetWindowScaleDPI', 'void', ['pointer'])
  raylib.GetWindowScaleDPI = () => {
    const _ret = new raylib.Vector2()
    _GetWindowScaleDPI(_ret._address)
    return _ret
  }

  // Get the human-readable, UTF-8 encoded name of the specified monitor: GetMonitorName(int) => const char *
  const _GetMonitorName = mod.cwrap('GetMonitorName', 'string', ['number'])
  raylib.GetMonitorName = (monitor) => _GetMonitorName(monitor)

  // Set clipboard text content: SetClipboardText(const char *) => void
  const _SetClipboardText = mod.cwrap('SetClipboardText', 'pointer', ['string'])
  raylib.SetClipboardText = (text) => _SetClipboardText(text)

  // Get clipboard text content: GetClipboardText() => const char *
  const _GetClipboardText = mod.cwrap('GetClipboardText', 'string', [])
  raylib.GetClipboardText = () => _GetClipboardText()

  // Enable waiting for events on EndDrawing(), no automatic event polling: EnableEventWaiting() => void
  const _EnableEventWaiting = mod.cwrap('EnableEventWaiting', 'pointer', [])
  raylib.EnableEventWaiting = () => _EnableEventWaiting()

  // Disable waiting for events on EndDrawing(), automatic events polling: DisableEventWaiting() => void
  const _DisableEventWaiting = mod.cwrap('DisableEventWaiting', 'pointer', [])
  raylib.DisableEventWaiting = () => _DisableEventWaiting()

  // Shows cursor: ShowCursor() => void
  const _ShowCursor = mod.cwrap('ShowCursor', 'pointer', [])
  raylib.ShowCursor = () => _ShowCursor()

  // Hides cursor: HideCursor() => void
  const _HideCursor = mod.cwrap('HideCursor', 'pointer', [])
  raylib.HideCursor = () => _HideCursor()

  // Check if cursor is not visible: IsCursorHidden() => bool
  const _IsCursorHidden = mod.cwrap('IsCursorHidden', 'boolean', [])
  raylib.IsCursorHidden = () => _IsCursorHidden()

  // Enables cursor (unlock cursor): EnableCursor() => void
  const _EnableCursor = mod.cwrap('EnableCursor', 'pointer', [])
  raylib.EnableCursor = () => _EnableCursor()

  // Disables cursor (lock cursor): DisableCursor() => void
  const _DisableCursor = mod.cwrap('DisableCursor', 'pointer', [])
  raylib.DisableCursor = () => _DisableCursor()

  // Check if cursor is on the screen: IsCursorOnScreen() => bool
  const _IsCursorOnScreen = mod.cwrap('IsCursorOnScreen', 'boolean', [])
  raylib.IsCursorOnScreen = () => _IsCursorOnScreen()

  // Set background color (framebuffer clear color): ClearBackground(Color) => void
  const _ClearBackground = mod.cwrap('ClearBackground', 'pointer', ['pointer'])
  raylib.ClearBackground = (color) => _ClearBackground(color._address)

  // Setup canvas (framebuffer) to start drawing: BeginDrawing() => void
  const _BeginDrawing = mod.cwrap('BeginDrawing', 'pointer', [])
  raylib.BeginDrawing = () => _BeginDrawing()

  // End canvas drawing and swap buffers (double buffering): EndDrawing() => void
  const _EndDrawing = mod.cwrap('EndDrawing', 'pointer', [])
  raylib.EndDrawing = () => _EndDrawing()

  // Begin 2D mode with custom camera (2D): BeginMode2D(Camera2D) => void
  const _BeginMode2D = mod.cwrap('BeginMode2D', 'pointer', ['pointer'])
  raylib.BeginMode2D = (camera) => _BeginMode2D(camera._address)

  // Ends 2D mode with custom camera: EndMode2D() => void
  const _EndMode2D = mod.cwrap('EndMode2D', 'pointer', [])
  raylib.EndMode2D = () => _EndMode2D()

  // Begin 3D mode with custom camera (3D): BeginMode3D(Camera3D) => void
  const _BeginMode3D = mod.cwrap('BeginMode3D', 'pointer', ['pointer'])
  raylib.BeginMode3D = (camera) => _BeginMode3D(camera._address)

  // Ends 3D mode and returns to default 2D orthographic mode: EndMode3D() => void
  const _EndMode3D = mod.cwrap('EndMode3D', 'pointer', [])
  raylib.EndMode3D = () => _EndMode3D()

  // Begin drawing to render texture: BeginTextureMode(RenderTexture2D) => void
  const _BeginTextureMode = mod.cwrap('BeginTextureMode', 'pointer', ['pointer'])
  raylib.BeginTextureMode = (target) => _BeginTextureMode(target._address)

  // Ends drawing to render texture: EndTextureMode() => void
  const _EndTextureMode = mod.cwrap('EndTextureMode', 'pointer', [])
  raylib.EndTextureMode = () => _EndTextureMode()

  // Begin custom shader drawing: BeginShaderMode(Shader) => void
  const _BeginShaderMode = mod.cwrap('BeginShaderMode', 'pointer', ['pointer'])
  raylib.BeginShaderMode = (shader) => _BeginShaderMode(shader._address)

  // End custom shader drawing (use default shader): EndShaderMode() => void
  const _EndShaderMode = mod.cwrap('EndShaderMode', 'pointer', [])
  raylib.EndShaderMode = () => _EndShaderMode()

  // Begin blending mode (alpha, additive, multiplied, subtract, custom): BeginBlendMode(int) => void
  const _BeginBlendMode = mod.cwrap('BeginBlendMode', 'pointer', ['number'])
  raylib.BeginBlendMode = (mode) => _BeginBlendMode(mode)

  // End blending mode (reset to default: alpha blending): EndBlendMode() => void
  const _EndBlendMode = mod.cwrap('EndBlendMode', 'pointer', [])
  raylib.EndBlendMode = () => _EndBlendMode()

  // Begin scissor mode (define screen area for following drawing): BeginScissorMode(int, int, int, int) => void
  const _BeginScissorMode = mod.cwrap('BeginScissorMode', 'pointer', ['number', 'number', 'number', 'number'])
  raylib.BeginScissorMode = (x, y, width, height) => _BeginScissorMode(x, y, width, height)

  // End scissor mode: EndScissorMode() => void
  const _EndScissorMode = mod.cwrap('EndScissorMode', 'pointer', [])
  raylib.EndScissorMode = () => _EndScissorMode()

  // Begin stereo rendering (requires VR simulator): BeginVrStereoMode(VrStereoConfig) => void
  const _BeginVrStereoMode = mod.cwrap('BeginVrStereoMode', 'pointer', ['pointer'])
  raylib.BeginVrStereoMode = (config) => _BeginVrStereoMode(config._address)

  // End stereo rendering (requires VR simulator): EndVrStereoMode() => void
  const _EndVrStereoMode = mod.cwrap('EndVrStereoMode', 'pointer', [])
  raylib.EndVrStereoMode = () => _EndVrStereoMode()

  // Load VR stereo config for VR simulator device parameters: LoadVrStereoConfig(VrDeviceInfo) => VrStereoConfig
  const _LoadVrStereoConfig = mod.cwrap('LoadVrStereoConfig', 'void', ['pointer', 'pointer'])
  raylib.LoadVrStereoConfig = (device) => {
    const _ret = new raylib.VrStereoConfig()
    _LoadVrStereoConfig(_ret._address, device._address)
    return _ret
  }

  // Unload VR stereo config: UnloadVrStereoConfig(VrStereoConfig) => void
  const _UnloadVrStereoConfig = mod.cwrap('UnloadVrStereoConfig', 'pointer', ['pointer'])
  raylib.UnloadVrStereoConfig = (config) => _UnloadVrStereoConfig(config._address)

  // Load shader from files and bind default locations: LoadShader(const char *, const char *) => Shader
  const _LoadShader = mod.cwrap('LoadShader', 'void', ['pointer', 'string', 'string'])
  raylib.LoadShader = (vsFileName, fsFileName) => {
    const _ret = new raylib.Shader()
    _LoadShader(_ret._address, vsFileName, fsFileName)
    return _ret
  }

  // Load shader from code strings and bind default locations: LoadShaderFromMemory(const char *, const char *) => Shader
  const _LoadShaderFromMemory = mod.cwrap('LoadShaderFromMemory', 'void', ['pointer', 'string', 'string'])
  raylib.LoadShaderFromMemory = (vsCode, fsCode) => {
    const _ret = new raylib.Shader()
    _LoadShaderFromMemory(_ret._address, vsCode, fsCode)
    return _ret
  }

  // Check if a shader is valid (loaded on GPU): IsShaderValid(Shader) => bool
  const _IsShaderValid = mod.cwrap('IsShaderValid', 'boolean', ['pointer'])
  raylib.IsShaderValid = (shader) => _IsShaderValid(shader._address)

  // Get shader uniform location: GetShaderLocation(Shader, const char *) => int
  const _GetShaderLocation = mod.cwrap('GetShaderLocation', 'number', ['pointer', 'string'])
  raylib.GetShaderLocation = (shader, uniformName) => _GetShaderLocation(shader._address, uniformName)

  // Get shader attribute location: GetShaderLocationAttrib(Shader, const char *) => int
  const _GetShaderLocationAttrib = mod.cwrap('GetShaderLocationAttrib', 'number', ['pointer', 'string'])
  raylib.GetShaderLocationAttrib = (shader, attribName) => _GetShaderLocationAttrib(shader._address, attribName)

  // Set shader uniform value: SetShaderValue(Shader, int, const void *, int) => void
  const _SetShaderValue = mod.cwrap('SetShaderValue', 'pointer', ['pointer', 'number', 'pointer', 'number'])
  raylib.SetShaderValue = (shader, locIndex, value, uniformType) => _SetShaderValue(shader._address, locIndex, value._address, uniformType)

  // Set shader uniform value vector: SetShaderValueV(Shader, int, const void *, int, int) => void
  const _SetShaderValueV = mod.cwrap('SetShaderValueV', 'pointer', ['pointer', 'number', 'pointer', 'number', 'number'])
  raylib.SetShaderValueV = (shader, locIndex, value, uniformType, count) => _SetShaderValueV(shader._address, locIndex, value._address, uniformType, count)

  // Set shader uniform value (matrix 4x4): SetShaderValueMatrix(Shader, int, Matrix) => void
  const _SetShaderValueMatrix = mod.cwrap('SetShaderValueMatrix', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.SetShaderValueMatrix = (shader, locIndex, mat) => _SetShaderValueMatrix(shader._address, locIndex, mat._address)

  // Set shader uniform value for texture (sampler2d): SetShaderValueTexture(Shader, int, Texture2D) => void
  const _SetShaderValueTexture = mod.cwrap('SetShaderValueTexture', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.SetShaderValueTexture = (shader, locIndex, texture) => _SetShaderValueTexture(shader._address, locIndex, texture._address)

  // Unload shader from GPU memory (VRAM): UnloadShader(Shader) => void
  const _UnloadShader = mod.cwrap('UnloadShader', 'pointer', ['pointer'])
  raylib.UnloadShader = (shader) => _UnloadShader(shader._address)

  // Get a ray trace from screen position (i.e mouse): GetScreenToWorldRay(Vector2, Camera) => Ray
  const _GetScreenToWorldRay = mod.cwrap('GetScreenToWorldRay', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetScreenToWorldRay = (position, camera) => {
    const _ret = new raylib.Ray()
    _GetScreenToWorldRay(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get a ray trace from screen position (i.e mouse) in a viewport: GetScreenToWorldRayEx(Vector2, Camera, int, int) => Ray
  const _GetScreenToWorldRayEx = mod.cwrap('GetScreenToWorldRayEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number'])
  raylib.GetScreenToWorldRayEx = (position, camera, width, height) => {
    const _ret = new raylib.Ray()
    _GetScreenToWorldRayEx(_ret._address, position._address, camera._address, width, height)
    return _ret
  }

  // Get the screen space position for a 3d world space position: GetWorldToScreen(Vector3, Camera) => Vector2
  const _GetWorldToScreen = mod.cwrap('GetWorldToScreen', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetWorldToScreen = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreen(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get size position for a 3d world space position: GetWorldToScreenEx(Vector3, Camera, int, int) => Vector2
  const _GetWorldToScreenEx = mod.cwrap('GetWorldToScreenEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number'])
  raylib.GetWorldToScreenEx = (position, camera, width, height) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreenEx(_ret._address, position._address, camera._address, width, height)
    return _ret
  }

  // Get the screen space position for a 2d camera world space position: GetWorldToScreen2D(Vector2, Camera2D) => Vector2
  const _GetWorldToScreen2D = mod.cwrap('GetWorldToScreen2D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetWorldToScreen2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreen2D(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get the world space position for a 2d camera screen space position: GetScreenToWorld2D(Vector2, Camera2D) => Vector2
  const _GetScreenToWorld2D = mod.cwrap('GetScreenToWorld2D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetScreenToWorld2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetScreenToWorld2D(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get camera transform matrix (view matrix): GetCameraMatrix(Camera) => Matrix
  const _GetCameraMatrix = mod.cwrap('GetCameraMatrix', 'void', ['pointer', 'pointer'])
  raylib.GetCameraMatrix = (camera) => {
    const _ret = new raylib.Matrix()
    _GetCameraMatrix(_ret._address, camera._address)
    return _ret
  }

  // Get camera 2d transform matrix: GetCameraMatrix2D(Camera2D) => Matrix
  const _GetCameraMatrix2D = mod.cwrap('GetCameraMatrix2D', 'void', ['pointer', 'pointer'])
  raylib.GetCameraMatrix2D = (camera) => {
    const _ret = new raylib.Matrix()
    _GetCameraMatrix2D(_ret._address, camera._address)
    return _ret
  }

  // Set target FPS (maximum): SetTargetFPS(int) => void
  const _SetTargetFPS = mod.cwrap('SetTargetFPS', 'pointer', ['number'])
  raylib.SetTargetFPS = (fps) => _SetTargetFPS(fps)

  // Get time in seconds for last frame drawn (delta time): GetFrameTime() => float
  const _GetFrameTime = mod.cwrap('GetFrameTime', 'number', [])
  raylib.GetFrameTime = () => _GetFrameTime()

  // Get elapsed time in seconds since InitWindow(): GetTime() => double
  const _GetTime = mod.cwrap('GetTime', 'number', [])
  raylib.GetTime = () => _GetTime()

  // Get current FPS: GetFPS() => int
  const _GetFPS = mod.cwrap('GetFPS', 'number', [])
  raylib.GetFPS = () => _GetFPS()

  // Swap back buffer with front buffer (screen drawing): SwapScreenBuffer() => void
  const _SwapScreenBuffer = mod.cwrap('SwapScreenBuffer', 'pointer', [])
  raylib.SwapScreenBuffer = () => _SwapScreenBuffer()

  // Register all input events: PollInputEvents() => void
  const _PollInputEvents = mod.cwrap('PollInputEvents', 'pointer', [])
  raylib.PollInputEvents = () => _PollInputEvents()

  // Wait for some time (halt program execution): WaitTime(double) => void
  const _WaitTime = mod.cwrap('WaitTime', 'pointer', ['number'])
  raylib.WaitTime = (seconds) => _WaitTime(seconds)

  // Set the seed for the random number generator: SetRandomSeed(unsigned int) => void
  const _SetRandomSeed = mod.cwrap('SetRandomSeed', 'pointer', ['number'])
  raylib.SetRandomSeed = (seed) => _SetRandomSeed(seed)

  // Get a random value between min and max (both included): GetRandomValue(int, int) => int
  const _GetRandomValue = mod.cwrap('GetRandomValue', 'number', ['number', 'number'])
  raylib.GetRandomValue = (min, max) => _GetRandomValue(min, max)

  // Load random values sequence, no values repeated: LoadRandomSequence(unsigned int, int, int) => int *
  const _LoadRandomSequence = mod.cwrap('LoadRandomSequence', 'pointer', ['number', 'number', 'number'])
  raylib.LoadRandomSequence = (count, min, max) => _LoadRandomSequence(count, min, max)

  // Unload random values sequence: UnloadRandomSequence(int *) => void
  const _UnloadRandomSequence = mod.cwrap('UnloadRandomSequence', 'pointer', ['pointer'])
  raylib.UnloadRandomSequence = (sequence) => _UnloadRandomSequence(sequence._address)

  // Takes a screenshot of current screen (filename extension defines format): TakeScreenshot(const char *) => void
  const _TakeScreenshot = mod.cwrap('TakeScreenshot', 'pointer', ['string'])
  raylib.TakeScreenshot = (fileName) => _TakeScreenshot(fileName)

  // Setup init configuration flags (view FLAGS): SetConfigFlags(unsigned int) => void
  const _SetConfigFlags = mod.cwrap('SetConfigFlags', 'pointer', ['number'])
  raylib.SetConfigFlags = (flags) => _SetConfigFlags(flags)

  // Open URL with default system browser (if available): OpenURL(const char *) => void
  const _OpenURL = mod.cwrap('OpenURL', 'pointer', ['string'])
  raylib.OpenURL = (url) => _OpenURL(url)

  // Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR...): TraceLog(int, const char *, ...) => void
  const _TraceLog = mod.cwrap('TraceLog', 'pointer', ['number', 'string', 'pointer'])
  raylib.TraceLog = (logLevel, text, args) => _TraceLog(logLevel, text, args._address)

  // Set the current threshold (minimum) log level: SetTraceLogLevel(int) => void
  const _SetTraceLogLevel = mod.cwrap('SetTraceLogLevel', 'pointer', ['number'])
  raylib.SetTraceLogLevel = (logLevel) => _SetTraceLogLevel(logLevel)

  // Internal memory allocator: MemAlloc(unsigned int) => void *
  const _MemAlloc = mod.cwrap('MemAlloc', 'pointer', ['number'])
  raylib.MemAlloc = (size) => _MemAlloc(size)

  // Internal memory reallocator: MemRealloc(void *, unsigned int) => void *
  const _MemRealloc = mod.cwrap('MemRealloc', 'pointer', ['pointer', 'number'])
  raylib.MemRealloc = (ptr, size) => _MemRealloc(ptr._address, size)

  // Internal memory free: MemFree(void *) => void
  const _MemFree = mod.cwrap('MemFree', 'pointer', ['pointer'])
  raylib.MemFree = (ptr) => _MemFree(ptr._address)

  // Set custom trace log: SetTraceLogCallback(TraceLogCallback) => void
  const _SetTraceLogCallback = mod.cwrap('SetTraceLogCallback', 'pointer', ['pointer'])
  raylib.SetTraceLogCallback = (callback) => _SetTraceLogCallback(callback._address)

  // Set custom file binary data loader: SetLoadFileDataCallback(LoadFileDataCallback) => void
  const _SetLoadFileDataCallback = mod.cwrap('SetLoadFileDataCallback', 'pointer', ['pointer'])
  raylib.SetLoadFileDataCallback = (callback) => _SetLoadFileDataCallback(callback._address)

  // Set custom file binary data saver: SetSaveFileDataCallback(SaveFileDataCallback) => void
  const _SetSaveFileDataCallback = mod.cwrap('SetSaveFileDataCallback', 'pointer', ['pointer'])
  raylib.SetSaveFileDataCallback = (callback) => _SetSaveFileDataCallback(callback._address)

  // Set custom file text data loader: SetLoadFileTextCallback(LoadFileTextCallback) => void
  const _SetLoadFileTextCallback = mod.cwrap('SetLoadFileTextCallback', 'pointer', ['pointer'])
  raylib.SetLoadFileTextCallback = (callback) => _SetLoadFileTextCallback(callback._address)

  // Set custom file text data saver: SetSaveFileTextCallback(SaveFileTextCallback) => void
  const _SetSaveFileTextCallback = mod.cwrap('SetSaveFileTextCallback', 'pointer', ['pointer'])
  raylib.SetSaveFileTextCallback = (callback) => _SetSaveFileTextCallback(callback._address)

  // Load file data as byte array (read): LoadFileData(const char *, int *) => unsigned char *
  const _LoadFileData = mod.cwrap('LoadFileData', 'pointer', ['string', 'pointer'])
  raylib.LoadFileData = async (fileName, dataSize) => {
    await raylib.addFile(fileName)
    return _LoadFileData(fileName, dataSize._address)
  }

  // Unload file data allocated by LoadFileData(): UnloadFileData(unsigned char *) => void
  const _UnloadFileData = mod.cwrap('UnloadFileData', 'pointer', ['pointer'])
  raylib.UnloadFileData = (data) => _UnloadFileData(data._address)

  // Save data to file from byte array (write), returns true on success: SaveFileData(const char *, void *, int) => bool
  const _SaveFileData = mod.cwrap('SaveFileData', 'boolean', ['string', 'pointer', 'number'])
  raylib.SaveFileData = (fileName, data, dataSize) => _SaveFileData(fileName, data._address, dataSize)

  // Export data to code (.h), returns true on success: ExportDataAsCode(const unsigned char *, int, const char *) => bool
  const _ExportDataAsCode = mod.cwrap('ExportDataAsCode', 'boolean', ['pointer', 'number', 'string'])
  raylib.ExportDataAsCode = (data, dataSize, fileName) => _ExportDataAsCode(data._address, dataSize, fileName)

  // Load text data from file (read), returns a '\0' terminated string: LoadFileText(const char *) => char *
  const _LoadFileText = mod.cwrap('LoadFileText', 'string', ['string'])
  raylib.LoadFileText = async (fileName) => {
    await raylib.addFile(fileName)
    return _LoadFileText(fileName)
  }

  // Unload file text data allocated by LoadFileText(): UnloadFileText(char *) => void
  const _UnloadFileText = mod.cwrap('UnloadFileText', 'pointer', ['string'])
  raylib.UnloadFileText = (text) => _UnloadFileText(text)

  // Save text data to file (write), string must be '\0' terminated, returns true on success: SaveFileText(const char *, char *) => bool
  const _SaveFileText = mod.cwrap('SaveFileText', 'boolean', ['string', 'string'])
  raylib.SaveFileText = (fileName, text) => _SaveFileText(fileName, text)

  // Check if file exists: FileExists(const char *) => bool
  const _FileExists = mod.cwrap('FileExists', 'boolean', ['string'])
  raylib.FileExists = (fileName) => _FileExists(fileName)

  // Check if a directory path exists: DirectoryExists(const char *) => bool
  const _DirectoryExists = mod.cwrap('DirectoryExists', 'boolean', ['string'])
  raylib.DirectoryExists = (dirPath) => _DirectoryExists(dirPath)

  // Check file extension (including point: .png, .wav): IsFileExtension(const char *, const char *) => bool
  const _IsFileExtension = mod.cwrap('IsFileExtension', 'boolean', ['string', 'string'])
  raylib.IsFileExtension = (fileName, ext) => _IsFileExtension(fileName, ext)

  // Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h): GetFileLength(const char *) => int
  const _GetFileLength = mod.cwrap('GetFileLength', 'number', ['string'])
  raylib.GetFileLength = (fileName) => _GetFileLength(fileName)

  // Get pointer to extension for a filename string (includes dot: '.png'): GetFileExtension(const char *) => const char *
  const _GetFileExtension = mod.cwrap('GetFileExtension', 'string', ['string'])
  raylib.GetFileExtension = (fileName) => _GetFileExtension(fileName)

  // Get pointer to filename for a path string: GetFileName(const char *) => const char *
  const _GetFileName = mod.cwrap('GetFileName', 'string', ['string'])
  raylib.GetFileName = (filePath) => _GetFileName(filePath)

  // Get filename string without extension (uses static string): GetFileNameWithoutExt(const char *) => const char *
  const _GetFileNameWithoutExt = mod.cwrap('GetFileNameWithoutExt', 'string', ['string'])
  raylib.GetFileNameWithoutExt = (filePath) => _GetFileNameWithoutExt(filePath)

  // Get full path for a given fileName with path (uses static string): GetDirectoryPath(const char *) => const char *
  const _GetDirectoryPath = mod.cwrap('GetDirectoryPath', 'string', ['string'])
  raylib.GetDirectoryPath = (filePath) => _GetDirectoryPath(filePath)

  // Get previous directory path for a given path (uses static string): GetPrevDirectoryPath(const char *) => const char *
  const _GetPrevDirectoryPath = mod.cwrap('GetPrevDirectoryPath', 'string', ['string'])
  raylib.GetPrevDirectoryPath = (dirPath) => _GetPrevDirectoryPath(dirPath)

  // Get current working directory (uses static string): GetWorkingDirectory() => const char *
  const _GetWorkingDirectory = mod.cwrap('GetWorkingDirectory', 'string', [])
  raylib.GetWorkingDirectory = () => _GetWorkingDirectory()

  // Get the directory of the running application (uses static string): GetApplicationDirectory() => const char *
  const _GetApplicationDirectory = mod.cwrap('GetApplicationDirectory', 'string', [])
  raylib.GetApplicationDirectory = () => _GetApplicationDirectory()

  // Create directories (including full path requested), returns 0 on success: MakeDirectory(const char *) => int
  const _MakeDirectory = mod.cwrap('MakeDirectory', 'number', ['string'])
  raylib.MakeDirectory = (dirPath) => _MakeDirectory(dirPath)

  // Change working directory, return true on success: ChangeDirectory(const char *) => bool
  const _ChangeDirectory = mod.cwrap('ChangeDirectory', 'boolean', ['string'])
  raylib.ChangeDirectory = (dir) => _ChangeDirectory(dir)

  // Check if a given path is a file or a directory: IsPathFile(const char *) => bool
  const _IsPathFile = mod.cwrap('IsPathFile', 'boolean', ['string'])
  raylib.IsPathFile = (path) => _IsPathFile(path)

  // Check if fileName is valid for the platform/OS: IsFileNameValid(const char *) => bool
  const _IsFileNameValid = mod.cwrap('IsFileNameValid', 'boolean', ['string'])
  raylib.IsFileNameValid = (fileName) => _IsFileNameValid(fileName)

  // Load directory filepaths: LoadDirectoryFiles(const char *) => FilePathList
  const _LoadDirectoryFiles = mod.cwrap('LoadDirectoryFiles', 'void', ['pointer', 'string'])
  raylib.LoadDirectoryFiles = (dirPath) => {
    const _ret = new raylib.FilePathList()
    _LoadDirectoryFiles(_ret._address, dirPath)
    return _ret
  }

  // Load directory filepaths with extension filtering and recursive directory scan. Use 'DIR' in the filter string to include directories in the result: LoadDirectoryFilesEx(const char *, const char *, bool) => FilePathList
  const _LoadDirectoryFilesEx = mod.cwrap('LoadDirectoryFilesEx', 'void', ['pointer', 'string', 'string', 'boolean'])
  raylib.LoadDirectoryFilesEx = (basePath, filter, scanSubdirs) => {
    const _ret = new raylib.FilePathList()
    _LoadDirectoryFilesEx(_ret._address, basePath, filter, scanSubdirs)
    return _ret
  }

  // Unload filepaths: UnloadDirectoryFiles(FilePathList) => void
  const _UnloadDirectoryFiles = mod.cwrap('UnloadDirectoryFiles', 'pointer', ['pointer'])
  raylib.UnloadDirectoryFiles = (files) => _UnloadDirectoryFiles(files._address)

  // Check if a file has been dropped into window: IsFileDropped() => bool
  const _IsFileDropped = mod.cwrap('IsFileDropped', 'boolean', [])
  raylib.IsFileDropped = () => _IsFileDropped()

  // Load dropped filepaths: LoadDroppedFiles() => FilePathList
  const _LoadDroppedFiles = mod.cwrap('LoadDroppedFiles', 'void', ['pointer'])
  raylib.LoadDroppedFiles = () => {
    const _ret = new raylib.FilePathList()
    _LoadDroppedFiles(_ret._address)
    return _ret
  }

  // Unload dropped filepaths: UnloadDroppedFiles(FilePathList) => void
  const _UnloadDroppedFiles = mod.cwrap('UnloadDroppedFiles', 'pointer', ['pointer'])
  raylib.UnloadDroppedFiles = (files) => _UnloadDroppedFiles(files._address)

  // Get file modification time (last write time): GetFileModTime(const char *) => long
  const _GetFileModTime = mod.cwrap('GetFileModTime', 'number', ['string'])
  raylib.GetFileModTime = (fileName) => _GetFileModTime(fileName)

  // Compress data (DEFLATE algorithm), memory must be MemFree(): CompressData(const unsigned char *, int, int *) => unsigned char *
  const _CompressData = mod.cwrap('CompressData', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.CompressData = (data, dataSize, compDataSize) => _CompressData(data._address, dataSize, compDataSize._address)

  // Decompress data (DEFLATE algorithm), memory must be MemFree(): DecompressData(const unsigned char *, int, int *) => unsigned char *
  const _DecompressData = mod.cwrap('DecompressData', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DecompressData = (compData, compDataSize, dataSize) => _DecompressData(compData._address, compDataSize, dataSize._address)

  // Encode data to Base64 string, memory must be MemFree(): EncodeDataBase64(const unsigned char *, int, int *) => char *
  const _EncodeDataBase64 = mod.cwrap('EncodeDataBase64', 'string', ['pointer', 'number', 'pointer'])
  raylib.EncodeDataBase64 = (data, dataSize, outputSize) => _EncodeDataBase64(data._address, dataSize, outputSize._address)

  // Decode Base64 string data, memory must be MemFree(): DecodeDataBase64(const unsigned char *, int *) => unsigned char *
  const _DecodeDataBase64 = mod.cwrap('DecodeDataBase64', 'pointer', ['pointer', 'pointer'])
  raylib.DecodeDataBase64 = (data, outputSize) => _DecodeDataBase64(data._address, outputSize._address)

  // Compute CRC32 hash code: ComputeCRC32(unsigned char *, int) => unsigned int
  const _ComputeCRC32 = mod.cwrap('ComputeCRC32', 'number', ['pointer', 'number'])
  raylib.ComputeCRC32 = (data, dataSize) => _ComputeCRC32(data._address, dataSize)

  // Compute MD5 hash code, returns static int[4] (16 bytes): ComputeMD5(unsigned char *, int) => unsigned int *
  const _ComputeMD5 = mod.cwrap('ComputeMD5', 'pointer', ['pointer', 'number'])
  raylib.ComputeMD5 = (data, dataSize) => _ComputeMD5(data._address, dataSize)

  // Compute SHA1 hash code, returns static int[5] (20 bytes): ComputeSHA1(unsigned char *, int) => unsigned int *
  const _ComputeSHA1 = mod.cwrap('ComputeSHA1', 'pointer', ['pointer', 'number'])
  raylib.ComputeSHA1 = (data, dataSize) => _ComputeSHA1(data._address, dataSize)

  // Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS: LoadAutomationEventList(const char *) => AutomationEventList
  const _LoadAutomationEventList = mod.cwrap('LoadAutomationEventList', 'void', ['pointer', 'string'])
  raylib.LoadAutomationEventList = (fileName) => {
    const _ret = new raylib.AutomationEventList()
    _LoadAutomationEventList(_ret._address, fileName)
    return _ret
  }

  // Unload automation events list from file: UnloadAutomationEventList(AutomationEventList) => void
  const _UnloadAutomationEventList = mod.cwrap('UnloadAutomationEventList', 'pointer', ['pointer'])
  raylib.UnloadAutomationEventList = (list) => _UnloadAutomationEventList(list._address)

  // Export automation events list as text file: ExportAutomationEventList(AutomationEventList, const char *) => bool
  const _ExportAutomationEventList = mod.cwrap('ExportAutomationEventList', 'boolean', ['pointer', 'string'])
  raylib.ExportAutomationEventList = (list, fileName) => _ExportAutomationEventList(list._address, fileName)

  // Set automation event list to record to: SetAutomationEventList(AutomationEventList *) => void
  const _SetAutomationEventList = mod.cwrap('SetAutomationEventList', 'pointer', ['pointer'])
  raylib.SetAutomationEventList = (list) => _SetAutomationEventList(list._address)

  // Set automation event internal base frame to start recording: SetAutomationEventBaseFrame(int) => void
  const _SetAutomationEventBaseFrame = mod.cwrap('SetAutomationEventBaseFrame', 'pointer', ['number'])
  raylib.SetAutomationEventBaseFrame = (frame) => _SetAutomationEventBaseFrame(frame)

  // Start recording automation events (AutomationEventList must be set): StartAutomationEventRecording() => void
  const _StartAutomationEventRecording = mod.cwrap('StartAutomationEventRecording', 'pointer', [])
  raylib.StartAutomationEventRecording = () => _StartAutomationEventRecording()

  // Stop recording automation events: StopAutomationEventRecording() => void
  const _StopAutomationEventRecording = mod.cwrap('StopAutomationEventRecording', 'pointer', [])
  raylib.StopAutomationEventRecording = () => _StopAutomationEventRecording()

  // Play a recorded automation event: PlayAutomationEvent(AutomationEvent) => void
  const _PlayAutomationEvent = mod.cwrap('PlayAutomationEvent', 'pointer', ['pointer'])
  raylib.PlayAutomationEvent = (event) => _PlayAutomationEvent(event._address)

  // Check if a key has been pressed once: IsKeyPressed(int) => bool
  const _IsKeyPressed = mod.cwrap('IsKeyPressed', 'boolean', ['number'])
  raylib.IsKeyPressed = (key) => _IsKeyPressed(key)

  // Check if a key has been pressed again: IsKeyPressedRepeat(int) => bool
  const _IsKeyPressedRepeat = mod.cwrap('IsKeyPressedRepeat', 'boolean', ['number'])
  raylib.IsKeyPressedRepeat = (key) => _IsKeyPressedRepeat(key)

  // Check if a key is being pressed: IsKeyDown(int) => bool
  const _IsKeyDown = mod.cwrap('IsKeyDown', 'boolean', ['number'])
  raylib.IsKeyDown = (key) => _IsKeyDown(key)

  // Check if a key has been released once: IsKeyReleased(int) => bool
  const _IsKeyReleased = mod.cwrap('IsKeyReleased', 'boolean', ['number'])
  raylib.IsKeyReleased = (key) => _IsKeyReleased(key)

  // Check if a key is NOT being pressed: IsKeyUp(int) => bool
  const _IsKeyUp = mod.cwrap('IsKeyUp', 'boolean', ['number'])
  raylib.IsKeyUp = (key) => _IsKeyUp(key)

  // Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty: GetKeyPressed() => int
  const _GetKeyPressed = mod.cwrap('GetKeyPressed', 'number', [])
  raylib.GetKeyPressed = () => _GetKeyPressed()

  // Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty: GetCharPressed() => int
  const _GetCharPressed = mod.cwrap('GetCharPressed', 'number', [])
  raylib.GetCharPressed = () => _GetCharPressed()

  // Set a custom key to exit program (default is ESC): SetExitKey(int) => void
  const _SetExitKey = mod.cwrap('SetExitKey', 'pointer', ['number'])
  raylib.SetExitKey = (key) => _SetExitKey(key)

  // Check if a gamepad is available: IsGamepadAvailable(int) => bool
  const _IsGamepadAvailable = mod.cwrap('IsGamepadAvailable', 'boolean', ['number'])
  raylib.IsGamepadAvailable = (gamepad) => _IsGamepadAvailable(gamepad)

  // Get gamepad internal name id: GetGamepadName(int) => const char *
  const _GetGamepadName = mod.cwrap('GetGamepadName', 'string', ['number'])
  raylib.GetGamepadName = (gamepad) => _GetGamepadName(gamepad)

  // Check if a gamepad button has been pressed once: IsGamepadButtonPressed(int, int) => bool
  const _IsGamepadButtonPressed = mod.cwrap('IsGamepadButtonPressed', 'boolean', ['number', 'number'])
  raylib.IsGamepadButtonPressed = (gamepad, button) => _IsGamepadButtonPressed(gamepad, button)

  // Check if a gamepad button is being pressed: IsGamepadButtonDown(int, int) => bool
  const _IsGamepadButtonDown = mod.cwrap('IsGamepadButtonDown', 'boolean', ['number', 'number'])
  raylib.IsGamepadButtonDown = (gamepad, button) => _IsGamepadButtonDown(gamepad, button)

  // Check if a gamepad button has been released once: IsGamepadButtonReleased(int, int) => bool
  const _IsGamepadButtonReleased = mod.cwrap('IsGamepadButtonReleased', 'boolean', ['number', 'number'])
  raylib.IsGamepadButtonReleased = (gamepad, button) => _IsGamepadButtonReleased(gamepad, button)

  // Check if a gamepad button is NOT being pressed: IsGamepadButtonUp(int, int) => bool
  const _IsGamepadButtonUp = mod.cwrap('IsGamepadButtonUp', 'boolean', ['number', 'number'])
  raylib.IsGamepadButtonUp = (gamepad, button) => _IsGamepadButtonUp(gamepad, button)

  // Get the last gamepad button pressed: GetGamepadButtonPressed() => int
  const _GetGamepadButtonPressed = mod.cwrap('GetGamepadButtonPressed', 'number', [])
  raylib.GetGamepadButtonPressed = () => _GetGamepadButtonPressed()

  // Get gamepad axis count for a gamepad: GetGamepadAxisCount(int) => int
  const _GetGamepadAxisCount = mod.cwrap('GetGamepadAxisCount', 'number', ['number'])
  raylib.GetGamepadAxisCount = (gamepad) => _GetGamepadAxisCount(gamepad)

  // Get axis movement value for a gamepad axis: GetGamepadAxisMovement(int, int) => float
  const _GetGamepadAxisMovement = mod.cwrap('GetGamepadAxisMovement', 'number', ['number', 'number'])
  raylib.GetGamepadAxisMovement = (gamepad, axis) => _GetGamepadAxisMovement(gamepad, axis)

  // Set internal gamepad mappings (SDL_GameControllerDB): SetGamepadMappings(const char *) => int
  const _SetGamepadMappings = mod.cwrap('SetGamepadMappings', 'number', ['string'])
  raylib.SetGamepadMappings = (mappings) => _SetGamepadMappings(mappings)

  // Set gamepad vibration for both motors (duration in seconds): SetGamepadVibration(int, float, float, float) => void
  const _SetGamepadVibration = mod.cwrap('SetGamepadVibration', 'pointer', ['number', 'number', 'number', 'number'])
  raylib.SetGamepadVibration = (gamepad, leftMotor, rightMotor, duration) => _SetGamepadVibration(gamepad, leftMotor, rightMotor, duration)

  // Check if a mouse button has been pressed once: IsMouseButtonPressed(int) => bool
  const _IsMouseButtonPressed = mod.cwrap('IsMouseButtonPressed', 'boolean', ['number'])
  raylib.IsMouseButtonPressed = (button) => _IsMouseButtonPressed(button)

  // Check if a mouse button is being pressed: IsMouseButtonDown(int) => bool
  const _IsMouseButtonDown = mod.cwrap('IsMouseButtonDown', 'boolean', ['number'])
  raylib.IsMouseButtonDown = (button) => _IsMouseButtonDown(button)

  // Check if a mouse button has been released once: IsMouseButtonReleased(int) => bool
  const _IsMouseButtonReleased = mod.cwrap('IsMouseButtonReleased', 'boolean', ['number'])
  raylib.IsMouseButtonReleased = (button) => _IsMouseButtonReleased(button)

  // Check if a mouse button is NOT being pressed: IsMouseButtonUp(int) => bool
  const _IsMouseButtonUp = mod.cwrap('IsMouseButtonUp', 'boolean', ['number'])
  raylib.IsMouseButtonUp = (button) => _IsMouseButtonUp(button)

  // Get mouse position X: GetMouseX() => int
  const _GetMouseX = mod.cwrap('GetMouseX', 'number', [])
  raylib.GetMouseX = () => _GetMouseX()

  // Get mouse position Y: GetMouseY() => int
  const _GetMouseY = mod.cwrap('GetMouseY', 'number', [])
  raylib.GetMouseY = () => _GetMouseY()

  // Get mouse position XY: GetMousePosition() => Vector2
  const _GetMousePosition = mod.cwrap('GetMousePosition', 'void', ['pointer'])
  raylib.GetMousePosition = () => {
    const _ret = new raylib.Vector2()
    _GetMousePosition(_ret._address)
    return _ret
  }

  // Get mouse delta between frames: GetMouseDelta() => Vector2
  const _GetMouseDelta = mod.cwrap('GetMouseDelta', 'void', ['pointer'])
  raylib.GetMouseDelta = () => {
    const _ret = new raylib.Vector2()
    _GetMouseDelta(_ret._address)
    return _ret
  }

  // Set mouse position XY: SetMousePosition(int, int) => void
  const _SetMousePosition = mod.cwrap('SetMousePosition', 'pointer', ['number', 'number'])
  raylib.SetMousePosition = (x, y) => _SetMousePosition(x, y)

  // Set mouse offset: SetMouseOffset(int, int) => void
  const _SetMouseOffset = mod.cwrap('SetMouseOffset', 'pointer', ['number', 'number'])
  raylib.SetMouseOffset = (offsetX, offsetY) => _SetMouseOffset(offsetX, offsetY)

  // Set mouse scaling: SetMouseScale(float, float) => void
  const _SetMouseScale = mod.cwrap('SetMouseScale', 'pointer', ['number', 'number'])
  raylib.SetMouseScale = (scaleX, scaleY) => _SetMouseScale(scaleX, scaleY)

  // Get mouse wheel movement for X or Y, whichever is larger: GetMouseWheelMove() => float
  const _GetMouseWheelMove = mod.cwrap('GetMouseWheelMove', 'number', [])
  raylib.GetMouseWheelMove = () => _GetMouseWheelMove()

  // Get mouse wheel movement for both X and Y: GetMouseWheelMoveV() => Vector2
  const _GetMouseWheelMoveV = mod.cwrap('GetMouseWheelMoveV', 'void', ['pointer'])
  raylib.GetMouseWheelMoveV = () => {
    const _ret = new raylib.Vector2()
    _GetMouseWheelMoveV(_ret._address)
    return _ret
  }

  // Set mouse cursor: SetMouseCursor(int) => void
  const _SetMouseCursor = mod.cwrap('SetMouseCursor', 'pointer', ['number'])
  raylib.SetMouseCursor = (cursor) => _SetMouseCursor(cursor)

  // Get touch position X for touch point 0 (relative to screen size): GetTouchX() => int
  const _GetTouchX = mod.cwrap('GetTouchX', 'number', [])
  raylib.GetTouchX = () => _GetTouchX()

  // Get touch position Y for touch point 0 (relative to screen size): GetTouchY() => int
  const _GetTouchY = mod.cwrap('GetTouchY', 'number', [])
  raylib.GetTouchY = () => _GetTouchY()

  // Get touch position XY for a touch point index (relative to screen size): GetTouchPosition(int) => Vector2
  const _GetTouchPosition = mod.cwrap('GetTouchPosition', 'void', ['pointer', 'number'])
  raylib.GetTouchPosition = (index) => {
    const _ret = new raylib.Vector2()
    _GetTouchPosition(_ret._address, index)
    return _ret
  }

  // Get touch point identifier for given index: GetTouchPointId(int) => int
  const _GetTouchPointId = mod.cwrap('GetTouchPointId', 'number', ['number'])
  raylib.GetTouchPointId = (index) => _GetTouchPointId(index)

  // Get number of touch points: GetTouchPointCount() => int
  const _GetTouchPointCount = mod.cwrap('GetTouchPointCount', 'number', [])
  raylib.GetTouchPointCount = () => _GetTouchPointCount()

  // Enable a set of gestures using flags: SetGesturesEnabled(unsigned int) => void
  const _SetGesturesEnabled = mod.cwrap('SetGesturesEnabled', 'pointer', ['number'])
  raylib.SetGesturesEnabled = (flags) => _SetGesturesEnabled(flags)

  // Check if a gesture have been detected: IsGestureDetected(unsigned int) => bool
  const _IsGestureDetected = mod.cwrap('IsGestureDetected', 'boolean', ['number'])
  raylib.IsGestureDetected = (gesture) => _IsGestureDetected(gesture)

  // Get latest detected gesture: GetGestureDetected() => int
  const _GetGestureDetected = mod.cwrap('GetGestureDetected', 'number', [])
  raylib.GetGestureDetected = () => _GetGestureDetected()

  // Get gesture hold time in seconds: GetGestureHoldDuration() => float
  const _GetGestureHoldDuration = mod.cwrap('GetGestureHoldDuration', 'number', [])
  raylib.GetGestureHoldDuration = () => _GetGestureHoldDuration()

  // Get gesture drag vector: GetGestureDragVector() => Vector2
  const _GetGestureDragVector = mod.cwrap('GetGestureDragVector', 'void', ['pointer'])
  raylib.GetGestureDragVector = () => {
    const _ret = new raylib.Vector2()
    _GetGestureDragVector(_ret._address)
    return _ret
  }

  // Get gesture drag angle: GetGestureDragAngle() => float
  const _GetGestureDragAngle = mod.cwrap('GetGestureDragAngle', 'number', [])
  raylib.GetGestureDragAngle = () => _GetGestureDragAngle()

  // Get gesture pinch delta: GetGesturePinchVector() => Vector2
  const _GetGesturePinchVector = mod.cwrap('GetGesturePinchVector', 'void', ['pointer'])
  raylib.GetGesturePinchVector = () => {
    const _ret = new raylib.Vector2()
    _GetGesturePinchVector(_ret._address)
    return _ret
  }

  // Get gesture pinch angle: GetGesturePinchAngle() => float
  const _GetGesturePinchAngle = mod.cwrap('GetGesturePinchAngle', 'number', [])
  raylib.GetGesturePinchAngle = () => _GetGesturePinchAngle()

  // Update camera position for selected mode: UpdateCamera(Camera *, int) => void
  const _UpdateCamera = mod.cwrap('UpdateCamera', 'pointer', ['pointer', 'number'])
  raylib.UpdateCamera = (camera, mode) => _UpdateCamera(camera._address, mode)

  // Update camera movement/rotation: UpdateCameraPro(Camera *, Vector3, Vector3, float) => void
  const _UpdateCameraPro = mod.cwrap('UpdateCameraPro', 'pointer', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.UpdateCameraPro = (camera, movement, rotation, zoom) => _UpdateCameraPro(camera._address, movement._address, rotation._address, zoom)

  // Set texture and rectangle to be used on shapes drawing: SetShapesTexture(Texture2D, Rectangle) => void
  const _SetShapesTexture = mod.cwrap('SetShapesTexture', 'pointer', ['pointer', 'pointer'])
  raylib.SetShapesTexture = (texture, source) => _SetShapesTexture(texture._address, source._address)

  // Get texture that is used for shapes drawing: GetShapesTexture() => Texture2D
  const _GetShapesTexture = mod.cwrap('GetShapesTexture', 'void', ['pointer'])
  raylib.GetShapesTexture = () => {
    const _ret = new raylib.Texture2D()
    _GetShapesTexture(_ret._address)
    return _ret
  }

  // Get texture source rectangle that is used for shapes drawing: GetShapesTextureRectangle() => Rectangle
  const _GetShapesTextureRectangle = mod.cwrap('GetShapesTextureRectangle', 'void', ['pointer'])
  raylib.GetShapesTextureRectangle = () => {
    const _ret = new raylib.Rectangle()
    _GetShapesTextureRectangle(_ret._address)
    return _ret
  }

  // Draw a pixel using geometry [Can be slow, use with care]: DrawPixel(int, int, Color) => void
  const _DrawPixel = mod.cwrap('DrawPixel', 'pointer', ['number', 'number', 'pointer'])
  raylib.DrawPixel = (posX, posY, color) => _DrawPixel(posX, posY, color._address)

  // Draw a pixel using geometry (Vector version) [Can be slow, use with care]: DrawPixelV(Vector2, Color) => void
  const _DrawPixelV = mod.cwrap('DrawPixelV', 'pointer', ['pointer', 'pointer'])
  raylib.DrawPixelV = (position, color) => _DrawPixelV(position._address, color._address)

  // Draw a line: DrawLine(int, int, int, int, Color) => void
  const _DrawLine = mod.cwrap('DrawLine', 'pointer', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawLine = (startPosX, startPosY, endPosX, endPosY, color) => _DrawLine(startPosX, startPosY, endPosX, endPosY, color._address)

  // Draw a line (using gl lines): DrawLineV(Vector2, Vector2, Color) => void
  const _DrawLineV = mod.cwrap('DrawLineV', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawLineV = (startPos, endPos, color) => _DrawLineV(startPos._address, endPos._address, color._address)

  // Draw a line (using triangles/quads): DrawLineEx(Vector2, Vector2, float, Color) => void
  const _DrawLineEx = mod.cwrap('DrawLineEx', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineEx = (startPos, endPos, thick, color) => _DrawLineEx(startPos._address, endPos._address, thick, color._address)

  // Draw lines sequence (using gl lines): DrawLineStrip(const Vector2 *, int, Color) => void
  const _DrawLineStrip = mod.cwrap('DrawLineStrip', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawLineStrip = (points, pointCount, color) => _DrawLineStrip(points._address, pointCount, color._address)

  // Draw line segment cubic-bezier in-out interpolation: DrawLineBezier(Vector2, Vector2, float, Color) => void
  const _DrawLineBezier = mod.cwrap('DrawLineBezier', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineBezier = (startPos, endPos, thick, color) => _DrawLineBezier(startPos._address, endPos._address, thick, color._address)

  // Draw a color-filled circle: DrawCircle(int, int, float, Color) => void
  const _DrawCircle = mod.cwrap('DrawCircle', 'pointer', ['number', 'number', 'number', 'pointer'])
  raylib.DrawCircle = (centerX, centerY, radius, color) => _DrawCircle(centerX, centerY, radius, color._address)

  // Draw a piece of a circle: DrawCircleSector(Vector2, float, float, float, int, Color) => void
  const _DrawCircleSector = mod.cwrap('DrawCircleSector', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCircleSector = (center, radius, startAngle, endAngle, segments, color) => _DrawCircleSector(center._address, radius, startAngle, endAngle, segments, color._address)

  // Draw circle sector outline: DrawCircleSectorLines(Vector2, float, float, float, int, Color) => void
  const _DrawCircleSectorLines = mod.cwrap('DrawCircleSectorLines', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCircleSectorLines = (center, radius, startAngle, endAngle, segments, color) => _DrawCircleSectorLines(center._address, radius, startAngle, endAngle, segments, color._address)

  // Draw a gradient-filled circle: DrawCircleGradient(int, int, float, Color, Color) => void
  const _DrawCircleGradient = mod.cwrap('DrawCircleGradient', 'pointer', ['number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawCircleGradient = (centerX, centerY, radius, inner, outer) => _DrawCircleGradient(centerX, centerY, radius, inner._address, outer._address)

  // Draw a color-filled circle (Vector version): DrawCircleV(Vector2, float, Color) => void
  const _DrawCircleV = mod.cwrap('DrawCircleV', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawCircleV = (center, radius, color) => _DrawCircleV(center._address, radius, color._address)

  // Draw circle outline: DrawCircleLines(int, int, float, Color) => void
  const _DrawCircleLines = mod.cwrap('DrawCircleLines', 'pointer', ['number', 'number', 'number', 'pointer'])
  raylib.DrawCircleLines = (centerX, centerY, radius, color) => _DrawCircleLines(centerX, centerY, radius, color._address)

  // Draw circle outline (Vector version): DrawCircleLinesV(Vector2, float, Color) => void
  const _DrawCircleLinesV = mod.cwrap('DrawCircleLinesV', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawCircleLinesV = (center, radius, color) => _DrawCircleLinesV(center._address, radius, color._address)

  // Draw ellipse: DrawEllipse(int, int, float, float, Color) => void
  const _DrawEllipse = mod.cwrap('DrawEllipse', 'pointer', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawEllipse = (centerX, centerY, radiusH, radiusV, color) => _DrawEllipse(centerX, centerY, radiusH, radiusV, color._address)

  // Draw ellipse outline: DrawEllipseLines(int, int, float, float, Color) => void
  const _DrawEllipseLines = mod.cwrap('DrawEllipseLines', 'pointer', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawEllipseLines = (centerX, centerY, radiusH, radiusV, color) => _DrawEllipseLines(centerX, centerY, radiusH, radiusV, color._address)

  // Draw ring: DrawRing(Vector2, float, float, float, float, int, Color) => void
  const _DrawRing = mod.cwrap('DrawRing', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRing = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => _DrawRing(center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address)

  // Draw ring outline: DrawRingLines(Vector2, float, float, float, float, int, Color) => void
  const _DrawRingLines = mod.cwrap('DrawRingLines', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRingLines = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => _DrawRingLines(center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address)

  // Draw a color-filled rectangle: DrawRectangle(int, int, int, int, Color) => void
  const _DrawRectangle = mod.cwrap('DrawRectangle', 'pointer', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangle = (posX, posY, width, height, color) => _DrawRectangle(posX, posY, width, height, color._address)

  // Draw a color-filled rectangle (Vector version): DrawRectangleV(Vector2, Vector2, Color) => void
  const _DrawRectangleV = mod.cwrap('DrawRectangleV', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawRectangleV = (position, size, color) => _DrawRectangleV(position._address, size._address, color._address)

  // Draw a color-filled rectangle: DrawRectangleRec(Rectangle, Color) => void
  const _DrawRectangleRec = mod.cwrap('DrawRectangleRec', 'pointer', ['pointer', 'pointer'])
  raylib.DrawRectangleRec = (rec, color) => _DrawRectangleRec(rec._address, color._address)

  // Draw a color-filled rectangle with pro parameters: DrawRectanglePro(Rectangle, Vector2, float, Color) => void
  const _DrawRectanglePro = mod.cwrap('DrawRectanglePro', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawRectanglePro = (rec, origin, rotation, color) => _DrawRectanglePro(rec._address, origin._address, rotation, color._address)

  // Draw a vertical-gradient-filled rectangle: DrawRectangleGradientV(int, int, int, int, Color, Color) => void
  const _DrawRectangleGradientV = mod.cwrap('DrawRectangleGradientV', 'pointer', ['number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientV = (posX, posY, width, height, top, bottom) => _DrawRectangleGradientV(posX, posY, width, height, top._address, bottom._address)

  // Draw a horizontal-gradient-filled rectangle: DrawRectangleGradientH(int, int, int, int, Color, Color) => void
  const _DrawRectangleGradientH = mod.cwrap('DrawRectangleGradientH', 'pointer', ['number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientH = (posX, posY, width, height, left, right) => _DrawRectangleGradientH(posX, posY, width, height, left._address, right._address)

  // Draw a gradient-filled rectangle with custom vertex colors: DrawRectangleGradientEx(Rectangle, Color, Color, Color, Color) => void
  const _DrawRectangleGradientEx = mod.cwrap('DrawRectangleGradientEx', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientEx = (rec, topLeft, bottomLeft, topRight, bottomRight) => _DrawRectangleGradientEx(rec._address, topLeft._address, bottomLeft._address, topRight._address, bottomRight._address)

  // Draw rectangle outline: DrawRectangleLines(int, int, int, int, Color) => void
  const _DrawRectangleLines = mod.cwrap('DrawRectangleLines', 'pointer', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangleLines = (posX, posY, width, height, color) => _DrawRectangleLines(posX, posY, width, height, color._address)

  // Draw rectangle outline with extended parameters: DrawRectangleLinesEx(Rectangle, float, Color) => void
  const _DrawRectangleLinesEx = mod.cwrap('DrawRectangleLinesEx', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawRectangleLinesEx = (rec, lineThick, color) => _DrawRectangleLinesEx(rec._address, lineThick, color._address)

  // Draw rectangle with rounded edges: DrawRectangleRounded(Rectangle, float, int, Color) => void
  const _DrawRectangleRounded = mod.cwrap('DrawRectangleRounded', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawRectangleRounded = (rec, roundness, segments, color) => _DrawRectangleRounded(rec._address, roundness, segments, color._address)

  // Draw rectangle lines with rounded edges: DrawRectangleRoundedLines(Rectangle, float, int, Color) => void
  const _DrawRectangleRoundedLines = mod.cwrap('DrawRectangleRoundedLines', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawRectangleRoundedLines = (rec, roundness, segments, color) => _DrawRectangleRoundedLines(rec._address, roundness, segments, color._address)

  // Draw rectangle with rounded edges outline: DrawRectangleRoundedLinesEx(Rectangle, float, int, float, Color) => void
  const _DrawRectangleRoundedLinesEx = mod.cwrap('DrawRectangleRoundedLinesEx', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangleRoundedLinesEx = (rec, roundness, segments, lineThick, color) => _DrawRectangleRoundedLinesEx(rec._address, roundness, segments, lineThick, color._address)

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle(Vector2, Vector2, Vector2, Color) => void
  const _DrawTriangle = mod.cwrap('DrawTriangle', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangle = (v1, v2, v3, color) => _DrawTriangle(v1._address, v2._address, v3._address, color._address)

  // Draw triangle outline (vertex in counter-clockwise order!): DrawTriangleLines(Vector2, Vector2, Vector2, Color) => void
  const _DrawTriangleLines = mod.cwrap('DrawTriangleLines', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangleLines = (v1, v2, v3, color) => _DrawTriangleLines(v1._address, v2._address, v3._address, color._address)

  // Draw a triangle fan defined by points (first vertex is the center): DrawTriangleFan(const Vector2 *, int, Color) => void
  const _DrawTriangleFan = mod.cwrap('DrawTriangleFan', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleFan = (points, pointCount, color) => _DrawTriangleFan(points._address, pointCount, color._address)

  // Draw a triangle strip defined by points: DrawTriangleStrip(const Vector2 *, int, Color) => void
  const _DrawTriangleStrip = mod.cwrap('DrawTriangleStrip', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleStrip = (points, pointCount, color) => _DrawTriangleStrip(points._address, pointCount, color._address)

  // Draw a regular polygon (Vector version): DrawPoly(Vector2, int, float, float, Color) => void
  const _DrawPoly = mod.cwrap('DrawPoly', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPoly = (center, sides, radius, rotation, color) => _DrawPoly(center._address, sides, radius, rotation, color._address)

  // Draw a polygon outline of n sides: DrawPolyLines(Vector2, int, float, float, Color) => void
  const _DrawPolyLines = mod.cwrap('DrawPolyLines', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPolyLines = (center, sides, radius, rotation, color) => _DrawPolyLines(center._address, sides, radius, rotation, color._address)

  // Draw a polygon outline of n sides with extended parameters: DrawPolyLinesEx(Vector2, int, float, float, float, Color) => void
  const _DrawPolyLinesEx = mod.cwrap('DrawPolyLinesEx', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPolyLinesEx = (center, sides, radius, rotation, lineThick, color) => _DrawPolyLinesEx(center._address, sides, radius, rotation, lineThick, color._address)

  // Draw spline: Linear, minimum 2 points: DrawSplineLinear(const Vector2 *, int, float, Color) => void
  const _DrawSplineLinear = mod.cwrap('DrawSplineLinear', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawSplineLinear = (points, pointCount, thick, color) => _DrawSplineLinear(points._address, pointCount, thick, color._address)

  // Draw spline: B-Spline, minimum 4 points: DrawSplineBasis(const Vector2 *, int, float, Color) => void
  const _DrawSplineBasis = mod.cwrap('DrawSplineBasis', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawSplineBasis = (points, pointCount, thick, color) => _DrawSplineBasis(points._address, pointCount, thick, color._address)

  // Draw spline: Catmull-Rom, minimum 4 points: DrawSplineCatmullRom(const Vector2 *, int, float, Color) => void
  const _DrawSplineCatmullRom = mod.cwrap('DrawSplineCatmullRom', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawSplineCatmullRom = (points, pointCount, thick, color) => _DrawSplineCatmullRom(points._address, pointCount, thick, color._address)

  // Draw spline: Quadratic Bezier, minimum 3 points (1 control point): [p1, c2, p3, c4...]: DrawSplineBezierQuadratic(const Vector2 *, int, float, Color) => void
  const _DrawSplineBezierQuadratic = mod.cwrap('DrawSplineBezierQuadratic', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawSplineBezierQuadratic = (points, pointCount, thick, color) => _DrawSplineBezierQuadratic(points._address, pointCount, thick, color._address)

  // Draw spline: Cubic Bezier, minimum 4 points (2 control points): [p1, c2, c3, p4, c5, c6...]: DrawSplineBezierCubic(const Vector2 *, int, float, Color) => void
  const _DrawSplineBezierCubic = mod.cwrap('DrawSplineBezierCubic', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawSplineBezierCubic = (points, pointCount, thick, color) => _DrawSplineBezierCubic(points._address, pointCount, thick, color._address)

  // Draw spline segment: Linear, 2 points: DrawSplineSegmentLinear(Vector2, Vector2, float, Color) => void
  const _DrawSplineSegmentLinear = mod.cwrap('DrawSplineSegmentLinear', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawSplineSegmentLinear = (p1, p2, thick, color) => _DrawSplineSegmentLinear(p1._address, p2._address, thick, color._address)

  // Draw spline segment: B-Spline, 4 points: DrawSplineSegmentBasis(Vector2, Vector2, Vector2, Vector2, float, Color) => void
  const _DrawSplineSegmentBasis = mod.cwrap('DrawSplineSegmentBasis', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawSplineSegmentBasis = (p1, p2, p3, p4, thick, color) => _DrawSplineSegmentBasis(p1._address, p2._address, p3._address, p4._address, thick, color._address)

  // Draw spline segment: Catmull-Rom, 4 points: DrawSplineSegmentCatmullRom(Vector2, Vector2, Vector2, Vector2, float, Color) => void
  const _DrawSplineSegmentCatmullRom = mod.cwrap('DrawSplineSegmentCatmullRom', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawSplineSegmentCatmullRom = (p1, p2, p3, p4, thick, color) => _DrawSplineSegmentCatmullRom(p1._address, p2._address, p3._address, p4._address, thick, color._address)

  // Draw spline segment: Quadratic Bezier, 2 points, 1 control point: DrawSplineSegmentBezierQuadratic(Vector2, Vector2, Vector2, float, Color) => void
  const _DrawSplineSegmentBezierQuadratic = mod.cwrap('DrawSplineSegmentBezierQuadratic', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawSplineSegmentBezierQuadratic = (p1, c2, p3, thick, color) => _DrawSplineSegmentBezierQuadratic(p1._address, c2._address, p3._address, thick, color._address)

  // Draw spline segment: Cubic Bezier, 2 points, 2 control points: DrawSplineSegmentBezierCubic(Vector2, Vector2, Vector2, Vector2, float, Color) => void
  const _DrawSplineSegmentBezierCubic = mod.cwrap('DrawSplineSegmentBezierCubic', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawSplineSegmentBezierCubic = (p1, c2, c3, p4, thick, color) => _DrawSplineSegmentBezierCubic(p1._address, c2._address, c3._address, p4._address, thick, color._address)

  // Get (evaluate) spline point: Linear: GetSplinePointLinear(Vector2, Vector2, float) => Vector2
  const _GetSplinePointLinear = mod.cwrap('GetSplinePointLinear', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.GetSplinePointLinear = (startPos, endPos, t) => {
    const _ret = new raylib.Vector2()
    _GetSplinePointLinear(_ret._address, startPos._address, endPos._address, t)
    return _ret
  }

  // Get (evaluate) spline point: B-Spline: GetSplinePointBasis(Vector2, Vector2, Vector2, Vector2, float) => Vector2
  const _GetSplinePointBasis = mod.cwrap('GetSplinePointBasis', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'number'])
  raylib.GetSplinePointBasis = (p1, p2, p3, p4, t) => {
    const _ret = new raylib.Vector2()
    _GetSplinePointBasis(_ret._address, p1._address, p2._address, p3._address, p4._address, t)
    return _ret
  }

  // Get (evaluate) spline point: Catmull-Rom: GetSplinePointCatmullRom(Vector2, Vector2, Vector2, Vector2, float) => Vector2
  const _GetSplinePointCatmullRom = mod.cwrap('GetSplinePointCatmullRom', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'number'])
  raylib.GetSplinePointCatmullRom = (p1, p2, p3, p4, t) => {
    const _ret = new raylib.Vector2()
    _GetSplinePointCatmullRom(_ret._address, p1._address, p2._address, p3._address, p4._address, t)
    return _ret
  }

  // Get (evaluate) spline point: Quadratic Bezier: GetSplinePointBezierQuad(Vector2, Vector2, Vector2, float) => Vector2
  const _GetSplinePointBezierQuad = mod.cwrap('GetSplinePointBezierQuad', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'number'])
  raylib.GetSplinePointBezierQuad = (p1, c2, p3, t) => {
    const _ret = new raylib.Vector2()
    _GetSplinePointBezierQuad(_ret._address, p1._address, c2._address, p3._address, t)
    return _ret
  }

  // Get (evaluate) spline point: Cubic Bezier: GetSplinePointBezierCubic(Vector2, Vector2, Vector2, Vector2, float) => Vector2
  const _GetSplinePointBezierCubic = mod.cwrap('GetSplinePointBezierCubic', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'number'])
  raylib.GetSplinePointBezierCubic = (p1, c2, c3, p4, t) => {
    const _ret = new raylib.Vector2()
    _GetSplinePointBezierCubic(_ret._address, p1._address, c2._address, c3._address, p4._address, t)
    return _ret
  }

  // Check collision between two rectangles: CheckCollisionRecs(Rectangle, Rectangle) => bool
  const _CheckCollisionRecs = mod.cwrap('CheckCollisionRecs', 'boolean', ['pointer', 'pointer'])
  raylib.CheckCollisionRecs = (rec1, rec2) => _CheckCollisionRecs(rec1._address, rec2._address)

  // Check collision between two circles: CheckCollisionCircles(Vector2, float, Vector2, float) => bool
  const _CheckCollisionCircles = mod.cwrap('CheckCollisionCircles', 'boolean', ['pointer', 'number', 'pointer', 'number'])
  raylib.CheckCollisionCircles = (center1, radius1, center2, radius2) => _CheckCollisionCircles(center1._address, radius1, center2._address, radius2)

  // Check collision between circle and rectangle: CheckCollisionCircleRec(Vector2, float, Rectangle) => bool
  const _CheckCollisionCircleRec = mod.cwrap('CheckCollisionCircleRec', 'boolean', ['pointer', 'number', 'pointer'])
  raylib.CheckCollisionCircleRec = (center, radius, rec) => _CheckCollisionCircleRec(center._address, radius, rec._address)

  // Check if circle collides with a line created betweeen two points [p1] and [p2]: CheckCollisionCircleLine(Vector2, float, Vector2, Vector2) => bool
  const _CheckCollisionCircleLine = mod.cwrap('CheckCollisionCircleLine', 'boolean', ['pointer', 'number', 'pointer', 'pointer'])
  raylib.CheckCollisionCircleLine = (center, radius, p1, p2) => _CheckCollisionCircleLine(center._address, radius, p1._address, p2._address)

  // Check if point is inside rectangle: CheckCollisionPointRec(Vector2, Rectangle) => bool
  const _CheckCollisionPointRec = mod.cwrap('CheckCollisionPointRec', 'boolean', ['pointer', 'pointer'])
  raylib.CheckCollisionPointRec = (point, rec) => _CheckCollisionPointRec(point._address, rec._address)

  // Check if point is inside circle: CheckCollisionPointCircle(Vector2, Vector2, float) => bool
  const _CheckCollisionPointCircle = mod.cwrap('CheckCollisionPointCircle', 'boolean', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointCircle = (point, center, radius) => _CheckCollisionPointCircle(point._address, center._address, radius)

  // Check if point is inside a triangle: CheckCollisionPointTriangle(Vector2, Vector2, Vector2, Vector2) => bool
  const _CheckCollisionPointTriangle = mod.cwrap('CheckCollisionPointTriangle', 'boolean', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.CheckCollisionPointTriangle = (point, p1, p2, p3) => _CheckCollisionPointTriangle(point._address, p1._address, p2._address, p3._address)

  // Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]: CheckCollisionPointLine(Vector2, Vector2, Vector2, int) => bool
  const _CheckCollisionPointLine = mod.cwrap('CheckCollisionPointLine', 'boolean', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointLine = (point, p1, p2, threshold) => _CheckCollisionPointLine(point._address, p1._address, p2._address, threshold)

  // Check if point is within a polygon described by array of vertices: CheckCollisionPointPoly(Vector2, const Vector2 *, int) => bool
  const _CheckCollisionPointPoly = mod.cwrap('CheckCollisionPointPoly', 'boolean', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointPoly = (point, points, pointCount) => _CheckCollisionPointPoly(point._address, points._address, pointCount)

  // Check the collision between two lines defined by two points each, returns collision point by reference: CheckCollisionLines(Vector2, Vector2, Vector2, Vector2, Vector2 *) => bool
  const _CheckCollisionLines = mod.cwrap('CheckCollisionLines', 'boolean', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.CheckCollisionLines = (startPos1, endPos1, startPos2, endPos2, collisionPoint) => _CheckCollisionLines(startPos1._address, endPos1._address, startPos2._address, endPos2._address, collisionPoint._address)

  // Get collision rectangle for two rectangles collision: GetCollisionRec(Rectangle, Rectangle) => Rectangle
  const _GetCollisionRec = mod.cwrap('GetCollisionRec', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetCollisionRec = (rec1, rec2) => {
    const _ret = new raylib.Rectangle()
    _GetCollisionRec(_ret._address, rec1._address, rec2._address)
    return _ret
  }

  // Load image from file into CPU memory (RAM): LoadImage(const char *) => Image
  const _LoadImage = mod.cwrap('LoadImage', 'void', ['pointer', 'string'])
  raylib.LoadImage = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Image()
    _LoadImage(_ret._address, fileName)
    return _ret
  }

  // Load image from RAW file data: LoadImageRaw(const char *, int, int, int, int) => Image
  const _LoadImageRaw = mod.cwrap('LoadImageRaw', 'void', ['pointer', 'string', 'number', 'number', 'number', 'number'])
  raylib.LoadImageRaw = async (fileName, width, height, format, headerSize, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Image()
    _LoadImageRaw(_ret._address, fileName, width, height, format, headerSize)
    return _ret
  }

  // Load image sequence from file (frames appended to image.data): LoadImageAnim(const char *, int *) => Image
  const _LoadImageAnim = mod.cwrap('LoadImageAnim', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadImageAnim = async (fileName, frames, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Image()
    _LoadImageAnim(_ret._address, fileName, frames._address)
    return _ret
  }

  // Load image sequence from memory buffer: LoadImageAnimFromMemory(const char *, const unsigned char *, int, int *) => Image
  const _LoadImageAnimFromMemory = mod.cwrap('LoadImageAnimFromMemory', 'void', ['pointer', 'string', 'pointer', 'number', 'pointer'])
  raylib.LoadImageAnimFromMemory = (fileType, fileData, dataSize, frames) => {
    const _ret = new raylib.Image()
    _LoadImageAnimFromMemory(_ret._address, fileType, fileData._address, dataSize, frames._address)
    return _ret
  }

  // Load image from memory buffer, fileType refers to extension: i.e. '.png': LoadImageFromMemory(const char *, const unsigned char *, int) => Image
  const _LoadImageFromMemory = mod.cwrap('LoadImageFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadImageFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Image()
    _LoadImageFromMemory(_ret._address, fileType, fileData._address, dataSize)
    return _ret
  }

  // Load image from GPU texture data: LoadImageFromTexture(Texture2D) => Image
  const _LoadImageFromTexture = mod.cwrap('LoadImageFromTexture', 'void', ['pointer', 'pointer'])
  raylib.LoadImageFromTexture = (texture) => {
    const _ret = new raylib.Image()
    _LoadImageFromTexture(_ret._address, texture._address)
    return _ret
  }

  // Load image from screen buffer and (screenshot): LoadImageFromScreen() => Image
  const _LoadImageFromScreen = mod.cwrap('LoadImageFromScreen', 'void', ['pointer'])
  raylib.LoadImageFromScreen = () => {
    const _ret = new raylib.Image()
    _LoadImageFromScreen(_ret._address)
    return _ret
  }

  // Check if an image is valid (data and parameters): IsImageValid(Image) => bool
  const _IsImageValid = mod.cwrap('IsImageValid', 'boolean', ['pointer'])
  raylib.IsImageValid = (image) => _IsImageValid(image._address)

  // Unload image from CPU memory (RAM): UnloadImage(Image) => void
  const _UnloadImage = mod.cwrap('UnloadImage', 'pointer', ['pointer'])
  raylib.UnloadImage = (image) => _UnloadImage(image._address)

  // Export image data to file, returns true on success: ExportImage(Image, const char *) => bool
  const _ExportImage = mod.cwrap('ExportImage', 'boolean', ['pointer', 'string'])
  raylib.ExportImage = (image, fileName) => _ExportImage(image._address, fileName)

  // Export image to memory buffer: ExportImageToMemory(Image, const char *, int *) => unsigned char *
  const _ExportImageToMemory = mod.cwrap('ExportImageToMemory', 'pointer', ['pointer', 'string', 'pointer'])
  raylib.ExportImageToMemory = (image, fileType, fileSize) => _ExportImageToMemory(image._address, fileType, fileSize._address)

  // Export image as code file defining an array of bytes, returns true on success: ExportImageAsCode(Image, const char *) => bool
  const _ExportImageAsCode = mod.cwrap('ExportImageAsCode', 'boolean', ['pointer', 'string'])
  raylib.ExportImageAsCode = (image, fileName) => _ExportImageAsCode(image._address, fileName)

  // Generate image: plain color: GenImageColor(int, int, Color) => Image
  const _GenImageColor = mod.cwrap('GenImageColor', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.GenImageColor = (width, height, color) => {
    const _ret = new raylib.Image()
    _GenImageColor(_ret._address, width, height, color._address)
    return _ret
  }

  // Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient: GenImageGradientLinear(int, int, int, Color, Color) => Image
  const _GenImageGradientLinear = mod.cwrap('GenImageGradientLinear', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientLinear = (width, height, direction, start, end) => {
    const _ret = new raylib.Image()
    _GenImageGradientLinear(_ret._address, width, height, direction, start._address, end._address)
    return _ret
  }

  // Generate image: radial gradient: GenImageGradientRadial(int, int, float, Color, Color) => Image
  const _GenImageGradientRadial = mod.cwrap('GenImageGradientRadial', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientRadial = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    _GenImageGradientRadial(_ret._address, width, height, density, inner._address, outer._address)
    return _ret
  }

  // Generate image: square gradient: GenImageGradientSquare(int, int, float, Color, Color) => Image
  const _GenImageGradientSquare = mod.cwrap('GenImageGradientSquare', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientSquare = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    _GenImageGradientSquare(_ret._address, width, height, density, inner._address, outer._address)
    return _ret
  }

  // Generate image: checked: GenImageChecked(int, int, int, int, Color, Color) => Image
  const _GenImageChecked = mod.cwrap('GenImageChecked', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageChecked = (width, height, checksX, checksY, col1, col2) => {
    const _ret = new raylib.Image()
    _GenImageChecked(_ret._address, width, height, checksX, checksY, col1._address, col2._address)
    return _ret
  }

  // Generate image: white noise: GenImageWhiteNoise(int, int, float) => Image
  const _GenImageWhiteNoise = mod.cwrap('GenImageWhiteNoise', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenImageWhiteNoise = (width, height, factor) => {
    const _ret = new raylib.Image()
    _GenImageWhiteNoise(_ret._address, width, height, factor)
    return _ret
  }

  // Generate image: perlin noise: GenImagePerlinNoise(int, int, int, int, float) => Image
  const _GenImagePerlinNoise = mod.cwrap('GenImagePerlinNoise', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number'])
  raylib.GenImagePerlinNoise = (width, height, offsetX, offsetY, scale) => {
    const _ret = new raylib.Image()
    _GenImagePerlinNoise(_ret._address, width, height, offsetX, offsetY, scale)
    return _ret
  }

  // Generate image: cellular algorithm, bigger tileSize means bigger cells: GenImageCellular(int, int, int) => Image
  const _GenImageCellular = mod.cwrap('GenImageCellular', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenImageCellular = (width, height, tileSize) => {
    const _ret = new raylib.Image()
    _GenImageCellular(_ret._address, width, height, tileSize)
    return _ret
  }

  // Generate image: grayscale image from text data: GenImageText(int, int, const char *) => Image
  const _GenImageText = mod.cwrap('GenImageText', 'void', ['pointer', 'number', 'number', 'string'])
  raylib.GenImageText = (width, height, text) => {
    const _ret = new raylib.Image()
    _GenImageText(_ret._address, width, height, text)
    return _ret
  }

  // Create an image duplicate (useful for transformations): ImageCopy(Image) => Image
  const _ImageCopy = mod.cwrap('ImageCopy', 'void', ['pointer', 'pointer'])
  raylib.ImageCopy = (image) => {
    const _ret = new raylib.Image()
    _ImageCopy(_ret._address, image._address)
    return _ret
  }

  // Create an image from another image piece: ImageFromImage(Image, Rectangle) => Image
  const _ImageFromImage = mod.cwrap('ImageFromImage', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageFromImage = (image, rec) => {
    const _ret = new raylib.Image()
    _ImageFromImage(_ret._address, image._address, rec._address)
    return _ret
  }

  // Create an image from a selected channel of another image (GRAYSCALE): ImageFromChannel(Image, int) => Image
  const _ImageFromChannel = mod.cwrap('ImageFromChannel', 'void', ['pointer', 'pointer', 'number'])
  raylib.ImageFromChannel = (image, selectedChannel) => {
    const _ret = new raylib.Image()
    _ImageFromChannel(_ret._address, image._address, selectedChannel)
    return _ret
  }

  // Create an image from text (default font): ImageText(const char *, int, Color) => Image
  const _ImageText = mod.cwrap('ImageText', 'void', ['pointer', 'string', 'number', 'pointer'])
  raylib.ImageText = (text, fontSize, color) => {
    const _ret = new raylib.Image()
    _ImageText(_ret._address, text, fontSize, color._address)
    return _ret
  }

  // Create an image from text (custom sprite font): ImageTextEx(Font, const char *, float, float, Color) => Image
  const _ImageTextEx = mod.cwrap('ImageTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number', 'pointer'])
  raylib.ImageTextEx = (font, text, fontSize, spacing, tint) => {
    const _ret = new raylib.Image()
    _ImageTextEx(_ret._address, font._address, text, fontSize, spacing, tint._address)
    return _ret
  }

  // Convert image data to desired format: ImageFormat(Image *, int) => void
  const _ImageFormat = mod.cwrap('ImageFormat', 'pointer', ['pointer', 'number'])
  raylib.ImageFormat = (image, newFormat) => _ImageFormat(image._address, newFormat)

  // Convert image to POT (power-of-two): ImageToPOT(Image *, Color) => void
  const _ImageToPOT = mod.cwrap('ImageToPOT', 'pointer', ['pointer', 'pointer'])
  raylib.ImageToPOT = (image, fill) => _ImageToPOT(image._address, fill._address)

  // Crop an image to a defined rectangle: ImageCrop(Image *, Rectangle) => void
  const _ImageCrop = mod.cwrap('ImageCrop', 'pointer', ['pointer', 'pointer'])
  raylib.ImageCrop = (image, crop) => _ImageCrop(image._address, crop._address)

  // Crop image depending on alpha value: ImageAlphaCrop(Image *, float) => void
  const _ImageAlphaCrop = mod.cwrap('ImageAlphaCrop', 'pointer', ['pointer', 'number'])
  raylib.ImageAlphaCrop = (image, threshold) => _ImageAlphaCrop(image._address, threshold)

  // Clear alpha channel to desired color: ImageAlphaClear(Image *, Color, float) => void
  const _ImageAlphaClear = mod.cwrap('ImageAlphaClear', 'pointer', ['pointer', 'pointer', 'number'])
  raylib.ImageAlphaClear = (image, color, threshold) => _ImageAlphaClear(image._address, color._address, threshold)

  // Apply alpha mask to image: ImageAlphaMask(Image *, Image) => void
  const _ImageAlphaMask = mod.cwrap('ImageAlphaMask', 'pointer', ['pointer', 'pointer'])
  raylib.ImageAlphaMask = (image, alphaMask) => _ImageAlphaMask(image._address, alphaMask._address)

  // Premultiply alpha channel: ImageAlphaPremultiply(Image *) => void
  const _ImageAlphaPremultiply = mod.cwrap('ImageAlphaPremultiply', 'pointer', ['pointer'])
  raylib.ImageAlphaPremultiply = (image) => _ImageAlphaPremultiply(image._address)

  // Apply Gaussian blur using a box blur approximation: ImageBlurGaussian(Image *, int) => void
  const _ImageBlurGaussian = mod.cwrap('ImageBlurGaussian', 'pointer', ['pointer', 'number'])
  raylib.ImageBlurGaussian = (image, blurSize) => _ImageBlurGaussian(image._address, blurSize)

  // Apply custom square convolution kernel to image: ImageKernelConvolution(Image *, const float *, int) => void
  const _ImageKernelConvolution = mod.cwrap('ImageKernelConvolution', 'pointer', ['pointer', 'pointer', 'number'])
  raylib.ImageKernelConvolution = (image, kernel, kernelSize) => _ImageKernelConvolution(image._address, kernel._address, kernelSize)

  // Resize image (Bicubic scaling algorithm): ImageResize(Image *, int, int) => void
  const _ImageResize = mod.cwrap('ImageResize', 'pointer', ['pointer', 'number', 'number'])
  raylib.ImageResize = (image, newWidth, newHeight) => _ImageResize(image._address, newWidth, newHeight)

  // Resize image (Nearest-Neighbor scaling algorithm): ImageResizeNN(Image *, int, int) => void
  const _ImageResizeNN = mod.cwrap('ImageResizeNN', 'pointer', ['pointer', 'number', 'number'])
  raylib.ImageResizeNN = (image, newWidth, newHeight) => _ImageResizeNN(image._address, newWidth, newHeight)

  // Resize canvas and fill with color: ImageResizeCanvas(Image *, int, int, int, int, Color) => void
  const _ImageResizeCanvas = mod.cwrap('ImageResizeCanvas', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageResizeCanvas = (image, newWidth, newHeight, offsetX, offsetY, fill) => _ImageResizeCanvas(image._address, newWidth, newHeight, offsetX, offsetY, fill._address)

  // Compute all mipmap levels for a provided image: ImageMipmaps(Image *) => void
  const _ImageMipmaps = mod.cwrap('ImageMipmaps', 'pointer', ['pointer'])
  raylib.ImageMipmaps = (image) => _ImageMipmaps(image._address)

  // Dither image data to 16bpp or lower (Floyd-Steinberg dithering): ImageDither(Image *, int, int, int, int) => void
  const _ImageDither = mod.cwrap('ImageDither', 'pointer', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.ImageDither = (image, rBpp, gBpp, bBpp, aBpp) => _ImageDither(image._address, rBpp, gBpp, bBpp, aBpp)

  // Flip image vertically: ImageFlipVertical(Image *) => void
  const _ImageFlipVertical = mod.cwrap('ImageFlipVertical', 'pointer', ['pointer'])
  raylib.ImageFlipVertical = (image) => _ImageFlipVertical(image._address)

  // Flip image horizontally: ImageFlipHorizontal(Image *) => void
  const _ImageFlipHorizontal = mod.cwrap('ImageFlipHorizontal', 'pointer', ['pointer'])
  raylib.ImageFlipHorizontal = (image) => _ImageFlipHorizontal(image._address)

  // Rotate image by input angle in degrees (-359 to 359): ImageRotate(Image *, int) => void
  const _ImageRotate = mod.cwrap('ImageRotate', 'pointer', ['pointer', 'number'])
  raylib.ImageRotate = (image, degrees) => _ImageRotate(image._address, degrees)

  // Rotate image clockwise 90deg: ImageRotateCW(Image *) => void
  const _ImageRotateCW = mod.cwrap('ImageRotateCW', 'pointer', ['pointer'])
  raylib.ImageRotateCW = (image) => _ImageRotateCW(image._address)

  // Rotate image counter-clockwise 90deg: ImageRotateCCW(Image *) => void
  const _ImageRotateCCW = mod.cwrap('ImageRotateCCW', 'pointer', ['pointer'])
  raylib.ImageRotateCCW = (image) => _ImageRotateCCW(image._address)

  // Modify image color: tint: ImageColorTint(Image *, Color) => void
  const _ImageColorTint = mod.cwrap('ImageColorTint', 'pointer', ['pointer', 'pointer'])
  raylib.ImageColorTint = (image, color) => _ImageColorTint(image._address, color._address)

  // Modify image color: invert: ImageColorInvert(Image *) => void
  const _ImageColorInvert = mod.cwrap('ImageColorInvert', 'pointer', ['pointer'])
  raylib.ImageColorInvert = (image) => _ImageColorInvert(image._address)

  // Modify image color: grayscale: ImageColorGrayscale(Image *) => void
  const _ImageColorGrayscale = mod.cwrap('ImageColorGrayscale', 'pointer', ['pointer'])
  raylib.ImageColorGrayscale = (image) => _ImageColorGrayscale(image._address)

  // Modify image color: contrast (-100 to 100): ImageColorContrast(Image *, float) => void
  const _ImageColorContrast = mod.cwrap('ImageColorContrast', 'pointer', ['pointer', 'number'])
  raylib.ImageColorContrast = (image, contrast) => _ImageColorContrast(image._address, contrast)

  // Modify image color: brightness (-255 to 255): ImageColorBrightness(Image *, int) => void
  const _ImageColorBrightness = mod.cwrap('ImageColorBrightness', 'pointer', ['pointer', 'number'])
  raylib.ImageColorBrightness = (image, brightness) => _ImageColorBrightness(image._address, brightness)

  // Modify image color: replace color: ImageColorReplace(Image *, Color, Color) => void
  const _ImageColorReplace = mod.cwrap('ImageColorReplace', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.ImageColorReplace = (image, color, replace) => _ImageColorReplace(image._address, color._address, replace._address)

  // Load color data from image as a Color array (RGBA - 32bit): LoadImageColors(Image) => Color *
  const _LoadImageColors = mod.cwrap('LoadImageColors', 'void', ['pointer', 'pointer'])
  raylib.LoadImageColors = (image) => {
    const _ret = new raylib.Color()
    _LoadImageColors(_ret._address, image._address)
    return _ret
  }

  // Load colors palette from image as a Color array (RGBA - 32bit): LoadImagePalette(Image, int, int *) => Color *
  const _LoadImagePalette = mod.cwrap('LoadImagePalette', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.LoadImagePalette = (image, maxPaletteSize, colorCount) => {
    const _ret = new raylib.Color()
    _LoadImagePalette(_ret._address, image._address, maxPaletteSize, colorCount._address)
    return _ret
  }

  // Unload color data loaded with LoadImageColors(): UnloadImageColors(Color *) => void
  const _UnloadImageColors = mod.cwrap('UnloadImageColors', 'pointer', ['pointer'])
  raylib.UnloadImageColors = (colors) => _UnloadImageColors(colors._address)

  // Unload colors palette loaded with LoadImagePalette(): UnloadImagePalette(Color *) => void
  const _UnloadImagePalette = mod.cwrap('UnloadImagePalette', 'pointer', ['pointer'])
  raylib.UnloadImagePalette = (colors) => _UnloadImagePalette(colors._address)

  // Get image alpha border rectangle: GetImageAlphaBorder(Image, float) => Rectangle
  const _GetImageAlphaBorder = mod.cwrap('GetImageAlphaBorder', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetImageAlphaBorder = (image, threshold) => {
    const _ret = new raylib.Rectangle()
    _GetImageAlphaBorder(_ret._address, image._address, threshold)
    return _ret
  }

  // Get image pixel color at (x, y) position: GetImageColor(Image, int, int) => Color
  const _GetImageColor = mod.cwrap('GetImageColor', 'void', ['pointer', 'pointer', 'number', 'number'])
  raylib.GetImageColor = (image, x, y) => {
    const _ret = new raylib.Color()
    _GetImageColor(_ret._address, image._address, x, y)
    return _ret
  }

  // Clear image background with given color: ImageClearBackground(Image *, Color) => void
  const _ImageClearBackground = mod.cwrap('ImageClearBackground', 'pointer', ['pointer', 'pointer'])
  raylib.ImageClearBackground = (dst, color) => _ImageClearBackground(dst._address, color._address)

  // Draw pixel within an image: ImageDrawPixel(Image *, int, int, Color) => void
  const _ImageDrawPixel = mod.cwrap('ImageDrawPixel', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.ImageDrawPixel = (dst, posX, posY, color) => _ImageDrawPixel(dst._address, posX, posY, color._address)

  // Draw pixel within an image (Vector version): ImageDrawPixelV(Image *, Vector2, Color) => void
  const _ImageDrawPixelV = mod.cwrap('ImageDrawPixelV', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.ImageDrawPixelV = (dst, position, color) => _ImageDrawPixelV(dst._address, position._address, color._address)

  // Draw line within an image: ImageDrawLine(Image *, int, int, int, int, Color) => void
  const _ImageDrawLine = mod.cwrap('ImageDrawLine', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawLine = (dst, startPosX, startPosY, endPosX, endPosY, color) => _ImageDrawLine(dst._address, startPosX, startPosY, endPosX, endPosY, color._address)

  // Draw line within an image (Vector version): ImageDrawLineV(Image *, Vector2, Vector2, Color) => void
  const _ImageDrawLineV = mod.cwrap('ImageDrawLineV', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawLineV = (dst, start, end, color) => _ImageDrawLineV(dst._address, start._address, end._address, color._address)

  // Draw a line defining thickness within an image: ImageDrawLineEx(Image *, Vector2, Vector2, int, Color) => void
  const _ImageDrawLineEx = mod.cwrap('ImageDrawLineEx', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawLineEx = (dst, start, end, thick, color) => _ImageDrawLineEx(dst._address, start._address, end._address, thick, color._address)

  // Draw a filled circle within an image: ImageDrawCircle(Image *, int, int, int, Color) => void
  const _ImageDrawCircle = mod.cwrap('ImageDrawCircle', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawCircle = (dst, centerX, centerY, radius, color) => _ImageDrawCircle(dst._address, centerX, centerY, radius, color._address)

  // Draw a filled circle within an image (Vector version): ImageDrawCircleV(Image *, Vector2, int, Color) => void
  const _ImageDrawCircleV = mod.cwrap('ImageDrawCircleV', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawCircleV = (dst, center, radius, color) => _ImageDrawCircleV(dst._address, center._address, radius, color._address)

  // Draw circle outline within an image: ImageDrawCircleLines(Image *, int, int, int, Color) => void
  const _ImageDrawCircleLines = mod.cwrap('ImageDrawCircleLines', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawCircleLines = (dst, centerX, centerY, radius, color) => _ImageDrawCircleLines(dst._address, centerX, centerY, radius, color._address)

  // Draw circle outline within an image (Vector version): ImageDrawCircleLinesV(Image *, Vector2, int, Color) => void
  const _ImageDrawCircleLinesV = mod.cwrap('ImageDrawCircleLinesV', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawCircleLinesV = (dst, center, radius, color) => _ImageDrawCircleLinesV(dst._address, center._address, radius, color._address)

  // Draw rectangle within an image: ImageDrawRectangle(Image *, int, int, int, int, Color) => void
  const _ImageDrawRectangle = mod.cwrap('ImageDrawRectangle', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawRectangle = (dst, posX, posY, width, height, color) => _ImageDrawRectangle(dst._address, posX, posY, width, height, color._address)

  // Draw rectangle within an image (Vector version): ImageDrawRectangleV(Image *, Vector2, Vector2, Color) => void
  const _ImageDrawRectangleV = mod.cwrap('ImageDrawRectangleV', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawRectangleV = (dst, position, size, color) => _ImageDrawRectangleV(dst._address, position._address, size._address, color._address)

  // Draw rectangle within an image: ImageDrawRectangleRec(Image *, Rectangle, Color) => void
  const _ImageDrawRectangleRec = mod.cwrap('ImageDrawRectangleRec', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.ImageDrawRectangleRec = (dst, rec, color) => _ImageDrawRectangleRec(dst._address, rec._address, color._address)

  // Draw rectangle lines within an image: ImageDrawRectangleLines(Image *, Rectangle, int, Color) => void
  const _ImageDrawRectangleLines = mod.cwrap('ImageDrawRectangleLines', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawRectangleLines = (dst, rec, thick, color) => _ImageDrawRectangleLines(dst._address, rec._address, thick, color._address)

  // Draw triangle within an image: ImageDrawTriangle(Image *, Vector2, Vector2, Vector2, Color) => void
  const _ImageDrawTriangle = mod.cwrap('ImageDrawTriangle', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawTriangle = (dst, v1, v2, v3, color) => _ImageDrawTriangle(dst._address, v1._address, v2._address, v3._address, color._address)

  // Draw triangle with interpolated colors within an image: ImageDrawTriangleEx(Image *, Vector2, Vector2, Vector2, Color, Color, Color) => void
  const _ImageDrawTriangleEx = mod.cwrap('ImageDrawTriangleEx', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawTriangleEx = (dst, v1, v2, v3, c1, c2, c3) => _ImageDrawTriangleEx(dst._address, v1._address, v2._address, v3._address, c1._address, c2._address, c3._address)

  // Draw triangle outline within an image: ImageDrawTriangleLines(Image *, Vector2, Vector2, Vector2, Color) => void
  const _ImageDrawTriangleLines = mod.cwrap('ImageDrawTriangleLines', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawTriangleLines = (dst, v1, v2, v3, color) => _ImageDrawTriangleLines(dst._address, v1._address, v2._address, v3._address, color._address)

  // Draw a triangle fan defined by points within an image (first vertex is the center): ImageDrawTriangleFan(Image *, Vector2 *, int, Color) => void
  const _ImageDrawTriangleFan = mod.cwrap('ImageDrawTriangleFan', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawTriangleFan = (dst, points, pointCount, color) => _ImageDrawTriangleFan(dst._address, points._address, pointCount, color._address)

  // Draw a triangle strip defined by points within an image: ImageDrawTriangleStrip(Image *, Vector2 *, int, Color) => void
  const _ImageDrawTriangleStrip = mod.cwrap('ImageDrawTriangleStrip', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawTriangleStrip = (dst, points, pointCount, color) => _ImageDrawTriangleStrip(dst._address, points._address, pointCount, color._address)

  // Draw a source image within a destination image (tint applied to source): ImageDraw(Image *, Image, Rectangle, Rectangle, Color) => void
  const _ImageDraw = mod.cwrap('ImageDraw', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDraw = (dst, src, srcRec, dstRec, tint) => _ImageDraw(dst._address, src._address, srcRec._address, dstRec._address, tint._address)

  // Draw text (using default font) within an image (destination): ImageDrawText(Image *, const char *, int, int, int, Color) => void
  const _ImageDrawText = mod.cwrap('ImageDrawText', 'pointer', ['pointer', 'string', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawText = (dst, text, posX, posY, fontSize, color) => _ImageDrawText(dst._address, text, posX, posY, fontSize, color._address)

  // Draw text (custom sprite font) within an image (destination): ImageDrawTextEx(Image *, Font, const char *, Vector2, float, float, Color) => void
  const _ImageDrawTextEx = mod.cwrap('ImageDrawTextEx', 'pointer', ['pointer', 'pointer', 'string', 'pointer', 'number', 'number', 'pointer'])
  raylib.ImageDrawTextEx = (dst, font, text, position, fontSize, spacing, tint) => _ImageDrawTextEx(dst._address, font._address, text, position._address, fontSize, spacing, tint._address)

  // Load texture from file into GPU memory (VRAM): LoadTexture(const char *) => Texture2D
  const _LoadTexture = mod.cwrap('LoadTexture', 'void', ['pointer', 'string'])
  raylib.LoadTexture = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Texture2D()
    _LoadTexture(_ret._address, fileName)
    return _ret
  }

  // Load texture from image data: LoadTextureFromImage(Image) => Texture2D
  const _LoadTextureFromImage = mod.cwrap('LoadTextureFromImage', 'void', ['pointer', 'pointer'])
  raylib.LoadTextureFromImage = (image) => {
    const _ret = new raylib.Texture2D()
    _LoadTextureFromImage(_ret._address, image._address)
    return _ret
  }

  // Load cubemap from image, multiple image cubemap layouts supported: LoadTextureCubemap(Image, int) => TextureCubemap
  const _LoadTextureCubemap = mod.cwrap('LoadTextureCubemap', 'void', ['pointer', 'pointer', 'number'])
  raylib.LoadTextureCubemap = (image, layout) => {
    const _ret = new raylib.TextureCubemap()
    _LoadTextureCubemap(_ret._address, image._address, layout)
    return _ret
  }

  // Load texture for rendering (framebuffer): LoadRenderTexture(int, int) => RenderTexture2D
  const _LoadRenderTexture = mod.cwrap('LoadRenderTexture', 'void', ['pointer', 'number', 'number'])
  raylib.LoadRenderTexture = (width, height) => {
    const _ret = new raylib.RenderTexture2D()
    _LoadRenderTexture(_ret._address, width, height)
    return _ret
  }

  // Check if a texture is valid (loaded in GPU): IsTextureValid(Texture2D) => bool
  const _IsTextureValid = mod.cwrap('IsTextureValid', 'boolean', ['pointer'])
  raylib.IsTextureValid = (texture) => _IsTextureValid(texture._address)

  // Unload texture from GPU memory (VRAM): UnloadTexture(Texture2D) => void
  const _UnloadTexture = mod.cwrap('UnloadTexture', 'pointer', ['pointer'])
  raylib.UnloadTexture = (texture) => _UnloadTexture(texture._address)

  // Check if a render texture is valid (loaded in GPU): IsRenderTextureValid(RenderTexture2D) => bool
  const _IsRenderTextureValid = mod.cwrap('IsRenderTextureValid', 'boolean', ['pointer'])
  raylib.IsRenderTextureValid = (target) => _IsRenderTextureValid(target._address)

  // Unload render texture from GPU memory (VRAM): UnloadRenderTexture(RenderTexture2D) => void
  const _UnloadRenderTexture = mod.cwrap('UnloadRenderTexture', 'pointer', ['pointer'])
  raylib.UnloadRenderTexture = (target) => _UnloadRenderTexture(target._address)

  // Update GPU texture with new data: UpdateTexture(Texture2D, const void *) => void
  const _UpdateTexture = mod.cwrap('UpdateTexture', 'pointer', ['pointer', 'pointer'])
  raylib.UpdateTexture = (texture, pixels) => _UpdateTexture(texture._address, pixels._address)

  // Update GPU texture rectangle with new data: UpdateTextureRec(Texture2D, Rectangle, const void *) => void
  const _UpdateTextureRec = mod.cwrap('UpdateTextureRec', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.UpdateTextureRec = (texture, rec, pixels) => _UpdateTextureRec(texture._address, rec._address, pixels._address)

  // Generate GPU mipmaps for a texture: GenTextureMipmaps(Texture2D *) => void
  const _GenTextureMipmaps = mod.cwrap('GenTextureMipmaps', 'pointer', ['pointer'])
  raylib.GenTextureMipmaps = (texture) => _GenTextureMipmaps(texture._address)

  // Set texture scaling filter mode: SetTextureFilter(Texture2D, int) => void
  const _SetTextureFilter = mod.cwrap('SetTextureFilter', 'pointer', ['pointer', 'number'])
  raylib.SetTextureFilter = (texture, filter) => _SetTextureFilter(texture._address, filter)

  // Set texture wrapping mode: SetTextureWrap(Texture2D, int) => void
  const _SetTextureWrap = mod.cwrap('SetTextureWrap', 'pointer', ['pointer', 'number'])
  raylib.SetTextureWrap = (texture, wrap) => _SetTextureWrap(texture._address, wrap)

  // Draw a Texture2D: DrawTexture(Texture2D, int, int, Color) => void
  const _DrawTexture = mod.cwrap('DrawTexture', 'pointer', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawTexture = (texture, posX, posY, tint) => _DrawTexture(texture._address, posX, posY, tint._address)

  // Draw a Texture2D with position defined as Vector2: DrawTextureV(Texture2D, Vector2, Color) => void
  const _DrawTextureV = mod.cwrap('DrawTextureV', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawTextureV = (texture, position, tint) => _DrawTextureV(texture._address, position._address, tint._address)

  // Draw a Texture2D with extended parameters: DrawTextureEx(Texture2D, Vector2, float, float, Color) => void
  const _DrawTextureEx = mod.cwrap('DrawTextureEx', 'pointer', ['pointer', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextureEx = (texture, position, rotation, scale, tint) => _DrawTextureEx(texture._address, position._address, rotation, scale, tint._address)

  // Draw a part of a texture defined by a rectangle: DrawTextureRec(Texture2D, Rectangle, Vector2, Color) => void
  const _DrawTextureRec = mod.cwrap('DrawTextureRec', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTextureRec = (texture, source, position, tint) => _DrawTextureRec(texture._address, source._address, position._address, tint._address)

  // Draw a part of a texture defined by a rectangle with 'pro' parameters: DrawTexturePro(Texture2D, Rectangle, Rectangle, Vector2, float, Color) => void
  const _DrawTexturePro = mod.cwrap('DrawTexturePro', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawTexturePro = (texture, source, dest, origin, rotation, tint) => _DrawTexturePro(texture._address, source._address, dest._address, origin._address, rotation, tint._address)

  // Draws a texture (or part of it) that stretches or shrinks nicely: DrawTextureNPatch(Texture2D, NPatchInfo, Rectangle, Vector2, float, Color) => void
  const _DrawTextureNPatch = mod.cwrap('DrawTextureNPatch', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawTextureNPatch = (texture, nPatchInfo, dest, origin, rotation, tint) => _DrawTextureNPatch(texture._address, nPatchInfo._address, dest._address, origin._address, rotation, tint._address)

  // Check if two colors are equal: ColorIsEqual(Color, Color) => bool
  const _ColorIsEqual = mod.cwrap('ColorIsEqual', 'boolean', ['pointer', 'pointer'])
  raylib.ColorIsEqual = (col1, col2) => _ColorIsEqual(col1._address, col2._address)

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: Fade(Color, float) => Color
  const _Fade = mod.cwrap('Fade', 'void', ['pointer', 'pointer', 'number'])
  raylib.Fade = (color, alpha) => {
    const _ret = new raylib.Color()
    _Fade(_ret._address, color._address, alpha)
    return _ret
  }

  // Get hexadecimal value for a Color (0xRRGGBBAA): ColorToInt(Color) => int
  const _ColorToInt = mod.cwrap('ColorToInt', 'number', ['pointer'])
  raylib.ColorToInt = (color) => _ColorToInt(color._address)

  // Get Color normalized as float [0..1]: ColorNormalize(Color) => Vector4
  const _ColorNormalize = mod.cwrap('ColorNormalize', 'void', ['pointer', 'pointer'])
  raylib.ColorNormalize = (color) => {
    const _ret = new raylib.Vector4()
    _ColorNormalize(_ret._address, color._address)
    return _ret
  }

  // Get Color from normalized values [0..1]: ColorFromNormalized(Vector4) => Color
  const _ColorFromNormalized = mod.cwrap('ColorFromNormalized', 'void', ['pointer', 'pointer'])
  raylib.ColorFromNormalized = (normalized) => {
    const _ret = new raylib.Color()
    _ColorFromNormalized(_ret._address, normalized._address)
    return _ret
  }

  // Get HSV values for a Color, hue [0..360], saturation/value [0..1]: ColorToHSV(Color) => Vector3
  const _ColorToHSV = mod.cwrap('ColorToHSV', 'void', ['pointer', 'pointer'])
  raylib.ColorToHSV = (color) => {
    const _ret = new raylib.Vector3()
    _ColorToHSV(_ret._address, color._address)
    return _ret
  }

  // Get a Color from HSV values, hue [0..360], saturation/value [0..1]: ColorFromHSV(float, float, float) => Color
  const _ColorFromHSV = mod.cwrap('ColorFromHSV', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.ColorFromHSV = (hue, saturation, value) => {
    const _ret = new raylib.Color()
    _ColorFromHSV(_ret._address, hue, saturation, value)
    return _ret
  }

  // Get color multiplied with another color: ColorTint(Color, Color) => Color
  const _ColorTint = mod.cwrap('ColorTint', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ColorTint = (color, tint) => {
    const _ret = new raylib.Color()
    _ColorTint(_ret._address, color._address, tint._address)
    return _ret
  }

  // Get color with brightness correction, brightness factor goes from -1.0f to 1.0f: ColorBrightness(Color, float) => Color
  const _ColorBrightness = mod.cwrap('ColorBrightness', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorBrightness = (color, factor) => {
    const _ret = new raylib.Color()
    _ColorBrightness(_ret._address, color._address, factor)
    return _ret
  }

  // Get color with contrast correction, contrast values between -1.0f and 1.0f: ColorContrast(Color, float) => Color
  const _ColorContrast = mod.cwrap('ColorContrast', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorContrast = (color, contrast) => {
    const _ret = new raylib.Color()
    _ColorContrast(_ret._address, color._address, contrast)
    return _ret
  }

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: ColorAlpha(Color, float) => Color
  const _ColorAlpha = mod.cwrap('ColorAlpha', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorAlpha = (color, alpha) => {
    const _ret = new raylib.Color()
    _ColorAlpha(_ret._address, color._address, alpha)
    return _ret
  }

  // Get src alpha-blended into dst color with tint: ColorAlphaBlend(Color, Color, Color) => Color
  const _ColorAlphaBlend = mod.cwrap('ColorAlphaBlend', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ColorAlphaBlend = (dst, src, tint) => {
    const _ret = new raylib.Color()
    _ColorAlphaBlend(_ret._address, dst._address, src._address, tint._address)
    return _ret
  }

  // Get color lerp interpolation between two colors, factor [0.0f..1.0f]: ColorLerp(Color, Color, float) => Color
  const _ColorLerp = mod.cwrap('ColorLerp', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.ColorLerp = (color1, color2, factor) => {
    const _ret = new raylib.Color()
    _ColorLerp(_ret._address, color1._address, color2._address, factor)
    return _ret
  }

  // Get Color structure from hexadecimal value: GetColor(unsigned int) => Color
  const _GetColor = mod.cwrap('GetColor', 'void', ['pointer', 'number'])
  raylib.GetColor = (hexValue) => {
    const _ret = new raylib.Color()
    _GetColor(_ret._address, hexValue)
    return _ret
  }

  // Get Color from a source pixel pointer of certain format: GetPixelColor(void *, int) => Color
  const _GetPixelColor = mod.cwrap('GetPixelColor', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetPixelColor = (srcPtr, format) => {
    const _ret = new raylib.Color()
    _GetPixelColor(_ret._address, srcPtr._address, format)
    return _ret
  }

  // Set color formatted into destination pixel pointer: SetPixelColor(void *, Color, int) => void
  const _SetPixelColor = mod.cwrap('SetPixelColor', 'pointer', ['pointer', 'pointer', 'number'])
  raylib.SetPixelColor = (dstPtr, color, format) => _SetPixelColor(dstPtr._address, color._address, format)

  // Get pixel data size in bytes for certain format: GetPixelDataSize(int, int, int) => int
  const _GetPixelDataSize = mod.cwrap('GetPixelDataSize', 'number', ['number', 'number', 'number'])
  raylib.GetPixelDataSize = (width, height, format) => _GetPixelDataSize(width, height, format)

  // Get the default Font: GetFontDefault() => Font
  const _GetFontDefault = mod.cwrap('GetFontDefault', 'void', ['pointer'])
  raylib.GetFontDefault = () => {
    const _ret = new raylib.Font()
    _GetFontDefault(_ret._address)
    return _ret
  }

  // Load font from file into GPU memory (VRAM): LoadFont(const char *) => Font
  const _LoadFont = mod.cwrap('LoadFont', 'void', ['pointer', 'string'])
  raylib.LoadFont = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Font()
    _LoadFont(_ret._address, fileName)
    return _ret
  }

  // Load font from file with extended parameters, use NULL for codepoints and 0 for codepointCount to load the default character set, font size is provided in pixels height: LoadFontEx(const char *, int, int *, int) => Font
  const _LoadFontEx = mod.cwrap('LoadFontEx', 'void', ['pointer', 'string', 'number', 'pointer', 'number'])
  raylib.LoadFontEx = async (fileName, fontSize, codepoints, codepointCount, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Font()
    _LoadFontEx(_ret._address, fileName, fontSize, codepoints._address, codepointCount)
    return _ret
  }

  // Load font from Image (XNA style): LoadFontFromImage(Image, Color, int) => Font
  const _LoadFontFromImage = mod.cwrap('LoadFontFromImage', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.LoadFontFromImage = (image, key, firstChar) => {
    const _ret = new raylib.Font()
    _LoadFontFromImage(_ret._address, image._address, key._address, firstChar)
    return _ret
  }

  // Load font from memory buffer, fileType refers to extension: i.e. '.ttf': LoadFontFromMemory(const char *, const unsigned char *, int, int, int *, int) => Font
  const _LoadFontFromMemory = mod.cwrap('LoadFontFromMemory', 'void', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer', 'number'])
  raylib.LoadFontFromMemory = (fileType, fileData, dataSize, fontSize, codepoints, codepointCount) => {
    const _ret = new raylib.Font()
    _LoadFontFromMemory(_ret._address, fileType, fileData._address, dataSize, fontSize, codepoints._address, codepointCount)
    return _ret
  }

  // Check if a font is valid (font data loaded, WARNING: GPU texture not checked): IsFontValid(Font) => bool
  const _IsFontValid = mod.cwrap('IsFontValid', 'boolean', ['pointer'])
  raylib.IsFontValid = (font) => _IsFontValid(font._address)

  // Load font data for further use: LoadFontData(const unsigned char *, int, int, int *, int, int) => GlyphInfo *
  const _LoadFontData = mod.cwrap('LoadFontData', 'void', ['pointer', 'pointer', 'number', 'number', 'pointer', 'number', 'number'])
  raylib.LoadFontData = (fileData, dataSize, fontSize, codepoints, codepointCount, type) => {
    const _ret = new raylib.GlyphInfo()
    _LoadFontData(_ret._address, fileData._address, dataSize, fontSize, codepoints._address, codepointCount, type)
    return _ret
  }

  // Generate image font atlas using chars info: GenImageFontAtlas(const GlyphInfo *, Rectangle **, int, int, int, int) => Image
  const _GenImageFontAtlas = mod.cwrap('GenImageFontAtlas', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number', 'number', 'number'])
  raylib.GenImageFontAtlas = (glyphs, glyphRecs, glyphCount, fontSize, padding, packMethod) => {
    const _ret = new raylib.Image()
    _GenImageFontAtlas(_ret._address, glyphs._address, glyphRecs._address, glyphCount, fontSize, padding, packMethod)
    return _ret
  }

  // Unload font chars info data (RAM): UnloadFontData(GlyphInfo *, int) => void
  const _UnloadFontData = mod.cwrap('UnloadFontData', 'pointer', ['pointer', 'number'])
  raylib.UnloadFontData = (glyphs, glyphCount) => _UnloadFontData(glyphs._address, glyphCount)

  // Unload font from GPU memory (VRAM): UnloadFont(Font) => void
  const _UnloadFont = mod.cwrap('UnloadFont', 'pointer', ['pointer'])
  raylib.UnloadFont = (font) => _UnloadFont(font._address)

  // Export font as code file, returns true on success: ExportFontAsCode(Font, const char *) => bool
  const _ExportFontAsCode = mod.cwrap('ExportFontAsCode', 'boolean', ['pointer', 'string'])
  raylib.ExportFontAsCode = (font, fileName) => _ExportFontAsCode(font._address, fileName)

  // Draw current FPS: DrawFPS(int, int) => void
  const _DrawFPS = mod.cwrap('DrawFPS', 'pointer', ['number', 'number'])
  raylib.DrawFPS = (posX, posY) => _DrawFPS(posX, posY)

  // Draw text (using default font): DrawText(const char *, int, int, int, Color) => void
  const _DrawText = mod.cwrap('DrawText', 'pointer', ['string', 'number', 'number', 'number', 'pointer'])
  raylib.DrawText = (text, posX, posY, fontSize, color) => _DrawText(text, posX, posY, fontSize, color._address)

  // Draw text using font and additional parameters: DrawTextEx(Font, const char *, Vector2, float, float, Color) => void
  const _DrawTextEx = mod.cwrap('DrawTextEx', 'pointer', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextEx = (font, text, position, fontSize, spacing, tint) => _DrawTextEx(font._address, text, position._address, fontSize, spacing, tint._address)

  // Draw text using Font and pro parameters (rotation): DrawTextPro(Font, const char *, Vector2, Vector2, float, float, float, Color) => void
  const _DrawTextPro = mod.cwrap('DrawTextPro', 'pointer', ['pointer', 'string', 'pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawTextPro = (font, text, position, origin, rotation, fontSize, spacing, tint) => _DrawTextPro(font._address, text, position._address, origin._address, rotation, fontSize, spacing, tint._address)

  // Draw one character (codepoint): DrawTextCodepoint(Font, int, Vector2, float, Color) => void
  const _DrawTextCodepoint = mod.cwrap('DrawTextCodepoint', 'pointer', ['pointer', 'number', 'pointer', 'number', 'pointer'])
  raylib.DrawTextCodepoint = (font, codepoint, position, fontSize, tint) => _DrawTextCodepoint(font._address, codepoint, position._address, fontSize, tint._address)

  // Draw multiple character (codepoint): DrawTextCodepoints(Font, const int *, int, Vector2, float, float, Color) => void
  const _DrawTextCodepoints = mod.cwrap('DrawTextCodepoints', 'pointer', ['pointer', 'pointer', 'number', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextCodepoints = (font, codepoints, codepointCount, position, fontSize, spacing, tint) => _DrawTextCodepoints(font._address, codepoints._address, codepointCount, position._address, fontSize, spacing, tint._address)

  // Set vertical line spacing when drawing with line-breaks: SetTextLineSpacing(int) => void
  const _SetTextLineSpacing = mod.cwrap('SetTextLineSpacing', 'pointer', ['number'])
  raylib.SetTextLineSpacing = (spacing) => _SetTextLineSpacing(spacing)

  // Measure string width for default font: MeasureText(const char *, int) => int
  const _MeasureText = mod.cwrap('MeasureText', 'number', ['string', 'number'])
  raylib.MeasureText = (text, fontSize) => _MeasureText(text, fontSize)

  // Measure string size for Font: MeasureTextEx(Font, const char *, float, float) => Vector2
  const _MeasureTextEx = mod.cwrap('MeasureTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number'])
  raylib.MeasureTextEx = (font, text, fontSize, spacing) => {
    const _ret = new raylib.Vector2()
    _MeasureTextEx(_ret._address, font._address, text, fontSize, spacing)
    return _ret
  }

  // Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found: GetGlyphIndex(Font, int) => int
  const _GetGlyphIndex = mod.cwrap('GetGlyphIndex', 'number', ['pointer', 'number'])
  raylib.GetGlyphIndex = (font, codepoint) => _GetGlyphIndex(font._address, codepoint)

  // Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found: GetGlyphInfo(Font, int) => GlyphInfo
  const _GetGlyphInfo = mod.cwrap('GetGlyphInfo', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetGlyphInfo = (font, codepoint) => {
    const _ret = new raylib.GlyphInfo()
    _GetGlyphInfo(_ret._address, font._address, codepoint)
    return _ret
  }

  // Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found: GetGlyphAtlasRec(Font, int) => Rectangle
  const _GetGlyphAtlasRec = mod.cwrap('GetGlyphAtlasRec', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetGlyphAtlasRec = (font, codepoint) => {
    const _ret = new raylib.Rectangle()
    _GetGlyphAtlasRec(_ret._address, font._address, codepoint)
    return _ret
  }

  // Load UTF-8 text encoded from codepoints array: LoadUTF8(const int *, int) => char *
  const _LoadUTF8 = mod.cwrap('LoadUTF8', 'string', ['pointer', 'number'])
  raylib.LoadUTF8 = (codepoints, length) => _LoadUTF8(codepoints._address, length)

  // Unload UTF-8 text encoded from codepoints array: UnloadUTF8(char *) => void
  const _UnloadUTF8 = mod.cwrap('UnloadUTF8', 'pointer', ['string'])
  raylib.UnloadUTF8 = (text) => _UnloadUTF8(text)

  // Load all codepoints from a UTF-8 text string, codepoints count returned by parameter: LoadCodepoints(const char *, int *) => int *
  const _LoadCodepoints = mod.cwrap('LoadCodepoints', 'pointer', ['string', 'pointer'])
  raylib.LoadCodepoints = (text, count) => _LoadCodepoints(text, count._address)

  // Unload codepoints data from memory: UnloadCodepoints(int *) => void
  const _UnloadCodepoints = mod.cwrap('UnloadCodepoints', 'pointer', ['pointer'])
  raylib.UnloadCodepoints = (codepoints) => _UnloadCodepoints(codepoints._address)

  // Get total number of codepoints in a UTF-8 encoded string: GetCodepointCount(const char *) => int
  const _GetCodepointCount = mod.cwrap('GetCodepointCount', 'number', ['string'])
  raylib.GetCodepointCount = (text) => _GetCodepointCount(text)

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepoint(const char *, int *) => int
  const _GetCodepoint = mod.cwrap('GetCodepoint', 'number', ['string', 'pointer'])
  raylib.GetCodepoint = (text, codepointSize) => _GetCodepoint(text, codepointSize._address)

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointNext(const char *, int *) => int
  const _GetCodepointNext = mod.cwrap('GetCodepointNext', 'number', ['string', 'pointer'])
  raylib.GetCodepointNext = (text, codepointSize) => _GetCodepointNext(text, codepointSize._address)

  // Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointPrevious(const char *, int *) => int
  const _GetCodepointPrevious = mod.cwrap('GetCodepointPrevious', 'number', ['string', 'pointer'])
  raylib.GetCodepointPrevious = (text, codepointSize) => _GetCodepointPrevious(text, codepointSize._address)

  // Encode one codepoint into UTF-8 byte array (array length returned as parameter): CodepointToUTF8(int, int *) => const char *
  const _CodepointToUTF8 = mod.cwrap('CodepointToUTF8', 'string', ['number', 'pointer'])
  raylib.CodepointToUTF8 = (codepoint, utf8Size) => _CodepointToUTF8(codepoint, utf8Size._address)

  // Copy one string to another, returns bytes copied: TextCopy(char *, const char *) => int
  const _TextCopy = mod.cwrap('TextCopy', 'number', ['string', 'string'])
  raylib.TextCopy = (dst, src) => _TextCopy(dst, src)

  // Check if two text string are equal: TextIsEqual(const char *, const char *) => bool
  const _TextIsEqual = mod.cwrap('TextIsEqual', 'boolean', ['string', 'string'])
  raylib.TextIsEqual = (text1, text2) => _TextIsEqual(text1, text2)

  // Get text length, checks for '\0' ending: TextLength(const char *) => unsigned int
  const _TextLength = mod.cwrap('TextLength', 'number', ['string'])
  raylib.TextLength = (text) => _TextLength(text)

  // Text formatting with variables (sprintf() style): TextFormat(const char *, ...) => const char *
  const _TextFormat = mod.cwrap('TextFormat', 'string', ['string', 'pointer'])
  raylib.TextFormat = (text, args) => _TextFormat(text, args._address)

  // Get a piece of a text string: TextSubtext(const char *, int, int) => const char *
  const _TextSubtext = mod.cwrap('TextSubtext', 'string', ['string', 'number', 'number'])
  raylib.TextSubtext = (text, position, length) => _TextSubtext(text, position, length)

  // Replace text string (WARNING: memory must be freed!): TextReplace(const char *, const char *, const char *) => char *
  const _TextReplace = mod.cwrap('TextReplace', 'string', ['string', 'string', 'string'])
  raylib.TextReplace = (text, replace, by) => _TextReplace(text, replace, by)

  // Insert text in a position (WARNING: memory must be freed!): TextInsert(const char *, const char *, int) => char *
  const _TextInsert = mod.cwrap('TextInsert', 'string', ['string', 'string', 'number'])
  raylib.TextInsert = (text, insert, position) => _TextInsert(text, insert, position)

  // Join text strings with delimiter: TextJoin(const char **, int, const char *) => const char *
  const _TextJoin = mod.cwrap('TextJoin', 'string', ['pointer', 'number', 'string'])
  raylib.TextJoin = (textList, count, delimiter) => _TextJoin(textList._address, count, delimiter)

  // Split text into multiple strings: TextSplit(const char *, char, int *) => const char **
  const _TextSplit = mod.cwrap('TextSplit', 'pointer', ['string', 'number', 'pointer'])
  raylib.TextSplit = (text, delimiter, count) => _TextSplit(text, delimiter, count._address)

  // Append text at specific position and move cursor!: TextAppend(char *, const char *, int *) => void
  const _TextAppend = mod.cwrap('TextAppend', 'pointer', ['string', 'string', 'pointer'])
  raylib.TextAppend = (text, append, position) => _TextAppend(text, append, position._address)

  // Find first text occurrence within a string: TextFindIndex(const char *, const char *) => int
  const _TextFindIndex = mod.cwrap('TextFindIndex', 'number', ['string', 'string'])
  raylib.TextFindIndex = (text, find) => _TextFindIndex(text, find)

  // Get upper case version of provided string: TextToUpper(const char *) => const char *
  const _TextToUpper = mod.cwrap('TextToUpper', 'string', ['string'])
  raylib.TextToUpper = (text) => _TextToUpper(text)

  // Get lower case version of provided string: TextToLower(const char *) => const char *
  const _TextToLower = mod.cwrap('TextToLower', 'string', ['string'])
  raylib.TextToLower = (text) => _TextToLower(text)

  // Get Pascal case notation version of provided string: TextToPascal(const char *) => const char *
  const _TextToPascal = mod.cwrap('TextToPascal', 'string', ['string'])
  raylib.TextToPascal = (text) => _TextToPascal(text)

  // Get Snake case notation version of provided string: TextToSnake(const char *) => const char *
  const _TextToSnake = mod.cwrap('TextToSnake', 'string', ['string'])
  raylib.TextToSnake = (text) => _TextToSnake(text)

  // Get Camel case notation version of provided string: TextToCamel(const char *) => const char *
  const _TextToCamel = mod.cwrap('TextToCamel', 'string', ['string'])
  raylib.TextToCamel = (text) => _TextToCamel(text)

  // Get integer value from text (negative values not supported): TextToInteger(const char *) => int
  const _TextToInteger = mod.cwrap('TextToInteger', 'number', ['string'])
  raylib.TextToInteger = (text) => _TextToInteger(text)

  // Get float value from text (negative values not supported): TextToFloat(const char *) => float
  const _TextToFloat = mod.cwrap('TextToFloat', 'number', ['string'])
  raylib.TextToFloat = (text) => _TextToFloat(text)

  // Draw a line in 3D world space: DrawLine3D(Vector3, Vector3, Color) => void
  const _DrawLine3D = mod.cwrap('DrawLine3D', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawLine3D = (startPos, endPos, color) => _DrawLine3D(startPos._address, endPos._address, color._address)

  // Draw a point in 3D space, actually a small line: DrawPoint3D(Vector3, Color) => void
  const _DrawPoint3D = mod.cwrap('DrawPoint3D', 'pointer', ['pointer', 'pointer'])
  raylib.DrawPoint3D = (position, color) => _DrawPoint3D(position._address, color._address)

  // Draw a circle in 3D world space: DrawCircle3D(Vector3, float, Vector3, float, Color) => void
  const _DrawCircle3D = mod.cwrap('DrawCircle3D', 'pointer', ['pointer', 'number', 'pointer', 'number', 'pointer'])
  raylib.DrawCircle3D = (center, radius, rotationAxis, rotationAngle, color) => _DrawCircle3D(center._address, radius, rotationAxis._address, rotationAngle, color._address)

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle3D(Vector3, Vector3, Vector3, Color) => void
  const _DrawTriangle3D = mod.cwrap('DrawTriangle3D', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangle3D = (v1, v2, v3, color) => _DrawTriangle3D(v1._address, v2._address, v3._address, color._address)

  // Draw a triangle strip defined by points: DrawTriangleStrip3D(const Vector3 *, int, Color) => void
  const _DrawTriangleStrip3D = mod.cwrap('DrawTriangleStrip3D', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleStrip3D = (points, pointCount, color) => _DrawTriangleStrip3D(points._address, pointCount, color._address)

  // Draw cube: DrawCube(Vector3, float, float, float, Color) => void
  const _DrawCube = mod.cwrap('DrawCube', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCube = (position, width, height, length, color) => _DrawCube(position._address, width, height, length, color._address)

  // Draw cube (Vector version): DrawCubeV(Vector3, Vector3, Color) => void
  const _DrawCubeV = mod.cwrap('DrawCubeV', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawCubeV = (position, size, color) => _DrawCubeV(position._address, size._address, color._address)

  // Draw cube wires: DrawCubeWires(Vector3, float, float, float, Color) => void
  const _DrawCubeWires = mod.cwrap('DrawCubeWires', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCubeWires = (position, width, height, length, color) => _DrawCubeWires(position._address, width, height, length, color._address)

  // Draw cube wires (Vector version): DrawCubeWiresV(Vector3, Vector3, Color) => void
  const _DrawCubeWiresV = mod.cwrap('DrawCubeWiresV', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawCubeWiresV = (position, size, color) => _DrawCubeWiresV(position._address, size._address, color._address)

  // Draw sphere: DrawSphere(Vector3, float, Color) => void
  const _DrawSphere = mod.cwrap('DrawSphere', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.DrawSphere = (centerPos, radius, color) => _DrawSphere(centerPos._address, radius, color._address)

  // Draw sphere with extended parameters: DrawSphereEx(Vector3, float, int, int, Color) => void
  const _DrawSphereEx = mod.cwrap('DrawSphereEx', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawSphereEx = (centerPos, radius, rings, slices, color) => _DrawSphereEx(centerPos._address, radius, rings, slices, color._address)

  // Draw sphere wires: DrawSphereWires(Vector3, float, int, int, Color) => void
  const _DrawSphereWires = mod.cwrap('DrawSphereWires', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawSphereWires = (centerPos, radius, rings, slices, color) => _DrawSphereWires(centerPos._address, radius, rings, slices, color._address)

  // Draw a cylinder/cone: DrawCylinder(Vector3, float, float, float, int, Color) => void
  const _DrawCylinder = mod.cwrap('DrawCylinder', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinder = (position, radiusTop, radiusBottom, height, slices, color) => _DrawCylinder(position._address, radiusTop, radiusBottom, height, slices, color._address)

  // Draw a cylinder with base at startPos and top at endPos: DrawCylinderEx(Vector3, Vector3, float, float, int, Color) => void
  const _DrawCylinderEx = mod.cwrap('DrawCylinderEx', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderEx = (startPos, endPos, startRadius, endRadius, sides, color) => _DrawCylinderEx(startPos._address, endPos._address, startRadius, endRadius, sides, color._address)

  // Draw a cylinder/cone wires: DrawCylinderWires(Vector3, float, float, float, int, Color) => void
  const _DrawCylinderWires = mod.cwrap('DrawCylinderWires', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderWires = (position, radiusTop, radiusBottom, height, slices, color) => _DrawCylinderWires(position._address, radiusTop, radiusBottom, height, slices, color._address)

  // Draw a cylinder wires with base at startPos and top at endPos: DrawCylinderWiresEx(Vector3, Vector3, float, float, int, Color) => void
  const _DrawCylinderWiresEx = mod.cwrap('DrawCylinderWiresEx', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderWiresEx = (startPos, endPos, startRadius, endRadius, sides, color) => _DrawCylinderWiresEx(startPos._address, endPos._address, startRadius, endRadius, sides, color._address)

  // Draw a capsule with the center of its sphere caps at startPos and endPos: DrawCapsule(Vector3, Vector3, float, int, int, Color) => void
  const _DrawCapsule = mod.cwrap('DrawCapsule', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCapsule = (startPos, endPos, radius, slices, rings, color) => _DrawCapsule(startPos._address, endPos._address, radius, slices, rings, color._address)

  // Draw capsule wireframe with the center of its sphere caps at startPos and endPos: DrawCapsuleWires(Vector3, Vector3, float, int, int, Color) => void
  const _DrawCapsuleWires = mod.cwrap('DrawCapsuleWires', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCapsuleWires = (startPos, endPos, radius, slices, rings, color) => _DrawCapsuleWires(startPos._address, endPos._address, radius, slices, rings, color._address)

  // Draw a plane XZ: DrawPlane(Vector3, Vector2, Color) => void
  const _DrawPlane = mod.cwrap('DrawPlane', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawPlane = (centerPos, size, color) => _DrawPlane(centerPos._address, size._address, color._address)

  // Draw a ray line: DrawRay(Ray, Color) => void
  const _DrawRay = mod.cwrap('DrawRay', 'pointer', ['pointer', 'pointer'])
  raylib.DrawRay = (ray, color) => _DrawRay(ray._address, color._address)

  // Draw a grid (centered at (0, 0, 0)): DrawGrid(int, float) => void
  const _DrawGrid = mod.cwrap('DrawGrid', 'pointer', ['number', 'number'])
  raylib.DrawGrid = (slices, spacing) => _DrawGrid(slices, spacing)

  // Load model from files (meshes and materials): LoadModel(const char *) => Model
  const _LoadModel = mod.cwrap('LoadModel', 'void', ['pointer', 'string'])
  raylib.LoadModel = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Model()
    _LoadModel(_ret._address, fileName)
    return _ret
  }

  // Load model from generated mesh (default material): LoadModelFromMesh(Mesh) => Model
  const _LoadModelFromMesh = mod.cwrap('LoadModelFromMesh', 'void', ['pointer', 'pointer'])
  raylib.LoadModelFromMesh = (mesh) => {
    const _ret = new raylib.Model()
    _LoadModelFromMesh(_ret._address, mesh._address)
    return _ret
  }

  // Check if a model is valid (loaded in GPU, VAO/VBOs): IsModelValid(Model) => bool
  const _IsModelValid = mod.cwrap('IsModelValid', 'boolean', ['pointer'])
  raylib.IsModelValid = (model) => _IsModelValid(model._address)

  // Unload model (including meshes) from memory (RAM and/or VRAM): UnloadModel(Model) => void
  const _UnloadModel = mod.cwrap('UnloadModel', 'pointer', ['pointer'])
  raylib.UnloadModel = (model) => _UnloadModel(model._address)

  // Compute model bounding box limits (considers all meshes): GetModelBoundingBox(Model) => BoundingBox
  const _GetModelBoundingBox = mod.cwrap('GetModelBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.GetModelBoundingBox = (model) => {
    const _ret = new raylib.BoundingBox()
    _GetModelBoundingBox(_ret._address, model._address)
    return _ret
  }

  // Draw a model (with texture if set): DrawModel(Model, Vector3, float, Color) => void
  const _DrawModel = mod.cwrap('DrawModel', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawModel = (model, position, scale, tint) => _DrawModel(model._address, position._address, scale, tint._address)

  // Draw a model with extended parameters: DrawModelEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  const _DrawModelEx = mod.cwrap('DrawModelEx', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'])
  raylib.DrawModelEx = (model, position, rotationAxis, rotationAngle, scale, tint) => _DrawModelEx(model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address)

  // Draw a model wires (with texture if set): DrawModelWires(Model, Vector3, float, Color) => void
  const _DrawModelWires = mod.cwrap('DrawModelWires', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawModelWires = (model, position, scale, tint) => _DrawModelWires(model._address, position._address, scale, tint._address)

  // Draw a model wires (with texture if set) with extended parameters: DrawModelWiresEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  const _DrawModelWiresEx = mod.cwrap('DrawModelWiresEx', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'])
  raylib.DrawModelWiresEx = (model, position, rotationAxis, rotationAngle, scale, tint) => _DrawModelWiresEx(model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address)

  // Draw a model as points: DrawModelPoints(Model, Vector3, float, Color) => void
  const _DrawModelPoints = mod.cwrap('DrawModelPoints', 'pointer', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawModelPoints = (model, position, scale, tint) => _DrawModelPoints(model._address, position._address, scale, tint._address)

  // Draw a model as points with extended parameters: DrawModelPointsEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  const _DrawModelPointsEx = mod.cwrap('DrawModelPointsEx', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'])
  raylib.DrawModelPointsEx = (model, position, rotationAxis, rotationAngle, scale, tint) => _DrawModelPointsEx(model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address)

  // Draw bounding box (wires): DrawBoundingBox(BoundingBox, Color) => void
  const _DrawBoundingBox = mod.cwrap('DrawBoundingBox', 'pointer', ['pointer', 'pointer'])
  raylib.DrawBoundingBox = (box, color) => _DrawBoundingBox(box._address, color._address)

  // Draw a billboard texture: DrawBillboard(Camera, Texture2D, Vector3, float, Color) => void
  const _DrawBillboard = mod.cwrap('DrawBillboard', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawBillboard = (camera, texture, position, scale, tint) => _DrawBillboard(camera._address, texture._address, position._address, scale, tint._address)

  // Draw a billboard texture defined by source: DrawBillboardRec(Camera, Texture2D, Rectangle, Vector3, Vector2, Color) => void
  const _DrawBillboardRec = mod.cwrap('DrawBillboardRec', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawBillboardRec = (camera, texture, source, position, size, tint) => _DrawBillboardRec(camera._address, texture._address, source._address, position._address, size._address, tint._address)

  // Draw a billboard texture defined by source and rotation: DrawBillboardPro(Camera, Texture2D, Rectangle, Vector3, Vector3, Vector2, Vector2, float, Color) => void
  const _DrawBillboardPro = mod.cwrap('DrawBillboardPro', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawBillboardPro = (camera, texture, source, position, up, size, origin, rotation, tint) => _DrawBillboardPro(camera._address, texture._address, source._address, position._address, up._address, size._address, origin._address, rotation, tint._address)

  // Upload mesh vertex data in GPU and provide VAO/VBO ids: UploadMesh(Mesh *, bool) => void
  const _UploadMesh = mod.cwrap('UploadMesh', 'pointer', ['pointer', 'boolean'])
  raylib.UploadMesh = (mesh, dynamic) => _UploadMesh(mesh._address, dynamic)

  // Update mesh vertex data in GPU for a specific buffer index: UpdateMeshBuffer(Mesh, int, const void *, int, int) => void
  const _UpdateMeshBuffer = mod.cwrap('UpdateMeshBuffer', 'pointer', ['pointer', 'number', 'pointer', 'number', 'number'])
  raylib.UpdateMeshBuffer = (mesh, index, data, dataSize, offset) => _UpdateMeshBuffer(mesh._address, index, data._address, dataSize, offset)

  // Unload mesh data from CPU and GPU: UnloadMesh(Mesh) => void
  const _UnloadMesh = mod.cwrap('UnloadMesh', 'pointer', ['pointer'])
  raylib.UnloadMesh = (mesh) => _UnloadMesh(mesh._address)

  // Draw a 3d mesh with material and transform: DrawMesh(Mesh, Material, Matrix) => void
  const _DrawMesh = mod.cwrap('DrawMesh', 'pointer', ['pointer', 'pointer', 'pointer'])
  raylib.DrawMesh = (mesh, material, transform) => _DrawMesh(mesh._address, material._address, transform._address)

  // Draw multiple mesh instances with material and different transforms: DrawMeshInstanced(Mesh, Material, const Matrix *, int) => void
  const _DrawMeshInstanced = mod.cwrap('DrawMeshInstanced', 'pointer', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.DrawMeshInstanced = (mesh, material, transforms, instances) => _DrawMeshInstanced(mesh._address, material._address, transforms._address, instances)

  // Compute mesh bounding box limits: GetMeshBoundingBox(Mesh) => BoundingBox
  const _GetMeshBoundingBox = mod.cwrap('GetMeshBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.GetMeshBoundingBox = (mesh) => {
    const _ret = new raylib.BoundingBox()
    _GetMeshBoundingBox(_ret._address, mesh._address)
    return _ret
  }

  // Compute mesh tangents: GenMeshTangents(Mesh *) => void
  const _GenMeshTangents = mod.cwrap('GenMeshTangents', 'pointer', ['pointer'])
  raylib.GenMeshTangents = (mesh) => _GenMeshTangents(mesh._address)

  // Export mesh data to file, returns true on success: ExportMesh(Mesh, const char *) => bool
  const _ExportMesh = mod.cwrap('ExportMesh', 'boolean', ['pointer', 'string'])
  raylib.ExportMesh = (mesh, fileName) => _ExportMesh(mesh._address, fileName)

  // Export mesh as code file (.h) defining multiple arrays of vertex attributes: ExportMeshAsCode(Mesh, const char *) => bool
  const _ExportMeshAsCode = mod.cwrap('ExportMeshAsCode', 'boolean', ['pointer', 'string'])
  raylib.ExportMeshAsCode = (mesh, fileName) => _ExportMeshAsCode(mesh._address, fileName)

  // Generate polygonal mesh: GenMeshPoly(int, float) => Mesh
  const _GenMeshPoly = mod.cwrap('GenMeshPoly', 'void', ['pointer', 'number', 'number'])
  raylib.GenMeshPoly = (sides, radius) => {
    const _ret = new raylib.Mesh()
    _GenMeshPoly(_ret._address, sides, radius)
    return _ret
  }

  // Generate plane mesh (with subdivisions): GenMeshPlane(float, float, int, int) => Mesh
  const _GenMeshPlane = mod.cwrap('GenMeshPlane', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshPlane = (width, length, resX, resZ) => {
    const _ret = new raylib.Mesh()
    _GenMeshPlane(_ret._address, width, length, resX, resZ)
    return _ret
  }

  // Generate cuboid mesh: GenMeshCube(float, float, float) => Mesh
  const _GenMeshCube = mod.cwrap('GenMeshCube', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCube = (width, height, length) => {
    const _ret = new raylib.Mesh()
    _GenMeshCube(_ret._address, width, height, length)
    return _ret
  }

  // Generate sphere mesh (standard sphere): GenMeshSphere(float, int, int) => Mesh
  const _GenMeshSphere = mod.cwrap('GenMeshSphere', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshSphere(_ret._address, radius, rings, slices)
    return _ret
  }

  // Generate half-sphere mesh (no bottom cap): GenMeshHemiSphere(float, int, int) => Mesh
  const _GenMeshHemiSphere = mod.cwrap('GenMeshHemiSphere', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshHemiSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshHemiSphere(_ret._address, radius, rings, slices)
    return _ret
  }

  // Generate cylinder mesh: GenMeshCylinder(float, float, int) => Mesh
  const _GenMeshCylinder = mod.cwrap('GenMeshCylinder', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCylinder = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshCylinder(_ret._address, radius, height, slices)
    return _ret
  }

  // Generate cone/pyramid mesh: GenMeshCone(float, float, int) => Mesh
  const _GenMeshCone = mod.cwrap('GenMeshCone', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCone = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshCone(_ret._address, radius, height, slices)
    return _ret
  }

  // Generate torus mesh: GenMeshTorus(float, float, int, int) => Mesh
  const _GenMeshTorus = mod.cwrap('GenMeshTorus', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshTorus = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    _GenMeshTorus(_ret._address, radius, size, radSeg, sides)
    return _ret
  }

  // Generate trefoil knot mesh: GenMeshKnot(float, float, int, int) => Mesh
  const _GenMeshKnot = mod.cwrap('GenMeshKnot', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshKnot = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    _GenMeshKnot(_ret._address, radius, size, radSeg, sides)
    return _ret
  }

  // Generate heightmap mesh from image data: GenMeshHeightmap(Image, Vector3) => Mesh
  const _GenMeshHeightmap = mod.cwrap('GenMeshHeightmap', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GenMeshHeightmap = (heightmap, size) => {
    const _ret = new raylib.Mesh()
    _GenMeshHeightmap(_ret._address, heightmap._address, size._address)
    return _ret
  }

  // Generate cubes-based map mesh from image data: GenMeshCubicmap(Image, Vector3) => Mesh
  const _GenMeshCubicmap = mod.cwrap('GenMeshCubicmap', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GenMeshCubicmap = (cubicmap, cubeSize) => {
    const _ret = new raylib.Mesh()
    _GenMeshCubicmap(_ret._address, cubicmap._address, cubeSize._address)
    return _ret
  }

  // Load materials from model file: LoadMaterials(const char *, int *) => Material *
  const _LoadMaterials = mod.cwrap('LoadMaterials', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadMaterials = async (fileName, materialCount, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Material()
    _LoadMaterials(_ret._address, fileName, materialCount._address)
    return _ret
  }

  // Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps): LoadMaterialDefault() => Material
  const _LoadMaterialDefault = mod.cwrap('LoadMaterialDefault', 'void', ['pointer'])
  raylib.LoadMaterialDefault = () => {
    const _ret = new raylib.Material()
    _LoadMaterialDefault(_ret._address)
    return _ret
  }

  // Check if a material is valid (shader assigned, map textures loaded in GPU): IsMaterialValid(Material) => bool
  const _IsMaterialValid = mod.cwrap('IsMaterialValid', 'boolean', ['pointer'])
  raylib.IsMaterialValid = (material) => _IsMaterialValid(material._address)

  // Unload material from GPU memory (VRAM): UnloadMaterial(Material) => void
  const _UnloadMaterial = mod.cwrap('UnloadMaterial', 'pointer', ['pointer'])
  raylib.UnloadMaterial = (material) => _UnloadMaterial(material._address)

  // Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...): SetMaterialTexture(Material *, int, Texture2D) => void
  const _SetMaterialTexture = mod.cwrap('SetMaterialTexture', 'pointer', ['pointer', 'number', 'pointer'])
  raylib.SetMaterialTexture = (material, mapType, texture) => _SetMaterialTexture(material._address, mapType, texture._address)

  // Set material for a mesh: SetModelMeshMaterial(Model *, int, int) => void
  const _SetModelMeshMaterial = mod.cwrap('SetModelMeshMaterial', 'pointer', ['pointer', 'number', 'number'])
  raylib.SetModelMeshMaterial = (model, meshId, materialId) => _SetModelMeshMaterial(model._address, meshId, materialId)

  // Load model animations from file: LoadModelAnimations(const char *, int *) => ModelAnimation *
  const _LoadModelAnimations = mod.cwrap('LoadModelAnimations', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadModelAnimations = async (fileName, animCount, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.ModelAnimation()
    _LoadModelAnimations(_ret._address, fileName, animCount._address)
    return _ret
  }

  // Update model animation pose (CPU): UpdateModelAnimation(Model, ModelAnimation, int) => void
  const _UpdateModelAnimation = mod.cwrap('UpdateModelAnimation', 'pointer', ['pointer', 'pointer', 'number'])
  raylib.UpdateModelAnimation = (model, anim, frame) => _UpdateModelAnimation(model._address, anim._address, frame)

  // Update model animation mesh bone matrices (GPU skinning): UpdateModelAnimationBones(Model, ModelAnimation, int) => void
  const _UpdateModelAnimationBones = mod.cwrap('UpdateModelAnimationBones', 'pointer', ['pointer', 'pointer', 'number'])
  raylib.UpdateModelAnimationBones = (model, anim, frame) => _UpdateModelAnimationBones(model._address, anim._address, frame)

  // Unload animation data: UnloadModelAnimation(ModelAnimation) => void
  const _UnloadModelAnimation = mod.cwrap('UnloadModelAnimation', 'pointer', ['pointer'])
  raylib.UnloadModelAnimation = (anim) => _UnloadModelAnimation(anim._address)

  // Unload animation array data: UnloadModelAnimations(ModelAnimation *, int) => void
  const _UnloadModelAnimations = mod.cwrap('UnloadModelAnimations', 'pointer', ['pointer', 'number'])
  raylib.UnloadModelAnimations = (animations, animCount) => _UnloadModelAnimations(animations._address, animCount)

  // Check model animation skeleton match: IsModelAnimationValid(Model, ModelAnimation) => bool
  const _IsModelAnimationValid = mod.cwrap('IsModelAnimationValid', 'boolean', ['pointer', 'pointer'])
  raylib.IsModelAnimationValid = (model, anim) => _IsModelAnimationValid(model._address, anim._address)

  // Check collision between two spheres: CheckCollisionSpheres(Vector3, float, Vector3, float) => bool
  const _CheckCollisionSpheres = mod.cwrap('CheckCollisionSpheres', 'boolean', ['pointer', 'number', 'pointer', 'number'])
  raylib.CheckCollisionSpheres = (center1, radius1, center2, radius2) => _CheckCollisionSpheres(center1._address, radius1, center2._address, radius2)

  // Check collision between two bounding boxes: CheckCollisionBoxes(BoundingBox, BoundingBox) => bool
  const _CheckCollisionBoxes = mod.cwrap('CheckCollisionBoxes', 'boolean', ['pointer', 'pointer'])
  raylib.CheckCollisionBoxes = (box1, box2) => _CheckCollisionBoxes(box1._address, box2._address)

  // Check collision between box and sphere: CheckCollisionBoxSphere(BoundingBox, Vector3, float) => bool
  const _CheckCollisionBoxSphere = mod.cwrap('CheckCollisionBoxSphere', 'boolean', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionBoxSphere = (box, center, radius) => _CheckCollisionBoxSphere(box._address, center._address, radius)

  // Get collision info between ray and sphere: GetRayCollisionSphere(Ray, Vector3, float) => RayCollision
  const _GetRayCollisionSphere = mod.cwrap('GetRayCollisionSphere', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.GetRayCollisionSphere = (ray, center, radius) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionSphere(_ret._address, ray._address, center._address, radius)
    return _ret
  }

  // Get collision info between ray and box: GetRayCollisionBox(Ray, BoundingBox) => RayCollision
  const _GetRayCollisionBox = mod.cwrap('GetRayCollisionBox', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionBox = (ray, box) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionBox(_ret._address, ray._address, box._address)
    return _ret
  }

  // Get collision info between ray and mesh: GetRayCollisionMesh(Ray, Mesh, Matrix) => RayCollision
  const _GetRayCollisionMesh = mod.cwrap('GetRayCollisionMesh', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionMesh = (ray, mesh, transform) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionMesh(_ret._address, ray._address, mesh._address, transform._address)
    return _ret
  }

  // Get collision info between ray and triangle: GetRayCollisionTriangle(Ray, Vector3, Vector3, Vector3) => RayCollision
  const _GetRayCollisionTriangle = mod.cwrap('GetRayCollisionTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionTriangle = (ray, p1, p2, p3) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionTriangle(_ret._address, ray._address, p1._address, p2._address, p3._address)
    return _ret
  }

  // Get collision info between ray and quad: GetRayCollisionQuad(Ray, Vector3, Vector3, Vector3, Vector3) => RayCollision
  const _GetRayCollisionQuad = mod.cwrap('GetRayCollisionQuad', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionQuad = (ray, p1, p2, p3, p4) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionQuad(_ret._address, ray._address, p1._address, p2._address, p3._address, p4._address)
    return _ret
  }

  // Initialize audio device and context: InitAudioDevice() => void
  const _InitAudioDevice = mod.cwrap('InitAudioDevice', 'pointer', [])
  raylib.InitAudioDevice = () => _InitAudioDevice()

  // Close the audio device and context: CloseAudioDevice() => void
  const _CloseAudioDevice = mod.cwrap('CloseAudioDevice', 'pointer', [])
  raylib.CloseAudioDevice = () => _CloseAudioDevice()

  // Check if audio device has been initialized successfully: IsAudioDeviceReady() => bool
  const _IsAudioDeviceReady = mod.cwrap('IsAudioDeviceReady', 'boolean', [])
  raylib.IsAudioDeviceReady = () => _IsAudioDeviceReady()

  // Set master volume (listener): SetMasterVolume(float) => void
  const _SetMasterVolume = mod.cwrap('SetMasterVolume', 'pointer', ['number'])
  raylib.SetMasterVolume = (volume) => _SetMasterVolume(volume)

  // Get master volume (listener): GetMasterVolume() => float
  const _GetMasterVolume = mod.cwrap('GetMasterVolume', 'number', [])
  raylib.GetMasterVolume = () => _GetMasterVolume()

  // Load wave data from file: LoadWave(const char *) => Wave
  const _LoadWave = mod.cwrap('LoadWave', 'void', ['pointer', 'string'])
  raylib.LoadWave = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Wave()
    _LoadWave(_ret._address, fileName)
    return _ret
  }

  // Load wave from memory buffer, fileType refers to extension: i.e. '.wav': LoadWaveFromMemory(const char *, const unsigned char *, int) => Wave
  const _LoadWaveFromMemory = mod.cwrap('LoadWaveFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadWaveFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Wave()
    _LoadWaveFromMemory(_ret._address, fileType, fileData._address, dataSize)
    return _ret
  }

  // Checks if wave data is valid (data loaded and parameters): IsWaveValid(Wave) => bool
  const _IsWaveValid = mod.cwrap('IsWaveValid', 'boolean', ['pointer'])
  raylib.IsWaveValid = (wave) => _IsWaveValid(wave._address)

  // Load sound from file: LoadSound(const char *) => Sound
  const _LoadSound = mod.cwrap('LoadSound', 'void', ['pointer', 'string'])
  raylib.LoadSound = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Sound()
    _LoadSound(_ret._address, fileName)
    return _ret
  }

  // Load sound from wave data: LoadSoundFromWave(Wave) => Sound
  const _LoadSoundFromWave = mod.cwrap('LoadSoundFromWave', 'void', ['pointer', 'pointer'])
  raylib.LoadSoundFromWave = (wave) => {
    const _ret = new raylib.Sound()
    _LoadSoundFromWave(_ret._address, wave._address)
    return _ret
  }

  // Create a new sound that shares the same sample data as the source sound, does not own the sound data: LoadSoundAlias(Sound) => Sound
  const _LoadSoundAlias = mod.cwrap('LoadSoundAlias', 'void', ['pointer', 'pointer'])
  raylib.LoadSoundAlias = (source) => {
    const _ret = new raylib.Sound()
    _LoadSoundAlias(_ret._address, source._address)
    return _ret
  }

  // Checks if a sound is valid (data loaded and buffers initialized): IsSoundValid(Sound) => bool
  const _IsSoundValid = mod.cwrap('IsSoundValid', 'boolean', ['pointer'])
  raylib.IsSoundValid = (sound) => _IsSoundValid(sound._address)

  // Update sound buffer with new data: UpdateSound(Sound, const void *, int) => void
  const _UpdateSound = mod.cwrap('UpdateSound', 'pointer', ['pointer', 'pointer', 'number'])
  raylib.UpdateSound = (sound, data, sampleCount) => _UpdateSound(sound._address, data._address, sampleCount)

  // Unload wave data: UnloadWave(Wave) => void
  const _UnloadWave = mod.cwrap('UnloadWave', 'pointer', ['pointer'])
  raylib.UnloadWave = (wave) => _UnloadWave(wave._address)

  // Unload sound: UnloadSound(Sound) => void
  const _UnloadSound = mod.cwrap('UnloadSound', 'pointer', ['pointer'])
  raylib.UnloadSound = (sound) => _UnloadSound(sound._address)

  // Unload a sound alias (does not deallocate sample data): UnloadSoundAlias(Sound) => void
  const _UnloadSoundAlias = mod.cwrap('UnloadSoundAlias', 'pointer', ['pointer'])
  raylib.UnloadSoundAlias = (alias) => _UnloadSoundAlias(alias._address)

  // Export wave data to file, returns true on success: ExportWave(Wave, const char *) => bool
  const _ExportWave = mod.cwrap('ExportWave', 'boolean', ['pointer', 'string'])
  raylib.ExportWave = (wave, fileName) => _ExportWave(wave._address, fileName)

  // Export wave sample data to code (.h), returns true on success: ExportWaveAsCode(Wave, const char *) => bool
  const _ExportWaveAsCode = mod.cwrap('ExportWaveAsCode', 'boolean', ['pointer', 'string'])
  raylib.ExportWaveAsCode = (wave, fileName) => _ExportWaveAsCode(wave._address, fileName)

  // Play a sound: PlaySound(Sound) => void
  const _PlaySound = mod.cwrap('PlaySound', 'pointer', ['pointer'])
  raylib.PlaySound = (sound) => _PlaySound(sound._address)

  // Stop playing a sound: StopSound(Sound) => void
  const _StopSound = mod.cwrap('StopSound', 'pointer', ['pointer'])
  raylib.StopSound = (sound) => _StopSound(sound._address)

  // Pause a sound: PauseSound(Sound) => void
  const _PauseSound = mod.cwrap('PauseSound', 'pointer', ['pointer'])
  raylib.PauseSound = (sound) => _PauseSound(sound._address)

  // Resume a paused sound: ResumeSound(Sound) => void
  const _ResumeSound = mod.cwrap('ResumeSound', 'pointer', ['pointer'])
  raylib.ResumeSound = (sound) => _ResumeSound(sound._address)

  // Check if a sound is currently playing: IsSoundPlaying(Sound) => bool
  const _IsSoundPlaying = mod.cwrap('IsSoundPlaying', 'boolean', ['pointer'])
  raylib.IsSoundPlaying = (sound) => _IsSoundPlaying(sound._address)

  // Set volume for a sound (1.0 is max level): SetSoundVolume(Sound, float) => void
  const _SetSoundVolume = mod.cwrap('SetSoundVolume', 'pointer', ['pointer', 'number'])
  raylib.SetSoundVolume = (sound, volume) => _SetSoundVolume(sound._address, volume)

  // Set pitch for a sound (1.0 is base level): SetSoundPitch(Sound, float) => void
  const _SetSoundPitch = mod.cwrap('SetSoundPitch', 'pointer', ['pointer', 'number'])
  raylib.SetSoundPitch = (sound, pitch) => _SetSoundPitch(sound._address, pitch)

  // Set pan for a sound (0.5 is center): SetSoundPan(Sound, float) => void
  const _SetSoundPan = mod.cwrap('SetSoundPan', 'pointer', ['pointer', 'number'])
  raylib.SetSoundPan = (sound, pan) => _SetSoundPan(sound._address, pan)

  // Copy a wave to a new wave: WaveCopy(Wave) => Wave
  const _WaveCopy = mod.cwrap('WaveCopy', 'void', ['pointer', 'pointer'])
  raylib.WaveCopy = (wave) => {
    const _ret = new raylib.Wave()
    _WaveCopy(_ret._address, wave._address)
    return _ret
  }

  // Crop a wave to defined frames range: WaveCrop(Wave *, int, int) => void
  const _WaveCrop = mod.cwrap('WaveCrop', 'pointer', ['pointer', 'number', 'number'])
  raylib.WaveCrop = (wave, initFrame, finalFrame) => _WaveCrop(wave._address, initFrame, finalFrame)

  // Convert wave data to desired format: WaveFormat(Wave *, int, int, int) => void
  const _WaveFormat = mod.cwrap('WaveFormat', 'pointer', ['pointer', 'number', 'number', 'number'])
  raylib.WaveFormat = (wave, sampleRate, sampleSize, channels) => _WaveFormat(wave._address, sampleRate, sampleSize, channels)

  // Load samples data from wave as a 32bit float data array: LoadWaveSamples(Wave) => float *
  const _LoadWaveSamples = mod.cwrap('LoadWaveSamples', 'pointer', ['pointer'])
  raylib.LoadWaveSamples = (wave) => _LoadWaveSamples(wave._address)

  // Unload samples data loaded with LoadWaveSamples(): UnloadWaveSamples(float *) => void
  const _UnloadWaveSamples = mod.cwrap('UnloadWaveSamples', 'pointer', ['pointer'])
  raylib.UnloadWaveSamples = (samples) => _UnloadWaveSamples(samples._address)

  // Load music stream from file: LoadMusicStream(const char *) => Music
  const _LoadMusicStream = mod.cwrap('LoadMusicStream', 'void', ['pointer', 'string'])
  raylib.LoadMusicStream = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Music()
    _LoadMusicStream(_ret._address, fileName)
    return _ret
  }

  // Load music stream from data: LoadMusicStreamFromMemory(const char *, const unsigned char *, int) => Music
  const _LoadMusicStreamFromMemory = mod.cwrap('LoadMusicStreamFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadMusicStreamFromMemory = (fileType, data, dataSize) => {
    const _ret = new raylib.Music()
    _LoadMusicStreamFromMemory(_ret._address, fileType, data._address, dataSize)
    return _ret
  }

  // Checks if a music stream is valid (context and buffers initialized): IsMusicValid(Music) => bool
  const _IsMusicValid = mod.cwrap('IsMusicValid', 'boolean', ['pointer'])
  raylib.IsMusicValid = (music) => _IsMusicValid(music._address)

  // Unload music stream: UnloadMusicStream(Music) => void
  const _UnloadMusicStream = mod.cwrap('UnloadMusicStream', 'pointer', ['pointer'])
  raylib.UnloadMusicStream = (music) => _UnloadMusicStream(music._address)

  // Start music playing: PlayMusicStream(Music) => void
  const _PlayMusicStream = mod.cwrap('PlayMusicStream', 'pointer', ['pointer'])
  raylib.PlayMusicStream = (music) => _PlayMusicStream(music._address)

  // Check if music is playing: IsMusicStreamPlaying(Music) => bool
  const _IsMusicStreamPlaying = mod.cwrap('IsMusicStreamPlaying', 'boolean', ['pointer'])
  raylib.IsMusicStreamPlaying = (music) => _IsMusicStreamPlaying(music._address)

  // Updates buffers for music streaming: UpdateMusicStream(Music) => void
  const _UpdateMusicStream = mod.cwrap('UpdateMusicStream', 'pointer', ['pointer'])
  raylib.UpdateMusicStream = (music) => _UpdateMusicStream(music._address)

  // Stop music playing: StopMusicStream(Music) => void
  const _StopMusicStream = mod.cwrap('StopMusicStream', 'pointer', ['pointer'])
  raylib.StopMusicStream = (music) => _StopMusicStream(music._address)

  // Pause music playing: PauseMusicStream(Music) => void
  const _PauseMusicStream = mod.cwrap('PauseMusicStream', 'pointer', ['pointer'])
  raylib.PauseMusicStream = (music) => _PauseMusicStream(music._address)

  // Resume playing paused music: ResumeMusicStream(Music) => void
  const _ResumeMusicStream = mod.cwrap('ResumeMusicStream', 'pointer', ['pointer'])
  raylib.ResumeMusicStream = (music) => _ResumeMusicStream(music._address)

  // Seek music to a position (in seconds): SeekMusicStream(Music, float) => void
  const _SeekMusicStream = mod.cwrap('SeekMusicStream', 'pointer', ['pointer', 'number'])
  raylib.SeekMusicStream = (music, position) => _SeekMusicStream(music._address, position)

  // Set volume for music (1.0 is max level): SetMusicVolume(Music, float) => void
  const _SetMusicVolume = mod.cwrap('SetMusicVolume', 'pointer', ['pointer', 'number'])
  raylib.SetMusicVolume = (music, volume) => _SetMusicVolume(music._address, volume)

  // Set pitch for a music (1.0 is base level): SetMusicPitch(Music, float) => void
  const _SetMusicPitch = mod.cwrap('SetMusicPitch', 'pointer', ['pointer', 'number'])
  raylib.SetMusicPitch = (music, pitch) => _SetMusicPitch(music._address, pitch)

  // Set pan for a music (0.5 is center): SetMusicPan(Music, float) => void
  const _SetMusicPan = mod.cwrap('SetMusicPan', 'pointer', ['pointer', 'number'])
  raylib.SetMusicPan = (music, pan) => _SetMusicPan(music._address, pan)

  // Get music time length (in seconds): GetMusicTimeLength(Music) => float
  const _GetMusicTimeLength = mod.cwrap('GetMusicTimeLength', 'number', ['pointer'])
  raylib.GetMusicTimeLength = (music) => _GetMusicTimeLength(music._address)

  // Get current music time played (in seconds): GetMusicTimePlayed(Music) => float
  const _GetMusicTimePlayed = mod.cwrap('GetMusicTimePlayed', 'number', ['pointer'])
  raylib.GetMusicTimePlayed = (music) => _GetMusicTimePlayed(music._address)

  // Load audio stream (to stream raw audio pcm data): LoadAudioStream(unsigned int, unsigned int, unsigned int) => AudioStream
  const _LoadAudioStream = mod.cwrap('LoadAudioStream', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.LoadAudioStream = (sampleRate, sampleSize, channels) => {
    const _ret = new raylib.AudioStream()
    _LoadAudioStream(_ret._address, sampleRate, sampleSize, channels)
    return _ret
  }

  // Checks if an audio stream is valid (buffers initialized): IsAudioStreamValid(AudioStream) => bool
  const _IsAudioStreamValid = mod.cwrap('IsAudioStreamValid', 'boolean', ['pointer'])
  raylib.IsAudioStreamValid = (stream) => _IsAudioStreamValid(stream._address)

  // Unload audio stream and free memory: UnloadAudioStream(AudioStream) => void
  const _UnloadAudioStream = mod.cwrap('UnloadAudioStream', 'pointer', ['pointer'])
  raylib.UnloadAudioStream = (stream) => _UnloadAudioStream(stream._address)

  // Update audio stream buffers with data: UpdateAudioStream(AudioStream, const void *, int) => void
  const _UpdateAudioStream = mod.cwrap('UpdateAudioStream', 'pointer', ['pointer', 'pointer', 'number'])
  raylib.UpdateAudioStream = (stream, data, frameCount) => _UpdateAudioStream(stream._address, data._address, frameCount)

  // Check if any audio stream buffers requires refill: IsAudioStreamProcessed(AudioStream) => bool
  const _IsAudioStreamProcessed = mod.cwrap('IsAudioStreamProcessed', 'boolean', ['pointer'])
  raylib.IsAudioStreamProcessed = (stream) => _IsAudioStreamProcessed(stream._address)

  // Play audio stream: PlayAudioStream(AudioStream) => void
  const _PlayAudioStream = mod.cwrap('PlayAudioStream', 'pointer', ['pointer'])
  raylib.PlayAudioStream = (stream) => _PlayAudioStream(stream._address)

  // Pause audio stream: PauseAudioStream(AudioStream) => void
  const _PauseAudioStream = mod.cwrap('PauseAudioStream', 'pointer', ['pointer'])
  raylib.PauseAudioStream = (stream) => _PauseAudioStream(stream._address)

  // Resume audio stream: ResumeAudioStream(AudioStream) => void
  const _ResumeAudioStream = mod.cwrap('ResumeAudioStream', 'pointer', ['pointer'])
  raylib.ResumeAudioStream = (stream) => _ResumeAudioStream(stream._address)

  // Check if audio stream is playing: IsAudioStreamPlaying(AudioStream) => bool
  const _IsAudioStreamPlaying = mod.cwrap('IsAudioStreamPlaying', 'boolean', ['pointer'])
  raylib.IsAudioStreamPlaying = (stream) => _IsAudioStreamPlaying(stream._address)

  // Stop audio stream: StopAudioStream(AudioStream) => void
  const _StopAudioStream = mod.cwrap('StopAudioStream', 'pointer', ['pointer'])
  raylib.StopAudioStream = (stream) => _StopAudioStream(stream._address)

  // Set volume for audio stream (1.0 is max level): SetAudioStreamVolume(AudioStream, float) => void
  const _SetAudioStreamVolume = mod.cwrap('SetAudioStreamVolume', 'pointer', ['pointer', 'number'])
  raylib.SetAudioStreamVolume = (stream, volume) => _SetAudioStreamVolume(stream._address, volume)

  // Set pitch for audio stream (1.0 is base level): SetAudioStreamPitch(AudioStream, float) => void
  const _SetAudioStreamPitch = mod.cwrap('SetAudioStreamPitch', 'pointer', ['pointer', 'number'])
  raylib.SetAudioStreamPitch = (stream, pitch) => _SetAudioStreamPitch(stream._address, pitch)

  // Set pan for audio stream (0.5 is centered): SetAudioStreamPan(AudioStream, float) => void
  const _SetAudioStreamPan = mod.cwrap('SetAudioStreamPan', 'pointer', ['pointer', 'number'])
  raylib.SetAudioStreamPan = (stream, pan) => _SetAudioStreamPan(stream._address, pan)

  // Default size for new audio streams: SetAudioStreamBufferSizeDefault(int) => void
  const _SetAudioStreamBufferSizeDefault = mod.cwrap('SetAudioStreamBufferSizeDefault', 'pointer', ['number'])
  raylib.SetAudioStreamBufferSizeDefault = (size) => _SetAudioStreamBufferSizeDefault(size)

  // Audio thread callback to request new data: SetAudioStreamCallback(AudioStream, AudioCallback) => void
  const _SetAudioStreamCallback = mod.cwrap('SetAudioStreamCallback', 'pointer', ['pointer', 'pointer'])
  raylib.SetAudioStreamCallback = (stream, callback) => _SetAudioStreamCallback(stream._address, callback._address)

  // Attach audio stream processor to stream, receives the samples as 'float': AttachAudioStreamProcessor(AudioStream, AudioCallback) => void
  const _AttachAudioStreamProcessor = mod.cwrap('AttachAudioStreamProcessor', 'pointer', ['pointer', 'pointer'])
  raylib.AttachAudioStreamProcessor = (stream, processor) => _AttachAudioStreamProcessor(stream._address, processor._address)

  // Detach audio stream processor from stream: DetachAudioStreamProcessor(AudioStream, AudioCallback) => void
  const _DetachAudioStreamProcessor = mod.cwrap('DetachAudioStreamProcessor', 'pointer', ['pointer', 'pointer'])
  raylib.DetachAudioStreamProcessor = (stream, processor) => _DetachAudioStreamProcessor(stream._address, processor._address)

  // Attach audio stream processor to the entire audio pipeline, receives the samples as 'float': AttachAudioMixedProcessor(AudioCallback) => void
  const _AttachAudioMixedProcessor = mod.cwrap('AttachAudioMixedProcessor', 'pointer', ['pointer'])
  raylib.AttachAudioMixedProcessor = (processor) => _AttachAudioMixedProcessor(processor._address)

  // Detach audio stream processor from the entire audio pipeline: DetachAudioMixedProcessor(AudioCallback) => void
  const _DetachAudioMixedProcessor = mod.cwrap('DetachAudioMixedProcessor', 'pointer', ['pointer'])
  raylib.DetachAudioMixedProcessor = (processor) => _DetachAudioMixedProcessor(processor._address)

  // Enable gui controls (global state): GuiEnable() => void
  const _GuiEnable = mod.cwrap('GuiEnable', 'pointer', [])
  raylib.GuiEnable = () => _GuiEnable()

  // Disable gui controls (global state): GuiDisable() => void
  const _GuiDisable = mod.cwrap('GuiDisable', 'pointer', [])
  raylib.GuiDisable = () => _GuiDisable()

  // Lock gui controls (global state): GuiLock() => void
  const _GuiLock = mod.cwrap('GuiLock', 'pointer', [])
  raylib.GuiLock = () => _GuiLock()

  // Unlock gui controls (global state): GuiUnlock() => void
  const _GuiUnlock = mod.cwrap('GuiUnlock', 'pointer', [])
  raylib.GuiUnlock = () => _GuiUnlock()

  // Check if gui is locked (global state): GuiIsLocked() => bool
  const _GuiIsLocked = mod.cwrap('GuiIsLocked', 'boolean', [])
  raylib.GuiIsLocked = () => _GuiIsLocked()

  // Set gui controls alpha (global state), alpha goes from 0.0f to 1.0f: GuiSetAlpha(float) => void
  const _GuiSetAlpha = mod.cwrap('GuiSetAlpha', 'pointer', ['number'])
  raylib.GuiSetAlpha = (alpha) => _GuiSetAlpha(alpha)

  // Set gui state (global state): GuiSetState(int) => void
  const _GuiSetState = mod.cwrap('GuiSetState', 'pointer', ['number'])
  raylib.GuiSetState = (state) => _GuiSetState(state)

  // Get gui state (global state): GuiGetState() => int
  const _GuiGetState = mod.cwrap('GuiGetState', 'number', [])
  raylib.GuiGetState = () => _GuiGetState()

  // Set gui custom font (global state): GuiSetFont(Font) => void
  const _GuiSetFont = mod.cwrap('GuiSetFont', 'pointer', ['pointer'])
  raylib.GuiSetFont = (font) => _GuiSetFont(font._address)

  // Get gui custom font (global state): GuiGetFont() => Font
  const _GuiGetFont = mod.cwrap('GuiGetFont', 'void', ['pointer'])
  raylib.GuiGetFont = () => {
    const _ret = new raylib.Font()
    _GuiGetFont(_ret._address)
    return _ret
  }

  // Set one style property: GuiSetStyle(int, int, int) => void
  const _GuiSetStyle = mod.cwrap('GuiSetStyle', 'pointer', ['number', 'number', 'number'])
  raylib.GuiSetStyle = (control, property, value) => _GuiSetStyle(control, property, value)

  // Get one style property: GuiGetStyle(int, int) => int
  const _GuiGetStyle = mod.cwrap('GuiGetStyle', 'number', ['number', 'number'])
  raylib.GuiGetStyle = (control, property) => _GuiGetStyle(control, property)

  // Load style file over global style variable (.rgs): GuiLoadStyle(const char *) => void
  const _GuiLoadStyle = mod.cwrap('GuiLoadStyle', 'pointer', ['string'])
  raylib.GuiLoadStyle = (fileName) => _GuiLoadStyle(fileName)

  // Load style default over global style: GuiLoadStyleDefault() => void
  const _GuiLoadStyleDefault = mod.cwrap('GuiLoadStyleDefault', 'pointer', [])
  raylib.GuiLoadStyleDefault = () => _GuiLoadStyleDefault()

  // Enable gui tooltips (global state): GuiEnableTooltip() => void
  const _GuiEnableTooltip = mod.cwrap('GuiEnableTooltip', 'pointer', [])
  raylib.GuiEnableTooltip = () => _GuiEnableTooltip()

  // Disable gui tooltips (global state): GuiDisableTooltip() => void
  const _GuiDisableTooltip = mod.cwrap('GuiDisableTooltip', 'pointer', [])
  raylib.GuiDisableTooltip = () => _GuiDisableTooltip()

  // Set tooltip string: GuiSetTooltip(const char *) => void
  const _GuiSetTooltip = mod.cwrap('GuiSetTooltip', 'pointer', ['string'])
  raylib.GuiSetTooltip = (tooltip) => _GuiSetTooltip(tooltip)

  // Get text with icon id prepended (if supported): GuiIconText(int, const char *) => const char *
  const _GuiIconText = mod.cwrap('GuiIconText', 'string', ['number', 'string'])
  raylib.GuiIconText = (iconId, text) => _GuiIconText(iconId, text)

  // Set default icon drawing size: GuiSetIconScale(int) => void
  const _GuiSetIconScale = mod.cwrap('GuiSetIconScale', 'pointer', ['number'])
  raylib.GuiSetIconScale = (scale) => _GuiSetIconScale(scale)

  // Get raygui icons data pointer: GuiGetIcons() => unsigned int *
  const _GuiGetIcons = mod.cwrap('GuiGetIcons', 'pointer', [])
  raylib.GuiGetIcons = () => _GuiGetIcons()

  // Load raygui icons file (.rgi) into internal icons data: GuiLoadIcons(const char *, bool) => char **
  const _GuiLoadIcons = mod.cwrap('GuiLoadIcons', 'pointer', ['string', 'boolean'])
  raylib.GuiLoadIcons = (fileName, loadIconsName) => _GuiLoadIcons(fileName, loadIconsName)

  // Draw icon using pixel size at specified position: GuiDrawIcon(int, int, int, int, Color) => void
  const _GuiDrawIcon = mod.cwrap('GuiDrawIcon', 'pointer', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.GuiDrawIcon = (iconId, posX, posY, pixelSize, color) => _GuiDrawIcon(iconId, posX, posY, pixelSize, color._address)

  // Window Box control, shows a window that can be closed: GuiWindowBox(Rectangle, const char *) => int
  const _GuiWindowBox = mod.cwrap('GuiWindowBox', 'number', ['pointer', 'string'])
  raylib.GuiWindowBox = (bounds, title) => _GuiWindowBox(bounds._address, title)

  // Group Box control with text name: GuiGroupBox(Rectangle, const char *) => int
  const _GuiGroupBox = mod.cwrap('GuiGroupBox', 'number', ['pointer', 'string'])
  raylib.GuiGroupBox = (bounds, text) => _GuiGroupBox(bounds._address, text)

  // Line separator control, could contain text: GuiLine(Rectangle, const char *) => int
  const _GuiLine = mod.cwrap('GuiLine', 'number', ['pointer', 'string'])
  raylib.GuiLine = (bounds, text) => _GuiLine(bounds._address, text)

  // Panel control, useful to group controls: GuiPanel(Rectangle, const char *) => int
  const _GuiPanel = mod.cwrap('GuiPanel', 'number', ['pointer', 'string'])
  raylib.GuiPanel = (bounds, text) => _GuiPanel(bounds._address, text)

  // Tab Bar control, returns TAB to be closed or -1: GuiTabBar(Rectangle, const char **, int, int *) => int
  const _GuiTabBar = mod.cwrap('GuiTabBar', 'number', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.GuiTabBar = (bounds, text, count, active) => _GuiTabBar(bounds._address, text._address, count, active._address)

  // Scroll Panel control: GuiScrollPanel(Rectangle, const char *, Rectangle, Vector2 *, Rectangle *) => int
  const _GuiScrollPanel = mod.cwrap('GuiScrollPanel', 'number', ['pointer', 'string', 'pointer', 'pointer', 'pointer'])
  raylib.GuiScrollPanel = (bounds, text, content, scroll, view) => _GuiScrollPanel(bounds._address, text, content._address, scroll._address, view._address)

  // Label control, shows text: GuiLabel(Rectangle, const char *) => int
  const _GuiLabel = mod.cwrap('GuiLabel', 'number', ['pointer', 'string'])
  raylib.GuiLabel = (bounds, text) => _GuiLabel(bounds._address, text)

  // Button control, returns true when clicked: GuiButton(Rectangle, const char *) => int
  const _GuiButton = mod.cwrap('GuiButton', 'number', ['pointer', 'string'])
  raylib.GuiButton = (bounds, text) => _GuiButton(bounds._address, text)

  // Label button control, show true when clicked: GuiLabelButton(Rectangle, const char *) => int
  const _GuiLabelButton = mod.cwrap('GuiLabelButton', 'number', ['pointer', 'string'])
  raylib.GuiLabelButton = (bounds, text) => _GuiLabelButton(bounds._address, text)

  // Toggle Button control, returns true when active: GuiToggle(Rectangle, const char *, bool *) => int
  const _GuiToggle = mod.cwrap('GuiToggle', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiToggle = (bounds, text, active) => _GuiToggle(bounds._address, text, active._address)

  // Toggle Group control, returns active toggle index: GuiToggleGroup(Rectangle, const char *, int *) => int
  const _GuiToggleGroup = mod.cwrap('GuiToggleGroup', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiToggleGroup = (bounds, text, active) => _GuiToggleGroup(bounds._address, text, active._address)

  // Toggle Slider control, returns true when clicked: GuiToggleSlider(Rectangle, const char *, int *) => int
  const _GuiToggleSlider = mod.cwrap('GuiToggleSlider', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiToggleSlider = (bounds, text, active) => _GuiToggleSlider(bounds._address, text, active._address)

  // Check Box control, returns true when active: GuiCheckBox(Rectangle, const char *, bool *) => int
  const _GuiCheckBox = mod.cwrap('GuiCheckBox', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiCheckBox = (bounds, text, checked) => _GuiCheckBox(bounds._address, text, checked._address)

  // Combo Box control, returns selected item index: GuiComboBox(Rectangle, const char *, int *) => int
  const _GuiComboBox = mod.cwrap('GuiComboBox', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiComboBox = (bounds, text, active) => _GuiComboBox(bounds._address, text, active._address)

  // Dropdown Box control, returns selected item: GuiDropdownBox(Rectangle, const char *, int *, bool) => int
  const _GuiDropdownBox = mod.cwrap('GuiDropdownBox', 'number', ['pointer', 'string', 'pointer', 'boolean'])
  raylib.GuiDropdownBox = (bounds, text, active, editMode) => _GuiDropdownBox(bounds._address, text, active._address, editMode)

  // Spinner control, returns selected value: GuiSpinner(Rectangle, const char *, int *, int, int, bool) => int
  const _GuiSpinner = mod.cwrap('GuiSpinner', 'number', ['pointer', 'string', 'pointer', 'number', 'number', 'boolean'])
  raylib.GuiSpinner = (bounds, text, value, minValue, maxValue, editMode) => _GuiSpinner(bounds._address, text, value._address, minValue, maxValue, editMode)

  // Value Box control, updates input text with numbers: GuiValueBox(Rectangle, const char *, int *, int, int, bool) => int
  const _GuiValueBox = mod.cwrap('GuiValueBox', 'number', ['pointer', 'string', 'pointer', 'number', 'number', 'boolean'])
  raylib.GuiValueBox = (bounds, text, value, minValue, maxValue, editMode) => _GuiValueBox(bounds._address, text, value._address, minValue, maxValue, editMode)

  // Text Box control, updates input text: GuiTextBox(Rectangle, char *, int, bool) => int
  const _GuiTextBox = mod.cwrap('GuiTextBox', 'number', ['pointer', 'string', 'number', 'boolean'])
  raylib.GuiTextBox = (bounds, text, textSize, editMode) => _GuiTextBox(bounds._address, text, textSize, editMode)

  // Slider control, returns selected value: GuiSlider(Rectangle, const char *, const char *, float *, float, float) => int
  const _GuiSlider = mod.cwrap('GuiSlider', 'number', ['pointer', 'string', 'string', 'pointer', 'number', 'number'])
  raylib.GuiSlider = (bounds, textLeft, textRight, value, minValue, maxValue) => _GuiSlider(bounds._address, textLeft, textRight, value._address, minValue, maxValue)

  // Slider Bar control, returns selected value: GuiSliderBar(Rectangle, const char *, const char *, float *, float, float) => int
  const _GuiSliderBar = mod.cwrap('GuiSliderBar', 'number', ['pointer', 'string', 'string', 'pointer', 'number', 'number'])
  raylib.GuiSliderBar = (bounds, textLeft, textRight, value, minValue, maxValue) => _GuiSliderBar(bounds._address, textLeft, textRight, value._address, minValue, maxValue)

  // Progress Bar control, shows current progress value: GuiProgressBar(Rectangle, const char *, const char *, float *, float, float) => int
  const _GuiProgressBar = mod.cwrap('GuiProgressBar', 'number', ['pointer', 'string', 'string', 'pointer', 'number', 'number'])
  raylib.GuiProgressBar = (bounds, textLeft, textRight, value, minValue, maxValue) => _GuiProgressBar(bounds._address, textLeft, textRight, value._address, minValue, maxValue)

  // Status Bar control, shows info text: GuiStatusBar(Rectangle, const char *) => int
  const _GuiStatusBar = mod.cwrap('GuiStatusBar', 'number', ['pointer', 'string'])
  raylib.GuiStatusBar = (bounds, text) => _GuiStatusBar(bounds._address, text)

  // Dummy control for placeholders: GuiDummyRec(Rectangle, const char *) => int
  const _GuiDummyRec = mod.cwrap('GuiDummyRec', 'number', ['pointer', 'string'])
  raylib.GuiDummyRec = (bounds, text) => _GuiDummyRec(bounds._address, text)

  // Grid control, returns mouse cell position: GuiGrid(Rectangle, const char *, float, int, Vector2 *) => int
  const _GuiGrid = mod.cwrap('GuiGrid', 'number', ['pointer', 'string', 'number', 'number', 'pointer'])
  raylib.GuiGrid = (bounds, text, spacing, subdivs, mouseCell) => _GuiGrid(bounds._address, text, spacing, subdivs, mouseCell._address)

  // List View control, returns selected list item index: GuiListView(Rectangle, const char *, int *, int *) => int
  const _GuiListView = mod.cwrap('GuiListView', 'number', ['pointer', 'string', 'pointer', 'pointer'])
  raylib.GuiListView = (bounds, text, scrollIndex, active) => _GuiListView(bounds._address, text, scrollIndex._address, active._address)

  // List View with extended parameters: GuiListViewEx(Rectangle, const char **, int, int *, int *, int *) => int
  const _GuiListViewEx = mod.cwrap('GuiListViewEx', 'number', ['pointer', 'pointer', 'number', 'pointer', 'pointer', 'pointer'])
  raylib.GuiListViewEx = (bounds, text, count, scrollIndex, active, focus) => _GuiListViewEx(bounds._address, text._address, count, scrollIndex._address, active._address, focus._address)

  // Message Box control, displays a message: GuiMessageBox(Rectangle, const char *, const char *, const char *) => int
  const _GuiMessageBox = mod.cwrap('GuiMessageBox', 'number', ['pointer', 'string', 'string', 'string'])
  raylib.GuiMessageBox = (bounds, title, message, buttons) => _GuiMessageBox(bounds._address, title, message, buttons)

  // Text Input Box control, ask for text, supports secret: GuiTextInputBox(Rectangle, const char *, const char *, const char *, char *, int, bool *) => int
  const _GuiTextInputBox = mod.cwrap('GuiTextInputBox', 'number', ['pointer', 'string', 'string', 'string', 'string', 'number', 'pointer'])
  raylib.GuiTextInputBox = (bounds, title, message, buttons, text, textMaxSize, secretViewActive) => _GuiTextInputBox(bounds._address, title, message, buttons, text, textMaxSize, secretViewActive._address)

  // Color Picker control (multiple color controls): GuiColorPicker(Rectangle, const char *, Color *) => int
  const _GuiColorPicker = mod.cwrap('GuiColorPicker', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiColorPicker = (bounds, text, color) => _GuiColorPicker(bounds._address, text, color._address)

  // Color Panel control: GuiColorPanel(Rectangle, const char *, Color *) => int
  const _GuiColorPanel = mod.cwrap('GuiColorPanel', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiColorPanel = (bounds, text, color) => _GuiColorPanel(bounds._address, text, color._address)

  // Color Bar Alpha control: GuiColorBarAlpha(Rectangle, const char *, float *) => int
  const _GuiColorBarAlpha = mod.cwrap('GuiColorBarAlpha', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiColorBarAlpha = (bounds, text, alpha) => _GuiColorBarAlpha(bounds._address, text, alpha._address)

  // Color Bar Hue control: GuiColorBarHue(Rectangle, const char *, float *) => int
  const _GuiColorBarHue = mod.cwrap('GuiColorBarHue', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiColorBarHue = (bounds, text, value) => _GuiColorBarHue(bounds._address, text, value._address)

  // Color Picker control that avoids conversion to RGB on each call (multiple color controls): GuiColorPickerHSV(Rectangle, const char *, Vector3 *) => int
  const _GuiColorPickerHSV = mod.cwrap('GuiColorPickerHSV', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiColorPickerHSV = (bounds, text, colorHsv) => _GuiColorPickerHSV(bounds._address, text, colorHsv._address)

  // Color Panel control that returns HSV color value, used by GuiColorPickerHSV(): GuiColorPanelHSV(Rectangle, const char *, Vector3 *) => int
  const _GuiColorPanelHSV = mod.cwrap('GuiColorPanelHSV', 'number', ['pointer', 'string', 'pointer'])
  raylib.GuiColorPanelHSV = (bounds, text, colorHsv) => _GuiColorPanelHSV(bounds._address, text, colorHsv._address)

  // Ease: Linear: EaseLinearNone(float, float, float, float) => float
  const _EaseLinearNone = mod.cwrap('EaseLinearNone', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseLinearNone = (t, b, c, d) => _EaseLinearNone(t, b, c, d)

  // Ease: Linear In: EaseLinearIn(float, float, float, float) => float
  const _EaseLinearIn = mod.cwrap('EaseLinearIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseLinearIn = (t, b, c, d) => _EaseLinearIn(t, b, c, d)

  // Ease: Linear Out: EaseLinearOut(float, float, float, float) => float
  const _EaseLinearOut = mod.cwrap('EaseLinearOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseLinearOut = (t, b, c, d) => _EaseLinearOut(t, b, c, d)

  // Ease: Linear In Out: EaseLinearInOut(float, float, float, float) => float
  const _EaseLinearInOut = mod.cwrap('EaseLinearInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseLinearInOut = (t, b, c, d) => _EaseLinearInOut(t, b, c, d)

  // Ease: Sine In: EaseSineIn(float, float, float, float) => float
  const _EaseSineIn = mod.cwrap('EaseSineIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseSineIn = (t, b, c, d) => _EaseSineIn(t, b, c, d)

  // Ease: Sine Out: EaseSineOut(float, float, float, float) => float
  const _EaseSineOut = mod.cwrap('EaseSineOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseSineOut = (t, b, c, d) => _EaseSineOut(t, b, c, d)

  // Ease: Sine Out: EaseSineInOut(float, float, float, float) => float
  const _EaseSineInOut = mod.cwrap('EaseSineInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseSineInOut = (t, b, c, d) => _EaseSineInOut(t, b, c, d)

  // Ease: Circular In: EaseCircIn(float, float, float, float) => float
  const _EaseCircIn = mod.cwrap('EaseCircIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseCircIn = (t, b, c, d) => _EaseCircIn(t, b, c, d)

  // Ease: Circular Out: EaseCircOut(float, float, float, float) => float
  const _EaseCircOut = mod.cwrap('EaseCircOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseCircOut = (t, b, c, d) => _EaseCircOut(t, b, c, d)

  // Ease: Circular In Out: EaseCircInOut(float, float, float, float) => float
  const _EaseCircInOut = mod.cwrap('EaseCircInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseCircInOut = (t, b, c, d) => _EaseCircInOut(t, b, c, d)

  // Ease: Cubic In: EaseCubicIn(float, float, float, float) => float
  const _EaseCubicIn = mod.cwrap('EaseCubicIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseCubicIn = (t, b, c, d) => _EaseCubicIn(t, b, c, d)

  // Ease: Cubic Out: EaseCubicOut(float, float, float, float) => float
  const _EaseCubicOut = mod.cwrap('EaseCubicOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseCubicOut = (t, b, c, d) => _EaseCubicOut(t, b, c, d)

  // Ease: Cubic In Out: EaseCubicInOut(float, float, float, float) => float
  const _EaseCubicInOut = mod.cwrap('EaseCubicInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseCubicInOut = (t, b, c, d) => _EaseCubicInOut(t, b, c, d)

  // Ease: Quadratic In: EaseQuadIn(float, float, float, float) => float
  const _EaseQuadIn = mod.cwrap('EaseQuadIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseQuadIn = (t, b, c, d) => _EaseQuadIn(t, b, c, d)

  // Ease: Quadratic Out: EaseQuadOut(float, float, float, float) => float
  const _EaseQuadOut = mod.cwrap('EaseQuadOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseQuadOut = (t, b, c, d) => _EaseQuadOut(t, b, c, d)

  // Ease: Quadratic In Out: EaseQuadInOut(float, float, float, float) => float
  const _EaseQuadInOut = mod.cwrap('EaseQuadInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseQuadInOut = (t, b, c, d) => _EaseQuadInOut(t, b, c, d)

  // Ease: Exponential In: EaseExpoIn(float, float, float, float) => float
  const _EaseExpoIn = mod.cwrap('EaseExpoIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseExpoIn = (t, b, c, d) => _EaseExpoIn(t, b, c, d)

  // Ease: Exponential Out: EaseExpoOut(float, float, float, float) => float
  const _EaseExpoOut = mod.cwrap('EaseExpoOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseExpoOut = (t, b, c, d) => _EaseExpoOut(t, b, c, d)

  // Ease: Exponential In Out: EaseExpoInOut(float, float, float, float) => float
  const _EaseExpoInOut = mod.cwrap('EaseExpoInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseExpoInOut = (t, b, c, d) => _EaseExpoInOut(t, b, c, d)

  // Ease: Back In: EaseBackIn(float, float, float, float) => float
  const _EaseBackIn = mod.cwrap('EaseBackIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseBackIn = (t, b, c, d) => _EaseBackIn(t, b, c, d)

  // Ease: Back Out: EaseBackOut(float, float, float, float) => float
  const _EaseBackOut = mod.cwrap('EaseBackOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseBackOut = (t, b, c, d) => _EaseBackOut(t, b, c, d)

  // Ease: Back In Out: EaseBackInOut(float, float, float, float) => float
  const _EaseBackInOut = mod.cwrap('EaseBackInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseBackInOut = (t, b, c, d) => _EaseBackInOut(t, b, c, d)

  // Ease: Bounce Out: EaseBounceOut(float, float, float, float) => float
  const _EaseBounceOut = mod.cwrap('EaseBounceOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseBounceOut = (t, b, c, d) => _EaseBounceOut(t, b, c, d)

  // Ease: Bounce In: EaseBounceIn(float, float, float, float) => float
  const _EaseBounceIn = mod.cwrap('EaseBounceIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseBounceIn = (t, b, c, d) => _EaseBounceIn(t, b, c, d)

  // Ease: Bounce In Out: EaseBounceInOut(float, float, float, float) => float
  const _EaseBounceInOut = mod.cwrap('EaseBounceInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseBounceInOut = (t, b, c, d) => _EaseBounceInOut(t, b, c, d)

  // Ease: Elastic In: EaseElasticIn(float, float, float, float) => float
  const _EaseElasticIn = mod.cwrap('EaseElasticIn', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseElasticIn = (t, b, c, d) => _EaseElasticIn(t, b, c, d)

  // Ease: Elastic Out: EaseElasticOut(float, float, float, float) => float
  const _EaseElasticOut = mod.cwrap('EaseElasticOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseElasticOut = (t, b, c, d) => _EaseElasticOut(t, b, c, d)

  // Ease: Elastic In Out: EaseElasticInOut(float, float, float, float) => float
  const _EaseElasticInOut = mod.cwrap('EaseElasticInOut', 'number', ['number', 'number', 'number', 'number'])
  raylib.EaseElasticInOut = (t, b, c, d) => _EaseElasticInOut(t, b, c, d)

  // Choose the current matrix to be transformed: rlMatrixMode(int) => void
  const _rlMatrixMode = mod.cwrap('rlMatrixMode', 'pointer', ['number'])
  raylib.rlMatrixMode = (mode) => _rlMatrixMode(mode)

  // Push the current matrix to stack: rlPushMatrix() => void
  const _rlPushMatrix = mod.cwrap('rlPushMatrix', 'pointer', [])
  raylib.rlPushMatrix = () => _rlPushMatrix()

  // Pop latest inserted matrix from stack: rlPopMatrix() => void
  const _rlPopMatrix = mod.cwrap('rlPopMatrix', 'pointer', [])
  raylib.rlPopMatrix = () => _rlPopMatrix()

  // Reset current matrix to identity matrix: rlLoadIdentity() => void
  const _rlLoadIdentity = mod.cwrap('rlLoadIdentity', 'pointer', [])
  raylib.rlLoadIdentity = () => _rlLoadIdentity()

  // Multiply the current matrix by a translation matrix: rlTranslatef(float, float, float) => void
  const _rlTranslatef = mod.cwrap('rlTranslatef', 'pointer', ['number', 'number', 'number'])
  raylib.rlTranslatef = (x, y, z) => _rlTranslatef(x, y, z)

  // Multiply the current matrix by a rotation matrix: rlRotatef(float, float, float, float) => void
  const _rlRotatef = mod.cwrap('rlRotatef', 'pointer', ['number', 'number', 'number', 'number'])
  raylib.rlRotatef = (angle, x, y, z) => _rlRotatef(angle, x, y, z)

  // Multiply the current matrix by a scaling matrix: rlScalef(float, float, float) => void
  const _rlScalef = mod.cwrap('rlScalef', 'pointer', ['number', 'number', 'number'])
  raylib.rlScalef = (x, y, z) => _rlScalef(x, y, z)

  // Multiply the current matrix by another matrix: rlMultMatrixf(const float *) => void
  const _rlMultMatrixf = mod.cwrap('rlMultMatrixf', 'pointer', ['pointer'])
  raylib.rlMultMatrixf = (matf) => _rlMultMatrixf(matf._address)

  // : rlFrustum(double, double, double, double, double, double) => void
  const _rlFrustum = mod.cwrap('rlFrustum', 'pointer', ['number', 'number', 'number', 'number', 'number', 'number'])
  raylib.rlFrustum = (left, right, bottom, top, znear, zfar) => _rlFrustum(left, right, bottom, top, znear, zfar)

  // : rlOrtho(double, double, double, double, double, double) => void
  const _rlOrtho = mod.cwrap('rlOrtho', 'pointer', ['number', 'number', 'number', 'number', 'number', 'number'])
  raylib.rlOrtho = (left, right, bottom, top, znear, zfar) => _rlOrtho(left, right, bottom, top, znear, zfar)

  // Set the viewport area: rlViewport(int, int, int, int) => void
  const _rlViewport = mod.cwrap('rlViewport', 'pointer', ['number', 'number', 'number', 'number'])
  raylib.rlViewport = (x, y, width, height) => _rlViewport(x, y, width, height)

  // Set clip planes distances: rlSetClipPlanes(double, double) => void
  const _rlSetClipPlanes = mod.cwrap('rlSetClipPlanes', 'pointer', ['number', 'number'])
  raylib.rlSetClipPlanes = (nearPlane, farPlane) => _rlSetClipPlanes(nearPlane, farPlane)

  // Get cull plane distance near: rlGetCullDistanceNear() => double
  const _rlGetCullDistanceNear = mod.cwrap('rlGetCullDistanceNear', 'number', [])
  raylib.rlGetCullDistanceNear = () => _rlGetCullDistanceNear()

  // Get cull plane distance far: rlGetCullDistanceFar() => double
  const _rlGetCullDistanceFar = mod.cwrap('rlGetCullDistanceFar', 'number', [])
  raylib.rlGetCullDistanceFar = () => _rlGetCullDistanceFar()

  // Initialize drawing mode (how to organize vertex): rlBegin(int) => void
  const _rlBegin = mod.cwrap('rlBegin', 'pointer', ['number'])
  raylib.rlBegin = (mode) => _rlBegin(mode)

  // Finish vertex providing: rlEnd() => void
  const _rlEnd = mod.cwrap('rlEnd', 'pointer', [])
  raylib.rlEnd = () => _rlEnd()

  // Define one vertex (position) - 2 int: rlVertex2i(int, int) => void
  const _rlVertex2i = mod.cwrap('rlVertex2i', 'pointer', ['number', 'number'])
  raylib.rlVertex2i = (x, y) => _rlVertex2i(x, y)

  // Define one vertex (position) - 2 float: rlVertex2f(float, float) => void
  const _rlVertex2f = mod.cwrap('rlVertex2f', 'pointer', ['number', 'number'])
  raylib.rlVertex2f = (x, y) => _rlVertex2f(x, y)

  // Define one vertex (position) - 3 float: rlVertex3f(float, float, float) => void
  const _rlVertex3f = mod.cwrap('rlVertex3f', 'pointer', ['number', 'number', 'number'])
  raylib.rlVertex3f = (x, y, z) => _rlVertex3f(x, y, z)

  // Define one vertex (texture coordinate) - 2 float: rlTexCoord2f(float, float) => void
  const _rlTexCoord2f = mod.cwrap('rlTexCoord2f', 'pointer', ['number', 'number'])
  raylib.rlTexCoord2f = (x, y) => _rlTexCoord2f(x, y)

  // Define one vertex (normal) - 3 float: rlNormal3f(float, float, float) => void
  const _rlNormal3f = mod.cwrap('rlNormal3f', 'pointer', ['number', 'number', 'number'])
  raylib.rlNormal3f = (x, y, z) => _rlNormal3f(x, y, z)

  // Define one vertex (color) - 4 byte: rlColor4ub(unsigned char, unsigned char, unsigned char, unsigned char) => void
  const _rlColor4ub = mod.cwrap('rlColor4ub', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.rlColor4ub = (r, g, b, a) => _rlColor4ub(r._address, g._address, b._address, a._address)

  // Define one vertex (color) - 3 float: rlColor3f(float, float, float) => void
  const _rlColor3f = mod.cwrap('rlColor3f', 'pointer', ['number', 'number', 'number'])
  raylib.rlColor3f = (x, y, z) => _rlColor3f(x, y, z)

  // Define one vertex (color) - 4 float: rlColor4f(float, float, float, float) => void
  const _rlColor4f = mod.cwrap('rlColor4f', 'pointer', ['number', 'number', 'number', 'number'])
  raylib.rlColor4f = (x, y, z, w) => _rlColor4f(x, y, z, w)

  // Enable vertex array (VAO, if supported): rlEnableVertexArray(unsigned int) => bool
  const _rlEnableVertexArray = mod.cwrap('rlEnableVertexArray', 'boolean', ['number'])
  raylib.rlEnableVertexArray = (vaoId) => _rlEnableVertexArray(vaoId)

  // Disable vertex array (VAO, if supported): rlDisableVertexArray() => void
  const _rlDisableVertexArray = mod.cwrap('rlDisableVertexArray', 'pointer', [])
  raylib.rlDisableVertexArray = () => _rlDisableVertexArray()

  // Enable vertex buffer (VBO): rlEnableVertexBuffer(unsigned int) => void
  const _rlEnableVertexBuffer = mod.cwrap('rlEnableVertexBuffer', 'pointer', ['number'])
  raylib.rlEnableVertexBuffer = (id) => _rlEnableVertexBuffer(id)

  // Disable vertex buffer (VBO): rlDisableVertexBuffer() => void
  const _rlDisableVertexBuffer = mod.cwrap('rlDisableVertexBuffer', 'pointer', [])
  raylib.rlDisableVertexBuffer = () => _rlDisableVertexBuffer()

  // Enable vertex buffer element (VBO element): rlEnableVertexBufferElement(unsigned int) => void
  const _rlEnableVertexBufferElement = mod.cwrap('rlEnableVertexBufferElement', 'pointer', ['number'])
  raylib.rlEnableVertexBufferElement = (id) => _rlEnableVertexBufferElement(id)

  // Disable vertex buffer element (VBO element): rlDisableVertexBufferElement() => void
  const _rlDisableVertexBufferElement = mod.cwrap('rlDisableVertexBufferElement', 'pointer', [])
  raylib.rlDisableVertexBufferElement = () => _rlDisableVertexBufferElement()

  // Enable vertex attribute index: rlEnableVertexAttribute(unsigned int) => void
  const _rlEnableVertexAttribute = mod.cwrap('rlEnableVertexAttribute', 'pointer', ['number'])
  raylib.rlEnableVertexAttribute = (index) => _rlEnableVertexAttribute(index)

  // Disable vertex attribute index: rlDisableVertexAttribute(unsigned int) => void
  const _rlDisableVertexAttribute = mod.cwrap('rlDisableVertexAttribute', 'pointer', ['number'])
  raylib.rlDisableVertexAttribute = (index) => _rlDisableVertexAttribute(index)

  // Select and active a texture slot: rlActiveTextureSlot(int) => void
  const _rlActiveTextureSlot = mod.cwrap('rlActiveTextureSlot', 'pointer', ['number'])
  raylib.rlActiveTextureSlot = (slot) => _rlActiveTextureSlot(slot)

  // Enable texture: rlEnableTexture(unsigned int) => void
  const _rlEnableTexture = mod.cwrap('rlEnableTexture', 'pointer', ['number'])
  raylib.rlEnableTexture = (id) => _rlEnableTexture(id)

  // Disable texture: rlDisableTexture() => void
  const _rlDisableTexture = mod.cwrap('rlDisableTexture', 'pointer', [])
  raylib.rlDisableTexture = () => _rlDisableTexture()

  // Enable texture cubemap: rlEnableTextureCubemap(unsigned int) => void
  const _rlEnableTextureCubemap = mod.cwrap('rlEnableTextureCubemap', 'pointer', ['number'])
  raylib.rlEnableTextureCubemap = (id) => _rlEnableTextureCubemap(id)

  // Disable texture cubemap: rlDisableTextureCubemap() => void
  const _rlDisableTextureCubemap = mod.cwrap('rlDisableTextureCubemap', 'pointer', [])
  raylib.rlDisableTextureCubemap = () => _rlDisableTextureCubemap()

  // Set texture parameters (filter, wrap): rlTextureParameters(unsigned int, int, int) => void
  const _rlTextureParameters = mod.cwrap('rlTextureParameters', 'pointer', ['number', 'number', 'number'])
  raylib.rlTextureParameters = (id, param, value) => _rlTextureParameters(id, param, value)

  // Set cubemap parameters (filter, wrap): rlCubemapParameters(unsigned int, int, int) => void
  const _rlCubemapParameters = mod.cwrap('rlCubemapParameters', 'pointer', ['number', 'number', 'number'])
  raylib.rlCubemapParameters = (id, param, value) => _rlCubemapParameters(id, param, value)

  // Enable shader program: rlEnableShader(unsigned int) => void
  const _rlEnableShader = mod.cwrap('rlEnableShader', 'pointer', ['number'])
  raylib.rlEnableShader = (id) => _rlEnableShader(id)

  // Disable shader program: rlDisableShader() => void
  const _rlDisableShader = mod.cwrap('rlDisableShader', 'pointer', [])
  raylib.rlDisableShader = () => _rlDisableShader()

  // Enable render texture (fbo): rlEnableFramebuffer(unsigned int) => void
  const _rlEnableFramebuffer = mod.cwrap('rlEnableFramebuffer', 'pointer', ['number'])
  raylib.rlEnableFramebuffer = (id) => _rlEnableFramebuffer(id)

  // Disable render texture (fbo), return to default framebuffer: rlDisableFramebuffer() => void
  const _rlDisableFramebuffer = mod.cwrap('rlDisableFramebuffer', 'pointer', [])
  raylib.rlDisableFramebuffer = () => _rlDisableFramebuffer()

  // Get the currently active render texture (fbo), 0 for default framebuffer: rlGetActiveFramebuffer() => unsigned int
  const _rlGetActiveFramebuffer = mod.cwrap('rlGetActiveFramebuffer', 'number', [])
  raylib.rlGetActiveFramebuffer = () => _rlGetActiveFramebuffer()

  // Activate multiple draw color buffers: rlActiveDrawBuffers(int) => void
  const _rlActiveDrawBuffers = mod.cwrap('rlActiveDrawBuffers', 'pointer', ['number'])
  raylib.rlActiveDrawBuffers = (count) => _rlActiveDrawBuffers(count)

  // Blit active framebuffer to main framebuffer: rlBlitFramebuffer(int, int, int, int, int, int, int, int, int) => void
  const _rlBlitFramebuffer = mod.cwrap('rlBlitFramebuffer', 'pointer', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'])
  raylib.rlBlitFramebuffer = (srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight, bufferMask) => _rlBlitFramebuffer(srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight, bufferMask)

  // Bind framebuffer (FBO): rlBindFramebuffer(unsigned int, unsigned int) => void
  const _rlBindFramebuffer = mod.cwrap('rlBindFramebuffer', 'pointer', ['number', 'number'])
  raylib.rlBindFramebuffer = (target, framebuffer) => _rlBindFramebuffer(target, framebuffer)

  // Enable color blending: rlEnableColorBlend() => void
  const _rlEnableColorBlend = mod.cwrap('rlEnableColorBlend', 'pointer', [])
  raylib.rlEnableColorBlend = () => _rlEnableColorBlend()

  // Disable color blending: rlDisableColorBlend() => void
  const _rlDisableColorBlend = mod.cwrap('rlDisableColorBlend', 'pointer', [])
  raylib.rlDisableColorBlend = () => _rlDisableColorBlend()

  // Enable depth test: rlEnableDepthTest() => void
  const _rlEnableDepthTest = mod.cwrap('rlEnableDepthTest', 'pointer', [])
  raylib.rlEnableDepthTest = () => _rlEnableDepthTest()

  // Disable depth test: rlDisableDepthTest() => void
  const _rlDisableDepthTest = mod.cwrap('rlDisableDepthTest', 'pointer', [])
  raylib.rlDisableDepthTest = () => _rlDisableDepthTest()

  // Enable depth write: rlEnableDepthMask() => void
  const _rlEnableDepthMask = mod.cwrap('rlEnableDepthMask', 'pointer', [])
  raylib.rlEnableDepthMask = () => _rlEnableDepthMask()

  // Disable depth write: rlDisableDepthMask() => void
  const _rlDisableDepthMask = mod.cwrap('rlDisableDepthMask', 'pointer', [])
  raylib.rlDisableDepthMask = () => _rlDisableDepthMask()

  // Enable backface culling: rlEnableBackfaceCulling() => void
  const _rlEnableBackfaceCulling = mod.cwrap('rlEnableBackfaceCulling', 'pointer', [])
  raylib.rlEnableBackfaceCulling = () => _rlEnableBackfaceCulling()

  // Disable backface culling: rlDisableBackfaceCulling() => void
  const _rlDisableBackfaceCulling = mod.cwrap('rlDisableBackfaceCulling', 'pointer', [])
  raylib.rlDisableBackfaceCulling = () => _rlDisableBackfaceCulling()

  // Color mask control: rlColorMask(bool, bool, bool, bool) => void
  const _rlColorMask = mod.cwrap('rlColorMask', 'pointer', ['boolean', 'boolean', 'boolean', 'boolean'])
  raylib.rlColorMask = (r, g, b, a) => _rlColorMask(r, g, b, a)

  // Set face culling mode: rlSetCullFace(int) => void
  const _rlSetCullFace = mod.cwrap('rlSetCullFace', 'pointer', ['number'])
  raylib.rlSetCullFace = (mode) => _rlSetCullFace(mode)

  // Enable scissor test: rlEnableScissorTest() => void
  const _rlEnableScissorTest = mod.cwrap('rlEnableScissorTest', 'pointer', [])
  raylib.rlEnableScissorTest = () => _rlEnableScissorTest()

  // Disable scissor test: rlDisableScissorTest() => void
  const _rlDisableScissorTest = mod.cwrap('rlDisableScissorTest', 'pointer', [])
  raylib.rlDisableScissorTest = () => _rlDisableScissorTest()

  // Scissor test: rlScissor(int, int, int, int) => void
  const _rlScissor = mod.cwrap('rlScissor', 'pointer', ['number', 'number', 'number', 'number'])
  raylib.rlScissor = (x, y, width, height) => _rlScissor(x, y, width, height)

  // Enable wire mode: rlEnableWireMode() => void
  const _rlEnableWireMode = mod.cwrap('rlEnableWireMode', 'pointer', [])
  raylib.rlEnableWireMode = () => _rlEnableWireMode()

  // Enable point mode: rlEnablePointMode() => void
  const _rlEnablePointMode = mod.cwrap('rlEnablePointMode', 'pointer', [])
  raylib.rlEnablePointMode = () => _rlEnablePointMode()

  // Disable wire (and point) mode: rlDisableWireMode() => void
  const _rlDisableWireMode = mod.cwrap('rlDisableWireMode', 'pointer', [])
  raylib.rlDisableWireMode = () => _rlDisableWireMode()

  // Set the line drawing width: rlSetLineWidth(float) => void
  const _rlSetLineWidth = mod.cwrap('rlSetLineWidth', 'pointer', ['number'])
  raylib.rlSetLineWidth = (width) => _rlSetLineWidth(width)

  // Get the line drawing width: rlGetLineWidth() => float
  const _rlGetLineWidth = mod.cwrap('rlGetLineWidth', 'number', [])
  raylib.rlGetLineWidth = () => _rlGetLineWidth()

  // Enable line aliasing: rlEnableSmoothLines() => void
  const _rlEnableSmoothLines = mod.cwrap('rlEnableSmoothLines', 'pointer', [])
  raylib.rlEnableSmoothLines = () => _rlEnableSmoothLines()

  // Disable line aliasing: rlDisableSmoothLines() => void
  const _rlDisableSmoothLines = mod.cwrap('rlDisableSmoothLines', 'pointer', [])
  raylib.rlDisableSmoothLines = () => _rlDisableSmoothLines()

  // Enable stereo rendering: rlEnableStereoRender() => void
  const _rlEnableStereoRender = mod.cwrap('rlEnableStereoRender', 'pointer', [])
  raylib.rlEnableStereoRender = () => _rlEnableStereoRender()

  // Disable stereo rendering: rlDisableStereoRender() => void
  const _rlDisableStereoRender = mod.cwrap('rlDisableStereoRender', 'pointer', [])
  raylib.rlDisableStereoRender = () => _rlDisableStereoRender()

  // Check if stereo render is enabled: rlIsStereoRenderEnabled() => bool
  const _rlIsStereoRenderEnabled = mod.cwrap('rlIsStereoRenderEnabled', 'boolean', [])
  raylib.rlIsStereoRenderEnabled = () => _rlIsStereoRenderEnabled()

  // Clear color buffer with color: rlClearColor(unsigned char, unsigned char, unsigned char, unsigned char) => void
  const _rlClearColor = mod.cwrap('rlClearColor', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.rlClearColor = (r, g, b, a) => _rlClearColor(r._address, g._address, b._address, a._address)

  // Clear used screen buffers (color and depth): rlClearScreenBuffers() => void
  const _rlClearScreenBuffers = mod.cwrap('rlClearScreenBuffers', 'pointer', [])
  raylib.rlClearScreenBuffers = () => _rlClearScreenBuffers()

  // Check and log OpenGL error codes: rlCheckErrors() => void
  const _rlCheckErrors = mod.cwrap('rlCheckErrors', 'pointer', [])
  raylib.rlCheckErrors = () => _rlCheckErrors()

  // Set blending mode: rlSetBlendMode(int) => void
  const _rlSetBlendMode = mod.cwrap('rlSetBlendMode', 'pointer', ['number'])
  raylib.rlSetBlendMode = (mode) => _rlSetBlendMode(mode)

  // Set blending mode factor and equation (using OpenGL factors): rlSetBlendFactors(int, int, int) => void
  const _rlSetBlendFactors = mod.cwrap('rlSetBlendFactors', 'pointer', ['number', 'number', 'number'])
  raylib.rlSetBlendFactors = (glSrcFactor, glDstFactor, glEquation) => _rlSetBlendFactors(glSrcFactor, glDstFactor, glEquation)

  // Set blending mode factors and equations separately (using OpenGL factors): rlSetBlendFactorsSeparate(int, int, int, int, int, int) => void
  const _rlSetBlendFactorsSeparate = mod.cwrap('rlSetBlendFactorsSeparate', 'pointer', ['number', 'number', 'number', 'number', 'number', 'number'])
  raylib.rlSetBlendFactorsSeparate = (glSrcRGB, glDstRGB, glSrcAlpha, glDstAlpha, glEqRGB, glEqAlpha) => _rlSetBlendFactorsSeparate(glSrcRGB, glDstRGB, glSrcAlpha, glDstAlpha, glEqRGB, glEqAlpha)

  // Initialize rlgl (buffers, shaders, textures, states): rlglInit(int, int) => void
  const _rlglInit = mod.cwrap('rlglInit', 'pointer', ['number', 'number'])
  raylib.rlglInit = (width, height) => _rlglInit(width, height)

  // De-initialize rlgl (buffers, shaders, textures): rlglClose() => void
  const _rlglClose = mod.cwrap('rlglClose', 'pointer', [])
  raylib.rlglClose = () => _rlglClose()

  // Load OpenGL extensions (loader function required): rlLoadExtensions(void *) => void
  const _rlLoadExtensions = mod.cwrap('rlLoadExtensions', 'pointer', ['pointer'])
  raylib.rlLoadExtensions = (loader) => _rlLoadExtensions(loader._address)

  // Get current OpenGL version: rlGetVersion() => int
  const _rlGetVersion = mod.cwrap('rlGetVersion', 'number', [])
  raylib.rlGetVersion = () => _rlGetVersion()

  // Set current framebuffer width: rlSetFramebufferWidth(int) => void
  const _rlSetFramebufferWidth = mod.cwrap('rlSetFramebufferWidth', 'pointer', ['number'])
  raylib.rlSetFramebufferWidth = (width) => _rlSetFramebufferWidth(width)

  // Get default framebuffer width: rlGetFramebufferWidth() => int
  const _rlGetFramebufferWidth = mod.cwrap('rlGetFramebufferWidth', 'number', [])
  raylib.rlGetFramebufferWidth = () => _rlGetFramebufferWidth()

  // Set current framebuffer height: rlSetFramebufferHeight(int) => void
  const _rlSetFramebufferHeight = mod.cwrap('rlSetFramebufferHeight', 'pointer', ['number'])
  raylib.rlSetFramebufferHeight = (height) => _rlSetFramebufferHeight(height)

  // Get default framebuffer height: rlGetFramebufferHeight() => int
  const _rlGetFramebufferHeight = mod.cwrap('rlGetFramebufferHeight', 'number', [])
  raylib.rlGetFramebufferHeight = () => _rlGetFramebufferHeight()

  // Get default texture id: rlGetTextureIdDefault() => unsigned int
  const _rlGetTextureIdDefault = mod.cwrap('rlGetTextureIdDefault', 'number', [])
  raylib.rlGetTextureIdDefault = () => _rlGetTextureIdDefault()

  // Get default shader id: rlGetShaderIdDefault() => unsigned int
  const _rlGetShaderIdDefault = mod.cwrap('rlGetShaderIdDefault', 'number', [])
  raylib.rlGetShaderIdDefault = () => _rlGetShaderIdDefault()

  // Get default shader locations: rlGetShaderLocsDefault() => int *
  const _rlGetShaderLocsDefault = mod.cwrap('rlGetShaderLocsDefault', 'pointer', [])
  raylib.rlGetShaderLocsDefault = () => _rlGetShaderLocsDefault()

  // Load a render batch system: rlLoadRenderBatch(int, int) => rlRenderBatch
  const _rlLoadRenderBatch = mod.cwrap('rlLoadRenderBatch', 'void', ['pointer', 'number', 'number'])
  raylib.rlLoadRenderBatch = (numBuffers, bufferElements) => {
    const _ret = new raylib.rlRenderBatch()
    _rlLoadRenderBatch(_ret._address, numBuffers, bufferElements)
    return _ret
  }

  // Unload render batch system: rlUnloadRenderBatch(rlRenderBatch) => void
  const _rlUnloadRenderBatch = mod.cwrap('rlUnloadRenderBatch', 'pointer', ['pointer'])
  raylib.rlUnloadRenderBatch = (batch) => _rlUnloadRenderBatch(batch._address)

  // Draw render batch data (Update->Draw->Reset): rlDrawRenderBatch(rlRenderBatch *) => void
  const _rlDrawRenderBatch = mod.cwrap('rlDrawRenderBatch', 'pointer', ['pointer'])
  raylib.rlDrawRenderBatch = (batch) => _rlDrawRenderBatch(batch._address)

  // Set the active render batch for rlgl (NULL for default internal): rlSetRenderBatchActive(rlRenderBatch *) => void
  const _rlSetRenderBatchActive = mod.cwrap('rlSetRenderBatchActive', 'pointer', ['pointer'])
  raylib.rlSetRenderBatchActive = (batch) => _rlSetRenderBatchActive(batch._address)

  // Update and draw internal render batch: rlDrawRenderBatchActive() => void
  const _rlDrawRenderBatchActive = mod.cwrap('rlDrawRenderBatchActive', 'pointer', [])
  raylib.rlDrawRenderBatchActive = () => _rlDrawRenderBatchActive()

  // Check internal buffer overflow for a given number of vertex: rlCheckRenderBatchLimit(int) => bool
  const _rlCheckRenderBatchLimit = mod.cwrap('rlCheckRenderBatchLimit', 'boolean', ['number'])
  raylib.rlCheckRenderBatchLimit = (vCount) => _rlCheckRenderBatchLimit(vCount)

  // Set current texture for render batch and check buffers limits: rlSetTexture(unsigned int) => void
  const _rlSetTexture = mod.cwrap('rlSetTexture', 'pointer', ['number'])
  raylib.rlSetTexture = (id) => _rlSetTexture(id)

  // Load vertex array (vao) if supported: rlLoadVertexArray() => unsigned int
  const _rlLoadVertexArray = mod.cwrap('rlLoadVertexArray', 'number', [])
  raylib.rlLoadVertexArray = () => _rlLoadVertexArray()

  // Load a vertex buffer object: rlLoadVertexBuffer(const void *, int, bool) => unsigned int
  const _rlLoadVertexBuffer = mod.cwrap('rlLoadVertexBuffer', 'number', ['pointer', 'number', 'boolean'])
  raylib.rlLoadVertexBuffer = (buffer, size, dynamic) => _rlLoadVertexBuffer(buffer._address, size, dynamic)

  // Load vertex buffer elements object: rlLoadVertexBufferElement(const void *, int, bool) => unsigned int
  const _rlLoadVertexBufferElement = mod.cwrap('rlLoadVertexBufferElement', 'number', ['pointer', 'number', 'boolean'])
  raylib.rlLoadVertexBufferElement = (buffer, size, dynamic) => _rlLoadVertexBufferElement(buffer._address, size, dynamic)

  // Update vertex buffer object data on GPU buffer: rlUpdateVertexBuffer(unsigned int, const void *, int, int) => void
  const _rlUpdateVertexBuffer = mod.cwrap('rlUpdateVertexBuffer', 'pointer', ['number', 'pointer', 'number', 'number'])
  raylib.rlUpdateVertexBuffer = (bufferId, data, dataSize, offset) => _rlUpdateVertexBuffer(bufferId, data._address, dataSize, offset)

  // Update vertex buffer elements data on GPU buffer: rlUpdateVertexBufferElements(unsigned int, const void *, int, int) => void
  const _rlUpdateVertexBufferElements = mod.cwrap('rlUpdateVertexBufferElements', 'pointer', ['number', 'pointer', 'number', 'number'])
  raylib.rlUpdateVertexBufferElements = (id, data, dataSize, offset) => _rlUpdateVertexBufferElements(id, data._address, dataSize, offset)

  // Unload vertex array (vao): rlUnloadVertexArray(unsigned int) => void
  const _rlUnloadVertexArray = mod.cwrap('rlUnloadVertexArray', 'pointer', ['number'])
  raylib.rlUnloadVertexArray = (vaoId) => _rlUnloadVertexArray(vaoId)

  // Unload vertex buffer object: rlUnloadVertexBuffer(unsigned int) => void
  const _rlUnloadVertexBuffer = mod.cwrap('rlUnloadVertexBuffer', 'pointer', ['number'])
  raylib.rlUnloadVertexBuffer = (vboId) => _rlUnloadVertexBuffer(vboId)

  // Set vertex attribute data configuration: rlSetVertexAttribute(unsigned int, int, int, bool, int, int) => void
  const _rlSetVertexAttribute = mod.cwrap('rlSetVertexAttribute', 'pointer', ['number', 'number', 'number', 'boolean', 'number', 'number'])
  raylib.rlSetVertexAttribute = (index, compSize, type, normalized, stride, offset) => _rlSetVertexAttribute(index, compSize, type, normalized, stride, offset)

  // Set vertex attribute data divisor: rlSetVertexAttributeDivisor(unsigned int, int) => void
  const _rlSetVertexAttributeDivisor = mod.cwrap('rlSetVertexAttributeDivisor', 'pointer', ['number', 'number'])
  raylib.rlSetVertexAttributeDivisor = (index, divisor) => _rlSetVertexAttributeDivisor(index, divisor)

  // Set vertex attribute default value, when attribute to provided: rlSetVertexAttributeDefault(int, const void *, int, int) => void
  const _rlSetVertexAttributeDefault = mod.cwrap('rlSetVertexAttributeDefault', 'pointer', ['number', 'pointer', 'number', 'number'])
  raylib.rlSetVertexAttributeDefault = (locIndex, value, attribType, count) => _rlSetVertexAttributeDefault(locIndex, value._address, attribType, count)

  // Draw vertex array (currently active vao): rlDrawVertexArray(int, int) => void
  const _rlDrawVertexArray = mod.cwrap('rlDrawVertexArray', 'pointer', ['number', 'number'])
  raylib.rlDrawVertexArray = (offset, count) => _rlDrawVertexArray(offset, count)

  // Draw vertex array elements: rlDrawVertexArrayElements(int, int, const void *) => void
  const _rlDrawVertexArrayElements = mod.cwrap('rlDrawVertexArrayElements', 'pointer', ['number', 'number', 'pointer'])
  raylib.rlDrawVertexArrayElements = (offset, count, buffer) => _rlDrawVertexArrayElements(offset, count, buffer._address)

  // Draw vertex array (currently active vao) with instancing: rlDrawVertexArrayInstanced(int, int, int) => void
  const _rlDrawVertexArrayInstanced = mod.cwrap('rlDrawVertexArrayInstanced', 'pointer', ['number', 'number', 'number'])
  raylib.rlDrawVertexArrayInstanced = (offset, count, instances) => _rlDrawVertexArrayInstanced(offset, count, instances)

  // Draw vertex array elements with instancing: rlDrawVertexArrayElementsInstanced(int, int, const void *, int) => void
  const _rlDrawVertexArrayElementsInstanced = mod.cwrap('rlDrawVertexArrayElementsInstanced', 'pointer', ['number', 'number', 'pointer', 'number'])
  raylib.rlDrawVertexArrayElementsInstanced = (offset, count, buffer, instances) => _rlDrawVertexArrayElementsInstanced(offset, count, buffer._address, instances)

  // Load texture data: rlLoadTexture(const void *, int, int, int, int) => unsigned int
  const _rlLoadTexture = mod.cwrap('rlLoadTexture', 'number', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.rlLoadTexture = (data, width, height, format, mipmapCount) => _rlLoadTexture(data._address, width, height, format, mipmapCount)

  // Load depth texture/renderbuffer (to be attached to fbo): rlLoadTextureDepth(int, int, bool) => unsigned int
  const _rlLoadTextureDepth = mod.cwrap('rlLoadTextureDepth', 'number', ['number', 'number', 'boolean'])
  raylib.rlLoadTextureDepth = (width, height, useRenderBuffer) => _rlLoadTextureDepth(width, height, useRenderBuffer)

  // Load texture cubemap data: rlLoadTextureCubemap(const void *, int, int, int) => unsigned int
  const _rlLoadTextureCubemap = mod.cwrap('rlLoadTextureCubemap', 'number', ['pointer', 'number', 'number', 'number'])
  raylib.rlLoadTextureCubemap = (data, size, format, mipmapCount) => _rlLoadTextureCubemap(data._address, size, format, mipmapCount)

  // Update texture with new data on GPU: rlUpdateTexture(unsigned int, int, int, int, int, int, const void *) => void
  const _rlUpdateTexture = mod.cwrap('rlUpdateTexture', 'pointer', ['number', 'number', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.rlUpdateTexture = (id, offsetX, offsetY, width, height, format, data) => _rlUpdateTexture(id, offsetX, offsetY, width, height, format, data._address)

  // Get OpenGL internal formats: rlGetGlTextureFormats(int, unsigned int *, unsigned int *, unsigned int *) => void
  const _rlGetGlTextureFormats = mod.cwrap('rlGetGlTextureFormats', 'pointer', ['number', 'pointer', 'pointer', 'pointer'])
  raylib.rlGetGlTextureFormats = (format, glInternalFormat, glFormat, glType) => _rlGetGlTextureFormats(format, glInternalFormat._address, glFormat._address, glType._address)

  // Get name string for pixel format: rlGetPixelFormatName(unsigned int) => const char *
  const _rlGetPixelFormatName = mod.cwrap('rlGetPixelFormatName', 'string', ['number'])
  raylib.rlGetPixelFormatName = (format) => _rlGetPixelFormatName(format)

  // Unload texture from GPU memory: rlUnloadTexture(unsigned int) => void
  const _rlUnloadTexture = mod.cwrap('rlUnloadTexture', 'pointer', ['number'])
  raylib.rlUnloadTexture = (id) => _rlUnloadTexture(id)

  // Generate mipmap data for selected texture: rlGenTextureMipmaps(unsigned int, int, int, int, int *) => void
  const _rlGenTextureMipmaps = mod.cwrap('rlGenTextureMipmaps', 'pointer', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.rlGenTextureMipmaps = (id, width, height, format, mipmaps) => _rlGenTextureMipmaps(id, width, height, format, mipmaps._address)

  // Read texture pixel data: rlReadTexturePixels(unsigned int, int, int, int) => void *
  const _rlReadTexturePixels = mod.cwrap('rlReadTexturePixels', 'pointer', ['number', 'number', 'number', 'number'])
  raylib.rlReadTexturePixels = (id, width, height, format) => _rlReadTexturePixels(id, width, height, format)

  // Read screen pixel data (color buffer): rlReadScreenPixels(int, int) => unsigned char *
  const _rlReadScreenPixels = mod.cwrap('rlReadScreenPixels', 'pointer', ['number', 'number'])
  raylib.rlReadScreenPixels = (width, height) => _rlReadScreenPixels(width, height)

  // Load an empty framebuffer: rlLoadFramebuffer() => unsigned int
  const _rlLoadFramebuffer = mod.cwrap('rlLoadFramebuffer', 'number', [])
  raylib.rlLoadFramebuffer = () => _rlLoadFramebuffer()

  // Attach texture/renderbuffer to a framebuffer: rlFramebufferAttach(unsigned int, unsigned int, int, int, int) => void
  const _rlFramebufferAttach = mod.cwrap('rlFramebufferAttach', 'pointer', ['number', 'number', 'number', 'number', 'number'])
  raylib.rlFramebufferAttach = (fboId, texId, attachType, texType, mipLevel) => _rlFramebufferAttach(fboId, texId, attachType, texType, mipLevel)

  // Verify framebuffer is complete: rlFramebufferComplete(unsigned int) => bool
  const _rlFramebufferComplete = mod.cwrap('rlFramebufferComplete', 'boolean', ['number'])
  raylib.rlFramebufferComplete = (id) => _rlFramebufferComplete(id)

  // Delete framebuffer from GPU: rlUnloadFramebuffer(unsigned int) => void
  const _rlUnloadFramebuffer = mod.cwrap('rlUnloadFramebuffer', 'pointer', ['number'])
  raylib.rlUnloadFramebuffer = (id) => _rlUnloadFramebuffer(id)

  // Load shader from code strings: rlLoadShaderCode(const char *, const char *) => unsigned int
  const _rlLoadShaderCode = mod.cwrap('rlLoadShaderCode', 'number', ['string', 'string'])
  raylib.rlLoadShaderCode = (vsCode, fsCode) => _rlLoadShaderCode(vsCode, fsCode)

  // Compile custom shader and return shader id (type: RL_VERTEX_SHADER, RL_FRAGMENT_SHADER, RL_COMPUTE_SHADER): rlCompileShader(const char *, int) => unsigned int
  const _rlCompileShader = mod.cwrap('rlCompileShader', 'number', ['string', 'number'])
  raylib.rlCompileShader = (shaderCode, type) => _rlCompileShader(shaderCode, type)

  // Load custom shader program: rlLoadShaderProgram(unsigned int, unsigned int) => unsigned int
  const _rlLoadShaderProgram = mod.cwrap('rlLoadShaderProgram', 'number', ['number', 'number'])
  raylib.rlLoadShaderProgram = (vShaderId, fShaderId) => _rlLoadShaderProgram(vShaderId, fShaderId)

  // Unload shader program: rlUnloadShaderProgram(unsigned int) => void
  const _rlUnloadShaderProgram = mod.cwrap('rlUnloadShaderProgram', 'pointer', ['number'])
  raylib.rlUnloadShaderProgram = (id) => _rlUnloadShaderProgram(id)

  // Get shader location uniform: rlGetLocationUniform(unsigned int, const char *) => int
  const _rlGetLocationUniform = mod.cwrap('rlGetLocationUniform', 'number', ['number', 'string'])
  raylib.rlGetLocationUniform = (shaderId, uniformName) => _rlGetLocationUniform(shaderId, uniformName)

  // Get shader location attribute: rlGetLocationAttrib(unsigned int, const char *) => int
  const _rlGetLocationAttrib = mod.cwrap('rlGetLocationAttrib', 'number', ['number', 'string'])
  raylib.rlGetLocationAttrib = (shaderId, attribName) => _rlGetLocationAttrib(shaderId, attribName)

  // Set shader value uniform: rlSetUniform(int, const void *, int, int) => void
  const _rlSetUniform = mod.cwrap('rlSetUniform', 'pointer', ['number', 'pointer', 'number', 'number'])
  raylib.rlSetUniform = (locIndex, value, uniformType, count) => _rlSetUniform(locIndex, value._address, uniformType, count)

  // Set shader value matrix: rlSetUniformMatrix(int, Matrix) => void
  const _rlSetUniformMatrix = mod.cwrap('rlSetUniformMatrix', 'pointer', ['number', 'pointer'])
  raylib.rlSetUniformMatrix = (locIndex, mat) => _rlSetUniformMatrix(locIndex, mat._address)

  // Set shader value matrices: rlSetUniformMatrices(int, const Matrix *, int) => void
  const _rlSetUniformMatrices = mod.cwrap('rlSetUniformMatrices', 'pointer', ['number', 'pointer', 'number'])
  raylib.rlSetUniformMatrices = (locIndex, mat, count) => _rlSetUniformMatrices(locIndex, mat._address, count)

  // Set shader value sampler: rlSetUniformSampler(int, unsigned int) => void
  const _rlSetUniformSampler = mod.cwrap('rlSetUniformSampler', 'pointer', ['number', 'number'])
  raylib.rlSetUniformSampler = (locIndex, textureId) => _rlSetUniformSampler(locIndex, textureId)

  // Set shader currently active (id and locations): rlSetShader(unsigned int, int *) => void
  const _rlSetShader = mod.cwrap('rlSetShader', 'pointer', ['number', 'pointer'])
  raylib.rlSetShader = (id, locs) => _rlSetShader(id, locs._address)

  // Load compute shader program: rlLoadComputeShaderProgram(unsigned int) => unsigned int
  const _rlLoadComputeShaderProgram = mod.cwrap('rlLoadComputeShaderProgram', 'number', ['number'])
  raylib.rlLoadComputeShaderProgram = (shaderId) => _rlLoadComputeShaderProgram(shaderId)

  // Dispatch compute shader (equivalent to *draw* for graphics pipeline): rlComputeShaderDispatch(unsigned int, unsigned int, unsigned int) => void
  const _rlComputeShaderDispatch = mod.cwrap('rlComputeShaderDispatch', 'pointer', ['number', 'number', 'number'])
  raylib.rlComputeShaderDispatch = (groupX, groupY, groupZ) => _rlComputeShaderDispatch(groupX, groupY, groupZ)

  // Load shader storage buffer object (SSBO): rlLoadShaderBuffer(unsigned int, const void *, int) => unsigned int
  const _rlLoadShaderBuffer = mod.cwrap('rlLoadShaderBuffer', 'number', ['number', 'pointer', 'number'])
  raylib.rlLoadShaderBuffer = (size, data, usageHint) => _rlLoadShaderBuffer(size, data._address, usageHint)

  // Unload shader storage buffer object (SSBO): rlUnloadShaderBuffer(unsigned int) => void
  const _rlUnloadShaderBuffer = mod.cwrap('rlUnloadShaderBuffer', 'pointer', ['number'])
  raylib.rlUnloadShaderBuffer = (ssboId) => _rlUnloadShaderBuffer(ssboId)

  // Update SSBO buffer data: rlUpdateShaderBuffer(unsigned int, const void *, unsigned int, unsigned int) => void
  const _rlUpdateShaderBuffer = mod.cwrap('rlUpdateShaderBuffer', 'pointer', ['number', 'pointer', 'number', 'number'])
  raylib.rlUpdateShaderBuffer = (id, data, dataSize, offset) => _rlUpdateShaderBuffer(id, data._address, dataSize, offset)

  // Bind SSBO buffer: rlBindShaderBuffer(unsigned int, unsigned int) => void
  const _rlBindShaderBuffer = mod.cwrap('rlBindShaderBuffer', 'pointer', ['number', 'number'])
  raylib.rlBindShaderBuffer = (id, index) => _rlBindShaderBuffer(id, index)

  // Read SSBO buffer data (GPU->CPU): rlReadShaderBuffer(unsigned int, void *, unsigned int, unsigned int) => void
  const _rlReadShaderBuffer = mod.cwrap('rlReadShaderBuffer', 'pointer', ['number', 'pointer', 'number', 'number'])
  raylib.rlReadShaderBuffer = (id, dest, count, offset) => _rlReadShaderBuffer(id, dest._address, count, offset)

  // Copy SSBO data between buffers: rlCopyShaderBuffer(unsigned int, unsigned int, unsigned int, unsigned int, unsigned int) => void
  const _rlCopyShaderBuffer = mod.cwrap('rlCopyShaderBuffer', 'pointer', ['number', 'number', 'number', 'number', 'number'])
  raylib.rlCopyShaderBuffer = (destId, srcId, destOffset, srcOffset, count) => _rlCopyShaderBuffer(destId, srcId, destOffset, srcOffset, count)

  // Get SSBO buffer size: rlGetShaderBufferSize(unsigned int) => unsigned int
  const _rlGetShaderBufferSize = mod.cwrap('rlGetShaderBufferSize', 'number', ['number'])
  raylib.rlGetShaderBufferSize = (id) => _rlGetShaderBufferSize(id)

  // Bind image texture: rlBindImageTexture(unsigned int, unsigned int, int, bool) => void
  const _rlBindImageTexture = mod.cwrap('rlBindImageTexture', 'pointer', ['number', 'number', 'number', 'boolean'])
  raylib.rlBindImageTexture = (id, index, format, readonly) => _rlBindImageTexture(id, index, format, readonly)

  // Get internal modelview matrix: rlGetMatrixModelview() => Matrix
  const _rlGetMatrixModelview = mod.cwrap('rlGetMatrixModelview', 'void', ['pointer'])
  raylib.rlGetMatrixModelview = () => {
    const _ret = new raylib.Matrix()
    _rlGetMatrixModelview(_ret._address)
    return _ret
  }

  // Get internal projection matrix: rlGetMatrixProjection() => Matrix
  const _rlGetMatrixProjection = mod.cwrap('rlGetMatrixProjection', 'void', ['pointer'])
  raylib.rlGetMatrixProjection = () => {
    const _ret = new raylib.Matrix()
    _rlGetMatrixProjection(_ret._address)
    return _ret
  }

  // Get internal accumulated transform matrix: rlGetMatrixTransform() => Matrix
  const _rlGetMatrixTransform = mod.cwrap('rlGetMatrixTransform', 'void', ['pointer'])
  raylib.rlGetMatrixTransform = () => {
    const _ret = new raylib.Matrix()
    _rlGetMatrixTransform(_ret._address)
    return _ret
  }

  // Get internal projection matrix for stereo render (selected eye): rlGetMatrixProjectionStereo(int) => Matrix
  const _rlGetMatrixProjectionStereo = mod.cwrap('rlGetMatrixProjectionStereo', 'void', ['pointer', 'number'])
  raylib.rlGetMatrixProjectionStereo = (eye) => {
    const _ret = new raylib.Matrix()
    _rlGetMatrixProjectionStereo(_ret._address, eye)
    return _ret
  }

  // Get internal view offset matrix for stereo render (selected eye): rlGetMatrixViewOffsetStereo(int) => Matrix
  const _rlGetMatrixViewOffsetStereo = mod.cwrap('rlGetMatrixViewOffsetStereo', 'void', ['pointer', 'number'])
  raylib.rlGetMatrixViewOffsetStereo = (eye) => {
    const _ret = new raylib.Matrix()
    _rlGetMatrixViewOffsetStereo(_ret._address, eye)
    return _ret
  }

  // Set a custom projection matrix (replaces internal projection matrix): rlSetMatrixProjection(Matrix) => void
  const _rlSetMatrixProjection = mod.cwrap('rlSetMatrixProjection', 'pointer', ['pointer'])
  raylib.rlSetMatrixProjection = (proj) => _rlSetMatrixProjection(proj._address)

  // Set a custom modelview matrix (replaces internal modelview matrix): rlSetMatrixModelview(Matrix) => void
  const _rlSetMatrixModelview = mod.cwrap('rlSetMatrixModelview', 'pointer', ['pointer'])
  raylib.rlSetMatrixModelview = (view) => _rlSetMatrixModelview(view._address)

  // Set eyes projection matrices for stereo rendering: rlSetMatrixProjectionStereo(Matrix, Matrix) => void
  const _rlSetMatrixProjectionStereo = mod.cwrap('rlSetMatrixProjectionStereo', 'pointer', ['pointer', 'pointer'])
  raylib.rlSetMatrixProjectionStereo = (right, left) => _rlSetMatrixProjectionStereo(right._address, left._address)

  // Set eyes view offsets matrices for stereo rendering: rlSetMatrixViewOffsetStereo(Matrix, Matrix) => void
  const _rlSetMatrixViewOffsetStereo = mod.cwrap('rlSetMatrixViewOffsetStereo', 'pointer', ['pointer', 'pointer'])
  raylib.rlSetMatrixViewOffsetStereo = (right, left) => _rlSetMatrixViewOffsetStereo(right._address, left._address)

  // Load and draw a cube: rlLoadDrawCube() => void
  const _rlLoadDrawCube = mod.cwrap('rlLoadDrawCube', 'pointer', [])
  raylib.rlLoadDrawCube = () => _rlLoadDrawCube()

  // Load and draw a quad: rlLoadDrawQuad() => void
  const _rlLoadDrawQuad = mod.cwrap('rlLoadDrawQuad', 'pointer', [])
  raylib.rlLoadDrawQuad = () => _rlLoadDrawQuad()

  // : GetCameraForward(Camera *) => Vector3
  const _GetCameraForward = mod.cwrap('GetCameraForward', 'void', ['pointer', 'pointer'])
  raylib.GetCameraForward = (camera) => {
    const _ret = new raylib.Vector3()
    _GetCameraForward(_ret._address, camera._address)
    return _ret
  }

  // : GetCameraUp(Camera *) => Vector3
  const _GetCameraUp = mod.cwrap('GetCameraUp', 'void', ['pointer', 'pointer'])
  raylib.GetCameraUp = (camera) => {
    const _ret = new raylib.Vector3()
    _GetCameraUp(_ret._address, camera._address)
    return _ret
  }

  // : GetCameraRight(Camera *) => Vector3
  const _GetCameraRight = mod.cwrap('GetCameraRight', 'void', ['pointer', 'pointer'])
  raylib.GetCameraRight = (camera) => {
    const _ret = new raylib.Vector3()
    _GetCameraRight(_ret._address, camera._address)
    return _ret
  }

  // : CameraMoveForward(Camera *, float, bool) => void
  const _CameraMoveForward = mod.cwrap('CameraMoveForward', 'pointer', ['pointer', 'number', 'boolean'])
  raylib.CameraMoveForward = (camera, distance, moveInWorldPlane) => _CameraMoveForward(camera._address, distance, moveInWorldPlane)

  // : CameraMoveUp(Camera *, float) => void
  const _CameraMoveUp = mod.cwrap('CameraMoveUp', 'pointer', ['pointer', 'number'])
  raylib.CameraMoveUp = (camera, distance) => _CameraMoveUp(camera._address, distance)

  // : CameraMoveRight(Camera *, float, bool) => void
  const _CameraMoveRight = mod.cwrap('CameraMoveRight', 'pointer', ['pointer', 'number', 'boolean'])
  raylib.CameraMoveRight = (camera, distance, moveInWorldPlane) => _CameraMoveRight(camera._address, distance, moveInWorldPlane)

  // : CameraMoveToTarget(Camera *, float) => void
  const _CameraMoveToTarget = mod.cwrap('CameraMoveToTarget', 'pointer', ['pointer', 'number'])
  raylib.CameraMoveToTarget = (camera, delta) => _CameraMoveToTarget(camera._address, delta)

  // : CameraYaw(Camera *, float, bool) => void
  const _CameraYaw = mod.cwrap('CameraYaw', 'pointer', ['pointer', 'number', 'boolean'])
  raylib.CameraYaw = (camera, angle, rotateAroundTarget) => _CameraYaw(camera._address, angle, rotateAroundTarget)

  // : CameraPitch(Camera *, float, bool, bool, bool) => void
  const _CameraPitch = mod.cwrap('CameraPitch', 'pointer', ['pointer', 'number', 'boolean', 'boolean', 'boolean'])
  raylib.CameraPitch = (camera, angle, lockView, rotateAroundTarget, rotateUp) => _CameraPitch(camera._address, angle, lockView, rotateAroundTarget, rotateUp)

  // : CameraRoll(Camera *, float) => void
  const _CameraRoll = mod.cwrap('CameraRoll', 'pointer', ['pointer', 'number'])
  raylib.CameraRoll = (camera, angle) => _CameraRoll(camera._address, angle)

  // : GetCameraViewMatrix(Camera *) => Matrix
  const _GetCameraViewMatrix = mod.cwrap('GetCameraViewMatrix', 'void', ['pointer', 'pointer'])
  raylib.GetCameraViewMatrix = (camera) => {
    const _ret = new raylib.Matrix()
    _GetCameraViewMatrix(_ret._address, camera._address)
    return _ret
  }

  // : GetCameraProjectionMatrix(Camera*, float) => Matrix
  const _GetCameraProjectionMatrix = mod.cwrap('GetCameraProjectionMatrix', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetCameraProjectionMatrix = (camera, aspect) => {
    const _ret = new raylib.Matrix()
    _GetCameraProjectionMatrix(_ret._address, camera._address, aspect)
    return _ret
  }

  // Utility from original examples for word-wrapping some text: DrawTextBoxed(Font, const char *, Rectangle, float, float, bool, Color) => void
  const _DrawTextBoxed = mod.cwrap('DrawTextBoxed', 'pointer', ['pointer', 'string', 'pointer', 'number', 'number', 'boolean', 'pointer'])
  raylib.DrawTextBoxed = (font, text, rec, fontSize, spacing, wordWrap, tint) => _DrawTextBoxed(font._address, text, rec._address, fontSize, spacing, wordWrap, tint._address)

  // Utility from original examples for word-wrapping some text, and allowing you to show selection: DrawTextBoxedSelectable(Font, const char *, Rectangle, float, float, bool, Color, int, int, Color, Color) => void
  const _DrawTextBoxedSelectable = mod.cwrap('DrawTextBoxedSelectable', 'pointer', ['pointer', 'string', 'pointer', 'number', 'number', 'boolean', 'pointer', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawTextBoxedSelectable = (font, text, rec, fontSize, spacing, wordWrap, tint, selectStart, selectLength, selectTint, selectBackTint) => _DrawTextBoxedSelectable(font._address, text, rec._address, fontSize, spacing, wordWrap, tint._address, selectStart, selectLength, selectTint._address, selectBackTint._address)


  raylib.UniformFloat = class UniformFloat {
    constructor(shader, name, address) {
      this._shader = shader
      this._size = 4
      this._address = address || mod._malloc(this._size)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get value() {
      return mod.HEAPF32[this._address / 4]
    }

    set value(v) {
      mod.HEAPF32[this._address / 4] = v
      raylib.SetShaderValue(this._shader, this._loc, this, raylib.SHADER_UNIFORM_FLOAT)
    }
  }

  raylib.UniformVector2 = class UniformVector2 {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector2({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get x() {
      return this._val.x
    }

    set x(v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC2)
    }

    get y() {
      return this._val.y
    }

    set y(v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC2)
    }
  }

  raylib.UniformVector3 = class UniformVector3 {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector3({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get x() {
      return this._val.x
    }

    set x(v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC3)
    }

    get y() {
      return this._val.y
    }

    set y(v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC3)
    }

    get z() {
      return this._val.z
    }

    set y(v) {
      this._val.z = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC3)
    }
  }

  raylib.UniformVector4 = class UniformVector4 {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector4({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get x() {
      return this._val.x
    }

    set x(v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get y() {
      return this._val.y
    }

    set y(v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get z() {
      return this._val.z
    }

    set y(v) {
      this._val.z = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get w() {
      return this._val.w
    }

    set w(v) {
      this._val.w = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }
  }

  raylib.UniformColor = class UniformColor {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector4({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get r() {
      return this._val.x
    }

    set r(v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get g() {
      return this._val.y
    }

    set g(v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get b() {
      return this._val.z
    }

    set b(v) {
      this._val.z = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get a() {
      return this._val.w
    }

    set a(v) {
      this._val.w = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }
  }

  raylib.UniformInt = class UniformInt {
    constructor(shader, name, address) {
      this._shader = shader
      this._size = 4
      this._address = address || mod._malloc(this._size)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get value() {
      return mod.HEAP32[this._address / 4]
    }

    set value(v) {
      mod.HEAP32[this._address / 4] = v
      raylib.SetShaderValue(this._shader, this._loc, this, raylib.SHADER_UNIFORM_INT)
    }
  }

  raylib.UniformTexture = class UniformTexture {
    constructor(shader, name, address) {
      this._shader = shader
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    set texture(t) {
      raylib.SetShaderValueTexture(this._shader, this._loc, t)
    }
  }

  // insert remote file in WASM filesystem
  raylib.addFile = async (filename, target) => {
    if (!target) {
      target = filename
    }
    const p = target.split('/').slice(0, -1)
    let dir = ''
    for (const d of p) {
      dir = dir + '/' + d
      try {
        mod.FS.mkdir(dir)
      } catch (e) { }
    }
    mod.FS.writeFile(target, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }

  // more convenient free() for structs
  raylib.free = ptr => ptr._address ? mod._free(ptr._address) : mod._free(ptr)

  // we use raylib to namespace operations to a single wasm runtime instance
  // this is sort of like importing all the stuff from raylib object, if you only have 1 on page
  raylib.globalize = () => {
    for (const k of Object.keys(raylib)) {
      window[k] = raylib[k]
    }
  }

  // process user-functions, make raylib look like it's global

  if (userInit) {
    await userInit(raylib)
  }

  if (userUpdate) {
    const updateLoop = (timeStamp) => {
      userUpdate(timeStamp, raylib)
      requestAnimationFrame(updateLoop)
    }
    updateLoop()
  }

  return raylib
}

export function raylib_run_string(canvas, userCode) {
  const f = new Function(['runGame', 'canvas'], userCode + '\n' + `
    if (typeof InitGame === 'undefined') {
      console.error('Make sure to add InitGame() to your raylib-game.')
      return
    }
    if (typeof UpdateGame === 'undefined') {
      console.error('Make sure to add UpdateGame() to your raylib-game.')
      return
    }

    let free,addFile,globalize,mod,Vector2,Vector3,Vector4,Matrix,Color,Rectangle,Image,Texture,RenderTexture,NPatchInfo,GlyphInfo,Font,Camera3D,Camera2D,Mesh,Shader,MaterialMap,Material,Transform,BoneInfo,Model,ModelAnimation,Ray,RayCollision,BoundingBox,Wave,AudioStream,Sound,Music,VrDeviceInfo,VrStereoConfig,FilePathList,AutomationEvent,AutomationEventList,Texture2D,GuiStyleProp,GuiTextStyle,rlVertexBuffer,rlDrawCall,rlRenderBatch,Quaternion,TextureCubemap,RenderTexture2D,Camera,FLAG_VSYNC_HINT,FLAG_FULLSCREEN_MODE,FLAG_WINDOW_RESIZABLE,FLAG_WINDOW_UNDECORATED,FLAG_WINDOW_HIDDEN,FLAG_WINDOW_MINIMIZED,FLAG_WINDOW_MAXIMIZED,FLAG_WINDOW_UNFOCUSED,FLAG_WINDOW_TOPMOST,FLAG_WINDOW_ALWAYS_RUN,FLAG_WINDOW_TRANSPARENT,FLAG_WINDOW_HIGHDPI,FLAG_WINDOW_MOUSE_PASSTHROUGH,FLAG_BORDERLESS_WINDOWED_MODE,FLAG_MSAA_4X_HINT,FLAG_INTERLACED_HINT,LOG_ALL,LOG_TRACE,LOG_DEBUG,LOG_INFO,LOG_WARNING,LOG_ERROR,LOG_FATAL,LOG_NONE,KEY_NULL,KEY_APOSTROPHE,KEY_COMMA,KEY_MINUS,KEY_PERIOD,KEY_SLASH,KEY_ZERO,KEY_ONE,KEY_TWO,KEY_THREE,KEY_FOUR,KEY_FIVE,KEY_SIX,KEY_SEVEN,KEY_EIGHT,KEY_NINE,KEY_SEMICOLON,KEY_EQUAL,KEY_A,KEY_B,KEY_C,KEY_D,KEY_E,KEY_F,KEY_G,KEY_H,KEY_I,KEY_J,KEY_K,KEY_L,KEY_M,KEY_N,KEY_O,KEY_P,KEY_Q,KEY_R,KEY_S,KEY_T,KEY_U,KEY_V,KEY_W,KEY_X,KEY_Y,KEY_Z,KEY_LEFT_BRACKET,KEY_BACKSLASH,KEY_RIGHT_BRACKET,KEY_GRAVE,KEY_SPACE,KEY_ESCAPE,KEY_ENTER,KEY_TAB,KEY_BACKSPACE,KEY_INSERT,KEY_DELETE,KEY_RIGHT,KEY_LEFT,KEY_DOWN,KEY_UP,KEY_PAGE_UP,KEY_PAGE_DOWN,KEY_HOME,KEY_END,KEY_CAPS_LOCK,KEY_SCROLL_LOCK,KEY_NUM_LOCK,KEY_PRINT_SCREEN,KEY_PAUSE,KEY_F1,KEY_F2,KEY_F3,KEY_F4,KEY_F5,KEY_F6,KEY_F7,KEY_F8,KEY_F9,KEY_F10,KEY_F11,KEY_F12,KEY_LEFT_SHIFT,KEY_LEFT_CONTROL,KEY_LEFT_ALT,KEY_LEFT_SUPER,KEY_RIGHT_SHIFT,KEY_RIGHT_CONTROL,KEY_RIGHT_ALT,KEY_RIGHT_SUPER,KEY_KB_MENU,KEY_KP_0,KEY_KP_1,KEY_KP_2,KEY_KP_3,KEY_KP_4,KEY_KP_5,KEY_KP_6,KEY_KP_7,KEY_KP_8,KEY_KP_9,KEY_KP_DECIMAL,KEY_KP_DIVIDE,KEY_KP_MULTIPLY,KEY_KP_SUBTRACT,KEY_KP_ADD,KEY_KP_ENTER,KEY_KP_EQUAL,KEY_BACK,KEY_MENU,KEY_VOLUME_UP,KEY_VOLUME_DOWN,MOUSE_BUTTON_LEFT,MOUSE_BUTTON_RIGHT,MOUSE_BUTTON_MIDDLE,MOUSE_BUTTON_SIDE,MOUSE_BUTTON_EXTRA,MOUSE_BUTTON_FORWARD,MOUSE_BUTTON_BACK,MOUSE_CURSOR_DEFAULT,MOUSE_CURSOR_ARROW,MOUSE_CURSOR_IBEAM,MOUSE_CURSOR_CROSSHAIR,MOUSE_CURSOR_POINTING_HAND,MOUSE_CURSOR_RESIZE_EW,MOUSE_CURSOR_RESIZE_NS,MOUSE_CURSOR_RESIZE_NWSE,MOUSE_CURSOR_RESIZE_NESW,MOUSE_CURSOR_RESIZE_ALL,MOUSE_CURSOR_NOT_ALLOWED,GAMEPAD_BUTTON_UNKNOWN,GAMEPAD_BUTTON_LEFT_FACE_UP,GAMEPAD_BUTTON_LEFT_FACE_RIGHT,GAMEPAD_BUTTON_LEFT_FACE_DOWN,GAMEPAD_BUTTON_LEFT_FACE_LEFT,GAMEPAD_BUTTON_RIGHT_FACE_UP,GAMEPAD_BUTTON_RIGHT_FACE_RIGHT,GAMEPAD_BUTTON_RIGHT_FACE_DOWN,GAMEPAD_BUTTON_RIGHT_FACE_LEFT,GAMEPAD_BUTTON_LEFT_TRIGGER_1,GAMEPAD_BUTTON_LEFT_TRIGGER_2,GAMEPAD_BUTTON_RIGHT_TRIGGER_1,GAMEPAD_BUTTON_RIGHT_TRIGGER_2,GAMEPAD_BUTTON_MIDDLE_LEFT,GAMEPAD_BUTTON_MIDDLE,GAMEPAD_BUTTON_MIDDLE_RIGHT,GAMEPAD_BUTTON_LEFT_THUMB,GAMEPAD_BUTTON_RIGHT_THUMB,GAMEPAD_AXIS_LEFT_X,GAMEPAD_AXIS_LEFT_Y,GAMEPAD_AXIS_RIGHT_X,GAMEPAD_AXIS_RIGHT_Y,GAMEPAD_AXIS_LEFT_TRIGGER,GAMEPAD_AXIS_RIGHT_TRIGGER,MATERIAL_MAP_ALBEDO,MATERIAL_MAP_METALNESS,MATERIAL_MAP_NORMAL,MATERIAL_MAP_ROUGHNESS,MATERIAL_MAP_OCCLUSION,MATERIAL_MAP_EMISSION,MATERIAL_MAP_HEIGHT,MATERIAL_MAP_CUBEMAP,MATERIAL_MAP_IRRADIANCE,MATERIAL_MAP_PREFILTER,MATERIAL_MAP_BRDF,SHADER_LOC_VERTEX_POSITION,SHADER_LOC_VERTEX_TEXCOORD01,SHADER_LOC_VERTEX_TEXCOORD02,SHADER_LOC_VERTEX_NORMAL,SHADER_LOC_VERTEX_TANGENT,SHADER_LOC_VERTEX_COLOR,SHADER_LOC_MATRIX_MVP,SHADER_LOC_MATRIX_VIEW,SHADER_LOC_MATRIX_PROJECTION,SHADER_LOC_MATRIX_MODEL,SHADER_LOC_MATRIX_NORMAL,SHADER_LOC_VECTOR_VIEW,SHADER_LOC_COLOR_DIFFUSE,SHADER_LOC_COLOR_SPECULAR,SHADER_LOC_COLOR_AMBIENT,SHADER_LOC_MAP_ALBEDO,SHADER_LOC_MAP_METALNESS,SHADER_LOC_MAP_NORMAL,SHADER_LOC_MAP_ROUGHNESS,SHADER_LOC_MAP_OCCLUSION,SHADER_LOC_MAP_EMISSION,SHADER_LOC_MAP_HEIGHT,SHADER_LOC_MAP_CUBEMAP,SHADER_LOC_MAP_IRRADIANCE,SHADER_LOC_MAP_PREFILTER,SHADER_LOC_MAP_BRDF,SHADER_LOC_VERTEX_BONEIDS,SHADER_LOC_VERTEX_BONEWEIGHTS,SHADER_LOC_BONE_MATRICES,SHADER_UNIFORM_FLOAT,SHADER_UNIFORM_VEC2,SHADER_UNIFORM_VEC3,SHADER_UNIFORM_VEC4,SHADER_UNIFORM_INT,SHADER_UNIFORM_IVEC2,SHADER_UNIFORM_IVEC3,SHADER_UNIFORM_IVEC4,SHADER_UNIFORM_SAMPLER2D,SHADER_ATTRIB_FLOAT,SHADER_ATTRIB_VEC2,SHADER_ATTRIB_VEC3,SHADER_ATTRIB_VEC4,PIXELFORMAT_UNCOMPRESSED_GRAYSCALE,PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA,PIXELFORMAT_UNCOMPRESSED_R5G6B5,PIXELFORMAT_UNCOMPRESSED_R8G8B8,PIXELFORMAT_UNCOMPRESSED_R5G5B5A1,PIXELFORMAT_UNCOMPRESSED_R4G4B4A4,PIXELFORMAT_UNCOMPRESSED_R8G8B8A8,PIXELFORMAT_UNCOMPRESSED_R32,PIXELFORMAT_UNCOMPRESSED_R32G32B32,PIXELFORMAT_UNCOMPRESSED_R32G32B32A32,PIXELFORMAT_UNCOMPRESSED_R16,PIXELFORMAT_UNCOMPRESSED_R16G16B16,PIXELFORMAT_UNCOMPRESSED_R16G16B16A16,PIXELFORMAT_COMPRESSED_DXT1_RGB,PIXELFORMAT_COMPRESSED_DXT1_RGBA,PIXELFORMAT_COMPRESSED_DXT3_RGBA,PIXELFORMAT_COMPRESSED_DXT5_RGBA,PIXELFORMAT_COMPRESSED_ETC1_RGB,PIXELFORMAT_COMPRESSED_ETC2_RGB,PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA,PIXELFORMAT_COMPRESSED_PVRT_RGB,PIXELFORMAT_COMPRESSED_PVRT_RGBA,PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA,PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA,TEXTURE_FILTER_POINT,TEXTURE_FILTER_BILINEAR,TEXTURE_FILTER_TRILINEAR,TEXTURE_FILTER_ANISOTROPIC_4X,TEXTURE_FILTER_ANISOTROPIC_8X,TEXTURE_FILTER_ANISOTROPIC_16X,TEXTURE_WRAP_REPEAT,TEXTURE_WRAP_CLAMP,TEXTURE_WRAP_MIRROR_REPEAT,TEXTURE_WRAP_MIRROR_CLAMP,CUBEMAP_LAYOUT_AUTO_DETECT,CUBEMAP_LAYOUT_LINE_VERTICAL,CUBEMAP_LAYOUT_LINE_HORIZONTAL,CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR,CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE,FONT_DEFAULT,FONT_BITMAP,FONT_SDF,BLEND_ALPHA,BLEND_ADDITIVE,BLEND_MULTIPLIED,BLEND_ADD_COLORS,BLEND_SUBTRACT_COLORS,BLEND_ALPHA_PREMULTIPLY,BLEND_CUSTOM,BLEND_CUSTOM_SEPARATE,GESTURE_NONE,GESTURE_TAP,GESTURE_DOUBLETAP,GESTURE_HOLD,GESTURE_DRAG,GESTURE_SWIPE_RIGHT,GESTURE_SWIPE_LEFT,GESTURE_SWIPE_UP,GESTURE_SWIPE_DOWN,GESTURE_PINCH_IN,GESTURE_PINCH_OUT,CAMERA_CUSTOM,CAMERA_FREE,CAMERA_ORBITAL,CAMERA_FIRST_PERSON,CAMERA_THIRD_PERSON,CAMERA_PERSPECTIVE,CAMERA_ORTHOGRAPHIC,NPATCH_NINE_PATCH,NPATCH_THREE_PATCH_VERTICAL,NPATCH_THREE_PATCH_HORIZONTAL,STATE_NORMAL,STATE_FOCUSED,STATE_PRESSED,STATE_DISABLED,TEXT_ALIGN_LEFT,TEXT_ALIGN_CENTER,TEXT_ALIGN_RIGHT,TEXT_ALIGN_TOP,TEXT_ALIGN_MIDDLE,TEXT_ALIGN_BOTTOM,TEXT_WRAP_NONE,TEXT_WRAP_CHAR,TEXT_WRAP_WORD,DEFAULT,LABEL,BUTTON,TOGGLE,SLIDER,PROGRESSBAR,CHECKBOX,COMBOBOX,DROPDOWNBOX,TEXTBOX,VALUEBOX,SPINNER,LISTVIEW,COLORPICKER,SCROLLBAR,STATUSBAR,BORDER_COLOR_NORMAL,BASE_COLOR_NORMAL,TEXT_COLOR_NORMAL,BORDER_COLOR_FOCUSED,BASE_COLOR_FOCUSED,TEXT_COLOR_FOCUSED,BORDER_COLOR_PRESSED,BASE_COLOR_PRESSED,TEXT_COLOR_PRESSED,BORDER_COLOR_DISABLED,BASE_COLOR_DISABLED,TEXT_COLOR_DISABLED,BORDER_WIDTH,TEXT_PADDING,TEXT_ALIGNMENT,TEXT_SIZE,TEXT_SPACING,LINE_COLOR,BACKGROUND_COLOR,TEXT_LINE_SPACING,TEXT_ALIGNMENT_VERTICAL,TEXT_WRAP_MODE,GROUP_PADDING,SLIDER_WIDTH,SLIDER_PADDING,PROGRESS_PADDING,ARROWS_SIZE,ARROWS_VISIBLE,SCROLL_SLIDER_PADDING,SCROLL_SLIDER_SIZE,SCROLL_PADDING,SCROLL_SPEED,CHECK_PADDING,COMBO_BUTTON_WIDTH,COMBO_BUTTON_SPACING,ARROW_PADDING,DROPDOWN_ITEMS_SPACING,TEXT_READONLY,SPIN_BUTTON_WIDTH,SPIN_BUTTON_SPACING,LIST_ITEMS_HEIGHT,LIST_ITEMS_SPACING,SCROLLBAR_WIDTH,SCROLLBAR_SIDE,COLOR_SELECTOR_SIZE,HUEBAR_WIDTH,HUEBAR_PADDING,HUEBAR_SELECTOR_HEIGHT,HUEBAR_SELECTOR_OVERFLOW,ICON_NONE,ICON_FOLDER_FILE_OPEN,ICON_FILE_SAVE_CLASSIC,ICON_FOLDER_OPEN,ICON_FOLDER_SAVE,ICON_FILE_OPEN,ICON_FILE_SAVE,ICON_FILE_EXPORT,ICON_FILE_ADD,ICON_FILE_DELETE,ICON_FILETYPE_TEXT,ICON_FILETYPE_AUDIO,ICON_FILETYPE_IMAGE,ICON_FILETYPE_PLAY,ICON_FILETYPE_VIDEO,ICON_FILETYPE_INFO,ICON_FILE_COPY,ICON_FILE_CUT,ICON_FILE_PASTE,ICON_CURSOR_HAND,ICON_CURSOR_POINTER,ICON_CURSOR_CLASSIC,ICON_PENCIL,ICON_PENCIL_BIG,ICON_BRUSH_CLASSIC,ICON_BRUSH_PAINTER,ICON_WATER_DROP,ICON_COLOR_PICKER,ICON_RUBBER,ICON_COLOR_BUCKET,ICON_TEXT_T,ICON_TEXT_A,ICON_SCALE,ICON_RESIZE,ICON_FILTER_POINT,ICON_FILTER_BILINEAR,ICON_CROP,ICON_CROP_ALPHA,ICON_SQUARE_TOGGLE,ICON_SYMMETRY,ICON_SYMMETRY_HORIZONTAL,ICON_SYMMETRY_VERTICAL,ICON_LENS,ICON_LENS_BIG,ICON_EYE_ON,ICON_EYE_OFF,ICON_FILTER_TOP,ICON_FILTER,ICON_TARGET_POINT,ICON_TARGET_SMALL,ICON_TARGET_BIG,ICON_TARGET_MOVE,ICON_CURSOR_MOVE,ICON_CURSOR_SCALE,ICON_CURSOR_SCALE_RIGHT,ICON_CURSOR_SCALE_LEFT,ICON_UNDO,ICON_REDO,ICON_REREDO,ICON_MUTATE,ICON_ROTATE,ICON_REPEAT,ICON_SHUFFLE,ICON_EMPTYBOX,ICON_TARGET,ICON_TARGET_SMALL_FILL,ICON_TARGET_BIG_FILL,ICON_TARGET_MOVE_FILL,ICON_CURSOR_MOVE_FILL,ICON_CURSOR_SCALE_FILL,ICON_CURSOR_SCALE_RIGHT_FILL,ICON_CURSOR_SCALE_LEFT_FILL,ICON_UNDO_FILL,ICON_REDO_FILL,ICON_REREDO_FILL,ICON_MUTATE_FILL,ICON_ROTATE_FILL,ICON_REPEAT_FILL,ICON_SHUFFLE_FILL,ICON_EMPTYBOX_SMALL,ICON_BOX,ICON_BOX_TOP,ICON_BOX_TOP_RIGHT,ICON_BOX_RIGHT,ICON_BOX_BOTTOM_RIGHT,ICON_BOX_BOTTOM,ICON_BOX_BOTTOM_LEFT,ICON_BOX_LEFT,ICON_BOX_TOP_LEFT,ICON_BOX_CENTER,ICON_BOX_CIRCLE_MASK,ICON_POT,ICON_ALPHA_MULTIPLY,ICON_ALPHA_CLEAR,ICON_DITHERING,ICON_MIPMAPS,ICON_BOX_GRID,ICON_GRID,ICON_BOX_CORNERS_SMALL,ICON_BOX_CORNERS_BIG,ICON_FOUR_BOXES,ICON_GRID_FILL,ICON_BOX_MULTISIZE,ICON_ZOOM_SMALL,ICON_ZOOM_MEDIUM,ICON_ZOOM_BIG,ICON_ZOOM_ALL,ICON_ZOOM_CENTER,ICON_BOX_DOTS_SMALL,ICON_BOX_DOTS_BIG,ICON_BOX_CONCENTRIC,ICON_BOX_GRID_BIG,ICON_OK_TICK,ICON_CROSS,ICON_ARROW_LEFT,ICON_ARROW_RIGHT,ICON_ARROW_DOWN,ICON_ARROW_UP,ICON_ARROW_LEFT_FILL,ICON_ARROW_RIGHT_FILL,ICON_ARROW_DOWN_FILL,ICON_ARROW_UP_FILL,ICON_AUDIO,ICON_FX,ICON_WAVE,ICON_WAVE_SINUS,ICON_WAVE_SQUARE,ICON_WAVE_TRIANGULAR,ICON_CROSS_SMALL,ICON_PLAYER_PREVIOUS,ICON_PLAYER_PLAY_BACK,ICON_PLAYER_PLAY,ICON_PLAYER_PAUSE,ICON_PLAYER_STOP,ICON_PLAYER_NEXT,ICON_PLAYER_RECORD,ICON_MAGNET,ICON_LOCK_CLOSE,ICON_LOCK_OPEN,ICON_CLOCK,ICON_TOOLS,ICON_GEAR,ICON_GEAR_BIG,ICON_BIN,ICON_HAND_POINTER,ICON_LASER,ICON_COIN,ICON_EXPLOSION,ICON_1UP,ICON_PLAYER,ICON_PLAYER_JUMP,ICON_KEY,ICON_DEMON,ICON_TEXT_POPUP,ICON_GEAR_EX,ICON_CRACK,ICON_CRACK_POINTS,ICON_STAR,ICON_DOOR,ICON_EXIT,ICON_MODE_2D,ICON_MODE_3D,ICON_CUBE,ICON_CUBE_FACE_TOP,ICON_CUBE_FACE_LEFT,ICON_CUBE_FACE_FRONT,ICON_CUBE_FACE_BOTTOM,ICON_CUBE_FACE_RIGHT,ICON_CUBE_FACE_BACK,ICON_CAMERA,ICON_SPECIAL,ICON_LINK_NET,ICON_LINK_BOXES,ICON_LINK_MULTI,ICON_LINK,ICON_LINK_BROKE,ICON_TEXT_NOTES,ICON_NOTEBOOK,ICON_SUITCASE,ICON_SUITCASE_ZIP,ICON_MAILBOX,ICON_MONITOR,ICON_PRINTER,ICON_PHOTO_CAMERA,ICON_PHOTO_CAMERA_FLASH,ICON_HOUSE,ICON_HEART,ICON_CORNER,ICON_VERTICAL_BARS,ICON_VERTICAL_BARS_FILL,ICON_LIFE_BARS,ICON_INFO,ICON_CROSSLINE,ICON_HELP,ICON_FILETYPE_ALPHA,ICON_FILETYPE_HOME,ICON_LAYERS_VISIBLE,ICON_LAYERS,ICON_WINDOW,ICON_HIDPI,ICON_FILETYPE_BINARY,ICON_HEX,ICON_SHIELD,ICON_FILE_NEW,ICON_FOLDER_ADD,ICON_ALARM,ICON_CPU,ICON_ROM,ICON_STEP_OVER,ICON_STEP_INTO,ICON_STEP_OUT,ICON_RESTART,ICON_BREAKPOINT_ON,ICON_BREAKPOINT_OFF,ICON_BURGER_MENU,ICON_CASE_SENSITIVE,ICON_REG_EXP,ICON_FOLDER,ICON_FILE,ICON_SAND_TIMER,ICON_220,ICON_221,ICON_222,ICON_223,ICON_224,ICON_225,ICON_226,ICON_227,ICON_228,ICON_229,ICON_230,ICON_231,ICON_232,ICON_233,ICON_234,ICON_235,ICON_236,ICON_237,ICON_238,ICON_239,ICON_240,ICON_241,ICON_242,ICON_243,ICON_244,ICON_245,ICON_246,ICON_247,ICON_248,ICON_249,ICON_250,ICON_251,ICON_252,ICON_253,ICON_254,ICON_255,RL_OPENGL_11,RL_OPENGL_21,RL_OPENGL_33,RL_OPENGL_43,RL_OPENGL_ES_20,RL_OPENGL_ES_30,RL_LOG_ALL,RL_LOG_TRACE,RL_LOG_DEBUG,RL_LOG_INFO,RL_LOG_WARNING,RL_LOG_ERROR,RL_LOG_FATAL,RL_LOG_NONE,RL_PIXELFORMAT_UNCOMPRESSED_GRAYSCALE,RL_PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA,RL_PIXELFORMAT_UNCOMPRESSED_R5G6B5,RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8,RL_PIXELFORMAT_UNCOMPRESSED_R5G5B5A1,RL_PIXELFORMAT_UNCOMPRESSED_R4G4B4A4,RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8A8,RL_PIXELFORMAT_UNCOMPRESSED_R32,RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32,RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32A32,RL_PIXELFORMAT_UNCOMPRESSED_R16,RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16,RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16A16,RL_PIXELFORMAT_COMPRESSED_DXT1_RGB,RL_PIXELFORMAT_COMPRESSED_DXT1_RGBA,RL_PIXELFORMAT_COMPRESSED_DXT3_RGBA,RL_PIXELFORMAT_COMPRESSED_DXT5_RGBA,RL_PIXELFORMAT_COMPRESSED_ETC1_RGB,RL_PIXELFORMAT_COMPRESSED_ETC2_RGB,RL_PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA,RL_PIXELFORMAT_COMPRESSED_PVRT_RGB,RL_PIXELFORMAT_COMPRESSED_PVRT_RGBA,RL_PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA,RL_PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA,RL_TEXTURE_FILTER_POINT,RL_TEXTURE_FILTER_BILINEAR,RL_TEXTURE_FILTER_TRILINEAR,RL_TEXTURE_FILTER_ANISOTROPIC_4X,RL_TEXTURE_FILTER_ANISOTROPIC_8X,RL_TEXTURE_FILTER_ANISOTROPIC_16X,RL_BLEND_ALPHA,RL_BLEND_ADDITIVE,RL_BLEND_MULTIPLIED,RL_BLEND_ADD_COLORS,RL_BLEND_SUBTRACT_COLORS,RL_BLEND_ALPHA_PREMULTIPLY,RL_BLEND_CUSTOM,RL_BLEND_CUSTOM_SEPARATE,RL_SHADER_LOC_VERTEX_POSITION,RL_SHADER_LOC_VERTEX_TEXCOORD01,RL_SHADER_LOC_VERTEX_TEXCOORD02,RL_SHADER_LOC_VERTEX_NORMAL,RL_SHADER_LOC_VERTEX_TANGENT,RL_SHADER_LOC_VERTEX_COLOR,RL_SHADER_LOC_MATRIX_MVP,RL_SHADER_LOC_MATRIX_VIEW,RL_SHADER_LOC_MATRIX_PROJECTION,RL_SHADER_LOC_MATRIX_MODEL,RL_SHADER_LOC_MATRIX_NORMAL,RL_SHADER_LOC_VECTOR_VIEW,RL_SHADER_LOC_COLOR_DIFFUSE,RL_SHADER_LOC_COLOR_SPECULAR,RL_SHADER_LOC_COLOR_AMBIENT,RL_SHADER_LOC_MAP_ALBEDO,RL_SHADER_LOC_MAP_METALNESS,RL_SHADER_LOC_MAP_NORMAL,RL_SHADER_LOC_MAP_ROUGHNESS,RL_SHADER_LOC_MAP_OCCLUSION,RL_SHADER_LOC_MAP_EMISSION,RL_SHADER_LOC_MAP_HEIGHT,RL_SHADER_LOC_MAP_CUBEMAP,RL_SHADER_LOC_MAP_IRRADIANCE,RL_SHADER_LOC_MAP_PREFILTER,RL_SHADER_LOC_MAP_BRDF,RL_SHADER_UNIFORM_FLOAT,RL_SHADER_UNIFORM_VEC2,RL_SHADER_UNIFORM_VEC3,RL_SHADER_UNIFORM_VEC4,RL_SHADER_UNIFORM_INT,RL_SHADER_UNIFORM_IVEC2,RL_SHADER_UNIFORM_IVEC3,RL_SHADER_UNIFORM_IVEC4,RL_SHADER_UNIFORM_UINT,RL_SHADER_UNIFORM_UIVEC2,RL_SHADER_UNIFORM_UIVEC3,RL_SHADER_UNIFORM_UIVEC4,RL_SHADER_UNIFORM_SAMPLER2D,RL_SHADER_ATTRIB_FLOAT,RL_SHADER_ATTRIB_VEC2,RL_SHADER_ATTRIB_VEC3,RL_SHADER_ATTRIB_VEC4,RL_ATTACHMENT_COLOR_CHANNEL0,RL_ATTACHMENT_COLOR_CHANNEL1,RL_ATTACHMENT_COLOR_CHANNEL2,RL_ATTACHMENT_COLOR_CHANNEL3,RL_ATTACHMENT_COLOR_CHANNEL4,RL_ATTACHMENT_COLOR_CHANNEL5,RL_ATTACHMENT_COLOR_CHANNEL6,RL_ATTACHMENT_COLOR_CHANNEL7,RL_ATTACHMENT_DEPTH,RL_ATTACHMENT_STENCIL,RL_ATTACHMENT_CUBEMAP_POSITIVE_X,RL_ATTACHMENT_CUBEMAP_NEGATIVE_X,RL_ATTACHMENT_CUBEMAP_POSITIVE_Y,RL_ATTACHMENT_CUBEMAP_NEGATIVE_Y,RL_ATTACHMENT_CUBEMAP_POSITIVE_Z,RL_ATTACHMENT_CUBEMAP_NEGATIVE_Z,RL_ATTACHMENT_TEXTURE2D,RL_ATTACHMENT_RENDERBUFFER,RL_CULL_FACE_FRONT,RL_CULL_FACE_BACK,LIGHTGRAY,GRAY,DARKGRAY,YELLOW,GOLD,ORANGE,PINK,RED,MAROON,GREEN,LIME,DARKGREEN,SKYBLUE,BLUE,DARKBLUE,PURPLE,VIOLET,DARKPURPLE,BEIGE,BROWN,DARKBROWN,WHITE,BLACK,BLANK,MAGENTA,RAYWHITE,InitWindow,CloseWindow,WindowShouldClose,IsWindowReady,IsWindowFullscreen,IsWindowHidden,IsWindowMinimized,IsWindowMaximized,IsWindowFocused,IsWindowResized,IsWindowState,SetWindowState,ClearWindowState,ToggleFullscreen,ToggleBorderlessWindowed,MaximizeWindow,MinimizeWindow,RestoreWindow,SetWindowIcon,SetWindowIcons,SetWindowTitle,SetWindowPosition,SetWindowMonitor,SetWindowMinSize,SetWindowMaxSize,SetWindowSize,SetWindowOpacity,SetWindowFocused,GetWindowHandle,GetScreenWidth,GetScreenHeight,GetRenderWidth,GetRenderHeight,GetMonitorCount,GetCurrentMonitor,GetMonitorPosition,GetMonitorWidth,GetMonitorHeight,GetMonitorPhysicalWidth,GetMonitorPhysicalHeight,GetMonitorRefreshRate,GetWindowPosition,GetWindowScaleDPI,GetMonitorName,SetClipboardText,GetClipboardText,EnableEventWaiting,DisableEventWaiting,ShowCursor,HideCursor,IsCursorHidden,EnableCursor,DisableCursor,IsCursorOnScreen,ClearBackground,BeginDrawing,EndDrawing,BeginMode2D,EndMode2D,BeginMode3D,EndMode3D,BeginTextureMode,EndTextureMode,BeginShaderMode,EndShaderMode,BeginBlendMode,EndBlendMode,BeginScissorMode,EndScissorMode,BeginVrStereoMode,EndVrStereoMode,LoadVrStereoConfig,UnloadVrStereoConfig,LoadShader,LoadShaderFromMemory,IsShaderValid,GetShaderLocation,GetShaderLocationAttrib,SetShaderValue,SetShaderValueV,SetShaderValueMatrix,SetShaderValueTexture,UnloadShader,GetScreenToWorldRay,GetScreenToWorldRayEx,GetWorldToScreen,GetWorldToScreenEx,GetWorldToScreen2D,GetScreenToWorld2D,GetCameraMatrix,GetCameraMatrix2D,SetTargetFPS,GetFrameTime,GetTime,GetFPS,SwapScreenBuffer,PollInputEvents,WaitTime,SetRandomSeed,GetRandomValue,LoadRandomSequence,UnloadRandomSequence,TakeScreenshot,SetConfigFlags,OpenURL,TraceLog,SetTraceLogLevel,MemAlloc,MemRealloc,MemFree,SetTraceLogCallback,SetLoadFileDataCallback,SetSaveFileDataCallback,SetLoadFileTextCallback,SetSaveFileTextCallback,LoadFileData,UnloadFileData,SaveFileData,ExportDataAsCode,LoadFileText,UnloadFileText,SaveFileText,FileExists,DirectoryExists,IsFileExtension,GetFileLength,GetFileExtension,GetFileName,GetFileNameWithoutExt,GetDirectoryPath,GetPrevDirectoryPath,GetWorkingDirectory,GetApplicationDirectory,MakeDirectory,ChangeDirectory,IsPathFile,IsFileNameValid,LoadDirectoryFiles,LoadDirectoryFilesEx,UnloadDirectoryFiles,IsFileDropped,LoadDroppedFiles,UnloadDroppedFiles,GetFileModTime,CompressData,DecompressData,EncodeDataBase64,DecodeDataBase64,ComputeCRC32,ComputeMD5,ComputeSHA1,LoadAutomationEventList,UnloadAutomationEventList,ExportAutomationEventList,SetAutomationEventList,SetAutomationEventBaseFrame,StartAutomationEventRecording,StopAutomationEventRecording,PlayAutomationEvent,IsKeyPressed,IsKeyPressedRepeat,IsKeyDown,IsKeyReleased,IsKeyUp,GetKeyPressed,GetCharPressed,SetExitKey,IsGamepadAvailable,GetGamepadName,IsGamepadButtonPressed,IsGamepadButtonDown,IsGamepadButtonReleased,IsGamepadButtonUp,GetGamepadButtonPressed,GetGamepadAxisCount,GetGamepadAxisMovement,SetGamepadMappings,SetGamepadVibration,IsMouseButtonPressed,IsMouseButtonDown,IsMouseButtonReleased,IsMouseButtonUp,GetMouseX,GetMouseY,GetMousePosition,GetMouseDelta,SetMousePosition,SetMouseOffset,SetMouseScale,GetMouseWheelMove,GetMouseWheelMoveV,SetMouseCursor,GetTouchX,GetTouchY,GetTouchPosition,GetTouchPointId,GetTouchPointCount,SetGesturesEnabled,IsGestureDetected,GetGestureDetected,GetGestureHoldDuration,GetGestureDragVector,GetGestureDragAngle,GetGesturePinchVector,GetGesturePinchAngle,UpdateCamera,UpdateCameraPro,SetShapesTexture,GetShapesTexture,GetShapesTextureRectangle,DrawPixel,DrawPixelV,DrawLine,DrawLineV,DrawLineEx,DrawLineStrip,DrawLineBezier,DrawCircle,DrawCircleSector,DrawCircleSectorLines,DrawCircleGradient,DrawCircleV,DrawCircleLines,DrawCircleLinesV,DrawEllipse,DrawEllipseLines,DrawRing,DrawRingLines,DrawRectangle,DrawRectangleV,DrawRectangleRec,DrawRectanglePro,DrawRectangleGradientV,DrawRectangleGradientH,DrawRectangleGradientEx,DrawRectangleLines,DrawRectangleLinesEx,DrawRectangleRounded,DrawRectangleRoundedLines,DrawRectangleRoundedLinesEx,DrawTriangle,DrawTriangleLines,DrawTriangleFan,DrawTriangleStrip,DrawPoly,DrawPolyLines,DrawPolyLinesEx,DrawSplineLinear,DrawSplineBasis,DrawSplineCatmullRom,DrawSplineBezierQuadratic,DrawSplineBezierCubic,DrawSplineSegmentLinear,DrawSplineSegmentBasis,DrawSplineSegmentCatmullRom,DrawSplineSegmentBezierQuadratic,DrawSplineSegmentBezierCubic,GetSplinePointLinear,GetSplinePointBasis,GetSplinePointCatmullRom,GetSplinePointBezierQuad,GetSplinePointBezierCubic,CheckCollisionRecs,CheckCollisionCircles,CheckCollisionCircleRec,CheckCollisionCircleLine,CheckCollisionPointRec,CheckCollisionPointCircle,CheckCollisionPointTriangle,CheckCollisionPointLine,CheckCollisionPointPoly,CheckCollisionLines,GetCollisionRec,LoadImage,LoadImageRaw,LoadImageAnim,LoadImageAnimFromMemory,LoadImageFromMemory,LoadImageFromTexture,LoadImageFromScreen,IsImageValid,UnloadImage,ExportImage,ExportImageToMemory,ExportImageAsCode,GenImageColor,GenImageGradientLinear,GenImageGradientRadial,GenImageGradientSquare,GenImageChecked,GenImageWhiteNoise,GenImagePerlinNoise,GenImageCellular,GenImageText,ImageCopy,ImageFromImage,ImageFromChannel,ImageText,ImageTextEx,ImageFormat,ImageToPOT,ImageCrop,ImageAlphaCrop,ImageAlphaClear,ImageAlphaMask,ImageAlphaPremultiply,ImageBlurGaussian,ImageKernelConvolution,ImageResize,ImageResizeNN,ImageResizeCanvas,ImageMipmaps,ImageDither,ImageFlipVertical,ImageFlipHorizontal,ImageRotate,ImageRotateCW,ImageRotateCCW,ImageColorTint,ImageColorInvert,ImageColorGrayscale,ImageColorContrast,ImageColorBrightness,ImageColorReplace,LoadImageColors,LoadImagePalette,UnloadImageColors,UnloadImagePalette,GetImageAlphaBorder,GetImageColor,ImageClearBackground,ImageDrawPixel,ImageDrawPixelV,ImageDrawLine,ImageDrawLineV,ImageDrawLineEx,ImageDrawCircle,ImageDrawCircleV,ImageDrawCircleLines,ImageDrawCircleLinesV,ImageDrawRectangle,ImageDrawRectangleV,ImageDrawRectangleRec,ImageDrawRectangleLines,ImageDrawTriangle,ImageDrawTriangleEx,ImageDrawTriangleLines,ImageDrawTriangleFan,ImageDrawTriangleStrip,ImageDraw,ImageDrawText,ImageDrawTextEx,LoadTexture,LoadTextureFromImage,LoadTextureCubemap,LoadRenderTexture,IsTextureValid,UnloadTexture,IsRenderTextureValid,UnloadRenderTexture,UpdateTexture,UpdateTextureRec,GenTextureMipmaps,SetTextureFilter,SetTextureWrap,DrawTexture,DrawTextureV,DrawTextureEx,DrawTextureRec,DrawTexturePro,DrawTextureNPatch,ColorIsEqual,Fade,ColorToInt,ColorNormalize,ColorFromNormalized,ColorToHSV,ColorFromHSV,ColorTint,ColorBrightness,ColorContrast,ColorAlpha,ColorAlphaBlend,ColorLerp,GetColor,GetPixelColor,SetPixelColor,GetPixelDataSize,GetFontDefault,LoadFont,LoadFontEx,LoadFontFromImage,LoadFontFromMemory,IsFontValid,LoadFontData,GenImageFontAtlas,UnloadFontData,UnloadFont,ExportFontAsCode,DrawFPS,DrawText,DrawTextEx,DrawTextPro,DrawTextCodepoint,DrawTextCodepoints,SetTextLineSpacing,MeasureText,MeasureTextEx,GetGlyphIndex,GetGlyphInfo,GetGlyphAtlasRec,LoadUTF8,UnloadUTF8,LoadCodepoints,UnloadCodepoints,GetCodepointCount,GetCodepoint,GetCodepointNext,GetCodepointPrevious,CodepointToUTF8,TextCopy,TextIsEqual,TextLength,TextFormat,TextSubtext,TextReplace,TextInsert,TextJoin,TextSplit,TextAppend,TextFindIndex,TextToUpper,TextToLower,TextToPascal,TextToSnake,TextToCamel,TextToInteger,TextToFloat,DrawLine3D,DrawPoint3D,DrawCircle3D,DrawTriangle3D,DrawTriangleStrip3D,DrawCube,DrawCubeV,DrawCubeWires,DrawCubeWiresV,DrawSphere,DrawSphereEx,DrawSphereWires,DrawCylinder,DrawCylinderEx,DrawCylinderWires,DrawCylinderWiresEx,DrawCapsule,DrawCapsuleWires,DrawPlane,DrawRay,DrawGrid,LoadModel,LoadModelFromMesh,IsModelValid,UnloadModel,GetModelBoundingBox,DrawModel,DrawModelEx,DrawModelWires,DrawModelWiresEx,DrawModelPoints,DrawModelPointsEx,DrawBoundingBox,DrawBillboard,DrawBillboardRec,DrawBillboardPro,UploadMesh,UpdateMeshBuffer,UnloadMesh,DrawMesh,DrawMeshInstanced,GetMeshBoundingBox,GenMeshTangents,ExportMesh,ExportMeshAsCode,GenMeshPoly,GenMeshPlane,GenMeshCube,GenMeshSphere,GenMeshHemiSphere,GenMeshCylinder,GenMeshCone,GenMeshTorus,GenMeshKnot,GenMeshHeightmap,GenMeshCubicmap,LoadMaterials,LoadMaterialDefault,IsMaterialValid,UnloadMaterial,SetMaterialTexture,SetModelMeshMaterial,LoadModelAnimations,UpdateModelAnimation,UpdateModelAnimationBones,UnloadModelAnimation,UnloadModelAnimations,IsModelAnimationValid,CheckCollisionSpheres,CheckCollisionBoxes,CheckCollisionBoxSphere,GetRayCollisionSphere,GetRayCollisionBox,GetRayCollisionMesh,GetRayCollisionTriangle,GetRayCollisionQuad,InitAudioDevice,CloseAudioDevice,IsAudioDeviceReady,SetMasterVolume,GetMasterVolume,LoadWave,LoadWaveFromMemory,IsWaveValid,LoadSound,LoadSoundFromWave,LoadSoundAlias,IsSoundValid,UpdateSound,UnloadWave,UnloadSound,UnloadSoundAlias,ExportWave,ExportWaveAsCode,PlaySound,StopSound,PauseSound,ResumeSound,IsSoundPlaying,SetSoundVolume,SetSoundPitch,SetSoundPan,WaveCopy,WaveCrop,WaveFormat,LoadWaveSamples,UnloadWaveSamples,LoadMusicStream,LoadMusicStreamFromMemory,IsMusicValid,UnloadMusicStream,PlayMusicStream,IsMusicStreamPlaying,UpdateMusicStream,StopMusicStream,PauseMusicStream,ResumeMusicStream,SeekMusicStream,SetMusicVolume,SetMusicPitch,SetMusicPan,GetMusicTimeLength,GetMusicTimePlayed,LoadAudioStream,IsAudioStreamValid,UnloadAudioStream,UpdateAudioStream,IsAudioStreamProcessed,PlayAudioStream,PauseAudioStream,ResumeAudioStream,IsAudioStreamPlaying,StopAudioStream,SetAudioStreamVolume,SetAudioStreamPitch,SetAudioStreamPan,SetAudioStreamBufferSizeDefault,SetAudioStreamCallback,AttachAudioStreamProcessor,DetachAudioStreamProcessor,AttachAudioMixedProcessor,DetachAudioMixedProcessor,GuiEnable,GuiDisable,GuiLock,GuiUnlock,GuiIsLocked,GuiSetAlpha,GuiSetState,GuiGetState,GuiSetFont,GuiGetFont,GuiSetStyle,GuiGetStyle,GuiLoadStyle,GuiLoadStyleDefault,GuiEnableTooltip,GuiDisableTooltip,GuiSetTooltip,GuiIconText,GuiSetIconScale,GuiGetIcons,GuiLoadIcons,GuiDrawIcon,GuiWindowBox,GuiGroupBox,GuiLine,GuiPanel,GuiTabBar,GuiScrollPanel,GuiLabel,GuiButton,GuiLabelButton,GuiToggle,GuiToggleGroup,GuiToggleSlider,GuiCheckBox,GuiComboBox,GuiDropdownBox,GuiSpinner,GuiValueBox,GuiTextBox,GuiSlider,GuiSliderBar,GuiProgressBar,GuiStatusBar,GuiDummyRec,GuiGrid,GuiListView,GuiListViewEx,GuiMessageBox,GuiTextInputBox,GuiColorPicker,GuiColorPanel,GuiColorBarAlpha,GuiColorBarHue,GuiColorPickerHSV,GuiColorPanelHSV,EaseLinearNone,EaseLinearIn,EaseLinearOut,EaseLinearInOut,EaseSineIn,EaseSineOut,EaseSineInOut,EaseCircIn,EaseCircOut,EaseCircInOut,EaseCubicIn,EaseCubicOut,EaseCubicInOut,EaseQuadIn,EaseQuadOut,EaseQuadInOut,EaseExpoIn,EaseExpoOut,EaseExpoInOut,EaseBackIn,EaseBackOut,EaseBackInOut,EaseBounceOut,EaseBounceIn,EaseBounceInOut,EaseElasticIn,EaseElasticOut,EaseElasticInOut,rlMatrixMode,rlPushMatrix,rlPopMatrix,rlLoadIdentity,rlTranslatef,rlRotatef,rlScalef,rlMultMatrixf,rlFrustum,rlOrtho,rlViewport,rlSetClipPlanes,rlGetCullDistanceNear,rlGetCullDistanceFar,rlBegin,rlEnd,rlVertex2i,rlVertex2f,rlVertex3f,rlTexCoord2f,rlNormal3f,rlColor4ub,rlColor3f,rlColor4f,rlEnableVertexArray,rlDisableVertexArray,rlEnableVertexBuffer,rlDisableVertexBuffer,rlEnableVertexBufferElement,rlDisableVertexBufferElement,rlEnableVertexAttribute,rlDisableVertexAttribute,rlActiveTextureSlot,rlEnableTexture,rlDisableTexture,rlEnableTextureCubemap,rlDisableTextureCubemap,rlTextureParameters,rlCubemapParameters,rlEnableShader,rlDisableShader,rlEnableFramebuffer,rlDisableFramebuffer,rlGetActiveFramebuffer,rlActiveDrawBuffers,rlBlitFramebuffer,rlBindFramebuffer,rlEnableColorBlend,rlDisableColorBlend,rlEnableDepthTest,rlDisableDepthTest,rlEnableDepthMask,rlDisableDepthMask,rlEnableBackfaceCulling,rlDisableBackfaceCulling,rlColorMask,rlSetCullFace,rlEnableScissorTest,rlDisableScissorTest,rlScissor,rlEnableWireMode,rlEnablePointMode,rlDisableWireMode,rlSetLineWidth,rlGetLineWidth,rlEnableSmoothLines,rlDisableSmoothLines,rlEnableStereoRender,rlDisableStereoRender,rlIsStereoRenderEnabled,rlClearColor,rlClearScreenBuffers,rlCheckErrors,rlSetBlendMode,rlSetBlendFactors,rlSetBlendFactorsSeparate,rlglInit,rlglClose,rlLoadExtensions,rlGetVersion,rlSetFramebufferWidth,rlGetFramebufferWidth,rlSetFramebufferHeight,rlGetFramebufferHeight,rlGetTextureIdDefault,rlGetShaderIdDefault,rlGetShaderLocsDefault,rlLoadRenderBatch,rlUnloadRenderBatch,rlDrawRenderBatch,rlSetRenderBatchActive,rlDrawRenderBatchActive,rlCheckRenderBatchLimit,rlSetTexture,rlLoadVertexArray,rlLoadVertexBuffer,rlLoadVertexBufferElement,rlUpdateVertexBuffer,rlUpdateVertexBufferElements,rlUnloadVertexArray,rlUnloadVertexBuffer,rlSetVertexAttribute,rlSetVertexAttributeDivisor,rlSetVertexAttributeDefault,rlDrawVertexArray,rlDrawVertexArrayElements,rlDrawVertexArrayInstanced,rlDrawVertexArrayElementsInstanced,rlLoadTexture,rlLoadTextureDepth,rlLoadTextureCubemap,rlUpdateTexture,rlGetGlTextureFormats,rlGetPixelFormatName,rlUnloadTexture,rlGenTextureMipmaps,rlReadTexturePixels,rlReadScreenPixels,rlLoadFramebuffer,rlFramebufferAttach,rlFramebufferComplete,rlUnloadFramebuffer,rlLoadShaderCode,rlCompileShader,rlLoadShaderProgram,rlUnloadShaderProgram,rlGetLocationUniform,rlGetLocationAttrib,rlSetUniform,rlSetUniformMatrix,rlSetUniformMatrices,rlSetUniformSampler,rlSetShader,rlLoadComputeShaderProgram,rlComputeShaderDispatch,rlLoadShaderBuffer,rlUnloadShaderBuffer,rlUpdateShaderBuffer,rlBindShaderBuffer,rlReadShaderBuffer,rlCopyShaderBuffer,rlGetShaderBufferSize,rlBindImageTexture,rlGetMatrixModelview,rlGetMatrixProjection,rlGetMatrixTransform,rlGetMatrixProjectionStereo,rlGetMatrixViewOffsetStereo,rlSetMatrixProjection,rlSetMatrixModelview,rlSetMatrixProjectionStereo,rlSetMatrixViewOffsetStereo,rlLoadDrawCube,rlLoadDrawQuad,GetCameraForward,GetCameraUp,GetCameraRight,CameraMoveForward,CameraMoveUp,CameraMoveRight,CameraMoveToTarget,CameraYaw,CameraPitch,CameraRoll,GetCameraViewMatrix,GetCameraProjectionMatrix,DrawTextBoxed,DrawTextBoxedSelectable,UniformFloat,UniformVector2,UniformVector3,UniformVector4,UniformColor,UniformInt,UniformTexture

    runGame(canvas, async raylib => {
      free = raylib.free
  addFile = raylib.addFile
  globalize = raylib.globalize
  mod = raylib.mod
  Vector2 = raylib.Vector2
  Vector3 = raylib.Vector3
  Vector4 = raylib.Vector4
  Matrix = raylib.Matrix
  Color = raylib.Color
  Rectangle = raylib.Rectangle
  Image = raylib.Image
  Texture = raylib.Texture
  RenderTexture = raylib.RenderTexture
  NPatchInfo = raylib.NPatchInfo
  GlyphInfo = raylib.GlyphInfo
  Font = raylib.Font
  Camera3D = raylib.Camera3D
  Camera2D = raylib.Camera2D
  Mesh = raylib.Mesh
  Shader = raylib.Shader
  MaterialMap = raylib.MaterialMap
  Material = raylib.Material
  Transform = raylib.Transform
  BoneInfo = raylib.BoneInfo
  Model = raylib.Model
  ModelAnimation = raylib.ModelAnimation
  Ray = raylib.Ray
  RayCollision = raylib.RayCollision
  BoundingBox = raylib.BoundingBox
  Wave = raylib.Wave
  AudioStream = raylib.AudioStream
  Sound = raylib.Sound
  Music = raylib.Music
  VrDeviceInfo = raylib.VrDeviceInfo
  VrStereoConfig = raylib.VrStereoConfig
  FilePathList = raylib.FilePathList
  AutomationEvent = raylib.AutomationEvent
  AutomationEventList = raylib.AutomationEventList
  Texture2D = raylib.Texture2D
  GuiStyleProp = raylib.GuiStyleProp
  GuiTextStyle = raylib.GuiTextStyle
  rlVertexBuffer = raylib.rlVertexBuffer
  rlDrawCall = raylib.rlDrawCall
  rlRenderBatch = raylib.rlRenderBatch
  Quaternion = raylib.Quaternion
  TextureCubemap = raylib.TextureCubemap
  RenderTexture2D = raylib.RenderTexture2D
  Camera = raylib.Camera
  FLAG_VSYNC_HINT = raylib.FLAG_VSYNC_HINT
  FLAG_FULLSCREEN_MODE = raylib.FLAG_FULLSCREEN_MODE
  FLAG_WINDOW_RESIZABLE = raylib.FLAG_WINDOW_RESIZABLE
  FLAG_WINDOW_UNDECORATED = raylib.FLAG_WINDOW_UNDECORATED
  FLAG_WINDOW_HIDDEN = raylib.FLAG_WINDOW_HIDDEN
  FLAG_WINDOW_MINIMIZED = raylib.FLAG_WINDOW_MINIMIZED
  FLAG_WINDOW_MAXIMIZED = raylib.FLAG_WINDOW_MAXIMIZED
  FLAG_WINDOW_UNFOCUSED = raylib.FLAG_WINDOW_UNFOCUSED
  FLAG_WINDOW_TOPMOST = raylib.FLAG_WINDOW_TOPMOST
  FLAG_WINDOW_ALWAYS_RUN = raylib.FLAG_WINDOW_ALWAYS_RUN
  FLAG_WINDOW_TRANSPARENT = raylib.FLAG_WINDOW_TRANSPARENT
  FLAG_WINDOW_HIGHDPI = raylib.FLAG_WINDOW_HIGHDPI
  FLAG_WINDOW_MOUSE_PASSTHROUGH = raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH
  FLAG_BORDERLESS_WINDOWED_MODE = raylib.FLAG_BORDERLESS_WINDOWED_MODE
  FLAG_MSAA_4X_HINT = raylib.FLAG_MSAA_4X_HINT
  FLAG_INTERLACED_HINT = raylib.FLAG_INTERLACED_HINT
  LOG_ALL = raylib.LOG_ALL
  LOG_TRACE = raylib.LOG_TRACE
  LOG_DEBUG = raylib.LOG_DEBUG
  LOG_INFO = raylib.LOG_INFO
  LOG_WARNING = raylib.LOG_WARNING
  LOG_ERROR = raylib.LOG_ERROR
  LOG_FATAL = raylib.LOG_FATAL
  LOG_NONE = raylib.LOG_NONE
  KEY_NULL = raylib.KEY_NULL
  KEY_APOSTROPHE = raylib.KEY_APOSTROPHE
  KEY_COMMA = raylib.KEY_COMMA
  KEY_MINUS = raylib.KEY_MINUS
  KEY_PERIOD = raylib.KEY_PERIOD
  KEY_SLASH = raylib.KEY_SLASH
  KEY_ZERO = raylib.KEY_ZERO
  KEY_ONE = raylib.KEY_ONE
  KEY_TWO = raylib.KEY_TWO
  KEY_THREE = raylib.KEY_THREE
  KEY_FOUR = raylib.KEY_FOUR
  KEY_FIVE = raylib.KEY_FIVE
  KEY_SIX = raylib.KEY_SIX
  KEY_SEVEN = raylib.KEY_SEVEN
  KEY_EIGHT = raylib.KEY_EIGHT
  KEY_NINE = raylib.KEY_NINE
  KEY_SEMICOLON = raylib.KEY_SEMICOLON
  KEY_EQUAL = raylib.KEY_EQUAL
  KEY_A = raylib.KEY_A
  KEY_B = raylib.KEY_B
  KEY_C = raylib.KEY_C
  KEY_D = raylib.KEY_D
  KEY_E = raylib.KEY_E
  KEY_F = raylib.KEY_F
  KEY_G = raylib.KEY_G
  KEY_H = raylib.KEY_H
  KEY_I = raylib.KEY_I
  KEY_J = raylib.KEY_J
  KEY_K = raylib.KEY_K
  KEY_L = raylib.KEY_L
  KEY_M = raylib.KEY_M
  KEY_N = raylib.KEY_N
  KEY_O = raylib.KEY_O
  KEY_P = raylib.KEY_P
  KEY_Q = raylib.KEY_Q
  KEY_R = raylib.KEY_R
  KEY_S = raylib.KEY_S
  KEY_T = raylib.KEY_T
  KEY_U = raylib.KEY_U
  KEY_V = raylib.KEY_V
  KEY_W = raylib.KEY_W
  KEY_X = raylib.KEY_X
  KEY_Y = raylib.KEY_Y
  KEY_Z = raylib.KEY_Z
  KEY_LEFT_BRACKET = raylib.KEY_LEFT_BRACKET
  KEY_BACKSLASH = raylib.KEY_BACKSLASH
  KEY_RIGHT_BRACKET = raylib.KEY_RIGHT_BRACKET
  KEY_GRAVE = raylib.KEY_GRAVE
  KEY_SPACE = raylib.KEY_SPACE
  KEY_ESCAPE = raylib.KEY_ESCAPE
  KEY_ENTER = raylib.KEY_ENTER
  KEY_TAB = raylib.KEY_TAB
  KEY_BACKSPACE = raylib.KEY_BACKSPACE
  KEY_INSERT = raylib.KEY_INSERT
  KEY_DELETE = raylib.KEY_DELETE
  KEY_RIGHT = raylib.KEY_RIGHT
  KEY_LEFT = raylib.KEY_LEFT
  KEY_DOWN = raylib.KEY_DOWN
  KEY_UP = raylib.KEY_UP
  KEY_PAGE_UP = raylib.KEY_PAGE_UP
  KEY_PAGE_DOWN = raylib.KEY_PAGE_DOWN
  KEY_HOME = raylib.KEY_HOME
  KEY_END = raylib.KEY_END
  KEY_CAPS_LOCK = raylib.KEY_CAPS_LOCK
  KEY_SCROLL_LOCK = raylib.KEY_SCROLL_LOCK
  KEY_NUM_LOCK = raylib.KEY_NUM_LOCK
  KEY_PRINT_SCREEN = raylib.KEY_PRINT_SCREEN
  KEY_PAUSE = raylib.KEY_PAUSE
  KEY_F1 = raylib.KEY_F1
  KEY_F2 = raylib.KEY_F2
  KEY_F3 = raylib.KEY_F3
  KEY_F4 = raylib.KEY_F4
  KEY_F5 = raylib.KEY_F5
  KEY_F6 = raylib.KEY_F6
  KEY_F7 = raylib.KEY_F7
  KEY_F8 = raylib.KEY_F8
  KEY_F9 = raylib.KEY_F9
  KEY_F10 = raylib.KEY_F10
  KEY_F11 = raylib.KEY_F11
  KEY_F12 = raylib.KEY_F12
  KEY_LEFT_SHIFT = raylib.KEY_LEFT_SHIFT
  KEY_LEFT_CONTROL = raylib.KEY_LEFT_CONTROL
  KEY_LEFT_ALT = raylib.KEY_LEFT_ALT
  KEY_LEFT_SUPER = raylib.KEY_LEFT_SUPER
  KEY_RIGHT_SHIFT = raylib.KEY_RIGHT_SHIFT
  KEY_RIGHT_CONTROL = raylib.KEY_RIGHT_CONTROL
  KEY_RIGHT_ALT = raylib.KEY_RIGHT_ALT
  KEY_RIGHT_SUPER = raylib.KEY_RIGHT_SUPER
  KEY_KB_MENU = raylib.KEY_KB_MENU
  KEY_KP_0 = raylib.KEY_KP_0
  KEY_KP_1 = raylib.KEY_KP_1
  KEY_KP_2 = raylib.KEY_KP_2
  KEY_KP_3 = raylib.KEY_KP_3
  KEY_KP_4 = raylib.KEY_KP_4
  KEY_KP_5 = raylib.KEY_KP_5
  KEY_KP_6 = raylib.KEY_KP_6
  KEY_KP_7 = raylib.KEY_KP_7
  KEY_KP_8 = raylib.KEY_KP_8
  KEY_KP_9 = raylib.KEY_KP_9
  KEY_KP_DECIMAL = raylib.KEY_KP_DECIMAL
  KEY_KP_DIVIDE = raylib.KEY_KP_DIVIDE
  KEY_KP_MULTIPLY = raylib.KEY_KP_MULTIPLY
  KEY_KP_SUBTRACT = raylib.KEY_KP_SUBTRACT
  KEY_KP_ADD = raylib.KEY_KP_ADD
  KEY_KP_ENTER = raylib.KEY_KP_ENTER
  KEY_KP_EQUAL = raylib.KEY_KP_EQUAL
  KEY_BACK = raylib.KEY_BACK
  KEY_MENU = raylib.KEY_MENU
  KEY_VOLUME_UP = raylib.KEY_VOLUME_UP
  KEY_VOLUME_DOWN = raylib.KEY_VOLUME_DOWN
  MOUSE_BUTTON_LEFT = raylib.MOUSE_BUTTON_LEFT
  MOUSE_BUTTON_RIGHT = raylib.MOUSE_BUTTON_RIGHT
  MOUSE_BUTTON_MIDDLE = raylib.MOUSE_BUTTON_MIDDLE
  MOUSE_BUTTON_SIDE = raylib.MOUSE_BUTTON_SIDE
  MOUSE_BUTTON_EXTRA = raylib.MOUSE_BUTTON_EXTRA
  MOUSE_BUTTON_FORWARD = raylib.MOUSE_BUTTON_FORWARD
  MOUSE_BUTTON_BACK = raylib.MOUSE_BUTTON_BACK
  MOUSE_CURSOR_DEFAULT = raylib.MOUSE_CURSOR_DEFAULT
  MOUSE_CURSOR_ARROW = raylib.MOUSE_CURSOR_ARROW
  MOUSE_CURSOR_IBEAM = raylib.MOUSE_CURSOR_IBEAM
  MOUSE_CURSOR_CROSSHAIR = raylib.MOUSE_CURSOR_CROSSHAIR
  MOUSE_CURSOR_POINTING_HAND = raylib.MOUSE_CURSOR_POINTING_HAND
  MOUSE_CURSOR_RESIZE_EW = raylib.MOUSE_CURSOR_RESIZE_EW
  MOUSE_CURSOR_RESIZE_NS = raylib.MOUSE_CURSOR_RESIZE_NS
  MOUSE_CURSOR_RESIZE_NWSE = raylib.MOUSE_CURSOR_RESIZE_NWSE
  MOUSE_CURSOR_RESIZE_NESW = raylib.MOUSE_CURSOR_RESIZE_NESW
  MOUSE_CURSOR_RESIZE_ALL = raylib.MOUSE_CURSOR_RESIZE_ALL
  MOUSE_CURSOR_NOT_ALLOWED = raylib.MOUSE_CURSOR_NOT_ALLOWED
  GAMEPAD_BUTTON_UNKNOWN = raylib.GAMEPAD_BUTTON_UNKNOWN
  GAMEPAD_BUTTON_LEFT_FACE_UP = raylib.GAMEPAD_BUTTON_LEFT_FACE_UP
  GAMEPAD_BUTTON_LEFT_FACE_RIGHT = raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT
  GAMEPAD_BUTTON_LEFT_FACE_DOWN = raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN
  GAMEPAD_BUTTON_LEFT_FACE_LEFT = raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT
  GAMEPAD_BUTTON_RIGHT_FACE_UP = raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP
  GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT
  GAMEPAD_BUTTON_RIGHT_FACE_DOWN = raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN
  GAMEPAD_BUTTON_RIGHT_FACE_LEFT = raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT
  GAMEPAD_BUTTON_LEFT_TRIGGER_1 = raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1
  GAMEPAD_BUTTON_LEFT_TRIGGER_2 = raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2
  GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1
  GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2
  GAMEPAD_BUTTON_MIDDLE_LEFT = raylib.GAMEPAD_BUTTON_MIDDLE_LEFT
  GAMEPAD_BUTTON_MIDDLE = raylib.GAMEPAD_BUTTON_MIDDLE
  GAMEPAD_BUTTON_MIDDLE_RIGHT = raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT
  GAMEPAD_BUTTON_LEFT_THUMB = raylib.GAMEPAD_BUTTON_LEFT_THUMB
  GAMEPAD_BUTTON_RIGHT_THUMB = raylib.GAMEPAD_BUTTON_RIGHT_THUMB
  GAMEPAD_AXIS_LEFT_X = raylib.GAMEPAD_AXIS_LEFT_X
  GAMEPAD_AXIS_LEFT_Y = raylib.GAMEPAD_AXIS_LEFT_Y
  GAMEPAD_AXIS_RIGHT_X = raylib.GAMEPAD_AXIS_RIGHT_X
  GAMEPAD_AXIS_RIGHT_Y = raylib.GAMEPAD_AXIS_RIGHT_Y
  GAMEPAD_AXIS_LEFT_TRIGGER = raylib.GAMEPAD_AXIS_LEFT_TRIGGER
  GAMEPAD_AXIS_RIGHT_TRIGGER = raylib.GAMEPAD_AXIS_RIGHT_TRIGGER
  MATERIAL_MAP_ALBEDO = raylib.MATERIAL_MAP_ALBEDO
  MATERIAL_MAP_METALNESS = raylib.MATERIAL_MAP_METALNESS
  MATERIAL_MAP_NORMAL = raylib.MATERIAL_MAP_NORMAL
  MATERIAL_MAP_ROUGHNESS = raylib.MATERIAL_MAP_ROUGHNESS
  MATERIAL_MAP_OCCLUSION = raylib.MATERIAL_MAP_OCCLUSION
  MATERIAL_MAP_EMISSION = raylib.MATERIAL_MAP_EMISSION
  MATERIAL_MAP_HEIGHT = raylib.MATERIAL_MAP_HEIGHT
  MATERIAL_MAP_CUBEMAP = raylib.MATERIAL_MAP_CUBEMAP
  MATERIAL_MAP_IRRADIANCE = raylib.MATERIAL_MAP_IRRADIANCE
  MATERIAL_MAP_PREFILTER = raylib.MATERIAL_MAP_PREFILTER
  MATERIAL_MAP_BRDF = raylib.MATERIAL_MAP_BRDF
  SHADER_LOC_VERTEX_POSITION = raylib.SHADER_LOC_VERTEX_POSITION
  SHADER_LOC_VERTEX_TEXCOORD01 = raylib.SHADER_LOC_VERTEX_TEXCOORD01
  SHADER_LOC_VERTEX_TEXCOORD02 = raylib.SHADER_LOC_VERTEX_TEXCOORD02
  SHADER_LOC_VERTEX_NORMAL = raylib.SHADER_LOC_VERTEX_NORMAL
  SHADER_LOC_VERTEX_TANGENT = raylib.SHADER_LOC_VERTEX_TANGENT
  SHADER_LOC_VERTEX_COLOR = raylib.SHADER_LOC_VERTEX_COLOR
  SHADER_LOC_MATRIX_MVP = raylib.SHADER_LOC_MATRIX_MVP
  SHADER_LOC_MATRIX_VIEW = raylib.SHADER_LOC_MATRIX_VIEW
  SHADER_LOC_MATRIX_PROJECTION = raylib.SHADER_LOC_MATRIX_PROJECTION
  SHADER_LOC_MATRIX_MODEL = raylib.SHADER_LOC_MATRIX_MODEL
  SHADER_LOC_MATRIX_NORMAL = raylib.SHADER_LOC_MATRIX_NORMAL
  SHADER_LOC_VECTOR_VIEW = raylib.SHADER_LOC_VECTOR_VIEW
  SHADER_LOC_COLOR_DIFFUSE = raylib.SHADER_LOC_COLOR_DIFFUSE
  SHADER_LOC_COLOR_SPECULAR = raylib.SHADER_LOC_COLOR_SPECULAR
  SHADER_LOC_COLOR_AMBIENT = raylib.SHADER_LOC_COLOR_AMBIENT
  SHADER_LOC_MAP_ALBEDO = raylib.SHADER_LOC_MAP_ALBEDO
  SHADER_LOC_MAP_METALNESS = raylib.SHADER_LOC_MAP_METALNESS
  SHADER_LOC_MAP_NORMAL = raylib.SHADER_LOC_MAP_NORMAL
  SHADER_LOC_MAP_ROUGHNESS = raylib.SHADER_LOC_MAP_ROUGHNESS
  SHADER_LOC_MAP_OCCLUSION = raylib.SHADER_LOC_MAP_OCCLUSION
  SHADER_LOC_MAP_EMISSION = raylib.SHADER_LOC_MAP_EMISSION
  SHADER_LOC_MAP_HEIGHT = raylib.SHADER_LOC_MAP_HEIGHT
  SHADER_LOC_MAP_CUBEMAP = raylib.SHADER_LOC_MAP_CUBEMAP
  SHADER_LOC_MAP_IRRADIANCE = raylib.SHADER_LOC_MAP_IRRADIANCE
  SHADER_LOC_MAP_PREFILTER = raylib.SHADER_LOC_MAP_PREFILTER
  SHADER_LOC_MAP_BRDF = raylib.SHADER_LOC_MAP_BRDF
  SHADER_LOC_VERTEX_BONEIDS = raylib.SHADER_LOC_VERTEX_BONEIDS
  SHADER_LOC_VERTEX_BONEWEIGHTS = raylib.SHADER_LOC_VERTEX_BONEWEIGHTS
  SHADER_LOC_BONE_MATRICES = raylib.SHADER_LOC_BONE_MATRICES
  SHADER_UNIFORM_FLOAT = raylib.SHADER_UNIFORM_FLOAT
  SHADER_UNIFORM_VEC2 = raylib.SHADER_UNIFORM_VEC2
  SHADER_UNIFORM_VEC3 = raylib.SHADER_UNIFORM_VEC3
  SHADER_UNIFORM_VEC4 = raylib.SHADER_UNIFORM_VEC4
  SHADER_UNIFORM_INT = raylib.SHADER_UNIFORM_INT
  SHADER_UNIFORM_IVEC2 = raylib.SHADER_UNIFORM_IVEC2
  SHADER_UNIFORM_IVEC3 = raylib.SHADER_UNIFORM_IVEC3
  SHADER_UNIFORM_IVEC4 = raylib.SHADER_UNIFORM_IVEC4
  SHADER_UNIFORM_SAMPLER2D = raylib.SHADER_UNIFORM_SAMPLER2D
  SHADER_ATTRIB_FLOAT = raylib.SHADER_ATTRIB_FLOAT
  SHADER_ATTRIB_VEC2 = raylib.SHADER_ATTRIB_VEC2
  SHADER_ATTRIB_VEC3 = raylib.SHADER_ATTRIB_VEC3
  SHADER_ATTRIB_VEC4 = raylib.SHADER_ATTRIB_VEC4
  PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE
  PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA
  PIXELFORMAT_UNCOMPRESSED_R5G6B5 = raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5
  PIXELFORMAT_UNCOMPRESSED_R8G8B8 = raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8
  PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1
  PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4
  PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8
  PIXELFORMAT_UNCOMPRESSED_R32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32
  PIXELFORMAT_UNCOMPRESSED_R32G32B32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32
  PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32
  PIXELFORMAT_UNCOMPRESSED_R16 = raylib.PIXELFORMAT_UNCOMPRESSED_R16
  PIXELFORMAT_UNCOMPRESSED_R16G16B16 = raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16
  PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16A16
  PIXELFORMAT_COMPRESSED_DXT1_RGB = raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB
  PIXELFORMAT_COMPRESSED_DXT1_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA
  PIXELFORMAT_COMPRESSED_DXT3_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA
  PIXELFORMAT_COMPRESSED_DXT5_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA
  PIXELFORMAT_COMPRESSED_ETC1_RGB = raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB
  PIXELFORMAT_COMPRESSED_ETC2_RGB = raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB
  PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA
  PIXELFORMAT_COMPRESSED_PVRT_RGB = raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB
  PIXELFORMAT_COMPRESSED_PVRT_RGBA = raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA
  PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA
  PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA
  TEXTURE_FILTER_POINT = raylib.TEXTURE_FILTER_POINT
  TEXTURE_FILTER_BILINEAR = raylib.TEXTURE_FILTER_BILINEAR
  TEXTURE_FILTER_TRILINEAR = raylib.TEXTURE_FILTER_TRILINEAR
  TEXTURE_FILTER_ANISOTROPIC_4X = raylib.TEXTURE_FILTER_ANISOTROPIC_4X
  TEXTURE_FILTER_ANISOTROPIC_8X = raylib.TEXTURE_FILTER_ANISOTROPIC_8X
  TEXTURE_FILTER_ANISOTROPIC_16X = raylib.TEXTURE_FILTER_ANISOTROPIC_16X
  TEXTURE_WRAP_REPEAT = raylib.TEXTURE_WRAP_REPEAT
  TEXTURE_WRAP_CLAMP = raylib.TEXTURE_WRAP_CLAMP
  TEXTURE_WRAP_MIRROR_REPEAT = raylib.TEXTURE_WRAP_MIRROR_REPEAT
  TEXTURE_WRAP_MIRROR_CLAMP = raylib.TEXTURE_WRAP_MIRROR_CLAMP
  CUBEMAP_LAYOUT_AUTO_DETECT = raylib.CUBEMAP_LAYOUT_AUTO_DETECT
  CUBEMAP_LAYOUT_LINE_VERTICAL = raylib.CUBEMAP_LAYOUT_LINE_VERTICAL
  CUBEMAP_LAYOUT_LINE_HORIZONTAL = raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL
  CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR
  CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE
  FONT_DEFAULT = raylib.FONT_DEFAULT
  FONT_BITMAP = raylib.FONT_BITMAP
  FONT_SDF = raylib.FONT_SDF
  BLEND_ALPHA = raylib.BLEND_ALPHA
  BLEND_ADDITIVE = raylib.BLEND_ADDITIVE
  BLEND_MULTIPLIED = raylib.BLEND_MULTIPLIED
  BLEND_ADD_COLORS = raylib.BLEND_ADD_COLORS
  BLEND_SUBTRACT_COLORS = raylib.BLEND_SUBTRACT_COLORS
  BLEND_ALPHA_PREMULTIPLY = raylib.BLEND_ALPHA_PREMULTIPLY
  BLEND_CUSTOM = raylib.BLEND_CUSTOM
  BLEND_CUSTOM_SEPARATE = raylib.BLEND_CUSTOM_SEPARATE
  GESTURE_NONE = raylib.GESTURE_NONE
  GESTURE_TAP = raylib.GESTURE_TAP
  GESTURE_DOUBLETAP = raylib.GESTURE_DOUBLETAP
  GESTURE_HOLD = raylib.GESTURE_HOLD
  GESTURE_DRAG = raylib.GESTURE_DRAG
  GESTURE_SWIPE_RIGHT = raylib.GESTURE_SWIPE_RIGHT
  GESTURE_SWIPE_LEFT = raylib.GESTURE_SWIPE_LEFT
  GESTURE_SWIPE_UP = raylib.GESTURE_SWIPE_UP
  GESTURE_SWIPE_DOWN = raylib.GESTURE_SWIPE_DOWN
  GESTURE_PINCH_IN = raylib.GESTURE_PINCH_IN
  GESTURE_PINCH_OUT = raylib.GESTURE_PINCH_OUT
  CAMERA_CUSTOM = raylib.CAMERA_CUSTOM
  CAMERA_FREE = raylib.CAMERA_FREE
  CAMERA_ORBITAL = raylib.CAMERA_ORBITAL
  CAMERA_FIRST_PERSON = raylib.CAMERA_FIRST_PERSON
  CAMERA_THIRD_PERSON = raylib.CAMERA_THIRD_PERSON
  CAMERA_PERSPECTIVE = raylib.CAMERA_PERSPECTIVE
  CAMERA_ORTHOGRAPHIC = raylib.CAMERA_ORTHOGRAPHIC
  NPATCH_NINE_PATCH = raylib.NPATCH_NINE_PATCH
  NPATCH_THREE_PATCH_VERTICAL = raylib.NPATCH_THREE_PATCH_VERTICAL
  NPATCH_THREE_PATCH_HORIZONTAL = raylib.NPATCH_THREE_PATCH_HORIZONTAL
  STATE_NORMAL = raylib.STATE_NORMAL
  STATE_FOCUSED = raylib.STATE_FOCUSED
  STATE_PRESSED = raylib.STATE_PRESSED
  STATE_DISABLED = raylib.STATE_DISABLED
  TEXT_ALIGN_LEFT = raylib.TEXT_ALIGN_LEFT
  TEXT_ALIGN_CENTER = raylib.TEXT_ALIGN_CENTER
  TEXT_ALIGN_RIGHT = raylib.TEXT_ALIGN_RIGHT
  TEXT_ALIGN_TOP = raylib.TEXT_ALIGN_TOP
  TEXT_ALIGN_MIDDLE = raylib.TEXT_ALIGN_MIDDLE
  TEXT_ALIGN_BOTTOM = raylib.TEXT_ALIGN_BOTTOM
  TEXT_WRAP_NONE = raylib.TEXT_WRAP_NONE
  TEXT_WRAP_CHAR = raylib.TEXT_WRAP_CHAR
  TEXT_WRAP_WORD = raylib.TEXT_WRAP_WORD
  DEFAULT = raylib.DEFAULT
  LABEL = raylib.LABEL
  BUTTON = raylib.BUTTON
  TOGGLE = raylib.TOGGLE
  SLIDER = raylib.SLIDER
  PROGRESSBAR = raylib.PROGRESSBAR
  CHECKBOX = raylib.CHECKBOX
  COMBOBOX = raylib.COMBOBOX
  DROPDOWNBOX = raylib.DROPDOWNBOX
  TEXTBOX = raylib.TEXTBOX
  VALUEBOX = raylib.VALUEBOX
  SPINNER = raylib.SPINNER
  LISTVIEW = raylib.LISTVIEW
  COLORPICKER = raylib.COLORPICKER
  SCROLLBAR = raylib.SCROLLBAR
  STATUSBAR = raylib.STATUSBAR
  BORDER_COLOR_NORMAL = raylib.BORDER_COLOR_NORMAL
  BASE_COLOR_NORMAL = raylib.BASE_COLOR_NORMAL
  TEXT_COLOR_NORMAL = raylib.TEXT_COLOR_NORMAL
  BORDER_COLOR_FOCUSED = raylib.BORDER_COLOR_FOCUSED
  BASE_COLOR_FOCUSED = raylib.BASE_COLOR_FOCUSED
  TEXT_COLOR_FOCUSED = raylib.TEXT_COLOR_FOCUSED
  BORDER_COLOR_PRESSED = raylib.BORDER_COLOR_PRESSED
  BASE_COLOR_PRESSED = raylib.BASE_COLOR_PRESSED
  TEXT_COLOR_PRESSED = raylib.TEXT_COLOR_PRESSED
  BORDER_COLOR_DISABLED = raylib.BORDER_COLOR_DISABLED
  BASE_COLOR_DISABLED = raylib.BASE_COLOR_DISABLED
  TEXT_COLOR_DISABLED = raylib.TEXT_COLOR_DISABLED
  BORDER_WIDTH = raylib.BORDER_WIDTH
  TEXT_PADDING = raylib.TEXT_PADDING
  TEXT_ALIGNMENT = raylib.TEXT_ALIGNMENT
  TEXT_SIZE = raylib.TEXT_SIZE
  TEXT_SPACING = raylib.TEXT_SPACING
  LINE_COLOR = raylib.LINE_COLOR
  BACKGROUND_COLOR = raylib.BACKGROUND_COLOR
  TEXT_LINE_SPACING = raylib.TEXT_LINE_SPACING
  TEXT_ALIGNMENT_VERTICAL = raylib.TEXT_ALIGNMENT_VERTICAL
  TEXT_WRAP_MODE = raylib.TEXT_WRAP_MODE
  GROUP_PADDING = raylib.GROUP_PADDING
  SLIDER_WIDTH = raylib.SLIDER_WIDTH
  SLIDER_PADDING = raylib.SLIDER_PADDING
  PROGRESS_PADDING = raylib.PROGRESS_PADDING
  ARROWS_SIZE = raylib.ARROWS_SIZE
  ARROWS_VISIBLE = raylib.ARROWS_VISIBLE
  SCROLL_SLIDER_PADDING = raylib.SCROLL_SLIDER_PADDING
  SCROLL_SLIDER_SIZE = raylib.SCROLL_SLIDER_SIZE
  SCROLL_PADDING = raylib.SCROLL_PADDING
  SCROLL_SPEED = raylib.SCROLL_SPEED
  CHECK_PADDING = raylib.CHECK_PADDING
  COMBO_BUTTON_WIDTH = raylib.COMBO_BUTTON_WIDTH
  COMBO_BUTTON_SPACING = raylib.COMBO_BUTTON_SPACING
  ARROW_PADDING = raylib.ARROW_PADDING
  DROPDOWN_ITEMS_SPACING = raylib.DROPDOWN_ITEMS_SPACING
  TEXT_READONLY = raylib.TEXT_READONLY
  SPIN_BUTTON_WIDTH = raylib.SPIN_BUTTON_WIDTH
  SPIN_BUTTON_SPACING = raylib.SPIN_BUTTON_SPACING
  LIST_ITEMS_HEIGHT = raylib.LIST_ITEMS_HEIGHT
  LIST_ITEMS_SPACING = raylib.LIST_ITEMS_SPACING
  SCROLLBAR_WIDTH = raylib.SCROLLBAR_WIDTH
  SCROLLBAR_SIDE = raylib.SCROLLBAR_SIDE
  COLOR_SELECTOR_SIZE = raylib.COLOR_SELECTOR_SIZE
  HUEBAR_WIDTH = raylib.HUEBAR_WIDTH
  HUEBAR_PADDING = raylib.HUEBAR_PADDING
  HUEBAR_SELECTOR_HEIGHT = raylib.HUEBAR_SELECTOR_HEIGHT
  HUEBAR_SELECTOR_OVERFLOW = raylib.HUEBAR_SELECTOR_OVERFLOW
  ICON_NONE = raylib.ICON_NONE
  ICON_FOLDER_FILE_OPEN = raylib.ICON_FOLDER_FILE_OPEN
  ICON_FILE_SAVE_CLASSIC = raylib.ICON_FILE_SAVE_CLASSIC
  ICON_FOLDER_OPEN = raylib.ICON_FOLDER_OPEN
  ICON_FOLDER_SAVE = raylib.ICON_FOLDER_SAVE
  ICON_FILE_OPEN = raylib.ICON_FILE_OPEN
  ICON_FILE_SAVE = raylib.ICON_FILE_SAVE
  ICON_FILE_EXPORT = raylib.ICON_FILE_EXPORT
  ICON_FILE_ADD = raylib.ICON_FILE_ADD
  ICON_FILE_DELETE = raylib.ICON_FILE_DELETE
  ICON_FILETYPE_TEXT = raylib.ICON_FILETYPE_TEXT
  ICON_FILETYPE_AUDIO = raylib.ICON_FILETYPE_AUDIO
  ICON_FILETYPE_IMAGE = raylib.ICON_FILETYPE_IMAGE
  ICON_FILETYPE_PLAY = raylib.ICON_FILETYPE_PLAY
  ICON_FILETYPE_VIDEO = raylib.ICON_FILETYPE_VIDEO
  ICON_FILETYPE_INFO = raylib.ICON_FILETYPE_INFO
  ICON_FILE_COPY = raylib.ICON_FILE_COPY
  ICON_FILE_CUT = raylib.ICON_FILE_CUT
  ICON_FILE_PASTE = raylib.ICON_FILE_PASTE
  ICON_CURSOR_HAND = raylib.ICON_CURSOR_HAND
  ICON_CURSOR_POINTER = raylib.ICON_CURSOR_POINTER
  ICON_CURSOR_CLASSIC = raylib.ICON_CURSOR_CLASSIC
  ICON_PENCIL = raylib.ICON_PENCIL
  ICON_PENCIL_BIG = raylib.ICON_PENCIL_BIG
  ICON_BRUSH_CLASSIC = raylib.ICON_BRUSH_CLASSIC
  ICON_BRUSH_PAINTER = raylib.ICON_BRUSH_PAINTER
  ICON_WATER_DROP = raylib.ICON_WATER_DROP
  ICON_COLOR_PICKER = raylib.ICON_COLOR_PICKER
  ICON_RUBBER = raylib.ICON_RUBBER
  ICON_COLOR_BUCKET = raylib.ICON_COLOR_BUCKET
  ICON_TEXT_T = raylib.ICON_TEXT_T
  ICON_TEXT_A = raylib.ICON_TEXT_A
  ICON_SCALE = raylib.ICON_SCALE
  ICON_RESIZE = raylib.ICON_RESIZE
  ICON_FILTER_POINT = raylib.ICON_FILTER_POINT
  ICON_FILTER_BILINEAR = raylib.ICON_FILTER_BILINEAR
  ICON_CROP = raylib.ICON_CROP
  ICON_CROP_ALPHA = raylib.ICON_CROP_ALPHA
  ICON_SQUARE_TOGGLE = raylib.ICON_SQUARE_TOGGLE
  ICON_SYMMETRY = raylib.ICON_SYMMETRY
  ICON_SYMMETRY_HORIZONTAL = raylib.ICON_SYMMETRY_HORIZONTAL
  ICON_SYMMETRY_VERTICAL = raylib.ICON_SYMMETRY_VERTICAL
  ICON_LENS = raylib.ICON_LENS
  ICON_LENS_BIG = raylib.ICON_LENS_BIG
  ICON_EYE_ON = raylib.ICON_EYE_ON
  ICON_EYE_OFF = raylib.ICON_EYE_OFF
  ICON_FILTER_TOP = raylib.ICON_FILTER_TOP
  ICON_FILTER = raylib.ICON_FILTER
  ICON_TARGET_POINT = raylib.ICON_TARGET_POINT
  ICON_TARGET_SMALL = raylib.ICON_TARGET_SMALL
  ICON_TARGET_BIG = raylib.ICON_TARGET_BIG
  ICON_TARGET_MOVE = raylib.ICON_TARGET_MOVE
  ICON_CURSOR_MOVE = raylib.ICON_CURSOR_MOVE
  ICON_CURSOR_SCALE = raylib.ICON_CURSOR_SCALE
  ICON_CURSOR_SCALE_RIGHT = raylib.ICON_CURSOR_SCALE_RIGHT
  ICON_CURSOR_SCALE_LEFT = raylib.ICON_CURSOR_SCALE_LEFT
  ICON_UNDO = raylib.ICON_UNDO
  ICON_REDO = raylib.ICON_REDO
  ICON_REREDO = raylib.ICON_REREDO
  ICON_MUTATE = raylib.ICON_MUTATE
  ICON_ROTATE = raylib.ICON_ROTATE
  ICON_REPEAT = raylib.ICON_REPEAT
  ICON_SHUFFLE = raylib.ICON_SHUFFLE
  ICON_EMPTYBOX = raylib.ICON_EMPTYBOX
  ICON_TARGET = raylib.ICON_TARGET
  ICON_TARGET_SMALL_FILL = raylib.ICON_TARGET_SMALL_FILL
  ICON_TARGET_BIG_FILL = raylib.ICON_TARGET_BIG_FILL
  ICON_TARGET_MOVE_FILL = raylib.ICON_TARGET_MOVE_FILL
  ICON_CURSOR_MOVE_FILL = raylib.ICON_CURSOR_MOVE_FILL
  ICON_CURSOR_SCALE_FILL = raylib.ICON_CURSOR_SCALE_FILL
  ICON_CURSOR_SCALE_RIGHT_FILL = raylib.ICON_CURSOR_SCALE_RIGHT_FILL
  ICON_CURSOR_SCALE_LEFT_FILL = raylib.ICON_CURSOR_SCALE_LEFT_FILL
  ICON_UNDO_FILL = raylib.ICON_UNDO_FILL
  ICON_REDO_FILL = raylib.ICON_REDO_FILL
  ICON_REREDO_FILL = raylib.ICON_REREDO_FILL
  ICON_MUTATE_FILL = raylib.ICON_MUTATE_FILL
  ICON_ROTATE_FILL = raylib.ICON_ROTATE_FILL
  ICON_REPEAT_FILL = raylib.ICON_REPEAT_FILL
  ICON_SHUFFLE_FILL = raylib.ICON_SHUFFLE_FILL
  ICON_EMPTYBOX_SMALL = raylib.ICON_EMPTYBOX_SMALL
  ICON_BOX = raylib.ICON_BOX
  ICON_BOX_TOP = raylib.ICON_BOX_TOP
  ICON_BOX_TOP_RIGHT = raylib.ICON_BOX_TOP_RIGHT
  ICON_BOX_RIGHT = raylib.ICON_BOX_RIGHT
  ICON_BOX_BOTTOM_RIGHT = raylib.ICON_BOX_BOTTOM_RIGHT
  ICON_BOX_BOTTOM = raylib.ICON_BOX_BOTTOM
  ICON_BOX_BOTTOM_LEFT = raylib.ICON_BOX_BOTTOM_LEFT
  ICON_BOX_LEFT = raylib.ICON_BOX_LEFT
  ICON_BOX_TOP_LEFT = raylib.ICON_BOX_TOP_LEFT
  ICON_BOX_CENTER = raylib.ICON_BOX_CENTER
  ICON_BOX_CIRCLE_MASK = raylib.ICON_BOX_CIRCLE_MASK
  ICON_POT = raylib.ICON_POT
  ICON_ALPHA_MULTIPLY = raylib.ICON_ALPHA_MULTIPLY
  ICON_ALPHA_CLEAR = raylib.ICON_ALPHA_CLEAR
  ICON_DITHERING = raylib.ICON_DITHERING
  ICON_MIPMAPS = raylib.ICON_MIPMAPS
  ICON_BOX_GRID = raylib.ICON_BOX_GRID
  ICON_GRID = raylib.ICON_GRID
  ICON_BOX_CORNERS_SMALL = raylib.ICON_BOX_CORNERS_SMALL
  ICON_BOX_CORNERS_BIG = raylib.ICON_BOX_CORNERS_BIG
  ICON_FOUR_BOXES = raylib.ICON_FOUR_BOXES
  ICON_GRID_FILL = raylib.ICON_GRID_FILL
  ICON_BOX_MULTISIZE = raylib.ICON_BOX_MULTISIZE
  ICON_ZOOM_SMALL = raylib.ICON_ZOOM_SMALL
  ICON_ZOOM_MEDIUM = raylib.ICON_ZOOM_MEDIUM
  ICON_ZOOM_BIG = raylib.ICON_ZOOM_BIG
  ICON_ZOOM_ALL = raylib.ICON_ZOOM_ALL
  ICON_ZOOM_CENTER = raylib.ICON_ZOOM_CENTER
  ICON_BOX_DOTS_SMALL = raylib.ICON_BOX_DOTS_SMALL
  ICON_BOX_DOTS_BIG = raylib.ICON_BOX_DOTS_BIG
  ICON_BOX_CONCENTRIC = raylib.ICON_BOX_CONCENTRIC
  ICON_BOX_GRID_BIG = raylib.ICON_BOX_GRID_BIG
  ICON_OK_TICK = raylib.ICON_OK_TICK
  ICON_CROSS = raylib.ICON_CROSS
  ICON_ARROW_LEFT = raylib.ICON_ARROW_LEFT
  ICON_ARROW_RIGHT = raylib.ICON_ARROW_RIGHT
  ICON_ARROW_DOWN = raylib.ICON_ARROW_DOWN
  ICON_ARROW_UP = raylib.ICON_ARROW_UP
  ICON_ARROW_LEFT_FILL = raylib.ICON_ARROW_LEFT_FILL
  ICON_ARROW_RIGHT_FILL = raylib.ICON_ARROW_RIGHT_FILL
  ICON_ARROW_DOWN_FILL = raylib.ICON_ARROW_DOWN_FILL
  ICON_ARROW_UP_FILL = raylib.ICON_ARROW_UP_FILL
  ICON_AUDIO = raylib.ICON_AUDIO
  ICON_FX = raylib.ICON_FX
  ICON_WAVE = raylib.ICON_WAVE
  ICON_WAVE_SINUS = raylib.ICON_WAVE_SINUS
  ICON_WAVE_SQUARE = raylib.ICON_WAVE_SQUARE
  ICON_WAVE_TRIANGULAR = raylib.ICON_WAVE_TRIANGULAR
  ICON_CROSS_SMALL = raylib.ICON_CROSS_SMALL
  ICON_PLAYER_PREVIOUS = raylib.ICON_PLAYER_PREVIOUS
  ICON_PLAYER_PLAY_BACK = raylib.ICON_PLAYER_PLAY_BACK
  ICON_PLAYER_PLAY = raylib.ICON_PLAYER_PLAY
  ICON_PLAYER_PAUSE = raylib.ICON_PLAYER_PAUSE
  ICON_PLAYER_STOP = raylib.ICON_PLAYER_STOP
  ICON_PLAYER_NEXT = raylib.ICON_PLAYER_NEXT
  ICON_PLAYER_RECORD = raylib.ICON_PLAYER_RECORD
  ICON_MAGNET = raylib.ICON_MAGNET
  ICON_LOCK_CLOSE = raylib.ICON_LOCK_CLOSE
  ICON_LOCK_OPEN = raylib.ICON_LOCK_OPEN
  ICON_CLOCK = raylib.ICON_CLOCK
  ICON_TOOLS = raylib.ICON_TOOLS
  ICON_GEAR = raylib.ICON_GEAR
  ICON_GEAR_BIG = raylib.ICON_GEAR_BIG
  ICON_BIN = raylib.ICON_BIN
  ICON_HAND_POINTER = raylib.ICON_HAND_POINTER
  ICON_LASER = raylib.ICON_LASER
  ICON_COIN = raylib.ICON_COIN
  ICON_EXPLOSION = raylib.ICON_EXPLOSION
  ICON_1UP = raylib.ICON_1UP
  ICON_PLAYER = raylib.ICON_PLAYER
  ICON_PLAYER_JUMP = raylib.ICON_PLAYER_JUMP
  ICON_KEY = raylib.ICON_KEY
  ICON_DEMON = raylib.ICON_DEMON
  ICON_TEXT_POPUP = raylib.ICON_TEXT_POPUP
  ICON_GEAR_EX = raylib.ICON_GEAR_EX
  ICON_CRACK = raylib.ICON_CRACK
  ICON_CRACK_POINTS = raylib.ICON_CRACK_POINTS
  ICON_STAR = raylib.ICON_STAR
  ICON_DOOR = raylib.ICON_DOOR
  ICON_EXIT = raylib.ICON_EXIT
  ICON_MODE_2D = raylib.ICON_MODE_2D
  ICON_MODE_3D = raylib.ICON_MODE_3D
  ICON_CUBE = raylib.ICON_CUBE
  ICON_CUBE_FACE_TOP = raylib.ICON_CUBE_FACE_TOP
  ICON_CUBE_FACE_LEFT = raylib.ICON_CUBE_FACE_LEFT
  ICON_CUBE_FACE_FRONT = raylib.ICON_CUBE_FACE_FRONT
  ICON_CUBE_FACE_BOTTOM = raylib.ICON_CUBE_FACE_BOTTOM
  ICON_CUBE_FACE_RIGHT = raylib.ICON_CUBE_FACE_RIGHT
  ICON_CUBE_FACE_BACK = raylib.ICON_CUBE_FACE_BACK
  ICON_CAMERA = raylib.ICON_CAMERA
  ICON_SPECIAL = raylib.ICON_SPECIAL
  ICON_LINK_NET = raylib.ICON_LINK_NET
  ICON_LINK_BOXES = raylib.ICON_LINK_BOXES
  ICON_LINK_MULTI = raylib.ICON_LINK_MULTI
  ICON_LINK = raylib.ICON_LINK
  ICON_LINK_BROKE = raylib.ICON_LINK_BROKE
  ICON_TEXT_NOTES = raylib.ICON_TEXT_NOTES
  ICON_NOTEBOOK = raylib.ICON_NOTEBOOK
  ICON_SUITCASE = raylib.ICON_SUITCASE
  ICON_SUITCASE_ZIP = raylib.ICON_SUITCASE_ZIP
  ICON_MAILBOX = raylib.ICON_MAILBOX
  ICON_MONITOR = raylib.ICON_MONITOR
  ICON_PRINTER = raylib.ICON_PRINTER
  ICON_PHOTO_CAMERA = raylib.ICON_PHOTO_CAMERA
  ICON_PHOTO_CAMERA_FLASH = raylib.ICON_PHOTO_CAMERA_FLASH
  ICON_HOUSE = raylib.ICON_HOUSE
  ICON_HEART = raylib.ICON_HEART
  ICON_CORNER = raylib.ICON_CORNER
  ICON_VERTICAL_BARS = raylib.ICON_VERTICAL_BARS
  ICON_VERTICAL_BARS_FILL = raylib.ICON_VERTICAL_BARS_FILL
  ICON_LIFE_BARS = raylib.ICON_LIFE_BARS
  ICON_INFO = raylib.ICON_INFO
  ICON_CROSSLINE = raylib.ICON_CROSSLINE
  ICON_HELP = raylib.ICON_HELP
  ICON_FILETYPE_ALPHA = raylib.ICON_FILETYPE_ALPHA
  ICON_FILETYPE_HOME = raylib.ICON_FILETYPE_HOME
  ICON_LAYERS_VISIBLE = raylib.ICON_LAYERS_VISIBLE
  ICON_LAYERS = raylib.ICON_LAYERS
  ICON_WINDOW = raylib.ICON_WINDOW
  ICON_HIDPI = raylib.ICON_HIDPI
  ICON_FILETYPE_BINARY = raylib.ICON_FILETYPE_BINARY
  ICON_HEX = raylib.ICON_HEX
  ICON_SHIELD = raylib.ICON_SHIELD
  ICON_FILE_NEW = raylib.ICON_FILE_NEW
  ICON_FOLDER_ADD = raylib.ICON_FOLDER_ADD
  ICON_ALARM = raylib.ICON_ALARM
  ICON_CPU = raylib.ICON_CPU
  ICON_ROM = raylib.ICON_ROM
  ICON_STEP_OVER = raylib.ICON_STEP_OVER
  ICON_STEP_INTO = raylib.ICON_STEP_INTO
  ICON_STEP_OUT = raylib.ICON_STEP_OUT
  ICON_RESTART = raylib.ICON_RESTART
  ICON_BREAKPOINT_ON = raylib.ICON_BREAKPOINT_ON
  ICON_BREAKPOINT_OFF = raylib.ICON_BREAKPOINT_OFF
  ICON_BURGER_MENU = raylib.ICON_BURGER_MENU
  ICON_CASE_SENSITIVE = raylib.ICON_CASE_SENSITIVE
  ICON_REG_EXP = raylib.ICON_REG_EXP
  ICON_FOLDER = raylib.ICON_FOLDER
  ICON_FILE = raylib.ICON_FILE
  ICON_SAND_TIMER = raylib.ICON_SAND_TIMER
  ICON_220 = raylib.ICON_220
  ICON_221 = raylib.ICON_221
  ICON_222 = raylib.ICON_222
  ICON_223 = raylib.ICON_223
  ICON_224 = raylib.ICON_224
  ICON_225 = raylib.ICON_225
  ICON_226 = raylib.ICON_226
  ICON_227 = raylib.ICON_227
  ICON_228 = raylib.ICON_228
  ICON_229 = raylib.ICON_229
  ICON_230 = raylib.ICON_230
  ICON_231 = raylib.ICON_231
  ICON_232 = raylib.ICON_232
  ICON_233 = raylib.ICON_233
  ICON_234 = raylib.ICON_234
  ICON_235 = raylib.ICON_235
  ICON_236 = raylib.ICON_236
  ICON_237 = raylib.ICON_237
  ICON_238 = raylib.ICON_238
  ICON_239 = raylib.ICON_239
  ICON_240 = raylib.ICON_240
  ICON_241 = raylib.ICON_241
  ICON_242 = raylib.ICON_242
  ICON_243 = raylib.ICON_243
  ICON_244 = raylib.ICON_244
  ICON_245 = raylib.ICON_245
  ICON_246 = raylib.ICON_246
  ICON_247 = raylib.ICON_247
  ICON_248 = raylib.ICON_248
  ICON_249 = raylib.ICON_249
  ICON_250 = raylib.ICON_250
  ICON_251 = raylib.ICON_251
  ICON_252 = raylib.ICON_252
  ICON_253 = raylib.ICON_253
  ICON_254 = raylib.ICON_254
  ICON_255 = raylib.ICON_255
  RL_OPENGL_11 = raylib.RL_OPENGL_11
  RL_OPENGL_21 = raylib.RL_OPENGL_21
  RL_OPENGL_33 = raylib.RL_OPENGL_33
  RL_OPENGL_43 = raylib.RL_OPENGL_43
  RL_OPENGL_ES_20 = raylib.RL_OPENGL_ES_20
  RL_OPENGL_ES_30 = raylib.RL_OPENGL_ES_30
  RL_LOG_ALL = raylib.RL_LOG_ALL
  RL_LOG_TRACE = raylib.RL_LOG_TRACE
  RL_LOG_DEBUG = raylib.RL_LOG_DEBUG
  RL_LOG_INFO = raylib.RL_LOG_INFO
  RL_LOG_WARNING = raylib.RL_LOG_WARNING
  RL_LOG_ERROR = raylib.RL_LOG_ERROR
  RL_LOG_FATAL = raylib.RL_LOG_FATAL
  RL_LOG_NONE = raylib.RL_LOG_NONE
  RL_PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = raylib.RL_PIXELFORMAT_UNCOMPRESSED_GRAYSCALE
  RL_PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = raylib.RL_PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA
  RL_PIXELFORMAT_UNCOMPRESSED_R5G6B5 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R5G6B5
  RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8
  RL_PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R5G5B5A1
  RL_PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R4G4B4A4
  RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8A8
  RL_PIXELFORMAT_UNCOMPRESSED_R32 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32
  RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32
  RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32A32
  RL_PIXELFORMAT_UNCOMPRESSED_R16 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16
  RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16
  RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16A16
  RL_PIXELFORMAT_COMPRESSED_DXT1_RGB = raylib.RL_PIXELFORMAT_COMPRESSED_DXT1_RGB
  RL_PIXELFORMAT_COMPRESSED_DXT1_RGBA = raylib.RL_PIXELFORMAT_COMPRESSED_DXT1_RGBA
  RL_PIXELFORMAT_COMPRESSED_DXT3_RGBA = raylib.RL_PIXELFORMAT_COMPRESSED_DXT3_RGBA
  RL_PIXELFORMAT_COMPRESSED_DXT5_RGBA = raylib.RL_PIXELFORMAT_COMPRESSED_DXT5_RGBA
  RL_PIXELFORMAT_COMPRESSED_ETC1_RGB = raylib.RL_PIXELFORMAT_COMPRESSED_ETC1_RGB
  RL_PIXELFORMAT_COMPRESSED_ETC2_RGB = raylib.RL_PIXELFORMAT_COMPRESSED_ETC2_RGB
  RL_PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = raylib.RL_PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA
  RL_PIXELFORMAT_COMPRESSED_PVRT_RGB = raylib.RL_PIXELFORMAT_COMPRESSED_PVRT_RGB
  RL_PIXELFORMAT_COMPRESSED_PVRT_RGBA = raylib.RL_PIXELFORMAT_COMPRESSED_PVRT_RGBA
  RL_PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = raylib.RL_PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA
  RL_PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = raylib.RL_PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA
  RL_TEXTURE_FILTER_POINT = raylib.RL_TEXTURE_FILTER_POINT
  RL_TEXTURE_FILTER_BILINEAR = raylib.RL_TEXTURE_FILTER_BILINEAR
  RL_TEXTURE_FILTER_TRILINEAR = raylib.RL_TEXTURE_FILTER_TRILINEAR
  RL_TEXTURE_FILTER_ANISOTROPIC_4X = raylib.RL_TEXTURE_FILTER_ANISOTROPIC_4X
  RL_TEXTURE_FILTER_ANISOTROPIC_8X = raylib.RL_TEXTURE_FILTER_ANISOTROPIC_8X
  RL_TEXTURE_FILTER_ANISOTROPIC_16X = raylib.RL_TEXTURE_FILTER_ANISOTROPIC_16X
  RL_BLEND_ALPHA = raylib.RL_BLEND_ALPHA
  RL_BLEND_ADDITIVE = raylib.RL_BLEND_ADDITIVE
  RL_BLEND_MULTIPLIED = raylib.RL_BLEND_MULTIPLIED
  RL_BLEND_ADD_COLORS = raylib.RL_BLEND_ADD_COLORS
  RL_BLEND_SUBTRACT_COLORS = raylib.RL_BLEND_SUBTRACT_COLORS
  RL_BLEND_ALPHA_PREMULTIPLY = raylib.RL_BLEND_ALPHA_PREMULTIPLY
  RL_BLEND_CUSTOM = raylib.RL_BLEND_CUSTOM
  RL_BLEND_CUSTOM_SEPARATE = raylib.RL_BLEND_CUSTOM_SEPARATE
  RL_SHADER_LOC_VERTEX_POSITION = raylib.RL_SHADER_LOC_VERTEX_POSITION
  RL_SHADER_LOC_VERTEX_TEXCOORD01 = raylib.RL_SHADER_LOC_VERTEX_TEXCOORD01
  RL_SHADER_LOC_VERTEX_TEXCOORD02 = raylib.RL_SHADER_LOC_VERTEX_TEXCOORD02
  RL_SHADER_LOC_VERTEX_NORMAL = raylib.RL_SHADER_LOC_VERTEX_NORMAL
  RL_SHADER_LOC_VERTEX_TANGENT = raylib.RL_SHADER_LOC_VERTEX_TANGENT
  RL_SHADER_LOC_VERTEX_COLOR = raylib.RL_SHADER_LOC_VERTEX_COLOR
  RL_SHADER_LOC_MATRIX_MVP = raylib.RL_SHADER_LOC_MATRIX_MVP
  RL_SHADER_LOC_MATRIX_VIEW = raylib.RL_SHADER_LOC_MATRIX_VIEW
  RL_SHADER_LOC_MATRIX_PROJECTION = raylib.RL_SHADER_LOC_MATRIX_PROJECTION
  RL_SHADER_LOC_MATRIX_MODEL = raylib.RL_SHADER_LOC_MATRIX_MODEL
  RL_SHADER_LOC_MATRIX_NORMAL = raylib.RL_SHADER_LOC_MATRIX_NORMAL
  RL_SHADER_LOC_VECTOR_VIEW = raylib.RL_SHADER_LOC_VECTOR_VIEW
  RL_SHADER_LOC_COLOR_DIFFUSE = raylib.RL_SHADER_LOC_COLOR_DIFFUSE
  RL_SHADER_LOC_COLOR_SPECULAR = raylib.RL_SHADER_LOC_COLOR_SPECULAR
  RL_SHADER_LOC_COLOR_AMBIENT = raylib.RL_SHADER_LOC_COLOR_AMBIENT
  RL_SHADER_LOC_MAP_ALBEDO = raylib.RL_SHADER_LOC_MAP_ALBEDO
  RL_SHADER_LOC_MAP_METALNESS = raylib.RL_SHADER_LOC_MAP_METALNESS
  RL_SHADER_LOC_MAP_NORMAL = raylib.RL_SHADER_LOC_MAP_NORMAL
  RL_SHADER_LOC_MAP_ROUGHNESS = raylib.RL_SHADER_LOC_MAP_ROUGHNESS
  RL_SHADER_LOC_MAP_OCCLUSION = raylib.RL_SHADER_LOC_MAP_OCCLUSION
  RL_SHADER_LOC_MAP_EMISSION = raylib.RL_SHADER_LOC_MAP_EMISSION
  RL_SHADER_LOC_MAP_HEIGHT = raylib.RL_SHADER_LOC_MAP_HEIGHT
  RL_SHADER_LOC_MAP_CUBEMAP = raylib.RL_SHADER_LOC_MAP_CUBEMAP
  RL_SHADER_LOC_MAP_IRRADIANCE = raylib.RL_SHADER_LOC_MAP_IRRADIANCE
  RL_SHADER_LOC_MAP_PREFILTER = raylib.RL_SHADER_LOC_MAP_PREFILTER
  RL_SHADER_LOC_MAP_BRDF = raylib.RL_SHADER_LOC_MAP_BRDF
  RL_SHADER_UNIFORM_FLOAT = raylib.RL_SHADER_UNIFORM_FLOAT
  RL_SHADER_UNIFORM_VEC2 = raylib.RL_SHADER_UNIFORM_VEC2
  RL_SHADER_UNIFORM_VEC3 = raylib.RL_SHADER_UNIFORM_VEC3
  RL_SHADER_UNIFORM_VEC4 = raylib.RL_SHADER_UNIFORM_VEC4
  RL_SHADER_UNIFORM_INT = raylib.RL_SHADER_UNIFORM_INT
  RL_SHADER_UNIFORM_IVEC2 = raylib.RL_SHADER_UNIFORM_IVEC2
  RL_SHADER_UNIFORM_IVEC3 = raylib.RL_SHADER_UNIFORM_IVEC3
  RL_SHADER_UNIFORM_IVEC4 = raylib.RL_SHADER_UNIFORM_IVEC4
  RL_SHADER_UNIFORM_UINT = raylib.RL_SHADER_UNIFORM_UINT
  RL_SHADER_UNIFORM_UIVEC2 = raylib.RL_SHADER_UNIFORM_UIVEC2
  RL_SHADER_UNIFORM_UIVEC3 = raylib.RL_SHADER_UNIFORM_UIVEC3
  RL_SHADER_UNIFORM_UIVEC4 = raylib.RL_SHADER_UNIFORM_UIVEC4
  RL_SHADER_UNIFORM_SAMPLER2D = raylib.RL_SHADER_UNIFORM_SAMPLER2D
  RL_SHADER_ATTRIB_FLOAT = raylib.RL_SHADER_ATTRIB_FLOAT
  RL_SHADER_ATTRIB_VEC2 = raylib.RL_SHADER_ATTRIB_VEC2
  RL_SHADER_ATTRIB_VEC3 = raylib.RL_SHADER_ATTRIB_VEC3
  RL_SHADER_ATTRIB_VEC4 = raylib.RL_SHADER_ATTRIB_VEC4
  RL_ATTACHMENT_COLOR_CHANNEL0 = raylib.RL_ATTACHMENT_COLOR_CHANNEL0
  RL_ATTACHMENT_COLOR_CHANNEL1 = raylib.RL_ATTACHMENT_COLOR_CHANNEL1
  RL_ATTACHMENT_COLOR_CHANNEL2 = raylib.RL_ATTACHMENT_COLOR_CHANNEL2
  RL_ATTACHMENT_COLOR_CHANNEL3 = raylib.RL_ATTACHMENT_COLOR_CHANNEL3
  RL_ATTACHMENT_COLOR_CHANNEL4 = raylib.RL_ATTACHMENT_COLOR_CHANNEL4
  RL_ATTACHMENT_COLOR_CHANNEL5 = raylib.RL_ATTACHMENT_COLOR_CHANNEL5
  RL_ATTACHMENT_COLOR_CHANNEL6 = raylib.RL_ATTACHMENT_COLOR_CHANNEL6
  RL_ATTACHMENT_COLOR_CHANNEL7 = raylib.RL_ATTACHMENT_COLOR_CHANNEL7
  RL_ATTACHMENT_DEPTH = raylib.RL_ATTACHMENT_DEPTH
  RL_ATTACHMENT_STENCIL = raylib.RL_ATTACHMENT_STENCIL
  RL_ATTACHMENT_CUBEMAP_POSITIVE_X = raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_X
  RL_ATTACHMENT_CUBEMAP_NEGATIVE_X = raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_X
  RL_ATTACHMENT_CUBEMAP_POSITIVE_Y = raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_Y
  RL_ATTACHMENT_CUBEMAP_NEGATIVE_Y = raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_Y
  RL_ATTACHMENT_CUBEMAP_POSITIVE_Z = raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_Z
  RL_ATTACHMENT_CUBEMAP_NEGATIVE_Z = raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_Z
  RL_ATTACHMENT_TEXTURE2D = raylib.RL_ATTACHMENT_TEXTURE2D
  RL_ATTACHMENT_RENDERBUFFER = raylib.RL_ATTACHMENT_RENDERBUFFER
  RL_CULL_FACE_FRONT = raylib.RL_CULL_FACE_FRONT
  RL_CULL_FACE_BACK = raylib.RL_CULL_FACE_BACK
  LIGHTGRAY = raylib.LIGHTGRAY
  GRAY = raylib.GRAY
  DARKGRAY = raylib.DARKGRAY
  YELLOW = raylib.YELLOW
  GOLD = raylib.GOLD
  ORANGE = raylib.ORANGE
  PINK = raylib.PINK
  RED = raylib.RED
  MAROON = raylib.MAROON
  GREEN = raylib.GREEN
  LIME = raylib.LIME
  DARKGREEN = raylib.DARKGREEN
  SKYBLUE = raylib.SKYBLUE
  BLUE = raylib.BLUE
  DARKBLUE = raylib.DARKBLUE
  PURPLE = raylib.PURPLE
  VIOLET = raylib.VIOLET
  DARKPURPLE = raylib.DARKPURPLE
  BEIGE = raylib.BEIGE
  BROWN = raylib.BROWN
  DARKBROWN = raylib.DARKBROWN
  WHITE = raylib.WHITE
  BLACK = raylib.BLACK
  BLANK = raylib.BLANK
  MAGENTA = raylib.MAGENTA
  RAYWHITE = raylib.RAYWHITE
  InitWindow = raylib.InitWindow
  CloseWindow = raylib.CloseWindow
  WindowShouldClose = raylib.WindowShouldClose
  IsWindowReady = raylib.IsWindowReady
  IsWindowFullscreen = raylib.IsWindowFullscreen
  IsWindowHidden = raylib.IsWindowHidden
  IsWindowMinimized = raylib.IsWindowMinimized
  IsWindowMaximized = raylib.IsWindowMaximized
  IsWindowFocused = raylib.IsWindowFocused
  IsWindowResized = raylib.IsWindowResized
  IsWindowState = raylib.IsWindowState
  SetWindowState = raylib.SetWindowState
  ClearWindowState = raylib.ClearWindowState
  ToggleFullscreen = raylib.ToggleFullscreen
  ToggleBorderlessWindowed = raylib.ToggleBorderlessWindowed
  MaximizeWindow = raylib.MaximizeWindow
  MinimizeWindow = raylib.MinimizeWindow
  RestoreWindow = raylib.RestoreWindow
  SetWindowIcon = raylib.SetWindowIcon
  SetWindowIcons = raylib.SetWindowIcons
  SetWindowTitle = raylib.SetWindowTitle
  SetWindowPosition = raylib.SetWindowPosition
  SetWindowMonitor = raylib.SetWindowMonitor
  SetWindowMinSize = raylib.SetWindowMinSize
  SetWindowMaxSize = raylib.SetWindowMaxSize
  SetWindowSize = raylib.SetWindowSize
  SetWindowOpacity = raylib.SetWindowOpacity
  SetWindowFocused = raylib.SetWindowFocused
  GetWindowHandle = raylib.GetWindowHandle
  GetScreenWidth = raylib.GetScreenWidth
  GetScreenHeight = raylib.GetScreenHeight
  GetRenderWidth = raylib.GetRenderWidth
  GetRenderHeight = raylib.GetRenderHeight
  GetMonitorCount = raylib.GetMonitorCount
  GetCurrentMonitor = raylib.GetCurrentMonitor
  GetMonitorPosition = raylib.GetMonitorPosition
  GetMonitorWidth = raylib.GetMonitorWidth
  GetMonitorHeight = raylib.GetMonitorHeight
  GetMonitorPhysicalWidth = raylib.GetMonitorPhysicalWidth
  GetMonitorPhysicalHeight = raylib.GetMonitorPhysicalHeight
  GetMonitorRefreshRate = raylib.GetMonitorRefreshRate
  GetWindowPosition = raylib.GetWindowPosition
  GetWindowScaleDPI = raylib.GetWindowScaleDPI
  GetMonitorName = raylib.GetMonitorName
  SetClipboardText = raylib.SetClipboardText
  GetClipboardText = raylib.GetClipboardText
  EnableEventWaiting = raylib.EnableEventWaiting
  DisableEventWaiting = raylib.DisableEventWaiting
  ShowCursor = raylib.ShowCursor
  HideCursor = raylib.HideCursor
  IsCursorHidden = raylib.IsCursorHidden
  EnableCursor = raylib.EnableCursor
  DisableCursor = raylib.DisableCursor
  IsCursorOnScreen = raylib.IsCursorOnScreen
  ClearBackground = raylib.ClearBackground
  BeginDrawing = raylib.BeginDrawing
  EndDrawing = raylib.EndDrawing
  BeginMode2D = raylib.BeginMode2D
  EndMode2D = raylib.EndMode2D
  BeginMode3D = raylib.BeginMode3D
  EndMode3D = raylib.EndMode3D
  BeginTextureMode = raylib.BeginTextureMode
  EndTextureMode = raylib.EndTextureMode
  BeginShaderMode = raylib.BeginShaderMode
  EndShaderMode = raylib.EndShaderMode
  BeginBlendMode = raylib.BeginBlendMode
  EndBlendMode = raylib.EndBlendMode
  BeginScissorMode = raylib.BeginScissorMode
  EndScissorMode = raylib.EndScissorMode
  BeginVrStereoMode = raylib.BeginVrStereoMode
  EndVrStereoMode = raylib.EndVrStereoMode
  LoadVrStereoConfig = raylib.LoadVrStereoConfig
  UnloadVrStereoConfig = raylib.UnloadVrStereoConfig
  LoadShader = raylib.LoadShader
  LoadShaderFromMemory = raylib.LoadShaderFromMemory
  IsShaderValid = raylib.IsShaderValid
  GetShaderLocation = raylib.GetShaderLocation
  GetShaderLocationAttrib = raylib.GetShaderLocationAttrib
  SetShaderValue = raylib.SetShaderValue
  SetShaderValueV = raylib.SetShaderValueV
  SetShaderValueMatrix = raylib.SetShaderValueMatrix
  SetShaderValueTexture = raylib.SetShaderValueTexture
  UnloadShader = raylib.UnloadShader
  GetScreenToWorldRay = raylib.GetScreenToWorldRay
  GetScreenToWorldRayEx = raylib.GetScreenToWorldRayEx
  GetWorldToScreen = raylib.GetWorldToScreen
  GetWorldToScreenEx = raylib.GetWorldToScreenEx
  GetWorldToScreen2D = raylib.GetWorldToScreen2D
  GetScreenToWorld2D = raylib.GetScreenToWorld2D
  GetCameraMatrix = raylib.GetCameraMatrix
  GetCameraMatrix2D = raylib.GetCameraMatrix2D
  SetTargetFPS = raylib.SetTargetFPS
  GetFrameTime = raylib.GetFrameTime
  GetTime = raylib.GetTime
  GetFPS = raylib.GetFPS
  SwapScreenBuffer = raylib.SwapScreenBuffer
  PollInputEvents = raylib.PollInputEvents
  WaitTime = raylib.WaitTime
  SetRandomSeed = raylib.SetRandomSeed
  GetRandomValue = raylib.GetRandomValue
  LoadRandomSequence = raylib.LoadRandomSequence
  UnloadRandomSequence = raylib.UnloadRandomSequence
  TakeScreenshot = raylib.TakeScreenshot
  SetConfigFlags = raylib.SetConfigFlags
  OpenURL = raylib.OpenURL
  TraceLog = raylib.TraceLog
  SetTraceLogLevel = raylib.SetTraceLogLevel
  MemAlloc = raylib.MemAlloc
  MemRealloc = raylib.MemRealloc
  MemFree = raylib.MemFree
  SetTraceLogCallback = raylib.SetTraceLogCallback
  SetLoadFileDataCallback = raylib.SetLoadFileDataCallback
  SetSaveFileDataCallback = raylib.SetSaveFileDataCallback
  SetLoadFileTextCallback = raylib.SetLoadFileTextCallback
  SetSaveFileTextCallback = raylib.SetSaveFileTextCallback
  LoadFileData = raylib.LoadFileData
  UnloadFileData = raylib.UnloadFileData
  SaveFileData = raylib.SaveFileData
  ExportDataAsCode = raylib.ExportDataAsCode
  LoadFileText = raylib.LoadFileText
  UnloadFileText = raylib.UnloadFileText
  SaveFileText = raylib.SaveFileText
  FileExists = raylib.FileExists
  DirectoryExists = raylib.DirectoryExists
  IsFileExtension = raylib.IsFileExtension
  GetFileLength = raylib.GetFileLength
  GetFileExtension = raylib.GetFileExtension
  GetFileName = raylib.GetFileName
  GetFileNameWithoutExt = raylib.GetFileNameWithoutExt
  GetDirectoryPath = raylib.GetDirectoryPath
  GetPrevDirectoryPath = raylib.GetPrevDirectoryPath
  GetWorkingDirectory = raylib.GetWorkingDirectory
  GetApplicationDirectory = raylib.GetApplicationDirectory
  MakeDirectory = raylib.MakeDirectory
  ChangeDirectory = raylib.ChangeDirectory
  IsPathFile = raylib.IsPathFile
  IsFileNameValid = raylib.IsFileNameValid
  LoadDirectoryFiles = raylib.LoadDirectoryFiles
  LoadDirectoryFilesEx = raylib.LoadDirectoryFilesEx
  UnloadDirectoryFiles = raylib.UnloadDirectoryFiles
  IsFileDropped = raylib.IsFileDropped
  LoadDroppedFiles = raylib.LoadDroppedFiles
  UnloadDroppedFiles = raylib.UnloadDroppedFiles
  GetFileModTime = raylib.GetFileModTime
  CompressData = raylib.CompressData
  DecompressData = raylib.DecompressData
  EncodeDataBase64 = raylib.EncodeDataBase64
  DecodeDataBase64 = raylib.DecodeDataBase64
  ComputeCRC32 = raylib.ComputeCRC32
  ComputeMD5 = raylib.ComputeMD5
  ComputeSHA1 = raylib.ComputeSHA1
  LoadAutomationEventList = raylib.LoadAutomationEventList
  UnloadAutomationEventList = raylib.UnloadAutomationEventList
  ExportAutomationEventList = raylib.ExportAutomationEventList
  SetAutomationEventList = raylib.SetAutomationEventList
  SetAutomationEventBaseFrame = raylib.SetAutomationEventBaseFrame
  StartAutomationEventRecording = raylib.StartAutomationEventRecording
  StopAutomationEventRecording = raylib.StopAutomationEventRecording
  PlayAutomationEvent = raylib.PlayAutomationEvent
  IsKeyPressed = raylib.IsKeyPressed
  IsKeyPressedRepeat = raylib.IsKeyPressedRepeat
  IsKeyDown = raylib.IsKeyDown
  IsKeyReleased = raylib.IsKeyReleased
  IsKeyUp = raylib.IsKeyUp
  GetKeyPressed = raylib.GetKeyPressed
  GetCharPressed = raylib.GetCharPressed
  SetExitKey = raylib.SetExitKey
  IsGamepadAvailable = raylib.IsGamepadAvailable
  GetGamepadName = raylib.GetGamepadName
  IsGamepadButtonPressed = raylib.IsGamepadButtonPressed
  IsGamepadButtonDown = raylib.IsGamepadButtonDown
  IsGamepadButtonReleased = raylib.IsGamepadButtonReleased
  IsGamepadButtonUp = raylib.IsGamepadButtonUp
  GetGamepadButtonPressed = raylib.GetGamepadButtonPressed
  GetGamepadAxisCount = raylib.GetGamepadAxisCount
  GetGamepadAxisMovement = raylib.GetGamepadAxisMovement
  SetGamepadMappings = raylib.SetGamepadMappings
  SetGamepadVibration = raylib.SetGamepadVibration
  IsMouseButtonPressed = raylib.IsMouseButtonPressed
  IsMouseButtonDown = raylib.IsMouseButtonDown
  IsMouseButtonReleased = raylib.IsMouseButtonReleased
  IsMouseButtonUp = raylib.IsMouseButtonUp
  GetMouseX = raylib.GetMouseX
  GetMouseY = raylib.GetMouseY
  GetMousePosition = raylib.GetMousePosition
  GetMouseDelta = raylib.GetMouseDelta
  SetMousePosition = raylib.SetMousePosition
  SetMouseOffset = raylib.SetMouseOffset
  SetMouseScale = raylib.SetMouseScale
  GetMouseWheelMove = raylib.GetMouseWheelMove
  GetMouseWheelMoveV = raylib.GetMouseWheelMoveV
  SetMouseCursor = raylib.SetMouseCursor
  GetTouchX = raylib.GetTouchX
  GetTouchY = raylib.GetTouchY
  GetTouchPosition = raylib.GetTouchPosition
  GetTouchPointId = raylib.GetTouchPointId
  GetTouchPointCount = raylib.GetTouchPointCount
  SetGesturesEnabled = raylib.SetGesturesEnabled
  IsGestureDetected = raylib.IsGestureDetected
  GetGestureDetected = raylib.GetGestureDetected
  GetGestureHoldDuration = raylib.GetGestureHoldDuration
  GetGestureDragVector = raylib.GetGestureDragVector
  GetGestureDragAngle = raylib.GetGestureDragAngle
  GetGesturePinchVector = raylib.GetGesturePinchVector
  GetGesturePinchAngle = raylib.GetGesturePinchAngle
  UpdateCamera = raylib.UpdateCamera
  UpdateCameraPro = raylib.UpdateCameraPro
  SetShapesTexture = raylib.SetShapesTexture
  GetShapesTexture = raylib.GetShapesTexture
  GetShapesTextureRectangle = raylib.GetShapesTextureRectangle
  DrawPixel = raylib.DrawPixel
  DrawPixelV = raylib.DrawPixelV
  DrawLine = raylib.DrawLine
  DrawLineV = raylib.DrawLineV
  DrawLineEx = raylib.DrawLineEx
  DrawLineStrip = raylib.DrawLineStrip
  DrawLineBezier = raylib.DrawLineBezier
  DrawCircle = raylib.DrawCircle
  DrawCircleSector = raylib.DrawCircleSector
  DrawCircleSectorLines = raylib.DrawCircleSectorLines
  DrawCircleGradient = raylib.DrawCircleGradient
  DrawCircleV = raylib.DrawCircleV
  DrawCircleLines = raylib.DrawCircleLines
  DrawCircleLinesV = raylib.DrawCircleLinesV
  DrawEllipse = raylib.DrawEllipse
  DrawEllipseLines = raylib.DrawEllipseLines
  DrawRing = raylib.DrawRing
  DrawRingLines = raylib.DrawRingLines
  DrawRectangle = raylib.DrawRectangle
  DrawRectangleV = raylib.DrawRectangleV
  DrawRectangleRec = raylib.DrawRectangleRec
  DrawRectanglePro = raylib.DrawRectanglePro
  DrawRectangleGradientV = raylib.DrawRectangleGradientV
  DrawRectangleGradientH = raylib.DrawRectangleGradientH
  DrawRectangleGradientEx = raylib.DrawRectangleGradientEx
  DrawRectangleLines = raylib.DrawRectangleLines
  DrawRectangleLinesEx = raylib.DrawRectangleLinesEx
  DrawRectangleRounded = raylib.DrawRectangleRounded
  DrawRectangleRoundedLines = raylib.DrawRectangleRoundedLines
  DrawRectangleRoundedLinesEx = raylib.DrawRectangleRoundedLinesEx
  DrawTriangle = raylib.DrawTriangle
  DrawTriangleLines = raylib.DrawTriangleLines
  DrawTriangleFan = raylib.DrawTriangleFan
  DrawTriangleStrip = raylib.DrawTriangleStrip
  DrawPoly = raylib.DrawPoly
  DrawPolyLines = raylib.DrawPolyLines
  DrawPolyLinesEx = raylib.DrawPolyLinesEx
  DrawSplineLinear = raylib.DrawSplineLinear
  DrawSplineBasis = raylib.DrawSplineBasis
  DrawSplineCatmullRom = raylib.DrawSplineCatmullRom
  DrawSplineBezierQuadratic = raylib.DrawSplineBezierQuadratic
  DrawSplineBezierCubic = raylib.DrawSplineBezierCubic
  DrawSplineSegmentLinear = raylib.DrawSplineSegmentLinear
  DrawSplineSegmentBasis = raylib.DrawSplineSegmentBasis
  DrawSplineSegmentCatmullRom = raylib.DrawSplineSegmentCatmullRom
  DrawSplineSegmentBezierQuadratic = raylib.DrawSplineSegmentBezierQuadratic
  DrawSplineSegmentBezierCubic = raylib.DrawSplineSegmentBezierCubic
  GetSplinePointLinear = raylib.GetSplinePointLinear
  GetSplinePointBasis = raylib.GetSplinePointBasis
  GetSplinePointCatmullRom = raylib.GetSplinePointCatmullRom
  GetSplinePointBezierQuad = raylib.GetSplinePointBezierQuad
  GetSplinePointBezierCubic = raylib.GetSplinePointBezierCubic
  CheckCollisionRecs = raylib.CheckCollisionRecs
  CheckCollisionCircles = raylib.CheckCollisionCircles
  CheckCollisionCircleRec = raylib.CheckCollisionCircleRec
  CheckCollisionCircleLine = raylib.CheckCollisionCircleLine
  CheckCollisionPointRec = raylib.CheckCollisionPointRec
  CheckCollisionPointCircle = raylib.CheckCollisionPointCircle
  CheckCollisionPointTriangle = raylib.CheckCollisionPointTriangle
  CheckCollisionPointLine = raylib.CheckCollisionPointLine
  CheckCollisionPointPoly = raylib.CheckCollisionPointPoly
  CheckCollisionLines = raylib.CheckCollisionLines
  GetCollisionRec = raylib.GetCollisionRec
  LoadImage = raylib.LoadImage
  LoadImageRaw = raylib.LoadImageRaw
  LoadImageAnim = raylib.LoadImageAnim
  LoadImageAnimFromMemory = raylib.LoadImageAnimFromMemory
  LoadImageFromMemory = raylib.LoadImageFromMemory
  LoadImageFromTexture = raylib.LoadImageFromTexture
  LoadImageFromScreen = raylib.LoadImageFromScreen
  IsImageValid = raylib.IsImageValid
  UnloadImage = raylib.UnloadImage
  ExportImage = raylib.ExportImage
  ExportImageToMemory = raylib.ExportImageToMemory
  ExportImageAsCode = raylib.ExportImageAsCode
  GenImageColor = raylib.GenImageColor
  GenImageGradientLinear = raylib.GenImageGradientLinear
  GenImageGradientRadial = raylib.GenImageGradientRadial
  GenImageGradientSquare = raylib.GenImageGradientSquare
  GenImageChecked = raylib.GenImageChecked
  GenImageWhiteNoise = raylib.GenImageWhiteNoise
  GenImagePerlinNoise = raylib.GenImagePerlinNoise
  GenImageCellular = raylib.GenImageCellular
  GenImageText = raylib.GenImageText
  ImageCopy = raylib.ImageCopy
  ImageFromImage = raylib.ImageFromImage
  ImageFromChannel = raylib.ImageFromChannel
  ImageText = raylib.ImageText
  ImageTextEx = raylib.ImageTextEx
  ImageFormat = raylib.ImageFormat
  ImageToPOT = raylib.ImageToPOT
  ImageCrop = raylib.ImageCrop
  ImageAlphaCrop = raylib.ImageAlphaCrop
  ImageAlphaClear = raylib.ImageAlphaClear
  ImageAlphaMask = raylib.ImageAlphaMask
  ImageAlphaPremultiply = raylib.ImageAlphaPremultiply
  ImageBlurGaussian = raylib.ImageBlurGaussian
  ImageKernelConvolution = raylib.ImageKernelConvolution
  ImageResize = raylib.ImageResize
  ImageResizeNN = raylib.ImageResizeNN
  ImageResizeCanvas = raylib.ImageResizeCanvas
  ImageMipmaps = raylib.ImageMipmaps
  ImageDither = raylib.ImageDither
  ImageFlipVertical = raylib.ImageFlipVertical
  ImageFlipHorizontal = raylib.ImageFlipHorizontal
  ImageRotate = raylib.ImageRotate
  ImageRotateCW = raylib.ImageRotateCW
  ImageRotateCCW = raylib.ImageRotateCCW
  ImageColorTint = raylib.ImageColorTint
  ImageColorInvert = raylib.ImageColorInvert
  ImageColorGrayscale = raylib.ImageColorGrayscale
  ImageColorContrast = raylib.ImageColorContrast
  ImageColorBrightness = raylib.ImageColorBrightness
  ImageColorReplace = raylib.ImageColorReplace
  LoadImageColors = raylib.LoadImageColors
  LoadImagePalette = raylib.LoadImagePalette
  UnloadImageColors = raylib.UnloadImageColors
  UnloadImagePalette = raylib.UnloadImagePalette
  GetImageAlphaBorder = raylib.GetImageAlphaBorder
  GetImageColor = raylib.GetImageColor
  ImageClearBackground = raylib.ImageClearBackground
  ImageDrawPixel = raylib.ImageDrawPixel
  ImageDrawPixelV = raylib.ImageDrawPixelV
  ImageDrawLine = raylib.ImageDrawLine
  ImageDrawLineV = raylib.ImageDrawLineV
  ImageDrawLineEx = raylib.ImageDrawLineEx
  ImageDrawCircle = raylib.ImageDrawCircle
  ImageDrawCircleV = raylib.ImageDrawCircleV
  ImageDrawCircleLines = raylib.ImageDrawCircleLines
  ImageDrawCircleLinesV = raylib.ImageDrawCircleLinesV
  ImageDrawRectangle = raylib.ImageDrawRectangle
  ImageDrawRectangleV = raylib.ImageDrawRectangleV
  ImageDrawRectangleRec = raylib.ImageDrawRectangleRec
  ImageDrawRectangleLines = raylib.ImageDrawRectangleLines
  ImageDrawTriangle = raylib.ImageDrawTriangle
  ImageDrawTriangleEx = raylib.ImageDrawTriangleEx
  ImageDrawTriangleLines = raylib.ImageDrawTriangleLines
  ImageDrawTriangleFan = raylib.ImageDrawTriangleFan
  ImageDrawTriangleStrip = raylib.ImageDrawTriangleStrip
  ImageDraw = raylib.ImageDraw
  ImageDrawText = raylib.ImageDrawText
  ImageDrawTextEx = raylib.ImageDrawTextEx
  LoadTexture = raylib.LoadTexture
  LoadTextureFromImage = raylib.LoadTextureFromImage
  LoadTextureCubemap = raylib.LoadTextureCubemap
  LoadRenderTexture = raylib.LoadRenderTexture
  IsTextureValid = raylib.IsTextureValid
  UnloadTexture = raylib.UnloadTexture
  IsRenderTextureValid = raylib.IsRenderTextureValid
  UnloadRenderTexture = raylib.UnloadRenderTexture
  UpdateTexture = raylib.UpdateTexture
  UpdateTextureRec = raylib.UpdateTextureRec
  GenTextureMipmaps = raylib.GenTextureMipmaps
  SetTextureFilter = raylib.SetTextureFilter
  SetTextureWrap = raylib.SetTextureWrap
  DrawTexture = raylib.DrawTexture
  DrawTextureV = raylib.DrawTextureV
  DrawTextureEx = raylib.DrawTextureEx
  DrawTextureRec = raylib.DrawTextureRec
  DrawTexturePro = raylib.DrawTexturePro
  DrawTextureNPatch = raylib.DrawTextureNPatch
  ColorIsEqual = raylib.ColorIsEqual
  Fade = raylib.Fade
  ColorToInt = raylib.ColorToInt
  ColorNormalize = raylib.ColorNormalize
  ColorFromNormalized = raylib.ColorFromNormalized
  ColorToHSV = raylib.ColorToHSV
  ColorFromHSV = raylib.ColorFromHSV
  ColorTint = raylib.ColorTint
  ColorBrightness = raylib.ColorBrightness
  ColorContrast = raylib.ColorContrast
  ColorAlpha = raylib.ColorAlpha
  ColorAlphaBlend = raylib.ColorAlphaBlend
  ColorLerp = raylib.ColorLerp
  GetColor = raylib.GetColor
  GetPixelColor = raylib.GetPixelColor
  SetPixelColor = raylib.SetPixelColor
  GetPixelDataSize = raylib.GetPixelDataSize
  GetFontDefault = raylib.GetFontDefault
  LoadFont = raylib.LoadFont
  LoadFontEx = raylib.LoadFontEx
  LoadFontFromImage = raylib.LoadFontFromImage
  LoadFontFromMemory = raylib.LoadFontFromMemory
  IsFontValid = raylib.IsFontValid
  LoadFontData = raylib.LoadFontData
  GenImageFontAtlas = raylib.GenImageFontAtlas
  UnloadFontData = raylib.UnloadFontData
  UnloadFont = raylib.UnloadFont
  ExportFontAsCode = raylib.ExportFontAsCode
  DrawFPS = raylib.DrawFPS
  DrawText = raylib.DrawText
  DrawTextEx = raylib.DrawTextEx
  DrawTextPro = raylib.DrawTextPro
  DrawTextCodepoint = raylib.DrawTextCodepoint
  DrawTextCodepoints = raylib.DrawTextCodepoints
  SetTextLineSpacing = raylib.SetTextLineSpacing
  MeasureText = raylib.MeasureText
  MeasureTextEx = raylib.MeasureTextEx
  GetGlyphIndex = raylib.GetGlyphIndex
  GetGlyphInfo = raylib.GetGlyphInfo
  GetGlyphAtlasRec = raylib.GetGlyphAtlasRec
  LoadUTF8 = raylib.LoadUTF8
  UnloadUTF8 = raylib.UnloadUTF8
  LoadCodepoints = raylib.LoadCodepoints
  UnloadCodepoints = raylib.UnloadCodepoints
  GetCodepointCount = raylib.GetCodepointCount
  GetCodepoint = raylib.GetCodepoint
  GetCodepointNext = raylib.GetCodepointNext
  GetCodepointPrevious = raylib.GetCodepointPrevious
  CodepointToUTF8 = raylib.CodepointToUTF8
  TextCopy = raylib.TextCopy
  TextIsEqual = raylib.TextIsEqual
  TextLength = raylib.TextLength
  TextFormat = raylib.TextFormat
  TextSubtext = raylib.TextSubtext
  TextReplace = raylib.TextReplace
  TextInsert = raylib.TextInsert
  TextJoin = raylib.TextJoin
  TextSplit = raylib.TextSplit
  TextAppend = raylib.TextAppend
  TextFindIndex = raylib.TextFindIndex
  TextToUpper = raylib.TextToUpper
  TextToLower = raylib.TextToLower
  TextToPascal = raylib.TextToPascal
  TextToSnake = raylib.TextToSnake
  TextToCamel = raylib.TextToCamel
  TextToInteger = raylib.TextToInteger
  TextToFloat = raylib.TextToFloat
  DrawLine3D = raylib.DrawLine3D
  DrawPoint3D = raylib.DrawPoint3D
  DrawCircle3D = raylib.DrawCircle3D
  DrawTriangle3D = raylib.DrawTriangle3D
  DrawTriangleStrip3D = raylib.DrawTriangleStrip3D
  DrawCube = raylib.DrawCube
  DrawCubeV = raylib.DrawCubeV
  DrawCubeWires = raylib.DrawCubeWires
  DrawCubeWiresV = raylib.DrawCubeWiresV
  DrawSphere = raylib.DrawSphere
  DrawSphereEx = raylib.DrawSphereEx
  DrawSphereWires = raylib.DrawSphereWires
  DrawCylinder = raylib.DrawCylinder
  DrawCylinderEx = raylib.DrawCylinderEx
  DrawCylinderWires = raylib.DrawCylinderWires
  DrawCylinderWiresEx = raylib.DrawCylinderWiresEx
  DrawCapsule = raylib.DrawCapsule
  DrawCapsuleWires = raylib.DrawCapsuleWires
  DrawPlane = raylib.DrawPlane
  DrawRay = raylib.DrawRay
  DrawGrid = raylib.DrawGrid
  LoadModel = raylib.LoadModel
  LoadModelFromMesh = raylib.LoadModelFromMesh
  IsModelValid = raylib.IsModelValid
  UnloadModel = raylib.UnloadModel
  GetModelBoundingBox = raylib.GetModelBoundingBox
  DrawModel = raylib.DrawModel
  DrawModelEx = raylib.DrawModelEx
  DrawModelWires = raylib.DrawModelWires
  DrawModelWiresEx = raylib.DrawModelWiresEx
  DrawModelPoints = raylib.DrawModelPoints
  DrawModelPointsEx = raylib.DrawModelPointsEx
  DrawBoundingBox = raylib.DrawBoundingBox
  DrawBillboard = raylib.DrawBillboard
  DrawBillboardRec = raylib.DrawBillboardRec
  DrawBillboardPro = raylib.DrawBillboardPro
  UploadMesh = raylib.UploadMesh
  UpdateMeshBuffer = raylib.UpdateMeshBuffer
  UnloadMesh = raylib.UnloadMesh
  DrawMesh = raylib.DrawMesh
  DrawMeshInstanced = raylib.DrawMeshInstanced
  GetMeshBoundingBox = raylib.GetMeshBoundingBox
  GenMeshTangents = raylib.GenMeshTangents
  ExportMesh = raylib.ExportMesh
  ExportMeshAsCode = raylib.ExportMeshAsCode
  GenMeshPoly = raylib.GenMeshPoly
  GenMeshPlane = raylib.GenMeshPlane
  GenMeshCube = raylib.GenMeshCube
  GenMeshSphere = raylib.GenMeshSphere
  GenMeshHemiSphere = raylib.GenMeshHemiSphere
  GenMeshCylinder = raylib.GenMeshCylinder
  GenMeshCone = raylib.GenMeshCone
  GenMeshTorus = raylib.GenMeshTorus
  GenMeshKnot = raylib.GenMeshKnot
  GenMeshHeightmap = raylib.GenMeshHeightmap
  GenMeshCubicmap = raylib.GenMeshCubicmap
  LoadMaterials = raylib.LoadMaterials
  LoadMaterialDefault = raylib.LoadMaterialDefault
  IsMaterialValid = raylib.IsMaterialValid
  UnloadMaterial = raylib.UnloadMaterial
  SetMaterialTexture = raylib.SetMaterialTexture
  SetModelMeshMaterial = raylib.SetModelMeshMaterial
  LoadModelAnimations = raylib.LoadModelAnimations
  UpdateModelAnimation = raylib.UpdateModelAnimation
  UpdateModelAnimationBones = raylib.UpdateModelAnimationBones
  UnloadModelAnimation = raylib.UnloadModelAnimation
  UnloadModelAnimations = raylib.UnloadModelAnimations
  IsModelAnimationValid = raylib.IsModelAnimationValid
  CheckCollisionSpheres = raylib.CheckCollisionSpheres
  CheckCollisionBoxes = raylib.CheckCollisionBoxes
  CheckCollisionBoxSphere = raylib.CheckCollisionBoxSphere
  GetRayCollisionSphere = raylib.GetRayCollisionSphere
  GetRayCollisionBox = raylib.GetRayCollisionBox
  GetRayCollisionMesh = raylib.GetRayCollisionMesh
  GetRayCollisionTriangle = raylib.GetRayCollisionTriangle
  GetRayCollisionQuad = raylib.GetRayCollisionQuad
  InitAudioDevice = raylib.InitAudioDevice
  CloseAudioDevice = raylib.CloseAudioDevice
  IsAudioDeviceReady = raylib.IsAudioDeviceReady
  SetMasterVolume = raylib.SetMasterVolume
  GetMasterVolume = raylib.GetMasterVolume
  LoadWave = raylib.LoadWave
  LoadWaveFromMemory = raylib.LoadWaveFromMemory
  IsWaveValid = raylib.IsWaveValid
  LoadSound = raylib.LoadSound
  LoadSoundFromWave = raylib.LoadSoundFromWave
  LoadSoundAlias = raylib.LoadSoundAlias
  IsSoundValid = raylib.IsSoundValid
  UpdateSound = raylib.UpdateSound
  UnloadWave = raylib.UnloadWave
  UnloadSound = raylib.UnloadSound
  UnloadSoundAlias = raylib.UnloadSoundAlias
  ExportWave = raylib.ExportWave
  ExportWaveAsCode = raylib.ExportWaveAsCode
  PlaySound = raylib.PlaySound
  StopSound = raylib.StopSound
  PauseSound = raylib.PauseSound
  ResumeSound = raylib.ResumeSound
  IsSoundPlaying = raylib.IsSoundPlaying
  SetSoundVolume = raylib.SetSoundVolume
  SetSoundPitch = raylib.SetSoundPitch
  SetSoundPan = raylib.SetSoundPan
  WaveCopy = raylib.WaveCopy
  WaveCrop = raylib.WaveCrop
  WaveFormat = raylib.WaveFormat
  LoadWaveSamples = raylib.LoadWaveSamples
  UnloadWaveSamples = raylib.UnloadWaveSamples
  LoadMusicStream = raylib.LoadMusicStream
  LoadMusicStreamFromMemory = raylib.LoadMusicStreamFromMemory
  IsMusicValid = raylib.IsMusicValid
  UnloadMusicStream = raylib.UnloadMusicStream
  PlayMusicStream = raylib.PlayMusicStream
  IsMusicStreamPlaying = raylib.IsMusicStreamPlaying
  UpdateMusicStream = raylib.UpdateMusicStream
  StopMusicStream = raylib.StopMusicStream
  PauseMusicStream = raylib.PauseMusicStream
  ResumeMusicStream = raylib.ResumeMusicStream
  SeekMusicStream = raylib.SeekMusicStream
  SetMusicVolume = raylib.SetMusicVolume
  SetMusicPitch = raylib.SetMusicPitch
  SetMusicPan = raylib.SetMusicPan
  GetMusicTimeLength = raylib.GetMusicTimeLength
  GetMusicTimePlayed = raylib.GetMusicTimePlayed
  LoadAudioStream = raylib.LoadAudioStream
  IsAudioStreamValid = raylib.IsAudioStreamValid
  UnloadAudioStream = raylib.UnloadAudioStream
  UpdateAudioStream = raylib.UpdateAudioStream
  IsAudioStreamProcessed = raylib.IsAudioStreamProcessed
  PlayAudioStream = raylib.PlayAudioStream
  PauseAudioStream = raylib.PauseAudioStream
  ResumeAudioStream = raylib.ResumeAudioStream
  IsAudioStreamPlaying = raylib.IsAudioStreamPlaying
  StopAudioStream = raylib.StopAudioStream
  SetAudioStreamVolume = raylib.SetAudioStreamVolume
  SetAudioStreamPitch = raylib.SetAudioStreamPitch
  SetAudioStreamPan = raylib.SetAudioStreamPan
  SetAudioStreamBufferSizeDefault = raylib.SetAudioStreamBufferSizeDefault
  SetAudioStreamCallback = raylib.SetAudioStreamCallback
  AttachAudioStreamProcessor = raylib.AttachAudioStreamProcessor
  DetachAudioStreamProcessor = raylib.DetachAudioStreamProcessor
  AttachAudioMixedProcessor = raylib.AttachAudioMixedProcessor
  DetachAudioMixedProcessor = raylib.DetachAudioMixedProcessor
  GuiEnable = raylib.GuiEnable
  GuiDisable = raylib.GuiDisable
  GuiLock = raylib.GuiLock
  GuiUnlock = raylib.GuiUnlock
  GuiIsLocked = raylib.GuiIsLocked
  GuiSetAlpha = raylib.GuiSetAlpha
  GuiSetState = raylib.GuiSetState
  GuiGetState = raylib.GuiGetState
  GuiSetFont = raylib.GuiSetFont
  GuiGetFont = raylib.GuiGetFont
  GuiSetStyle = raylib.GuiSetStyle
  GuiGetStyle = raylib.GuiGetStyle
  GuiLoadStyle = raylib.GuiLoadStyle
  GuiLoadStyleDefault = raylib.GuiLoadStyleDefault
  GuiEnableTooltip = raylib.GuiEnableTooltip
  GuiDisableTooltip = raylib.GuiDisableTooltip
  GuiSetTooltip = raylib.GuiSetTooltip
  GuiIconText = raylib.GuiIconText
  GuiSetIconScale = raylib.GuiSetIconScale
  GuiGetIcons = raylib.GuiGetIcons
  GuiLoadIcons = raylib.GuiLoadIcons
  GuiDrawIcon = raylib.GuiDrawIcon
  GuiWindowBox = raylib.GuiWindowBox
  GuiGroupBox = raylib.GuiGroupBox
  GuiLine = raylib.GuiLine
  GuiPanel = raylib.GuiPanel
  GuiTabBar = raylib.GuiTabBar
  GuiScrollPanel = raylib.GuiScrollPanel
  GuiLabel = raylib.GuiLabel
  GuiButton = raylib.GuiButton
  GuiLabelButton = raylib.GuiLabelButton
  GuiToggle = raylib.GuiToggle
  GuiToggleGroup = raylib.GuiToggleGroup
  GuiToggleSlider = raylib.GuiToggleSlider
  GuiCheckBox = raylib.GuiCheckBox
  GuiComboBox = raylib.GuiComboBox
  GuiDropdownBox = raylib.GuiDropdownBox
  GuiSpinner = raylib.GuiSpinner
  GuiValueBox = raylib.GuiValueBox
  GuiTextBox = raylib.GuiTextBox
  GuiSlider = raylib.GuiSlider
  GuiSliderBar = raylib.GuiSliderBar
  GuiProgressBar = raylib.GuiProgressBar
  GuiStatusBar = raylib.GuiStatusBar
  GuiDummyRec = raylib.GuiDummyRec
  GuiGrid = raylib.GuiGrid
  GuiListView = raylib.GuiListView
  GuiListViewEx = raylib.GuiListViewEx
  GuiMessageBox = raylib.GuiMessageBox
  GuiTextInputBox = raylib.GuiTextInputBox
  GuiColorPicker = raylib.GuiColorPicker
  GuiColorPanel = raylib.GuiColorPanel
  GuiColorBarAlpha = raylib.GuiColorBarAlpha
  GuiColorBarHue = raylib.GuiColorBarHue
  GuiColorPickerHSV = raylib.GuiColorPickerHSV
  GuiColorPanelHSV = raylib.GuiColorPanelHSV
  EaseLinearNone = raylib.EaseLinearNone
  EaseLinearIn = raylib.EaseLinearIn
  EaseLinearOut = raylib.EaseLinearOut
  EaseLinearInOut = raylib.EaseLinearInOut
  EaseSineIn = raylib.EaseSineIn
  EaseSineOut = raylib.EaseSineOut
  EaseSineInOut = raylib.EaseSineInOut
  EaseCircIn = raylib.EaseCircIn
  EaseCircOut = raylib.EaseCircOut
  EaseCircInOut = raylib.EaseCircInOut
  EaseCubicIn = raylib.EaseCubicIn
  EaseCubicOut = raylib.EaseCubicOut
  EaseCubicInOut = raylib.EaseCubicInOut
  EaseQuadIn = raylib.EaseQuadIn
  EaseQuadOut = raylib.EaseQuadOut
  EaseQuadInOut = raylib.EaseQuadInOut
  EaseExpoIn = raylib.EaseExpoIn
  EaseExpoOut = raylib.EaseExpoOut
  EaseExpoInOut = raylib.EaseExpoInOut
  EaseBackIn = raylib.EaseBackIn
  EaseBackOut = raylib.EaseBackOut
  EaseBackInOut = raylib.EaseBackInOut
  EaseBounceOut = raylib.EaseBounceOut
  EaseBounceIn = raylib.EaseBounceIn
  EaseBounceInOut = raylib.EaseBounceInOut
  EaseElasticIn = raylib.EaseElasticIn
  EaseElasticOut = raylib.EaseElasticOut
  EaseElasticInOut = raylib.EaseElasticInOut
  rlMatrixMode = raylib.rlMatrixMode
  rlPushMatrix = raylib.rlPushMatrix
  rlPopMatrix = raylib.rlPopMatrix
  rlLoadIdentity = raylib.rlLoadIdentity
  rlTranslatef = raylib.rlTranslatef
  rlRotatef = raylib.rlRotatef
  rlScalef = raylib.rlScalef
  rlMultMatrixf = raylib.rlMultMatrixf
  rlFrustum = raylib.rlFrustum
  rlOrtho = raylib.rlOrtho
  rlViewport = raylib.rlViewport
  rlSetClipPlanes = raylib.rlSetClipPlanes
  rlGetCullDistanceNear = raylib.rlGetCullDistanceNear
  rlGetCullDistanceFar = raylib.rlGetCullDistanceFar
  rlBegin = raylib.rlBegin
  rlEnd = raylib.rlEnd
  rlVertex2i = raylib.rlVertex2i
  rlVertex2f = raylib.rlVertex2f
  rlVertex3f = raylib.rlVertex3f
  rlTexCoord2f = raylib.rlTexCoord2f
  rlNormal3f = raylib.rlNormal3f
  rlColor4ub = raylib.rlColor4ub
  rlColor3f = raylib.rlColor3f
  rlColor4f = raylib.rlColor4f
  rlEnableVertexArray = raylib.rlEnableVertexArray
  rlDisableVertexArray = raylib.rlDisableVertexArray
  rlEnableVertexBuffer = raylib.rlEnableVertexBuffer
  rlDisableVertexBuffer = raylib.rlDisableVertexBuffer
  rlEnableVertexBufferElement = raylib.rlEnableVertexBufferElement
  rlDisableVertexBufferElement = raylib.rlDisableVertexBufferElement
  rlEnableVertexAttribute = raylib.rlEnableVertexAttribute
  rlDisableVertexAttribute = raylib.rlDisableVertexAttribute
  rlActiveTextureSlot = raylib.rlActiveTextureSlot
  rlEnableTexture = raylib.rlEnableTexture
  rlDisableTexture = raylib.rlDisableTexture
  rlEnableTextureCubemap = raylib.rlEnableTextureCubemap
  rlDisableTextureCubemap = raylib.rlDisableTextureCubemap
  rlTextureParameters = raylib.rlTextureParameters
  rlCubemapParameters = raylib.rlCubemapParameters
  rlEnableShader = raylib.rlEnableShader
  rlDisableShader = raylib.rlDisableShader
  rlEnableFramebuffer = raylib.rlEnableFramebuffer
  rlDisableFramebuffer = raylib.rlDisableFramebuffer
  rlGetActiveFramebuffer = raylib.rlGetActiveFramebuffer
  rlActiveDrawBuffers = raylib.rlActiveDrawBuffers
  rlBlitFramebuffer = raylib.rlBlitFramebuffer
  rlBindFramebuffer = raylib.rlBindFramebuffer
  rlEnableColorBlend = raylib.rlEnableColorBlend
  rlDisableColorBlend = raylib.rlDisableColorBlend
  rlEnableDepthTest = raylib.rlEnableDepthTest
  rlDisableDepthTest = raylib.rlDisableDepthTest
  rlEnableDepthMask = raylib.rlEnableDepthMask
  rlDisableDepthMask = raylib.rlDisableDepthMask
  rlEnableBackfaceCulling = raylib.rlEnableBackfaceCulling
  rlDisableBackfaceCulling = raylib.rlDisableBackfaceCulling
  rlColorMask = raylib.rlColorMask
  rlSetCullFace = raylib.rlSetCullFace
  rlEnableScissorTest = raylib.rlEnableScissorTest
  rlDisableScissorTest = raylib.rlDisableScissorTest
  rlScissor = raylib.rlScissor
  rlEnableWireMode = raylib.rlEnableWireMode
  rlEnablePointMode = raylib.rlEnablePointMode
  rlDisableWireMode = raylib.rlDisableWireMode
  rlSetLineWidth = raylib.rlSetLineWidth
  rlGetLineWidth = raylib.rlGetLineWidth
  rlEnableSmoothLines = raylib.rlEnableSmoothLines
  rlDisableSmoothLines = raylib.rlDisableSmoothLines
  rlEnableStereoRender = raylib.rlEnableStereoRender
  rlDisableStereoRender = raylib.rlDisableStereoRender
  rlIsStereoRenderEnabled = raylib.rlIsStereoRenderEnabled
  rlClearColor = raylib.rlClearColor
  rlClearScreenBuffers = raylib.rlClearScreenBuffers
  rlCheckErrors = raylib.rlCheckErrors
  rlSetBlendMode = raylib.rlSetBlendMode
  rlSetBlendFactors = raylib.rlSetBlendFactors
  rlSetBlendFactorsSeparate = raylib.rlSetBlendFactorsSeparate
  rlglInit = raylib.rlglInit
  rlglClose = raylib.rlglClose
  rlLoadExtensions = raylib.rlLoadExtensions
  rlGetVersion = raylib.rlGetVersion
  rlSetFramebufferWidth = raylib.rlSetFramebufferWidth
  rlGetFramebufferWidth = raylib.rlGetFramebufferWidth
  rlSetFramebufferHeight = raylib.rlSetFramebufferHeight
  rlGetFramebufferHeight = raylib.rlGetFramebufferHeight
  rlGetTextureIdDefault = raylib.rlGetTextureIdDefault
  rlGetShaderIdDefault = raylib.rlGetShaderIdDefault
  rlGetShaderLocsDefault = raylib.rlGetShaderLocsDefault
  rlLoadRenderBatch = raylib.rlLoadRenderBatch
  rlUnloadRenderBatch = raylib.rlUnloadRenderBatch
  rlDrawRenderBatch = raylib.rlDrawRenderBatch
  rlSetRenderBatchActive = raylib.rlSetRenderBatchActive
  rlDrawRenderBatchActive = raylib.rlDrawRenderBatchActive
  rlCheckRenderBatchLimit = raylib.rlCheckRenderBatchLimit
  rlSetTexture = raylib.rlSetTexture
  rlLoadVertexArray = raylib.rlLoadVertexArray
  rlLoadVertexBuffer = raylib.rlLoadVertexBuffer
  rlLoadVertexBufferElement = raylib.rlLoadVertexBufferElement
  rlUpdateVertexBuffer = raylib.rlUpdateVertexBuffer
  rlUpdateVertexBufferElements = raylib.rlUpdateVertexBufferElements
  rlUnloadVertexArray = raylib.rlUnloadVertexArray
  rlUnloadVertexBuffer = raylib.rlUnloadVertexBuffer
  rlSetVertexAttribute = raylib.rlSetVertexAttribute
  rlSetVertexAttributeDivisor = raylib.rlSetVertexAttributeDivisor
  rlSetVertexAttributeDefault = raylib.rlSetVertexAttributeDefault
  rlDrawVertexArray = raylib.rlDrawVertexArray
  rlDrawVertexArrayElements = raylib.rlDrawVertexArrayElements
  rlDrawVertexArrayInstanced = raylib.rlDrawVertexArrayInstanced
  rlDrawVertexArrayElementsInstanced = raylib.rlDrawVertexArrayElementsInstanced
  rlLoadTexture = raylib.rlLoadTexture
  rlLoadTextureDepth = raylib.rlLoadTextureDepth
  rlLoadTextureCubemap = raylib.rlLoadTextureCubemap
  rlUpdateTexture = raylib.rlUpdateTexture
  rlGetGlTextureFormats = raylib.rlGetGlTextureFormats
  rlGetPixelFormatName = raylib.rlGetPixelFormatName
  rlUnloadTexture = raylib.rlUnloadTexture
  rlGenTextureMipmaps = raylib.rlGenTextureMipmaps
  rlReadTexturePixels = raylib.rlReadTexturePixels
  rlReadScreenPixels = raylib.rlReadScreenPixels
  rlLoadFramebuffer = raylib.rlLoadFramebuffer
  rlFramebufferAttach = raylib.rlFramebufferAttach
  rlFramebufferComplete = raylib.rlFramebufferComplete
  rlUnloadFramebuffer = raylib.rlUnloadFramebuffer
  rlLoadShaderCode = raylib.rlLoadShaderCode
  rlCompileShader = raylib.rlCompileShader
  rlLoadShaderProgram = raylib.rlLoadShaderProgram
  rlUnloadShaderProgram = raylib.rlUnloadShaderProgram
  rlGetLocationUniform = raylib.rlGetLocationUniform
  rlGetLocationAttrib = raylib.rlGetLocationAttrib
  rlSetUniform = raylib.rlSetUniform
  rlSetUniformMatrix = raylib.rlSetUniformMatrix
  rlSetUniformMatrices = raylib.rlSetUniformMatrices
  rlSetUniformSampler = raylib.rlSetUniformSampler
  rlSetShader = raylib.rlSetShader
  rlLoadComputeShaderProgram = raylib.rlLoadComputeShaderProgram
  rlComputeShaderDispatch = raylib.rlComputeShaderDispatch
  rlLoadShaderBuffer = raylib.rlLoadShaderBuffer
  rlUnloadShaderBuffer = raylib.rlUnloadShaderBuffer
  rlUpdateShaderBuffer = raylib.rlUpdateShaderBuffer
  rlBindShaderBuffer = raylib.rlBindShaderBuffer
  rlReadShaderBuffer = raylib.rlReadShaderBuffer
  rlCopyShaderBuffer = raylib.rlCopyShaderBuffer
  rlGetShaderBufferSize = raylib.rlGetShaderBufferSize
  rlBindImageTexture = raylib.rlBindImageTexture
  rlGetMatrixModelview = raylib.rlGetMatrixModelview
  rlGetMatrixProjection = raylib.rlGetMatrixProjection
  rlGetMatrixTransform = raylib.rlGetMatrixTransform
  rlGetMatrixProjectionStereo = raylib.rlGetMatrixProjectionStereo
  rlGetMatrixViewOffsetStereo = raylib.rlGetMatrixViewOffsetStereo
  rlSetMatrixProjection = raylib.rlSetMatrixProjection
  rlSetMatrixModelview = raylib.rlSetMatrixModelview
  rlSetMatrixProjectionStereo = raylib.rlSetMatrixProjectionStereo
  rlSetMatrixViewOffsetStereo = raylib.rlSetMatrixViewOffsetStereo
  rlLoadDrawCube = raylib.rlLoadDrawCube
  rlLoadDrawQuad = raylib.rlLoadDrawQuad
  GetCameraForward = raylib.GetCameraForward
  GetCameraUp = raylib.GetCameraUp
  GetCameraRight = raylib.GetCameraRight
  CameraMoveForward = raylib.CameraMoveForward
  CameraMoveUp = raylib.CameraMoveUp
  CameraMoveRight = raylib.CameraMoveRight
  CameraMoveToTarget = raylib.CameraMoveToTarget
  CameraYaw = raylib.CameraYaw
  CameraPitch = raylib.CameraPitch
  CameraRoll = raylib.CameraRoll
  GetCameraViewMatrix = raylib.GetCameraViewMatrix
  GetCameraProjectionMatrix = raylib.GetCameraProjectionMatrix
  DrawTextBoxed = raylib.DrawTextBoxed
  DrawTextBoxedSelectable = raylib.DrawTextBoxedSelectable
  UniformFloat = raylib.UniformFloat
  UniformVector2 = raylib.UniformVector2
  UniformVector3 = raylib.UniformVector3
  UniformVector4 = raylib.UniformVector4
  UniformColor = raylib.UniformColor
  UniformInt = raylib.UniformInt
  UniformTexture = raylib.UniformTexture
      await InitGame(raylib)
    }, UpdateGame)
  `)
  f(raylib_run, canvas)
}

export { Module }
export default raylib_run

