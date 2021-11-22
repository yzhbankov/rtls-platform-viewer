import React, { ReactElement } from 'react';
import { useAnchors, useNodes, useNodeAssignments } from '../../../hooks';

export function AnchorsPage(): ReactElement {
     const anchors = useAnchors();
     const nodes = useNodes();
     const nodeAssignments = useNodeAssignments();

     return <>
          <div>Anchors/Nodes/Assignments Page Content</div>
          <br />
          <div>Anchors</div>
          <div>Is Loading: {anchors.loadAll.isLoading + ''}</div>
          <div>Is Error: {anchors.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(anchors.loadAll.data)}</div>

          <br />
          <div>Nodes</div>
          <div>Is Loading: {nodes.loadAll.isLoading + ''}</div>
          <div>Is Error: {nodes.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(nodes.loadAll.data)}</div>

          <br />
          <div>Node Assignments</div>
          <div>Is Loading: {nodeAssignments.loadAll.isLoading + ''}</div>
          <div>Is Error: {nodeAssignments.loadAll.isError + ''}</div>
          <div>Data: {JSON.stringify(nodeAssignments.loadAll.data)}</div>
     </>
}

AnchorsPage.propTypes = {};
AnchorsPage.defualtProps = {};
