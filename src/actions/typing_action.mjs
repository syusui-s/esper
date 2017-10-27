import { Action } from '../lib/flux.mjs';

export default class TypingAction extends Action {
  constructor(dispatcher) {
    super(dispatcher);
  }

  keyboardEvent(event) {
    this.dispatcher.emit({type: 'KeyboardEvent', event: event});
  }
}
