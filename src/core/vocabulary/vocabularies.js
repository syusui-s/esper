/** @typedef {import("./vocabulary.js")} Vocabulary */

/**
 * 語彙群
 */
export default class Vocabularies {
  /**
   * @param {Array<Vocabulary>} vocabularies
   */
  constructor(vocabularies) {
    this.list = vocabularies;
  }

  /**
   * @param {number} index
   */
  get(index) {
    return this.list[index];
  }

  /**
   * @param {(v: Vocabulary) => T} func
   * @template T
   */
  map(func) {
    return this.list.map(func);
  }
}
