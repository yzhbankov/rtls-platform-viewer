import { TrackablesApi, TrackableSaveParams } from '../core';

export class AxiosTrackablesApi extends TrackablesApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/trackables')
    return response ? response.data : {status: 1}

  }
  async findByUid(uid: string) {
    const response = await this.#http.get(`/api/v3/trackables/${uid}`)
    return response ? response.data : {status: 1}
  }
  async save(params: TrackableSaveParams) {
    const response = await this.#http.post('/api/v3/trackables', params)
    return response ? response.data : {status: 1}
  }
  async update(uid: string, params: TrackableSaveParams) {
    const response = await this.#http.put(`/api/v3/trackables/${uid}`, params)
    return response ? response.data : {status: 1}
  }
  async delete(uid: string) {
    const response = await this.#http.del(`/api/v3/trackables/${uid}`)
    return response ? response.data : {status: 1}
  }
}
