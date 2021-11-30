import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type SublocationsResponse = {
     sublocations: {
          uid: string;
          name: string;
          location_uid: string;
     }[]
}
type SublocationsHookType = {
     loadAll: UseQueryResult<SublocationsResponse>;
}

export function useSublocations(): SublocationsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('sublocationsAll', async () => api.sublocations.findAll()),
     }
}
