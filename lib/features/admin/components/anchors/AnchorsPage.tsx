import React, { ReactElement } from 'react';
import { AnchorsPageLayout } from './AnchorsPageLayout';
import { AnchorsTable } from './AnchorsTable';
import { NodesTable } from './NodesTable';
import { NodeAssignmentsTable } from './NodeAssignmentsTable';

export function AnchorsPage(): ReactElement {
     return (
          <AnchorsPageLayout
               leftSideRender={() => <AnchorsTable />}
               rightSideRender={() => <NodesTable />}
               bottomCenterRender={() => <NodeAssignmentsTable />}
          />
     )
}

AnchorsPage.propTypes = {};
AnchorsPage.defualtProps = {};
