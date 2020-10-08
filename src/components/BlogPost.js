import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import BlogPostService from '../services/blogPost.service.js'
import { colors, fontSize } from '../constants'

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
        width: '70%',
        minHeight: '35vh',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '6%',
        paddingBottom: '6%',
        textAlign: 'center',
    },
}

function BlogPost() {
    const { postId, title } = useParams();
    const [ content, setContent ] = useState("");

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
                    {content}
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
