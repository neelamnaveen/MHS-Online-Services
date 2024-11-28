// PrivateRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  roles: string[];
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles, children }) => {

  const currentUser = { isAuthenticated: true, role: 'admin' }; 

  if (!currentUser.isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!roles.includes(currentUser.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;
