import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type LocationsResponse = {
     locations: {
          name: string;
          uid: string;
     }[]
}
type LocationsHookType = {
     loadAll: UseQueryResult<LocationsResponse>;
}

export function useLocations(): LocationsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('locationsAll', async () => api.locations.findAll()),
     }
}
