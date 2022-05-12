import { Dispatch, SetStateAction } from 'react';
import produce from 'immer';

type RecipeFn<T> = (value: T) => T|void;
type Recipe<T> = RecipeFn<T> | T

export default function asImmer<T>(setValue: Dispatch<SetStateAction<T>>) {
  return (recipe: Recipe<T>) => {
    typeof recipe == 'function' ? setValue((produce as any)(recipe)) : setValue(recipe)
  };
};
