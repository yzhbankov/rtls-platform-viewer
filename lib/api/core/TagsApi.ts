export type TagResponse = {
  mac: string;
  node_id: number;
  last_heard: string;
  created_at: string;
  cbid: string;
}

export type TagsResponse = {
  tags: TagResponse[];
}

export type TagDelResponse = {
  mac: string;
}

export type TagSaveParams = {
  mac: string;
}

export interface ITagsApi {
  findAll(): Promise<TagsResponse | null>;
  findByMac(mac: string): Promise<TagsResponse | null>;
  save(params: TagSaveParams): Promise<TagResponse>;
  delete(mac: string): Promise<TagDelResponse>;
}

export class TagsApi implements ITagsApi {
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
