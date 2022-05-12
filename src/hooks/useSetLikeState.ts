import { useState } from 'react';
import asSetLikeState from '../libs/asSetLikeState';

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
 * const values = useSetLikeState(); // [] is default
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
export default function useSetLikeState<T>(init?: T[] | Set<T>): SetLikeState<T> {
  return asSetLikeState(useState(new Set(init)));
};
