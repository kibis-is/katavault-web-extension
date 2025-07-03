import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { StoreApi, UseBoundStore } from 'zustand';

// constants
import { DASHBOARD_ROUTE, SETUP_ROUTE } from '@/popup/constants';

// types
import { TState } from '@/popup/types';

export default function rootLoader(
  store: UseBoundStore<StoreApi<TState>>
): (args: LoaderFunctionArgs) => Response | null {
  const { encryptedChallenge } = store.getState();

  return ({ request }) => {
    const path = new URL(request.url).pathname.split('/').filter((value) => value.length > 0)[0];

    // if this is not the setup route and there is no encrypted challenge, redirect to the setup route
    if (path !== 'setup' && !encryptedChallenge) {
      return redirect(SETUP_ROUTE);
    }

    // if this is the setup route and there is an encrypted challenge, redirect to the dashboard route
    if (path === 'setup' && encryptedChallenge) {
      return redirect(DASHBOARD_ROUTE);
    }

    return null;
  };
}
