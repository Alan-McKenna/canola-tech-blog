import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'


import NewComment from './NewComment'
import Comment from './Comment'
import BlogPostService from '../services/blogPost.service.js'
import { colors, fontSize, device } from '../styles'


function CommentsSection({ isAuthenticated }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const [comments, setComments] = useState([])
    const { postId } = useParams();
    const firstUpdate = useRef(true);

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


    useEffect(() => {
        async function fetchData() {
            const postComments = await BlogPostService.getComments(postId)
            setComments(postComments)
        }
        if(firstUpdate.current){
            fetchData()
        }
        firstUpdate.current = false
      }, [postId]);


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
