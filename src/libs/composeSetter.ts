import { State, StateSetter } from '../types';

/**
 * Help to compose state
 * @example ```
 * const [value, setValue] = composeSetter(useState(''), updateSetter);
 * ```
 */
export default function composeSetter<T, R>([value, setValue]: State<T>, setterCompute: (setter: StateSetter<T>) => R): [T, R] {
  return [
    value,
    setterCompute(setValue),
  ]
};
