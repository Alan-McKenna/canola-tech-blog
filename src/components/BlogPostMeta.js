import React from 'react';
import moment from 'moment'

function BlogPostMeta({ date, author }) {
  
    return (
      <span className="blog-post-meta">
        By {author}, {moment(date).format('MMMM DD YYYY')}
      </span>
    );
  }
  
export default BlogPostMeta;
