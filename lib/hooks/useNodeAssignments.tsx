import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type NodeAssignmentsHookType = {
     loadAll: UseQueryResult;
}

export function useNodeAssignments(): NodeAssignmentsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('nodeAssignmentsAll', async () => api.nodeAssignments.findAll()),
     }
}
