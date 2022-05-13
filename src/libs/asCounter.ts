import { StateSetter } from '../types';

export interface CounterSetter extends StateSetter<number> {
  inc(by: number): void
  dec(by: number): void
}

/**
 * Add increment, decrement function
 *  @example ```tsx
 *  const [value, _setValue] = useState(0);
 *  const setValue = asCounter(_setValue);
 *
 *  // Work like normal
 *  setValue(5);
 *  // Increment by - 1 is default
 *  setValue.inc(5);
 *  // Decrement by - 1 is default
 *  setValue.dec(5);
 *  ```
 */
export default function asCounter(setValue: StateSetter<number>): CounterSetter {
  const self = (v: any) => setValue(v);
  self.inc = (by = 1) => setValue((v) => v + by);
  self.dec = (by = 1) => setValue((v) => v - by);


  return self;
};
