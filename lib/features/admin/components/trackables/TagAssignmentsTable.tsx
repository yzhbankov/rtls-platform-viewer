import React, { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmptyDataTable, ErrorDataTable, InProgressDataTable } from '../../../../components';
import { useTagTrackableData } from '../../hooks';

export function TagAssignmentsTable(): ReactElement {
     const tagAssignments = useTagTrackableData();
     const columns: GridColDef[] = [
          { field: 'trackable_uid', headerName: 'Trackable Uid', hide: true },
          { field: 'mac', headerName: 'MAC', flex: 200 },
          { field: 'trackableName', headerName: 'Trackable', flex: 200 },
     ];

     return <>
          <h1>Tag Assignments</h1>
          <DataGrid
               rows={tagAssignments.data ? tagAssignments.data : []}
               autoHeight
               columns={columns}
               getRowId={(row) => row.trackable_uid}
               pageSize={5}
               components={{
                    LoadingOverlay: () => <InProgressDataTable />,
                    NoRowsOverlay: () => <EmptyDataTable />,
                    ErrorOverlay: () => <ErrorDataTable />,
                  }}
               error={tagAssignments.isError || null}
               loading={tagAssignments.isLoading}
               rowsPerPageOptions={[5]}
               checkboxSelection
          />
     </>
}

TagAssignmentsTable.propTypes = {};
TagAssignmentsTable.defualtProps = {};
