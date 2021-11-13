import axios from 'axios';
import { ClientApi } from '../core';
import { AxiosAuthApi } from './AxiosAuthApi';
import { AxiosLogApi } from './AxiosLogApi';

export class AxiosClientApi extends ClientApi {
  #auth = null

  #log = null

  constructor(options) {
    super()
    const instance = axios.create({
      baseURL: options.baseURL,
      timeout: 1000,
    })

    this.#auth = new AxiosAuthApi(instance)
    this.#log = new AxiosLogApi(instance)
  }

  get auth() {
    return this.#auth
  }

  get log() {
    return this.#log
  }
}