import { useEffect, useRef } from 'react';

interface UseDebouncedEffectOptions {
  deps?: any[],
  debounce: number
}

export default function useDebouncedEffect(effect: () => void, options: UseDebouncedEffectOptions) {
  const debounce = useRef(false);

  useEffect(() => {
    if (!debounce.current) {
      debounce.current = true;
      effect();
      setTimeout(() => debounce.current = false, options.debounce)
    }
  }, options.deps || [])
};
