import { IAuthApi } from './AuthApi';
import { ILogApi } from './LogApi';
import { ITrackablesApi } from './TrackablesApi';
import { ITagsApi } from './TagsApi';

interface IClientApi {
  auth(): IAuthApi;
  log(): ILogApi;
  trackables(): ITrackablesApi;
  tags(): ITagsApi;
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
  get trackables() {
    throw new Error('NotYetImplemented')
    return null;
  }
  get tags() {
    throw new Error('NotYetImplemented')
    return null;
  }
}
