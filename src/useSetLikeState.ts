import { useState } from 'react';

interface SetLikeState<T> {
  size: number
  has(value: T): void,
  add(value: T): void,
  delete(value: T): void,
  clear(): void
  map<R>(callback: (value: T, index: number, arr: T[]) => R): R[]
}

export default function useSetLikeState<T>(init?: T[] | Set<T>): SetLikeState<T> {
  const [values, setValues] = useState(new Set(init));

  const setter = (callback: (set: Set<T>) => void) => {
    setValues((old) => {
      const newSet = new Set(old);
      callback(newSet)
      return newSet;
    });
  }


  return {
    get size() {
      return values.size;
    },
    has: (value: T) => values.has(value),
    add: (value: T) => setter((set) => {
      set.add(value);
    }),
    delete: (value: T) => setter((set) => {
      set.delete(value);
    }),
    clear: () => setter((set) => {
      set.clear();
    }),
    map: <R>(callback: (value: T, index: number, arr: T[]) => R) => [...values].map(callback)
  }
};
