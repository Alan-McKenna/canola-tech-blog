import React, { useState, useEffect, useRef} from 'react';

import Page from './Page'
import PostsList from './PostsList'

import BlogPostService from '../services/blogPost.service'

import { adminPostsView } from '../constants'
import { colors } from '../styles'

import config from '../config'
const _config = config[process.env.NODE_ENV];


function AdminPostsView() {
    const firstUpdate = useRef(true);
    const [posts, setPosts] = useState([]);
    
    const styles = {
        container: {
        }
    }

    useEffect(() => {
        async function fetchData() {
            const _posts = await BlogPostService.getPosts(10)
            setPosts(_posts)
        }
        if(firstUpdate.current) fetchData();
        firstUpdate.current = false
      }, [firstUpdate]);

    const removePostFromList = (post) => {
        const _posts = posts.filter(_post => !(_post._id === post._id))
        setPosts(_posts)
    }

    return (
        <div style={styles.container}>
        <Page
            title={adminPostsView.title}
            child={<PostsList posts={posts} removePostFromList={removePostFromList} />}
        />
        </div>
    );
}

export default AdminPostsView;
