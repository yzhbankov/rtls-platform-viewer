import { createClient, ClientTypes } from './createClient';


export const client = createClient({
     type: ClientTypes.Mock,
     options: { baseUrl: process.env.RPP_API_BASE_URL },
})
