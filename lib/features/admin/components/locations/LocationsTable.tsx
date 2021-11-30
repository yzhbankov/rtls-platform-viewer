import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmptyDataTable, ErrorDataTable, InProgressDataTable, TableTitle } from '../../../../components';
import { useLocations } from '../../../../hooks';

export function LocationsTable(): ReactElement {
     const locations = useLocations();

     const columns: GridColDef[] = [
          { field: 'id', headerName: 'UID', hide: true },
          { field: 'name', headerName: 'Name', flex: 200 },
     ];

     return <>
          <TableTitle>Locations</TableTitle>
          <DataGrid
               rows={locations.loadAll.data ? locations.loadAll.data.locations : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.uid}
               components={{
                    LoadingOverlay: () => <InProgressDataTable />,
                    NoRowsOverlay: () => <EmptyDataTable />,
                    ErrorOverlay: () => <ErrorDataTable />,
                  }}
               error={locations.loadAll.isError || null}
               loading={locations.loadAll.isLoading}
               pageSize={5}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

LocationsTable.propTypes = {};
LocationsTable.defualtProps = {};
