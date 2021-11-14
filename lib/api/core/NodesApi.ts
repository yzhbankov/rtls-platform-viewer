export type NodeResponse = {
  mac: string;
  node_id: number;
  last_heard: string;
  created_at: string;
  cbid: string;
}

export type NodesResponse = {
  nodes: NodeResponse[];
}

export type NodeDelResponse = {
  mac: string;
}

export type NodeSaveParams = {
  mac: string;
}

export interface INoedsApi {
  findAll(): Promise<NodesResponse | null>;
  findByMac(mac: string): Promise<NodesResponse | null>;
  save(params: NodeSaveParams): Promise<NodeResponse>;
  delete(mac: string): Promise<NodeDelResponse>;
}

export class NodesApi implements INoedsApi {
  async findAll() {
    throw new Error('NotYetImplemented');
    return null;
  }
  async findByMac(params) {
    throw new Error('NotYetImplemented');
    return null;
  }
  async save(params) {
    throw new Error('NotYetImplemented');
    return null;
  }
  async delete(params) {
    throw new Error('NotYetImplemented');
    return null;
  }
}
