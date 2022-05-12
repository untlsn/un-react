import asModal from '../libs/asModal';
import { useState } from 'react';

export default function useModalState<T>(init: T) {
  return asModal(...useState(init))
};
