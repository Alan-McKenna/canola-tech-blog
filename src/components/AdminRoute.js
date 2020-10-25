import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

import AdminWrapper from './AdminWrapper'
import ProtectedRoute from './ProtectedRoute'

import AuthService  from '../services/auth.service'

import config from '../config'
const _config = config[process.env.NODE_ENV];


function AdminRoute({ path, isAuthenticated, component, ...props }) {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkIsAdmin = async () => {
      return await AuthService.isAdmin(await AuthService.getJwt())
    }

    if(isAuthenticated){
      checkIsAdmin().then( _isAdmin => {
        setIsAdmin(_isAdmin)
      })
    }
  }, [isAuthenticated])

  
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
