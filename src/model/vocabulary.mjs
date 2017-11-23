/** @module model/vocabulary */

import { Enum } from '../lib/algorithm.mjs';

/**
 * 語句を構成する字種
 */
const VocabularyType = new Enum([
  'Kana',
  'Latin',
]);

/**
 * 語彙を表す値オブジェクト
 */
export class Vocabulary {
  /**
   * @param {VocabularyType} type 語句を構成する字種
   * @param {string} text 画面に直接表示される語句
   * @param {string} rawText 内部的に使用される語句（読みがななど）
   */
  constructor(type, text, rawText) {
    this.type = type;
    this.text = text;
    this.rawText = rawText;
  }

  static createKana(text, kana) {
    return new this(VocabularyType.Kana, text, kana);
  }

  static createLatin(text) {
    return new this(VocabularyType.Latin, text, text);
  }

  matchLength(rawText) {
    return this.rawText.startsWith(rawText) ? rawText.length : 0;
  }

  matchLeftLegth(rawText) {
    let left = this.rawText.length;

    for (let i = 0; i < this.rawText.length; i++) {
      if (rawText.charAt(i) === this.rawText.charAt(i)) {
        left -= 1;
      } else {
        break;
      }
    }

    return left;
  }
}

/**
 * 語彙群
 */
export class Vocabularies {
  constructor(vocabularies) {
    this.list = vocabularies;
  }

  get(index) {
    return this.list[index];
  }

  map(func) {
    return this.list.map(func);
  }
}
