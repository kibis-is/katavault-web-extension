import { create } from 'zustand';
import { createJSONStorage, devtools, persist, type PersistOptions } from 'zustand/middleware';

// constants
import { STORE_NAME } from '@/popup/constants';

// facades
import ExtensionStorageAdapter from '@/popup/facades/ExtensionStorageAdapter';

// slices
import createLayoutSlice from '@/popup/slices/createLayoutSlice';

// types
import type { TPersistedState, TState } from '@/popup/types';

const useStore = create<TState>()(
  devtools(
    persist(
      (...api) => ({
        ...createLayoutSlice(...api),
      }),
      {
        name: STORE_NAME,
        partialize: ({ colorMode }) => ({
          colorMode,
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

export default useStore;
