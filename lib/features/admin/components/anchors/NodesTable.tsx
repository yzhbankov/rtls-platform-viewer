import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmptyDataTable, ErrorDataTable, InProgressDataTable } from '../../../../components';
import { useNodes } from '../../../../hooks';

export function NodesTable(): ReactElement {
     const nodes = useNodes();

     const columns: GridColDef[] = [
          { field: 'id', headerName: 'Node Id', hide: true },
          { field: 'mac', headerName: 'MAC', flex: 200 },
          { field: 'last_heard', headerName: 'Lat Heard', flex: 200 },
     ];

     return <>
          <h1>Nodes</h1>
          <DataGrid
               rows={nodes.loadAll.data ? nodes.loadAll.data.nodes : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.node_id}
               components={{
                    LoadingOverlay: () => <InProgressDataTable />,
                    NoRowsOverlay: () => <EmptyDataTable />,
                    ErrorOverlay: () => <ErrorDataTable />,
                  }}
               error={nodes.loadAll.isError || null}
               loading={nodes.loadAll.isLoading}
               pageSize={5}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

NodesTable.propTypes = {};
NodesTable.defualtProps = {};
