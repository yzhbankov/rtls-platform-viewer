import React, { ReactElement, useContext } from 'react';
import { AppContext } from '../../../context';
import { useFetchData } from '../../../hooks';

export function LocationsPage(): ReactElement {
     const { api } = useContext(AppContext)
     const { data, isLoading, isError } = useFetchData(() => api.locations.findAll());
     return <>
          <div>Locations Page Content</div>
          <div>Is Loading: {isLoading + ''}</div>
          <div>Is Error: {isError + ''}</div>
          <div>Data: {JSON.stringify(data)}</div>
     </>
}

LocationsPage.propTypes = {};
LocationsPage.defualtProps = {};
