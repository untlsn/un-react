import { useEffect, useRef } from 'react';

export default function useAfterEffect(effect: () => void, deps: any[]) {
  const afterFirstRender = useRef(false);

  useEffect(() => {
    if (afterFirstRender.current) {
      effect()
    } else {
      afterFirstRender.current = true;
    }
  }, deps);
};
