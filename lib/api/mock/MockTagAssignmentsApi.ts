import { TagAssignmentsApi } from '../core';

export class MockTagAssignmentsApi extends TagAssignmentsApi {
  #mock = null

  constructor(mock) {
    super()
    this.#mock = mock
  }

  async findAll() {
    return { tag_assignments: this.#mock }
  }
  async save(params) {
    return this.#mock[0]
  }
  async delete(params) {
    return this.#mock[0]
  }
}