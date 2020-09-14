import KeyEntry from './key_entry.js';

/**
  * @typedef {import('./key_event.js').default} KeyEvent
  */

/**
 * キーの打鍵位置に対応する文字を返す
 */
export default class KeyboardMap {
  /**
   * @param {string} name
   * @param {{ [name: string]: { noShift: string, shift: string } }} map
   */
  static fromMap(name, map) {
    const mapConverted = new Map();

    Object.keys(map).forEach((code) => {
      const entry = map[code];
      const keyEntry = new KeyEntry(code, entry);
      mapConverted.set(code, keyEntry);
    });

    return new this(name, mapConverted);
  }

  /**
   * @param {string} name
   * @param {Map<string, KeyEntry>} map
   */
  constructor(name, map) {
    this.name = name;
    this.map = map;
  }

  /**
   * @param {KeyEvent} keyEvent
   * @return {string | null}
   */
  getCharacter(keyEvent) {
    const keyEntry = this.map.get(keyEvent.code);

    if (!keyEntry) {
      return null;
    }

    if (keyEvent.modifiers.shiftKey) {
      return keyEntry.map.shift;
    }

    return keyEntry.map.noShift;
  }
}
