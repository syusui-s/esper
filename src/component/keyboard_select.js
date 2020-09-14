/** @module component/keyboard_select */

import { Component } from '../lib/flux.js';

export default class KeyboardSelectComponent extends Component {
  template(props) {
    const html = this.html`
      <form class="settings">
        <p>
          <label for="keyboard-layouts">使用可能</label>
          <select id="keyboard-layouts" class="settings__keyboard-layouts" size="3">
          </select>

          <label for="selected-keyboard-layouts">選択済み</label>
          <select id="selected-keyboard-layouts" class="settings__selected-keyboard-layouts" size="3">
          </select>
        </p>
      </form>
    `;

    const keyboardMaps = html.querySelector('#keyboard-layouts');
    props.keyboardMaps.forEach((layout) => keyboardMaps.appendChild(this.html`<option>${layout.name}</option>`));

    const selectedKeyboardMaps = html.querySelector('#selected-keyboard-layouts');
    props.selectedKeyboardMaps.forEach((layout) => selectedKeyboardMaps.appendChild(this.html`<option>${layout.name}</option>`));

    keyboardMaps.addEventListener('change', (ev) => this.actions.SettingsAction.selectedKeyboardMap(ev.target.value));

    return html;
  }
}
