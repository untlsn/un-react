import { useEffect } from 'react';

export default function useAwaitEffect(effect: () => void, deps: any[] = []) {
  useEffect(() => {
    effect();
  }, deps);
};
