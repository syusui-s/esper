/** @module component/application */

import { Emitter, Component } from '../lib/flux.js';

import TypingAction from '../action/typing_action.js';
import SettingsAction from '../action/settings_action.js';

import TypingStore from '../store/typing_store.js';
import SettingsStore from '../store/settings_store.js';

import TypingComponent from '../component/typing_component.js';
import SettingsComponent from '../component/settings_component.js';

/**
 * アプリケーションのコンテナ
 */
export default class ApplicationContainer extends Component {
  constructor() {
    super();

    this.dispatcher = new Emitter();

    this.actions = {
      TypingAction: new TypingAction(this.dispatcher),
      SettingsAction: new SettingsAction(this.dispatcher),
    };

    this.stores = {
      TypingStore: new TypingStore(this.dispatcher),
      SettingsStore: new SettingsStore(this.dispatcher),
    };
  }

  template() {
    const html = this.html`
      <div class="main">
        <settings-component></settings-component>
        <typing-component></typing-component>
      </div>
    `;

    const settingsComponent = new SettingsComponent(this.actions);
    settingsComponent.subscribes(this.stores.SettingsStore);
    html.querySelector('settings-component')
      .replaceWith(settingsComponent.render(this.stores.SettingsStore.getState()));

    const typingComponent = new TypingComponent(this.actions);
    typingComponent.subscribes(this.stores.TypingStore);
    html.querySelector('typing-component')
      .replaceWith(typingComponent.render(this.stores.TypingStore.getState()));

    return html;
  }
}
