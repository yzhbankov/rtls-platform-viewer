import React, { ReactElement } from 'react';
import { Layout, Content } from '../../../components/layout';
import { SystemPageContent } from './SystemPageContent';



export function SystemPage(): ReactElement {
     return (
          <Layout
               sideBarRender={
                    () => (<></>)
               }
               contentRender={
                    () => (
                         <Content
                              innerContentRender={
                                   () => <SystemPageContent />
                              }
                         />)
               }
          />
     )
}

SystemPage.defaultProps = {};
SystemPage.propTypes = {};