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
          <Route exact path={_config.routes.home}>
            <Home/>
          </Route>
          <Route exact path={_config.routes.about}>
            <About/>
          </Route>
          <Route exact path={_config.routes.contact}>
            <Contact/>
          </Route>
          <Route exact path={_config.routes.blog}>
            <Blog/>
          </Route>
          <Route exact path={_config.routes.createPost}>
            <CreatePost/>
          </Route>
          <Route path={`${_config.routes.post}/:postId/:title`}>
            <BlogPost/>
          </Route>
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
