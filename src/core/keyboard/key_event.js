/**
 * キーボードイベント
 */
export default class KeyEvent {
  /**
   * @typedef {{ ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean }} Modifiers
   * @param {string} code
   * @param {string} key
   * @param {number} timeStamp
   * @param {Modifiers} modifiers
   */
  constructor(code, key, timeStamp, modifiers) {
    this.code = code;
    this.key = key;
    this.timeStamp = timeStamp;
    this.modifiers = modifiers;
  }

  /**
   * キー押下の時間の差分を得る
   *
   * @param {KeyEvent} before
   */
  diffTimestamp(before) {
    return this.timeStamp - before.timeStamp;
  }

  /**
   * 指定時間以内に前のキーが押されたかどうかを判定する
   *
   * @param {KeyEvent} before
   * @param {number}   milliseconds
   */
  isPressedIn(before, milliseconds) {
    const diff = this.diffTimestamp(before);
    return diff >= 0 && diff <= milliseconds;
  }
}
