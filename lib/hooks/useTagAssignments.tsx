import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'


type TagAssignmentsHookType = {
     loadAll: UseQueryResult;
}

export function useTagAssignments(): TagAssignmentsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('tagAssignmentsAll', async () => api.tagAssignments.findAll()),
     }
}
