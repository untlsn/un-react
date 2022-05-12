import { StateSetter } from '../types';

export interface BoolSetter extends StateSetter<boolean> {
  false(): void
  true(): void
  switch(): void
}

export default function asBoolState(setValue: StateSetter<boolean>): BoolSetter {
  const setter = (v: any) => setValue(v);
  setter.true = () => setValue(true);
  setter.false = () => setValue(false);
  setter.switch = () => setValue(v => !v);
  return setter;
};
