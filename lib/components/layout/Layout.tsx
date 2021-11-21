import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

type LayoutProps = {
     headerRender: () => ReactElement;
     sideBarRender: () => ReactElement;
     contentRender: () => ReactElement;
}

export function Layout(props): ReactElement<LayoutProps> {
     const { headerRender, sideBarRender, contentRender } = props;
     return (
          <>
               <div style={{ height: 60 }}>
                    {headerRender()}
               </div>
               <div style={{ display: 'flex' }}>
                    <div style={{ width: 220 }}>
                         {sideBarRender()}
                    </div>
                    <div>
                         {contentRender()}
                    </div>
               </div>
          </>
     )
}

Layout.propTypes = {
     headerRender: PropTypes.func,
     sideBarRender: PropTypes.func,
     contentRender: PropTypes.func,
};

Layout.defaultProps = {
     headerRender: () => null,
     sideBarRender: () => null,
     contentRender: () => null,
};
