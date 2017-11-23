/** @module action/settings_action */

import { Action } from '../lib/flux.mjs';

export default class SettingsAction extends Action {
  selectedKeyboardMap(value) {
    this.dispatcher.emit({type: 'SelectedKeyboardMap', value});
  }
}
