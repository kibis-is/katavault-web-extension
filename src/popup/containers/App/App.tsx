import { KibisisAppProvider } from '@kibisis/react';
import { type FC } from 'react';

// containers
import Root from '@/popup/containers/Root';

// translations
import { en } from '@/common/translations';

// types
import type { IProps } from './types';

const App: FC<IProps> = ({ debug, logger }) => {
  return (
    <KibisisAppProvider debug={debug} logger={logger} translations={en}>
      <Root />
    </KibisisAppProvider>
  );
};

export default App;
