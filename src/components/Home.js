import React from 'react';

import Page from './Page'
import BlogPostSummaryList from './BlogPostSummaryList'

import { home } from '../constants'

const posts = home.mostRecentBlogPosts


function Home() {
    
    return (
      <div className="contact">
          <Page 
              title={home.title}
              child={
                <BlogPostSummaryList
                  posts={posts}
                />
              }
          />
      </div>
    );
  }
  
export default Home;

