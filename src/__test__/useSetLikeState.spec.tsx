import useSetLikeState from '../hooks/useSetLikeState';
import { mount } from '@cypress/react';

function Wrapper({ add }: { add?: number }) {
  const values = useSetLikeState<number>();

  return (
    <div>
      <button id="add" onClick={() => values.add(add || values.size)}>Add</button>
      <button id="clear" onClick={values.clear}>Clear</button>
      <ul>
        {
          values.map((number) => (
            <li key={number}>{number}</li>
          ))
        }
      </ul>
    </div>
  )
}

describe('useSetLikeState', () => {
  it('should create list of numbers', () => {
    mount(<Wrapper />);
    const button = cy.get('#add');
    for (let i = 0; i < 10; i++) {
      button.click();
    }
    cy.get('ul').find('li').should('have.length', 10);
    cy.get('#clear').click();
    cy.get('ul').find('li').should('have.length', 0);
  });
  it('should dont push same thing', () => {
    mount(<Wrapper add={5} />);
    const button = cy.get('#add');
    for (let i = 0; i < 10; i++) {
      button.click();
    }
    cy.get('ul').find('li').should('have.length', 1);
    cy.get('#clear').click();
    cy.get('ul').find('li').should('have.length', 0);
  });
});
