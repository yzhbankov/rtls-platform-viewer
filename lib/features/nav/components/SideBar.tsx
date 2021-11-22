import React, { ReactElement, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
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
import { useNavigation } from '../hooks';


const drawerWidth = 220;

export function SideBar(): ReactElement {
  const { navigate, currentPage } = useNavigation();
  const [openAdminMenu, setOpenAdminMenu] = useState(false);
  const [selected, setSelected] = useState('home');
  const handleAdminClick = () => setOpenAdminMenu(!openAdminMenu);

  return (
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
      <ListItem
        button
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
      </ListItem>
      {/* todo: implement open/close navbar */}
    </Drawer>
  );
}

SideBar.propTypes = {};

SideBar.defaultProps = {};
