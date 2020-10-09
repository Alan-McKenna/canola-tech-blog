import React from 'react';

import Page from './Page'
import PostEditor from './PostEditor'

import { createPost } from '../constants'


function CreatePost() {
    
    return (
      <div className="contact">
          <Page 
              title={createPost.title}
              child={<PostEditor/>}
          />
      </div>
    );
  }
  
export default CreatePost;

