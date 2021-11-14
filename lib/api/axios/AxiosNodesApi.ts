import { NodesApi, NodeSaveParams } from '../core';

export class AxiosNodesApi extends NodesApi {
  #http = null

  constructor(http) {
    super()
    this.#http = http;
  }
  async findAll() {
    const response = await this.#http.get('/api/v3/nodes')
    return response ? response.data : {status: 1}

  }
  async findByMac(mac: string) {
    const response = await this.#http.get(`/api/v3/nodes/${mac}`)
    return response ? response.data : {status: 1}
  }
  async save(params: NodeSaveParams) {
    const response = await this.#http.post('/api/v3/nodes', params)
    return response ? response.data : {status: 1}
  }
  async delete(mac: string) {
    const response = await this.#http.del(`/api/v3/nodes/${mac}`)
    return response ? response.data : {status: 1}
  }
}
