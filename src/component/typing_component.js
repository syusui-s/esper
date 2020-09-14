/** @module component/typing_component */

import { Component } from '../lib/flux.js';

export default class TypingComponent extends Component {
  constructor(actions) {
    super(actions);

    window.addEventListener('keydown',
      (ev) => this.actions.TypingAction.keyboardEvent(ev));
  }

  template({
    isCounting, isStopped, count, vocabularies, currentIndex,
  }) {
    const html = this.html`
      <div class="typing">
        <div class="typing__message"></div>
        <div class="vocabularies"></div>
      </div>
    `;

    const message = isCounting ? count : isStopped ? 'Enter押下で開始' : '開始！';
    html.querySelector('.typing__message').textContent = message;

    const vocabularieElements = vocabularies.map((vocabulary, index) => {
      const element = this.html`<span>${vocabulary.text}</span>`;
      element.classList.add('vocabulary');

      if (index < currentIndex) {
        element.classList.add('vocabulary--typed');
      }
      return element;
    });

    const vocabulariesElement = html.querySelector('.vocabularies');
    vocabularieElements.forEach((elem) => {
      vocabulariesElement.appendChild(elem);
      vocabulariesElement.appendChild(document.createTextNode(' '));
    });

    return html;
  }
}
