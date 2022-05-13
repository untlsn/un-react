import useDebouncedEffect from '../hooks/useDebouncedEffect';
import { useBoolState } from '../hooks';
import { mount } from '@cypress/react';
import useCounter from '../libToHook/useCounter';


function Wrapper() {
  const [count, setCount] = useCounter(0);
  const [bool, setBool] = useBoolState(false);
  useDebouncedEffect(() => {
    setCount.inc();
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
