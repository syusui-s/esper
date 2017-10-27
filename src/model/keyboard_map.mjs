/**
 * 特定のコードに対応するアルファベットや記号を表す
 */
class KeyEntry {
  /**
   * @param {String} code キーコード
   * @param {Object} map 
   */
  constructor(code, map) {
    this.code = code;
    this.map = map;
  }
}

/**
 */
class KeyboardMap {
  static fromMap(name, map) {
    const mapConverted = new Map();

    Object.keys(map).forEach(code => {
      const entry = map[code];
      const keyEntry = new KeyEntry(code, entry);
      mapConverted.set(code, keyEntry);
    });

    return new this(name, mapConverted);
  }

  constructor(name, map) {
    this.name = name;
    this.map = map;
  }

  getCharacter(keyEvent) {
    const keyEntry = this.map.get(keyEvent.code);

    if (keyEvent.modifiers.shiftKey) {
      return keyEntry.map.shift;
    } else {
      return keyEntry.map.noShift;
    }
  }
}

export const Layouts = {
  "QWERTY JIS": KeyboardMap.fromMap("QWERTY JIS", {
    "KeyQ":         { noShift: "q",  shift: "Q"  },
    "KeyW":         { noShift: "w",  shift: "W"  },
    "KeyE":         { noShift: "e",  shift: "E"  },
    "KeyR":         { noShift: "r",  shift: "R"  },
    "KeyT":         { noShift: "t",  shift: "T"  },
    "KeyY":         { noShift: "y",  shift: "Y"  },
    "KeyU":         { noShift: "u",  shift: "U"  },
    "KeyI":         { noShift: "i",  shift: "I"  },
    "KeyO":         { noShift: "o",  shift: "O"  },
    "KeyP":         { noShift: "p",  shift: "P"  },
    "BracketLeft":  { noShift: "[",  shift: "{"  },
    "BracketRight": { noShift: "]",  shift: "}"  },
    "KeyA":         { noShift: "a",  shift: "A"  },
    "KeyS":         { noShift: "s",  shift: "S"  },
    "KeyD":         { noShift: "d",  shift: "D"  },
    "KeyF":         { noShift: "f",  shift: "F"  },
    "KeyG":         { noShift: "g",  shift: "G"  },
    "KeyH":         { noShift: "h",  shift: "H"  },
    "KeyJ":         { noShift: "j",  shift: "J"  },
    "KeyK":         { noShift: "k",  shift: "K"  },
    "KeyL":         { noShift: "l",  shift: "L"  },
    "Semicolon":    { noShift: ";",  shift: ";"  },
    "Quote":        { noShift: ":",  shift: ":"  },
    "Backslash":    { noShift: "]",  shift: "}"  },
    "KeyZ":         { noShift: "z",  shift: "Z"  },
    "KeyX":         { noShift: "x",  shift: "X"  },
    "KeyC":         { noShift: "c",  shift: "C"  },
    "KeyV":         { noShift: "v",  shift: "V"  },
    "KeyB":         { noShift: "b",  shift: "B"  },
    "KeyN":         { noShift: "n",  shift: "N"  },
    "KeyM":         { noShift: "m",  shift: "M"  },
    "Comma":        { noShift: ",",  shift: ","  },
    "Period":       { noShift: ".",  shift: "."  },
    "Slash":        { noShift: "/",  shift: "/"  },
    "IntlRo":       { noShift: "\\", shift: "_"  },
    "Digit1":       { noShift: "1",  shift: "!"  },
    "Digit2":       { noShift: "2",  shift: "\"" },
    "Digit3":       { noShift: "3",  shift: "#"  },
    "Digit4":       { noShift: "4",  shift: "$"  },
    "Digit5":       { noShift: "5",  shift: "%"  },
    "Digit6":       { noShift: "6",  shift: "&"  },
    "Digit7":       { noShift: "7",  shift: "'"  },
    "Digit8":       { noShift: "8",  shift: "("  },
    "Digit9":       { noShift: "9",  shift: ")"  },
    "Digit0":       { noShift: "0",  shift: "0"  },
    "Minus":        { noShift: "@",  shift: "`"  },
    "Equal":        { noShift: "^",  shift: "~"  },
    "IntlYen":      { noShift: "¥",  shift: "|"  },
  }),
  "Dvorak JP106": KeyboardMap.fromMap("Dvorak JP106", {
    "KeyQ":         { noShift: ":",  shift: "*"  },
    "KeyW":         { noShift: ",",  shift: "<"  },
    "KeyE":         { noShift: ".",  shift: ">"  },
    "KeyR":         { noShift: "p",  shift: "P"  },
    "KeyT":         { noShift: "y",  shift: "Y"  },
    "KeyY":         { noShift: "f",  shift: "F"  },
    "KeyU":         { noShift: "g",  shift: "G"  },
    "KeyI":         { noShift: "c",  shift: "C"  },
    "KeyO":         { noShift: "r",  shift: "R"  },
    "KeyP":         { noShift: "l",  shift: "L"  },
    "BracketLeft":  { noShift: "/",  shift: "?"  },
    "BracketRight": { noShift: "[",  shift: "{"  },
    "KeyA":         { noShift: "a",  shift: "A"  },
    "KeyS":         { noShift: "o",  shift: "O"  },
    "KeyD":         { noShift: "e",  shift: "E"  },
    "KeyF":         { noShift: "u",  shift: "U"  },
    "KeyG":         { noShift: "i",  shift: "I"  },
    "KeyH":         { noShift: "d",  shift: "D"  },
    "KeyJ":         { noShift: "h",  shift: "H"  },
    "KeyK":         { noShift: "t",  shift: "T"  },
    "KeyL":         { noShift: "n",  shift: "N"  },
    "Semicolon":    { noShift: "s",  shift: "S"  },
    "Quote":        { noShift: "-",  shift: "="  },
    "Backslash":    { noShift: "]",  shift: "}"  },
    "KeyZ":         { noShift: ";",  shift: ";"  },
    "KeyX":         { noShift: "q",  shift: "Q"  },
    "KeyC":         { noShift: "j",  shift: "J"  },
    "KeyV":         { noShift: "k",  shift: "K"  },
    "KeyB":         { noShift: "x",  shift: "X"  },
    "KeyN":         { noShift: "b",  shift: "B"  },
    "KeyM":         { noShift: "m",  shift: "M"  },
    "Comma":        { noShift: "w",  shift: "W"  },
    "Period":       { noShift: "v",  shift: "V"  },
    "Slash":        { noShift: "z",  shift: "Z"  },
    "IntlRo":       { noShift: "\\", shift: "_"  },
    "Digit1":       { noShift: "1",  shift: "!"  },
    "Digit2":       { noShift: "2",  shift: "\"" },
    "Digit3":       { noShift: "3",  shift: "#"  },
    "Digit4":       { noShift: "4",  shift: "$"  },
    "Digit5":       { noShift: "5",  shift: "%"  },
    "Digit6":       { noShift: "6",  shift: "&"  },
    "Digit7":       { noShift: "7",  shift: "'"  },
    "Digit8":       { noShift: "8",  shift: "("  },
    "Digit9":       { noShift: "9",  shift: ")"  },
    "Digit0":       { noShift: "0",  shift: "0"  },
    "Minus":        { noShift: "@",  shift: "`"  },
    "Equal":        { noShift: "^",  shift: "~"  },
    "IntlYen":      { noShift: "¥",  shift: "|"  },
  }),
};
