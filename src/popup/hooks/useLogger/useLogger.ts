import { useContext } from 'react';

// contexts
import { LoggerContext } from '@/popup/contexts';

import type { Logger } from '@/common/utilities/createLogger';

export default function useLogger(): Logger | null {
  return useContext(LoggerContext);
}
