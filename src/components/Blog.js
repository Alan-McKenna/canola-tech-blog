import React from 'react';

import Page from './Page'
import BlogPostSummaryList from './BlogPostSummaryList'

import { blog } from '../constants'

const posts = blog.blogPosts


function Blog() {
    
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

