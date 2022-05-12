import { useState } from 'react';
import composeSetter from '../libs/composeSetter';
import asBoolState from '../libs/asBoolState';

/**
 * Easier bools states
 * @example ```
 *  const [value, setValue] = useBoolState(); // false is default
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
export default function useBoolState(init = false) {
  return composeSetter(useState(init), asBoolState);
}
