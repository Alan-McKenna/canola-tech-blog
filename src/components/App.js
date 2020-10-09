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

import { title, navLinks, routes } from '../constants'

import './App.css'

const styles = {
  root: {
      minHeight: '100vh'
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={styles.root}>
        
        <AppHeader
          title={title}
          navLinks={navLinks}
        />

        <Switch>
          <Route exact path={routes.home}>
            <Home/>
          </Route>
          <Route exact path={routes.about}>
            <About/>
          </Route>
          <Route exact path={routes.contact}>
            <Contact/>
          </Route>
          <Route exact path={routes.blog}>
            <Blog/>
          </Route>
          <Route exact path={routes.createPost}>
            <CreatePost/>
          </Route>
          <Route path={routes.post}>
            <BlogPost/>
          </Route>
        </Switch>

        <AppFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
