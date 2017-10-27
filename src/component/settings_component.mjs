import { Component } from '../lib/flux.mjs';

export default class SettingsComponent extends Component {
  constructor(actions) {
    super(actions);
  }

  template(props) {
    const html = this.html `<div></div>`;
    return html;
  }
}
