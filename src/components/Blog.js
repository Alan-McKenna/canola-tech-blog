import React, { useEffect, useState } from 'react';

import Page from './Page'
import BlogPostSummaryList from './BlogPostSummaryList'
import BlogPostService from '../services/blogPost.service.js'

import { blog } from '../constants'

function Blog() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const _posts = await BlogPostService.get_posts(10)
          setPosts(_posts)
      }
      fetchData();
    }, []);
    
    return (
      <div className="contact">
          <Page 
              title={blog.title}
              child={
                <BlogPostSummaryList
                  posts={posts}
                />
              }
          />
      </div>
    );
  }
  
export default Blog;

