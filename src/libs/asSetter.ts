import { State, StateSetter } from '../types';

export default function asSetter<T>([value, setValue]: State<T>): StateSetter<T> {
  return (val: any) => setValue(
    typeof val == 'function' ? val(value) : val
  )
};
