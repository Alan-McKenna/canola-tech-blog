import React from 'react';

import Page from './Page'
import { blog } from '../constants'


function Blog() {
    
    return (
      <div className="contact">
          <Page 
              title={blog.title}
              child={blog.content}
          />
      </div>
    );
  }
  
  export default Blog;
