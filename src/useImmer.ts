import asImmer from './asImmer';
import { useState } from 'react';

const useImmer = <T>(init: T) => asImmer(...useState(init));

export default useImmer;
