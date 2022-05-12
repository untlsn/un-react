import { Dispatch, SetStateAction } from 'react';
import produce from 'immer';

type RecipeFn<T> = (value: T) => T|void;
type Recipe<T> = RecipeFn<T> | T

export default function asImmer<T>(value: T, setValue: Dispatch<SetStateAction<T>>): [value: T, produce: (recipe: Recipe<T>) => void] {
  return [
    value,
    (recipe) => (typeof recipe == 'function' ? setValue((produce as any)(recipe)) : setValue(recipe)),
  ]
};
