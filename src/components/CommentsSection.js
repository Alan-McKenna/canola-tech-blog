import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import NewComment from './NewComment'
import Comment from './Comment'

import AuthService from '../services/auth.service.js'
import { colors, fontSize, device } from '../styles'


function CommentsSection({ comments, isAuthenticated, addCommentToList }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    const [currentUser, setCurrentUser] = useState('')
    const firstUpdate = useRef(true);

    const { postId } = useParams();

    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: (isTablet ? '5% 90% 5%' : '30% 40% 30%'),
            marginBottom: '50px',
        },
        content: {
          gridColumn: '2',
          padding: 10,
        }
    }

    useEffect(() => {
        if(firstUpdate.current) {
            setCurrentUser(AuthService.getCurrentUser())
        }
        return () => { firstUpdate.current = false }
    }, [currentUser]);



    return (
        <div className="comments-section" style={styles.container}>
            <div style={styles.content}>

                <NewComment postId={postId} isAuthenticated={isAuthenticated} addCommentToList={addCommentToList} />

                {Array.isArray(comments) && comments[0] &&
                    comments.map(function(comment, index){
                        return (
                        <div  key={index} >
                            <Comment
                                author={comment.author}
                                currentUser={currentUser}
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
