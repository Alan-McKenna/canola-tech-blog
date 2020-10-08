import React from 'react';


import BlogPostMeta from './BlogPostMeta'
import BlogPostCategories from './BlogPostCategories'

const styles = {
    container: {
    },
}


function BlogPostSummary({ title, categories, date, summary, author }) {
    
    return (
      <div className="blog-post-summary">

        <BlogPostCategories categories={categories}/>
        
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
