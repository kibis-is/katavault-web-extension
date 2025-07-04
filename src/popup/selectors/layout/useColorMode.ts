import { ColorMode } from '@chakra-ui/color-mode';

// store
import store from '@/popup/store';

export default function useColorMode(): ColorMode {
  const { colorMode } = store();

  return colorMode;
}
