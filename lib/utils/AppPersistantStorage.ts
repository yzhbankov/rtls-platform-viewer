import { string } from "prop-types";

const StorageKeys = {
     UserToken: 'RPP_USER_TOKEN',
     LastKnownPath: 'RPP_LAST_KNOWN_PATH'
}

export interface IAppPersistantStorage {
     apiToken: string;
     lastRoutePath: string;
}

class AppPersistantStorage implements IAppPersistantStorage {
     #local = null;
     #session = null;

     constructor(localStorage, sessionStorage) {
          this.#local = localStorage;
          this.#session = sessionStorage;
     }

     set apiToken(token) {
          if (token) {
               this.#local.setItem(StorageKeys.UserToken, token);
          } else {
               this.#local.removeItem(StorageKeys.UserToken);
          }
     }

     get apiToken() {
          return this.#local.getItem(StorageKeys.UserToken);
     }

     set lastRoutePath(path) {
          if (path) {
               this.#local.setItem(StorageKeys.LastKnownPath, path);
          } else {
               this.#local.removeItem(StorageKeys.LastKnownPath);
          }
     }

     get lastRoutePath() {
          return this.#local.getItem(StorageKeys.LastKnownPath);
     }
}

export const appPersistantStorage = new AppPersistantStorage(localStorage, sessionStorage);
