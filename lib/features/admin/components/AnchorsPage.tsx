import React, { ReactElement, useContext } from 'react';
import { useQuery } from 'react-query'
import { AppContext } from '../../../context';

export function AnchorsPage(): ReactElement {
     const { api } = useContext(AppContext);
     const anchorsResult = useQuery('anchorsAll', async () => api.anchors.findAll());
     const nodesResult = useQuery('nodesAll', async () => api.nodes.findAll());
     const nodeAssignmentsResult = useQuery('nodeAssignmentsAll', async () => api.nodeAssignments.findAll());

     return <>
          <div>Anchors/Nodes/Assignments Page Content</div>
          <br />
          <div>Anchors</div>
          <div>Is Loading: {anchorsResult.isLoading + ''}</div>
          <div>Is Error: {anchorsResult.isError + ''}</div>
          <div>Data: {JSON.stringify(anchorsResult.data)}</div>

          <br />
          <div>Nodes</div>
          <div>Is Loading: {nodesResult.isLoading + ''}</div>
          <div>Is Error: {nodesResult.isError + ''}</div>
          <div>Data: {JSON.stringify(nodesResult.data)}</div>

          <br />
          <div>Node Assignments</div>
          <div>Is Loading: {nodeAssignmentsResult.isLoading + ''}</div>
          <div>Is Error: {nodeAssignmentsResult.isError + ''}</div>
          <div>Data: {JSON.stringify(nodeAssignmentsResult.data)}</div>
     </>
}

AnchorsPage.propTypes = {};
AnchorsPage.defualtProps = {};
