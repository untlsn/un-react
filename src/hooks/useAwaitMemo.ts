import { useEffect, useState } from 'react';

/**
 * useAwaitEffect and useState shorthand
 * ```js
 * // without
 * const [value, setValue] = useState({});
 * useAwaitEffect(async () => {
 *   setValue(await fetchFromApi());
 * });
 *
 * // with
 * const value = useAwaitMemo(
 *   fetchFromApi,
 *   {
 *     init: {}, // value used before effect end
 *   }
 * );
 * ```
 */
export default function useAwaitMemo<T>(memo: () => Promise<T>, options: { init?: T, deps?: any[] } = {}) {
  const [value, setValue] = useState(options.init);

  useEffect(() => {
    memo().then(setValue);
  }, options.deps || []);

  return value;
};
