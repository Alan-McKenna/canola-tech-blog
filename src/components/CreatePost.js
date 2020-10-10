import React, { useState, useEffect } from 'react';

import Page from './Page'
import PostEditor from './PostEditor'

import { fontSize, colors } from '../styles'


function CreatePost() {
    const styles = {
      title: {
        fontSize: fontSize.xxLarge,
        color: colors.red,
        border: 'none',
        width: '90%',
        textAlign: 'center'
      }
    }

    const [title, setTitle] = useState("")

    return (
      <div className="contact">
          <Page 
              title={
                <textarea 
                  name="title" 
                  className="blog-post-title-input" 
                  placeholder="Title..."
                  style={styles.title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              }
              child={<PostEditor title={title}/>}
          />
      </div>
    );
  }
  
export default CreatePost;

