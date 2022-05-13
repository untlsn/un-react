import { useState } from 'react';
import composeSetter from '../libs/composeSetter';
import asCounter from '../libs/asCounter';

export default function useCounter(init = 0) {
  return composeSetter(useState(init), asCounter)
};
