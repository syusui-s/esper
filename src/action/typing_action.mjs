/** @module action/typing_action */

import { Action } from '../lib/flux.mjs';

export default class TypingAction extends Action {
  keyboardEvent(event) {
    this.dispatcher.emit({type: 'KeyboardEvent', event});
  }
}
