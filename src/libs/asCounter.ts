import { Dispatch, SetStateAction } from 'react';

export default function asCounter(setValue: Dispatch<SetStateAction<number>>) {
  return {
    inc(by = 1) {
      setValue((v) => v + by);
    },
    dec(by = 1) {
      setValue((v) => v - by);
    },
    set(val: number) {
      setValue(val);
    },
  }
};
