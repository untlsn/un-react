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

export default function useSetLikeState<T>(init?: T[] | Set<T>): SetLikeState<T> {
  return asSetLikeState(useState(new Set(init)));
};
