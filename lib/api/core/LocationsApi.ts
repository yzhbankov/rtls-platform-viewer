export type LocationResponse = {
  uid: string;
  network_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export type LocationsResponse = {
  locations: LocationResponse[];
}

export type LocationsDelResponse = {
  uid: string;
}

export type LocationSaveParams = {
  name: string;
}

export interface ILocationsApi {
  findAll(): Promise<LocationsResponse | null>;
  findByUid(uid: string): Promise<LocationsResponse | null>;
  save(params: LocationSaveParams): Promise<LocationResponse>;
  update(uid: string, params: LocationSaveParams): Promise<LocationResponse>;
  delete(uid: string): Promise<LocationsDelResponse>;
}

export class LocationsApi implements ILocationsApi {
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
