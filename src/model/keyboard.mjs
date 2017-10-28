/** @module model/keyboard */

import { Enum } from '../lib/algorithm.mjs';

/**
 * 文字種
 */
export const CharacterType = new Enum([
  // General
  'Latin',
  // ja_JP
  'Hiragana',
  // Symbols
  'HalfSymbols',
  'WideSymbols',
  // Special
  'Any',
]);

/**
 * キーコードの一覧
 */
export const KeyCodes = new Enum([
  // JISBased
  'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
  'BackQuote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'IntlYen', 'Backspace',
  'Tab', 'keyQ', 'keyW', 'keyE', 'keyR', 'keyT', 'keyY', 'keyU', 'keyI', 'keyO', 'keyP', 'BracketLeft', 'BracketRight',
  'CapsLock', 'keyA', 'keyS', 'keyD', 'keyF', 'keyG', 'keyH', 'keyJ', 'keyK', 'keyL', 'Semicolon', 'Quoto', 'Backslash', 'Enter',
  'ShiftLeft', 'keyZ', 'keyX', 'keyC', 'keyV', 'keyB', 'keyN', 'keyM', 'Comma', 'Period', 'Slash', 'IntlRo', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'NonConvert', 'Space', 'Convert', 'KanaMode', 'AltRight',
  // Other Keys
  'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20',
]);

/**
 * キーボードイベント
 */
export class KeyEvent {
  constructor(code, key, timeStamp, modifiers) {
    this.code = code;
    this.key = key;
    this.timeStamp = timeStamp;
    this.modifiers = modifiers;
  }

  static fromKeyboardEvent(keyboardEvent) {
    const { code, key, ctrlKey, altKey, shiftKey, metaKey, timeStamp } = keyboardEvent;
    return new this(code, key, timeStamp, { ctrlKey, altKey, shiftKey, metaKey });
  }

  /**
   * キー押下の時間の差分を得る
   */
  diffTimestamp(before) {
    return this.timeStamp - before.timeStamp;
  }

  /**
   * 指定時間以内に前のキーが押されたかどうかを判定する
   */
  isPressedIn(before, milliseconds) {
    const diff = this.diffTimestamp(before);
    return diff >= 0 && diff <= milliseconds;
  }
}
