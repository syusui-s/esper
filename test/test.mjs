import { DecisionTree } from '../src/lib/algorithm.mjs'
import { StrokeTable, StrokeEntry, StrokeState } from '../src/model/stroke.mjs'
import { Vocabulary } from '../src/model/vocabulary.mjs'

class Test {
  constructor() {
    this.allPassed = true;
  }

  assertEqual(actual, expected) {
    const equal = actual === expected;

    if (! equal) {
      console.log(`actual: ${actual}, expected: ${expected}`)
      console.log(new Error().stack);
      console.log("-----------");
    }

    this.allPassed = this.allPassed && equal;
  }
}

function testDecisionTree(assertEqual) {
  const decisionTree = new DecisionTree();
  decisionTree.insert(["a"], "あ");
  decisionTree.insert(["i"], "い");
  decisionTree.insert(["k", "a"], "か");
  decisionTree.insert(["k", "i"], "き");
  decisionTree.insert(["p", "y", "a"], "ぴゃ");

  assertEqual(decisionTree.get(["a"]).entry, "あ");
  assertEqual(decisionTree.get(["i"]).entry, "い");
  assertEqual(decisionTree.get(["u"]), undefined);
  assertEqual(decisionTree.get(["k", "a"]).entry, "か");
  assertEqual(decisionTree.get(["k", "i"]).entry, "き");
  assertEqual(decisionTree.get(["k", "u"]), undefined);
  assertEqual(decisionTree.get(["p", "y", "a"]).entry, "ぴゃ");
}

function testStrokeTable(assertEqual) {
  const strokeTable = StrokeTable.fromString("kna\tきゃ\ntt\tっ\tt");

  assertEqual(strokeTable.get("kna").entry.output, "きゃ");
  assertEqual(strokeTable.get("tt").entry.output, "っ");
  assertEqual(strokeTable.get("tt").entry.next, "t");
}

function testStrokeState(assertEqual) {
  const strokeTable = new StrokeTable({
    "ko":  new StrokeEntry("ko",  "こ"),
    "co":  new StrokeEntry("co",  "こ"),
    "kq":  new StrokeEntry("k,",  "こん"),
    "cq":  new StrokeEntry("k,",  "こん"),
    "n":   new StrokeEntry("n",   "ん"),
    "nn":  new StrokeEntry("nn",  "ん"),
    "ni":  new StrokeEntry("ni",  "に"),
    "ti":  new StrokeEntry("ti",  "ち"),
    "chi": new StrokeEntry("chi", "ち"),
    "ha":  new StrokeEntry("ha",  "は"),
  });

  const strokeState = new StrokeState(strokeTable);

  ["konnnichiha", "cqnitiha", "kqnitiha", "connnichiha", "connnittiha"].forEach(str => {
    str.split("").map(ch => strokeState.addCharacter(ch));
    assertEqual(strokeState.takeOutput(), "こんにちは");

    strokeState.reset();
  });

}

function testVocabulary(assertEqual) {
  const vocab = Vocabulary.createKana("こんにちは", "こんにちは");

  assertEqual(vocab.matchLeftLegth("あいうえお"), 5);
  assertEqual(vocab.matchLeftLegth(""), 5);
  assertEqual(vocab.matchLeftLegth("こ"), 4);
  assertEqual(vocab.matchLeftLegth("こん"), 3);
  assertEqual(vocab.matchLeftLegth("こんに"), 2);
  assertEqual(vocab.matchLeftLegth("こんにち"), 1);
  assertEqual(vocab.matchLeftLegth("こんにちは"), 0);
  assertEqual(vocab.matchLeftLegth("こんにちけ"), 1);
  assertEqual(vocab.matchLeftLegth("こんにちははは"), 0);

  assertEqual(vocab.matchLength(""), 0);
  assertEqual(vocab.matchLength("こ"), 1);
  assertEqual(vocab.matchLength("こん"), 2);
  assertEqual(vocab.matchLength("こんに"), 3);
  assertEqual(vocab.matchLength("こんにち"), 4);
  assertEqual(vocab.matchLength("こんにちは"), 5);
  assertEqual(vocab.matchLength("こんにちけ"), 0);
}

export default function test() {
  const test = new Test;
  const assertEqual = test.assertEqual.bind(test);

  testDecisionTree(assertEqual);
  testStrokeTable(assertEqual);
  testStrokeState(assertEqual);
  testVocabulary(assertEqual);

  return test.allPassed;
}
