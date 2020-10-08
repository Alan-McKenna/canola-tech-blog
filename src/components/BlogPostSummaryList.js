import React from 'react';

import BlogPostSummary from './BlogPostSummary'


function BlogPostSummaryList({ posts }) {

  return (
    <>
    {posts.map( (post, index) => {
      return (
        <BlogPostSummary
          key={index}
          title={post.title}
          categories={post.categories}
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

