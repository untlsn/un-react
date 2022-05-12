import useAwaitMemo from '../hooks/useAwaitMemo';
import { mount } from '@cypress/react';

const asyncTask = () => new Promise<string>((res) => {
  setTimeout(() => {
    res('correct')
  }, 10)
});

function Wrapper() {
  const value = useAwaitMemo(asyncTask, {
    init: '',
  })

  return <div id="ctx">{value}</div>;
}

describe('useAwaitMemo', () => {
  it('should rerender component after task complete', () => {
    mount(<Wrapper />)
    cy.get('#ctx').should('contain.text', 'correct')
  });
});
