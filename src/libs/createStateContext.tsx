import { createContext, FC, useContext, useState } from 'react';
import * as React from 'react';



export type StatePair<T> = [T, React.Dispatch<React.SetStateAction<T>>];

/**
 * Make creating context with state easier
 * @example ```tsx
 * // Get Provider and Hook. Init value can be place here
 * const [TextProvider, useText] = createStateContext<Type>('init value');
 *
 * function App() {
 *   return (
 *     // value here override value from createStateContext
 *     <TextProvider value="override">
 *       <Input />
 *       <Text />
 *     </TextProvider>
 *   )
 * }
 *
 * function Input() {
 *   const [value, setText] = useText();
 *
 *   return (
 *     <input value={value} onChange={(ev) => setText(ev.currentTarget.value)} />
 *   )
 * }
 *
 * function Text() {
 *   const [value] = useText();
 *
 *   return (
 *     <p>{value}</p>
 *   )
 * }
 * ```
 */
export default function createStateContext<T>(init?: T) {
  const Context = createContext([] as any as StatePair<T>);

  function Provider({ children, value: initValue }: { children: any, value?: T }) {
    const [value, setValue] = useState(initValue || init as T);

    return (
      <Context.Provider value={[value, setValue]}>
        {children}
      </Context.Provider>
    )
  }

  function useThisContext() {
    return useContext(Context);
  }

  return [Provider, useThisContext] as [FC, () => StatePair<T>]
}
