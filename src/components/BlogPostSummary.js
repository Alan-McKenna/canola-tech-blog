import React from 'react';

import BlogPostMeta from './BlogPostMeta'
import BlogPostTags from './BlogPostTags'
import { useHistory } from "react-router-dom";

import { routes } from '../constants'
import { fontSize } from '../styles'


const styles = {
    container: {
        cursor: 'pointer',
        marginBottom: 50
    },
    title: {
        fontSize: fontSize.xLarge,
        padding: 25,
        paddingTop: 10,
    },
    summary: {
        fontSize: fontSize.medium,
        padding: 40,
        paddingBottom: 40,
        textAlign: 'justify',
        textJustify: 'inter-word',
        letterSpacing: '-0.003em',
    },
}


function BlogPostSummary({ id, title, tags, date, summary, author }) {
    const history = useHistory()

    const toPost = () => {
        history.push(`${routes.post}/${id}/${title}`)
    }

    return (
      <div className="blog-post-summary" style={styles.container} onClick={(id) => toPost(id)}>

        <BlogPostTags tags={tags}/>
        
        <div className="blog-post-title" style={styles.title}>
            {title}
        </div>

        <BlogPostMeta date={date} author={author}/>

        <div className="blog-post-summary-summary" style={styles.summary}>
            {summary}
        </div>
      </div>
    );
  }
  
export default BlogPostSummary;
