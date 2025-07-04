// store
import store from '@/popup/store';

export default function useToggleColorMode(): () => void {
  return () => {
    const { colorMode, setColorModeAction } = store();

    return setColorModeAction(colorMode === 'light' ? 'dark' : 'light');
  };
}
