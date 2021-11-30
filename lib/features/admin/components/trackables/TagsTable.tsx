import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmptyDataTable, ErrorDataTable, InProgressDataTable, TableTitle } from '../../../../components';
import { useTags } from '../../../../hooks';

export function TagsTable(): ReactElement {
     const tags = useTags();

     const columns: GridColDef[] = [
          { field: 'id', headerName: 'Node Id', hide: true },
          { field: 'mac', headerName: 'MAC', flex: 200 },
          { field: 'last_heard', headerName: 'Lat Heard', flex: 200 },
     ];

     return <>
          <TableTitle>Tags</TableTitle>
          <DataGrid
               rows={tags.loadAll.data ? tags.loadAll.data.tags : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.node_id}
               components={{
                    LoadingOverlay: () => <InProgressDataTable />,
                    NoRowsOverlay: () => <EmptyDataTable />,
                    ErrorOverlay: () => <ErrorDataTable />,
                  }}
               error={tags.loadAll.isError || null}
               loading={tags.loadAll.isLoading}
               pageSize={5}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

TagsTable.propTypes = {};
TagsTable.defualtProps = {};
