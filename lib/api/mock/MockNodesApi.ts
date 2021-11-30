import { NodesApi } from '../core';

export class MockNodesApi extends NodesApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { nodes: this.#mock }
  }
  async findByMac(mac) {
    return { nodes: [this.#mock[0]] }
  }
  async save(params) {
    return this.#mock[0]
  }
  async delete(params) {
    return { mac: params }
  }
}
