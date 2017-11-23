/** @module store/settings_store */

import { Emitter } from '../lib/flux.mjs';

export default class SettingsStore extends Emitter {
  constructor(emitter) {
    super();

    this.keyboardMaps = [{ name: 'QWERTY' }, { name: 'Dvorak JP' }];
    this.selectedKeyboardMaps = [];

    emitter.on('SelectedKeyboardMap', (action) => this.onSelectedKeyboardMap(action.value));
  }

  onSelectedKeyboardMap(value) {
    const layout = this.keyboardMaps.find((layout) => layout.name === value);

    if (! this.selectedKeyboardMaps.includes(layout)) {
      this.selectedKeyboardMaps.push(layout);
    }

    this.emit({ type: 'change' });
  }

  getState() {
    const { keyboardMaps, selectedKeyboardMaps } = this;
    return { keyboardMaps, selectedKeyboardMaps };
  }
}
