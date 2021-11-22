import React, { ReactElement } from 'react';
import { useTagAssignments, useTags, useTrackables } from '../../../hooks';

export function TrackablesPage(): ReactElement {
     const trackables = useTrackables();
     const tags = useTags();
     const tagAssignments = useTagAssignments();
     return <div>
          <div>Trackables/Tags/Assignments Page Content</div>
          <div>Trackables</div>
          <div>Is Loading: {trackables.loadAll.isLoading + ''}</div>
          <div>Is Error: {trackables.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(trackables.loadAll.data)}</div>

          <div>Tags</div>
          <div>Is Loading: {tags.loadAll.isLoading + ''}</div>
          <div>Is Error: {tags.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(tags.loadAll.data)}</div>

          <div>Tag Assignments</div>
          <div>Is Loading: {tagAssignments.loadAll.isLoading + ''}</div>
          <div>Is Error: {tagAssignments.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(tagAssignments.loadAll.data)}</div>
     </div>
}

TrackablesPage.propTypes = {};
TrackablesPage.defualtProps = {};
