import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useAnchors } from '../../../../hooks';

export function AnchorsTable(): ReactElement {
     const anchors = useAnchors();

     const columns: GridColDef[] = [
          { field: 'id', headerName: 'UID', hide: true },
          { field: 'name', headerName: 'Name', flex: 200 },
          { field: 'node_mac', headerName: 'MAC', flex: 200 },
     ];

     return <>
          <h1>Anchors</h1>
          <DataGrid
               rows={anchors.loadAll.data ? anchors.loadAll.data.anchors : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.uid}
               components={{
                    LoadingOverlay: () => <CircularProgress />,
                    NoRowsOverlay: () => <div>Empty Table</div>,
                    ErrorOverlay: () => <div>Error During Data Fetching</div>,
                  }}
               error={anchors.loadAll.isError || null}
               loading={anchors.loadAll.isLoading}
               pageSize={5}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

AnchorsTable.propTypes = {};
AnchorsTable.defualtProps = {};