import { useState } from 'react';
import { useAnchors, useNodeAssignments } from '../../../hooks'


export function useNodeAnchorsData() {
     const anchors = useAnchors();
     const nodeAssignments = useNodeAssignments();

     const combineData = () => {
          if (!anchors.loadAll.data || !nodeAssignments.loadAll.data) return [];

          return nodeAssignments.loadAll.data.node_assignments.map(nodeAssignment => {
               const anchor = anchors.loadAll.data.anchors.find(_anchor => _anchor.uid === nodeAssignment.anchor_uid);
               return { ...nodeAssignment, anchorName: anchor && anchor.name }
          });
     }

     return {
          data: combineData(),
          isError: anchors.loadAll.isError || nodeAssignments.loadAll.isError,
          isLoading: anchors.loadAll.isLoading || nodeAssignments.loadAll.isLoading,
     }
}
