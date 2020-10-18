import React from 'react';

import AdminWrapper from './AdminWrapper'
import ProtectedRoute from './ProtectedRoute'


function AdminRoute({ path, isAuthenticated, component, ...props }) {

  return (
    <ProtectedRoute 
        exact path={path}
        isAuthenticated={isAuthenticated}
        component={() => (<AdminWrapper component={component} {...props}/>)}
    />
  );
}

export default AdminRoute;
