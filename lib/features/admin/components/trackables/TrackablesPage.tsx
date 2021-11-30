import React, { ReactElement } from 'react';
import { TrackablesPageLayout } from './TrackablesPageLayout';
import { TrackablesTable } from './TrackablesTable';
import { TagsTable } from './TagsTable';
import { TagAssignmentsTable } from './TagAssignmentsTable';

export function TrackablesPage(): ReactElement {
     return (
          <TrackablesPageLayout
               leftSideRender={() => <TrackablesTable />}
               rightSideRender={() => <TagsTable />}
               bottomCenterRender={() => <TagAssignmentsTable />}
          />
     )
}

TrackablesPage.propTypes = {};
TrackablesPage.defualtProps = {};
