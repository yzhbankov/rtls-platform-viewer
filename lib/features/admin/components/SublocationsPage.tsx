import React, { ReactElement, useContext } from 'react';
import { AppContext } from '../../../context';
import { useFetchData } from '../../../hooks';

export function SublocationsPage(): ReactElement {
     const { api } = useContext(AppContext)
     const { data, isLoading, isError } = useFetchData(() => api.sublocations.findAll());
     return <>
          <div>Sublocations Page Content</div>
          <div>Is Loading: {isLoading + ''}</div>
          <div>Is Error: {isError + ''}</div>
          <div>Data: {JSON.stringify(data)}</div>
     </>
}

SublocationsPage.propTypes = {};
SublocationsPage.defualtProps = {};
