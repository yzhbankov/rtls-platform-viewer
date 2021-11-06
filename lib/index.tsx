import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './app/AppContainer';
import { ErrorBoundaryComponent } from './components';
import './index.css'

ReactDom.render(
     <ErrorBoundaryComponent>
          <BrowserRouter>
               <AppContainer />
          </BrowserRouter>
     </ErrorBoundaryComponent>,
     document.getElementById('app')
)
