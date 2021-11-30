import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmptyDataTable, ErrorDataTable, InProgressDataTable } from '../../../../components';
import { useTrackables } from '../../../../hooks';

export function TrackablesTable(): ReactElement {
     const trackables = useTrackables();

     const columns: GridColDef[] = [
          { field: 'id', headerName: 'UID', hide: true },
          { field: 'name', headerName: 'Name', flex: 200 },
          { field: 'tag_mac', headerName: 'MAC', flex: 200 },
     ];

     return <>
          <h1>Trackables</h1>
          <DataGrid
               rows={trackables.loadAll.data ? trackables.loadAll.data.trackables : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.uid}
               components={{
                    LoadingOverlay: () => <InProgressDataTable />,
                    NoRowsOverlay: () => <EmptyDataTable />,
                    ErrorOverlay: () => <ErrorDataTable />,
                  }}
               error={trackables.loadAll.isError || null}
               loading={trackables.loadAll.isLoading}
               pageSize={5}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

TrackablesTable.propTypes = {};
TrackablesTable.defualtProps = {};
