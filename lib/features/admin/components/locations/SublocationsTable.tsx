import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmptyDataTable, ErrorDataTable, InProgressDataTable, TableTitle } from '../../../../components';
import { useLocationSublocationData } from '../../hooks';

export function SublocationsTable(): ReactElement {
     const sublocations = useLocationSublocationData();

     const columns: GridColDef[] = [
          { field: 'id', headerName: 'UID', hide: true },
          { field: 'name', headerName: 'Name', flex: 200 },
          { field: 'locationName', headerName: 'Location', flex: 200 },
     ];

     return <>
          <TableTitle>Sublocations</TableTitle>
          <DataGrid
               rows={sublocations.data}
               autoHeight
               columns={columns}
               getRowId={(row) => row.uid}
               components={{
                    LoadingOverlay: () => <InProgressDataTable />,
                    NoRowsOverlay: () => <EmptyDataTable />,
                    ErrorOverlay: () => <ErrorDataTable />,
                  }}
               error={sublocations.isError || null}
               loading={sublocations.isLoading}
               pageSize={5}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

SublocationsTable.propTypes = {};
SublocationsTable.defualtProps = {};
