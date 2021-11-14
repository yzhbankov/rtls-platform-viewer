import { ClientApi } from '../core';
import { MockAuthApi } from './MockAuthApi';
import { MockLogApi } from './MockLogApi';
import { MockTrackablesApi } from './MockTrackablesApi';
import { MockTagsApi } from './MockTagsApi';
import { MockNodesApi } from './MockNodesApi';
import { MockAnchorsApi } from './MockAnchorsApi';
import { MockTagAssignmentsApi } from './MockTagAssignmentsApi';
import { MockNodeAssignmentsApi } from './MockNodeAssignmentsApi';
import { MockLocationsApi } from './MockLocationsApi';
import { MockSublocationsApi } from './MockSublocationsApi';
import mock from './mock.json';

export class MockClientApi extends ClientApi {
  #auth = null;
  #log = null;
  #trackables = null;
  #tags = null;
  #nodes = null;
  #anchors = null;
  #tagAssignments = null;
  #nodeAssignments = null;
  #locations = null;
  #sublocations = null;

  constructor() {
    super()
    this.#log = new MockLogApi();
    this.#auth = new MockAuthApi(mock.auth);
    this.#trackables = new MockTrackablesApi(mock.trackables);
    this.#tags = new MockTagsApi(mock.tags);
    this.#nodes = new MockNodesApi(mock.nodes);
    this.#anchors = new MockAnchorsApi(mock.anchors);
    this.#tagAssignments = new MockTagAssignmentsApi(mock.tagAssignments);
    this.#nodeAssignments = new MockNodeAssignmentsApi(mock.nodeAssignments);
    this.#locations = new MockLocationsApi(mock.locations);
    this.#sublocations = new MockSublocationsApi(mock.sublocations);
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
  get anchors() {
    return this.#anchors
  }
  get tagAssignments() {
    return this.#tagAssignments
  }
  get nodeAssignments() {
    return this.#nodeAssignments
  }
  get locations() {
    return this.#locations
  }
  get sublocations() {
    return this.#sublocations
  }
}
