/**
  * @typedef {import('./character_type.js').default} CharacterType
  * @typedef {import('../keyboard/key_event.js').default} KeyEvent
  */

import InputMethod from './input_method.js';

/**
 * keyに基づいてキーの入力を受け取る場合の処理
 */
export default class DirectInputMethod extends InputMethod {
  /**
   * @param {KeyEvent} keyEvent
   */
  consume(keyEvent) {
    this.addOutput(keyEvent.key);
  }
}
