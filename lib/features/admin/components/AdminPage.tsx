import React, { ReactElement } from 'react';
import { Layout, Content } from '../../../components/layout';
import { AdminPageContent } from './AdminPageContent';



export function AdminPage(): ReactElement {
     return (
          <Layout
               sideBarRender={
                    () => (<></>)
               }
               contentRender={
                    () => (
                         <Content
                              innerContentRender={
                                   () => <AdminPageContent />
                              }
                         />)
               }
          />
     )
}

AdminPage.defaultProps = {};
AdminPage.propTypes = {};
