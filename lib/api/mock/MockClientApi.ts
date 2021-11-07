import { ClientApi } from '../core';
import { MockAuthApi } from './MockAuthApi';
import { MockLogApi } from './MockLogApi';
import mock from './mock.json';

export class MockClientApi extends ClientApi {
  #auth = null
  #log = null

  constructor() {
    super()
    this.#auth = new MockAuthApi(mock.auth)
    this.#log = new MockLogApi()
  }

  get auth() {
    return this.#auth
  }

  get log() {
    return this.#log
  }
}
