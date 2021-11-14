import { ClientApi } from '../core';
import { MockAuthApi } from './MockAuthApi';
import { MockLogApi } from './MockLogApi';
import { MockTrackablesApi } from './MockTrackablesApi';
import { MockTagsApi } from './MockTagsApi';
import { MockNodesApi } from './MockNodesApi';
import mock from './mock.json';

export class MockClientApi extends ClientApi {
  #auth = null
  #log = null
  #trackables = null
  #tags = null
  #nodes = null

  constructor() {
    super()
    this.#auth = new MockAuthApi(mock.auth);
    this.#log = new MockLogApi();
    this.#trackables = new MockTrackablesApi(mock.trackables);
    this.#tags = new MockTagsApi(mock.tags);
    this.#nodes = new MockNodesApi(mock.nodes);
  }
  get auth() {
    return this.#auth
  }
  get log() {
    return this.#log
  }
  get trackables() {
    return this.#trackables
  }
  get tags() {
    return this.#tags
  }
  get nodes() {
    return this.#nodes
  }
}
