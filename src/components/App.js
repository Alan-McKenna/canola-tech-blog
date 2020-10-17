import React, { useState } from 'react';
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
import UpdatePost from './UpdatePost';
import AdminDashboard from './AdminDashboard';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from './AuthPage';
import Logout from './Logout';

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
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.getIsAuthenticated())

  return (
    <BrowserRouter>
      <div className="app" style={styles.root}>
        
        <AppHeader
          title={_config.headerTitle}
          navLinks={_config.navLinks}
          isAuthenticated={isAuthenticated}
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
            exact path={_config.routes.updatePost}
            component={UpdatePost}
          />
          <Route 
            path={`${_config.routes.post}/:postId/:title`}
            component={BlogPost}
          />
          <Route 
            path={_config.routes.logout}
            render={() => (<Logout setIsAuthenticated={setIsAuthenticated}/>)}
          />
          <Route 
            path={_config.routes.auth}
            render={(props) => (
              <AuthPage {...props} 
                isAuthenticated={isAuthenticated} 
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          />
          <ProtectedRoute
            exact path={_config.routes.admin}
            isAuthenticated={isAuthenticated}
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
