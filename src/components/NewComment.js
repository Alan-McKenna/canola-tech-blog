import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import AuthService from '../services/auth.service.js'
import BlogPostService from '../services/blogPost.service.js'

import { colors, fontSize, device, button } from '../styles'


function NewComment({ postId, isAuthenticated }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const [content, setContent] = useState("")

    const styles = {
        container: {
            color: colors.black,
            margin: 'auto',
        },
        content: {
            fontSize: fontSize.medium,
            width: '100%',
            height: '150px',
            resize: 'vertical',
        },
        button: { ...button,
            width: '80px',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 'auto',
        },
    }

    const submitComment = () => {
        if(isAuthenticated) {
            const comment = { 
                author: AuthService.getCurrentUser(),
                content: content,
                postId: postId
            }
            BlogPostService.submitComment(comment)
        }
    }

    return (
        <div className="new-comment" style={styles.container}>
            <textarea 
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