import { createLogger } from '@kibisis/utilities';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

// components
import App from '@/popup/containers/App';

// styles
import '@/popup/styles/index.css';

export async function onDOMContentLoaded(): Promise<void> {
  const debug = import.meta.env.VITE_DEBUG === 'true';
  const logger = createLogger(debug ? 'debug' : 'error');
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    logger.error(`failed to find "root" element to render react app`);

    return;
  }

  createRoot(rootElement).render(
    createElement(App, {
      debug,
      logger,
    })
  );
}

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
