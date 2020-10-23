import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'


import NewComment from './NewComment'
import Comment from './Comment'
import { colors, fontSize, device } from '../styles'


function CommentsSection({ comments, isAuthenticated }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const { postId } = useParams();

    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: '30% 40% 30%',
        },
        content: {
          gridColumn: '2',
          padding: 10,
        }
    }

    return (
        <div className="comments-section" style={styles.container}>
            <div style={styles.content}>

                <NewComment postId={postId} isAuthenticated={isAuthenticated}/>

                {Array.isArray(comments) && comments[0] &&
                    comments.map(function(comment, index){
                        return (
                        <div  key={index} >
                            <Comment
                                author={comment.author}
                                date={comment.date}
                                content={comment.content}
                            />
                        </div>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default CommentsSection;
