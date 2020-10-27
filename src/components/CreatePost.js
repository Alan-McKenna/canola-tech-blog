import React, { useState } from 'react';

import PostEditor from './PostEditor';


function CreatePost() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState([])
    const [tags, setTags] = useState([])
    
    return (
        <PostEditor 
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
        />
    );
  }
  
export default CreatePost;
