export type NodeAssignmentResponse = {
  mac: string;
  last_heard: string;
  node_id: number;
  trackable_uid: string;
  created_at: string;
}

export type NodeAssignmentsResponse = {
  node_assignments: NodeAssignmentResponse[];
}

export type NodeAssignmentPutParams = {
  mac: string;
  anchor_uid: string;
}

export type NodeAssignmentSaveParams = {
  mac: string;
  anchor_uid: string;
}

export interface INodeAssignmentsApi {
  findAll(): Promise<NodeAssignmentsResponse | null>;
  save(params: NodeAssignmentSaveParams): Promise<NodeAssignmentResponse>;
  delete(mac: string): Promise<NodeAssignmentResponse>;
}

export class NodeAssignmentsApi implements INodeAssignmentsApi {
  async findAll() {
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
