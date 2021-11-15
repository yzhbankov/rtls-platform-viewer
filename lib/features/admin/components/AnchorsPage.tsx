import React, { ReactElement, useContext } from 'react';
import { AppContext } from '../../../context';
import { useFetchData } from '../../../hooks';


export function AnchorsPage(): ReactElement {
     const { api } = useContext(AppContext)
     const anchors = useFetchData(() => api.anchors.findAll());
     const nodes = useFetchData(() => api.nodes.findAll());
     const nodeAssignments = useFetchData(() => api.nodeAssignments.findAll());
     return <>
          <div>Anchors/Nodes/Assignments Page Content</div>
          <br />
          <div>Anchors</div>
          <div>Is Loading: {anchors.isLoading + ''}</div>
          <div>Is Error: {anchors.isError + ''}</div>
          <div>Data: {JSON.stringify(anchors.data)}</div>

          <br />
          <div>Nodes</div>
          <div>Is Loading: {nodes.isLoading + ''}</div>
          <div>Is Error: {nodes.isError + ''}</div>
          <div>Data: {JSON.stringify(nodes.data)}</div>

          <br />
          <div>Node Assignments</div>
          <div>Is Loading: {nodeAssignments.isLoading + ''}</div>
          <div>Is Error: {nodeAssignments.isError + ''}</div>
          <div>Data: {JSON.stringify(nodeAssignments.data)}</div>
     </>
}

AnchorsPage.propTypes = {};
AnchorsPage.defualtProps = {};
