export class Emitter {
  constructor() {
    this.handlers = new Map();
  }

  /**
   * イベントハンドラを登録する
   *
   * @param {string} type
   * @param {function} handler
   */
  on(type, handler) {
    const handlers = this.getHandlersByType(type);
    handlers.push(handler);
  }

  emit(action) {
    this.getHandlersByType(action.type).forEach(handler => handler(action));
  }

  getHandlersByType(type) {
    if (! this.handlers.has(type)) {
      this.handlers.set(type, []);
    }

    return this.handlers.get(type);
  }
}

export class Component {
  constructor(actions) {
    this.actions = actions;
  }

  subscribes(store) {
    store.on('change', _ => { this.render(store.getState()) });
  }

  render(props) {
    const element = this.template(props);

    if (this.element) {
      this.element.replaceWith(element);
    }

    this.element = element;

    return this.element;
  }

  /**
   * 引数のテンプレート文字列をエスケープした状態のDOMを返す。
   *
   * @param {Array} strings 
   * @param {Array} values 
   */
  html(strings, ...values) {
    const escapedValues = values.map(value =>
      value.toString().replace(/[&'`"<>]/g, match => ({
        '&': '&amp;',
        "'": '&#x27;',
        '`': '&#x60;',
        '"': '&quot;',
        '<': '&lt;',
        '>': '&gt;',
      }[match]))
    );

    const htmlString = String.raw(strings, ...escapedValues);

    const domParser = new DOMParser();
    const doc = domParser.parseFromString(htmlString, 'text/html');

    return doc.body.firstChild;
  }
}

export class Action {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
}

export default { Emitter, Component, Action  };
