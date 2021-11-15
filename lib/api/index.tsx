import { createClient, ClientTypes } from './createClient';
import { IClientApi } from './core';


export * from './core';

export const client: IClientApi = createClient({
     type: ClientTypes.Mock,
     options: { baseUrl: process.env.RPP_API_BASE_URL },
})
