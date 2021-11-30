import React, { ReactElement } from 'react';
import { GridOverlay } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

export function InProgressDataTable(): ReactElement {
     return (
          <GridOverlay>
               <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                    <LinearProgress />
               </div>
          </GridOverlay>
     )
}

InProgressDataTable.propTypes = {};
InProgressDataTable.defaultProps = {};
