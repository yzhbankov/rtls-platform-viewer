import { AnchorsApi, AnchorsSaveParams } from '../core';

export class AxiosAnchorsApi extends AnchorsApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/anchors')
    return response ? response.data : {status: 1}

  }
  async findByUid(uid: string) {
    const response = await this.#http.get(`/api/v3/anchors/${uid}`)
    return response ? response.data : {status: 1}
  }
  async save(params: AnchorsSaveParams) {
    const response = await this.#http.post('/api/v3/anchors', params)
    return response ? response.data : {status: 1}
  }
  async update(uid: string, params: AnchorsSaveParams) {
    const response = await this.#http.put(`/api/v3/anchors/${uid}`, params)
    return response ? response.data : {status: 1}
  }
  async delete(uid: string) {
    const response = await this.#http.del(`/api/v3/anchors/${uid}`)
    return response ? response.data : {status: 1}
  }
}
