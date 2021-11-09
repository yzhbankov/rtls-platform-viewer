import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PrivateElement } from '../features/auth/components';

export function App() {
     return (
          <>
               <div>Header</div>
               <Routes>
                    <Route path="/*" element={<Navigate to="/home" replace={true} />} />
                    <Route path="/home" element={<PrivateElement element={<div>Home page</div>} />} />
                    <Route path="/example" element={<PrivateElement element={<div>Example page</div>} />} />
               </Routes>
          </>
     )
}
App.defaultProps = {}

App.propTypes = {}
