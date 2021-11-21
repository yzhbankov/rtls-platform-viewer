import React, { ReactElement, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RoomIcon from '@mui/icons-material/Room';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListItemText from '@mui/material/ListItemText';
import { useAuth } from '../../auth/hooks';
import { useNavigation } from '../hooks';


const drawerWidth = 220;
const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({ zIndex: theme.zIndex.drawer + 1 }));

export function Header(): ReactElement {
  const { logout } = useAuth();
  const { navigate, currentPage } = useNavigation();
  const [openAdminMenu, setOpenAdminMenu] = useState(false);
  const [selected, setSelected] = useState('home');
  const handleAdminClick = () => setOpenAdminMenu(!openAdminMenu);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <div style={{ height: 60 }} />
        <List>
          <ListItemButton
            onClick={() => {
              navigate("/admin");
              handleAdminClick();
              setSelected('admin');
            }}
            selected={selected === 'admin'}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Administration" />
            {openAdminMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAdminMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate("/admin/trackables");
                  setSelected('trackables');
                }}
                selected={selected === 'trackables'}
              >
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Trackables" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate('/admin/anchors');
                  setSelected('anchors');
                }}
                selected={selected === 'anchors'}
              >
                <ListItemIcon>
                  <RssFeedIcon />
                </ListItemIcon>
                <ListItemText primary="Anchors" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate('/admin/locations');
                  setSelected('locations');
                }}
                selected={selected === 'locations'}
              >
                <ListItemIcon>
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary="Locations" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate('/admin/sublocations');
                  setSelected('sublocations');
                }}
                selected={selected === 'sublocations'}
              >
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary="Sublocations" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={() => {
              navigate("/site-view");
              setSelected('siteView');
            }}
            selected={selected === 'siteView'}
          >
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary="Site Viewer" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/system");
              setSelected('system');
            }}
            selected={selected === 'system'}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="System Status" />
          </ListItemButton>
        </List>
        <Divider />
        <ListItemButton
          onClick={() => {
            navigate("/home");
            setSelected('home');
          }}
          selected={selected === 'home'}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        {/* todo: implement open/close navbar */}
      </Drawer>
    </Box>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
