import { useEffect, useState } from 'react';

export default function useAwaitMemo<T>(memo: () => Promise<T>, options: { init?: T, deps?: any[] } = {}) {
  const [value, setValue] = useState(options.init);

  useEffect(() => {
    memo().then(setValue);
  }, options.deps || []);

  return value;
};
