import { IAuthApi } from './AuthApi';
import { ILogApi } from './LogApi';
import { ITrackablesApi } from './TrackablesApi';

interface IClientApi {
  auth(): IAuthApi;
  log(): ILogApi;
  trackable(): ITrackablesApi;
}

export class ClientApi implements IClientApi {
  get auth() {
    throw new Error('NotYetImplemented')
    return null;
  }
  get log() {
    throw new Error('NotYetImplemented')
    return null;
  }
  get trackable() {
    throw new Error('NotYetImplemented')
    return null;
  }
}
