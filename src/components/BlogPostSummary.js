import React from 'react';


import BlogPostMeta from './BlogPostMeta'
import BlogPostTags from './BlogPostTags'

const styles = {
    container: {
    },
}


function BlogPostSummary({ title, tags, date, summary, author }) {
    
    return (
      <div className="blog-post-summary">

        <BlogPostTags tags={tags}/>
        
        <div className="blog-post-title">
            {title}
        </div>

        <BlogPostMeta date={date} author={author}/>

        <div className="blog-post-summary-content">
            {summary}
        </div>
      </div>
    );
  }
  
export default BlogPostSummary;
