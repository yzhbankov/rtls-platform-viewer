import { AuthApi } from '../core';

export class AxiosAuthApi extends AuthApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }

  async login(params) {
    const response = await this.#http.post('/api/v2/auth/login', { credentials: { ...params } })
    return response ? response.data : {status: 1}
  }
}
