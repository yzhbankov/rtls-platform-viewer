import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type LayoutProps = {
     leftSideRender: () => ReactElement;
     rightSideRender: () => ReactElement;
     bottomCenterRender: () => ReactElement;
}

export function TrackablesPageLayout(props): ReactElement<LayoutProps> {
     const { leftSideRender, rightSideRender, bottomCenterRender } = props;
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
               <Grid container justifyContent="center" spacing={0}>
                    <Grid item xs={12}>
                         {bottomCenterRender()}
                    </Grid>
               </Grid>
          </Box>
     )
}

TrackablesPageLayout.propTypes = {
     leftSideRender: PropTypes.func,
     rightSideRender: PropTypes.func,
     bottomCenterRender: PropTypes.func,
};

TrackablesPageLayout.defaultProps = {
     leftSideRender: () => null,
     rightSideRender: () => null,
     bottomCenterRender: () => null,
};
