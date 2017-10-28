/** @module component/typing_component */

import { Component } from '../lib/flux.mjs';

export default class TypingComponent extends Component {
  constructor(actions) {
    super(actions);

    window.addEventListener('keydown',
      ev => this.actions.TypingAction.keyboardEvent(ev));
  }

  template(props) {
    const html = this.html `
      <div class="typing">
        <div class="typing__message"></div>
        <div class="vocabularies"></div>
      </div>
    `;
    const message = props.isCounting ? props.count : props.isStopped ? "Enter押下で開始" : "開始！";
    html.querySelector('.typing__message').textContent = message;

    const vocabularies = props.vocabularies || [];
    const vocabularieElements = vocabularies.map((vocabulary, index) => {
      const element = this.html `<span>${vocabulary.text}</span>`;
      element.classList.add('vocabulary');

      if (index < props.currentIndex) {
        element.classList.add('vocabulary--typed');
      }
      return element;
    });
    const vocabulariesElement = html.querySelector('.vocabularies');
    vocabularieElements.forEach((elem) => {
      vocabulariesElement.appendChild(elem);
      vocabulariesElement.appendChild(document.createTextNode(" "));
    });

    return html;
  }
}

