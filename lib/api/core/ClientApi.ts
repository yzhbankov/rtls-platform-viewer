import { IAuthApi } from './AuthApi';
import { ILogApi } from './LogApi';
import { ITrackablesApi } from './TrackablesApi';
import { ITagsApi } from './TagsApi';
import { INoedsApi } from './NodesApi';
import { IAnchorsApi } from './AnchorsApi';

interface IClientApi {
  auth(): IAuthApi;
  log(): ILogApi;
  trackables(): ITrackablesApi;
  tags(): ITagsApi;
  nodes(): INoedsApi;
  anchors(): IAnchorsApi;
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
  get nodes() {
    throw new Error('NotYetImplemented')
    return null;
  }
  get anchors() {
    throw new Error('NotYetImplemented')
    return null;
  }
}
