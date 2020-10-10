import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import BlogPostContent from './BlogPostContent'
import BlogPostService from '../services/blogPost.service.js'
import { colors, fontSize, device } from '../styles'



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

    useEffect(() => {
        async function fetchData() {
            const _content = await BlogPostService.get(postId)
            setContent(_content)
        }
        fetchData();
      }, [postId, title]);


    return (
        <div className="page" style={styles.container}>
            <div className="page-title" style={styles.title}>
                {title}
            </div>
            <div className="page-content-container" style={styles.contentContainer}>
                <div style={styles.contentContainer}>
                    <BlogPostContent content={content}/>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
