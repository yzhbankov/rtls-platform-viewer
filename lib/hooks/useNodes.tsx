import { string } from 'prop-types';
import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type NodesResponse = {
     nodes: {
          mac: string;
          last_heard: string;
          node_id: number
     }[]
}

type NodesHookType = {
     loadAll: UseQueryResult<NodesResponse>;
}

export function useNodes(): NodesHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('nodesAll', async () => api.nodes.findAll()),
     }
}
