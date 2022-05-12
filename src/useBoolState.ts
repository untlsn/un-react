import { useState } from 'react';

export interface Setter {
  (setter: (bool: boolean) => any): void
  (bool: any): void
  false(): void
  true(): void
  switch(): void
}

export default function useBoolState(init = false): [boolean, Setter] {
  const [value, setValue] = useState(init);

  const setter: Setter = (v: any) => setValue(v);
  setter.true = () => setValue(true);
  setter.false = () => setValue(false);
  setter.switch = () => setValue(v => !v);

  return [value, setter]
}
