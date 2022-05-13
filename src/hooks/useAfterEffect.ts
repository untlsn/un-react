import { useEffect, useRef } from 'react';

/**
 * Create effect that run only after update
 * @usage Like useEffect
 */
export default function useAfterEffect(effect: () => void, deps?: any[]) {
  const afterFirstRender = useRef(false);

  useEffect(() => {
    if (afterFirstRender.current) {
      effect()
    } else {
      afterFirstRender.current = true;
    }
  }, deps);
};
