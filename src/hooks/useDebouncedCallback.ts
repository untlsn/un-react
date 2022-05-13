import { useRef } from 'react';

/**
 * Create callback that can run after debounce
 *
 * @example ```tsx
 * const debouncedFn = useDebouncedCallback(callback, 500)
 *
 * debouncedFn();
 * ```
 */
export default function useDebouncedCallback(callback: () => void, ms: number) {
  const debounce = useRef(false);

  return () => {
    if (!debounce.current) {
      debounce.current = true;
      callback();
      setTimeout(() => debounce.current = false, ms)
    }
  }
};
