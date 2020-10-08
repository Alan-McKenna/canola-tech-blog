import React from 'react';


const styles = {
    container: {
    },
}


function BlogPostCategories({ categories }) {
    
    return (
      <div className="blog-post-categories-container">
        {categories.map( (category, index) => {
            return (<span className="blog-post-categories" key={index}> {category} </span>)
        })}
      </div>
    );
  }
  
export default BlogPostCategories;
