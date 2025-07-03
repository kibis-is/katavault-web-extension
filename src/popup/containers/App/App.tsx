import { KibisisAppProvider } from '@kibisis/react';
import { type FC } from 'react';

// containers
import Root from '@/popup/containers/Root';

// translations
import { en } from '@/common/translations';

// types
import type { IProps } from './types';

// utilities
import useStore from '@/popup/utilities/store/useStore';

const App: FC<IProps> = ({ debug, logger }) => {
  const { colorMode } = useStore();

  return (
    <KibisisAppProvider colorMode={colorMode} debug={debug} logger={logger} translations={en}>
      <Root />
    </KibisisAppProvider>
  );
};

export default App;
