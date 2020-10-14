import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import BlogPost from './BlogPost';
import CreatePost from './CreatePost';
import AdminDashboard from './AdminDashboard';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from './AuthPage';

import AuthService from '../services/auth.service.js'
import './App.css'

import config from '../config'
const _config = config[process.env.NODE_ENV];

const styles = {
  root: {
      minHeight: '100vh',
      position: 'relative',
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={styles.root}>
        
        <AppHeader
          title={_config.headerTitle}
          navLinks={_config.navLinks}
        />

        <Switch>
          <Route 
            exact path={_config.routes.home}
            component={Home}
          />
          <Route 
            exact path={_config.routes.about}
            component={About}
          />
          <Route 
            exact path={_config.routes.contact}
            component={Contact}
          />
          <Route 
            exact path={_config.routes.blog}
            component={Blog}
          />
          <Route 
            exact path={_config.routes.createPost}
            component={CreatePost}
          />
          <Route 
            path={`${_config.routes.post}/:postId/:title`}
            component={BlogPost}
          />
          <Route 
            path={_config.routes.auth}
            component={AuthPage}
          />
          <ProtectedRoute
            exact path={_config.routes.admin}
            isAuthenticated={AuthService.getIsAuthenticated()}
            component={AdminDashboard}
          />
        </Switch>

        {/* spacer */}
        <div style={{height: '15vh'}}></div>
        {/* spacer */}
        <AppFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
