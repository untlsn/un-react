import { createContext, FC, useContext, useState } from 'react';
import type * as React from 'react';



export type StatePair<T> = [T, React.Dispatch<React.SetStateAction<T>>];

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
