/**
  * @typedef {import('./stroke_table.js').default} StrokeTable
  */

/**
 * ローマ字入力時のキーボードのストロークの状態を管理するサービス
 */
export default class StrokeState {
  /**
   * @param {StrokeTable} strokeTable
   */
  constructor(strokeTable) {
    this.strokeTable = strokeTable;
    this.input = '';
    this.output = '';
    this.temporaryEntry = undefined;
  }

  clearInput() {
    this.input = '';
  }

  clearOutput() {
    this.output = '';
  }

  reset() {
    this.clearInput();
    this.clearOutput();
  }

  /**
   * @param {string} character
   * @return {boolean}
   */
  addCharacter(character) {
    const currentInput = this.input + character;
    const node = this.strokeTable.get(currentInput);

    // Not Found
    if (!node || !(node.hasChildren() || node.hasEntry())) {
      this.clearInput();

      if (this.temporaryEntry) {
        this.addOutput(this.temporaryEntry.output);
        this.clearInput();
        this.addInput(this.temporaryEntry.next);
        this.temporaryEntry = undefined;
      }

      if (this.strokeTable.get(character)) {
        return this.addCharacter(character);
      }
      return false;
    }

    // Leaf
    if (!node.hasChildren() && node.hasEntry()) {
      const { entry } = node;

      this.addOutput(entry.output);
      this.clearInput();
      this.addInput(entry.next);
      this.temporaryEntry = undefined;

      return true;
    }

    // Uncomplete Branch
    if (node.hasChildren() && !node.hasEntry()) {
      this.addInput(character);
      this.temporaryEntry = undefined;

      return true;
    }

    // Branch
    if (node.hasChildren() && node.hasEntry()) {
      this.addInput(character);
      this.temporaryEntry = node.entry;

      return true;
    }
  }

  /**
   * @param {string} input
   */
  addInput(input) {
    // dismiss when null-like object is passed
    if (input == null) { return; }

    this.input += input;
  }

  /**
   * @param {string} output
   */
  addOutput(output) {
    if (output == null) {
      throw new Error('null-likeな値は追加できません');
    }

    this.output += output;
  }

  takeOutput() {
    const { output } = this;
    this.clearOutput();

    return output;
  }
}
