import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import Loader from 'react-loader-spinner'

import BlogPostContent from './BlogPostContent'
import BlogPostMeta from './BlogPostMeta'
import BlogPostService from '../services/blogPost.service.js'
import { colors, fontSize, device } from '../styles'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function BlogPost() {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
    const styles = {
        container: {
        },
        title: {
            width: '100%',
            paddingTop: 30,
            paddingBottom: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: fontSize.xLarge,
        },
        meta: {
            width: '100%',
            paddingBottom: 30,
            textAlign: 'center',
            fontSize: fontSize.medium,
        },
        contentContainer: {
            backgroundColor: colors.beige,
            width: (isTablet ? '90%' :'60%'),
            paddingLeft: (isTablet ? '5%' :'20%'),
            paddingRight: (isTablet ? '5%' :'20%'),
            paddingTop: 30,
            paddingBottom: '6%',
            textAlign: 'justify',
            textJustify: 'inter-word',
            lineHeight: '32px',
            letterSpacing: '-0.003em',
            fontSize: fontSize.medium,
        },
    }

    const { postId, title } = useParams();
    const [ content, setContent ] = useState([]);
    const [ author, setAuthor ] = useState("");
    const [ date, setDate ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const _post = await BlogPostService.get_post(postId)
            setDate(_post.date)
            setAuthor(_post.author)
            setContent(_post.content)
        }
        setIsLoading(true)
        fetchData();
        setIsLoading(false)
      }, [postId, title]);


    return (
        <div className="post" style={styles.container}>
            {isLoading &&
                <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
            }
            <div className="post-title" style={styles.title}>
                {title}
            </div>
        
            <div className="blog-post-meta" style={styles.meta}>
                <BlogPostMeta date={date} author={author}/>
            </div>

            <div className="post-content-container" style={styles.contentContainer}>
                <div style={styles.contentContainer}>
                    <BlogPostContent content={content}/>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
