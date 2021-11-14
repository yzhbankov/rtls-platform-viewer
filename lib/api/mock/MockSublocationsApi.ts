import { SublocationsApi } from '../core';

export class MockSublocationsApi extends SublocationsApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { sublocations: this.#mock }
  }
  async findByUid(uid) {
    return { sublocations: [ this.#mock[0] ] }
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