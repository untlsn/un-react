import asImmer from '../libs/asImmer';
import { useState } from 'react';
import composeSetter from '../libs/composeSetter';

const useImmer = <T>(init: T) => composeSetter(useState(init), asImmer);

export default useImmer;
