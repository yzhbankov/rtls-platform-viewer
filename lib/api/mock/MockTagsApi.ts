import { TagsApi } from '../core';

export class MockTagsApi extends TagsApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { tags: this.#mock }
  }
  async findByMac(mac) {
    return { tags: [ this.#mock[0] ] }
  }
  async save(params) {
    return this.#mock[0]
  }
  async delete(params) {
    return { mac: params }
  }
}