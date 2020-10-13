import React, {useEffect, useState} from 'react';

import Page from './Page'
import BlogPostSummaryList from './BlogPostSummaryList'

import { home } from '../constants'
import BlogPostService from '../services/blogPost.service.js'



function Home() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const _posts = await BlogPostService.get_posts(3)
          setPosts(_posts)
      }
      fetchData();
    }, []);
    
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

