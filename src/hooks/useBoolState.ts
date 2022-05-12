import { useState } from 'react';
import composeSetter from '../libs/composeSetter';
import asBoolState from '../libs/asBoolState';

export default function useBoolState(init = false) {
  return composeSetter(useState(init), asBoolState);
}
