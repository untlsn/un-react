import { StateSetter } from '../types';

export interface Setter {
  (setter: (bool: boolean) => any): void
  (bool: any): void
  false(): void
  true(): void
  switch(): void
}

export default function asBoolState(setValue: StateSetter<boolean>) {
  const setter: Setter = (v: any) => setValue(v);
  setter.true = () => setValue(true);
  setter.false = () => setValue(false);
  setter.switch = () => setValue(v => !v);
  return setter;
};
