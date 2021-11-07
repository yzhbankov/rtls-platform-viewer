import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { LoginPage } from '../features/auth/components';

export function AppContainer() {
     return (
          <Routes>
               <Route path="/*" element={<App />} />
               <Route path="/login" element={<LoginPage />} />
          </Routes>
     )
}

AppContainer.defaultProps = {}

AppContainer.propTypes = {}
