import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type AnchorsHookType = {
     loadAll: UseQueryResult;
}

export function useAnchors(): AnchorsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('anchorsAll', async () => api.anchors.findAll()),
     }
}
