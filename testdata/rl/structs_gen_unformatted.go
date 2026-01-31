// go:build 
package rl

/* Vector2, 2 components */
type Vector2 struct {
	x float // Vector x component
	y float // Vector y component
}

/* Vector3, 3 components */
type Vector3 struct {
	x float // Vector x component
	y float // Vector y component
	z float // Vector z component
}

/* Vector4, 4 components */
type Vector4 struct {
	x float // Vector x component
	y float // Vector y component
	z float // Vector z component
	w float // Vector w component
}

/* Matrix, 4x4 components, column major, OpenGL style, right-handed */
type Matrix struct {
	m0 float // Matrix first row (4 components)
	m4 float // Matrix first row (4 components)
	m8 float // Matrix first row (4 components)
	m12 float // Matrix first row (4 components)
	m1 float // Matrix second row (4 components)
	m5 float // Matrix second row (4 components)
	m9 float // Matrix second row (4 components)
	m13 float // Matrix second row (4 components)
	m2 float // Matrix third row (4 components)
	m6 float // Matrix third row (4 components)
	m10 float // Matrix third row (4 components)
	m14 float // Matrix third row (4 components)
	m3 float // Matrix fourth row (4 components)
	m7 float // Matrix fourth row (4 components)
	m11 float // Matrix fourth row (4 components)
	m15 float // Matrix fourth row (4 components)
}

/* Color, 4 components, R8G8B8A8 (32bit) */
type Color struct {
	r unsigned char // Color red value
	g unsigned char // Color green value
	b unsigned char // Color blue value
	a unsigned char // Color alpha value
}

/* Rectangle, 4 components */
type Rectangle struct {
	x float // Rectangle top-left corner position x
	y float // Rectangle top-left corner position y
	width float // Rectangle width
	height float // Rectangle height
}

/* Image, pixel data stored in CPU memory (RAM) */
type Image struct {
	data void * // Image raw data
	width int // Image base width
	height int // Image base height
	mipmaps int // Mipmap levels, 1 by default
	format int // Data format (PixelFormat type)
}

/* Texture, tex data stored in GPU memory (VRAM) */
type Texture struct {
	id unsigned int // OpenGL texture id
	width int // Texture base width
	height int // Texture base height
	mipmaps int // Mipmap levels, 1 by default
	format int // Data format (PixelFormat type)
}

/* RenderTexture, fbo for texture rendering */
type RenderTexture struct {
	id unsigned int // OpenGL framebuffer object id
	texture Texture // Color buffer attachment texture
	depth Texture // Depth buffer attachment texture
}

/* NPatchInfo, n-patch layout info */
type NPatchInfo struct {
	source Rectangle // Texture source rectangle
	left int // Left border offset
	top int // Top border offset
	right int // Right border offset
	bottom int // Bottom border offset
	layout int // Layout of the n-patch: 3x3, 1x3 or 3x1
}

/* GlyphInfo, font characters glyphs info */
type GlyphInfo struct {
	value int // Character value (Unicode)
	offsetX int // Character offset X when drawing
	offsetY int // Character offset Y when drawing
	advanceX int // Character advance position X
	image Image // Character image data
}

/* Font, font texture and GlyphInfo array data */
type Font struct {
	baseSize int // Base size (default chars height)
	glyphCount int // Number of glyph characters
	glyphPadding int // Padding around the glyph characters
	texture Texture2D // Texture atlas containing the glyphs
	recs Rectangle * // Rectangles in texture for the glyphs
	glyphs GlyphInfo * // Glyphs info data
}

/* Camera, defines position/orientation in 3d space */
type Camera3D struct {
	position Vector3 // Camera position
	target Vector3 // Camera target it looks-at
	up Vector3 // Camera up vector (rotation over its axis)
	fovy float // Camera field-of-view aperture in Y (degrees) in perspective, used as near plane height in world units in orthographic
	projection int // Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC
}

/* Camera2D, defines position/orientation in 2d space */
type Camera2D struct {
	offset Vector2 // Camera offset (screen space offset from window origin)
	target Vector2 // Camera target (world space target point that is mapped to screen space offset)
	rotation float // Camera rotation in degrees (pivots around target)
	zoom float // Camera zoom (scaling around target), must not be set to 0, set to 1.0f for no scale
}

/* Mesh, vertex data and vao/vbo */
type Mesh struct {
	vertexCount int // Number of vertices stored in arrays
	triangleCount int // Number of triangles stored (indexed or not)
	vertices float * // Vertex position (XYZ - 3 components per vertex) (shader-location = 0)
	texcoords float * // Vertex texture coordinates (UV - 2 components per vertex) (shader-location = 1)
	texcoords2 float * // Vertex texture second coordinates (UV - 2 components per vertex) (shader-location = 5)
	normals float * // Vertex normals (XYZ - 3 components per vertex) (shader-location = 2)
	tangents float * // Vertex tangents (XYZW - 4 components per vertex) (shader-location = 4)
	colors unsigned char * // Vertex colors (RGBA - 4 components per vertex) (shader-location = 3)
	indices unsigned short * // Vertex indices (in case vertex data comes indexed)
	animVertices float * // Animated vertex positions (after bones transformations)
	animNormals float * // Animated normals (after bones transformations)
	boneIds unsigned char * // Vertex bone ids, max 255 bone ids, up to 4 bones influence by vertex (skinning) (shader-location = 6)
	boneWeights float * // Vertex bone weight, up to 4 bones influence by vertex (skinning) (shader-location = 7)
	boneMatrices Matrix * // Bones animated transformation matrices
	boneCount int // Number of bones
	vaoId unsigned int // OpenGL Vertex Array Object id
	vboId unsigned int * // OpenGL Vertex Buffer Objects id (default vertex data)
}

/* Shader */
type Shader struct {
	id unsigned int // Shader program id
	locs int * // Shader locations array (RL_MAX_SHADER_LOCATIONS)
}

/* MaterialMap */
type MaterialMap struct {
	texture Texture2D // Material map texture
	color Color // Material map color
	value float // Material map value
}

/* Material, includes shader and maps */
type Material struct {
	shader Shader // Material shader
	maps MaterialMap * // Material maps array (MAX_MATERIAL_MAPS)
	params float[4] // Material generic parameters (if required)
}

/* Transform, vertex transformation data */
type Transform struct {
	translation Vector3 // Translation
	rotation Quaternion // Rotation
	scale Vector3 // Scale
}

/* Bone, skeletal animation bone */
type BoneInfo struct {
	name char[32] // Bone name
	parent int // Bone parent
}

/* Model, meshes, materials and animation data */
type Model struct {
	transform Matrix // Local transform matrix
	meshCount int // Number of meshes
	materialCount int // Number of materials
	meshes Mesh * // Meshes array
	materials Material * // Materials array
	meshMaterial int * // Mesh material number
	boneCount int // Number of bones
	bones BoneInfo * // Bones information (skeleton)
	bindPose Transform * // Bones base transformation (pose)
}

/* ModelAnimation */
type ModelAnimation struct {
	boneCount int // Number of bones
	frameCount int // Number of animation frames
	bones BoneInfo * // Bones information (skeleton)
	framePoses Transform ** // Poses array by frame
	name char[32] // Animation name
}

/* Ray, ray for raycasting */
type Ray struct {
	position Vector3 // Ray position (origin)
	direction Vector3 // Ray direction (normalized)
}

/* RayCollision, ray hit information */
type RayCollision struct {
	hit bool // Did the ray hit something?
	distance float // Distance to the nearest hit
	point Vector3 // Point of the nearest hit
	normal Vector3 // Surface normal of hit
}

/* BoundingBox */
type BoundingBox struct {
	min Vector3 // Minimum vertex box-corner
	max Vector3 // Maximum vertex box-corner
}

/* Wave, audio wave data */
type Wave struct {
	frameCount unsigned int // Total number of frames (considering channels)
	sampleRate unsigned int // Frequency (samples per second)
	sampleSize unsigned int // Bit depth (bits per sample): 8, 16, 32 (24 not supported)
	channels unsigned int // Number of channels (1-mono, 2-stereo, ...)
	data void * // Buffer data pointer
}

/* AudioStream, custom audio stream */
type AudioStream struct {
	buffer rAudioBuffer * // Pointer to internal data used by the audio system
	processor rAudioProcessor * // Pointer to internal data processor, useful for audio effects
	sampleRate unsigned int // Frequency (samples per second)
	sampleSize unsigned int // Bit depth (bits per sample): 8, 16, 32 (24 not supported)
	channels unsigned int // Number of channels (1-mono, 2-stereo, ...)
}

/* Sound */
type Sound struct {
	stream AudioStream // Audio stream
	frameCount unsigned int // Total number of frames (considering channels)
}

/* Music, audio stream, anything longer than ~10 seconds should be streamed */
type Music struct {
	stream AudioStream // Audio stream
	frameCount unsigned int // Total number of frames (considering channels)
	looping bool // Music looping enable
	ctxType int // Type of music context (audio filetype)
	ctxData void * // Audio context data, depends on type
}

/* VrDeviceInfo, Head-Mounted-Display device parameters */
type VrDeviceInfo struct {
	hResolution int // Horizontal resolution in pixels
	vResolution int // Vertical resolution in pixels
	hScreenSize float // Horizontal size in meters
	vScreenSize float // Vertical size in meters
	eyeToScreenDistance float // Distance between eye and display in meters
	lensSeparationDistance float // Lens separation distance in meters
	interpupillaryDistance float // IPD (distance between pupils) in meters
	lensDistortionValues float[4] // Lens distortion constant parameters
	chromaAbCorrection float[4] // Chromatic aberration correction parameters
}

/* VrStereoConfig, VR stereo rendering configuration for simulator */
type VrStereoConfig struct {
	projection Matrix[2] // VR projection matrices (per eye)
	viewOffset Matrix[2] // VR view offset matrices (per eye)
	leftLensCenter float[2] // VR left lens center
	rightLensCenter float[2] // VR right lens center
	leftScreenCenter float[2] // VR left screen center
	rightScreenCenter float[2] // VR right screen center
	scale float[2] // VR distortion scale
	scaleIn float[2] // VR distortion scale in
}

/* File path list */
type FilePathList struct {
	count unsigned int // Filepaths entries count
	paths char ** // Filepaths entries
}

/* Automation event */
type AutomationEvent struct {
	frame unsigned int // Event frame
	type unsigned int // Event type (AutomationEventType)
	params int[4] // Event parameters (if required)
}

/* Automation event list */
type AutomationEventList struct {
	capacity unsigned int // Events max entries (MAX_AUTOMATION_EVENTS)
	count unsigned int // Events entries count
	events AutomationEvent * // Events entries
}
