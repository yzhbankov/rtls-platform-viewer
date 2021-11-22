import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type TrackablesHookType = {
     loadAll: UseQueryResult;
}

export function useTrackables(): TrackablesHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('trackablesAll', async () => api.trackables.findAll()),
     }
}
