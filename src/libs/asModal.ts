import { StateSetter } from '../types';

export interface Setter<T> extends StateSetter<T>, Record<string, any> {
  change(ev: any): void
  check(ev: any): void
  const(val: T): () => void
  get(index: number): (...args: any) => void
}

/**
 * Extend state with useful functions for forms
 * @Proxy
 * @example ```tsx
 * const [value, _setValue] = useState('');
 * const setValue = asModal(_setValue)
 *
 * // (ev) => setValue(ev.currentTarget.value)
 * <imput onChange={setValue.value} />
 * // (ev) => setValue(ev.currentTarget.checked)
 * <input type="checkbox" onChange={setValue.check} />
 * // () => setValue(5)
 * <button onChange={setValue.const(5)}>Click</button>
 * // (ev) => setValue(ev.custom)
 * <custom onChange={setValue.custom} />
 * // (...args) => setValue(args[0])
 * <custom onChange={setValue.get(0)} />
 * ```
 */
export default function asModal<T>(setValue: StateSetter<T>) {
  return new Proxy(setValue, {
    get(__: any, p: string): any {
      switch (p) {
        case 'value': {
          return (ev: any) => setValue(ev.currentTarget.value);
        }
        case 'check': {
          return (ev: any) => setValue(ev.currentTarget.checked);
        }
        case 'const': {
          return (val: any) => () => setValue(val);
        }
        case 'get': {
          return (index: number) => (...args: any) => setValue(args[index]);
        }
        default: {
          return (ev: any) => setValue(ev[p])
        }
      }
    }
  }) as Setter<T>;
};
