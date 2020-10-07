import React from 'react';

import Page from './Page'
import { home } from '../constants'


function Home() {
    
    return (
      <div className="contact">
          <Page 
              title={home.title}
              child={home.content}
          />
      </div>
    );
  }
  
  export default Home;
