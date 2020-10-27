import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import AuthService from '../services/auth.service.js'
import BlogPostService from '../services/blogPost.service.js'

import { colors, fontSize, device, button } from '../styles'


function NewComment({ postId, isAuthenticated, addCommentToList }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const [content, setContent] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const styles = {
        container: {
            color: colors.black,
            margin: 'auto',
        },
        content: {
            fontSize: fontSize.medium,
            width: '100%',
            minHeight: '150px',
            resize: 'vertical',
            border: '1px solid black',
            borderRadius: '5px',
            transform: (isSubmitted ? 'scale(1.1)' : 'scale(1)'),
            transition: 'all 0.5s ease-out',
            cursor: (!isAuthenticated && 'not-allowed'),
        },
        button: { ...button,
            width: '80px',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 'auto',
            transform: (isSubmitted ? 'scale(1.1)' : 'scale(1)'),
            transition: 'all 0.5s ease-out',
            cursor: (isAuthenticated ? 'pointer' : 'not-allowed'),
        },
    }

    const submitComment = async () => {
        if(isAuthenticated) {
            const author = AuthService.getCurrentUser()
            const comment = { 
                author:  (author ? author : "Anonymous"),
                content: content,
                postId: postId
            }
            await BlogPostService.submitComment(comment)
            addCommentToList(comment)
            setContent("")
            setIsSubmitted(true)
            setTimeout(() => {setIsSubmitted(false)}, 500);
        }
    }

    return (
        <div className="new-comment" style={styles.container}>
            <textarea 
                disabled={(!isAuthenticated && true)}
                name="comment" 
                value={content}
                className="new-comment-content" 
                placeholder="Write something..."
                style={styles.content}
                onChange={(event) => setContent(event.target.value)}
            />
            <div style={styles.button} onClick={() => submitComment()}>Submit</div>
        </div>
    );
}

export default NewComment;