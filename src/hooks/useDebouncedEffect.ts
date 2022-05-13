import { useEffect } from 'react';
import useDebouncedCallback from './useDebouncedCallback';

interface UseDebouncedEffectOptions {
  deps?: any[],
  debounce: number
}

/**
 * Create effect that can run after debounce
 *
 * @example ```tsx
 * useDebouncedEffect(effect, {
 *   deps,
 *   debounce: 500,
 * })
 * ```
 */
export default function useDebouncedEffect(effect: () => void, options: UseDebouncedEffectOptions) {
  const callback = useDebouncedCallback(effect, options.debounce);

  useEffect(callback, options.deps || [])
};
