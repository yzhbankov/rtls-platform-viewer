import React, { ReactElement, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { useAuth } from '../../auth/hooks';


const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({ zIndex: theme.zIndex.drawer + 1 }));

export function Header(): ReactElement {
  const { logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
