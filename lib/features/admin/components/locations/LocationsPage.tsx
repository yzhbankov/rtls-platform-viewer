import React, { ReactElement } from 'react';
import { LocationsPageLayout } from './LocationsPageLayout';
import { LocationsTable } from './LocationsTable';
import { SublocationsTable } from './SublocationsTable';

export function LocationsPage(): ReactElement {
     return (
          < LocationsPageLayout
               leftSideRender={() => <LocationsTable />}
               rightSideRender={() => <SublocationsTable />}
          />
     )
}

LocationsPage.propTypes = {};
LocationsPage.defualtProps = {};
