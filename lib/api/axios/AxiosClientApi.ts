import axios from 'axios';
import { ClientApi } from '../core';
import { AxiosAuthApi } from './AxiosAuthApi';
import { AxiosLogApi } from './AxiosLogApi';
import { AxiosTagsApi } from './AxiosTagsApi';
import { AxiosTrackablesApi } from './AxiosTrackablesApi';
import { AxiosNodesApi } from './AxiosNodesApi';
import { AxiosAnchorsApi } from './AxiosAnchorsApi';
import { AxiosTagAssignmentsApi } from './AxiosTagAssignmentsApi';
import { AxiosNodeAssignmentsApi } from './AxiosNodeAssignmentsApi';
import { AxiosLocationsApi } from './AxiosLocationsApi';
import { AxiosSublocationsApi } from './AxiosSublocationsApi';

export class AxiosClientApi extends ClientApi {
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

  constructor(options) {
    super()
    const instance = axios.create({
      baseURL: options.baseURL,
      timeout: 1000,
    })

    this.#auth = new AxiosAuthApi(instance)
    this.#log = new AxiosLogApi(instance)
    this.#trackables = new AxiosTrackablesApi(instance)
    this.#tags = new AxiosTagsApi(instance)
    this.#nodes = new AxiosNodesApi(instance)
    this.#anchors = new AxiosAnchorsApi(instance)
    this.#tagAssignments = new AxiosTagAssignmentsApi(instance)
    this.#nodeAssignments = new AxiosNodeAssignmentsApi(instance)
    this.#locations = new AxiosLocationsApi(instance)
    this.#sublocations = new AxiosSublocationsApi(instance)
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
