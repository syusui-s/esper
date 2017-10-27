/**
 * 入力方式
 *
 * 子クラスは、consumeメソッドを実装しなければならない。
 */
class InputMethod {
  /**
   * @param {string} name 入力方式名
   * @param {array} characterTypes 対応する文字種の配列
   */
  constructor(name, characterTypes) {
    this.name = name;
    this.characterTypes = characterTypes;
  }

  reset() {
    this.resetOutput();
  }

  /**
   * 出力をリセット
   */
  resetOutput() {
    this.output = '';
  }

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
