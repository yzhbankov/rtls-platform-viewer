import React, { ReactElement } from 'react';
import { Layout, Content } from '../../../components/layout';
import { HomePageContent } from './HomePageContent';



export function HomePage(): ReactElement {
     return (
          <Layout
               sideBarRender={
                    () => (<></>)
               }
               contentRender={
                    () => (
                         <Content
                              innerContentRender={
                                   () => <HomePageContent />
                              }
                         />)
               }
          />
     )
}
