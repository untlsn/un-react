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
- useImmer - just wrap all update function in produce
```js
// without
const [value, setValue] = useState();
setValue(produce(update));

// with
const [value, setValue] = useImmer();
setValue(update)
```
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

## Libs:
- asImmer - work like useImmer, but it isn't hook and work with custom hooks
```js
const [value,  setValue] = asImmer(valueFromState, setValueFromState);
// can be use inline
const [value, setValue] = asImmer(...useCustomState());
```
- createStateContext (in progress)
