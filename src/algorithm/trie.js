/**
 * @template K
 * @template V
 */
export default class Trie {
  constructor() {
    /** @type {Map<K, Trie<K, V>>} */
    this.children = new Map();
    /** @type {V | undefined} */
    this.entry = undefined;
  }

  /**
   * 木に値を挿入する
   *
   * キーの中に存在しない節があれば、値を持たない節が生成される。
   * 既存のキーが指定された場合は、新しい値で上書きされる。
   *
   * @param {K[]} keys  木をトラバースするのに使われるキーの配列
   * @param {V}   value 挿入される値
   */
  insert(keys, value) {
    /** @type {Trie<K, V>} */
    let currentNode = this;
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const child = currentNode.children.get(key);
      if (child) {
        currentNode = child;
      } else {
        const trieInserted = new Trie();
        currentNode.children.set(key, trieInserted);
        currentNode = trieInserted;
      }
    }

    currentNode.entry = value;
  }

  /**
   * 対応するノード（部分木）を取得する
   *
   * @param {K[]} keys 木をトラバースするのに使われるキーの配列
   * @return {Trie<K, V> | undefined} キーに対応する部分木。もし見つからなかった場合は、nullを返す。
   */
  get(keys) {
    /** @type {Trie<K, V>} */
    let currentNode = this;
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const child = currentNode.children.get(key);
      if (child) {
        currentNode = child;
      } else {
        return undefined;
      }
    }
    return currentNode;
  }

  /**
   * 木が値を持っている場合に真を返す
   *
   * @return {boolean} 木がエントリを持っている場合に真を返す
   */
  hasEntry() {
    return this.entry !== undefined;
  }

  /**
   * 木が子の木を持っている場合に真を返す
   *
   * @return {boolean} 木が子の木を持っている場合に真を返す
   */
  hasChildren() {
    return this.children.size > 0;
  }
}
