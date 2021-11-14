export type TagAssignmentResponse = {
  mac: string;
  last_heard: string;
  node_id: number;
  trackable_uid: string;
  created_at: string;
}

export type TagAssignmentsResponse = {
  tag_assignments: TagAssignmentResponse[];
}

export type TagAssignmentPutParams = {
  mac: string;
  trackable_uid: string;
}

export type TagAssignmentSaveParams = {
  mac: string;
  trackable_uid: string;
}

export interface ITagAssignmentsApi {
  findAll(): Promise<TagAssignmentsResponse | null>;
  save(params: TagAssignmentSaveParams): Promise<TagAssignmentResponse>;
  delete(mac: string): Promise<TagAssignmentResponse>;
}

export class TagAssignmentsApi implements ITagAssignmentsApi {
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
