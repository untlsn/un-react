import { useEffect } from 'react';
import useCounter from './useCounter';

interface UseTimerOptions {
  ms: number,
  init?: number
  by?: number
}

export default function useTimer({ init = 0, ms, by = 1 }: UseTimerOptions) {
  const [value, setValue] = useCounter(init);
  useEffect(() => {
    setInterval(() => {
      setValue.inc(by)
    }, ms);
  }, []);

  return value;
};
