import React, { ReactElement } from 'react';
import { Layout } from '../../../components/layout';


export function HomePage(): ReactElement {
     return (
          <Layout
               sideBarRender={() => (<div>SideBar</div>)}
               contentRender={() => (<div>Content</div>)}
          />
     )
}
