import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type SublocationsHookType = {
     loadAll: UseQueryResult;
}

export function useSublocations(): SublocationsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('sublocationsAll', async () => api.sublocations.findAll()),
     }
}
