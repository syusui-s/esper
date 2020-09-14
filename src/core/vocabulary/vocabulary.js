import CharacterType from '../input_method/character_type.js';

/**
 * 語彙を表す値オブジェクト
 */
export default class Vocabulary {
  /**
   * @param {CharacterType} type 語句を構成する字種
   * @param {string} text 画面に直接表示される語句
   * @param {string} rawText 内部的に使用される語句（読みがななど）
   */
  constructor(type, text, rawText) {
    this.type = type;
    this.text = text;
    this.rawText = rawText;
  }

  /**
   * @param {string} text 画面に直接表示される語句
   * @param {string} kana 読みがな
   */
  static createKana(text, kana) {
    return new this(CharacterType.Kana, text, kana);
  }

  /**
   * @param {string} text 画面に直接表示される語句
   */
  static createLatin(text) {
    return new this(CharacterType.Latin, text, text);
  }
}
