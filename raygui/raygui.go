//go:build js

package raygui

import (
	"image/color"

	wasm "github.com/BrownNPC/Raylib-Go-Wasm/wasm-runtime"
	rl "github.com/gen2brain/raylib-go/raylib"
)

type (
	ControlID     uint16
	PropertyID    uint16
	PropertyValue uint32

	IconID uint32
)

func (p PropertyID) IsExtended() bool {
	return p >= 16
}

func (v PropertyValue) AsColor() rl.Color {
	return rl.Color{uint8(v >> 24), uint8(v >> 16), uint8(v >> 8), uint8(v)}
}

func NewColorPropertyValue(color rl.Color) PropertyValue {
	return PropertyValue(uint32(color.R)<<24 + uint32(color.G)<<16 + uint32(color.B)<<8 + uint32(color.A))
}

// Gui control state
const (
	STATE_NORMAL PropertyValue = iota
	STATE_FOCUSED
	STATE_PRESSED
	STATE_DISABLED
)

// Gui control text alignment
const (
	TEXT_ALIGN_LEFT PropertyValue = iota
	TEXT_ALIGN_CENTER
	TEXT_ALIGN_RIGHT
)

// Gui control text alignment vertical
// NOTE: Text vertical position inside the text bounds
const (
	TEXT_ALIGN_TOP PropertyValue = iota
	TEXT_ALIGN_MIDDLE
	TEXT_ALIGN_BOTTOM
)

// Gui control text wrap mode
// NOTE: Useful for multiline text
const (
	TEXT_WRAP_NONE PropertyValue = iota
	TEXT_WRAP_CHAR
	TEXT_WRAP_WORD
)

const (
	SCROLLBAR_LEFT_SIDE PropertyValue = iota
	SCROLLBAR_RIGHT_SIDE
)

// Gui controls
const (
	// Default -> populates to all controls when set
	DEFAULT ControlID = iota

	// Basic controls
	LABEL // Used also for: LABELBUTTON
	BUTTON
	TOGGLE // Used also for: TOGGLEGROUP
	SLIDER // Used also for: SLIDERBAR, TOGGLESLIDER
	PROGRESSBAR
	CHECKBOX
	COMBOBOX
	DROPDOWNBOX
	TEXTBOX // Used also for: TEXTBOXMULTI
	VALUEBOX
	CONTROL11
	LISTVIEW
	COLORPICKER
	SCROLLBAR
	STATUSBAR
)

// ----------------------------------------------------------------------------------
// Module Types and Structures Definition
// ----------------------------------------------------------------------------------
// Gui control property style color element
const (
	BORDER PropertyID = iota
	BASE
	TEXT
	OTHER
)

// Gui base properties for every control
// NOTE: RAYGUI_MAX_PROPS_BASE properties (by default 16 properties)
const (
	BORDER_COLOR_NORMAL   PropertyID = iota // Control border color in STATE_NORMAL
	BASE_COLOR_NORMAL                       // Control base color in STATE_NORMAL
	TEXT_COLOR_NORMAL                       // Control text color in STATE_NORMAL
	BORDER_COLOR_FOCUSED                    // Control border color in STATE_FOCUSED
	BASE_COLOR_FOCUSED                      // Control base color in STATE_FOCUSED
	TEXT_COLOR_FOCUSED                      // Control text color in STATE_FOCUSED
	BORDER_COLOR_PRESSED                    // Control border color in STATE_PRESSED
	BASE_COLOR_PRESSED                      // Control base color in STATE_PRESSED
	TEXT_COLOR_PRESSED                      // Control text color in STATE_PRESSED
	BORDER_COLOR_DISABLED                   // Control border color in STATE_DISABLED
	BASE_COLOR_DISABLED                     // Control base color in STATE_DISABLED
	TEXT_COLOR_DISABLED                     // Control text color in STATE_DISABLED
	BORDER_WIDTH                            // Control border size, 0 for no border
	TEXT_PADDING                            // Control text padding, not considering border
	TEXT_ALIGNMENT                          // Control text horizontal alignment inside control text bound (after border and padding)
)

// Gui extended properties depend on control
// NOTE: RAYGUI_MAX_PROPS_EXTENDED properties (by default, max 8 properties)
// ----------------------------------------------------------------------------------
// DEFAULT extended properties
// NOTE: Those properties are common to all controls or global
// WARNING: We only have 8 slots for those properties by default!!! -> New global control: TEXT?
const (
	TEXT_SIZE               PropertyID = 16 + iota // Text size (glyphs max height)
	TEXT_SPACING                                   // Text spacing between glyphs
	LINE_COLOR                                     // Line control color
	BACKGROUND_COLOR                               // Background color
	TEXT_LINE_SPACING                              // Text spacing between lines
	TEXT_ALIGNMENT_VERTICAL                        // Text vertical alignment inside text bounds (after border and padding)
	TEXT_WRAP_MODE                                 // Text wrap-mode inside text bounds
)

// Toggle/ToggleGroup
const (
	GROUP_PADDING PropertyID = 16 + iota // ToggleGroup separation between toggles
)

// Slider/SliderBar
const (
	SLIDER_WIDTH   PropertyID = 16 + iota // Slider size of internal bar
	SLIDER_PADDING                        // Slider/SliderBar internal bar padding
)

// ProgressBar
const (
	PROGRESS_PADDING PropertyID = 16 + iota // ProgressBar internal padding
)

// ScrollBar
const (
	ARROWS_SIZE           PropertyID = 16 + iota // ScrollBar arrows size
	ARROWS_VISIBLE                               // ScrollBar arrows visible
	SCROLL_SLIDER_PADDING                        // ScrollBar slider internal padding
	SCROLL_SLIDER_SIZE                           // ScrollBar slider size
	SCROLL_PADDING                               // ScrollBar scroll padding from arrows
	SCROLL_SPEED                                 // ScrollBar scrolling speed
)

// CheckBox
const (
	CHECK_PADDING PropertyID = 16 + iota // CheckBox internal check padding
)

// ComboBox
const (
	COMBO_BUTTON_WIDTH   PropertyID = 16 + iota // ComboBox right button width
	COMBO_BUTTON_SPACING                        // ComboBox button separation
)

// DropdownBox
const (
	ARROW_PADDING          PropertyID = 16 + iota // DropdownBox arrow separation from border and items
	DROPDOWN_ITEMS_SPACING                        // DropdownBox items separation
	DROPDOWN_ARROW_HIDDEN                         // DropdownBox arrow hidden
	DROPDOWN_ROLL_UP                              // DropdownBox roll up flag (default rolls down)
)

// TextBox/TextBoxMulti/ValueBox/Spinner
const (
	TEXT_READONLY PropertyID = 16 + iota // TextBox in read-only mode: 0-text editable, 1-text no-editable
)

// ValueBox/Spinner
const (
	SPINNER_BUTTON_WIDTH   PropertyID = 16 // Spinner left/right buttons width
	SPINNER_BUTTON_SPACING                 // Spinner buttons separation
)

// ListView
const (
	LIST_ITEMS_HEIGHT        PropertyID = 16 + iota // ListView items height
	LIST_ITEMS_SPACING                              // ListView items separation
	SCROLLBAR_WIDTH                                 // ListView scrollbar size (usually width)
	SCROLLBAR_SIDE                                  // ListView scrollbar side (0-SCROLLBAR_LEFT_SIDE, 1-SCROLLBAR_RIGHT_SIDE)
	LIST_ITEMS_BORDER_NORMAL                        // ListView items border enabled in normal state
	LIST_ITEMS_BORDER_WIDTH                         // ListView items border width
)

// ColorPicker
const (
	COLOR_SELECTOR_SIZE      PropertyID = 16 + iota
	HUEBAR_WIDTH                        // ColorPicker right hue bar width
	HUEBAR_PADDING                      // ColorPicker right hue bar separation from panel
	HUEBAR_SELECTOR_HEIGHT              // ColorPicker right hue bar selector height
	HUEBAR_SELECTOR_OVERFLOW            // ColorPicker right hue bar selector overflow
)

// Icons enumeration
const (
	ICON_NONE                    IconID = 0
	ICON_FOLDER_FILE_OPEN        IconID = 1
	ICON_FILE_SAVE_CLASSIC       IconID = 2
	ICON_FOLDER_OPEN             IconID = 3
	ICON_FOLDER_SAVE             IconID = 4
	ICON_FILE_OPEN               IconID = 5
	ICON_FILE_SAVE               IconID = 6
	ICON_FILE_EXPORT             IconID = 7
	ICON_FILE_ADD                IconID = 8
	ICON_FILE_DELETE             IconID = 9
	ICON_FILETYPE_TEXT           IconID = 10
	ICON_FILETYPE_AUDIO          IconID = 11
	ICON_FILETYPE_IMAGE          IconID = 12
	ICON_FILETYPE_PLAY           IconID = 13
	ICON_FILETYPE_VIDEO          IconID = 14
	ICON_FILETYPE_INFO           IconID = 15
	ICON_FILE_COPY               IconID = 16
	ICON_FILE_CUT                IconID = 17
	ICON_FILE_PASTE              IconID = 18
	ICON_CURSOR_HAND             IconID = 19
	ICON_CURSOR_POINTER          IconID = 20
	ICON_CURSOR_CLASSIC          IconID = 21
	ICON_PENCIL                  IconID = 22
	ICON_PENCIL_BIG              IconID = 23
	ICON_BRUSH_CLASSIC           IconID = 24
	ICON_BRUSH_PAINTER           IconID = 25
	ICON_WATER_DROP              IconID = 26
	ICON_COLOR_PICKER            IconID = 27
	ICON_RUBBER                  IconID = 28
	ICON_COLOR_BUCKET            IconID = 29
	ICON_TEXT_T                  IconID = 30
	ICON_TEXT_A                  IconID = 31
	ICON_SCALE                   IconID = 32
	ICON_RESIZE                  IconID = 33
	ICON_FILTER_POINT            IconID = 34
	ICON_FILTER_BILINEAR         IconID = 35
	ICON_CROP                    IconID = 36
	ICON_CROP_ALPHA              IconID = 37
	ICON_SQUARE_TOGGLE           IconID = 38
	ICON_SYMMETRY                IconID = 39
	ICON_SYMMETRY_HORIZONTAL     IconID = 40
	ICON_SYMMETRY_VERTICAL       IconID = 41
	ICON_LENS                    IconID = 42
	ICON_LENS_BIG                IconID = 43
	ICON_EYE_ON                  IconID = 44
	ICON_EYE_OFF                 IconID = 45
	ICON_FILTER_TOP              IconID = 46
	ICON_FILTER                  IconID = 47
	ICON_TARGET_POINT            IconID = 48
	ICON_TARGET_SMALL            IconID = 49
	ICON_TARGET_BIG              IconID = 50
	ICON_TARGET_MOVE             IconID = 51
	ICON_CURSOR_MOVE             IconID = 52
	ICON_CURSOR_SCALE            IconID = 53
	ICON_CURSOR_SCALE_RIGHT      IconID = 54
	ICON_CURSOR_SCALE_LEFT       IconID = 55
	ICON_UNDO                    IconID = 56
	ICON_REDO                    IconID = 57
	ICON_REREDO                  IconID = 58
	ICON_MUTATE                  IconID = 59
	ICON_ROTATE                  IconID = 60
	ICON_REPEAT                  IconID = 61
	ICON_SHUFFLE                 IconID = 62
	ICON_EMPTYBOX                IconID = 63
	ICON_TARGET                  IconID = 64
	ICON_TARGET_SMALL_FILL       IconID = 65
	ICON_TARGET_BIG_FILL         IconID = 66
	ICON_TARGET_MOVE_FILL        IconID = 67
	ICON_CURSOR_MOVE_FILL        IconID = 68
	ICON_CURSOR_SCALE_FILL       IconID = 69
	ICON_CURSOR_SCALE_RIGHT_FILL IconID = 70
	ICON_CURSOR_SCALE_LEFT_FILL  IconID = 71
	ICON_UNDO_FILL               IconID = 72
	ICON_REDO_FILL               IconID = 73
	ICON_REREDO_FILL             IconID = 74
	ICON_MUTATE_FILL             IconID = 75
	ICON_ROTATE_FILL             IconID = 76
	ICON_REPEAT_FILL             IconID = 77
	ICON_SHUFFLE_FILL            IconID = 78
	ICON_EMPTYBOX_SMALL          IconID = 79
	ICON_BOX                     IconID = 80
	ICON_BOX_TOP                 IconID = 81
	ICON_BOX_TOP_RIGHT           IconID = 82
	ICON_BOX_RIGHT               IconID = 83
	ICON_BOX_BOTTOM_RIGHT        IconID = 84
	ICON_BOX_BOTTOM              IconID = 85
	ICON_BOX_BOTTOM_LEFT         IconID = 86
	ICON_BOX_LEFT                IconID = 87
	ICON_BOX_TOP_LEFT            IconID = 88
	ICON_BOX_CENTER              IconID = 89
	ICON_BOX_CIRCLE_MASK         IconID = 90
	ICON_POT                     IconID = 91
	ICON_ALPHA_MULTIPLY          IconID = 92
	ICON_ALPHA_CLEAR             IconID = 93
	ICON_DITHERING               IconID = 94
	ICON_MIPMAPS                 IconID = 95
	ICON_BOX_GRID                IconID = 96
	ICON_GRID                    IconID = 97
	ICON_BOX_CORNERS_SMALL       IconID = 98
	ICON_BOX_CORNERS_BIG         IconID = 99
	ICON_FOUR_BOXES              IconID = 100
	ICON_GRID_FILL               IconID = 101
	ICON_BOX_MULTISIZE           IconID = 102
	ICON_ZOOM_SMALL              IconID = 103
	ICON_ZOOM_MEDIUM             IconID = 104
	ICON_ZOOM_BIG                IconID = 105
	ICON_ZOOM_ALL                IconID = 106
	ICON_ZOOM_CENTER             IconID = 107
	ICON_BOX_DOTS_SMALL          IconID = 108
	ICON_BOX_DOTS_BIG            IconID = 109
	ICON_BOX_CONCENTRIC          IconID = 110
	ICON_BOX_GRID_BIG            IconID = 111
	ICON_OK_TICK                 IconID = 112
	ICON_CROSS                   IconID = 113
	ICON_ARROW_LEFT              IconID = 114
	ICON_ARROW_RIGHT             IconID = 115
	ICON_ARROW_DOWN              IconID = 116
	ICON_ARROW_UP                IconID = 117
	ICON_ARROW_LEFT_FILL         IconID = 118
	ICON_ARROW_RIGHT_FILL        IconID = 119
	ICON_ARROW_DOWN_FILL         IconID = 120
	ICON_ARROW_UP_FILL           IconID = 121
	ICON_AUDIO                   IconID = 122
	ICON_FX                      IconID = 123
	ICON_WAVE                    IconID = 124
	ICON_WAVE_SINUS              IconID = 125
	ICON_WAVE_SQUARE             IconID = 126
	ICON_WAVE_TRIANGULAR         IconID = 127
	ICON_CROSS_SMALL             IconID = 128
	ICON_PLAYER_PREVIOUS         IconID = 129
	ICON_PLAYER_PLAY_BACK        IconID = 130
	ICON_PLAYER_PLAY             IconID = 131
	ICON_PLAYER_PAUSE            IconID = 132
	ICON_PLAYER_STOP             IconID = 133
	ICON_PLAYER_NEXT             IconID = 134
	ICON_PLAYER_RECORD           IconID = 135
	ICON_MAGNET                  IconID = 136
	ICON_LOCK_CLOSE              IconID = 137
	ICON_LOCK_OPEN               IconID = 138
	ICON_CLOCK                   IconID = 139
	ICON_TOOLS                   IconID = 140
	ICON_GEAR                    IconID = 141
	ICON_GEAR_BIG                IconID = 142
	ICON_BIN                     IconID = 143
	ICON_HAND_POINTER            IconID = 144
	ICON_LASER                   IconID = 145
	ICON_COIN                    IconID = 146
	ICON_EXPLOSION               IconID = 147
	ICON_1UP                     IconID = 148
	ICON_PLAYER                  IconID = 149
	ICON_PLAYER_JUMP             IconID = 150
	ICON_KEY                     IconID = 151
	ICON_DEMON                   IconID = 152
	ICON_TEXT_POPUP              IconID = 153
	ICON_GEAR_EX                 IconID = 154
	ICON_CRACK                   IconID = 155
	ICON_CRACK_POINTS            IconID = 156
	ICON_STAR                    IconID = 157
	ICON_DOOR                    IconID = 158
	ICON_EXIT                    IconID = 159
	ICON_MODE_2D                 IconID = 160
	ICON_MODE_3D                 IconID = 161
	ICON_CUBE                    IconID = 162
	ICON_CUBE_FACE_TOP           IconID = 163
	ICON_CUBE_FACE_LEFT          IconID = 164
	ICON_CUBE_FACE_FRONT         IconID = 165
	ICON_CUBE_FACE_BOTTOM        IconID = 166
	ICON_CUBE_FACE_RIGHT         IconID = 167
	ICON_CUBE_FACE_BACK          IconID = 168
	ICON_CAMERA                  IconID = 169
	ICON_SPECIAL                 IconID = 170
	ICON_LINK_NET                IconID = 171
	ICON_LINK_BOXES              IconID = 172
	ICON_LINK_MULTI              IconID = 173
	ICON_LINK                    IconID = 174
	ICON_LINK_BROKE              IconID = 175
	ICON_TEXT_NOTES              IconID = 176
	ICON_NOTEBOOK                IconID = 177
	ICON_SUITCASE                IconID = 178
	ICON_SUITCASE_ZIP            IconID = 179
	ICON_MAILBOX                 IconID = 180
	ICON_MONITOR                 IconID = 181
	ICON_PRINTER                 IconID = 182
	ICON_PHOTO_CAMERA            IconID = 183
	ICON_PHOTO_CAMERA_FLASH      IconID = 184
	ICON_HOUSE                   IconID = 185
	ICON_HEART                   IconID = 186
	ICON_CORNER                  IconID = 187
	ICON_VERTICAL_BARS           IconID = 188
	ICON_VERTICAL_BARS_FILL      IconID = 189
	ICON_LIFE_BARS               IconID = 190
	ICON_INFO                    IconID = 191
	ICON_CROSSLINE               IconID = 192
	ICON_HELP                    IconID = 193
	ICON_FILETYPE_ALPHA          IconID = 194
	ICON_FILETYPE_HOME           IconID = 195
	ICON_LAYERS_VISIBLE          IconID = 196
	ICON_LAYERS                  IconID = 197
	ICON_WINDOW                  IconID = 198
	ICON_HIDPI                   IconID = 199
	ICON_FILETYPE_BINARY         IconID = 200
	ICON_HEX                     IconID = 201
	ICON_SHIELD                  IconID = 202
	ICON_FILE_NEW                IconID = 203
	ICON_FOLDER_ADD              IconID = 204
	ICON_ALARM                   IconID = 205
	ICON_CPU                     IconID = 206
	ICON_ROM                     IconID = 207
	ICON_STEP_OVER               IconID = 208
	ICON_STEP_INTO               IconID = 209
	ICON_STEP_OUT                IconID = 210
	ICON_RESTART                 IconID = 211
	ICON_BREAKPOINT_ON           IconID = 212
	ICON_BREAKPOINT_OFF          IconID = 213
	ICON_BURGER_MENU             IconID = 214
	ICON_CASE_SENSITIVE          IconID = 215
	ICON_REG_EXP                 IconID = 216
	ICON_FOLDER                  IconID = 217
	ICON_FILE                    IconID = 218
	ICON_SAND_TIMER              IconID = 219
	ICON_WARNING                 IconID = 220
	ICON_HELP_BOX                IconID = 221
	ICON_INFO_BOX                IconID = 222
	ICON_PRIORITY                IconID = 223
	ICON_LAYERS_ISO              IconID = 224
	ICON_LAYERS2                 IconID = 225
	ICON_MLAYERS                 IconID = 226
	ICON_MAPS                    IconID = 227
	ICON_HOT                     IconID = 228
	ICON_LABEL                   IconID = 229
	ICON_NAME_ID                 IconID = 230
	ICON_SLICING                 IconID = 231
	ICON_MANUAL_CONTROL          IconID = 232
	ICON_COLLISION               IconID = 233
	ICON_CIRCLE_ADD              IconID = 234
	ICON_CIRCLE_ADD_FILL         IconID = 235
	ICON_CIRCLE_WARNING          IconID = 236
	ICON_CIRCLE_WARNING_FILL     IconID = 237
	ICON_BOX_MORE                IconID = 238
	ICON_BOX_MORE_FILL           IconID = 239
	ICON_BOX_MINUS               IconID = 240
	ICON_BOX_MINUS_FILL          IconID = 241
	ICON_UNION                   IconID = 242
	ICON_INTERSECTION            IconID = 243
	ICON_DIFFERENCE              IconID = 244
	ICON_SPHERE                  IconID = 245
	ICON_CYLINDER                IconID = 246
	ICON_CONE                    IconID = 247
	ICON_ELLIPSOID               IconID = 248
	ICON_CAPSULE                 IconID = 249
	ICON_250                     IconID = 250
	ICON_251                     IconID = 251
	ICON_252                     IconID = 252
	ICON_253                     IconID = 253
	ICON_254                     IconID = 254
	ICON_255                     IconID = 255
)

//----------------------------------------------------------------------------------
// Gui Setup Functions Definition
//----------------------------------------------------------------------------------

//go:wasmimport raylib _GuiEnable
//go:noescape
func guiEnable()

// Enable gui global state
func Enable() {
	guiEnable()
}

//go:wasmimport raylib _GuiDisable
//go:noescape
func guiDisable()

// Disable gui global state
func Disable() {
	guiDisable()
}

//go:wasmimport raylib _GuiLock
//go:noescape
func guiLock()

// Lock gui global state
func Lock() {
	guiLock()
}

//go:wasmimport raylib _GuiUnlock
//go:noescape
func guiUnlock()

// Unlock gui global state
func Unlock() {
	guiUnlock()
}

// Check if gui is locked (global state)
//
//go:wasmimport raylib _GuiIsLocked
//go:noescape
func IsLocked() bool

// Set gui controls alpha global state
//
//go:wasmimport raylib _GuiSetAlpha
//go:noescape
func SetAlpha(alpha float32)

// Set gui state (global state)
//
//go:wasmimport raylib _GuiSetState
//go:noescape
func SetState(state PropertyValue)

// Get gui state (global state)
//
//go:wasmimport raylib _GuiGetState
//go:noescape
func GetState() PropertyValue

//go:wasmimport raylib _GuiSetFont
//go:noescape
func guiSetFont(font wasm.Ptr)

// Set custom gui font
func SetFont(font rl.Font) {
	v, free := wasm.CopyValueToC(&font)
	defer free()
	guiSetFont(v)
}

//go:wasmimport raylib _GuiGetFont
//go:noescape
func guiGetFont(ret wasm.Ptr)

// Get custom gui font
func GetFont() rl.Font {
	var ret rl.Font
	v, free := wasm.MallocV[rl.Font]()
	defer free()

	guiGetFont(v)
	wasm.CopyValueToGo(v, &ret)
	return ret
}

//go:wasmimport raylib _GuiSetStyle
//go:noescape
func guiSetStyle(control, property, value int32) int32

// Set control style property value
func SetStyle(control ControlID, property PropertyID, value PropertyValue) {
	ccontrol := int32(control)
	cproperty := int32(property)
	cvalue := int32(value)
	guiSetStyle(ccontrol, cproperty, cvalue)
}

//go:wasmimport raylib _GuiGetStyle
//go:noescape
func guiGetStyle(control, property int32) int32

// Get control style property value
func GetStyle(control ControlID, property PropertyID) PropertyValue {
	ccontrol := int32(control)
	cproperty := int32(property)
	return PropertyValue(guiGetStyle(ccontrol, cproperty))
}

func GetColor(control ControlID, property PropertyID) rl.Color {
	color := guiGetStyle(int32(control), int32(property))
	return rl.Color{R: uint8(color >> 24), G: uint8(color >> 16), B: uint8(color >> 8), A: uint8(color)}
}

//----------------------------------------------------------------------------------
// Gui Controls Functions Definition
//----------------------------------------------------------------------------------

//go:wasmimport raylib _GuiWindowBox
//go:noescape
func guiWindowBox(bounds wasm.Ptr, title wasm.Ptr) int32

// Window Box control
func WindowBox(bounds rl.Rectangle, title string) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()
	ctitle := wasm.CString(title)
	defer wasm.Free(ctitle)
	return guiWindowBox(cbounds, ctitle) != 0
}

//go:wasmimport raylib _GuiGroupBox
//go:noescape
func guiGroupBox(bounds wasm.Ptr, text wasm.Ptr)

// Group Box control with text name
func GroupBox(bounds rl.Rectangle, text string) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()
	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	// This only returns 0 on raylib.h
	guiGroupBox(cbounds, ctext)
}

//go:wasmimport raylib _GuiLine
//go:noescape
func guiLine(bounds wasm.Ptr, text wasm.Ptr)

// Line control
func Line(bounds rl.Rectangle, text string) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()
	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	// This only returns 0 on raylib.h
	guiLine(cbounds, ctext)
}

//go:wasmimport raylib _GuiPanel
//go:noescape
func guiPanel(bounds wasm.Ptr, text wasm.Ptr)

// Panel control
func Panel(bounds rl.Rectangle, text string) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	// This only returns 0 on raylib.h
	guiPanel(cbounds, ctext)
}

//go:wasmimport raylib _GuiTabBar
//go:noescape
func guiTabBar(bounds wasm.Ptr, text wasm.Ptr, count int32, active wasm.Ptr) int32

// Tab Bar control, returns the current TAB closing requested, -1 otherwise
func TabBar(bounds rl.Rectangle, text []string, active *int32) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := NewCStringArrayFromSlice(text)
	defer ctext.Free()

	ccount := int32(len(text))

	if active == nil {
		active = new(int32)
	}

	cactive, free := wasm.CopyValueToC(&active)
	defer free()

	result := guiTabBar(cbounds, ctext.Pointer, ccount, cactive)

	// Copy values back before freeing
	wasm.CopyValueToGo(cactive, &active)

	return result
}

//go:wasmimport raylib _GuiScrollPanel
//go:noescape
func guiScrollPanel(bounds wasm.Ptr, text wasm.Ptr, content wasm.Ptr, scroll wasm.Ptr, view wasm.Ptr)

// Scroll Panel control
func ScrollPanel(bounds rl.Rectangle, text string, content rl.Rectangle, scroll *rl.Vector2, view *rl.Rectangle) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()
	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	ccontent, free := wasm.CopyValueToC(&content)
	defer free()

	cscroll, free := wasm.CopyValueToC(scroll)
	defer free()

	cview, free := wasm.CopyValueToC(view)
	defer free()

	// This only returns 0 on raylib.h
	guiScrollPanel(cbounds, ctext, ccontent, cscroll, cview)

	wasm.CopyValueToGo(cscroll, scroll)
	wasm.CopyValueToGo(cview, view)
}

//go:wasmimport raylib _GuiLabel
//go:noescape
func guiLabel(bounds wasm.Ptr, text wasm.Ptr)

// Label control
func Label(bounds rl.Rectangle, text string) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	// This only returns 0 on raylib.h
	guiLabel(cbounds, ctext)
}

//go:wasmimport raylib _GuiButton
//go:noescape
func guiButton(bounds wasm.Ptr, text wasm.Ptr) int32

// Button control, returns true when clicked
func Button(bounds rl.Rectangle, text string) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	return guiButton(cbounds, ctext) != 0
}

//go:wasmimport raylib _GuiLabelButton
//go:noescape
func guiLabelButton(bounds wasm.Ptr, text wasm.Ptr) int32

// LabelButton control, returns true when clicked
func LabelButton(bounds rl.Rectangle, text string) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)
	return guiLabelButton(cbounds, ctext) != 0
}

//go:wasmimport raylib _GuiToggle
//go:noescape
func guiToggle(bounds wasm.Ptr, text wasm.Ptr, active wasm.Ptr) int32

// Toggle control, returns true when active
func Toggle(bounds rl.Rectangle, text string, active bool) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	cactive, free := wasm.CopyValueToC(&active)
	defer free()

	guiToggle(cbounds, ctext, cactive)

	// Copy values back before freeing
	wasm.CopyValueToGo(cactive, &active)

	return active
}

//go:wasmimport raylib _GuiToggleGroup
//go:noescape
func guiToggleGroup(bounds wasm.Ptr, text wasm.Ptr, active wasm.Ptr) int32

// ToggleGroup control, returns active toggle index
func ToggleGroup(bounds rl.Rectangle, text string, active int32) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	cactive, free := wasm.CopyValueToC(&active)
	defer free()

	guiToggleGroup(cbounds, ctext, cactive)

	// Copy values back before freeing
	wasm.CopyValueToGo(cactive, &active)

	return active
}

// TODO check implementation of GuiToggleSlider, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiToggleSlider
//go:noescape
func guiToggleSlider(bounds wasm.Ptr, text wasm.Ptr, active wasm.Ptr) int32

// ToggleSlider control, returns true when clicked
func ToggleSlider(bounds rl.Rectangle, text string, active int32) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	cactive, free := wasm.CopyValueToC(&active)
	defer free()

	guiToggleSlider(cbounds, ctext, cactive)

	// Copy values back before freeing
	wasm.CopyValueToGo(cactive, &active)

	return active
}

// TODO check implementation of GuiCheckBox, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiCheckBox
//go:noescape
func guiCheckBox(bounds wasm.Ptr, text wasm.Ptr, checked wasm.Ptr) int32

// CheckBox control, returns true when active
func CheckBox(bounds rl.Rectangle, text string, checked bool) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	cchecked, free := wasm.CopyValueToC(&checked)
	defer func() {
		wasm.CopyValueToGo(cchecked, &checked)
		free()
	}()

	guiCheckBox(cbounds, ctext, cchecked)

	return checked
}

// TODO check implementation of GuiComboBox, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiComboBox
//go:noescape
func guiComboBox(bounds wasm.Ptr, text wasm.Ptr, active wasm.Ptr) int32

// ComboBox control, returns selected item index
func ComboBox(bounds rl.Rectangle, text string, active int32) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	cactive, free := wasm.CopyValueToC(&active)
	defer free()

	// This only returns 0 on raylib.h
	guiComboBox(cbounds, ctext, cactive)

	// Copy values back before freeing
	wasm.CopyValueToGo(cactive, &active)

	return active
}

// TODO check implementation of GuiDropdownBox, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiDropdownBox
//go:noescape
func guiDropdownBox(bounds wasm.Ptr, text wasm.Ptr, active wasm.Ptr, editMode int32) int32

// DropdownBox control, returns true when clicked
func DropdownBox(bounds rl.Rectangle, text string, active *int32, editMode bool) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	if active == nil {
		active = new(int32)
	}
	cactive, free := wasm.CopyValueToC(active)
	defer func() {
		wasm.CopyValueToGo(cactive, active)
		free()
	}()

	ceditMode := wasm.BtoI(editMode)

	return guiDropdownBox(cbounds, ctext, cactive, ceditMode) != 0
}

// TODO check implementation of GuiTextBox, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiTextBox
//go:noescape
func guiTextBox(bounds wasm.Ptr, text wasm.Ptr, textSize int32, editMode int32) int32

// TextBox control, updates input text, returns true on ENTER pressed or defocused
func TextBox(bounds rl.Rectangle, text *string, textSize int32, editMode bool) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	// Allocate writable buffer of size textSize
	// Truncate to textSize-1 and NUL-terminate
	currentText := []byte(*text)
	if len(currentText) > int(textSize)-1 {
		currentText = currentText[:int(textSize)-1]
	}
	// Create a zero-filled buffer of size textSize
	buffer := make([]byte, textSize)
	copy(buffer, currentText)
	// buffer is already zero-filled by make, so NUL-termination is automatic

	ctext, free := wasm.CopySliceToC(buffer)
	defer free()

	ctextSize := int32(textSize)
	ceditMode := wasm.BtoI(editMode)

	result := guiTextBox(cbounds, ctext, ctextSize, ceditMode) != 0

	// Copy the result back
	*text = wasm.GoString(ctext)

	return result
}

// NOTE check out this implementation as reference for the TODOs in this file

//go:wasmimport raylib _GuiSpinner
//go:noescape
func guiSpinner(bounds wasm.Ptr, text wasm.Ptr, value wasm.Ptr, minValue, maxValue int32, editMode int32) int32

// Spinner control, sets value to the selected number and returns true when clicked.
func Spinner(bounds rl.Rectangle, text string, value *int32, minValue, maxValue int, editMode bool) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	if value == nil {
		value = new(int32)
	}
	cvalue, free := wasm.CopyValueToC(value)
	defer func() {
		wasm.CopyValueToGo(cvalue, value)
		free()
	}()

	return guiSpinner(cbounds, ctext, cvalue, int32(minValue), int32(maxValue), wasm.BtoI(editMode)) != 0
}

// NOTE check out this implementation as reference for the TODOs in this file

//go:wasmimport raylib _GuiValueBox
//go:noescape
func guiValueBox(bounds wasm.Ptr, text wasm.Ptr, value wasm.Ptr, minValue, maxValue int32, editMode int32) int32

// ValueBox control, updates input text with numbers
func ValueBox(bounds rl.Rectangle, text string, value *int32, minValue, maxValue int, editMode bool) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	if value == nil {
		value = new(int32)
	}

	cvalue, free := wasm.CopyValueToC(value)
	defer func() {
		wasm.CopyValueToGo(cvalue, value)
		free()
	}()
	cminValue := int32(minValue)
	cmaxValue := int32(maxValue)
	ceditMode := wasm.BtoI(editMode)

	return guiValueBox(cbounds, ctext, cvalue, cminValue, cmaxValue, ceditMode) != 0
}

//go:wasmimport raylib _GuiValueBoxFloat
//go:noescape
func guiValueBoxFloat(bounds rl.Rectangle, text wasm.Ptr, textValue wasm.Ptr, value wasm.Ptr, editMode int32) int32

// Floating point Value Box control, updates input val_str with numbers
func ValueBoxFloat(bounds rl.Rectangle, text string, textValue *string, value *float32, editMode bool) bool {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	if value == nil {
		value = new(float32)
	}

	// Allocate writable buffer of size textMaxSize
	// Truncate to textMaxSize-1 and NUL-terminate
	currentText := []byte(*textValue)

	// Create a zero-filled buffer of size textMaxSize
	buffer := make([]byte, len(*textValue))
	copy(buffer, currentText)
	// buffer is already zero-filled by make, so NUL-termination is automatic

	ctextValue, free := wasm.CopySliceToC(buffer)
	defer free()

	cvalue, free := wasm.CopyValueToC(value)
	defer func() {
		wasm.CopyValueToGo(cvalue, value)
		free()
	}()

	ceditMode := wasm.BtoI(editMode)

	result := guiValueBoxFloat(cbounds, ctext, ctextValue, cvalue, ceditMode) != 0

	// Copy the result back
	*textValue = wasm.GoString(ctextValue)

	return result
}

// TODO check implementation of GuiSlider, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiSlider
//go:noescape
func guiSlider(bounds wasm.Ptr, textLeft, textRight wasm.Ptr, value wasm.Ptr, minValue, maxValue float32) float32

// Slider control
func Slider(bounds rl.Rectangle, textLeft, textRight string, value, minValue, maxValue float32) float32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctextLeft := wasm.CString(textLeft)
	defer wasm.Free(ctextLeft)
	ctextRight := wasm.CString(textRight)
	defer wasm.Free(ctextRight)

	cvalue, free := wasm.CopyValueToC(&value)
	defer free()

	cminValue := float32(minValue)
	cmaxValue := float32(maxValue)

	guiSlider(cbounds, ctextLeft, ctextRight, cvalue, cminValue, cmaxValue)

	// Copy values back before freeing
	wasm.CopyValueToGo(cvalue, &value)

	return value
}

// TODO check implementation of GuiSliderBar, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiSliderBar
//go:noescape
func guiSliderBar(bounds wasm.Ptr, textLeft, textRight wasm.Ptr, value wasm.Ptr, minValue, maxValue float32) float32

// SliderBar control, returns selected value
func SliderBar(bounds rl.Rectangle, textLeft, textRight string, value, minValue, maxValue float32) float32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctextLeft := wasm.CString(textLeft)
	defer wasm.Free(ctextLeft)
	ctextRight := wasm.CString(textRight)
	defer wasm.Free(ctextRight)

	cvalue, free := wasm.CopyValueToC(&value)
	defer free()

	cminValue := float32(minValue)
	cmaxValue := float32(maxValue)

	guiSliderBar(cbounds, ctextLeft, ctextRight, cvalue, cminValue, cmaxValue)

	// Copy values back before freeing
	wasm.CopyValueToGo(cvalue, &value)

	return value
}

// TODO check implementation of GuiProgressBar, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiProgressBar
//go:noescape
func guiProgressBar(bounds wasm.Ptr, textLeft, textRight wasm.Ptr, value wasm.Ptr, minValue, maxValue float32) float32

// ProgressBar control, shows current progress value
func ProgressBar(bounds rl.Rectangle, textLeft, textRight string, value, minValue, maxValue float32) float32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctextLeft := wasm.CString(textLeft)
	defer wasm.Free(ctextLeft)
	ctextRight := wasm.CString(textRight)
	defer wasm.Free(ctextRight)

	cvalue, free := wasm.CopyValueToC(&value)
	defer free()

	cminValue := float32(minValue)
	cmaxValue := float32(maxValue)

	// This only returns 0 on raylib.h
	guiProgressBar(cbounds, ctextLeft, ctextRight, cvalue, cminValue, cmaxValue)

	// Copy values back before freeing
	wasm.CopyValueToGo(cvalue, &value)

	return value
}

//go:wasmimport raylib _GuiStatusBar
//go:noescape
func guiStatusBar(bounds wasm.Ptr, text wasm.Ptr)

// StatusBar control, shows info text
func StatusBar(bounds rl.Rectangle, text string) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	// Copy values back before freeing
	guiStatusBar(cbounds, ctext)
}

//go:wasmimport raylib _GuiDummyRec
//go:noescape
func guiDummyRec(bounds wasm.Ptr, text wasm.Ptr)

// DummyRectangle control, intended for placeholding
func DummyRec(bounds rl.Rectangle, text string) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)
	guiDummyRec(cbounds, ctext)
}

// TODO check implementation of GuiListView, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiListView
//go:noescape
func guiListView(bounds wasm.Ptr, text wasm.Ptr, scrollIndex wasm.Ptr, active wasm.Ptr) int32

// ListView control, returns selected list item index
func ListView(bounds rl.Rectangle, text string, scrollIndex *int32, active int32) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	if scrollIndex == nil {
		scrollIndex = new(int32)
	}
	cscrollIndex, free := wasm.CopyValueToC(scrollIndex)
	defer func() {
		wasm.CopyValueToGo(cscrollIndex, scrollIndex)
		free()
	}()

	cactive, free := wasm.CopyValueToC(&active)
	defer free()

	guiListView(cbounds, ctext, cscrollIndex, cactive)

	// Copy values back before freeing
	wasm.CopyValueToGo(cactive, &active)

	return active
}

// TODO check implementation of GuiProgressBar, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiListViewEx
//go:noescape
func guiListViewEx(bounds wasm.Ptr, text wasm.Ptr, count int32, scrollIndex wasm.Ptr, active wasm.Ptr, focus wasm.Ptr) int32

// ListView control with extended parameters
func ListViewEx(bounds rl.Rectangle, text []string, scrollIndex, focus *int32, active int32) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := NewCStringArrayFromSlice(text)
	defer ctext.Free()

	if focus == nil {
		focus = new(int32)
	}
	if scrollIndex == nil {
		scrollIndex = new(int32)
	}

	cscrollIndex, free := wasm.CopyValueToC(scrollIndex)
	defer func() {
		wasm.CopyValueToGo(cscrollIndex, scrollIndex)
		free()
	}()

	cactive, free := wasm.CopyValueToC(&active)
	defer free()

	cfocus, free := wasm.CopyValueToC(focus)
	defer free()

	count := int32(len(text))

	// This only returns 0 on raylib.h
	guiListViewEx(cbounds, ctext.Pointer, count, cscrollIndex, cactive, cfocus)

	// Copy values back before freeing
	wasm.CopyValueToGo(cactive, &active)
	wasm.CopyValueToGo(cfocus, focus)

	return active
}

// TODO check implementation of GuiColorPanel, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiColorPanel
//go:noescape
func guiColorPanel(ret wasm.Ptr, bounds wasm.Ptr, text wasm.Ptr, color wasm.Ptr)

// ColorPanel control, Color (RGBA) variant
func ColorPanel(bounds rl.Rectangle, text string, color rl.Color) rl.Color {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)
	ccolor, free := wasm.CopyValueToC(&color)
	defer free()

	var v rl.Color
	ret, free := wasm.MallocV[rl.Color]()
	defer free()

	guiColorPanel(ret, cbounds, ctext, ccolor)
	wasm.CopyValueToGo(ret, &v)
	return v
}

// TODO check implementation of GuiColorBarAlpha, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiColorBarAlpha
//go:noescape
func guiColorBarAlpha(bounds wasm.Ptr, text wasm.Ptr, alpha wasm.Ptr) float32

// ColorBarAlpha control, returns alpha value normalized [0..1]
func ColorBarAlpha(bounds rl.Rectangle, text string, alpha float32) float32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	calpha, free := wasm.CopyValueToC(&alpha)
	defer free()

	// This only returns 0 on raylib.h
	guiColorBarAlpha(cbounds, ctext, calpha)

	// Copy values back before freeing
	wasm.CopyValueToGo(calpha, &alpha)

	return alpha
}

// TODO check implementation of GuiColorBarHue, as it returns a bool that
// indicates a mouse click on the component

//go:wasmimport raylib _GuiColorBarHue
//go:noescape
func guiColorBarHue(bounds wasm.Ptr, text wasm.Ptr, hue wasm.Ptr) float32

// ColorBarHue control, returns alpha value normalized [0..1]
func ColorBarHue(bounds rl.Rectangle, text string, hue float32) float32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	chue, free := wasm.CopyValueToC(&hue)
	defer free()

	// This only returns 0 on raylib.h
	guiColorBarHue(cbounds, ctext, chue)

	// Copy values back before freeing
	wasm.CopyValueToGo(chue, &hue)

	return hue
}

// TODO check implementation of GuiColorPicker, as it should return a boolean

//go:wasmimport raylib _GuiColorPicker
//go:noescape
func guiColorPicker(ret wasm.Ptr, bounds wasm.Ptr, text wasm.Ptr, color wasm.Ptr)

// ColorPicker control (multiple color controls)
// NOTE: this picker converts RGB to HSV, which can cause the Hue control to jump. If you have this problem, consider using the HSV variant instead
func ColorPicker(bounds rl.Rectangle, text string, color rl.Color) rl.Color {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	ccolor, free := wasm.CopyValueToC(&color)
	defer free()

	var v rl.Color
	ret, free := wasm.CopyValueToC(&v)
	defer func() {
		wasm.CopyValueToGo(ret, &v)
		free()
	}()
	guiColorPicker(ret, cbounds, ctext, ccolor)
	return v
}

// TODO check implementation of GuiColorPicker, as it should return a boolean

//go:wasmimport raylib _GuiColorPickerHSV
//go:noescape
func guiColorPickerHSV(bounds wasm.Ptr, text wasm.Ptr, colorHSV wasm.Ptr) int32

// ColorPicker control that avoids conversion to RGB on each call (multiple color controls)
func ColorPickerHSV(bounds rl.Rectangle, text string, colorHSV *rl.Vector3) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	ccolorHSV, free := wasm.CopyValueToC(colorHSV)
	defer func() {
		wasm.CopyValueToGo(ccolorHSV, colorHSV)
		free()
	}()

	// This only returns 0 on raylib.h
	return int32(guiColorPickerHSV(cbounds, ctext, ccolorHSV))
}

// TODO check implementation of GuiColorPanelHSV, as it returns an int32 that
// indicates the state of the component

//go:wasmimport raylib _GuiColorPanelHSV
//go:noescape
func guiColorPanelHSV(bounds wasm.Ptr, text wasm.Ptr, colorHSV wasm.Ptr) int32

// ColorPanel control that returns HSV color value
func ColorPanelHSV(bounds rl.Rectangle, text string, colorHSV *rl.Vector3) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	ccolorHSV, free := wasm.CopyValueToC(colorHSV)
	defer func() {
		wasm.CopyValueToGo(ccolorHSV, colorHSV)
		free()
	}()

	// This only returns 0 on raylib.h
	return int32(guiColorPanelHSV(cbounds, ctext, ccolorHSV))
}

// TODO check implementation of GuiMessageBox, as it returns an int32 that
// indicates the state of the component

//go:wasmimport raylib _GuiMessageBox
//go:noescape
func guiMessageBox(bounds wasm.Ptr, title, message, buttons wasm.Ptr) int32

// MessageBox control
func MessageBox(bounds rl.Rectangle, title, message, buttons string) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctitle := wasm.CString(title)
	defer wasm.Free(ctitle)

	cmessage := wasm.CString(message)
	defer wasm.Free(cmessage)

	cbuttons := wasm.CString(buttons)
	defer wasm.Free(cbuttons)

	return int32(guiMessageBox(cbounds, ctitle, cmessage, cbuttons))
}

// TODO check implementation of GuiTextInputBox, as it returns an int32 that
// indicates the state of the component

//go:wasmimport raylib _GuiTextInputBox
//go:noescape
func guiTextInputBox(bounds wasm.Ptr, title, message, buttons wasm.Ptr, text wasm.Ptr, textMaxSize int32, secretViewActive wasm.Ptr) int32

// TextInputBox control, ask for text
func TextInputBox(bounds rl.Rectangle, title, message, buttons string, text *string, textMaxSize int32, secretViewActive *bool) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	var ctitle wasm.Ptr
	if len(title) > 0 {
		ctitle = wasm.CString(title)
		defer wasm.Free(ctitle)
	}

	var cmessage wasm.Ptr
	if len(message) > 0 {
		cmessage = wasm.CString(message)
		defer wasm.Free(cmessage)
	}

	cbuttons := wasm.CString(buttons)
	defer wasm.Free(cbuttons)

	// Allocate writable buffer of size textMaxSize
	// Truncate to textMaxSize-1 and NUL-terminate
	currentText := []byte(*text)
	if len(currentText) > int(textMaxSize)-1 {
		currentText = currentText[:int(textMaxSize)-1]
	}
	// Create a zero-filled buffer of size textMaxSize
	buffer := make([]byte, textMaxSize)
	copy(buffer, currentText)
	// buffer is already zero-filled by make, so NUL-termination is automatic

	ctext, free := wasm.CopySliceToC(buffer)
	defer free()

	ctextMaxSize := int32(textMaxSize)

	csecretViewActive, free := wasm.CopyValueToC(secretViewActive)
	defer func() {
		wasm.CopyValueToGo(csecretViewActive, secretViewActive)
		free()
	}()

	result := int32(guiTextInputBox(cbounds, ctitle, cmessage, cbuttons, ctext, ctextMaxSize, csecretViewActive))

	// Copy the result back
	*text = wasm.GoString(ctext)

	return result
}

//go:wasmimport raylib _GuiGrid
//go:noescape
func guiGrid(bounds wasm.Ptr, text wasm.Ptr, spacing float32, subdivs int32, mouseCell wasm.Ptr) int32

// Grid control, returns mouse cell position
func Grid(bounds rl.Rectangle, text string, spacing float32, subdivs int32, mouseCell *rl.Vector2) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	cspacing := float32(spacing)
	csubdivs := int32(subdivs)
	cmouseCell, free := wasm.CopyValueToC(mouseCell)
	defer func() {
		wasm.CopyValueToGo(cmouseCell, mouseCell)
		free()
	}()

	// This only returns 0 on raylib.h
	return guiGrid(cbounds, ctext, cspacing, csubdivs, cmouseCell)
}

//----------------------------------------------------------------------------------
// Tooltip management functions
// NOTE: Tooltips requires some global variables: tooltipPtr
//----------------------------------------------------------------------------------

// Enable gui tooltips (global state)
//
//go:wasmimport raylib _GuiEnableTooltip
//go:noescape
func EnableTooltip()

// Disable gui tooltips (global state)
//
//go:wasmimport raylib _GuiDisableTooltip
//go:noescape
func DisableTooltip()

//go:wasmimport raylib _GuiSetTooltip
//go:noescape
func guiSetTooltip(tooltip wasm.Ptr)

// Set tooltip string
func SetTooltip(tooltip string) {
	ctooltip := wasm.CString(tooltip)
	defer wasm.Free(ctooltip)

	// This only returns 0 on raylib.h
	guiSetTooltip(ctooltip)
}

//----------------------------------------------------------------------------------
// Styles loading functions
//----------------------------------------------------------------------------------

//go:wasmimport raylib _GuiLoadStyle
//go:noescape
func guiLoadStyle(fileName wasm.Ptr)

// Load raygui style file (.rgs)
func LoadStyle(fileName string) {
	cfileName := wasm.CString(fileName)
	defer wasm.Free(cfileName)
	guiLoadStyle(cfileName)
}

//go:wasmimport raylib _GuiLoadStyleDefault
//go:noescape
func guiLoadStyleDefault()

// Load style default over global style
func LoadStyleDefault() {
	guiLoadStyleDefault()
}

//go:wasmimport raylib _GuiIconText
//go:noescape
func guiIconText(iconId int32, text wasm.Ptr) wasm.Ptr

// IconText gets text with icon id prepended (if supported)
func IconText(iconId IconID, text string) string {
	ciconId := int32(iconId)
	ctext := wasm.CString(text)
	defer wasm.Free(ctext)
	return wasm.GoString(guiIconText(ciconId, ctext))
}

//go:wasmimport raylib _GuiLoadIcons
//go:noescape
func guiLoadIcons(fileName wasm.Ptr, loadIconsName int32)

// Load raygui icons file (.rgi)
func LoadIcons(fileName string, loadIconsName bool) {
	cfileName := wasm.CString(fileName)
	defer wasm.Free(cfileName)
	guiLoadIcons(cfileName, wasm.BtoI(loadIconsName))
}

//go:wasmimport raylib _GuiLoadIconsFromMemory
//go:noescape
func guiLoadIconsFromMemory(data wasm.Ptr, size int32, loadIconsName int32)

// Load icons from memory (Binary files only)
func LoadIconsFromMemory(data []byte, loadIconsName bool) {
	cdata, free := wasm.CopySliceToC(data)
	defer free()

	csize := int32(len(data))
	cloadIconsName := wasm.BtoI(loadIconsName)

	guiLoadIconsFromMemory(cdata, csize, cloadIconsName)
}

//go:wasmimport raylib _GuiDrawIcon
//go:noescape
func guiDrawIcon(iconId, posX, posY, pixelSize int32, col wasm.Ptr)

// Draw icon using pixel size at specified position
func DrawIcon(iconId IconID, posX, posY, pixelSize int32, col color.RGBA) {
	ccol, free := wasm.CopyValueToC(&col)
	defer free()
	guiDrawIcon(int32(iconId), int32(posX), int32(posY), int32(pixelSize), ccol)
}

// Set icon drawing size
//
//go:wasmimport raylib _GuiSetIconScale
//go:noescape
func SetIconScale(scale int32)

//go:wasmimport raylib _GuiGetTextWidth
//go:noescape
func guiGetTextWidth(text wasm.Ptr) int32

// Get text width considering gui style and icon size (if required)
func GetTextWidth(text string) int32 {
	ctext := wasm.CString(text)
	defer wasm.Free(ctext)
	return int32(guiGetTextWidth(ctext))
}

//----------------------------------------------------------------------------------
// Module Internal Functions Definition
//----------------------------------------------------------------------------------

//go:wasmimport raylib _GuiLoadStyleFromMemory
//go:noescape
func guiLoadStyleFromMemory(data wasm.Ptr, size int32)

// Load style from memory (Binary files only)
func LoadStyleFromMemory(data []byte) {
	cdata, free := wasm.CopySliceToC(data)
	defer free()

	csize := int32(len(data))

	guiLoadStyleFromMemory(cdata, csize)
}

//go:wasmimport raylib _GuiScrollBar
//go:noescape
func guiScrollBar(bounds wasm.Ptr, value, minValue, maxValue int32) int32

// ScrollBar control
func ScrollBar(bounds rl.Rectangle, value, minValue, maxValue int32) int32 {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	cvalue := int32(value)
	cminValue := int32(minValue)
	cmaxValue := int32(maxValue)

	return int32(guiScrollBar(cbounds, cvalue, cminValue, cmaxValue))
}

//go:wasmimport raylib _GuiFade
//go:noescape
func guiFade(ret wasm.Ptr, color wasm.Ptr, alpha float32)

// Color fade-in or fade-out, alpha value normalized [0..1]
// WARNING: It multiplies current alpha by alpha scale factor
func Fade(color rl.Color, alpha float32) rl.Color {
	ccolor, free := wasm.CopyValueToC(&color)
	defer free()

	var v rl.Color
	ret, free := wasm.CopyValueToC(&v)
	defer func() {
		wasm.CopyValueToGo(ret, &v)
		free()
	}()

	guiFade(ret, ccolor, alpha)
	return v
}

//----------------------------------------------------------------------------------
// Additional Draw functions
//----------------------------------------------------------------------------------

//go:wasmimport raylib _GuiDrawRectangle
//go:noescape
func guiDrawRectangle(bounds wasm.Ptr, borderWidth int32, borderColor, fillColor wasm.Ptr)

func DrawRectangle(bounds rl.Rectangle, borderWidth int32, borderColor, fillColor rl.Color) {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	cfillColor, free := wasm.CopyValueToC(&fillColor)
	defer free()
	cborderColor, free := wasm.CopyValueToC(&borderColor)
	defer free()

	bw := int32(borderWidth)

	guiDrawRectangle(cbounds, bw, cborderColor, cfillColor)
}

// DrawText - static void GuiDrawText(const char *text, Rectangle textBounds, int alignment, Color tint);

//go:wasmimport raylib _GuiDrawText
//go:noescape
func guiDrawText(text wasm.Ptr, position wasm.Ptr, alignment int32, color wasm.Ptr)

func DrawText(text string, position rl.Rectangle, alignment int32, color rl.Color) {
	cposition, free := wasm.CopyValueToC(&position)
	defer free()
	ccolor, free := wasm.CopyValueToC(&color)
	defer free()

	ctext := wasm.CString(text)
	defer wasm.Free(ctext)

	calignment := int32(alignment)
	guiDrawText(ctext, cposition, calignment, ccolor)
}

//go:wasmimport raylib _GuiGetTextBounds
//go:noescape
func guiGetTextBounds(ret wasm.Ptr, control int32, bounds wasm.Ptr)

// GetTextBounds - static Rectangle GetTextBounds(int control, Rectangle bounds)
func GetTextBounds(control ControlID, bounds rl.Rectangle) rl.Rectangle {
	cbounds, free := wasm.CopyValueToC(&bounds)
	defer free()

	ccontrol := uint16(control)
	var v rl.Rectangle
	cret, free := wasm.CopyValueToC(&v)
	defer func() {
		wasm.CopyValueToGo(cret, &v)
		free()
	}()
	guiGetTextBounds(cret, int32(ccontrol), cbounds)
	return v
}
