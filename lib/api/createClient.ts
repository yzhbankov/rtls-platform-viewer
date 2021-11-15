import { MockClientApi } from './mock'
import { AxiosClientApi } from './axios';
import { IClientApi } from './core';

export const ClientTypes = {
     Axios: 'axios',
     Mock: 'mock',
}

type ApiClientProps = {
     type: string;
     options: {
          baseUrl: string
     }
}

export function createClient(configs: ApiClientProps): IClientApi {
     const { type = ClientTypes.Mock, options } = configs

     if (ClientTypes.Mock === type) {
          return new MockClientApi()
     }

     return new AxiosClientApi(options)
}
