import { LocationsApi, LocationSaveParams } from '../core';

export class AxiosLocationsApi extends LocationsApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/locations')
    return response ? response.data : {status: 1}

  }
  async findByUid(uid: string) {
    const response = await this.#http.get(`/api/v3/locations/${uid}`)
    return response ? response.data : {status: 1}
  }
  async save(params: LocationSaveParams) {
    const response = await this.#http.post('/api/v3/locations', params)
    return response ? response.data : {status: 1}
  }
  async update(uid: string, params: LocationSaveParams) {
    const response = await this.#http.put(`/api/v3/locations/${uid}`, params)
    return response ? response.data : {status: 1}
  }
  async delete(uid: string) {
    const response = await this.#http.del(`/api/v3/locations/${uid}`)
    return response ? response.data : {status: 1}
  }
}
