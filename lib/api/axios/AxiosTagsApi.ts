import { TagsApi, TagSaveParams } from '../core';

export class AxiosTagsApi extends TagsApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/tags')
    return response ? response.data : {status: 1}

  }
  async findByMac(mac: string) {
    const response = await this.#http.get(`/api/v3/tags/${mac}`)
    return response ? response.data : {status: 1}
  }
  async save(params: TagSaveParams) {
    const response = await this.#http.post('/api/v3/tags', params)
    return response ? response.data : {status: 1}
  }
  async delete(mac: string) {
    const response = await this.#http.del(`/api/v3/tags/${mac}`)
    return response ? response.data : {status: 1}
  }
}
