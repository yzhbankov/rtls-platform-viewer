import { LocationsApi } from '../core';

export class MockLocationsApi extends LocationsApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { locations: this.#mock }
  }
  async findByUid(uid) {
    return { locations: [ this.#mock[0] ] }
  }
  async save(params) {
    return this.#mock[0]
  }
  async update(uid, params) {
    return this.#mock[0]
  }
  async delete(params) {
    return { uid: params }
  }
}