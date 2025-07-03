import type { StateStorage, StorageValue } from 'zustand/middleware/persist';
import browser from 'webextension-polyfill';

// types
import type { TPersistedState } from '@/popup/types';

export default class ExtensionStorageAdapter implements StateStorage {
  // public static variables
  public static readonly displayName = 'ExtensionStorageAdapter';

  /**
   * public methods
   */

  public async getItem(key: string): Promise<string | null> {
    const items = await browser.storage.local.get(key);

    if (!items[key]) {
      return null;
    }

    return JSON.stringify(items[key]);
  }

  public async removeItem(key: string): Promise<void> {
    return await browser.storage.local.remove(key);
  }

  public async setItem(key: string, value: string): Promise<void> {
    const __logPrefix = `${ExtensionStorageAdapter.displayName}#setItem`;
    let parsedValue: StorageValue<TPersistedState>;

    try {
      parsedValue = JSON.parse(value);
    } catch (error) {
      console.error(`${__logPrefix} - failed to parse storage:`, error);

      return;
    }

    await browser.storage.local.set({
      [key]: parsedValue,
    });
  }
}
