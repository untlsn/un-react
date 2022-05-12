import { StateSetter } from '../types';

export interface BoolSetter extends StateSetter<boolean> {
  false(): void
  true(): void
  switch(): void
}

/**
 * Easier bools states
 * @example ```
 *  const [value, _setValue] = useState(false);
 *  const setValue = asBoolState(_setValue)
 *
 * // will switch value
 * setValue.switch()
 * // will switch value to true
 * setValue.true()
 * // will switch value to false
 * setValue.false()
 * // with value
 * setValue(false)
 * ```
 */
export default function asBoolState(setValue: StateSetter<boolean>): BoolSetter {
  const setter = (v: any) => setValue(v);
  setter.true = () => setValue(true);
  setter.false = () => setValue(false);
  setter.switch = () => setValue(v => !v);
  return setter;
};
