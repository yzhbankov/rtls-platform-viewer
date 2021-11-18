import React, { ReactElement, useContext } from 'react';
import { useQuery } from 'react-query'
import { AppContext } from '../../../context';

export function LocationsPage(): ReactElement {
     const { api } = useContext(AppContext)
     const result = useQuery('locationsAll', async () => api.locations.findAll());
     return <>
          <div>Locations Page Content</div>
          <div>Is Loading: {result.isLoading + ''}</div>
          <div>Is Error: {result.isError + ''}</div>
          <div>Data: {JSON.stringify(result.data)}</div>
     </>
}

LocationsPage.propTypes = {};
LocationsPage.defualtProps = {};
