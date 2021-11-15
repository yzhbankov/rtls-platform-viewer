import React, { ReactElement } from 'react';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RoomIcon from '@mui/icons-material/Room';
import { useNavigation } from '../../../hooks';
import { MenuIcon } from '../../../components';

export function AdminPageContent(): ReactElement {
     const { navigate } =  useNavigation();
     return (
          <div style={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
               marginLeft: '400px',
               marginRight: '400px',
               marginTop: '300px',
          }}>
               <MenuIcon
                    title="Trackables"
                    icon={<SupervisedUserCircleIcon color="secondary" fontSize="large" />}
                    onClick={() => {
                         navigate("/admin/trackables");
                    }}
               />
               <MenuIcon
                    title="Anchors"
                    icon={<RssFeedIcon color="secondary" fontSize="large" />}
                    onClick={() => {
                         navigate('/admin/anchors')
                    }}
               />
               <MenuIcon
                    title="Locations"
                    icon={<LocationCityIcon color="secondary" fontSize="large" />}
                    onClick={() => {
                         navigate('/admin/locations')
                    }}
               />
               <MenuIcon
                    title="Sublocations"
                    icon={<RoomIcon color="secondary" fontSize="large" />}
                    onClick={() => {
                         navigate('/admin/sublocations')
                    }}
               />
          </div>);
}

AdminPageContent.propTypes = {};
AdminPageContent.defaultProps = {};
