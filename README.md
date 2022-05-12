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
- useImmer (in progress)
- useBoolState - easier bools states
```js
const [value, setValue] = useBoolState(); // false is default

<button onClick={setValue.swtich}>Switch</button> // will switch value
<button onClick={setValue.true}>Open</button> // will switch value to true
<button onClick={setValue.false}>Close</button> // will switch value to false
<button onClick={() => setValue(false)}>Close</button> // with value

```
- useSetState (in progress)
- useSetLikeState (in progress)

## Libs:
- asImmer (in progress)
- createStateContext (in progress)
