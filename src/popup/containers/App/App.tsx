import { KibisisAppProvider } from '@kibisis/react';
import { type FC } from 'react';

// containers
import Router from '@/popup/containers/Router';

// selectors
import { useColorMode } from '@/popup/selectors';

// translations
import { en } from '@/common/translations';

// types
import type { IProps } from './types';

const App: FC<IProps> = ({ debug, logger }) => {
  // selectors
  const colorMode = useColorMode();

  return (
    <KibisisAppProvider
      colorMode={colorMode}
      debug={debug}
      logger={logger}
      translations={{
        en,
      }}
    >
      <Router />
    </KibisisAppProvider>
  );
};

export default App;
