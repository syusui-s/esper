/**
 * ローマ字テーブルのエントリ
 */
export default class StrokeEntry {
  /**
   * @param {string} input  入力
   * @param {string} output 出力
   * @param {string} next   次の入力
   */
  constructor(input, output, next) {
    this.input = input;
    this.output = output;
    this.next = next;
  }
}
