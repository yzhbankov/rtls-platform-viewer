import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query'
import { AppContext } from '../context'

type TagsResponse = {
     tags: {
          mac: string;
          last_heard: string;
     }[]
}
type TagsHookType = {
     loadAll: UseQueryResult<TagsResponse>;
}

export function useTags(): TagsHookType {
     const { api } = useContext(AppContext);
     return {
          loadAll: useQuery('tagsAll', async () => api.tags.findAll()),
     }
}
