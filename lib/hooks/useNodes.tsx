import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type NodesHookType = {
     loadAll: UseQueryResult;
}

export function useNodes(): NodesHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('nodesAll', async () => api.nodes.findAll()),
     }
}
