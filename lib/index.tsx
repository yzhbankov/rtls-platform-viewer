import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './app/AppContainer';
import { AppProvider } from './context';
import { ErrorBoundaryComponent } from './components';
import './index.css'

ReactDom.render(
     <BrowserRouter>
          <AppProvider>
               <ErrorBoundaryComponent>
                    <AppContainer />
               </ErrorBoundaryComponent>
          </AppProvider>
     </BrowserRouter>,
     document.getElementById('app')
)
