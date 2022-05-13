import { mount } from '@cypress/react';
import useAfterEffect from '../hooks/useAfterEffect';
import useCounter from '../libToHook/useCounter';

function Wrapper() {
  const [count, setCount] = useCounter(0);
  const [effectCount, setEffectCount] = useCounter(0);

  useAfterEffect(() => {
    setEffectCount.inc();
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount.inc()}>Click</button>
      <p id="count">{count}</p>
      <p id="effectCount">{effectCount}</p>
    </div>
  )
}

describe('useAfterEffect', () => {
  it('should work after first render', () => {
    mount(<Wrapper />);
    Cypress._.times(5, () => {
      cy.get('button').click()
    })
    cy.get('#count').then(el => {
      const count = el.text();
      cy.get('#effectCount').should('contain.text', count)
    })
  });
});
