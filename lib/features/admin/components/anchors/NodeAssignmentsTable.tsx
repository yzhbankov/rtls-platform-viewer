import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmptyDataTable, ErrorDataTable, InProgressDataTable } from '../../../../components';
import { useNodeAnchorsData } from '../../hooks';

export function NodeAssignmentsTable(): ReactElement {
     const nodeAssignments = useNodeAnchorsData();
     const columns: GridColDef[] = [
          { field: 'anchor_uid', headerName: 'Anchor Uid', hide: true },
          { field: 'mac', headerName: 'MAC', flex: 200 },
          { field: 'anchorName', headerName: 'Anchor', flex: 200 },
     ];

     return <>
          <h1>Node Assignments</h1>
          <DataGrid
               rows={nodeAssignments.data ? nodeAssignments.data : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.anchor_uid}
               pageSize={5}
               components={{
                    LoadingOverlay: () => <InProgressDataTable />,
                    NoRowsOverlay: () => <EmptyDataTable />,
                    ErrorOverlay: () => <ErrorDataTable />,
                  }}
               error={nodeAssignments.isError || null}
               loading={nodeAssignments.isLoading}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

NodeAssignmentsTable.propTypes = {};
NodeAssignmentsTable.defualtProps = {};
