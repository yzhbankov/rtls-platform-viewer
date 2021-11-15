import React, { ReactElement } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigation } from '../../../hooks';
import { MenuIcon } from '../../../components';

export function HomePageContent(): ReactElement {
     const { navigate } = useNavigation();

     return (
          // todo: add some css framework and remove inline css
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
                    title="Administration"
                    icon={<SettingsIcon color="secondary" fontSize="large" />}
                    onClick={() => {
                         navigate("/admin");
                    }}
               />
               <MenuIcon
                    title="Site Viewer"
                    icon={<VisibilityIcon color="secondary" fontSize="large" />}
                    onClick={() => {
                         navigate('/site-view')
                    }}
               />
               <MenuIcon
                    title="System Status"
                    icon={<AssessmentIcon color="secondary" fontSize="large" />}
                    onClick={() => {
                         navigate('/system')
                    }}
               />
          </div>);
}

HomePageContent.propTypes = {

};

HomePageContent.defaultProps = {

}
