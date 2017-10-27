import ApplicationContainer from './component/application.mjs';
import Test from '../test/test.mjs'

if (location.href.match(/\?test/)) { Test(); }

window.addEventListener('load', _ => {
  document.querySelector('.js-app').appendChild(new ApplicationContainer().render());
});

/*
window.addEventListener("load", function() {
  const strokeTable = StrokeTable.fromString(document.scripts[1].textContent);
  const strokeState = new StrokeState(strokeTable);

  window.addEventListener("keydown", function(keyboardEvent) {
    console.log(keyboardEvent);

    const entry = Layouts["DvorakJP106"].getKeyEntry(keyboardEvent.code);
    const character = keyboardEvent.shiftKey ? entry.shift : entry.noShift;

    console.log(character);

    strokeState.addCharacter(character);
    document.body.textContent += strokeState.takeOutput();
  });
});
*/
