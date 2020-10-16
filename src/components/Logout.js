import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";

import AuthService from '../services/auth.service.js'

import config from '../config'
const _config = config[process.env.NODE_ENV];

function Logout({ setIsAuthenticated }) {
    
    useEffect(() => {
        setIsAuthenticated(false)
        AuthService.logout()
      });

    return (<Redirect to={_config.routes.auth}/>);
  }
  
export default Logout;
