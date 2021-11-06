import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from './app/AppContainer';
import './index.css'

ReactDom.render(
     <AppContainer />,
     document.getElementById('app')
)
