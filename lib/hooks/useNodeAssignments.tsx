import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type NodeAssignmentsResponse = {
     node_assignments: {
          mac: string;
          anchor_uid: string;
     }[]
}
type NodeAssignmentsHookType = {
     loadAll: UseQueryResult<NodeAssignmentsResponse>;
}

export function useNodeAssignments(): NodeAssignmentsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('nodeAssignmentsAll', async () => api.nodeAssignments.findAll()),
     }
}
