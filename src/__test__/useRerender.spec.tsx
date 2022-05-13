import { useRef, useEffect } from 'react';
import useRerender from '../hooks/useRerender';
import { mount } from '@cypress/react';

function Wrapper() {
  const count = useRef(0);
  const rerender = useRerender();

  useEffect(() => {
    count.current++
  })

  return (
    <div>
      <button onClick={rerender}>Click</button>
      <p>{count.current}</p>
    </div>
  )
}


describe('useRerender', () => {
  it('should only rerender', () => {
    mount(<Wrapper />)
    Cypress._.times(5, () => {
      cy.get('button').click();
    })

    cy.get('p').should('contain.text', 5);
  });
});
