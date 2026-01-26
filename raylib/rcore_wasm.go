package rl

import (
	"image"
	"image/color"
	"unsafe"

	wasm "github.com/BrownNPC/wasm-ffi-go"
)

var closeWindow = wasm.Proc("CloseWindow")
var isWindowReady = wasm.Func[bool]("IsWindowReady")
var isWindowFullscreen = wasm.Func[bool]("IsWindowFullscreen")
var isWindowResized = wasm.Func[bool]("IsWindowResized")
var isWindowState = wasm.Func[bool]("IsWindowState")
var clearWindowState = wasm.Proc("ClearWindowState")
var setWindowIcon = wasm.Proc("SetWindowIcon")
var setWindowIcons = wasm.Proc("SetWindowIcons")
var setWindowTitle = wasm.Proc("SetWindowTitle")
var setWindowMonitor = wasm.Proc("SetWindowMonitor")
var setWindowMinSize = wasm.Proc("SetWindowMinSize")
var setWindowMaxSize = wasm.Proc("SetWindowMaxSize")
var setWindowSize = wasm.Proc("SetWindowSize")
var getWindowHandle = wasm.Func[unsafe.Pointer]("GetWindowHandle")
var getScreenWidth = wasm.Func[int]("GetScreenWidth")
var getScreenHeight = wasm.Func[int]("GetScreenHeight")
var getRenderWidth = wasm.Func[int]("GetRenderWidth")
var getRenderHeight = wasm.Func[int]("GetRenderHeight")
var getMonitorCount = wasm.Func[int]("GetMonitorCount")
var getCurrentMonitor = wasm.Func[int]("GetCurrentMonitor")
var getMonitorPosition = wasm.Func[Vector2]("GetMonitorPosition")
var getMonitorWidth = wasm.Func[int]("GetMonitorWidth")
var getMonitorHeight = wasm.Func[int]("GetMonitorHeight")
var getMonitorPhysicalWidth = wasm.Func[int]("GetMonitorPhysicalWidth")
var getMonitorPhysicalHeight = wasm.Func[int]("GetMonitorPhysicalHeight")
var getMonitorRefreshRate = wasm.Func[int]("GetMonitorRefreshRate")
var getWindowPosition = wasm.Func[Vector2]("GetWindowPosition")
var getWindowScaleDPI = wasm.Func[Vector2]("GetWindowScaleDPI")
var getMonitorName = wasm.Func[string]("GetMonitorName")
var setClipboardText = wasm.Proc("SetClipboardText")
var getClipboardText = wasm.Func[string]("GetClipboardText")
var getClipboardImage = wasm.Func[Image]("GetClipboardImage")
var enableEventWaiting = wasm.Proc("EnableEventWaiting")
var disableEventWaiting = wasm.Proc("DisableEventWaiting")
var showCursor = wasm.Proc("ShowCursor")
var hideCursor = wasm.Proc("HideCursor")
var isCursorHidden = wasm.Func[bool]("IsCursorHidden")
var enableCursor = wasm.Proc("EnableCursor")
var disableCursor = wasm.Proc("DisableCursor")
var isCursorOnScreen = wasm.Func[bool]("IsCursorOnScreen")
var clearBackground = wasm.Proc("ClearBackground")
var beginDrawing = wasm.Proc("BeginDrawing")
var endDrawing = wasm.Proc("EndDrawing")
var beginMode2D = wasm.Proc("BeginMode2D")
var endMode2D = wasm.Proc("EndMode2D")
var beginMode3D = wasm.Proc("BeginMode3D")
var endMode3D = wasm.Proc("EndMode3D")
var beginTextureMode = wasm.Proc("BeginTextureMode")
var endTextureMode = wasm.Proc("EndTextureMode")
var beginShaderMode = wasm.Proc("BeginShaderMode")
var endShaderMode = wasm.Proc("EndShaderMode")
var beginBlendMode = wasm.Proc("BeginBlendMode")
var endBlendMode = wasm.Proc("EndBlendMode")
var beginScissorMode = wasm.Proc("BeginScissorMode")
var endScissorMode = wasm.Proc("EndScissorMode")
var beginVrStereoMode = wasm.Proc("BeginVrStereoMode")
var endVrStereoMode = wasm.Proc("EndVrStereoMode")
var loadVrStereoConfig = wasm.Func[VrStereoConfig]("LoadVrStereoConfig")
var unloadVrStereoConfig = wasm.Proc("UnloadVrStereoConfig")
var loadShader = wasm.Func[Shader]("LoadShader")
var loadShaderFromMemory = wasm.Func[Shader]("LoadShaderFromMemory")
var isShaderValid = wasm.Func[bool]("IsShaderValid")
var getShaderLocation = wasm.Func[int32]("GetShaderLocation")
var getShaderLocationAttrib = wasm.Func[int32]("GetShaderLocationAttrib")
var setShaderValue = wasm.Proc("SetShaderValue")
var setShaderValueV = wasm.Proc("SetShaderValueV")
var setShaderValueMatrix = wasm.Proc("SetShaderValueMatrix")
var setShaderValueTexture = wasm.Proc("SetShaderValueTexture")
var unloadShader = wasm.Proc("UnloadShader")
var getMouseRay = wasm.Func[Ray]("GetMouseRay")
var getScreenToWorldRay = wasm.Func[Ray]("GetScreenToWorldRay")
var getScreenToWorldRayEx = wasm.Func[Ray]("GetScreenToWorldRayEx")
var getCameraMatrix = wasm.Func[Matrix]("GetCameraMatrix")
var getCameraMatrix2D = wasm.Func[Matrix]("GetCameraMatrix2D")
var getWorldToScreen = wasm.Func[Vector2]("GetWorldToScreen")
var getScreenToWorld2D = wasm.Func[Vector2]("GetScreenToWorld2D")
var getWorldToScreenEx = wasm.Func[Vector2]("GetWorldToScreenEx")
var getWorldToScreen2D = wasm.Func[Vector2]("GetWorldToScreen2D")
var setTargetFPS = wasm.Proc("SetTargetFPS")
var getFrameTime = wasm.Func[float32]("GetFrameTime")
var getTime = wasm.Func[float64]("GetTime")
var getFPS = wasm.Func[int32]("GetFPS")
var swapScreenBuffer = wasm.Proc("SwapScreenBuffer")
var pollInputEvents = wasm.Proc("PollInputEvents")
var waitTime = wasm.Proc("WaitTime")
var setRandomSeed = wasm.Proc("SetRandomSeed")
var getRandomValue = wasm.Func[int32]("GetRandomValue")
var loadRandomSequence = wasm.Func[[]int32]("LoadRandomSequence")
var unloadRandomSequence = wasm.Proc("UnloadRandomSequence")
var takeScreenshot = wasm.Proc("TakeScreenshot")
var setConfigFlags = wasm.Proc("SetConfigFlags")
var openURL = wasm.Proc("OpenURL")
var traceLog = wasm.Proc("TraceLog")
var setTraceLogLevel = wasm.Proc("SetTraceLogLevel")
var memAlloc = wasm.Func[unsafe.Pointer]("MemAlloc")
var memRealloc = wasm.Func[unsafe.Pointer]("MemRealloc")
var memFree = wasm.Proc("MemFree")
var isFileDropped = wasm.Func[bool]("IsFileDropped")
var loadDroppedFiles = wasm.Func[[]string]("LoadDroppedFiles")
var unloadDroppedFiles = wasm.Proc("UnloadDroppedFiles")
var loadAutomationEventList = wasm.Func[AutomationEventList]("LoadAutomationEventList")
var unloadAutomationEventList = wasm.Proc("UnloadAutomationEventList")
var exportAutomationEventList = wasm.Func[bool]("ExportAutomationEventList")
var setAutomationEventList = wasm.Proc("SetAutomationEventList")
var setAutomationEventBaseFrame = wasm.Proc("SetAutomationEventBaseFrame")
var startAutomationEventRecording = wasm.Proc("StartAutomationEventRecording")
var stopAutomationEventRecording = wasm.Proc("StopAutomationEventRecording")
var playAutomationEvent = wasm.Proc("PlayAutomationEvent")
var isKeyPressed = wasm.Func[bool]("IsKeyPressed")
var isKeyPressedRepeat = wasm.Func[bool]("IsKeyPressedRepeat")
var isKeyDown = wasm.Func[bool]("IsKeyDown")
var isKeyReleased = wasm.Func[bool]("IsKeyReleased")
var isKeyUp = wasm.Func[bool]("IsKeyUp")
var getKeyPressed = wasm.Func[int32]("GetKeyPressed")
var getCharPressed = wasm.Func[int32]("GetCharPressed")
var setExitKey = wasm.Proc("SetExitKey")
var isGamepadAvailable = wasm.Func[bool]("IsGamepadAvailable")
var getGamepadName = wasm.Func[string]("GetGamepadName")
var isGamepadButtonPressed = wasm.Func[bool]("IsGamepadButtonPressed")
var isGamepadButtonDown = wasm.Func[bool]("IsGamepadButtonDown")
var isGamepadButtonReleased = wasm.Func[bool]("IsGamepadButtonReleased")
var isGamepadButtonUp = wasm.Func[bool]("IsGamepadButtonUp")
var getGamepadButtonPressed = wasm.Func[int32]("GetGamepadButtonPressed")
var getGamepadAxisCount = wasm.Func[int32]("GetGamepadAxisCount")
var getGamepadAxisMovement = wasm.Func[float32]("GetGamepadAxisMovement")
var setGamepadMappings = wasm.Func[int32]("SetGamepadMappings")
var setGamepadVibration = wasm.Proc("SetGamepadVibration")
var isMouseButtonPressed = wasm.Func[bool]("IsMouseButtonPressed")
var isMouseButtonDown = wasm.Func[bool]("IsMouseButtonDown")
var isMouseButtonReleased = wasm.Func[bool]("IsMouseButtonReleased")
var isMouseButtonUp = wasm.Func[bool]("IsMouseButtonUp")
var getMouseX = wasm.Func[int32]("GetMouseX")
var getMouseY = wasm.Func[int32]("GetMouseY")
var getMousePosition = wasm.Func[Vector2]("GetMousePosition")
var getMouseDelta = wasm.Func[Vector2]("GetMouseDelta")
var setMousePosition = wasm.Proc("SetMousePosition")
var setMouseOffset = wasm.Proc("SetMouseOffset")
var setMouseScale = wasm.Proc("SetMouseScale")
var getMouseWheelMove = wasm.Func[float32]("GetMouseWheelMove")
var getMouseWheelMoveV = wasm.Func[Vector2]("GetMouseWheelMoveV")
var setMouseCursor = wasm.Proc("SetMouseCursor")
var getTouchX = wasm.Func[int32]("GetTouchX")
var getTouchY = wasm.Func[int32]("GetTouchY")
var getTouchPosition = wasm.Func[Vector2]("GetTouchPosition")
var getTouchPointId = wasm.Func[int32]("GetTouchPointId")
var getTouchPointCount = wasm.Func[int32]("GetTouchPointCount")
var setGesturesEnabled = wasm.Proc("SetGesturesEnabled")
var isGestureDetected = wasm.Func[bool]("IsGestureDetected")
var getGestureDetected = wasm.Func[Gestures]("GetGestureDetected")
var getGestureHoldDuration = wasm.Func[float32]("GetGestureHoldDuration")
var getGestureDragVector = wasm.Func[Vector2]("GetGestureDragVector")
var getGestureDragAngle = wasm.Func[float32]("GetGestureDragAngle")
var getGesturePinchVector = wasm.Func[Vector2]("GetGesturePinchVector")
var getGesturePinchAngle = wasm.Func[float32]("GetGesturePinchAngle")
var setShapesTexture = wasm.Proc("SetShapesTexture")
var getShapesTexture = wasm.Func[Texture2D]("GetShapesTexture")
var getShapesTextureRectangle = wasm.Func[Rectangle]("GetShapesTextureRectangle")
var drawPixel = wasm.Proc("DrawPixel")
var drawPixelV = wasm.Proc("DrawPixelV")
var drawLine = wasm.Proc("DrawLine")
var drawLineV = wasm.Proc("DrawLineV")
var drawLineEx = wasm.Proc("DrawLineEx")
var drawLineStrip = wasm.Proc("DrawLineStrip")
var drawLineBezier = wasm.Proc("DrawLineBezier")
var drawCircle = wasm.Proc("DrawCircle")
var drawCircleSector = wasm.Proc("DrawCircleSector")
var drawCircleSectorLines = wasm.Proc("DrawCircleSectorLines")
var drawCircleGradient = wasm.Proc("DrawCircleGradient")
var drawCircleV = wasm.Proc("DrawCircleV")
var drawCircleLines = wasm.Proc("DrawCircleLines")
var drawCircleLinesV = wasm.Proc("DrawCircleLinesV")
var drawEllipse = wasm.Proc("DrawEllipse")
var drawEllipseLines = wasm.Proc("DrawEllipseLines")
var drawRing = wasm.Proc("DrawRing")
var drawRingLines = wasm.Proc("DrawRingLines")
var drawRectangle = wasm.Proc("DrawRectangle")
var drawRectangleV = wasm.Proc("DrawRectangleV")
var drawRectangleRec = wasm.Proc("DrawRectangleRec")
var drawRectanglePro = wasm.Proc("DrawRectanglePro")
var drawRectangleGradientV = wasm.Proc("DrawRectangleGradientV")
var drawRectangleGradientH = wasm.Proc("DrawRectangleGradientH")
var drawRectangleGradientEx = wasm.Proc("DrawRectangleGradientEx")
var drawRectangleLines = wasm.Proc("DrawRectangleLines")
var drawRectangleLinesEx = wasm.Proc("DrawRectangleLinesEx")
var drawRectangleRounded = wasm.Proc("DrawRectangleRounded")
var drawRectangleRoundedLines = wasm.Proc("DrawRectangleRoundedLines")
var drawRectangleRoundedLinesEx = wasm.Proc("DrawRectangleRoundedLinesEx")
var drawTriangle = wasm.Proc("DrawTriangle")
var drawTriangleLines = wasm.Proc("DrawTriangleLines")
var drawTriangleFan = wasm.Proc("DrawTriangleFan")
var drawTriangleStrip = wasm.Proc("DrawTriangleStrip")
var drawPoly = wasm.Proc("DrawPoly")
var drawPolyLines = wasm.Proc("DrawPolyLines")
var drawPolyLinesEx = wasm.Proc("DrawPolyLinesEx")
var drawSplineLinear = wasm.Proc("DrawSplineLinear")
var drawSplineBasis = wasm.Proc("DrawSplineBasis")
var drawSplineCatmullRom = wasm.Proc("DrawSplineCatmullRom")
var drawSplineBezierQuadratic = wasm.Proc("DrawSplineBezierQuadratic")
var drawSplineBezierCubic = wasm.Proc("DrawSplineBezierCubic")
var drawSplineSegmentLinear = wasm.Proc("DrawSplineSegmentLinear")
var drawSplineSegmentBasis = wasm.Proc("DrawSplineSegmentBasis")
var drawSplineSegmentCatmullRom = wasm.Proc("DrawSplineSegmentCatmullRom")
var drawSplineSegmentBezierQuadratic = wasm.Proc("DrawSplineSegmentBezierQuadratic")
var drawSplineSegmentBezierCubic = wasm.Proc("DrawSplineSegmentBezierCubic")
var getSplinePointLinear = wasm.Func[Vector2]("GetSplinePointLinear")
var getSplinePointBasis = wasm.Func[Vector2]("GetSplinePointBasis")
var getSplinePointCatmullRom = wasm.Func[Vector2]("GetSplinePointCatmullRom")
var getSplinePointBezierQuad = wasm.Func[Vector2]("GetSplinePointBezierQuad")
var getSplinePointBezierCubic = wasm.Func[Vector2]("GetSplinePointBezierCubic")
var checkCollisionRecs = wasm.Func[bool]("CheckCollisionRecs")
var checkCollisionCircles = wasm.Func[bool]("CheckCollisionCircles")
var checkCollisionCircleRec = wasm.Func[bool]("CheckCollisionCircleRec")
var checkCollisionCircleLine = wasm.Func[bool]("CheckCollisionCircleLine")
var checkCollisionPointRec = wasm.Func[bool]("CheckCollisionPointRec")
var checkCollisionPointCircle = wasm.Func[bool]("CheckCollisionPointCircle")
var checkCollisionPointTriangle = wasm.Func[bool]("CheckCollisionPointTriangle")
var checkCollisionPointPoly = wasm.Func[bool]("CheckCollisionPointPoly")
var checkCollisionLines = wasm.Func[bool]("CheckCollisionLines")
var checkCollisionPointLine = wasm.Func[bool]("CheckCollisionPointLine")
var getCollisionRec = wasm.Func[Rectangle]("GetCollisionRec")
var loadImage = wasm.Func[*Image]("LoadImage")
var loadImageRaw = wasm.Func[*Image]("LoadImageRaw")
var loadImageAnim = wasm.Func[*Image]("LoadImageAnim")
var loadImageAnimFromMemory = wasm.Func[*Image]("LoadImageAnimFromMemory")
var loadImageFromMemory = wasm.Func[*Image]("LoadImageFromMemory")
var loadImageFromTexture = wasm.Func[*Image]("LoadImageFromTexture")
var loadImageFromScreen = wasm.Func[*Image]("LoadImageFromScreen")
var isImageValid = wasm.Func[bool]("IsImageValid")
var unloadImage = wasm.Proc("UnloadImage")
var exportImage = wasm.Func[bool]("ExportImage")
var exportImageToMemory = wasm.Func[[]byte]("ExportImageToMemory")
var genImageColor = wasm.Func[*Image]("GenImageColor")
var genImageGradientLinear = wasm.Func[*Image]("GenImageGradientLinear")
var genImageGradientRadial = wasm.Func[*Image]("GenImageGradientRadial")
var genImageGradientSquare = wasm.Func[*Image]("GenImageGradientSquare")
var genImageChecked = wasm.Func[*Image]("GenImageChecked")
var genImageWhiteNoise = wasm.Func[*Image]("GenImageWhiteNoise")
var genImagePerlinNoise = wasm.Func[*Image]("GenImagePerlinNoise")
var genImageCellular = wasm.Func[*Image]("GenImageCellular")
var genImageText = wasm.Func[Image]("GenImageText")
var imageCopy = wasm.Func[*Image]("ImageCopy")
var imageFromImage = wasm.Func[Image]("ImageFromImage")
var imageFromChannel = wasm.Func[Image]("ImageFromChannel")
var imageText = wasm.Func[Image]("ImageText")
var imageTextEx = wasm.Func[Image]("ImageTextEx")
var imageFormat = wasm.Proc("ImageFormat")
var imageToPOT = wasm.Proc("ImageToPOT")
var imageCrop = wasm.Proc("ImageCrop")
var imageAlphaCrop = wasm.Proc("ImageAlphaCrop")
var imageAlphaClear = wasm.Proc("ImageAlphaClear")
var imageAlphaMask = wasm.Proc("ImageAlphaMask")
var imageAlphaPremultiply = wasm.Proc("ImageAlphaPremultiply")
var imageBlurGaussian = wasm.Proc("ImageBlurGaussian")
var imageKernelConvolution = wasm.Proc("ImageKernelConvolution")
var imageResize = wasm.Proc("ImageResize")
var imageResizeNN = wasm.Proc("ImageResizeNN")
var imageResizeCanvas = wasm.Proc("ImageResizeCanvas")
var imageMipmaps = wasm.Proc("ImageMipmaps")
var imageDither = wasm.Proc("ImageDither")
var imageFlipVertical = wasm.Proc("ImageFlipVertical")
var imageFlipHorizontal = wasm.Proc("ImageFlipHorizontal")
var imageRotate = wasm.Proc("ImageRotate")
var imageRotateCW = wasm.Proc("ImageRotateCW")
var imageRotateCCW = wasm.Proc("ImageRotateCCW")
var imageColorTint = wasm.Proc("ImageColorTint")
var imageColorInvert = wasm.Proc("ImageColorInvert")
var imageColorGrayscale = wasm.Proc("ImageColorGrayscale")
var imageColorContrast = wasm.Proc("ImageColorContrast")
var imageColorBrightness = wasm.Proc("ImageColorBrightness")
var imageColorReplace = wasm.Proc("ImageColorReplace")
var loadImageColors = wasm.Func[[]color.RGBA]("LoadImageColors")
var loadImagePalette = wasm.Func[[]color.RGBA]("LoadImagePalette")
var unloadImageColors = wasm.Proc("UnloadImageColors")
var unloadImagePalette = wasm.Proc("UnloadImagePalette")
var getImageAlphaBorder = wasm.Func[Rectangle]("GetImageAlphaBorder")
var getImageColor = wasm.Func[color.RGBA]("GetImageColor")
var imageClearBackground = wasm.Proc("ImageClearBackground")
var imageDrawPixel = wasm.Proc("ImageDrawPixel")
var imageDrawPixelV = wasm.Proc("ImageDrawPixelV")
var imageDrawLine = wasm.Proc("ImageDrawLine")
var imageDrawLineV = wasm.Proc("ImageDrawLineV")
var imageDrawLineEx = wasm.Proc("ImageDrawLineEx")
var imageDrawCircle = wasm.Proc("ImageDrawCircle")
var imageDrawCircleV = wasm.Proc("ImageDrawCircleV")
var imageDrawCircleLines = wasm.Proc("ImageDrawCircleLines")
var imageDrawCircleLinesV = wasm.Proc("ImageDrawCircleLinesV")
var imageDrawRectangle = wasm.Proc("ImageDrawRectangle")
var imageDrawRectangleV = wasm.Proc("ImageDrawRectangleV")
var imageDrawRectangleRec = wasm.Proc("ImageDrawRectangleRec")
var imageDrawRectangleLines = wasm.Proc("ImageDrawRectangleLines")
var imageDrawTriangle = wasm.Proc("ImageDrawTriangle")
var imageDrawTriangleEx = wasm.Proc("ImageDrawTriangleEx")
var imageDrawTriangleLines = wasm.Proc("ImageDrawTriangleLines")
var imageDrawTriangleFan = wasm.Proc("ImageDrawTriangleFan")
var imageDrawTriangleStrip = wasm.Proc("ImageDrawTriangleStrip")
var imageDraw = wasm.Proc("ImageDraw")
var imageDrawText = wasm.Proc("ImageDrawText")
var imageDrawTextEx = wasm.Proc("ImageDrawTextEx")
var loadTexture = wasm.Func[Texture2D]("LoadTexture")
var loadTextureFromImage = wasm.Func[Texture2D]("LoadTextureFromImage")
var loadTextureCubemap = wasm.Func[Texture2D]("LoadTextureCubemap")
var loadRenderTexture = wasm.Func[RenderTexture2D]("LoadRenderTexture")
var isTextureValid = wasm.Func[bool]("IsTextureValid")
var unloadTexture = wasm.Proc("UnloadTexture")
var isRenderTextureValid = wasm.Func[bool]("IsRenderTextureValid")
var unloadRenderTexture = wasm.Proc("UnloadRenderTexture")
var updateTexture = wasm.Proc("UpdateTexture")
var updateTextureRec = wasm.Proc("UpdateTextureRec")
var genTextureMipmaps = wasm.Proc("GenTextureMipmaps")
var setTextureFilter = wasm.Proc("SetTextureFilter")
var setTextureWrap = wasm.Proc("SetTextureWrap")
var drawTexture = wasm.Proc("DrawTexture")
var drawTextureV = wasm.Proc("DrawTextureV")
var drawTextureEx = wasm.Proc("DrawTextureEx")
var drawTextureRec = wasm.Proc("DrawTextureRec")
var drawTexturePro = wasm.Proc("DrawTexturePro")
var drawTextureNPatch = wasm.Proc("DrawTextureNPatch")
var fade = wasm.Func[color.RGBA]("Fade")
var colorToInt = wasm.Func[int32]("ColorToInt")
var colorNormalize = wasm.Func[Vector4]("ColorNormalize")
var colorFromNormalized = wasm.Func[color.RGBA]("ColorFromNormalized")
var colorToHSV = wasm.Func[Vector3]("ColorToHSV")
var colorFromHSV = wasm.Func[color.RGBA]("ColorFromHSV")
var colorTint = wasm.Func[color.RGBA]("ColorTint")
var colorBrightness = wasm.Func[color.RGBA]("ColorBrightness")
var colorContrast = wasm.Func[color.RGBA]("ColorContrast")
var colorAlpha = wasm.Func[color.RGBA]("ColorAlpha")
var colorAlphaBlend = wasm.Func[color.RGBA]("ColorAlphaBlend")
var colorLerp = wasm.Func[color.RGBA]("ColorLerp")
var getColor = wasm.Func[color.RGBA]("GetColor")
var getPixelColor = wasm.Func[color.RGBA]("GetPixelColor")
var setPixelColor = wasm.Proc("SetPixelColor")
var getPixelDataSize = wasm.Func[int32]("GetPixelDataSize")
var getFontDefault = wasm.Func[Font]("GetFontDefault")
var loadFont = wasm.Func[Font]("LoadFont")
var loadFontFromImage = wasm.Func[Font]("LoadFontFromImage")
var loadFontFromMemory = wasm.Func[Font]("LoadFontFromMemory")
var isFontValid = wasm.Func[bool]("IsFontValid")
var loadFontData = wasm.Func[[]GlyphInfo]("LoadFontData")
var genImageFontAtlas = wasm.Func[Image]("GenImageFontAtlas")
var unloadFontData = wasm.Proc("UnloadFontData")
var unloadFont = wasm.Proc("UnloadFont")
var drawFPS = wasm.Proc("DrawFPS")
var drawText = wasm.Proc("DrawText")
var drawTextEx = wasm.Proc("DrawTextEx")
var drawTextPro = wasm.Proc("DrawTextPro")
var drawTextCodepoint = wasm.Proc("DrawTextCodepoint")
var drawTextCodepoints = wasm.Proc("DrawTextCodepoints")
var setTextLineSpacing = wasm.Proc("SetTextLineSpacing")
var measureText = wasm.Func[int32]("MeasureText")
var measureTextEx = wasm.Func[Vector2]("MeasureTextEx")
var getGlyphIndex = wasm.Func[int32]("GetGlyphIndex")
var getGlyphInfo = wasm.Func[GlyphInfo]("GetGlyphInfo")
var getGlyphAtlasRec = wasm.Func[Rectangle]("GetGlyphAtlasRec")
var drawLine3D = wasm.Proc("DrawLine3D")
var drawPoint3D = wasm.Proc("DrawPoint3D")
var drawCircle3D = wasm.Proc("DrawCircle3D")
var drawTriangle3D = wasm.Proc("DrawTriangle3D")
var drawTriangleStrip3D = wasm.Proc("DrawTriangleStrip3D")
var drawCube = wasm.Proc("DrawCube")
var drawCubeV = wasm.Proc("DrawCubeV")
var drawCubeWires = wasm.Proc("DrawCubeWires")
var drawCubeWiresV = wasm.Proc("DrawCubeWiresV")
var drawSphere = wasm.Proc("DrawSphere")
var drawSphereEx = wasm.Proc("DrawSphereEx")
var drawSphereWires = wasm.Proc("DrawSphereWires")
var drawCylinder = wasm.Proc("DrawCylinder")
var drawCylinderEx = wasm.Proc("DrawCylinderEx")
var drawCylinderWires = wasm.Proc("DrawCylinderWires")
var drawCylinderWiresEx = wasm.Proc("DrawCylinderWiresEx")
var drawCapsule = wasm.Proc("DrawCapsule")
var drawCapsuleWires = wasm.Proc("DrawCapsuleWires")
var drawPlane = wasm.Proc("DrawPlane")
var drawRay = wasm.Proc("DrawRay")
var drawGrid = wasm.Proc("DrawGrid")
var loadModel = wasm.Func[Model]("LoadModel")
var loadModelFromMesh = wasm.Func[Model]("LoadModelFromMesh")
var isModelValid = wasm.Func[bool]("IsModelValid")
var unloadModel = wasm.Proc("UnloadModel")
var getModelBoundingBox = wasm.Func[BoundingBox]("GetModelBoundingBox")
var drawModel = wasm.Proc("DrawModel")
var drawModelEx = wasm.Proc("DrawModelEx")
var drawModelWires = wasm.Proc("DrawModelWires")
var drawModelWiresEx = wasm.Proc("DrawModelWiresEx")
var drawModelPoints = wasm.Proc("DrawModelPoints")
var drawModelPointsEx = wasm.Proc("DrawModelPointsEx")
var drawBoundingBox = wasm.Proc("DrawBoundingBox")
var drawBillboard = wasm.Proc("DrawBillboard")
var drawBillboardRec = wasm.Proc("DrawBillboardRec")
var drawBillboardPro = wasm.Proc("DrawBillboardPro")
var uploadMesh = wasm.Proc("UploadMesh")
var updateMeshBuffer = wasm.Proc("UpdateMeshBuffer")
var unloadMesh = wasm.Proc("UnloadMesh")
var drawMesh = wasm.Proc("DrawMesh")
var drawMeshInstanced = wasm.Proc("DrawMeshInstanced")
var exportMesh = wasm.Func[bool]("ExportMesh")
var getMeshBoundingBox = wasm.Func[BoundingBox]("GetMeshBoundingBox")
var genMeshTangents = wasm.Proc("GenMeshTangents")
var genMeshPoly = wasm.Func[Mesh]("GenMeshPoly")
var genMeshPlane = wasm.Func[Mesh]("GenMeshPlane")
var genMeshCube = wasm.Func[Mesh]("GenMeshCube")
var genMeshSphere = wasm.Func[Mesh]("GenMeshSphere")
var genMeshHemiSphere = wasm.Func[Mesh]("GenMeshHemiSphere")
var genMeshCylinder = wasm.Func[Mesh]("GenMeshCylinder")
var genMeshCone = wasm.Func[Mesh]("GenMeshCone")
var genMeshTorus = wasm.Func[Mesh]("GenMeshTorus")
var genMeshKnot = wasm.Func[Mesh]("GenMeshKnot")
var genMeshHeightmap = wasm.Func[Mesh]("GenMeshHeightmap")
var genMeshCubicmap = wasm.Func[Mesh]("GenMeshCubicmap")
var loadMaterials = wasm.Func[[]Material]("LoadMaterials")
var loadMaterialDefault = wasm.Func[Material]("LoadMaterialDefault")
var isMaterialValid = wasm.Func[bool]("IsMaterialValid")
var unloadMaterial = wasm.Proc("UnloadMaterial")
var setMaterialTexture = wasm.Proc("SetMaterialTexture")
var setModelMeshMaterial = wasm.Proc("SetModelMeshMaterial")
var loadModelAnimations = wasm.Func[[]ModelAnimation]("LoadModelAnimations")
var updateModelAnimation = wasm.Proc("UpdateModelAnimation")
var updateModelAnimationBones = wasm.Proc("UpdateModelAnimationBones")
var unloadModelAnimation = wasm.Proc("UnloadModelAnimation")
var unloadModelAnimations = wasm.Proc("UnloadModelAnimations")
var isModelAnimationValid = wasm.Func[bool]("IsModelAnimationValid")
var checkCollisionSpheres = wasm.Func[bool]("CheckCollisionSpheres")
var checkCollisionBoxes = wasm.Func[bool]("CheckCollisionBoxes")
var checkCollisionBoxSphere = wasm.Func[bool]("CheckCollisionBoxSphere")
var getRayCollisionSphere = wasm.Func[RayCollision]("GetRayCollisionSphere")
var getRayCollisionBox = wasm.Func[RayCollision]("GetRayCollisionBox")
var getRayCollisionMesh = wasm.Func[RayCollision]("GetRayCollisionMesh")
var getRayCollisionTriangle = wasm.Func[RayCollision]("GetRayCollisionTriangle")
var getRayCollisionQuad = wasm.Func[RayCollision]("GetRayCollisionQuad")
var initAudioDevice = wasm.Proc("InitAudioDevice")
var closeAudioDevice = wasm.Proc("CloseAudioDevice")
var isAudioDeviceReady = wasm.Func[bool]("IsAudioDeviceReady")
var setMasterVolume = wasm.Proc("SetMasterVolume")
var getMasterVolume = wasm.Func[float32]("GetMasterVolume")
var loadWave = wasm.Func[Wave]("LoadWave")
var loadWaveFromMemory = wasm.Func[Wave]("LoadWaveFromMemory")
var isWaveValid = wasm.Func[bool]("IsWaveValid")
var loadSound = wasm.Func[Sound]("LoadSound")
var loadSoundFromWave = wasm.Func[Sound]("LoadSoundFromWave")
var loadSoundAlias = wasm.Func[Sound]("LoadSoundAlias")
var isSoundValid = wasm.Func[bool]("IsSoundValid")
var updateSound = wasm.Proc("UpdateSound")
var unloadWave = wasm.Proc("UnloadWave")
var unloadSound = wasm.Proc("UnloadSound")
var unloadSoundAlias = wasm.Proc("UnloadSoundAlias")
var exportWave = wasm.Func[bool]("ExportWave")
var playSound = wasm.Proc("PlaySound")
var stopSound = wasm.Proc("StopSound")
var pauseSound = wasm.Proc("PauseSound")
var resumeSound = wasm.Proc("ResumeSound")
var isSoundPlaying = wasm.Func[bool]("IsSoundPlaying")
var setSoundVolume = wasm.Proc("SetSoundVolume")
var setSoundPitch = wasm.Proc("SetSoundPitch")
var setSoundPan = wasm.Proc("SetSoundPan")
var waveCopy = wasm.Func[Wave]("WaveCopy")
var waveCrop = wasm.Proc("WaveCrop")
var waveFormat = wasm.Proc("WaveFormat")
var loadWaveSamples = wasm.Func[[]float32]("LoadWaveSamples")
var unloadWaveSamples = wasm.Proc("UnloadWaveSamples")
var loadMusicStream = wasm.Func[Music]("LoadMusicStream")
var loadMusicStreamFromMemory = wasm.Func[Music]("LoadMusicStreamFromMemory")
var isMusicValid = wasm.Func[bool]("IsMusicValid")
var unloadMusicStream = wasm.Proc("UnloadMusicStream")
var playMusicStream = wasm.Proc("PlayMusicStream")
var isMusicStreamPlaying = wasm.Func[bool]("IsMusicStreamPlaying")
var updateMusicStream = wasm.Proc("UpdateMusicStream")
var stopMusicStream = wasm.Proc("StopMusicStream")
var pauseMusicStream = wasm.Proc("PauseMusicStream")
var resumeMusicStream = wasm.Proc("ResumeMusicStream")
var seekMusicStream = wasm.Proc("SeekMusicStream")
var setMusicVolume = wasm.Proc("SetMusicVolume")
var setMusicPitch = wasm.Proc("SetMusicPitch")
var setMusicPan = wasm.Proc("SetMusicPan")
var getMusicTimeLength = wasm.Func[float32]("GetMusicTimeLength")
var getMusicTimePlayed = wasm.Func[float32]("GetMusicTimePlayed")
var loadAudioStream = wasm.Func[AudioStream]("LoadAudioStream")
var isAudioStreamValid = wasm.Func[bool]("IsAudioStreamValid")
var unloadAudioStream = wasm.Proc("UnloadAudioStream")
var updateAudioStream = wasm.Proc("UpdateAudioStream")
var isAudioStreamProcessed = wasm.Func[bool]("IsAudioStreamProcessed")
var playAudioStream = wasm.Proc("PlayAudioStream")
var pauseAudioStream = wasm.Proc("PauseAudioStream")
var resumeAudioStream = wasm.Proc("ResumeAudioStream")
var isAudioStreamPlaying = wasm.Func[bool]("IsAudioStreamPlaying")
var stopAudioStream = wasm.Proc("StopAudioStream")
var setAudioStreamVolume = wasm.Proc("SetAudioStreamVolume")
var setAudioStreamPitch = wasm.Proc("SetAudioStreamPitch")
var setAudioStreamPan = wasm.Proc("SetAudioStreamPan")
var setAudioStreamBufferSizeDefault = wasm.Proc("SetAudioStreamBufferSizeDefault")
var setAudioStreamCallback = wasm.Proc("SetAudioStreamCallback")
var attachAudioStreamProcessor = wasm.Proc("AttachAudioStreamProcessor")
var detachAudioStreamProcessor = wasm.Proc("DetachAudioStreamProcessor")
var attachAudioMixedProcessor = wasm.Proc("AttachAudioMixedProcessor")
var detachAudioMixedProcessor = wasm.Proc("DetachAudioMixedProcessor")
var setCallbackFunc = wasm.Proc("SetCallbackFunc")
var newImageFromImage = wasm.Func[*Image]("NewImageFromImage")
var toImage = wasm.Func[image.Image]("ToImage")
var openAsset = wasm.Func[Asset]("OpenAsset")
var homeDir = wasm.Func[string]("HomeDir")

// CloseWindow - Close window and unload OpenGL context
func CloseWindow() {
	_, fl := closeWindow.Call()
	wasm.Free(fl...)
}

// IsWindowReady - Check if window has been initialized successfully
func IsWindowReady() bool {
	ret, fl := isWindowReady.Call()
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsWindowFullscreen - Check if window is currently fullscreen
func IsWindowFullscreen() bool {
	ret, fl := isWindowFullscreen.Call()
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsWindowHidden - Check if window is currently hidden (only PLATFORM_DESKTOP)
func IsWindowHidden() bool {
	var zero bool
	return zero
}

// IsWindowMinimized - Check if window is currently minimized (only PLATFORM_DESKTOP)
func IsWindowMinimized() bool {
	var zero bool
	return zero
}

// IsWindowMaximized - Check if window is currently maximized (only PLATFORM_DESKTOP)
func IsWindowMaximized() bool {
	var zero bool
	return zero
}

// IsWindowFocused - Check if window is currently focused (only PLATFORM_DESKTOP)
func IsWindowFocused() bool {
	var zero bool
	return zero
}

// IsWindowResized - Check if window has been resized last frame
func IsWindowResized() bool {
	ret, fl := isWindowResized.Call()
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsWindowState - Check if one specific window flag is enabled
func IsWindowState(flag uint32) bool {
	ret, fl := isWindowState.Call(flag)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// SetWindowState - Set window configuration state using flags (only PLATFORM_DESKTOP)
func SetWindowState(flags uint32) {
}

// ClearWindowState - Clear window configuration state flags
func ClearWindowState(flags uint32) {
	_, fl := clearWindowState.Call(flags)
	wasm.Free(fl...)
}

// ToggleFullscreen - Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP)
func ToggleFullscreen() {
}

// ToggleBorderlessWindowed - Toggle window state: borderless windowed (only PLATFORM_DESKTOP)
func ToggleBorderlessWindowed() {
}

// MaximizeWindow - Set window state: maximized, if resizable (only PLATFORM_DESKTOP)
func MaximizeWindow() {
}

// MinimizeWindow - Set window state: minimized, if resizable (only PLATFORM_DESKTOP)
func MinimizeWindow() {
}

// RestoreWindow - Set window state: not minimized/maximized (only PLATFORM_DESKTOP)
func RestoreWindow() {
}

// SetWindowIcon - Set icon for window (single image, RGBA 32bit, only PLATFORM_DESKTOP)
func SetWindowIcon(image Image) {
	_, fl := setWindowIcon.Call(wasm.Struct(image))
	wasm.Free(fl...)
}

// SetWindowIcons - Set icon for window (multiple images, RGBA 32bit, only PLATFORM_DESKTOP)
func SetWindowIcons(images []Image, count int32) {
	_, fl := setWindowIcons.Call(images, count)
	wasm.Free(fl...)
}

// SetWindowTitle - Set title for window (only PLATFORM_DESKTOP and PLATFORM_WEB)
func SetWindowTitle(title string) {
	_, fl := setWindowTitle.Call(title)
	wasm.Free(fl...)
}

// SetWindowPosition - Set window position on screen (only PLATFORM_DESKTOP)
func SetWindowPosition(x int, y int) {
}

// SetWindowMonitor - Set monitor for the current window
func SetWindowMonitor(monitor int) {
	_, fl := setWindowMonitor.Call(monitor)
	wasm.Free(fl...)
}

// SetWindowMinSize - Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)
func SetWindowMinSize(width int, height int) {
	_, fl := setWindowMinSize.Call(width, height)
	wasm.Free(fl...)
}

// SetWindowMaxSize - Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE)
func SetWindowMaxSize(width int, height int) {
	_, fl := setWindowMaxSize.Call(width, height)
	wasm.Free(fl...)
}

// SetWindowSize - Set window dimensions
func SetWindowSize(width int, height int) {
	_, fl := setWindowSize.Call(width, height)
	wasm.Free(fl...)
}

// SetWindowOpacity - Set window opacity [0.0f..1.0f] (only PLATFORM_DESKTOP)
func SetWindowOpacity(opacity float32) {
}

// SetWindowFocused - Set window focused (only PLATFORM_DESKTOP)
func SetWindowFocused() {
}

// GetWindowHandle - Get native window handle
func GetWindowHandle() unsafe.Pointer {
	var zero unsafe.Pointer
	return zero
}

// GetScreenWidth - Get current screen width
func GetScreenWidth() int {
	ret, fl := getScreenWidth.Call()
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetScreenHeight - Get current screen height
func GetScreenHeight() int {
	ret, fl := getScreenHeight.Call()
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetRenderWidth - Get current render width (it considers HiDPI)
func GetRenderWidth() int {
	ret, fl := getRenderWidth.Call()
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetRenderHeight - Get current render height (it considers HiDPI)
func GetRenderHeight() int {
	ret, fl := getRenderHeight.Call()
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorCount - Get number of connected monitors
func GetMonitorCount() int {
	ret, fl := getMonitorCount.Call()
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetCurrentMonitor - Get current monitor where window is placed
func GetCurrentMonitor() int {
	ret, fl := getCurrentMonitor.Call()
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorPosition - Get specified monitor position
func GetMonitorPosition(monitor int) Vector2 {
	ret, fl := getMonitorPosition.Call(monitor)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorWidth - Get specified monitor width (current video mode used by monitor)
func GetMonitorWidth(monitor int) int {
	ret, fl := getMonitorWidth.Call(monitor)
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorHeight - Get specified monitor height (current video mode used by monitor)
func GetMonitorHeight(monitor int) int {
	ret, fl := getMonitorHeight.Call(monitor)
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorPhysicalWidth - Get specified monitor physical width in millimetres
func GetMonitorPhysicalWidth(monitor int) int {
	ret, fl := getMonitorPhysicalWidth.Call(monitor)
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorPhysicalHeight - Get specified monitor physical height in millimetres
func GetMonitorPhysicalHeight(monitor int) int {
	ret, fl := getMonitorPhysicalHeight.Call(monitor)
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorRefreshRate - Get specified monitor refresh rate
func GetMonitorRefreshRate(monitor int) int {
	ret, fl := getMonitorRefreshRate.Call(monitor)
	v := wasm.Numeric[int](ret)
	wasm.Free(fl...)
	return v
}

// GetWindowPosition - Get window position XY on monitor
func GetWindowPosition() Vector2 {
	ret, fl := getWindowPosition.Call()
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetWindowScaleDPI - Get window scale DPI factor
func GetWindowScaleDPI() Vector2 {
	ret, fl := getWindowScaleDPI.Call()
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetMonitorName - Get the human-readable, UTF-8 encoded name of the specified monitor
func GetMonitorName(monitor int) string {
	ret, fl := getMonitorName.Call(monitor)
	v := wasm.Numeric[string](ret)
	wasm.Free(fl...)
	return v
}

// SetClipboardText - Set clipboard text content
func SetClipboardText(text string) {
	_, fl := setClipboardText.Call(text)
	wasm.Free(fl...)
}

// GetClipboardText - Get clipboard text content
func GetClipboardText() string {
	ret, fl := getClipboardText.Call()
	v := wasm.Numeric[string](ret)
	wasm.Free(fl...)
	return v
}

// GetClipboardImage - Get clipboard image content
//
// Only works with SDL3 backend or Windows with RGFW/GLFW
func GetClipboardImage() Image {
	ret, fl := getClipboardImage.Call()
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return v
}

// EnableEventWaiting - Enable waiting for events on EndDrawing(), no automatic event polling
func EnableEventWaiting() {
	_, fl := enableEventWaiting.Call()
	wasm.Free(fl...)
}

// DisableEventWaiting - Disable waiting for events on EndDrawing(), automatic events polling
func DisableEventWaiting() {
	_, fl := disableEventWaiting.Call()
	wasm.Free(fl...)
}

// ShowCursor - Shows cursor
func ShowCursor() {
	_, fl := showCursor.Call()
	wasm.Free(fl...)
}

// HideCursor - Hides cursor
func HideCursor() {
	_, fl := hideCursor.Call()
	wasm.Free(fl...)
}

// IsCursorHidden - Check if cursor is not visible
func IsCursorHidden() bool {
	ret, fl := isCursorHidden.Call()
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// EnableCursor - Enables cursor (unlock cursor)
func EnableCursor() {
	_, fl := enableCursor.Call()
	wasm.Free(fl...)
}

// DisableCursor - Disables cursor (lock cursor)
func DisableCursor() {
	_, fl := disableCursor.Call()
	wasm.Free(fl...)
}

// IsCursorOnScreen - Check if cursor is on the screen
func IsCursorOnScreen() bool {
	ret, fl := isCursorOnScreen.Call()
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// ClearBackground - Set background color (framebuffer clear color)
func ClearBackground(col color.RGBA) {
	_, fl := clearBackground.Call(wasm.Struct(col))
	wasm.Free(fl...)
}

// BeginDrawing - Setup canvas (framebuffer) to start drawing
func BeginDrawing() {
	_, fl := beginDrawing.Call()
	wasm.Free(fl...)
}

// EndDrawing - End canvas drawing and swap buffers (double buffering)
func EndDrawing() {
	_, fl := endDrawing.Call()
	wasm.Free(fl...)
}

// BeginMode2D - Begin 2D mode with custom camera (2D)
func BeginMode2D(camera Camera2D) {
	_, fl := beginMode2D.Call(wasm.Struct(camera))
	wasm.Free(fl...)
}

// EndMode2D - Ends 2D mode with custom camera
func EndMode2D() {
	_, fl := endMode2D.Call()
	wasm.Free(fl...)
}

// BeginMode3D - Begin 3D mode with custom camera (3D)
func BeginMode3D(camera Camera3D) {
	_, fl := beginMode3D.Call(wasm.Struct(camera))
	wasm.Free(fl...)
}

// EndMode3D - Ends 3D mode and returns to default 2D orthographic mode
func EndMode3D() {
	_, fl := endMode3D.Call()
	wasm.Free(fl...)
}

// BeginTextureMode - Begin drawing to render texture
func BeginTextureMode(target RenderTexture2D) {
	_, fl := beginTextureMode.Call(wasm.Struct(target))
	wasm.Free(fl...)
}

// EndTextureMode - Ends drawing to render texture
func EndTextureMode() {
	_, fl := endTextureMode.Call()
	wasm.Free(fl...)
}

// BeginShaderMode - Begin custom shader drawing
func BeginShaderMode(shader Shader) {
	_, fl := beginShaderMode.Call(wasm.Struct(shader))
	wasm.Free(fl...)
}

// EndShaderMode - End custom shader drawing (use default shader)
func EndShaderMode() {
	_, fl := endShaderMode.Call()
	wasm.Free(fl...)
}

// BeginBlendMode - Begin blending mode (alpha, additive, multiplied, subtract, custom)
func BeginBlendMode(mode BlendMode) {
	_, fl := beginBlendMode.Call(mode)
	wasm.Free(fl...)
}

// EndBlendMode - End blending mode (reset to default: alpha blending)
func EndBlendMode() {
	_, fl := endBlendMode.Call()
	wasm.Free(fl...)
}

// BeginScissorMode - Begin scissor mode (define screen area for following drawing)
func BeginScissorMode(x int32, y int32, width int32, height int32) {
	_, fl := beginScissorMode.Call(x, y, width, height)
	wasm.Free(fl...)
}

// EndScissorMode - End scissor mode
func EndScissorMode() {
	_, fl := endScissorMode.Call()
	wasm.Free(fl...)
}

// BeginVrStereoMode - Begin stereo rendering (requires VR simulator)
func BeginVrStereoMode(config VrStereoConfig) {
	_, fl := beginVrStereoMode.Call(wasm.Struct(config))
	wasm.Free(fl...)
}

// EndVrStereoMode - End stereo rendering (requires VR simulator)
func EndVrStereoMode() {
	_, fl := endVrStereoMode.Call()
	wasm.Free(fl...)
}

// LoadVrStereoConfig - Load VR stereo config for VR simulator device parameters
func LoadVrStereoConfig(device VrDeviceInfo) VrStereoConfig {
	ret, fl := loadVrStereoConfig.Call(wasm.Struct(device))
	v := wasm.ReadStruct[VrStereoConfig](ret)
	wasm.Free(fl...)
	return v
}

// UnloadVrStereoConfig - Unload VR stereo config
func UnloadVrStereoConfig(config VrStereoConfig) {
	_, fl := unloadVrStereoConfig.Call(wasm.Struct(config))
	wasm.Free(fl...)
}

// LoadShader - Load shader from files and bind default locations
func LoadShader(vsFileName string, fsFileName string) Shader {
	ret, fl := loadShader.Call(vsFileName, fsFileName)
	v := wasm.ReadStruct[Shader](ret)
	wasm.Free(fl...)
	return v
}

// LoadShaderFromMemory - Load shader from code strings and bind default locations
func LoadShaderFromMemory(vsCode string, fsCode string) Shader {
	ret, fl := loadShaderFromMemory.Call(vsCode, fsCode)
	v := wasm.ReadStruct[Shader](ret)
	wasm.Free(fl...)
	return v
}

// IsShaderValid - Check if a shader is valid (loaded on GPU)
func IsShaderValid(shader Shader) bool {
	ret, fl := isShaderValid.Call(wasm.Struct(shader))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetShaderLocation - Get shader uniform location
func GetShaderLocation(shader Shader, uniformName string) int32 {
	ret, fl := getShaderLocation.Call(wasm.Struct(shader), uniformName)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetShaderLocationAttrib - Get shader attribute location
func GetShaderLocationAttrib(shader Shader, attribName string) int32 {
	ret, fl := getShaderLocationAttrib.Call(wasm.Struct(shader), attribName)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// SetShaderValue - Set shader uniform value
func SetShaderValue(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType) {
	_, fl := setShaderValue.Call(wasm.Struct(shader), locIndex, value, uniformType)
	wasm.Free(fl...)
}

// SetShaderValueV - Set shader uniform value vector
func SetShaderValueV(shader Shader, locIndex int32, value []float32, uniformType ShaderUniformDataType, count int32) {
	_, fl := setShaderValueV.Call(wasm.Struct(shader), locIndex, value, uniformType, count)
	wasm.Free(fl...)
}

// SetShaderValueMatrix - Set shader uniform value (matrix 4x4)
func SetShaderValueMatrix(shader Shader, locIndex int32, mat Matrix) {
	_, fl := setShaderValueMatrix.Call(wasm.Struct(shader), locIndex, wasm.Struct(mat))
	wasm.Free(fl...)
}

// SetShaderValueTexture - Set shader uniform value for texture (sampler2d)
func SetShaderValueTexture(shader Shader, locIndex int32, texture Texture2D) {
	_, fl := setShaderValueTexture.Call(wasm.Struct(shader), locIndex, wasm.Struct(texture))
	wasm.Free(fl...)
}

// UnloadShader - Unload shader from GPU memory (VRAM)
func UnloadShader(shader Shader) {
	_, fl := unloadShader.Call(wasm.Struct(shader))
	wasm.Free(fl...)
}

// GetMouseRay - Get a ray trace from mouse position
//
// Deprecated: Use [GetScreenToWorldRay] instead.
func GetMouseRay(mousePosition Vector2, camera Camera) Ray {
	ret, fl := getMouseRay.Call(wasm.Struct(mousePosition), camera)
	v := wasm.ReadStruct[Ray](ret)
	wasm.Free(fl...)
	return v
}

// GetScreenToWorldRay - Get a ray trace from screen position (i.e mouse)
func GetScreenToWorldRay(position Vector2, camera Camera) Ray {
	ret, fl := getScreenToWorldRay.Call(wasm.Struct(position), camera)
	v := wasm.ReadStruct[Ray](ret)
	wasm.Free(fl...)
	return v
}

// GetScreenToWorldRayEx - Get a ray trace from screen position (i.e mouse) in a viewport
func GetScreenToWorldRayEx(position Vector2, camera Camera, width int32, height int32) Ray {
	ret, fl := getScreenToWorldRayEx.Call(wasm.Struct(position), camera, width, height)
	v := wasm.ReadStruct[Ray](ret)
	wasm.Free(fl...)
	return v
}

// GetCameraMatrix - Get camera transform matrix (view matrix)
func GetCameraMatrix(camera Camera) Matrix {
	ret, fl := getCameraMatrix.Call(camera)
	v := wasm.ReadStruct[Matrix](ret)
	wasm.Free(fl...)
	return v
}

// GetCameraMatrix2D - Get camera 2d transform matrix
func GetCameraMatrix2D(camera Camera2D) Matrix {
	ret, fl := getCameraMatrix2D.Call(wasm.Struct(camera))
	v := wasm.ReadStruct[Matrix](ret)
	wasm.Free(fl...)
	return v
}

// GetWorldToScreen - Get the screen space position for a 3d world space position
func GetWorldToScreen(position Vector3, camera Camera) Vector2 {
	ret, fl := getWorldToScreen.Call(wasm.Struct(position), camera)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetScreenToWorld2D - Get the world space position for a 2d camera screen space position
func GetScreenToWorld2D(position Vector2, camera Camera2D) Vector2 {
	ret, fl := getScreenToWorld2D.Call(wasm.Struct(position), wasm.Struct(camera))
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetWorldToScreenEx - Get size position for a 3d world space position
func GetWorldToScreenEx(position Vector3, camera Camera, width int32, height int32) Vector2 {
	ret, fl := getWorldToScreenEx.Call(wasm.Struct(position), camera, width, height)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetWorldToScreen2D - Get the screen space position for a 2d camera world space position
func GetWorldToScreen2D(position Vector2, camera Camera2D) Vector2 {
	ret, fl := getWorldToScreen2D.Call(wasm.Struct(position), wasm.Struct(camera))
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// SetTargetFPS - Set target FPS (maximum)
func SetTargetFPS(fps int32) {
	_, fl := setTargetFPS.Call(fps)
	wasm.Free(fl...)
}

// GetFrameTime - Get time in seconds for last frame drawn (delta time)
func GetFrameTime() float32 {
	ret, fl := getFrameTime.Call()
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// GetTime - Get elapsed time in seconds since InitWindow()
func GetTime() float64 {
	ret, fl := getTime.Call()
	v := wasm.Numeric[float64](ret)
	wasm.Free(fl...)
	return v
}

// GetFPS - Get current FPS
func GetFPS() int32 {
	ret, fl := getFPS.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// SwapScreenBuffer - Swap back buffer with front buffer (screen drawing)
func SwapScreenBuffer() {
	_, fl := swapScreenBuffer.Call()
	wasm.Free(fl...)
}

// PollInputEvents - Register all input events
func PollInputEvents() {
	_, fl := pollInputEvents.Call()
	wasm.Free(fl...)
}

// WaitTime - Wait for some time (halt program execution)
func WaitTime(seconds float64) {
	_, fl := waitTime.Call(seconds)
	wasm.Free(fl...)
}

// SetRandomSeed - Set the seed for the random number generator
//
// Note: You can use go's math/rand package instead
func SetRandomSeed(seed uint32) {
	_, fl := setRandomSeed.Call(seed)
	wasm.Free(fl...)
}

// GetRandomValue - Get a random value between min and max (both included)
//
// Note: You can use go's math/rand package instead
func GetRandomValue(minimum int32, maximum int32) int32 {
	ret, fl := getRandomValue.Call(minimum, maximum)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// LoadRandomSequence - Load random values sequence, no values repeated
//
// Note: Use UnloadRandomSequence if you don't need the sequence any more. You can use go's math/rand.Perm function instead.
func LoadRandomSequence(count uint32, minimum int32, maximum int32) []int32 {
	var zero []int32
	return zero
}

// UnloadRandomSequence - Unload random values sequence
func UnloadRandomSequence(sequence []int32) {
	_, fl := unloadRandomSequence.Call(sequence)
	wasm.Free(fl...)
}

// TakeScreenshot - Takes a screenshot of current screen (filename extension defines format)
func TakeScreenshot(fileName string) {
	_, fl := takeScreenshot.Call(fileName)
	wasm.Free(fl...)
}

// SetConfigFlags - Setup init configuration flags (view FLAGS)
func SetConfigFlags(flags uint32) {
	_, fl := setConfigFlags.Call(flags)
	wasm.Free(fl...)
}

// OpenURL - Open URL with default system browser (if available)
func OpenURL(url string) {
	_, fl := openURL.Call(url)
	wasm.Free(fl...)
}

// TraceLog - Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR...)
func TraceLog(logLevel TraceLogLevel, text string, args ...any) {
	_, fl := traceLog.Call(logLevel, text, args)
	wasm.Free(fl...)
}

// SetTraceLogLevel - Set the current threshold (minimum) log level
func SetTraceLogLevel(logLevel TraceLogLevel) {
	_, fl := setTraceLogLevel.Call(logLevel)
	wasm.Free(fl...)
}

// MemAlloc - Internal memory allocator
func MemAlloc(size uint32) unsafe.Pointer {
	var zero unsafe.Pointer
	return zero
}

// MemRealloc - Internal memory reallocator
func MemRealloc(ptr unsafe.Pointer, size uint32) unsafe.Pointer {
	var zero unsafe.Pointer
	return zero
}

// MemFree - Internal memory free
func MemFree(ptr unsafe.Pointer) {
	_, fl := memFree.Call(ptr)
	wasm.Free(fl...)
}

// IsFileDropped - Check if a file has been dropped into window
func IsFileDropped() bool {
	ret, fl := isFileDropped.Call()
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// LoadDroppedFiles - Load dropped filepaths
func LoadDroppedFiles() []string {
	var zero []string
	return zero
}

// UnloadDroppedFiles - Unload dropped filepaths
func UnloadDroppedFiles() {
	_, fl := unloadDroppedFiles.Call()
	wasm.Free(fl...)
}

// LoadAutomationEventList - Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS
func LoadAutomationEventList(fileName string) AutomationEventList {
	ret, fl := loadAutomationEventList.Call(fileName)
	v := wasm.ReadStruct[AutomationEventList](ret)
	wasm.Free(fl...)
	return v
}

// UnloadAutomationEventList - Unload automation events list from file
func UnloadAutomationEventList(list *AutomationEventList) {
	_, fl := unloadAutomationEventList.Call(list)
	wasm.Free(fl...)
}

// ExportAutomationEventList - Export automation events list as text file
func ExportAutomationEventList(list AutomationEventList, fileName string) bool {
	ret, fl := exportAutomationEventList.Call(wasm.Struct(list), fileName)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// SetAutomationEventList - Set automation event list to record to
func SetAutomationEventList(list *AutomationEventList) {
	_, fl := setAutomationEventList.Call(list)
	wasm.Free(fl...)
}

// SetAutomationEventBaseFrame - Set automation event internal base frame to start recording
func SetAutomationEventBaseFrame(frame int) {
	_, fl := setAutomationEventBaseFrame.Call(frame)
	wasm.Free(fl...)
}

// StartAutomationEventRecording - Start recording automation events (AutomationEventList must be set)
func StartAutomationEventRecording() {
	_, fl := startAutomationEventRecording.Call()
	wasm.Free(fl...)
}

// StopAutomationEventRecording - Stop recording automation events
func StopAutomationEventRecording() {
	_, fl := stopAutomationEventRecording.Call()
	wasm.Free(fl...)
}

// PlayAutomationEvent - Play a recorded automation event
func PlayAutomationEvent(event AutomationEvent) {
	_, fl := playAutomationEvent.Call(wasm.Struct(event))
	wasm.Free(fl...)
}

// IsKeyPressed - Check if a key has been pressed once
func IsKeyPressed(key int32) bool {
	ret, fl := isKeyPressed.Call(key)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsKeyPressedRepeat - Check if a key has been pressed again (Only PLATFORM_DESKTOP)
func IsKeyPressedRepeat(key int32) bool {
	ret, fl := isKeyPressedRepeat.Call(key)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsKeyDown - Check if a key is being pressed
func IsKeyDown(key int32) bool {
	ret, fl := isKeyDown.Call(key)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsKeyReleased - Check if a key has been released once
func IsKeyReleased(key int32) bool {
	ret, fl := isKeyReleased.Call(key)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsKeyUp - Check if a key is NOT being pressed
func IsKeyUp(key int32) bool {
	ret, fl := isKeyUp.Call(key)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetKeyPressed - Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty
func GetKeyPressed() int32 {
	ret, fl := getKeyPressed.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetCharPressed - Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty
func GetCharPressed() int32 {
	ret, fl := getCharPressed.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// SetExitKey - Set a custom key to exit program (default is ESC)
func SetExitKey(key int32) {
	_, fl := setExitKey.Call(key)
	wasm.Free(fl...)
}

// IsGamepadAvailable - Check if a gamepad is available
func IsGamepadAvailable(gamepad int32) bool {
	ret, fl := isGamepadAvailable.Call(gamepad)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetGamepadName - Get gamepad internal name id
func GetGamepadName(gamepad int32) string {
	ret, fl := getGamepadName.Call(gamepad)
	v := wasm.Numeric[string](ret)
	wasm.Free(fl...)
	return v
}

// IsGamepadButtonPressed - Check if a gamepad button has been pressed once
func IsGamepadButtonPressed(gamepad int32, button int32) bool {
	ret, fl := isGamepadButtonPressed.Call(gamepad, button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsGamepadButtonDown - Check if a gamepad button is being pressed
func IsGamepadButtonDown(gamepad int32, button int32) bool {
	ret, fl := isGamepadButtonDown.Call(gamepad, button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsGamepadButtonReleased - Check if a gamepad button has been released once
func IsGamepadButtonReleased(gamepad int32, button int32) bool {
	ret, fl := isGamepadButtonReleased.Call(gamepad, button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsGamepadButtonUp - Check if a gamepad button is NOT being pressed
func IsGamepadButtonUp(gamepad int32, button int32) bool {
	ret, fl := isGamepadButtonUp.Call(gamepad, button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetGamepadButtonPressed - Get the last gamepad button pressed
func GetGamepadButtonPressed() int32 {
	ret, fl := getGamepadButtonPressed.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetGamepadAxisCount - Get gamepad axis count for a gamepad
func GetGamepadAxisCount(gamepad int32) int32 {
	ret, fl := getGamepadAxisCount.Call(gamepad)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetGamepadAxisMovement - Get axis movement value for a gamepad axis
func GetGamepadAxisMovement(gamepad int32, axis int32) float32 {
	ret, fl := getGamepadAxisMovement.Call(gamepad, axis)
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// SetGamepadMappings - Set internal gamepad mappings (SDL_GameControllerDB)
func SetGamepadMappings(mappings string) int32 {
	ret, fl := setGamepadMappings.Call(mappings)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// SetGamepadVibration - Set gamepad vibration for both motors (duration in seconds)
func SetGamepadVibration(gamepad int32, leftMotor float32, rightMotor float32, duration float32) {
	_, fl := setGamepadVibration.Call(gamepad, leftMotor, rightMotor, duration)
	wasm.Free(fl...)
}

// IsMouseButtonPressed - Check if a mouse button has been pressed once
func IsMouseButtonPressed(button MouseButton) bool {
	ret, fl := isMouseButtonPressed.Call(button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsMouseButtonDown - Check if a mouse button is being pressed
func IsMouseButtonDown(button MouseButton) bool {
	ret, fl := isMouseButtonDown.Call(button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsMouseButtonReleased - Check if a mouse button has been released once
func IsMouseButtonReleased(button MouseButton) bool {
	ret, fl := isMouseButtonReleased.Call(button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// IsMouseButtonUp - Check if a mouse button is NOT being pressed
func IsMouseButtonUp(button MouseButton) bool {
	ret, fl := isMouseButtonUp.Call(button)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetMouseX - Get mouse position X
func GetMouseX() int32 {
	ret, fl := getMouseX.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetMouseY - Get mouse position Y
func GetMouseY() int32 {
	ret, fl := getMouseY.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetMousePosition - Get mouse position XY
func GetMousePosition() Vector2 {
	ret, fl := getMousePosition.Call()
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetMouseDelta - Get mouse delta between frames
func GetMouseDelta() Vector2 {
	ret, fl := getMouseDelta.Call()
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// SetMousePosition - Set mouse position XY
func SetMousePosition(x int32, y int32) {
	_, fl := setMousePosition.Call(x, y)
	wasm.Free(fl...)
}

// SetMouseOffset - Set mouse offset
func SetMouseOffset(offsetX int32, offsetY int32) {
	_, fl := setMouseOffset.Call(offsetX, offsetY)
	wasm.Free(fl...)
}

// SetMouseScale - Set mouse scaling
func SetMouseScale(scaleX float32, scaleY float32) {
	_, fl := setMouseScale.Call(scaleX, scaleY)
	wasm.Free(fl...)
}

// GetMouseWheelMove - Get mouse wheel movement for X or Y, whichever is larger
func GetMouseWheelMove() float32 {
	ret, fl := getMouseWheelMove.Call()
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// GetMouseWheelMoveV - Get mouse wheel movement for both X and Y
func GetMouseWheelMoveV() Vector2 {
	ret, fl := getMouseWheelMoveV.Call()
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// SetMouseCursor - Set mouse cursor
func SetMouseCursor(cursor int32) {
	_, fl := setMouseCursor.Call(cursor)
	wasm.Free(fl...)
}

// GetTouchX - Get touch position X for touch point 0 (relative to screen size)
func GetTouchX() int32 {
	ret, fl := getTouchX.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetTouchY - Get touch position Y for touch point 0 (relative to screen size)
func GetTouchY() int32 {
	ret, fl := getTouchY.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetTouchPosition - Get touch position XY for a touch point index (relative to screen size)
func GetTouchPosition(index int32) Vector2 {
	ret, fl := getTouchPosition.Call(index)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetTouchPointId - Get touch point identifier for given index
func GetTouchPointId(index int32) int32 {
	ret, fl := getTouchPointId.Call(index)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetTouchPointCount - Get number of touch points
func GetTouchPointCount() int32 {
	ret, fl := getTouchPointCount.Call()
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// SetGesturesEnabled - Enable a set of gestures using flags
func SetGesturesEnabled(flags uint32) {
	_, fl := setGesturesEnabled.Call(flags)
	wasm.Free(fl...)
}

// IsGestureDetected - Check if a gesture have been detected
func IsGestureDetected(gesture Gestures) bool {
	ret, fl := isGestureDetected.Call(gesture)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetGestureDetected - Get latest detected gesture
func GetGestureDetected() Gestures {
	ret, fl := getGestureDetected.Call()
	v := wasm.Numeric[Gestures](ret)
	wasm.Free(fl...)
	return v
}

// GetGestureHoldDuration - Get gesture hold time in milliseconds
func GetGestureHoldDuration() float32 {
	ret, fl := getGestureHoldDuration.Call()
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// GetGestureDragVector - Get gesture drag vector
func GetGestureDragVector() Vector2 {
	ret, fl := getGestureDragVector.Call()
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetGestureDragAngle - Get gesture drag angle
func GetGestureDragAngle() float32 {
	ret, fl := getGestureDragAngle.Call()
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// GetGesturePinchVector - Get gesture pinch delta
func GetGesturePinchVector() Vector2 {
	ret, fl := getGesturePinchVector.Call()
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetGesturePinchAngle - Get gesture pinch angle
func GetGesturePinchAngle() float32 {
	ret, fl := getGesturePinchAngle.Call()
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// SetShapesTexture - Set texture and rectangle to be used on shapes drawing
func SetShapesTexture(texture Texture2D, source Rectangle) {
	_, fl := setShapesTexture.Call(wasm.Struct(texture), wasm.Struct(source))
	wasm.Free(fl...)
}

// GetShapesTexture - Get texture that is used for shapes drawing
func GetShapesTexture() Texture2D {
	ret, fl := getShapesTexture.Call()
	v := wasm.ReadStruct[Texture2D](ret)
	wasm.Free(fl...)
	return v
}

// GetShapesTextureRectangle - Get texture source rectangle that is used for shapes drawing
func GetShapesTextureRectangle() Rectangle {
	ret, fl := getShapesTextureRectangle.Call()
	v := wasm.ReadStruct[Rectangle](ret)
	wasm.Free(fl...)
	return v
}

// DrawPixel - Draw a pixel
func DrawPixel(posX int32, posY int32, col color.RGBA) {
	_, fl := drawPixel.Call(posX, posY, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawPixelV - Draw a pixel (Vector version)
func DrawPixelV(position Vector2, col color.RGBA) {
	_, fl := drawPixelV.Call(wasm.Struct(position), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawLine - Draw a line
func DrawLine(startPosX int32, startPosY int32, endPosX int32, endPosY int32, col color.RGBA) {
	_, fl := drawLine.Call(startPosX, startPosY, endPosX, endPosY, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawLineV - Draw a line (using gl lines)
func DrawLineV(startPos Vector2, endPos Vector2, col color.RGBA) {
	_, fl := drawLineV.Call(wasm.Struct(startPos), wasm.Struct(endPos), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawLineEx - Draw a line (using triangles/quads)
func DrawLineEx(startPos Vector2, endPos Vector2, thick float32, col color.RGBA) {
	_, fl := drawLineEx.Call(wasm.Struct(startPos), wasm.Struct(endPos), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawLineStrip - Draw lines sequence (using gl lines)
func DrawLineStrip(points []Vector2, col color.RGBA) {
	_, fl := drawLineStrip.Call(points, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawLineBezier - Draw line segment cubic-bezier in-out interpolation
func DrawLineBezier(startPos Vector2, endPos Vector2, thick float32, col color.RGBA) {
	_, fl := drawLineBezier.Call(wasm.Struct(startPos), wasm.Struct(endPos), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCircle - Draw a color-filled circle
func DrawCircle(centerX int32, centerY int32, radius float32, col color.RGBA) {
	_, fl := drawCircle.Call(centerX, centerY, radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCircleSector - Draw a piece of a circle
func DrawCircleSector(center Vector2, radius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	_, fl := drawCircleSector.Call(wasm.Struct(center), radius, startAngle, endAngle, segments, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCircleSectorLines - Draw circle sector outline
func DrawCircleSectorLines(center Vector2, radius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	_, fl := drawCircleSectorLines.Call(wasm.Struct(center), radius, startAngle, endAngle, segments, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCircleGradient - Draw a gradient-filled circle
func DrawCircleGradient(centerX int32, centerY int32, radius float32, inner color.RGBA, outer color.RGBA) {
	_, fl := drawCircleGradient.Call(centerX, centerY, radius, wasm.Struct(inner), wasm.Struct(outer))
	wasm.Free(fl...)
}

// DrawCircleV - Draw a color-filled circle (Vector version)
func DrawCircleV(center Vector2, radius float32, col color.RGBA) {
	_, fl := drawCircleV.Call(wasm.Struct(center), radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCircleLines - Draw circle outline
func DrawCircleLines(centerX int32, centerY int32, radius float32, col color.RGBA) {
	_, fl := drawCircleLines.Call(centerX, centerY, radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCircleLinesV - Draw circle outline (Vector version)
func DrawCircleLinesV(center Vector2, radius float32, col color.RGBA) {
	_, fl := drawCircleLinesV.Call(wasm.Struct(center), radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawEllipse - Draw ellipse
func DrawEllipse(centerX int32, centerY int32, radiusH float32, radiusV float32, col color.RGBA) {
	_, fl := drawEllipse.Call(centerX, centerY, radiusH, radiusV, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawEllipseLines - Draw ellipse outline
func DrawEllipseLines(centerX int32, centerY int32, radiusH float32, radiusV float32, col color.RGBA) {
	_, fl := drawEllipseLines.Call(centerX, centerY, radiusH, radiusV, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRing - Draw ring
func DrawRing(center Vector2, innerRadius float32, outerRadius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	_, fl := drawRing.Call(wasm.Struct(center), innerRadius, outerRadius, startAngle, endAngle, segments, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRingLines - Draw ring outline
func DrawRingLines(center Vector2, innerRadius float32, outerRadius float32, startAngle float32, endAngle float32, segments int32, col color.RGBA) {
	_, fl := drawRingLines.Call(wasm.Struct(center), innerRadius, outerRadius, startAngle, endAngle, segments, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangle - Draw a color-filled rectangle
func DrawRectangle(posX int32, posY int32, width int32, height int32, col color.RGBA) {
	_, fl := drawRectangle.Call(posX, posY, width, height, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangleV - Draw a color-filled rectangle (Vector version)
func DrawRectangleV(position Vector2, size Vector2, col color.RGBA) {
	_, fl := drawRectangleV.Call(wasm.Struct(position), wasm.Struct(size), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangleRec - Draw a color-filled rectangle
func DrawRectangleRec(rec Rectangle, col color.RGBA) {
	_, fl := drawRectangleRec.Call(wasm.Struct(rec), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectanglePro - Draw a color-filled rectangle with pro parameters
func DrawRectanglePro(rec Rectangle, origin Vector2, rotation float32, col color.RGBA) {
	_, fl := drawRectanglePro.Call(wasm.Struct(rec), wasm.Struct(origin), rotation, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangleGradientV - Draw a vertical-gradient-filled rectangle
func DrawRectangleGradientV(posX int32, posY int32, width int32, height int32, top color.RGBA, bottom color.RGBA) {
	_, fl := drawRectangleGradientV.Call(posX, posY, width, height, wasm.Struct(top), wasm.Struct(bottom))
	wasm.Free(fl...)
}

// DrawRectangleGradientH - Draw a horizontal-gradient-filled rectangle
func DrawRectangleGradientH(posX int32, posY int32, width int32, height int32, left color.RGBA, right color.RGBA) {
	_, fl := drawRectangleGradientH.Call(posX, posY, width, height, wasm.Struct(left), wasm.Struct(right))
	wasm.Free(fl...)
}

// DrawRectangleGradientEx - Draw a gradient-filled rectangle with custom vertex colors
func DrawRectangleGradientEx(rec Rectangle, topLeft color.RGBA, bottomLeft color.RGBA, topRight color.RGBA, bottomRight color.RGBA) {
	_, fl := drawRectangleGradientEx.Call(wasm.Struct(rec), wasm.Struct(topLeft), wasm.Struct(bottomLeft), wasm.Struct(topRight), wasm.Struct(bottomRight))
	wasm.Free(fl...)
}

// DrawRectangleLines - Draw rectangle outline
func DrawRectangleLines(posX int32, posY int32, width int32, height int32, col color.RGBA) {
	_, fl := drawRectangleLines.Call(posX, posY, width, height, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangleLinesEx - Draw rectangle outline with extended parameters
func DrawRectangleLinesEx(rec Rectangle, lineThick float32, col color.RGBA) {
	_, fl := drawRectangleLinesEx.Call(wasm.Struct(rec), lineThick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangleRounded - Draw rectangle with rounded edges
func DrawRectangleRounded(rec Rectangle, roundness float32, segments int32, col color.RGBA) {
	_, fl := drawRectangleRounded.Call(wasm.Struct(rec), roundness, segments, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangleRoundedLines - Draw rectangle lines with rounded edges
func DrawRectangleRoundedLines(rec Rectangle, roundness float32, segments int32, col color.RGBA) {
	_, fl := drawRectangleRoundedLines.Call(wasm.Struct(rec), roundness, segments, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRectangleRoundedLinesEx - Draw rectangle with rounded edges outline
func DrawRectangleRoundedLinesEx(rec Rectangle, roundness float32, segments int32, lineThick float32, col color.RGBA) {
	_, fl := drawRectangleRoundedLinesEx.Call(wasm.Struct(rec), roundness, segments, lineThick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawTriangle - Draw a color-filled triangle (vertex in counter-clockwise order!)
func DrawTriangle(v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	_, fl := drawTriangle.Call(wasm.Struct(v1), wasm.Struct(v2), wasm.Struct(v3), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawTriangleLines - Draw triangle outline (vertex in counter-clockwise order!)
func DrawTriangleLines(v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	_, fl := drawTriangleLines.Call(wasm.Struct(v1), wasm.Struct(v2), wasm.Struct(v3), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawTriangleFan - Draw a triangle fan defined by points (first vertex is the center)
func DrawTriangleFan(points []Vector2, col color.RGBA) {
	_, fl := drawTriangleFan.Call(points, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawTriangleStrip - Draw a triangle strip defined by points
func DrawTriangleStrip(points []Vector2, col color.RGBA) {
	_, fl := drawTriangleStrip.Call(points, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawPoly - Draw a regular polygon (Vector version)
func DrawPoly(center Vector2, sides int32, radius float32, rotation float32, col color.RGBA) {
	_, fl := drawPoly.Call(wasm.Struct(center), sides, radius, rotation, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawPolyLines - Draw a polygon outline of n sides
func DrawPolyLines(center Vector2, sides int32, radius float32, rotation float32, col color.RGBA) {
	_, fl := drawPolyLines.Call(wasm.Struct(center), sides, radius, rotation, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawPolyLinesEx - Draw a polygon outline of n sides with extended parameters
func DrawPolyLinesEx(center Vector2, sides int32, radius float32, rotation float32, lineThick float32, col color.RGBA) {
	_, fl := drawPolyLinesEx.Call(wasm.Struct(center), sides, radius, rotation, lineThick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineLinear - Draw spline: Linear, minimum 2 points
func DrawSplineLinear(points []Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineLinear.Call(points, thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineBasis - Draw spline: B-Spline, minimum 4 points
func DrawSplineBasis(points []Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineBasis.Call(points, thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineCatmullRom - Draw spline: Catmull-Rom, minimum 4 points
func DrawSplineCatmullRom(points []Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineCatmullRom.Call(points, thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineBezierQuadratic - Draw spline: Quadratic Bezier, minimum 3 points (1 control point): [p1, c2, p3, c4...]
func DrawSplineBezierQuadratic(points []Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineBezierQuadratic.Call(points, thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineBezierCubic - Draw spline: Cubic Bezier, minimum 4 points (2 control points): [p1, c2, c3, p4, c5, c6...]
func DrawSplineBezierCubic(points []Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineBezierCubic.Call(points, thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineSegmentLinear - Draw spline segment: Linear, 2 points
func DrawSplineSegmentLinear(p1 Vector2, p2 Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineSegmentLinear.Call(wasm.Struct(p1), wasm.Struct(p2), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineSegmentBasis - Draw spline segment: B-Spline, 4 points
func DrawSplineSegmentBasis(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineSegmentBasis.Call(wasm.Struct(p1), wasm.Struct(p2), wasm.Struct(p3), wasm.Struct(p4), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineSegmentCatmullRom - Draw spline segment: Catmull-Rom, 4 points
func DrawSplineSegmentCatmullRom(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineSegmentCatmullRom.Call(wasm.Struct(p1), wasm.Struct(p2), wasm.Struct(p3), wasm.Struct(p4), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineSegmentBezierQuadratic - Draw spline segment: Quadratic Bezier, 2 points, 1 control point
func DrawSplineSegmentBezierQuadratic(p1 Vector2, c2 Vector2, p3 Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineSegmentBezierQuadratic.Call(wasm.Struct(p1), wasm.Struct(c2), wasm.Struct(p3), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSplineSegmentBezierCubic - Draw spline segment: Cubic Bezier, 2 points, 2 control points
func DrawSplineSegmentBezierCubic(p1 Vector2, c2 Vector2, c3 Vector2, p4 Vector2, thick float32, col color.RGBA) {
	_, fl := drawSplineSegmentBezierCubic.Call(wasm.Struct(p1), wasm.Struct(c2), wasm.Struct(c3), wasm.Struct(p4), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// GetSplinePointLinear - Get (evaluate) spline point: Linear
func GetSplinePointLinear(startPos Vector2, endPos Vector2, t float32) Vector2 {
	ret, fl := getSplinePointLinear.Call(wasm.Struct(startPos), wasm.Struct(endPos), t)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetSplinePointBasis - Get (evaluate) spline point: B-Spline
func GetSplinePointBasis(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, t float32) Vector2 {
	ret, fl := getSplinePointBasis.Call(wasm.Struct(p1), wasm.Struct(p2), wasm.Struct(p3), wasm.Struct(p4), t)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetSplinePointCatmullRom - Get (evaluate) spline point: Catmull-Rom
func GetSplinePointCatmullRom(p1 Vector2, p2 Vector2, p3 Vector2, p4 Vector2, t float32) Vector2 {
	ret, fl := getSplinePointCatmullRom.Call(wasm.Struct(p1), wasm.Struct(p2), wasm.Struct(p3), wasm.Struct(p4), t)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetSplinePointBezierQuad - Get (evaluate) spline point: Quadratic Bezier
func GetSplinePointBezierQuad(p1 Vector2, c2 Vector2, p3 Vector2, t float32) Vector2 {
	ret, fl := getSplinePointBezierQuad.Call(wasm.Struct(p1), wasm.Struct(c2), wasm.Struct(p3), t)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetSplinePointBezierCubic - Get (evaluate) spline point: Cubic Bezier
func GetSplinePointBezierCubic(p1 Vector2, c2 Vector2, c3 Vector2, p4 Vector2, t float32) Vector2 {
	ret, fl := getSplinePointBezierCubic.Call(wasm.Struct(p1), wasm.Struct(c2), wasm.Struct(c3), wasm.Struct(p4), t)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionRecs - Check collision between two rectangles
func CheckCollisionRecs(rec1 Rectangle, rec2 Rectangle) bool {
	ret, fl := checkCollisionRecs.Call(wasm.Struct(rec1), wasm.Struct(rec2))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionCircles - Check collision between two circles
func CheckCollisionCircles(center1 Vector2, radius1 float32, center2 Vector2, radius2 float32) bool {
	ret, fl := checkCollisionCircles.Call(wasm.Struct(center1), radius1, wasm.Struct(center2), radius2)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionCircleRec - Check collision between circle and rectangle
func CheckCollisionCircleRec(center Vector2, radius float32, rec Rectangle) bool {
	ret, fl := checkCollisionCircleRec.Call(wasm.Struct(center), radius, wasm.Struct(rec))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionCircleLine - Check if circle collides with a line created betweeen two points [p1] and [p2]
func CheckCollisionCircleLine(center Vector2, radius float32, p1 Vector2, p2 Vector2) bool {
	ret, fl := checkCollisionCircleLine.Call(wasm.Struct(center), radius, wasm.Struct(p1), wasm.Struct(p2))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionPointRec - Check if point is inside rectangle
func CheckCollisionPointRec(point Vector2, rec Rectangle) bool {
	ret, fl := checkCollisionPointRec.Call(wasm.Struct(point), wasm.Struct(rec))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionPointCircle - Check if point is inside circle
func CheckCollisionPointCircle(point Vector2, center Vector2, radius float32) bool {
	ret, fl := checkCollisionPointCircle.Call(wasm.Struct(point), wasm.Struct(center), radius)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionPointTriangle - Check if point is inside a triangle
func CheckCollisionPointTriangle(point Vector2, p1 Vector2, p2 Vector2, p3 Vector2) bool {
	ret, fl := checkCollisionPointTriangle.Call(wasm.Struct(point), wasm.Struct(p1), wasm.Struct(p2), wasm.Struct(p3))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionPointPoly - Check if point is within a polygon described by array of vertices
func CheckCollisionPointPoly(point Vector2, points []Vector2) bool {
	ret, fl := checkCollisionPointPoly.Call(wasm.Struct(point), points)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionLines - Check the collision between two lines defined by two points each, returns collision point by reference
func CheckCollisionLines(startPos1 Vector2, endPos1 Vector2, startPos2 Vector2, endPos2 Vector2, collisionPoint *Vector2) bool {
	_collisionPoint := wasm.Struct(*collisionPoint)
	ret, fl := checkCollisionLines.Call(wasm.Struct(startPos1), wasm.Struct(endPos1), wasm.Struct(startPos2), wasm.Struct(endPos2), _collisionPoint)
	v := wasm.Boolean(ret)
	*collisionPoint = wasm.BytesToStruct[Vector2](wasm.ReadFromWASM(_collisionPoint.Mem, _collisionPoint.Size))
	wasm.Free(fl...)
	return v
}

// CheckCollisionPointLine - Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]
func CheckCollisionPointLine(point Vector2, p1 Vector2, p2 Vector2, threshold int32) bool {
	ret, fl := checkCollisionPointLine.Call(wasm.Struct(point), wasm.Struct(p1), wasm.Struct(p2), threshold)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetCollisionRec - Get collision rectangle for two rectangles collision
func GetCollisionRec(rec1 Rectangle, rec2 Rectangle) Rectangle {
	ret, fl := getCollisionRec.Call(wasm.Struct(rec1), wasm.Struct(rec2))
	v := wasm.ReadStruct[Rectangle](ret)
	wasm.Free(fl...)
	return v
}

// LoadImage - Load image from file into CPU memory (RAM)
func LoadImage(fileName string) *Image {
	var zero *Image
	return zero
}

// LoadImageRaw - Load image from RAW file data
func LoadImageRaw(fileName string, width int32, height int32, format PixelFormat, headerSize int32) *Image {
	var zero *Image
	return zero
}

// LoadImageAnim - Load image sequence from file (frames appended to image.data)
func LoadImageAnim(fileName string, frames *int32) *Image {
	var zero *Image
	return zero
}

// LoadImageAnimFromMemory - Load image sequence from memory buffer
func LoadImageAnimFromMemory(fileType string, fileData []byte, dataSize int32, frames *int32) *Image {
	var zero *Image
	return zero
}

// LoadImageFromMemory - Load image from memory buffer, fileType refers to extension: i.e. '.png'
func LoadImageFromMemory(fileType string, fileData []byte, dataSize int32) *Image {
	var zero *Image
	return zero
}

// LoadImageFromTexture - Load image from GPU texture data
func LoadImageFromTexture(texture Texture2D) *Image {
	var zero *Image
	return zero
}

// LoadImageFromScreen - Load image from screen buffer and (screenshot)
func LoadImageFromScreen() *Image {
	var zero *Image
	return zero
}

// IsImageValid - Check if an image is valid (data and parameters)
func IsImageValid(image *Image) bool {
	ret, fl := isImageValid.Call(image)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UnloadImage - Unload image from CPU memory (RAM)
func UnloadImage(image *Image) {
	_, fl := unloadImage.Call(image)
	wasm.Free(fl...)
}

// ExportImage - Export image data to file, returns true on success
func ExportImage(image Image, fileName string) bool {
	ret, fl := exportImage.Call(wasm.Struct(image), fileName)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// ExportImageToMemory - Export image to memory buffer
func ExportImageToMemory(image Image, fileType string) []byte {
	var zero []byte
	return zero
}


// GenImageGradientLinear - Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient
func GenImageGradientLinear(width int, height int, direction int, start color.RGBA, end color.RGBA) *Image {
	var zero *Image
	return zero
}

// GenImageGradientRadial - Generate image: radial gradient
func GenImageGradientRadial(width int, height int, density float32, inner color.RGBA, outer color.RGBA) *Image {
	var zero *Image
	return zero
}

// GenImageGradientSquare - Generate image: square gradient
func GenImageGradientSquare(width int, height int, density float32, inner color.RGBA, outer color.RGBA) *Image {
	var zero *Image
	return zero
}

// GenImageChecked - Generate image: checked
func GenImageChecked(width int, height int, checksX int, checksY int, col1 color.RGBA, col2 color.RGBA) *Image {
	var zero *Image
	return zero
}

// GenImageWhiteNoise - Generate image: white noise
func GenImageWhiteNoise(width int, height int, factor float32) *Image {
	var zero *Image
	return zero
}

// GenImagePerlinNoise - Generate image: perlin noise
func GenImagePerlinNoise(width int, height int, offsetX int32, offsetY int32, scale float32) *Image {
	var zero *Image
	return zero
}

// GenImageCellular - Generate image: cellular algorithm, bigger tileSize means bigger cells
func GenImageCellular(width int, height int, tileSize int) *Image {
	var zero *Image
	return zero
}

// GenImageText - Generate image: grayscale image from text data
func GenImageText(width int, height int, text string) Image {
	ret, fl := genImageText.Call(width, height, text)
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return v
}

// ImageCopy - Create an image duplicate (useful for transformations)
func ImageCopy(image *Image) *Image {
	var zero *Image
	return zero
}

// ImageFromImage - Create an image from another image piece
func ImageFromImage(image Image, rec Rectangle) Image {
	ret, fl := imageFromImage.Call(wasm.Struct(image), wasm.Struct(rec))
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return v
}

// ImageFromChannel - Create an image from a selected channel of another image (GRAYSCALE)
func ImageFromChannel(image Image, selectedChannel int32) Image {
	ret, fl := imageFromChannel.Call(wasm.Struct(image), selectedChannel)
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return v
}

// ImageText - Create an image from text (default font)
func ImageText(text string, fontSize int32, col color.RGBA) Image {
	ret, fl := imageText.Call(text, fontSize, wasm.Struct(col))
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return v
}

// ImageTextEx - Create an image from text (custom sprite font)
func ImageTextEx(font Font, text string, fontSize float32, spacing float32, tint color.RGBA) Image {
	ret, fl := imageTextEx.Call(wasm.Struct(font), text, fontSize, spacing, wasm.Struct(tint))
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return v
}

// ImageFormat - Convert image data to desired format
func ImageFormat(image *Image, newFormat PixelFormat) {
	_, fl := imageFormat.Call(image, newFormat)
	wasm.Free(fl...)
}

// ImageToPOT - Convert image to POT (power-of-two)
func ImageToPOT(image *Image, fill color.RGBA) {
	_, fl := imageToPOT.Call(image, wasm.Struct(fill))
	wasm.Free(fl...)
}

// ImageCrop - Crop an image to a defined rectangle
func ImageCrop(image *Image, crop Rectangle) {
	_, fl := imageCrop.Call(image, wasm.Struct(crop))
	wasm.Free(fl...)
}

// ImageAlphaCrop - Crop image depending on alpha value
func ImageAlphaCrop(image *Image, threshold float32) {
	_, fl := imageAlphaCrop.Call(image, threshold)
	wasm.Free(fl...)
}

// ImageAlphaClear - Clear alpha channel to desired color
func ImageAlphaClear(image *Image, col color.RGBA, threshold float32) {
	_, fl := imageAlphaClear.Call(image, wasm.Struct(col), threshold)
	wasm.Free(fl...)
}

// ImageAlphaMask - Apply alpha mask to image
func ImageAlphaMask(image *Image, alphaMask *Image) {
	_, fl := imageAlphaMask.Call(image, alphaMask)
	wasm.Free(fl...)
}

// ImageAlphaPremultiply - Premultiply alpha channel
func ImageAlphaPremultiply(image *Image) {
	_, fl := imageAlphaPremultiply.Call(image)
	wasm.Free(fl...)
}

// ImageBlurGaussian - Apply Gaussian blur using a box blur approximation
func ImageBlurGaussian(image *Image, blurSize int32) {
	_, fl := imageBlurGaussian.Call(image, blurSize)
	wasm.Free(fl...)
}

// ImageKernelConvolution - Apply custom square convolution kernel to image
func ImageKernelConvolution(image *Image, kernel []float32) {
	_, fl := imageKernelConvolution.Call(image, kernel)
	wasm.Free(fl...)
}

// ImageResize - Resize image (Bicubic scaling algorithm)
func ImageResize(image *Image, newWidth int32, newHeight int32) {
	_, fl := imageResize.Call(image, newWidth, newHeight)
	wasm.Free(fl...)
}

// ImageResizeNN - Resize image (Nearest-Neighbor scaling algorithm)
func ImageResizeNN(image *Image, newWidth int32, newHeight int32) {
	_, fl := imageResizeNN.Call(image, newWidth, newHeight)
	wasm.Free(fl...)
}

// ImageResizeCanvas - Resize canvas and fill with color
func ImageResizeCanvas(image *Image, newWidth int32, newHeight int32, offsetX int32, offsetY int32, fill color.RGBA) {
	_, fl := imageResizeCanvas.Call(image, newWidth, newHeight, offsetX, offsetY, wasm.Struct(fill))
	wasm.Free(fl...)
}

// ImageMipmaps - Compute all mipmap levels for a provided image
func ImageMipmaps(image *Image) {
	_, fl := imageMipmaps.Call(image)
	wasm.Free(fl...)
}

// ImageDither - Dither image data to 16bpp or lower (Floyd-Steinberg dithering)
func ImageDither(image *Image, rBpp int32, gBpp int32, bBpp int32, aBpp int32) {
	_, fl := imageDither.Call(image, rBpp, gBpp, bBpp, aBpp)
	wasm.Free(fl...)
}

// ImageFlipVertical - Flip image vertically
func ImageFlipVertical(image *Image) {
	_, fl := imageFlipVertical.Call(image)
	wasm.Free(fl...)
}

// ImageFlipHorizontal - Flip image horizontally
func ImageFlipHorizontal(image *Image) {
	_, fl := imageFlipHorizontal.Call(image)
	wasm.Free(fl...)
}

// ImageRotate - Rotate image by input angle in degrees (-359 to 359)
func ImageRotate(image *Image, degrees int32) {
	_, fl := imageRotate.Call(image, degrees)
	wasm.Free(fl...)
}

// ImageRotateCW - Rotate image clockwise 90deg
func ImageRotateCW(image *Image) {
	_, fl := imageRotateCW.Call(image)
	wasm.Free(fl...)
}

// ImageRotateCCW - Rotate image counter-clockwise 90deg
func ImageRotateCCW(image *Image) {
	_, fl := imageRotateCCW.Call(image)
	wasm.Free(fl...)
}

// ImageColorTint - Modify image color: tint
func ImageColorTint(image *Image, col color.RGBA) {
	_, fl := imageColorTint.Call(image, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageColorInvert - Modify image color: invert
func ImageColorInvert(image *Image) {
	_, fl := imageColorInvert.Call(image)
	wasm.Free(fl...)
}

// ImageColorGrayscale - Modify image color: grayscale
func ImageColorGrayscale(image *Image) {
	_, fl := imageColorGrayscale.Call(image)
	wasm.Free(fl...)
}

// ImageColorContrast - Modify image color: contrast (-100 to 100)
func ImageColorContrast(image *Image, contrast float32) {
	_, fl := imageColorContrast.Call(image, contrast)
	wasm.Free(fl...)
}

// ImageColorBrightness - Modify image color: brightness (-255 to 255)
func ImageColorBrightness(image *Image, brightness int32) {
	_, fl := imageColorBrightness.Call(image, brightness)
	wasm.Free(fl...)
}

// ImageColorReplace - Modify image color: replace color
func ImageColorReplace(image *Image, col color.RGBA, replace color.RGBA) {
	_, fl := imageColorReplace.Call(image, wasm.Struct(col), wasm.Struct(replace))
	wasm.Free(fl...)
}

// LoadImageColors - Load color data from image as a Color array (RGBA - 32bit)
//
// NOTE: Memory allocated should be freed using UnloadImageColors()
func LoadImageColors(image *Image) []color.RGBA {
	var zero []color.RGBA
	return zero
}

// LoadImagePalette - Load colors palette from image as a Color array (RGBA - 32bit)
//
// NOTE: Memory allocated should be freed using UnloadImagePalette()
func LoadImagePalette(image Image, maxPaletteSize int32) []color.RGBA {
	var zero []color.RGBA
	return zero
}

// UnloadImageColors - Unload color data loaded with LoadImageColors()
func UnloadImageColors(colors []color.RGBA) {
	_, fl := unloadImageColors.Call(colors)
	wasm.Free(fl...)
}

// UnloadImagePalette - Unload colors palette loaded with LoadImagePalette()
func UnloadImagePalette(colors []color.RGBA) {
	_, fl := unloadImagePalette.Call(colors)
	wasm.Free(fl...)
}

// GetImageAlphaBorder - Get image alpha border rectangle
func GetImageAlphaBorder(image Image, threshold float32) Rectangle {
	ret, fl := getImageAlphaBorder.Call(wasm.Struct(image), threshold)
	v := wasm.ReadStruct[Rectangle](ret)
	wasm.Free(fl...)
	return v
}

// GetImageColor - Get image pixel color at (x, y) position
func GetImageColor(image Image, x int32, y int32) color.RGBA {
	ret, fl := getImageColor.Call(wasm.Struct(image), x, y)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ImageClearBackground - Clear image background with given color
func ImageClearBackground(dst *Image, col color.RGBA) {
	_, fl := imageClearBackground.Call(dst, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawPixelV - Draw pixel within an image (Vector version)
func ImageDrawPixelV(dst *Image, position Vector2, col color.RGBA) {
	_, fl := imageDrawPixelV.Call(dst, wasm.Struct(position), wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawLine - Draw line within an image
func ImageDrawLine(dst *Image, startPosX int32, startPosY int32, endPosX int32, endPosY int32, col color.RGBA) {
	_, fl := imageDrawLine.Call(dst, startPosX, startPosY, endPosX, endPosY, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawLineV - Draw line within an image (Vector version)
func ImageDrawLineV(dst *Image, start Vector2, end Vector2, col color.RGBA) {
	_, fl := imageDrawLineV.Call(dst, wasm.Struct(start), wasm.Struct(end), wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawLineEx - Draw a line defining thickness within an image
func ImageDrawLineEx(dst *Image, start Vector2, end Vector2, thick int32, col color.RGBA) {
	_, fl := imageDrawLineEx.Call(dst, wasm.Struct(start), wasm.Struct(end), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawCircle - Draw a filled circle within an image
func ImageDrawCircle(dst *Image, centerX int32, centerY int32, radius int32, col color.RGBA) {
	_, fl := imageDrawCircle.Call(dst, centerX, centerY, radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawCircleV - Draw a filled circle within an image (Vector version)
func ImageDrawCircleV(dst *Image, center Vector2, radius int32, col color.RGBA) {
	_, fl := imageDrawCircleV.Call(dst, wasm.Struct(center), radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawCircleLines - Draw circle outline within an image
func ImageDrawCircleLines(dst *Image, centerX int32, centerY int32, radius int32, col color.RGBA) {
	_, fl := imageDrawCircleLines.Call(dst, centerX, centerY, radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawCircleLinesV - Draw circle outline within an image (Vector version)
func ImageDrawCircleLinesV(dst *Image, center Vector2, radius int32, col color.RGBA) {
	_, fl := imageDrawCircleLinesV.Call(dst, wasm.Struct(center), radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawRectangle - Draw rectangle within an image
func ImageDrawRectangle(dst *Image, posX int32, posY int32, width int32, height int32, col color.RGBA) {
	_, fl := imageDrawRectangle.Call(dst, posX, posY, width, height, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawRectangleV - Draw rectangle within an image (Vector version)
func ImageDrawRectangleV(dst *Image, position Vector2, size Vector2, col color.RGBA) {
	_, fl := imageDrawRectangleV.Call(dst, wasm.Struct(position), wasm.Struct(size), wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawRectangleRec - Draw rectangle within an image
func ImageDrawRectangleRec(dst *Image, rec Rectangle, col color.RGBA) {
	_, fl := imageDrawRectangleRec.Call(dst, wasm.Struct(rec), wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawRectangleLines - Draw rectangle lines within an image
func ImageDrawRectangleLines(dst *Image, rec Rectangle, thick int, col color.RGBA) {
	_, fl := imageDrawRectangleLines.Call(dst, wasm.Struct(rec), thick, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawTriangle - Draw triangle within an image
func ImageDrawTriangle(dst *Image, v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	_, fl := imageDrawTriangle.Call(dst, wasm.Struct(v1), wasm.Struct(v2), wasm.Struct(v3), wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawTriangleEx - Draw triangle with interpolated colors within an image
func ImageDrawTriangleEx(dst *Image, v1 Vector2, v2 Vector2, v3 Vector2, c1 color.RGBA, c2 color.RGBA, c3 color.RGBA) {
	_, fl := imageDrawTriangleEx.Call(dst, wasm.Struct(v1), wasm.Struct(v2), wasm.Struct(v3), wasm.Struct(c1), wasm.Struct(c2), wasm.Struct(c3))
	wasm.Free(fl...)
}

// ImageDrawTriangleLines - Draw triangle outline within an image
func ImageDrawTriangleLines(dst *Image, v1 Vector2, v2 Vector2, v3 Vector2, col color.RGBA) {
	_, fl := imageDrawTriangleLines.Call(dst, wasm.Struct(v1), wasm.Struct(v2), wasm.Struct(v3), wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawTriangleFan - Draw a triangle fan defined by points within an image (first vertex is the center)
func ImageDrawTriangleFan(dst *Image, points []Vector2, col color.RGBA) {
	_, fl := imageDrawTriangleFan.Call(dst, points, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawTriangleStrip - Draw a triangle strip defined by points within an image
func ImageDrawTriangleStrip(dst *Image, points []Vector2, col color.RGBA) {
	_, fl := imageDrawTriangleStrip.Call(dst, points, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDraw - Draw a source image within a destination image (tint applied to source)
func ImageDraw(dst *Image, src *Image, srcRec Rectangle, dstRec Rectangle, tint color.RGBA) {
	_, fl := imageDraw.Call(dst, src, wasm.Struct(srcRec), wasm.Struct(dstRec), wasm.Struct(tint))
	wasm.Free(fl...)
}

// ImageDrawText - Draw text (using default font) within an image (destination)
func ImageDrawText(dst *Image, posX int32, posY int32, text string, fontSize int32, col color.RGBA) {
	_, fl := imageDrawText.Call(dst, posX, posY, text, fontSize, wasm.Struct(col))
	wasm.Free(fl...)
}

// ImageDrawTextEx - Draw text (custom sprite font) within an image (destination)
func ImageDrawTextEx(dst *Image, position Vector2, font Font, text string, fontSize float32, spacing float32, tint color.RGBA) {
	_, fl := imageDrawTextEx.Call(dst, wasm.Struct(position), wasm.Struct(font), text, fontSize, spacing, wasm.Struct(tint))
	wasm.Free(fl...)
}

// LoadTexture - Load texture from file into GPU memory (VRAM)
func LoadTexture(fileName string) Texture2D {
	ret, fl := loadTexture.Call(fileName)
	v := wasm.ReadStruct[Texture2D](ret)
	wasm.Free(fl...)
	return v
}


// LoadTextureCubemap - Load cubemap from image, multiple image cubemap layouts supported
func LoadTextureCubemap(image *Image, layout int32) Texture2D {
	ret, fl := loadTextureCubemap.Call(image, layout)
	v := wasm.ReadStruct[Texture2D](ret)
	wasm.Free(fl...)
	return v
}

// LoadRenderTexture - Load texture for rendering (framebuffer)
func LoadRenderTexture(width int32, height int32) RenderTexture2D {
	ret, fl := loadRenderTexture.Call(width, height)
	v := wasm.ReadStruct[RenderTexture2D](ret)
	wasm.Free(fl...)
	return v
}

// IsTextureValid - Check if a texture is valid (loaded in GPU)
func IsTextureValid(texture Texture2D) bool {
	ret, fl := isTextureValid.Call(wasm.Struct(texture))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UnloadTexture - Unload texture from GPU memory (VRAM)
func UnloadTexture(texture Texture2D) {
	_, fl := unloadTexture.Call(wasm.Struct(texture))
	wasm.Free(fl...)
}

// IsRenderTextureValid - Check if a render texture is valid (loaded in GPU)
func IsRenderTextureValid(target RenderTexture2D) bool {
	ret, fl := isRenderTextureValid.Call(wasm.Struct(target))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UnloadRenderTexture - Unload render texture from GPU memory (VRAM)
func UnloadRenderTexture(target RenderTexture2D) {
	_, fl := unloadRenderTexture.Call(wasm.Struct(target))
	wasm.Free(fl...)
}

// UpdateTexture - Update GPU texture with new data
func UpdateTexture(texture Texture2D, pixels []color.RGBA) {
	_, fl := updateTexture.Call(wasm.Struct(texture), pixels)
	wasm.Free(fl...)
}

// UpdateTextureRec - Update GPU texture rectangle with new data
func UpdateTextureRec(texture Texture2D, rec Rectangle, pixels []color.RGBA) {
	_, fl := updateTextureRec.Call(wasm.Struct(texture), wasm.Struct(rec), pixels)
	wasm.Free(fl...)
}

// GenTextureMipmaps - Generate GPU mipmaps for a texture
func GenTextureMipmaps(texture *Texture2D) {
	_, fl := genTextureMipmaps.Call(texture)
	wasm.Free(fl...)
}

// SetTextureFilter - Set texture scaling filter mode
func SetTextureFilter(texture Texture2D, filter TextureFilterMode) {
	_, fl := setTextureFilter.Call(wasm.Struct(texture), filter)
	wasm.Free(fl...)
}

// SetTextureWrap - Set texture wrapping mode
func SetTextureWrap(texture Texture2D, wrap TextureWrapMode) {
	_, fl := setTextureWrap.Call(wasm.Struct(texture), wrap)
	wasm.Free(fl...)
}

// DrawTexture - Draw a Texture2D
func DrawTexture(texture Texture2D, posX int32, posY int32, tint color.RGBA) {
	_, fl := drawTexture.Call(wasm.Struct(texture), posX, posY, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTextureV - Draw a Texture2D with position defined as Vector2
func DrawTextureV(texture Texture2D, position Vector2, tint color.RGBA) {
	_, fl := drawTextureV.Call(wasm.Struct(texture), wasm.Struct(position), wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTextureEx - Draw a Texture2D with extended parameters
func DrawTextureEx(texture Texture2D, position Vector2, rotation float32, scale float32, tint color.RGBA) {
	_, fl := drawTextureEx.Call(wasm.Struct(texture), wasm.Struct(position), rotation, scale, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTextureRec - Draw a part of a texture defined by a rectangle
func DrawTextureRec(texture Texture2D, source Rectangle, position Vector2, tint color.RGBA) {
	_, fl := drawTextureRec.Call(wasm.Struct(texture), wasm.Struct(source), wasm.Struct(position), wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTexturePro - Draw a part of a texture defined by a rectangle with 'pro' parameters
func DrawTexturePro(texture Texture2D, source Rectangle, dest Rectangle, origin Vector2, rotation float32, tint color.RGBA) {
	_, fl := drawTexturePro.Call(wasm.Struct(texture), wasm.Struct(source), wasm.Struct(dest), wasm.Struct(origin), rotation, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTextureNPatch - Draws a texture (or part of it) that stretches or shrinks nicely
func DrawTextureNPatch(texture Texture2D, nPatchInfo NPatchInfo, dest Rectangle, origin Vector2, rotation float32, tint color.RGBA) {
	_, fl := drawTextureNPatch.Call(wasm.Struct(texture), wasm.Struct(nPatchInfo), wasm.Struct(dest), wasm.Struct(origin), rotation, wasm.Struct(tint))
	wasm.Free(fl...)
}

// Fade - Get color with alpha applied, alpha goes from 0.0f to 1.0f
func Fade(col color.RGBA, alpha float32) color.RGBA {
	ret, fl := fade.Call(wasm.Struct(col), alpha)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorToInt - Get hexadecimal value for a Color (0xRRGGBBAA)
func ColorToInt(col color.RGBA) int32 {
	ret, fl := colorToInt.Call(wasm.Struct(col))
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// ColorNormalize - Get Color normalized as float [0..1]
func ColorNormalize(col color.RGBA) Vector4 {
	ret, fl := colorNormalize.Call(wasm.Struct(col))
	v := wasm.ReadStruct[Vector4](ret)
	wasm.Free(fl...)
	return v
}

// ColorFromNormalized - Get Color from normalized values [0..1]
func ColorFromNormalized(normalized Vector4) color.RGBA {
	ret, fl := colorFromNormalized.Call(wasm.Struct(normalized))
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorToHSV - Get HSV values for a Color, hue [0..360], saturation/value [0..1]
func ColorToHSV(col color.RGBA) Vector3 {
	ret, fl := colorToHSV.Call(wasm.Struct(col))
	v := wasm.ReadStruct[Vector3](ret)
	wasm.Free(fl...)
	return v
}

// ColorFromHSV - Get a Color from HSV values, hue [0..360], saturation/value [0..1]
func ColorFromHSV(hue float32, saturation float32, value float32) color.RGBA {
	ret, fl := colorFromHSV.Call(hue, saturation, value)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorTint - Get color multiplied with another color
func ColorTint(col color.RGBA, tint color.RGBA) color.RGBA {
	ret, fl := colorTint.Call(wasm.Struct(col), wasm.Struct(tint))
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorBrightness - Get color with brightness correction, brightness factor goes from -1.0f to 1.0f
func ColorBrightness(col color.RGBA, factor float32) color.RGBA {
	ret, fl := colorBrightness.Call(wasm.Struct(col), factor)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorContrast - Get color with contrast correction, contrast values between -1.0f and 1.0f
func ColorContrast(col color.RGBA, contrast float32) color.RGBA {
	ret, fl := colorContrast.Call(wasm.Struct(col), contrast)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorAlpha - Get color with alpha applied, alpha goes from 0.0f to 1.0f
func ColorAlpha(col color.RGBA, alpha float32) color.RGBA {
	ret, fl := colorAlpha.Call(wasm.Struct(col), alpha)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorAlphaBlend - Get src alpha-blended into dst color with tint
func ColorAlphaBlend(dst color.RGBA, src color.RGBA, tint color.RGBA) color.RGBA {
	ret, fl := colorAlphaBlend.Call(wasm.Struct(dst), wasm.Struct(src), wasm.Struct(tint))
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// ColorLerp - Get color lerp interpolation between two colors, factor [0.0f..1.0f]
func ColorLerp(col1 color.RGBA, col2 color.RGBA, factor float32) color.RGBA {
	ret, fl := colorLerp.Call(wasm.Struct(col1), wasm.Struct(col2), factor)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// GetColor - Get Color structure from hexadecimal value
func GetColor(hexValue uint) color.RGBA {
	ret, fl := getColor.Call(hexValue)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// GetPixelColor - Get Color from a source pixel pointer of certain format
func GetPixelColor(srcPtr unsafe.Pointer, format int32) color.RGBA {
	ret, fl := getPixelColor.Call(srcPtr, format)
	v := wasm.ReadStruct[color.RGBA](ret)
	wasm.Free(fl...)
	return v
}

// SetPixelColor - Set color formatted into destination pixel pointer
func SetPixelColor(dstPtr unsafe.Pointer, col color.RGBA, format int32) {
	_, fl := setPixelColor.Call(dstPtr, wasm.Struct(col), format)
	wasm.Free(fl...)
}

// GetPixelDataSize - Get pixel data size in bytes for certain format
func GetPixelDataSize(width int32, height int32, format int32) int32 {
	ret, fl := getPixelDataSize.Call(width, height, format)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetFontDefault - Get the default Font
func GetFontDefault() Font {
	ret, fl := getFontDefault.Call()
	v := wasm.ReadStruct[Font](ret)
	wasm.Free(fl...)
	return v
}

// LoadFont - Load font from file into GPU memory (VRAM)
func LoadFont(fileName string) Font {
	ret, fl := loadFont.Call(fileName)
	v := wasm.ReadStruct[Font](ret)
	wasm.Free(fl...)
	return v
}

// LoadFontFromImage - Load font from Image (XNA style)
func LoadFontFromImage(image Image, key color.RGBA, firstChar rune) Font {
	ret, fl := loadFontFromImage.Call(wasm.Struct(image), wasm.Struct(key), firstChar)
	v := wasm.ReadStruct[Font](ret)
	wasm.Free(fl...)
	return v
}

// LoadFontFromMemory - Load font from memory buffer, fileType refers to extension: i.e. '.ttf'
func LoadFontFromMemory(fileType string, fileData []byte, fontSize int32, codepoints []rune) Font {
	ret, fl := loadFontFromMemory.Call(fileType, fileData, fontSize, codepoints)
	v := wasm.ReadStruct[Font](ret)
	wasm.Free(fl...)
	return v
}

// IsFontValid - Check if a font is valid (font data loaded, WARNING: GPU texture not checked)
func IsFontValid(font Font) bool {
	ret, fl := isFontValid.Call(wasm.Struct(font))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// LoadFontData - Load font data for further use
func LoadFontData(fileData []byte, fontSize int32, codepoints []rune, codepointCount int32, typ int32) []GlyphInfo {
	var zero []GlyphInfo
	return zero
}

// GenImageFontAtlas - Generate image font atlas using chars info
func GenImageFontAtlas(glyphs []GlyphInfo, glyphRecs []*Rectangle, fontSize int32, padding int32, packMethod int32) Image {
	ret, fl := genImageFontAtlas.Call(glyphs, glyphRecs, fontSize, padding, packMethod)
	v := wasm.ReadStruct[Image](ret)
	wasm.Free(fl...)
	return v
}

// UnloadFontData - Unload font chars info data (RAM)
func UnloadFontData(glyphs []GlyphInfo) {
	_, fl := unloadFontData.Call(glyphs)
	wasm.Free(fl...)
}

// UnloadFont - Unload font from GPU memory (VRAM)
func UnloadFont(font Font) {
	_, fl := unloadFont.Call(wasm.Struct(font))
	wasm.Free(fl...)
}

// DrawFPS - Draw current FPS
func DrawFPS(posX int32, posY int32) {
	_, fl := drawFPS.Call(posX, posY)
	wasm.Free(fl...)
}

// DrawText - Draw text (using default font)
func DrawText(text string, posX int32, posY int32, fontSize int32, col color.RGBA) {
	_, fl := drawText.Call(text, posX, posY, fontSize, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawTextEx - Draw text using font and additional parameters
func DrawTextEx(font Font, text string, position Vector2, fontSize float32, spacing float32, tint color.RGBA) {
	_, fl := drawTextEx.Call(wasm.Struct(font), text, wasm.Struct(position), fontSize, spacing, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTextPro - Draw text using Font and pro parameters (rotation)
func DrawTextPro(font Font, text string, position Vector2, origin Vector2, rotation float32, fontSize float32, spacing float32, tint color.RGBA) {
	_, fl := drawTextPro.Call(wasm.Struct(font), text, wasm.Struct(position), wasm.Struct(origin), rotation, fontSize, spacing, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTextCodepoint - Draw one character (codepoint)
func DrawTextCodepoint(font Font, codepoint rune, position Vector2, fontSize float32, tint color.RGBA) {
	_, fl := drawTextCodepoint.Call(wasm.Struct(font), codepoint, wasm.Struct(position), fontSize, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawTextCodepoints - Draw multiple character (codepoint)
func DrawTextCodepoints(font Font, codepoints []rune, position Vector2, fontSize float32, spacing float32, tint color.RGBA) {
	_, fl := drawTextCodepoints.Call(wasm.Struct(font), codepoints, wasm.Struct(position), fontSize, spacing, wasm.Struct(tint))
	wasm.Free(fl...)
}

// SetTextLineSpacing - Set vertical line spacing when drawing with line-breaks
func SetTextLineSpacing(spacing int) {
	_, fl := setTextLineSpacing.Call(spacing)
	wasm.Free(fl...)
}

// MeasureText - Measure string width for default font
func MeasureText(text string, fontSize int32) int32 {
	ret, fl := measureText.Call(text, fontSize)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// MeasureTextEx - Measure string size for Font
func MeasureTextEx(font Font, text string, fontSize float32, spacing float32) Vector2 {
	ret, fl := measureTextEx.Call(wasm.Struct(font), text, fontSize, spacing)
	v := wasm.ReadStruct[Vector2](ret)
	wasm.Free(fl...)
	return v
}

// GetGlyphIndex - Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found
func GetGlyphIndex(font Font, codepoint rune) int32 {
	ret, fl := getGlyphIndex.Call(wasm.Struct(font), codepoint)
	v := wasm.Numeric[int32](ret)
	wasm.Free(fl...)
	return v
}

// GetGlyphInfo - Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found
func GetGlyphInfo(font Font, codepoint rune) GlyphInfo {
	ret, fl := getGlyphInfo.Call(wasm.Struct(font), codepoint)
	v := wasm.ReadStruct[GlyphInfo](ret)
	wasm.Free(fl...)
	return v
}

// GetGlyphAtlasRec - Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found
func GetGlyphAtlasRec(font Font, codepoint rune) Rectangle {
	ret, fl := getGlyphAtlasRec.Call(wasm.Struct(font), codepoint)
	v := wasm.ReadStruct[Rectangle](ret)
	wasm.Free(fl...)
	return v
}

// DrawLine3D - Draw a line in 3D world space
func DrawLine3D(startPos Vector3, endPos Vector3, col color.RGBA) {
	_, fl := drawLine3D.Call(wasm.Struct(startPos), wasm.Struct(endPos), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawPoint3D - Draw a point in 3D space, actually a small line
func DrawPoint3D(position Vector3, col color.RGBA) {
	_, fl := drawPoint3D.Call(wasm.Struct(position), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCircle3D - Draw a circle in 3D world space
func DrawCircle3D(center Vector3, radius float32, rotationAxis Vector3, rotationAngle float32, col color.RGBA) {
	_, fl := drawCircle3D.Call(wasm.Struct(center), radius, wasm.Struct(rotationAxis), rotationAngle, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawTriangle3D - Draw a color-filled triangle (vertex in counter-clockwise order!)
func DrawTriangle3D(v1 Vector3, v2 Vector3, v3 Vector3, col color.RGBA) {
	_, fl := drawTriangle3D.Call(wasm.Struct(v1), wasm.Struct(v2), wasm.Struct(v3), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawTriangleStrip3D - Draw a triangle strip defined by points
func DrawTriangleStrip3D(points []Vector3, col color.RGBA) {
	_, fl := drawTriangleStrip3D.Call(points, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCube - Draw cube
func DrawCube(position Vector3, width float32, height float32, length float32, col color.RGBA) {
	_, fl := drawCube.Call(wasm.Struct(position), width, height, length, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCubeV - Draw cube (Vector version)
func DrawCubeV(position Vector3, size Vector3, col color.RGBA) {
	_, fl := drawCubeV.Call(wasm.Struct(position), wasm.Struct(size), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCubeWires - Draw cube wires
func DrawCubeWires(position Vector3, width float32, height float32, length float32, col color.RGBA) {
	_, fl := drawCubeWires.Call(wasm.Struct(position), width, height, length, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCubeWiresV - Draw cube wires (Vector version)
func DrawCubeWiresV(position Vector3, size Vector3, col color.RGBA) {
	_, fl := drawCubeWiresV.Call(wasm.Struct(position), wasm.Struct(size), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSphere - Draw sphere
func DrawSphere(centerPos Vector3, radius float32, col color.RGBA) {
	_, fl := drawSphere.Call(wasm.Struct(centerPos), radius, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSphereEx - Draw sphere with extended parameters
func DrawSphereEx(centerPos Vector3, radius float32, rings int32, slices int32, col color.RGBA) {
	_, fl := drawSphereEx.Call(wasm.Struct(centerPos), radius, rings, slices, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawSphereWires - Draw sphere wires
func DrawSphereWires(centerPos Vector3, radius float32, rings int32, slices int32, col color.RGBA) {
	_, fl := drawSphereWires.Call(wasm.Struct(centerPos), radius, rings, slices, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCylinder - Draw a cylinder/cone
func DrawCylinder(position Vector3, radiusTop float32, radiusBottom float32, height float32, slices int32, col color.RGBA) {
	_, fl := drawCylinder.Call(wasm.Struct(position), radiusTop, radiusBottom, height, slices, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCylinderEx - Draw a cylinder with base at startPos and top at endPos
func DrawCylinderEx(startPos Vector3, endPos Vector3, startRadius float32, endRadius float32, sides int32, col color.RGBA) {
	_, fl := drawCylinderEx.Call(wasm.Struct(startPos), wasm.Struct(endPos), startRadius, endRadius, sides, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCylinderWires - Draw a cylinder/cone wires
func DrawCylinderWires(position Vector3, radiusTop float32, radiusBottom float32, height float32, slices int32, col color.RGBA) {
	_, fl := drawCylinderWires.Call(wasm.Struct(position), radiusTop, radiusBottom, height, slices, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCylinderWiresEx - Draw a cylinder wires with base at startPos and top at endPos
func DrawCylinderWiresEx(startPos Vector3, endPos Vector3, startRadius float32, endRadius float32, sides int32, col color.RGBA) {
	_, fl := drawCylinderWiresEx.Call(wasm.Struct(startPos), wasm.Struct(endPos), startRadius, endRadius, sides, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCapsule - Draw a capsule with the center of its sphere caps at startPos and endPos
func DrawCapsule(startPos Vector3, endPos Vector3, radius float32, slices int32, rings int32, col color.RGBA) {
	_, fl := drawCapsule.Call(wasm.Struct(startPos), wasm.Struct(endPos), radius, slices, rings, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawCapsuleWires - Draw capsule wireframe with the center of its sphere caps at startPos and endPos
func DrawCapsuleWires(startPos Vector3, endPos Vector3, radius float32, slices int32, rings int32, col color.RGBA) {
	_, fl := drawCapsuleWires.Call(wasm.Struct(startPos), wasm.Struct(endPos), radius, slices, rings, wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawPlane - Draw a plane XZ
func DrawPlane(centerPos Vector3, size Vector2, col color.RGBA) {
	_, fl := drawPlane.Call(wasm.Struct(centerPos), wasm.Struct(size), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawRay - Draw a ray line
func DrawRay(ray Ray, col color.RGBA) {
	_, fl := drawRay.Call(wasm.Struct(ray), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawGrid - Draw a grid (centered at (0, 0, 0))
func DrawGrid(slices int32, spacing float32) {
	_, fl := drawGrid.Call(slices, spacing)
	wasm.Free(fl...)
}

// LoadModel - Load model from files (meshes and materials)
func LoadModel(fileName string) Model {
	ret, fl := loadModel.Call(fileName)
	v := wasm.ReadStruct[Model](ret)
	wasm.Free(fl...)
	return v
}

// LoadModelFromMesh - Load model from generated mesh (default material)
func LoadModelFromMesh(mesh Mesh) Model {
	ret, fl := loadModelFromMesh.Call(wasm.Struct(mesh))
	v := wasm.ReadStruct[Model](ret)
	wasm.Free(fl...)
	return v
}

// IsModelValid - Check if a model is valid (loaded in GPU, VAO/VBOs)
func IsModelValid(model Model) bool {
	ret, fl := isModelValid.Call(wasm.Struct(model))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UnloadModel - Unload model (including meshes) from memory (RAM and/or VRAM)
func UnloadModel(model Model) {
	_, fl := unloadModel.Call(wasm.Struct(model))
	wasm.Free(fl...)
}

// GetModelBoundingBox - Compute model bounding box limits (considers all meshes)
func GetModelBoundingBox(model Model) BoundingBox {
	ret, fl := getModelBoundingBox.Call(wasm.Struct(model))
	v := wasm.ReadStruct[BoundingBox](ret)
	wasm.Free(fl...)
	return v
}

// DrawModel - Draw a model (with texture if set)
func DrawModel(model Model, position Vector3, scale float32, tint color.RGBA) {
	_, fl := drawModel.Call(wasm.Struct(model), wasm.Struct(position), scale, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawModelEx - Draw a model with extended parameters
func DrawModelEx(model Model, position Vector3, rotationAxis Vector3, rotationAngle float32, scale Vector3, tint color.RGBA) {
	_, fl := drawModelEx.Call(wasm.Struct(model), wasm.Struct(position), wasm.Struct(rotationAxis), rotationAngle, wasm.Struct(scale), wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawModelWires - Draw a model wires (with texture if set)
func DrawModelWires(model Model, position Vector3, scale float32, tint color.RGBA) {
	_, fl := drawModelWires.Call(wasm.Struct(model), wasm.Struct(position), scale, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawModelWiresEx - Draw a model wires (with texture if set) with extended parameters
func DrawModelWiresEx(model Model, position Vector3, rotationAxis Vector3, rotationAngle float32, scale Vector3, tint color.RGBA) {
	_, fl := drawModelWiresEx.Call(wasm.Struct(model), wasm.Struct(position), wasm.Struct(rotationAxis), rotationAngle, wasm.Struct(scale), wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawModelPoints - Draw a model as points
func DrawModelPoints(model Model, position Vector3, scale float32, tint color.RGBA) {
	_, fl := drawModelPoints.Call(wasm.Struct(model), wasm.Struct(position), scale, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawModelPointsEx - Draw a model as points with extended parameters
func DrawModelPointsEx(model Model, position Vector3, rotationAxis Vector3, rotationAngle float32, scale Vector3, tint color.RGBA) {
	_, fl := drawModelPointsEx.Call(wasm.Struct(model), wasm.Struct(position), wasm.Struct(rotationAxis), rotationAngle, wasm.Struct(scale), wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawBoundingBox - Draw bounding box (wires)
func DrawBoundingBox(box BoundingBox, col color.RGBA) {
	_, fl := drawBoundingBox.Call(wasm.Struct(box), wasm.Struct(col))
	wasm.Free(fl...)
}

// DrawBillboard - Draw a billboard texture
func DrawBillboard(camera Camera, texture Texture2D, position Vector3, scale float32, tint color.RGBA) {
	_, fl := drawBillboard.Call(camera, wasm.Struct(texture), wasm.Struct(position), scale, wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawBillboardRec - Draw a billboard texture defined by source
func DrawBillboardRec(camera Camera, texture Texture2D, source Rectangle, position Vector3, size Vector2, tint color.RGBA) {
	_, fl := drawBillboardRec.Call(camera, wasm.Struct(texture), wasm.Struct(source), wasm.Struct(position), wasm.Struct(size), wasm.Struct(tint))
	wasm.Free(fl...)
}

// DrawBillboardPro - Draw a billboard texture defined by source and rotation
func DrawBillboardPro(camera Camera, texture Texture2D, source Rectangle, position Vector3, up Vector3, size Vector2, origin Vector2, rotation float32, tint color.RGBA) {
	_, fl := drawBillboardPro.Call(camera, wasm.Struct(texture), wasm.Struct(source), wasm.Struct(position), wasm.Struct(up), wasm.Struct(size), wasm.Struct(origin), rotation, wasm.Struct(tint))
	wasm.Free(fl...)
}

// UploadMesh - Upload mesh vertex data in GPU and provide VAO/VBO ids
func UploadMesh(mesh *Mesh, dynamic bool) {
	_, fl := uploadMesh.Call(mesh, dynamic)
	wasm.Free(fl...)
}

// UpdateMeshBuffer - Update mesh vertex data in GPU for a specific buffer index
func UpdateMeshBuffer(mesh Mesh, index int32, data []byte, offset int) {
	_, fl := updateMeshBuffer.Call(wasm.Struct(mesh), index, data, offset)
	wasm.Free(fl...)
}

// UnloadMesh - Unload mesh data from CPU and GPU
func UnloadMesh(mesh *Mesh) {
	_, fl := unloadMesh.Call(mesh)
	wasm.Free(fl...)
}

// DrawMesh - Draw a 3d mesh with material and transform
func DrawMesh(mesh Mesh, material Material, transform Matrix) {
	_, fl := drawMesh.Call(wasm.Struct(mesh), wasm.Struct(material), wasm.Struct(transform))
	wasm.Free(fl...)
}

// DrawMeshInstanced - Draw multiple mesh instances with material and different transforms
func DrawMeshInstanced(mesh Mesh, material Material, transforms []Matrix, instances int32) {
	_, fl := drawMeshInstanced.Call(wasm.Struct(mesh), wasm.Struct(material), transforms, instances)
	wasm.Free(fl...)
}

// ExportMesh - Export mesh data to file, returns true on success
func ExportMesh(mesh Mesh, fileName string) bool {
	ret, fl := exportMesh.Call(wasm.Struct(mesh), fileName)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetMeshBoundingBox - Compute mesh bounding box limits
func GetMeshBoundingBox(mesh Mesh) BoundingBox {
	ret, fl := getMeshBoundingBox.Call(wasm.Struct(mesh))
	v := wasm.ReadStruct[BoundingBox](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshTangents - Compute mesh tangents
func GenMeshTangents(mesh *Mesh) {
	_, fl := genMeshTangents.Call(mesh)
	wasm.Free(fl...)
}

// GenMeshPoly - Generate polygonal mesh
func GenMeshPoly(sides int, radius float32) Mesh {
	ret, fl := genMeshPoly.Call(sides, radius)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshPlane - Generate plane mesh (with subdivisions)
func GenMeshPlane(width float32, length float32, resX int, resZ int) Mesh {
	ret, fl := genMeshPlane.Call(width, length, resX, resZ)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshCube - Generate cuboid mesh
func GenMeshCube(width float32, height float32, length float32) Mesh {
	ret, fl := genMeshCube.Call(width, height, length)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshSphere - Generate sphere mesh (standard sphere)
func GenMeshSphere(radius float32, rings int, slices int) Mesh {
	ret, fl := genMeshSphere.Call(radius, rings, slices)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshHemiSphere - Generate half-sphere mesh (no bottom cap)
func GenMeshHemiSphere(radius float32, rings int, slices int) Mesh {
	ret, fl := genMeshHemiSphere.Call(radius, rings, slices)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshCylinder - Generate cylinder mesh
func GenMeshCylinder(radius float32, height float32, slices int) Mesh {
	ret, fl := genMeshCylinder.Call(radius, height, slices)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshCone - Generate cone/pyramid mesh
func GenMeshCone(radius float32, height float32, slices int) Mesh {
	ret, fl := genMeshCone.Call(radius, height, slices)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshTorus - Generate torus mesh
func GenMeshTorus(radius float32, size float32, radSeg int, sides int) Mesh {
	ret, fl := genMeshTorus.Call(radius, size, radSeg, sides)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshKnot - Generate trefoil knot mesh
func GenMeshKnot(radius float32, size float32, radSeg int, sides int) Mesh {
	ret, fl := genMeshKnot.Call(radius, size, radSeg, sides)
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshHeightmap - Generate heightmap mesh from image data
func GenMeshHeightmap(heightmap Image, size Vector3) Mesh {
	ret, fl := genMeshHeightmap.Call(wasm.Struct(heightmap), wasm.Struct(size))
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// GenMeshCubicmap - Generate cubes-based map mesh from image data
func GenMeshCubicmap(cubicmap Image, cubeSize Vector3) Mesh {
	ret, fl := genMeshCubicmap.Call(wasm.Struct(cubicmap), wasm.Struct(cubeSize))
	v := wasm.ReadStruct[Mesh](ret)
	wasm.Free(fl...)
	return v
}

// LoadMaterials - Load materials from model file
func LoadMaterials(fileName string) []Material {
	var zero []Material
	return zero
}

// LoadMaterialDefault - Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps)
func LoadMaterialDefault() Material {
	ret, fl := loadMaterialDefault.Call()
	v := wasm.ReadStruct[Material](ret)
	wasm.Free(fl...)
	return v
}

// IsMaterialValid - Check if a material is valid (shader assigned, map textures loaded in GPU)
func IsMaterialValid(material Material) bool {
	ret, fl := isMaterialValid.Call(wasm.Struct(material))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UnloadMaterial - Unload material from GPU memory (VRAM)
func UnloadMaterial(material Material) {
	_, fl := unloadMaterial.Call(wasm.Struct(material))
	wasm.Free(fl...)
}

// SetMaterialTexture - Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...)
func SetMaterialTexture(material *Material, mapType int32, texture Texture2D) {
	_, fl := setMaterialTexture.Call(material, mapType, wasm.Struct(texture))
	wasm.Free(fl...)
}

// SetModelMeshMaterial - Set material for a mesh
func SetModelMeshMaterial(model *Model, meshId int32, materialId int32) {
	_, fl := setModelMeshMaterial.Call(model, meshId, materialId)
	wasm.Free(fl...)
}

// LoadModelAnimations - Load model animations from file
func LoadModelAnimations(fileName string) []ModelAnimation {
	var zero []ModelAnimation
	return zero
}

// UpdateModelAnimation - Update model animation pose (CPU)
func UpdateModelAnimation(model Model, anim ModelAnimation, frame int32) {
	_, fl := updateModelAnimation.Call(wasm.Struct(model), wasm.Struct(anim), frame)
	wasm.Free(fl...)
}

// UpdateModelAnimationBones - Update model animation mesh bone matrices (GPU skinning)
func UpdateModelAnimationBones(model Model, anim ModelAnimation, frame int32) {
	_, fl := updateModelAnimationBones.Call(wasm.Struct(model), wasm.Struct(anim), frame)
	wasm.Free(fl...)
}

// UnloadModelAnimation - Unload animation data
func UnloadModelAnimation(anim ModelAnimation) {
	_, fl := unloadModelAnimation.Call(wasm.Struct(anim))
	wasm.Free(fl...)
}

// UnloadModelAnimations - Unload animation array data
func UnloadModelAnimations(animations []ModelAnimation) {
	_, fl := unloadModelAnimations.Call(animations)
	wasm.Free(fl...)
}

// IsModelAnimationValid - Check model animation skeleton match
func IsModelAnimationValid(model Model, anim ModelAnimation) bool {
	ret, fl := isModelAnimationValid.Call(wasm.Struct(model), wasm.Struct(anim))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionSpheres - Check collision between two spheres
func CheckCollisionSpheres(center1 Vector3, radius1 float32, center2 Vector3, radius2 float32) bool {
	ret, fl := checkCollisionSpheres.Call(wasm.Struct(center1), radius1, wasm.Struct(center2), radius2)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionBoxes - Check collision between two bounding boxes
func CheckCollisionBoxes(box1 BoundingBox, box2 BoundingBox) bool {
	ret, fl := checkCollisionBoxes.Call(wasm.Struct(box1), wasm.Struct(box2))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// CheckCollisionBoxSphere - Check collision between box and sphere
func CheckCollisionBoxSphere(box BoundingBox, center Vector3, radius float32) bool {
	ret, fl := checkCollisionBoxSphere.Call(wasm.Struct(box), wasm.Struct(center), radius)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// GetRayCollisionSphere - Get collision info between ray and sphere
func GetRayCollisionSphere(ray Ray, center Vector3, radius float32) RayCollision {
	ret, fl := getRayCollisionSphere.Call(wasm.Struct(ray), wasm.Struct(center), radius)
	v := wasm.ReadStruct[RayCollision](ret)
	wasm.Free(fl...)
	return v
}

// GetRayCollisionBox - Get collision info between ray and box
func GetRayCollisionBox(ray Ray, box BoundingBox) RayCollision {
	ret, fl := getRayCollisionBox.Call(wasm.Struct(ray), wasm.Struct(box))
	v := wasm.ReadStruct[RayCollision](ret)
	wasm.Free(fl...)
	return v
}

// GetRayCollisionMesh - Get collision info between ray and mesh
func GetRayCollisionMesh(ray Ray, mesh Mesh, transform Matrix) RayCollision {
	ret, fl := getRayCollisionMesh.Call(wasm.Struct(ray), wasm.Struct(mesh), wasm.Struct(transform))
	v := wasm.ReadStruct[RayCollision](ret)
	wasm.Free(fl...)
	return v
}

// GetRayCollisionTriangle - Get collision info between ray and triangle
func GetRayCollisionTriangle(ray Ray, p1 Vector3, p2 Vector3, p3 Vector3) RayCollision {
	ret, fl := getRayCollisionTriangle.Call(wasm.Struct(ray), wasm.Struct(p1), wasm.Struct(p2), wasm.Struct(p3))
	v := wasm.ReadStruct[RayCollision](ret)
	wasm.Free(fl...)
	return v
}

// GetRayCollisionQuad - Get collision info between ray and quad
func GetRayCollisionQuad(ray Ray, p1 Vector3, p2 Vector3, p3 Vector3, p4 Vector3) RayCollision {
	ret, fl := getRayCollisionQuad.Call(wasm.Struct(ray), wasm.Struct(p1), wasm.Struct(p2), wasm.Struct(p3), wasm.Struct(p4))
	v := wasm.ReadStruct[RayCollision](ret)
	wasm.Free(fl...)
	return v
}

// InitAudioDevice - Initialize audio device and context
func InitAudioDevice() {
	_, fl := initAudioDevice.Call()
	wasm.Free(fl...)
}

// CloseAudioDevice - Close the audio device and context
func CloseAudioDevice() {
	_, fl := closeAudioDevice.Call()
	wasm.Free(fl...)
}

// IsAudioDeviceReady - Check if audio device has been initialized successfully
func IsAudioDeviceReady() bool {
	ret, fl := isAudioDeviceReady.Call()
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// SetMasterVolume - Set master volume (listener)
func SetMasterVolume(volume float32) {
	_, fl := setMasterVolume.Call(volume)
	wasm.Free(fl...)
}

// GetMasterVolume - Get master volume (listener)
func GetMasterVolume() float32 {
	ret, fl := getMasterVolume.Call()
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// LoadWave - Load wave data from file
func LoadWave(fileName string) Wave {
	ret, fl := loadWave.Call(fileName)
	v := wasm.ReadStruct[Wave](ret)
	wasm.Free(fl...)
	return v
}

// LoadWaveFromMemory - Load wave from memory buffer, fileType refers to extension: i.e. '.wav'
func LoadWaveFromMemory(fileType string, fileData []byte, dataSize int32) Wave {
	ret, fl := loadWaveFromMemory.Call(fileType, fileData, dataSize)
	v := wasm.ReadStruct[Wave](ret)
	wasm.Free(fl...)
	return v
}

// IsWaveValid - Checks if wave data is valid (data loaded and parameters)
func IsWaveValid(wave Wave) bool {
	ret, fl := isWaveValid.Call(wasm.Struct(wave))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// LoadSound - Load sound from file
func LoadSound(fileName string) Sound {
	ret, fl := loadSound.Call(fileName)
	v := wasm.ReadStruct[Sound](ret)
	wasm.Free(fl...)
	return v
}

// LoadSoundFromWave - Load sound from wave data
func LoadSoundFromWave(wave Wave) Sound {
	ret, fl := loadSoundFromWave.Call(wasm.Struct(wave))
	v := wasm.ReadStruct[Sound](ret)
	wasm.Free(fl...)
	return v
}

// LoadSoundAlias - Create a new sound that shares the same sample data as the source sound, does not own the sound data
func LoadSoundAlias(source Sound) Sound {
	ret, fl := loadSoundAlias.Call(wasm.Struct(source))
	v := wasm.ReadStruct[Sound](ret)
	wasm.Free(fl...)
	return v
}

// IsSoundValid - Checks if a sound is valid (data loaded and buffers initialized)
func IsSoundValid(sound Sound) bool {
	ret, fl := isSoundValid.Call(wasm.Struct(sound))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UpdateSound - Update sound buffer with new data
func UpdateSound(sound Sound, data []byte, sampleCount int32) {
	_, fl := updateSound.Call(wasm.Struct(sound), data, sampleCount)
	wasm.Free(fl...)
}

// UnloadWave - Unload wave data
func UnloadWave(wave Wave) {
	_, fl := unloadWave.Call(wasm.Struct(wave))
	wasm.Free(fl...)
}

// UnloadSound - Unload sound
func UnloadSound(sound Sound) {
	_, fl := unloadSound.Call(wasm.Struct(sound))
	wasm.Free(fl...)
}

// UnloadSoundAlias - Unload a sound alias (does not deallocate sample data)
func UnloadSoundAlias(alias Sound) {
	_, fl := unloadSoundAlias.Call(wasm.Struct(alias))
	wasm.Free(fl...)
}

// ExportWave - Export wave data to file, returns true on success
func ExportWave(wave Wave, fileName string) bool {
	ret, fl := exportWave.Call(wasm.Struct(wave), fileName)
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// PlaySound - Play a sound
func PlaySound(sound Sound) {
	_, fl := playSound.Call(wasm.Struct(sound))
	wasm.Free(fl...)
}

// StopSound - Stop playing a sound
func StopSound(sound Sound) {
	_, fl := stopSound.Call(wasm.Struct(sound))
	wasm.Free(fl...)
}

// PauseSound - Pause a sound
func PauseSound(sound Sound) {
	_, fl := pauseSound.Call(wasm.Struct(sound))
	wasm.Free(fl...)
}

// ResumeSound - Resume a paused sound
func ResumeSound(sound Sound) {
	_, fl := resumeSound.Call(wasm.Struct(sound))
	wasm.Free(fl...)
}

// IsSoundPlaying - Check if a sound is currently playing
func IsSoundPlaying(sound Sound) bool {
	ret, fl := isSoundPlaying.Call(wasm.Struct(sound))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// SetSoundVolume - Set volume for a sound (1.0 is max level)
func SetSoundVolume(sound Sound, volume float32) {
	_, fl := setSoundVolume.Call(wasm.Struct(sound), volume)
	wasm.Free(fl...)
}

// SetSoundPitch - Set pitch for a sound (1.0 is base level)
func SetSoundPitch(sound Sound, pitch float32) {
	_, fl := setSoundPitch.Call(wasm.Struct(sound), pitch)
	wasm.Free(fl...)
}

// SetSoundPan - Set pan for a sound (0.5 is center)
func SetSoundPan(sound Sound, pan float32) {
	_, fl := setSoundPan.Call(wasm.Struct(sound), pan)
	wasm.Free(fl...)
}

// WaveCopy - Copy a wave to a new wave
func WaveCopy(wave Wave) Wave {
	ret, fl := waveCopy.Call(wasm.Struct(wave))
	v := wasm.ReadStruct[Wave](ret)
	wasm.Free(fl...)
	return v
}

// WaveCrop - Crop a wave to defined frames range
func WaveCrop(wave *Wave, initFrame int32, finalFrame int32) {
	_, fl := waveCrop.Call(wave, initFrame, finalFrame)
	wasm.Free(fl...)
}

// WaveFormat - Convert wave data to desired format
func WaveFormat(wave *Wave, sampleRate int32, sampleSize int32, channels int32) {
	_, fl := waveFormat.Call(wave, sampleRate, sampleSize, channels)
	wasm.Free(fl...)
}

// LoadWaveSamples - Load samples data from wave as a 32bit float data array
func LoadWaveSamples(wave Wave) []float32 {
	var zero []float32
	return zero
}

// UnloadWaveSamples - Unload samples data loaded with LoadWaveSamples()
func UnloadWaveSamples(samples []float32) {
	_, fl := unloadWaveSamples.Call(samples)
	wasm.Free(fl...)
}

// LoadMusicStream - Load music stream from file
func LoadMusicStream(fileName string) Music {
	ret, fl := loadMusicStream.Call(fileName)
	v := wasm.ReadStruct[Music](ret)
	wasm.Free(fl...)
	return v
}

// LoadMusicStreamFromMemory - Load music stream from data
func LoadMusicStreamFromMemory(fileType string, data []byte, dataSize int32) Music {
	ret, fl := loadMusicStreamFromMemory.Call(fileType, data, dataSize)
	v := wasm.ReadStruct[Music](ret)
	wasm.Free(fl...)
	return v
}

// IsMusicValid - Checks if a music stream is valid (context and buffers initialized)
func IsMusicValid(music Music) bool {
	ret, fl := isMusicValid.Call(wasm.Struct(music))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UnloadMusicStream - Unload music stream
func UnloadMusicStream(music Music) {
	_, fl := unloadMusicStream.Call(wasm.Struct(music))
	wasm.Free(fl...)
}

// PlayMusicStream - Start music playing
func PlayMusicStream(music Music) {
	_, fl := playMusicStream.Call(wasm.Struct(music))
	wasm.Free(fl...)
}

// IsMusicStreamPlaying - Check if music is playing
func IsMusicStreamPlaying(music Music) bool {
	ret, fl := isMusicStreamPlaying.Call(wasm.Struct(music))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UpdateMusicStream - Updates buffers for music streaming
func UpdateMusicStream(music Music) {
	_, fl := updateMusicStream.Call(wasm.Struct(music))
	wasm.Free(fl...)
}

// StopMusicStream - Stop music playing
func StopMusicStream(music Music) {
	_, fl := stopMusicStream.Call(wasm.Struct(music))
	wasm.Free(fl...)
}

// PauseMusicStream - Pause music playing
func PauseMusicStream(music Music) {
	_, fl := pauseMusicStream.Call(wasm.Struct(music))
	wasm.Free(fl...)
}

// ResumeMusicStream - Resume playing paused music
func ResumeMusicStream(music Music) {
	_, fl := resumeMusicStream.Call(wasm.Struct(music))
	wasm.Free(fl...)
}

// SeekMusicStream - Seek music to a position (in seconds)
func SeekMusicStream(music Music, position float32) {
	_, fl := seekMusicStream.Call(wasm.Struct(music), position)
	wasm.Free(fl...)
}

// SetMusicVolume - Set volume for music (1.0 is max level)
func SetMusicVolume(music Music, volume float32) {
	_, fl := setMusicVolume.Call(wasm.Struct(music), volume)
	wasm.Free(fl...)
}

// SetMusicPitch - Set pitch for a music (1.0 is base level)
func SetMusicPitch(music Music, pitch float32) {
	_, fl := setMusicPitch.Call(wasm.Struct(music), pitch)
	wasm.Free(fl...)
}

// SetMusicPan - Set pan for a music (0.5 is center)
func SetMusicPan(music Music, pan float32) {
	_, fl := setMusicPan.Call(wasm.Struct(music), pan)
	wasm.Free(fl...)
}

// GetMusicTimeLength - Get music time length (in seconds)
func GetMusicTimeLength(music Music) float32 {
	ret, fl := getMusicTimeLength.Call(wasm.Struct(music))
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// GetMusicTimePlayed - Get current music time played (in seconds)
func GetMusicTimePlayed(music Music) float32 {
	ret, fl := getMusicTimePlayed.Call(wasm.Struct(music))
	v := wasm.Numeric[float32](ret)
	wasm.Free(fl...)
	return v
}

// LoadAudioStream - Load audio stream (to stream raw audio pcm data)
func LoadAudioStream(sampleRate uint32, sampleSize uint32, channels uint32) AudioStream {
	ret, fl := loadAudioStream.Call(sampleRate, sampleSize, channels)
	v := wasm.ReadStruct[AudioStream](ret)
	wasm.Free(fl...)
	return v
}

// IsAudioStreamValid - Checks if an audio stream is valid (buffers initialized)
func IsAudioStreamValid(stream AudioStream) bool {
	ret, fl := isAudioStreamValid.Call(wasm.Struct(stream))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// UnloadAudioStream - Unload audio stream and free memory
func UnloadAudioStream(stream AudioStream) {
	_, fl := unloadAudioStream.Call(wasm.Struct(stream))
	wasm.Free(fl...)
}

// UpdateAudioStream - Update audio stream buffers with data
func UpdateAudioStream(stream AudioStream, data []float32) {
	_, fl := updateAudioStream.Call(wasm.Struct(stream), data)
	wasm.Free(fl...)
}

// IsAudioStreamProcessed - Check if any audio stream buffers requires refill
func IsAudioStreamProcessed(stream AudioStream) bool {
	ret, fl := isAudioStreamProcessed.Call(wasm.Struct(stream))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// PlayAudioStream - Play audio stream
func PlayAudioStream(stream AudioStream) {
	_, fl := playAudioStream.Call(wasm.Struct(stream))
	wasm.Free(fl...)
}

// PauseAudioStream - Pause audio stream
func PauseAudioStream(stream AudioStream) {
	_, fl := pauseAudioStream.Call(wasm.Struct(stream))
	wasm.Free(fl...)
}

// ResumeAudioStream - Resume audio stream
func ResumeAudioStream(stream AudioStream) {
	_, fl := resumeAudioStream.Call(wasm.Struct(stream))
	wasm.Free(fl...)
}

// IsAudioStreamPlaying - Check if audio stream is playing
func IsAudioStreamPlaying(stream AudioStream) bool {
	ret, fl := isAudioStreamPlaying.Call(wasm.Struct(stream))
	v := wasm.Boolean(ret)
	wasm.Free(fl...)
	return v
}

// StopAudioStream - Stop audio stream
func StopAudioStream(stream AudioStream) {
	_, fl := stopAudioStream.Call(wasm.Struct(stream))
	wasm.Free(fl...)
}

// SetAudioStreamVolume - Set volume for audio stream (1.0 is max level)
func SetAudioStreamVolume(stream AudioStream, volume float32) {
	_, fl := setAudioStreamVolume.Call(wasm.Struct(stream), volume)
	wasm.Free(fl...)
}

// SetAudioStreamPitch - Set pitch for audio stream (1.0 is base level)
func SetAudioStreamPitch(stream AudioStream, pitch float32) {
	_, fl := setAudioStreamPitch.Call(wasm.Struct(stream), pitch)
	wasm.Free(fl...)
}

// SetAudioStreamPan - Set pan for audio stream (0.5 is centered)
func SetAudioStreamPan(stream AudioStream, pan float32) {
	_, fl := setAudioStreamPan.Call(wasm.Struct(stream), pan)
	wasm.Free(fl...)
}

// SetAudioStreamBufferSizeDefault - Default size for new audio streams
func SetAudioStreamBufferSizeDefault(size int32) {
	_, fl := setAudioStreamBufferSizeDefault.Call(size)
	wasm.Free(fl...)
}

// SetAudioStreamCallback - Audio thread callback to request new data
func SetAudioStreamCallback(stream AudioStream, callback AudioCallback) {
	_, fl := setAudioStreamCallback.Call(wasm.Struct(stream), callback)
	wasm.Free(fl...)
}

// AttachAudioStreamProcessor - Attach audio stream processor to stream, receives the samples as <float>s
func AttachAudioStreamProcessor(stream AudioStream, processor AudioCallback) {
	_, fl := attachAudioStreamProcessor.Call(wasm.Struct(stream), processor)
	wasm.Free(fl...)
}

// DetachAudioStreamProcessor - Detach audio stream processor from stream
func DetachAudioStreamProcessor(stream AudioStream, processor AudioCallback) {
	_, fl := detachAudioStreamProcessor.Call(wasm.Struct(stream), processor)
	wasm.Free(fl...)
}

// AttachAudioMixedProcessor - Attach audio stream processor to the entire audio pipeline, receives the samples as <float>s
func AttachAudioMixedProcessor(processor AudioCallback) {
	_, fl := attachAudioMixedProcessor.Call(processor)
	wasm.Free(fl...)
}

// DetachAudioMixedProcessor - Detach audio stream processor from the entire audio pipeline
func DetachAudioMixedProcessor(processor AudioCallback) {
	_, fl := detachAudioMixedProcessor.Call(processor)
	wasm.Free(fl...)
}

// SetCallbackFunc - Sets callback function
func SetCallbackFunc() {
	_, fl := setCallbackFunc.Call()
	wasm.Free(fl...)
}


// ToImage converts a Image to Go image.Image
func ToImage() image.Image {
	// ret, fl := toImage.Call()
	// // v := wasm.Numeric[image.Image](ret)
	// wasm.Free(fl...)
	// return v
	return nil
}

// OpenAsset - Open asset
func OpenAsset(name string) Asset {
	// ret, fl := openAsset.Call(name)
	// v := wasm.Numeric[Asset](ret)
	// wasm.Free(fl...)
	// return v
	return nil
}

// HomeDir - Returns user home directory
// NOTE: On Android this returns internal data path and must be called after InitWindow
func HomeDir() string {
	ret, fl := homeDir.Call()
	v := wasm.Numeric[string](ret)
	wasm.Free(fl...)
	return v
}
