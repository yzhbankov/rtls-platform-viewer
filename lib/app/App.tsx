import React, { ReactElement } from 'react'
import { Header, SideBar } from '../features/nav/components';
import { Layout } from '../components/layout'
import { AppRoutes } from './AppRoutes';

export function App(): ReactElement {
     return (
          <Layout
               headerRender={() => <Header />}
               sideBarRender={() => <SideBar /> }
               contentRender={() => <AppRoutes />}
          />
     );
}

App.defaultProps = {}

App.propTypes = {}
