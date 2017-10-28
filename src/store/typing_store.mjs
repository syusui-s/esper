/** @module store/typing_store */

import { Emitter } from '../lib/flux.mjs';
import { KeyEvent } from '../model/keyboard.mjs';
import { Vocabularies, Vocabulary } from '../model/vocabulary.mjs';
import { Layouts } from '../model/keyboard_map.mjs'

/**
 * タイピングに関わる処理全般の状態を保持する
 */
export default class TypingStore extends Emitter {
  constructor(emitter) {
    super();

    this.reset();

    emitter.on('KeyboardEvent', action => this.onKeyboardEvent(action));
  }

  /**
   * 全てのプロパティを初期化する
   */
  reset() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = undefined;
    this.count = 2;

    this.startTime = undefined;
    this.endTime = undefined;

    this.vocabularies = undefined;

    this.layout = Layouts["Dvorak JP106"];
  }

  onKeyboardEvent(keyboardEvent) {
    const keyEvent = KeyEvent.fromKeyboardEvent(keyboardEvent.event);

    if (this.eventRequestsStart(keyEvent)) {
      this.startCountdown();
      this.emit({ type: 'change' });
      return;
    }

    if (this.eventRequestsCancel(keyEvent)) {
      this.reset();
      this.emit({ type: 'change' });
      return;
    }

    if (this.isStarted()) {
      this.emit({ type: 'change' });
      return;
    }

    {
      const character = this.layout.getCharacter(keyEvent);
      console.log(character);
    }
  }

  onCountdown() {
    this.decrementCountdown();

    if (this.isOver()) {
      this.clearCountdown();
      this.start();
    }
  }

  start() {
    this.vocabularies = new Vocabularies([
      Vocabulary.createKana("日本語", "にほんご"),
      Vocabulary.createKana("入力", "にゅうりょく"),
      Vocabulary.createKana("洗剤", "せんざい"),
      Vocabulary.createKana("柔軟", "じゅうなん"),
      Vocabulary.createKana("東海", "とうかい"),
      Vocabulary.createKana("東海道", "とうかいどう"),
      Vocabulary.createKana("新幹線", "しんかんせん"),
      Vocabulary.createKana("電車", "でんしゃ"),
      Vocabulary.createKana("牽制", "けんせい"),
      Vocabulary.createKana("原子力", "げんしりょく"),
      Vocabulary.createKana("協同", "きょうどう"),
    ]);
    this.startTime = Date.now();

    this.emit({ type: 'change' });
  }

  startCountdown() {
    this.timer = window.setInterval(() => {
      this.onCountdown();
    }, 1000);
  }

  decrementCountdown() {
    this.count -= 1;

    this.emit({ type: 'change' });
  }

  clearCountdown() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  isStarted() {
    return this.count === 0;
  }

  isStopped() {
    return this.count > 0;
  }

  isCounting() {
    return typeof this.timer === 'number';
  }

  isOver() {
    return this.count <= 0;
  }

  eventRequestsStart(keyEvent) {
    return this.isStopped() && ! this.isCounting() && keyEvent.code === "Enter";
  }

  eventRequestsCancel(keyEvent) {
    return ( this.isStarted() || this.isCounting() ) && keyEvent.code === "Escape";
  }

  getState() {
    let { started, count, startTime, endTime, vocabularies } = this;
    return {
      started,
      count,
      startTime,
      endTime,
      vocabularies,
      isStopped: this.isStopped(),
      isCounting: this.isCounting(),
    };
  }
}
