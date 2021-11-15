import React, { ReactElement, useContext } from 'react';
import { AppContext } from '../../../context';
import { useFetchData } from '../../../hooks';

export function TrackablesPage(): ReactElement {
     const { api } = useContext(AppContext)
     const trackables = useFetchData(() => api.trackables.findAll());
     const tags = useFetchData(() => api.tags.findAll());
     const tagAssignments = useFetchData(() => api.tagAssignments.findAll());
     return <>
          <div>Trackables/Tags/Assignments Page Content</div>
          <br/>
          <div>Trackables</div>
          <div>Is Loading: {trackables.isLoading + ''}</div>
          <div>Is Error: {trackables.isError + ''}</div>
          <div>Data: {JSON.stringify(trackables.data)}</div>

          <br/>
          <div>Tags</div>
          <div>Is Loading: {tags.isLoading + ''}</div>
          <div>Is Error: {tags.isError + ''}</div>
          <div>Data: {JSON.stringify(tags.data)}</div>

          <br/>
          <div>Tag Assignments</div>
          <div>Is Loading: {tagAssignments.isLoading + ''}</div>
          <div>Is Error: {tagAssignments.isError + ''}</div>
          <div>Data: {JSON.stringify(tagAssignments.data)}</div>
     </>
}

TrackablesPage.propTypes = {};
TrackablesPage.defualtProps = {};
