import React, { ReactElement } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PrivateElement } from '../features/auth/components';
import { HomePage } from '../features/homepage/components';
import { TrackablesPage, AnchorsPage, LocationsPage } from '../features/admin/components';
import { SystemPage } from '../features/systepage/components';
import { ViewPage } from '../features/viewpage/components';

export function AppRoutes(): ReactElement {
     return (
          <Routes>
                    <Route path="*" element={<Navigate to="/home" replace={true} />} />
                    <Route path="home" element={<PrivateElement element={<HomePage />} />} />
                    <Route path="admin">
                         <Route path="trackables" element={<PrivateElement element={<TrackablesPage />} />} />
                         <Route path="anchors" element={<PrivateElement element={<AnchorsPage />} />} />
                         <Route path="locations" element={<PrivateElement element={<LocationsPage />} />} />
                    </Route>
                    <Route path="site-view" element={<PrivateElement element={<ViewPage />} />} />
                    <Route path="system" element={<PrivateElement element={<SystemPage />} />} />
               </Routes>
     )
}

AppRoutes.defaultProps = {}

AppRoutes.propTypes = {}
