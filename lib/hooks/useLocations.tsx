import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type LocationsHookType = {
     loadAll: UseQueryResult;
}

export function useLocations(): LocationsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('locationsAll', async () => api.locations.findAll()),
     }
}
