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
- useBoolState (in progress)
- useSetState (in progress)
- useSetLikeState (in progress)

## Libs:
- asImmer (in progress)
- createStateContext (in progress)
