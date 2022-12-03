/**
 * Based on redux-persist-expo-securestore
 * (https://github.com/Cretezy/redux-persist-expo-securestore)
 */

import * as SecureStore from 'expo-secure-store';


type Key = string;
type ReplaceCharacter = string;

interface Options extends SecureStore.SecureStoreOptions {
  replaceCharacter?: ReplaceCharacter;
  replacer: (key: Key, replaceCharacter: ReplaceCharacter) => string;
}

export interface ReduxPersistExpoSecureStore {
  getItem(key: Key): Promise<string | null>;

  setItem(key: Key, value: string): Promise<void>;

  removeItem(key: Key): Promise<void>;
}


function defaultReplacer(key: string, replaceCharacter: string) {
  return key.replace(/[^a-z0-9.\-_]/gi, replaceCharacter);
}

export default function createSecureStorage(
  options: Options = { replacer: defaultReplacer },
): ReduxPersistExpoSecureStore {
  const replaceCharacter = options.replaceCharacter || '_';
  const replacer = options.replacer || defaultReplacer; // fallback for vanilla js

  return {
    getItem: (key: Key) => SecureStore.getItemAsync(replacer(key, replaceCharacter), options),
    setItem: (key: Key, value: string) => SecureStore.setItemAsync(
      replacer(key, replaceCharacter),
      value,
      options,
    ),
    removeItem: (key) => SecureStore.deleteItemAsync(replacer(key, replaceCharacter), options),
  };
}
