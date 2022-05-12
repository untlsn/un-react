import { StateSetter } from '../types';

export interface Setter<T> extends StateSetter<T>, Record<string, any> {
  change(ev: any): void
  check(ev: any): void
  const(val: T): () => void
  get(index: number): (...args: any) => void
}

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
