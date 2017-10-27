export class Enum {
  constructor(set) {
    for (let entry of set) {
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
  constructor() {
    this.tree = {};
    this.entry = undefined;
  }

  insert(keys, object) {
    const node = keys.reduce((node, key, index) => {
      if (node.tree[key]) {
        return node.tree[key];
      } else {
        return node.tree[key] = new DecisionTree();
      }
    }, this);

    node.entry = object;
  }

  get(keys) {
    return keys.reduce((node, key) => {
      if (! node) {
        return undefined;
      } else {
        return node.tree[key];
      }
    }, this);
  }

  hasEntry() {
    return !! this.entry;
  }

  hasChilds() {
    return Object.keys(this.tree).length > 0;
  }
}

export default { Enum, DecisionTree };
