import { ColorMode } from '@chakra-ui/color-mode';

// types
import type { IActionAPI, TStateCreator } from '@/popup/types';
import type { ISlice } from './types';

// utilities
import setStateByKeyAction from '@/popup/utilities/store/setStateByKeyAction';

const createLayoutSlice: TStateCreator<ISlice> = (setState, getState) => {
  const api: IActionAPI = { getState, setState };

  return {
    // state
    colorMode: 'light',
    // actions
    setColorModeAction: setStateByKeyAction<ColorMode>({
      api,
      key: 'colorMode',
    }),
  };
};

export default createLayoutSlice;
