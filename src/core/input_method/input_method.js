/**
  * @typedef {import("./character_type.js").default} CharacterType
  */

/**
 * 入力方式
 *
 * 子クラスは、consumeメソッドを実装しなければならない。
 */
export default class InputMethod {
  /**
   * @param {string} name 入力方式名
   * @param {Array<CharacterType>} characterTypes 対応する文字種の配列
   */
  constructor(name, characterTypes) {
    this.name = name;
    this.characterTypes = characterTypes;
    this.output = '';
  }

  /**
   * 全ての状態を初期化する
   */
  resetAll() {
    this.resetOutput();
  }

  /**
   * 出力を初期化する
   */
  resetOutput() {
    this.output = '';
  }

  /**
   * 出力文字列に文字列を追加する
   *
   * @param {string} output 追加したい文字列
   */
  addOutput(output) {
    this.output += output;
  }

  /**
   * 出力
   *
   * @return {string}
   */
  takeOutput() {
    const { output } = this;
    this.resetOutput();

    return output;
  }
}
