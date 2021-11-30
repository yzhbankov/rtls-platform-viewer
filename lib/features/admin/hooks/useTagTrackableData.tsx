import { useTrackables, useTagAssignments } from '../../../hooks'


export function useTagTrackableData() {
     const trackables = useTrackables();
     const tagAssignments = useTagAssignments();

     const combineData = () => {
          if (!tagAssignments.loadAll.data || !trackables.loadAll.data) return [];

          return tagAssignments.loadAll.data.tag_assignments.map(tagAssignment => {
               const trackable = trackables.loadAll.data.trackables.find(tko => tko.uid === tagAssignment.trackable_uid);
               return { ...tagAssignment, trackableName: trackable && trackable.name }
          });
     }

     return {
          data: combineData(),
          isError: trackables.loadAll.isError || tagAssignments.loadAll.isError,
          isLoading: trackables.loadAll.isLoading || tagAssignments.loadAll.isLoading,
     }
}
