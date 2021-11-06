import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './app/AppContainer';
import './index.css'

ReactDom.render(
     <BrowserRouter>
          <AppContainer />
     </BrowserRouter>,
     document.getElementById('app')
)
