import { IAuthApi } from './AuthApi';
import { ILogApi } from './LogApi';
import { ITrackablesApi } from './TrackablesApi';
import { ITagsApi } from './TagsApi';
import { INoedsApi } from './NodesApi';
import { IAnchorsApi } from './AnchorsApi';
import { ITagAssignmentsApi } from './TagAssignmentsApi';
import { INodeAssignmentsApi } from './NodeAssignmentsApi';
import { ILocationsApi } from './LocationsApi';
import { ISublocationsApi } from './SublocationsApi';

interface IClientApi {
  auth(): IAuthApi;
  log(): ILogApi;
  trackables(): ITrackablesApi;
  tags(): ITagsApi;
  nodes(): INoedsApi;
  anchors(): IAnchorsApi;
  tagAssignments(): ITagAssignmentsApi;
  nodeAssignments(): INodeAssignmentsApi;
  locations(): ILocationsApi;
  sublocations(): ISublocationsApi;
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
  get tagAssignments() {
    throw new Error('NotYetImplemented')
    return null;
  }
  get nodeAssignments() {
    throw new Error('NotYetImplemented')
    return null;
  }
  get locations() {
    throw new Error('NotYetImplemented')
    return null;
  }
  get sublocations() {
    throw new Error('NotYetImplemented')
    return null;
  }
}
