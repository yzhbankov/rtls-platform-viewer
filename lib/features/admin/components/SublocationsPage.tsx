import React, { ReactElement } from 'react';
import { useSublocations } from '../../../hooks';

export function SublocationsPage(): ReactElement {
     const sublocations = useSublocations();
     return <>
          <div>Sublocations Page Content</div>
          <div>Is Loading: {sublocations.loadAll.isLoading + ''}</div>
          <div>Is Error: {sublocations.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(sublocations.loadAll.data)}</div>
     </>
}

SublocationsPage.propTypes = {};
SublocationsPage.defualtProps = {};
