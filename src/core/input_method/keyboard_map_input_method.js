/** @typedef {import('./input_method.js')} InputMethod */
/** @typedef {import('../keyboard/keyboard_map.js')} KeyboardMap */

/**
 * キーボード配列に基づいて、キーボードの配列
 */
export class KeyoardMapInputMethod extends InputMethod {
  /**
   * @param {KeyboardMap} keyboardMap
   */
  constructor(keyboardMap) {
    super(keyboardMap.name, keyboardMap.characterTypes);
    this.keyboardMap = keyboardMap;
  }

  consume(keyEvent) {
    const keyEntry = this.keyboardMap.getKeyEntry(keyEvent.code);
    const character = keyEntry.getCharacter();
    this.addOutput(character);
  }
}
