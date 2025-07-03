import { create } from 'zustand';
import { createJSONStorage, devtools, persist, type PersistOptions } from 'zustand/middleware';

// constants
import { STORE_NAME } from '@/popup/constants';

// facades
import ExtensionStorageAdapter from '@/popup/facades/ExtensionStorageAdapter';

// slices
import createAuthenticationSlice from '@/popup/slices/createAuthenticationSlice';
import createLayoutSlice from '@/popup/slices/createLayoutSlice';

// types
import type { TPersistedState, TState } from '@/popup/types';

const store = create<TState>()(
  devtools(
    persist(
      (...api) => ({
        ...createAuthenticationSlice(...api),
        ...createLayoutSlice(...api),
      }),
      {
        name: STORE_NAME,
        partialize: ({ colorMode, encryptedChallenge }) => ({
          colorMode,
          encryptedChallenge,
        }),
        storage: createJSONStorage(() => new ExtensionStorageAdapter()),
        version: 0,
      } as PersistOptions<TState, TPersistedState>
    ),
    {
      name: STORE_NAME,
    }
  )
);

export default store;
