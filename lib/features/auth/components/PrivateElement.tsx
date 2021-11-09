import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

type PrivateRouteProps = {
     element: React.ReactElement,
}

// todo: check for react-roiuter-dom v6 fixes to implement fully functional private router
export function PrivateElement({ element }: PrivateRouteProps): ReactElement {
     const { hasToken } = useAuth();
     return hasToken ? element : <Navigate to="/login" replace={true} />
}
