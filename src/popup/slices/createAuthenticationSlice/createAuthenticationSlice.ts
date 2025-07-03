// types
import type { IActionAPI, TStateCreator } from '@/popup/types';
import type { ISlice } from './types';

const createAuthenticationSlice: TStateCreator<ISlice> = (setState, getState) => {
  const api: IActionAPI = { getState, setState };

  return {
    // state
    encryptedChallenge: null,
    // actions
  };
};

export default createAuthenticationSlice;
