import { NodeAssignmentsApi } from '../core';

export class MockNodeAssignmentsApi extends NodeAssignmentsApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { node_assignments: this.#mock }
  }
  async save(params) {
    return this.#mock[0]
  }
  async delete(params) {
    return this.#mock[0]
  }
}