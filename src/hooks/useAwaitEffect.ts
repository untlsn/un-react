import { useEffect } from 'react';

/**
 * Allow to use async effect, but disable clear effect
 * ```js
 * useAwaitEffect(async () => {
 *   await asyncTask();
 * }); // default deps is []
 * ```
 */
export default function useAwaitEffect(effect: () => void, deps: any[] = []) {
  useEffect(() => {
    effect();
  }, deps);
};
