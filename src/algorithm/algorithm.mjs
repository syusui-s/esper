/**
 * 識別子と成るシンボルを保持するクラス
 */
export default class Enum {
  /**
   * @param {Iterable<string>} set
   */
  constructor(set) {
    for (const entry of set) {
      const entryStr = entry.toString();
      this[entryStr] = Symbol(entryStr);
    }

    return Object.freeze(this);
  }
}
