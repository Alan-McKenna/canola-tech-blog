import React from 'react';
import {
  Route,
  Redirect
 } from "react-router-dom";

import config from '../config'
const _config = config[process.env.NODE_ENV];

function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? <Component {...props} /> : <Redirect to={_config.routes.auth} />
            }
        />
    );
}

export default ProtectedRoute;