import useCounter from '../libToHook/useCounter';
import { mount } from '@cypress/react';

function Wrapper() {
  const [count, setCount] = useCounter();

  return (
    <div>
      <button onClick={() => setCount.inc()}>Click</button>
      <p>{count}</p>
    </div>
  )
}

describe('useCounter', () => {
  it('should increment', () => {
    mount(<Wrapper />);
    Cypress._.times(5, () => {
      cy.get('button').click();
    });

    cy.get('p').should('contain.text', 5)
  });
});
