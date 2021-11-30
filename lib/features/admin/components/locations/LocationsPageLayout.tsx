import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type LayoutProps = {
     leftSideRender: () => ReactElement;
     rightSideRender: () => ReactElement;
}

export function LocationsPageLayout(props): ReactElement<LayoutProps> {
     const { leftSideRender, rightSideRender } = props;
     return (
          <Box sx={{ flexGrow: 1 }}>
               <Grid container justifyContent="center" spacing={0}>
                    <Grid item xs={6}>
                         {leftSideRender()}
                    </Grid>
                    <Grid item xs={6}>
                         {rightSideRender()}
                    </Grid>
               </Grid>
          </Box>
     )
}

LocationsPageLayout.propTypes = {
     leftSideRender: PropTypes.func,
     rightSideRender: PropTypes.func,
};

LocationsPageLayout.defaultProps = {
     leftSideRender: () => null,
     rightSideRender: () => null,
};
