import { useState } from 'react';
import composeSetter from '../libs/composeSetter';
import asCounter from '../libs/asCounter';

/**
 * Shorthand of asCounter
 *  @example ```tsx
 *  const [value, setValue] = useCounter(0);
 *
 *  // Work like normal
 *  setValue(5);
 *  // Increment by - 1 is default
 *  setValue.inc(5);
 *  // Decrement by - 1 is default
 *  setValue.dec(5);
 *  ```
 */
export default function useCounter(init = 0) {
  return composeSetter(useState(init), asCounter)
};
