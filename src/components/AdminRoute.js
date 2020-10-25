import React from 'react';
import { Redirect } from "react-router-dom";

import AdminWrapper from './AdminWrapper'
import ProtectedRoute from './ProtectedRoute'

import config from '../config'
const _config = config[process.env.NODE_ENV];


function AdminRoute({ path, isAuthenticated, isAdmin, component, ...props }) {

  return (
    <ProtectedRoute 
        exact path={path}
        isAuthenticated={isAuthenticated}
        component={() => (
          isAdmin
          ? <AdminWrapper component={component} {...props}/>
          : <Redirect to={_config.routes.home}/>
        )}
    />
  );
}

export default AdminRoute;
