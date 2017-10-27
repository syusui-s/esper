import { Action } from '../lib/flux.mjs';

export default class SettingsAction extends Action {
  constructor(dispatcher) {
    super(dispatcher);
  }

  selectedKeyboardMap(value) {
    this.dispatcher.emit({type: 'SelectedKeyboardMap', value: value});
  }
}
