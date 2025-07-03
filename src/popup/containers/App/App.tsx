import { KibisisAppProvider } from '@kibisis/react';
import { type FC } from 'react';

// containers
import Router from '@/popup/containers/Router';

// store
import store from '@/popup/store';

// translations
import { en } from '@/common/translations';

// types
import type { IProps } from './types';

const App: FC<IProps> = ({ debug, logger }) => {
  const { colorMode } = store.getState();

  return (
    <KibisisAppProvider colorMode={colorMode} debug={debug} logger={logger} translations={en}>
      <Router />
    </KibisisAppProvider>
  );
};

export default App;
