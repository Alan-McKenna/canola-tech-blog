import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import moment from 'moment'

import likeIcon from '../like-icon.png'; 
import { colors, fontSize, device } from '../styles'


function Comment({ author, date, content, likesCount }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const styles = {
        container: {
            border: '1px solid black',
            borderRadius: '5px',
            padding: '10px',
            marginTop:  '30px',
            // marginBottom:  '10px',
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
            marginBottom:  '30px',
        },
        actionsContainer: {
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: 'minmax(30px, 100%)',
            width: '100%',
        },
        like: {
            gridColumn: '1',
            display: 'inline',
        },
        likeIcon: {
            height: '20px',
            width: '20px',
            display: 'inline',
            // margin: '10px',
        },
        likeCounter: {
            backgroundColor: colors.offWhite,
            padding: '5px 7px 5px 7px',
            border: '0.5px',
            borderRadius: '5px',
            display: 'inline',
            margin: '10px',
        },
        reply: {
            gridColumn: '2',
            textAlign: 'right',
        },
    }

    return (
        <div className="comment" style={styles.container}>
            <div className="comment-meta-container" style={styles.metaContainer} >
                <div className="comment-meta" style={styles.author}>{author}</div>
                <div className="comment-meta" style={styles.date}>{moment(date).format('MMMM DD YYYY')}</div>
            </div>
            <div className="comment-content" style={styles.content}>{content}</div>
            <div className="comment-actions-container" style={styles.actionsContainer}>
                <div className="comment-actions-like" style={styles.like}>
                    <img src={likeIcon} alt="LikeIcon"  style={styles.likeIcon} />
                    <span style={styles.likeCounter}>{likesCount ? likesCount : 0}</span>
                </div>
                <div className="comment-actions-reply" style={styles.reply}>reply</div>
            </div>
        </div>
    );
}

export default Comment;
