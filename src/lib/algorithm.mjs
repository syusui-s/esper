/** @module lib/algorithm  */

/**
 * 識別子と成るシンボルを保持するクラス
 */
export class Enum {
  constructor(set) {
    for (const entry of set) {
      const entryStr = entry.toString();
      this[entryStr] = Symbol(entryStr);
    }

    return Object.freeze(this);
  }
}

/**
 * 決定木っぽいやつ。節も値を保持できる。
 */
export class DecisionTree {
  /**
   */
  constructor() {
    this.tree = {};
    this.entry = undefined;
  }

  /**
   * 木に値を挿入する
   *
   * キーの中に存在しない節があれば、値を持たない節が生成される。
   * 既存のキーが指定された場合は、新しい値で上書きされる。
   *
   * @param {array} keys 木をトラバースするのに使われるキーの配列
   * @param {object} object 挿入される値
   */
  insert(keys, object) {
    const node = keys.reduce((node, key) => {
      if (node.tree[key]) {
        return node.tree[key];
      } else {
        return node.tree[key] = new DecisionTree();
      }
    }, this);

    node.entry = object;
  }

  /**
   * 対応するノード（部分木）を取得する
   *
   * @param {array} keys 木をトラバースするのに使われるキーの配列
   * @return {DecisionTree} キーに対応する部分木。もし見つからなかった場合は、undefiendを返す。
   */
  get(keys) {
    return keys.reduce((node, key) => {
      if (! node) {
        return undefined;
      } else {
        return node.tree[key];
      }
    }, this);
  }

  /**
   * 木が値を持っている場合に真を返す
   *
   * @return {boolean} 木がエントリを持っている場合に真を返す
   */
  hasEntry() {
    return !! this.entry;
  }

  /**
   * 木が子の木を持っている場合に真を返す
   *
   * @return {boolean} 木が子の木を持っている場合に真を返す
   */
  hasChilds() {
    return Object.keys(this.tree).length > 0;
  }
}

export default { Enum, DecisionTree };
