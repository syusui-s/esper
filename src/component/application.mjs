/** @module component/application */

import { Emitter, Component } from '../lib/flux.mjs';
 
import TypingAction from './../actions/typing_action.mjs';
import SettingsAction from './../actions/settings_action.mjs';

import TypingStore from './../store/typing_store.mjs';
import SettingsStore from './../store/settings_store.mjs';

import TypingComponent from './../component/typing_component.mjs';
import SettingsComponent from './../component/settings_component.mjs';

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
    const html = this.html `
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
