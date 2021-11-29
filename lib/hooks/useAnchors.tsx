import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type AnchorsResponse = {
     anchors: {
          uid: string;
          name: string;
          node_mac: string;
     }[]
}
type AnchorsHookType = {
     loadAll: UseQueryResult<AnchorsResponse>;
}

export function useAnchors(): AnchorsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('anchorsAll', async () => api.anchors.findAll()),
     }
}
