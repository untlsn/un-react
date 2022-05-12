import { Dispatch, SetStateAction } from 'react';
import produce from 'immer';

type RecipeFn<T> = (value: T) => T|void;
type Recipe<T> = RecipeFn<T> | T
/**
 * Work like useImmer, but it isn't hook and work with custom hooks
 * @example ```
 * const [value, _setValue] = useState({});
 * const setValue = asImmer(_setValue);
 * ```
 */
export default function asImmer<T>(setValue: Dispatch<SetStateAction<T>>) {
  return (recipe: Recipe<T>) => {
    typeof recipe == 'function' ? setValue((produce as any)(recipe)) : setValue(recipe)
  };
};
