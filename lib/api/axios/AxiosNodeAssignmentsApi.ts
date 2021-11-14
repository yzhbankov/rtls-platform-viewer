import {  NodeAssignmentSaveParams, NodeAssignmentPutParams, NodeAssignmentsApi } from '../core';

export class AxiosNodeAssignmentsApi extends NodeAssignmentsApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/node_assignmets')
    return response ? response.data : {status: 1}

  }
  async save(params: NodeAssignmentSaveParams) {
    const response = await this.#http.post('/api/v3/node_assignmets', params)
    return response ? response.data : {status: 1}
  }
  async delete(params: NodeAssignmentPutParams) {
    const response = await this.#http.put('/api/v3/node_assignments', params)
    return response ? response.data : {status: 1}
  }
}
