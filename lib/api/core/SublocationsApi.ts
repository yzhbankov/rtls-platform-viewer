export type SublocationResponse = {
  uid: string;
  location_uid: string;
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export type SublocationsResponse = {
  sublocations: SublocationResponse[];
}

export type SublocationsDelResponse = {
  uid: string;
}

export type SublocationSaveParams = {
  name: string;
  location_uid: string;
}

export interface ISublocationsApi {
  findAll(): Promise<SublocationsResponse | null>;
  findByUid(uid: string): Promise<SublocationsResponse | null>;
  save(params: SublocationSaveParams): Promise<SublocationResponse>;
  update(uid: string, params: SublocationSaveParams): Promise<SublocationResponse>;
  delete(uid: string): Promise<SublocationsDelResponse>;
}

export class SublocationsApi implements ISublocationsApi {
  async findAll() {
    throw new Error('NotYetImplemented');
    return null;
  }
  async findByUid(params) {
    throw new Error('NotYetImplemented');
    return null;
  }
  async save(params) {
    throw new Error('NotYetImplemented');
    return null;
  }
  async update(uid, params) {
    throw new Error('NotYetImplemented');
    return null;
  }
  async delete(params) {
    throw new Error('NotYetImplemented');
    return null;
  }
}
