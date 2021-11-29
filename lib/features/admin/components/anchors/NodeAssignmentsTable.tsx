import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useNodeAssignments } from '../../../../hooks';

export function NodeAssignmentsTable(): ReactElement {
     const nodeAssignments = useNodeAssignments();

     const columns: GridColDef[] = [
          { field: 'anchor_uid', headerName: 'Anchor Uid', hide: true },
          { field: 'mac', headerName: 'MAC', flex: 200 },
     ];

     return <>
          <h1>Node Assignments</h1>
          <DataGrid
               rows={nodeAssignments.loadAll.data ? nodeAssignments.loadAll.data.node_assignments : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.anchor_uid}
               pageSize={5}
               components={{
                    LoadingOverlay: () => <CircularProgress />,
                    NoRowsOverlay: () => <div>Empty Table</div>,
                    ErrorOverlay: () => <div>Error During Data Fetching</div>,
                  }}
               error={nodeAssignments.loadAll.isError || null}
               loading={nodeAssignments.loadAll.isLoading}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

NodeAssignmentsTable.propTypes = {};
NodeAssignmentsTable.defualtProps = {};