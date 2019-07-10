/** @module model/input_method */

/**
 * 入力方式
 *
 * 子クラスは、consumeメソッドを実装しなければならない。
 *
 * @type {InputMethod}
 * @property {string} name
 * @property {string} characterTypes 
 */
class InputMethod {
  /**
   * @param {string} name 入力方式名
   * @param {array} characterTypes 対応する文字種の配列
   */
  constructor(name, characterTypes) {
    this.name = name;
    this.characterTypes = characterTypes;

    this.reset();
  }

  /**
   * 全ての状態を初期化する
   */
  reset() {
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
   * @return {undefined}
   */
  addOutput(output) {
    this.output += output;
  }

  /**
   * 出力
   */
  takeOutput() {
    const output = this.output;
    this.resetOutput();

    return output;
  }
}

/**
 * keyに基づいてキーの入力を受け取る場合の処理
 */
class DirectInputMethod extends InputMethod {
  constructor(name, characterTypes) {
    super(name, characterTypes);
  }

  consume(keyboardEvent) {
    this.addOutput(this.addOutput.key);
  }
}

/**
 * キーボード配列に基づいて、キーボードの配列
 */
class KeyoardMapInputMethod extends InputMethod {
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
