import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import PostEditor from './PostEditor';

import BlogPostService from '../services/blogPost.service';

function UpdatePost() {
    const { postId } = useParams();
    const [title, setTitle] = useState("")
    const [ content, setContent ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const _post = await BlogPostService.getPost(postId)
            setTitle(_post.title)
            setContent(_post.content)
        }
        fetchData();
      }, [postId]);

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
