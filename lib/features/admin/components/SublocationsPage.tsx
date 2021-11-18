import React, { ReactElement, useContext } from 'react';
import { useQuery } from 'react-query';
import { AppContext } from '../../../context';

export function SublocationsPage(): ReactElement {
     const { api } = useContext(AppContext);
     const { data, isError, isLoading } = useQuery('sublocationsAll', async () => api.sublocations.findAll());
     return <>
          <div>Sublocations Page Content</div>
          <div>Is Loading: {isLoading + ''}</div>
          <div>Is Error: {isError + ''}</div>
          <div>Data: {JSON.stringify(data)}</div>
     </>
}

SublocationsPage.propTypes = {};
SublocationsPage.defualtProps = {};
