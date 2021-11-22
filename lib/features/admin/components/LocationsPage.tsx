import React, { ReactElement } from 'react';
import { useLocations } from '../../../hooks';

export function LocationsPage(): ReactElement {
     const locations = useLocations();
     return <>
          <div>Locations Page Content</div>
          <div>Is Loading: {locations.loadAll.isLoading + ''}</div>
          <div>Is Error: {locations.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(locations.loadAll.data)}</div>
     </>
}

LocationsPage.propTypes = {};
LocationsPage.defualtProps = {};
