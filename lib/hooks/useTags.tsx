import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type TagsHookType = {
     loadAll: UseQueryResult;
}

export function useTags(): TagsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('tagsAll', async () => api.tags.findAll()),
     }
}
