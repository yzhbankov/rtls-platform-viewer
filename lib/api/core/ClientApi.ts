import { IAuthApi } from './AuthApi';
import { ILogApi } from './LogApi';

interface IClientApi {
  auth(): IAuthApi;
  log(): ILogApi;
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
}
