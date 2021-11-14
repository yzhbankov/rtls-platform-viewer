import axios from 'axios';
import { ClientApi } from '../core';
import { AxiosAuthApi } from './AxiosAuthApi';
import { AxiosLogApi } from './AxiosLogApi';
import { AxiosTagsApi } from './AxiosTagsApi';
import { AxiosTrackablesApi } from './AxiosTrackablesApi';
import { AxiosNodesApi } from './AxiosNodesApi';

export class AxiosClientApi extends ClientApi {
  #auth = null
  #log = null
  #trackables = null
  #tags = null
  #nodes = null

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
