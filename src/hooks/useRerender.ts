import { useCallback, useState } from 'react';

export default function useRerender() {
  const [, set] = useState(false);
  return useCallback(() => set(v => !v), []);
};
