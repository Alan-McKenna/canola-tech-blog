import React from 'react';

import BlogPostSummary from './BlogPostSummary'


function BlogPostSummaryList({ posts }) {

  return (
    <>
    {posts.map( (post, index) => {
      return (
        <BlogPostSummary
          key={index}
          id={post._id}
          title={post.title}
          tags={post.tags}
          date={post.date}
          summary={post.summary}
          author={post.author}
        />
      )
    })
    }
    </>
  )

}
  
export default BlogPostSummaryList;

