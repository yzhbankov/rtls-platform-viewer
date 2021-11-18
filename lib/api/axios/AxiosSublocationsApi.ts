import { SublocationsApi, SublocationSaveParams } from '../core';

export class AxiosSublocationsApi extends SublocationsApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/sublocations')
    return response ? response.data : {status: 1}
  }
  async findByUid(uid: string) {
    const response = await this.#http.get(`/api/v3/sublocations/${uid}`)
    return response ? response.data : {status: 1}
  }
  async save(params: SublocationSaveParams) {
    const response = await this.#http.post('/api/v3/sublocations', params)
    return response ? response.data : {status: 1}
  }
  async update(uid: string, params: SublocationSaveParams) {
    const response = await this.#http.put(`/api/v3/sublocations/${uid}`, params)
    return response ? response.data : {status: 1}
  }
  async delete(uid: string) {
    const response = await this.#http.del(`/api/v3/sublocations/${uid}`)
    return response ? response.data : {status: 1}
  }
}
