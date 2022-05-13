import { useState } from 'react';
import useDebouncedEffect from '../hooks/useDebouncedEffect';
import { useBoolState } from '../hooks';
import { mount } from '@cypress/react';


export default function Wrapper() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useBoolState(false);
  useDebouncedEffect(() => {
    setCount(v => v+1)
  }, {
    debounce: 500,
    deps: [bool]
  })

  return (
    <div>
      <button onClick={setBool.switch}>Click</button>
      <p>{count}</p>
    </div>
  );
}

describe('useDebouncedEffect', () => {
  it('debounce should work', () => {
    mount(<Wrapper />)
    const click = () => {
      cy.wait(300).get('button').click();
    };
    cy.get('button').click();
    click();
    click();
    click();
    cy.get('p').should('contain.text', 2)
  });
});
