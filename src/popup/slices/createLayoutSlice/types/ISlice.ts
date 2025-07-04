import { ColorMode } from '@chakra-ui/color-mode';

interface ISlice {
  // state
  colorMode: ColorMode;
  // actions
  setColorModeAction: (colorMode: ColorMode) => void;
}

export default ISlice;
