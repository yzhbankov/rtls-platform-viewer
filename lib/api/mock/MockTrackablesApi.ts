import { TrackablesApi } from '../core';

export class MockTrackablesApi extends TrackablesApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { trackables: this.#mock }
  }
  async findByUid(uid) {
    return { trackables: [ this.#mock[0] ] }
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