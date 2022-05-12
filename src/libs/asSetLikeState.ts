import { State } from '../types';

interface SetLikeState<T> {
  size: number
  has(value: T): void,
  add(value: T): void,
  delete(value: T): void,
  clear(): void
  map<R>(callback: (value: T, index: number, arr: T[]) => R): R[]
}

/**
 * Mimic native Set
 * @example ```
 * const values = asSetLikeState(useState(new Set()));
 *
 * return (
 *   <>
 *     <button onClick={values.add(values.size)}>Add num</button>
 *     <ul>
 *       values.map( // shorthand for [...values].map
 *         (val) => <li key={val}>{val}</li>
 *       )
 *     </ul>
 *   </>
 * )
 * ```
 */
export default function asSetLikeState<T>([values, setValues]: State<Set<T>>): SetLikeState<T> {
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
