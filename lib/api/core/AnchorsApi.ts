export type AnchorResponse = {
  uid: string;
  name: string;
  bridge: boolean;
  created_at: string;
  updated_at: string;
  node_mac: string;
  position: {
    x: number;
    y: number;
    z: number;
    sublocation_uid: string;
  }
}

export type AnchorsResponse = {
  trackables: AnchorResponse[];
}

export type AnchorsDelResponse = {
  uid: string;
}

export type AnchorsSaveParams = {
  name: string;
  bridge: boolean;
  position: {
    x: number;
    y: number;
    z: number;
    sublocation_uid: string;
  }
}

export interface IAnchorsApi {
  findAll(): Promise<AnchorsResponse | null>;
  findByUid(uid: string): Promise<AnchorsResponse | null>;
  save(params: AnchorsSaveParams): Promise<AnchorResponse>;
  update(uid: string, params: AnchorsSaveParams): Promise<AnchorResponse>;
  delete(uid: string): Promise<AnchorsDelResponse>;
}

export class AnchorsApi implements IAnchorsApi {
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
