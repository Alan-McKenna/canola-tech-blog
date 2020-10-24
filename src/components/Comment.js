import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import moment from 'moment'

import { colors, fontSize, device } from '../styles'


function Comment({ author, date, content }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const styles = {
        container: {
            border: '1px solid black',
            borderRadius: '5px',
            padding: '10px',
            marginTop:  '30px',
            marginBottom:  '30px',
        },
        metaContainer: {
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: 'minmax(50px, 100%)',
            width: '100%',
        },
        author: {
            gridColumn: '1',
        },
        date: {
            gridColumn: '2',
            textAlign: 'right',
        },
        content: {
            marginBottom:  '20px',
        },
    }

    return (
        <div className="comment" style={styles.container}>
            <div className="comment-meta-container" style={styles.metaContainer} >
                <div className="comment-meta" style={styles.author}>{author}</div>
                <div className="comment-meta" style={styles.date}>{moment(date).format('MMMM DD YYYY')}</div>
            </div>
            <div className="comment-content" style={styles.content}>{content}</div>
        </div>
    );
}

export default Comment;
