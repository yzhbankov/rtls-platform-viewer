import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';

export function AppContainer() {
     return (
          <Routes>
               <Route path="/*" element={<App />} />
               <Route path="/login" element={<div>Login page</div>} />
          </Routes>
     )
}

AppContainer.defaultProps = {}

AppContainer.propTypes = {}
