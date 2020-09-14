import StrokeEntry from './stroke_entry.js';
import Trie from '../../algorithm/trie.js';

/**
 * Google IME互換のローマ字テーブル
 */
export default class StrokeTable {
  /**
   * Google IME の形式で記述された文字列
   *
   * @param {string} str
   */
  static fromString(str) {
    /** @type {{ [key: string]: StrokeEntry }} */
    const map = {};

    str.split(/[\r\n]+/).forEach((line) => {
      const [input, output, next] = line.split(/\t/);
      map[input] = new StrokeEntry(input, output, next);
    });

    return StrokeTable.fromObject(map);
  }

  /**
   * @param {{ [input: string]: StrokeEntry }} obj
   */
  static fromObject(obj) {
    const trie = new Trie();

    Object.keys(obj).forEach((key) => {
      const keys = key.split('');
      const entry = obj[key];

      trie.insert(keys, entry);
    });

    return new StrokeTable(trie);
  }

  /**
   * @param {Trie<string, string>} trie
   */
  constructor(trie) {
    this.trie = trie;
  }

  /**
   * @param {string} input
   * @return {Trie<string, string> | undefined}
   */
  get(input) {
    const maybeEntry = this.trie.get(input.split(''));
    return maybeEntry;
  }
}
