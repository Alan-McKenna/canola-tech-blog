import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'

import { colors, fontSize, device } from '../styles'


function Comment({ author, date, content }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const styles = {
        container: {
        },
        content: {
        },
        meta: {
        },
        metaContainer: {
        },
    }

    return (
        <div className="comment" style={styles.container}>
            <div className="comment-content">{content}</div>
            <div className="comment-meta-container">
                <div className="comment-meta">{author}</div>
                <div className="comment-meta">{date}</div>
            </div>
        </div>
    );
}

export default Comment;
