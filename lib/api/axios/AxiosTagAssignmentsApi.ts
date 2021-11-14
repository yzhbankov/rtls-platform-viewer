import { TagAssignmentsApi, TagAssignmentSaveParams, TagAssignmentPutParams } from '../core';

export class AxiosTagAssignmentsApi extends TagAssignmentsApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/tag_assignmets')
    return response ? response.data : {status: 1}

  }
  async save(params: TagAssignmentSaveParams) {
    const response = await this.#http.post('/api/v3/tag_assignmets', params)
    return response ? response.data : {status: 1}
  }
  async delete(params: TagAssignmentPutParams) {
    const response = await this.#http.put('/api/v3/tag_assignments', params)
    return response ? response.data : {status: 1}
  }
}
