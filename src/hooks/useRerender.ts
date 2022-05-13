import { useCallback, useState } from 'react';

/**
 * Rerender function
 * @example ```tsx
 * const rerender = useRerender();
 *
 * rerender();
 * ```
 */
export default function useRerender() {
  const [, set] = useState(false);
  return useCallback(() => set(v => !v), []);
};
