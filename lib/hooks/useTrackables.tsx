import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'


type TrackablesResponse = {
     trackables: {
          name: string;
          uid: string;
          tag_mac: string;
     }[]
}
type TrackablesHookType = {
     loadAll: UseQueryResult<TrackablesResponse>;
}

export function useTrackables(): TrackablesHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('trackablesAll', async () => api.trackables.findAll()),
     }
}
