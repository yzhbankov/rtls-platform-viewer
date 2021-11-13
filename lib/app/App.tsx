import React, { ReactElement } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PrivateElement } from '../features/auth/components';
import { Header } from '../components/layout';
import { HomePage } from '../features/homepage/components';

export function App(): ReactElement {
     return (
          <>
               <Header />
               <Routes>
                    <Route path="/*" element={<Navigate to="/home" replace={true} />} />
                    <Route path="/home" element={<PrivateElement element={<HomePage />} />} />
                    <Route path="/example" element={<PrivateElement element={<div>Example page</div>} />} />
               </Routes>
          </>
     )
}

App.defaultProps = {}

App.propTypes = {}
