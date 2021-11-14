enum HeartbeatEnum {
  disbaled = 'DISABLED',
  enabled = 'ENABLED'
}

export type TrackableResponse = {
  uid: string;
  name: string;
  created_at: string;
  updated_at: string;
  position_reporting: {
    interval: number;
    auto: boolean;
  };
  tag_mount_height: number;
  heartbeat: string;
  tag_mac: string;
  position: {
    timestamp: string;
    x: number;
    y: number;
    z: number;
    sublocation_uid: string;
  }
}

export type TrackablesResponse = {
  trackables: TrackableResponse[];
}

export type TrackablesDelResponse = {
  uid: string;
}

export type TrackableSaveParams = {
  name: string;
  position_reporting: {
    interval: number;
    auto: boolean;
  };
  heartbeat: HeartbeatEnum;
  tag_mount_height: number;
  position: {
    x: number;
    y: number;
    z: number;
    sublocation_uid: string;
  }
}

export interface ITrackablesApi {
  findAll(): Promise<TrackablesResponse | null>;
  findByUid(uid: string): Promise<TrackablesResponse | null>;
  save(params: TrackableSaveParams): Promise<TrackableResponse>;
  update(uid: string, params: TrackableSaveParams): Promise<TrackableResponse>;
  delete(uid: string): Promise<TrackablesDelResponse>;
}

export class TrackablesApi implements ITrackablesApi {
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
