import React from 'react';


function BlogPostMeta({ date, author }) {
    
    return (
      <span className="blog-post-meta">
        By {author}, {date}
      </span>
    );
  }
  
export default BlogPostMeta;
