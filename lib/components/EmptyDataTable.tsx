import React, { ReactElement } from 'react';
import { GridOverlay } from '@mui/x-data-grid';

export function EmptyDataTable(): ReactElement {
     return (
          <GridOverlay>
               <div style={{ textAlign: 'center', position: 'absolute', top: 40, width: '100%' }}>
                    Empty table
               </div>
          </GridOverlay>
     )
}

EmptyDataTable.propTypes = {};
EmptyDataTable.defaultProps = {};
