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

import { title, navLinks } from '../constants'

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
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>
        </Switch>

        <AppFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
