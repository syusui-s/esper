/**
 * 特定のコードに対応するアルファベットや記号を表す
 */
export default class KeyEntry {
  /**
   * @param {String} code キーコード
   * @param {{ noShift: string, shift: string }} map  キーマップ
   */
  constructor(code, map) {
    this.code = code;
    this.map = map;
  }
}
