import useBoolState from '../hooks/useBoolState';
import { mount } from '@cypress/react';

function Switch() {
  const [value, setValue] = useBoolState();

  return (
    <button id="wrapper" onClick={setValue.switch}>
      Switch {String(value)}
    </button>
  )
}

function Off() {
  const [value, setValue] = useBoolState(true);

  return (
    <button id="wrapper" onClick={setValue.false}>
      Off {String(value)}
    </button>
  )
}

function On() {
  const [value, setValue] = useBoolState();

  return (
    <button id="wrapper" onClick={setValue.true}>
      On {String(value)}
    </button>
  )
}

function Native() {
  const [value, setValue] = useBoolState();

  return (
    <button id="wrapper" onClick={() => setValue(v => !v)}>
      Native {String(value)}
    </button>
  )
}


describe('useBoolState', () => {
  it('Switch should work', () => {
    mount(<Switch />);
    cy.get('button')
      .should('contain.text', 'Switch false').click()
      .should('contain.text', 'Switch true')
  });
  it('Off should work', () => {
    mount(<Off />);
    cy.get('button')
      .should('contain.text', 'Off true').click()
      .should('contain.text', 'Off false')
  });
  it('On should work', () => {
    mount(<On />);
    cy.get('button')
      .should('contain.text', 'On false').click()
      .should('contain.text', 'On true')
  });
  it('Native should work', () => {
    mount(<Native />);
    cy.get('button')
      .should('contain.text', 'Native false').click()
      .should('contain.text', 'Native true')
  });

});
