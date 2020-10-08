import React from 'react';


const styles = {
    container: {
    },
}


function BlogPostMeta({ date, author }) {
    
    return (
      <span className="blog-post-meta">
        By {author}, {date}
      </span>
    );
  }
  
export default BlogPostMeta;
