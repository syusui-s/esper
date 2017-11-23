/** @module model/keyboard_map */

/**
 * 特定のコードに対応するアルファベットや記号を表す
 */
export class KeyEntry {
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
export class KeyboardMap {
  static fromMap(name, map) {
    const mapConverted = new Map();

    Object.keys(map).forEach((code) => {
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
