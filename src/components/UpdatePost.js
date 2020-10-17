import React, { useState } from 'react';

import PostEditor from './PostEditor';


function UpdatePost() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState([])
    
    return (
        <PostEditor 
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
        />
    );
  }
  
export default UpdatePost;
