import React from 'react';


const styles = {
    container: {
    },
}


function BlogPostMeta({ date, author }) {
    
    return (
      <span className="blog-post-meta">
        {date} {author}
      </span>
    );
  }
  
export default BlogPostMeta;
