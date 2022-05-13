import asImmer from '../libs/asImmer';
import { useState } from 'react';
import composeSetter from '../libs/composeSetter';

/**
 * Work like useImmer, but it isn't hook and work with custom hooks
 * @example ```
 * const [value, _setValue] = useImmer({});
 * ```
 */
const useImmer = <T>(init: T) => composeSetter(useState(init), asImmer);

export default useImmer;
