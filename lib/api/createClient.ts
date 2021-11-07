import { MockClientApi } from './mock'
import { AxiosClientApi } from './axios';

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

export function createClient(configs: ApiClientProps) {
     const { type = ClientTypes.Mock, options } = configs

     if (ClientTypes.Mock === type) {
          return new MockClientApi()
     }

     return new AxiosClientApi(options)
}
