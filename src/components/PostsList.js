import React, { useState } from 'react';
import moment from 'moment'

import { colors } from '../styles'


function PostListItem({ post }) {
    const [hover, setHover] = useState(false)

    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: '40% 20% 20% 20%',
            width: '100%',
            backgroundColor: (hover ? colors.red : colors.white),
            color: (hover ? colors.white : colors.red),
            padding: '15px',
            marginTop: '5px',
            marginBottom: '5px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: '0.25s',
        },
        section: {
            textAlign: 'left',
            color: 'inherit',
            marginTop: 'auto',
            marginBottom: 'auto',
        },
        title: {
            gridColumn: '1',
            marginBottom: 'auto',
        },
        author: {
            gridColumn: '2',
        },
        date: {
            gridColumn: '3',
        },
        actionsSection: {
            gridColumn: '4',
            textAlign: 'right',
        },
        action: {
            textAlign: 'right',
            display: 'inline',
            height: '20px',
            width: '20px',
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginLeft: '2px',
            marginRight: '2px',
            borderRadius: '100%',
            backgroundColor: (hover ? colors.white : colors.red),
            color: (hover ? colors.red : colors.white),
        },
    }

    return (
        <div style={styles.container} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
            <span style={{...styles.section, ...styles.title}}>{post.title}</span>
            <span style={{...styles.section, ...styles.author}}>{post.author}</span>
            <span style={{...styles.section, ...styles.date}}>{moment(post.date).format('MMMM DD YYYY')}</span>
            <span style={{...styles.section, ...styles.actionsSection}}>
                <div style={styles.action}>-</div>
                <div style={styles.action}>+</div>
            </span>
        </div>
    )
}

function PostsList({ posts }) {
    
  const styles = {
    container: {
    }
  }

  return (
    <div style={styles.container}>
        {Array.isArray(posts) && posts[0] &&
            posts.map(function(post, index){
                return (
                <PostListItem key={index} post={post} />
                )
            }
        )}
    </div>
  );
}

export default PostsList;
