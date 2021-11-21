import React, { ReactElement } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PrivateElement } from '../features/auth/components';
import { Header } from '../components/layout';
import { HomePage } from '../features/homepage/components';
import { AdminPage, TrackablesPage, AnchorsPage, SublocationsPage, LocationsPage } from '../features/admin/components';
import { SystemPage } from '../features/systempage/components';
import { ViewPage } from '../features/viewpage/components';

export function App(): ReactElement {
     return (
          <>
               <Header />
               <Routes>
                    <Route path="*" element={<Navigate to="/home" replace={true} />} />
                    <Route path="home" element={<PrivateElement element={<HomePage />} />} />
                    <Route path="admin">
                         <Route path="" element={<PrivateElement element={<AdminPage />} />} />
                         <Route path="trackables" element={<PrivateElement element={<TrackablesPage />} />} />
                         <Route path="anchors" element={<PrivateElement element={<AnchorsPage />} />} />
                         <Route path="locations" element={<PrivateElement element={<LocationsPage />} />} />
                         <Route path="sublocations" element={<PrivateElement element={<SublocationsPage />} />} />
                    </Route>
                    <Route path="site-view" element={<PrivateElement element={<ViewPage />} />} />
                    <Route path="system" element={<PrivateElement element={<SystemPage />} />} />
               </Routes>
          </>
     )
}

App.defaultProps = {}

App.propTypes = {}
