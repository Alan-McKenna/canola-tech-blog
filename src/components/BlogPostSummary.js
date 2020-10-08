import React from 'react';

import BlogPostMeta from './BlogPostMeta'
import BlogPostTags from './BlogPostTags'

import { fontSize } from '../constants'


const styles = {
    title: {
        fontSize: fontSize.xLarge,
        padding: 25,
        paddingTop: 10,
    },
    summary: {
        fontSize: fontSize.medium,
        padding: 40,
        paddingBottom: 40,
    },
}


function BlogPostSummary({ title, tags, date, summary, author }) {
    
    return (
      <div className="blog-post-summary">

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
