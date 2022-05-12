import asModal from '../libs/asModal';
import { useState } from 'react';
import composeSetter from '../libs/composeSetter';

/**
 * Extend state with useful functions for form
 * @Proxy
 * @example ```tsx
 * const [value, setValue] = useModalState('');
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
export default function useModalState<T>(init: T) {
  return composeSetter(useState(init), asModal);
};
