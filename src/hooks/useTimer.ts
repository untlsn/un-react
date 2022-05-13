import { useEffect } from 'react';
import useCounter from './useCounter';

interface UseTimerOptions {
  ms: number,
  init?: number
  by?: number
}

/**
 * Create state with timer
 *
 * @example ```tsx
 * const count = useTimer({
 *   ms: 500,
 *   init: 0,
 *   by: 500,
 * })
 * ```
 */
export default function useTimer({ init = 0, ms, by = 1 }: UseTimerOptions) {
  const [value, setValue] = useCounter(init);
  useEffect(() => {
    setInterval(() => {
      setValue.inc(by)
    }, ms);
  }, []);

  return value;
};
