import React, { ReactElement } from 'react';
import { GridOverlay } from '@mui/x-data-grid';

export function ErrorDataTable(): ReactElement {
     return (
          <GridOverlay>
               <div style={{ textAlign: 'center', position: 'absolute', top: 40, width: '100%' }}>
                    Error during data fetching
               </div>
          </GridOverlay>
     )
}

ErrorDataTable.propTypes = {};
ErrorDataTable.defaultProps = {};
