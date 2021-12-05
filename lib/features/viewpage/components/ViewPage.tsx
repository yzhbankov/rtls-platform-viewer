import React, { ReactElement } from 'react';
import { useWebSocket } from '../hooks';

export function ViewPage(): ReactElement {
     const { positions } = useWebSocket();
     return (
          <>
               <div>View Page Content</div>
               <div>{JSON.stringify(positions)}</div>
          </>
     )
}

ViewPage.propTypes = {};
ViewPage.defaultProps = {};
