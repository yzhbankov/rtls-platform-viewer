import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type TagAssignmentRespons = {
     tag_assignments: {
          mac: string;
          trackable_uid: string;
     }[]
}
type TagAssignmentsHookType = {
     loadAll: UseQueryResult<TagAssignmentRespons>;
}

export function useTagAssignments(): TagAssignmentsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('tagAssignmentsAll', async () => api.tagAssignments.findAll()),
     }
}
