import React from 'react';
import { Layout } from '../../../components/layout';

export function HomePage() {
     return (
          <Layout
               sideBarRender={() => (<div>SideBar</div>)}
               contentRender={() => (<div>Content</div>)}
          />
     )
}
