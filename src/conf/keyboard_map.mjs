import { KeyboardMap } from '../model/keyboard_map.mjs';

export class KeyboardMaps {
  constructor(keyboardMaps) {
    this.map = new Map();

    keyboardMaps.forEach(({ id, name, map }) => {
      this.map.set(id, KeyboardMap.fromMap(name, map));
    });
  }

  findById(id) {
    return this.map.get(id);
  }

  listIds() {
    return Array.from( this.map.keys() );
  }
}

export default new KeyboardMaps([
  {
    "id": "qwerty_jis",
    "name": "QWERTY (JIS)",
    "map": {
      "KeyQ":         { "noShift": "q",  "shift": "Q"  },
      "KeyW":         { "noShift": "w",  "shift": "W"  },
      "KeyE":         { "noShift": "e",  "shift": "E"  },
      "KeyR":         { "noShift": "r",  "shift": "R"  },
      "KeyT":         { "noShift": "t",  "shift": "T"  },
      "KeyY":         { "noShift": "y",  "shift": "Y"  },
      "KeyU":         { "noShift": "u",  "shift": "U"  },
      "KeyI":         { "noShift": "i",  "shift": "I"  },
      "KeyO":         { "noShift": "o",  "shift": "O"  },
      "KeyP":         { "noShift": "p",  "shift": "P"  },
      "BracketLeft":  { "noShift": "[",  "shift": "{"  },
      "BracketRight": { "noShift": "]",  "shift": "}"  },
      "KeyA":         { "noShift": "a",  "shift": "A"  },
      "KeyS":         { "noShift": "s",  "shift": "S"  },
      "KeyD":         { "noShift": "d",  "shift": "D"  },
      "KeyF":         { "noShift": "f",  "shift": "F"  },
      "KeyG":         { "noShift": "g",  "shift": "G"  },
      "KeyH":         { "noShift": "h",  "shift": "H"  },
      "KeyJ":         { "noShift": "j",  "shift": "J"  },
      "KeyK":         { "noShift": "k",  "shift": "K"  },
      "KeyL":         { "noShift": "l",  "shift": "L"  },
      "Semicolon":    { "noShift": ";",  "shift": ";"  },
      "Quote":        { "noShift": ":",  "shift": ":"  },
      "Backslash":    { "noShift": "]",  "shift": "}"  },
      "KeyZ":         { "noShift": "z",  "shift": "Z"  },
      "KeyX":         { "noShift": "x",  "shift": "X"  },
      "KeyC":         { "noShift": "c",  "shift": "C"  },
      "KeyV":         { "noShift": "v",  "shift": "V"  },
      "KeyB":         { "noShift": "b",  "shift": "B"  },
      "KeyN":         { "noShift": "n",  "shift": "N"  },
      "KeyM":         { "noShift": "m",  "shift": "M"  },
      "Comma":        { "noShift": ",",  "shift": ","  },
      "Period":       { "noShift": ".",  "shift": "."  },
      "Slash":        { "noShift": "/",  "shift": "/"  },
      "IntlRo":       { "noShift": "\\", "shift": "_"  },
      "Digit1":       { "noShift": "1",  "shift": "!"  },
      "Digit2":       { "noShift": "2",  "shift": "\"" },
      "Digit3":       { "noShift": "3",  "shift": "#"  },
      "Digit4":       { "noShift": "4",  "shift": "$"  },
      "Digit5":       { "noShift": "5",  "shift": "%"  },
      "Digit6":       { "noShift": "6",  "shift": "&"  },
      "Digit7":       { "noShift": "7",  "shift": "'"  },
      "Digit8":       { "noShift": "8",  "shift": "("  },
      "Digit9":       { "noShift": "9",  "shift": ")"  },
      "Digit0":       { "noShift": "0",  "shift": "0"  },
      "Minus":        { "noShift": "@",  "shift": "`"  },
      "Equal":        { "noShift": "^",  "shift": "~"  },
      "IntlYen":      { "noShift": "¥",  "shift": "|"  }
    }
  },
  {
    "id": "dvorak_jp106",
    "name": "Dvorak JP106",
    "map": {
      "KeyQ":         { "noShift": ":",  "shift": "*"  },
      "KeyW":         { "noShift": ",",  "shift": "<"  },
      "KeyE":         { "noShift": ".",  "shift": ">"  },
      "KeyR":         { "noShift": "p",  "shift": "P"  },
      "KeyT":         { "noShift": "y",  "shift": "Y"  },
      "KeyY":         { "noShift": "f",  "shift": "F"  },
      "KeyU":         { "noShift": "g",  "shift": "G"  },
      "KeyI":         { "noShift": "c",  "shift": "C"  },
      "KeyO":         { "noShift": "r",  "shift": "R"  },
      "KeyP":         { "noShift": "l",  "shift": "L"  },
      "BracketLeft":  { "noShift": "/",  "shift": "?"  },
      "BracketRight": { "noShift": "[",  "shift": "{"  },
      "KeyA":         { "noShift": "a",  "shift": "A"  },
      "KeyS":         { "noShift": "o",  "shift": "O"  },
      "KeyD":         { "noShift": "e",  "shift": "E"  },
      "KeyF":         { "noShift": "u",  "shift": "U"  },
      "KeyG":         { "noShift": "i",  "shift": "I"  },
      "KeyH":         { "noShift": "d",  "shift": "D"  },
      "KeyJ":         { "noShift": "h",  "shift": "H"  },
      "KeyK":         { "noShift": "t",  "shift": "T"  },
      "KeyL":         { "noShift": "n",  "shift": "N"  },
      "Semicolon":    { "noShift": "s",  "shift": "S"  },
      "Quote":        { "noShift": "-",  "shift": "="  },
      "Backslash":    { "noShift": "]",  "shift": "}"  },
      "KeyZ":         { "noShift": ";",  "shift": ";"  },
      "KeyX":         { "noShift": "q",  "shift": "Q"  },
      "KeyC":         { "noShift": "j",  "shift": "J"  },
      "KeyV":         { "noShift": "k",  "shift": "K"  },
      "KeyB":         { "noShift": "x",  "shift": "X"  },
      "KeyN":         { "noShift": "b",  "shift": "B"  },
      "KeyM":         { "noShift": "m",  "shift": "M"  },
      "Comma":        { "noShift": "w",  "shift": "W"  },
      "Period":       { "noShift": "v",  "shift": "V"  },
      "Slash":        { "noShift": "z",  "shift": "Z"  },
      "IntlRo":       { "noShift": "\\", "shift": "_"  },
      "Digit1":       { "noShift": "1",  "shift": "!"  },
      "Digit2":       { "noShift": "2",  "shift": "\"" },
      "Digit3":       { "noShift": "3",  "shift": "#"  },
      "Digit4":       { "noShift": "4",  "shift": "$"  },
      "Digit5":       { "noShift": "5",  "shift": "%"  },
      "Digit6":       { "noShift": "6",  "shift": "&"  },
      "Digit7":       { "noShift": "7",  "shift": "'"  },
      "Digit8":       { "noShift": "8",  "shift": "("  },
      "Digit9":       { "noShift": "9",  "shift": ")"  },
      "Digit0":       { "noShift": "0",  "shift": "0"  },
      "Minus":        { "noShift": "@",  "shift": "`"  },
      "Equal":        { "noShift": "^",  "shift": "~"  },
      "IntlYen":      { "noShift": "¥",  "shift": "|"  }
    }
  }
]);
