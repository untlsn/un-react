import { State, StateSetter } from '../types';

export default function composeSetter<T, R>([value, setValue]: State<T>, setterCompute: (setter: StateSetter<T>) => R): [T, R] {
  return [
    value,
    setterCompute(setValue),
  ]
};
