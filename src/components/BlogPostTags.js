import React from 'react';

import TagLink from './TagLink'

const styles = {
    container: {
    },
}


function BlogPostTags({ tags }) {
    
    return (
      <div className="blog-post-tags-container">
        {tags.map( (tag, index) => {
            return (
            <span key={index}> <TagLink tag={tag} className="blog-post-tags"/> </span>
            )
        })}
      </div>
    );
  }
  
export default BlogPostTags;
