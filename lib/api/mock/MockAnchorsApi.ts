import { AnchorsApi } from '../core';

export class MockAnchorsApi extends AnchorsApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { anchors: this.#mock }
  }
  async findByUid(uid) {
    return { anchors: [ this.#mock[0] ] }
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