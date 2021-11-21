import React, { ReactElement, useContext } from 'react';
import { useQuery } from 'react-query';
import { AppContext } from '../../../context';

export function TrackablesPage(): ReactElement {
     const { api } = useContext(AppContext)
     const trackablesResult = useQuery('trackablesAll', async () => api.trackables.findAll());
     const tagsResult = useQuery('tagsAll', async () => api.tags.findAll());
     const tagAssignmentssResult = useQuery('tagAssignmentsAll', async () => api.tagAssignments.findAll());
     return <div>
          <div>Trackables/Tags/Assignments Page Content</div>
          <div>Trackables</div>
          <div>Is Loading: {trackablesResult.isLoading + ''}</div>
          <div>Is Error: {trackablesResult.isError + ''}</div>
          <div>Data: {JSON.stringify(trackablesResult.data)}</div>

          <div>Tags</div>
          <div>Is Loading: {tagsResult.isLoading + ''}</div>
          <div>Is Error: {tagsResult.isError + ''}</div>
          <div>Data: {JSON.stringify(tagsResult.data)}</div>

          <div>Tag Assignments</div>
          <div>Is Loading: {tagAssignmentssResult.isLoading + ''}</div>
          <div>Is Error: {tagAssignmentssResult.isError + ''}</div>
          <div>Data: {JSON.stringify(tagAssignmentssResult.data)}</div>
     </div>
}

TrackablesPage.propTypes = {};
TrackablesPage.defualtProps = {};
