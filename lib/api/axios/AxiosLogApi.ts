import { LogApi } from '../core';

export class AxiosLogApi extends LogApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }

  async save(params) {
    const response = await this.#http.post('/api/v2/log', { credentials: { ...params } })
    return response ? response.data : {status: 1}
  }
}
