import asModal from '../libs/asModal';
import { useState } from 'react';
import composeSetter from '../libs/composeSetter';

export default function useModalState<T>(init: T) {
  return composeSetter(useState(init), asModal);
};
