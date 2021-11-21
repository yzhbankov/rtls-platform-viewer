import React, { ReactElement } from 'react';
import { Layout, Content } from '../../../components/layout';
import { ViewPageContent } from './ViewPageContent';



export function ViewPage(): ReactElement {
     return (
          <Layout
               sideBarRender={
                    () => (<></>)
               }
               contentRender={
                    () => (
                         <Content
                              innerContentRender={
                                   () => <ViewPageContent />
                              }
                         />)
               }
          />
     )
}

ViewPage.defaultProps = {};
ViewPage.propTypes = {};
