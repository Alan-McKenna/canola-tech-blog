import React, { useState, useEffect} from 'react';

import Page from './Page'
import PostsList from './PostsList'

import BlogPostService from '../services/blogPost.service'

import { adminPostsView } from '../constants'
import { colors } from '../styles'

import config from '../config'
const _config = config[process.env.NODE_ENV];


function AdminPostsView() {
    const [ posts, setPosts ] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
            const _posts = await BlogPostService.getPosts(10)
            setPosts(_posts)
        }
        fetchData();
      }, []);


    const styles = {
    container: {
    }
  }

    return (
        <div style={styles.container}>
        <Page
            title={adminPostsView.title}
            child={<PostsList posts={posts} />}
        />
        </div>
    );
}

export default AdminPostsView;
