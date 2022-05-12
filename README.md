# un-react
A few simple but useful react hooks

## Hooks:

- useAwaitEffect - allow to use async effect, but disable clear effect
```js
useAwaitEffect(async () => {
  await asyncTask();
}); // default deps is []
```
- useAwaitMemo - useAwaitEffect and useState shorthand
```js
// without
const [value, setValue] = useState({});
useAwaitEffect(async () => {
  setValue(await fetchFromApi());
});

// with
const value = useAwaitMemo(
  fetchFromApi,
  {
    init: {}, // value used before effect end
  }
);
```
- useImmer - shortcut of asImmer(...useState())
- useBoolState - easier bools states
```jsx
const [value, setValue] = useBoolState(); // false is default

<button onClick={setValue.swtich}>Switch</button> // will switch value
<button onClick={setValue.true}>Open</button> // will switch value to true
<button onClick={setValue.false}>Close</button> // will switch value to false
<button onClick={() => setValue(false)}>Close</button> // with value

```
- useSetLikeState - mimic native Set
```jsx
const values = useSetLikeState(); // [] is default

return (
  <>
    <button onClick={values.add(values.size)}>Add num</button> // .add will triger rerender
    <ul>
      values.map( // shorthand for [...values].map
        (val) => <li key={val}>{val}</li>
      )
    </ul>
  </>
)
```
- useModalState - shortcut of asModal(...useState)

## Libs:
- asImmer - work like useImmer, but it isn't hook and work with custom hooks
```js
const [value,  setValue] = asImmer(valueFromState, setValueFromState);
// can be use inline
const [value, setValue] = asImmer(...useCustomState());
```
- createStateContext - make creating context with state easier
```tsx
// Get Provider and Hook. Init value can be place here
const [TextProvider, useText] = createStateContext<Type>('init value');

function App() {
  return (
    // value here override value from createStateContext
    <TextProvider value="override">
      <Input />
      <Text />
    </TextProvider>
  )
}

function Input() {
  const [value, setText] = useText();
  
  return (
    <input value={value} onChange={(ev) => setText(ev.currentTarget.value)} />
  )
}

function Text() {
  const [value] = useText();

  return (
    <p>{value}</p>
  )
}
```
- asModal - extend state with useful functions for forms (Proxy)
```tsx
const [value, setValue] = asModal(...useState(''));

// (ev) => setValue(ev.currentTarget.value)
<imput onChange={setValue.value} />
// (ev) => setValue(ev.currentTarget.checked)
<input type="checkbox" onChange={setValue.check} />
// () => setValue(5)
<button onChange={setValue.const(5)}>Click</button>
// (ev) => setValue(ev.custom)
<custom onChange={setValue.custom} />
// (...args) => setValue(args[0])
<custom onChange={setValue.get(0)} />
```
