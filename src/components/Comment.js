import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import moment from 'moment'

import likeIcon from '../like-icon.png'; 
import binIcon from '../bin-icon.svg'; 
import { colors, fontSize, device } from '../styles'


function Comment({ author, date, content, likesCount, currentUser }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const [isLiked, setIsLiked] = useState(false)
    const [isRemoved, setIsRemoved] = useState(false)
    const [isRemovedAnimation, setIsRemovedAnimation] = useState(false)
    
    const styles = {
        container: {
            border: '1px solid black',
            borderRadius: '5px',
            padding: '10px',
            marginTop:  '30px',
            transform: (isRemovedAnimation ? 'scaleY(0)' : 'scaleY(1)'),
            transition: 'all .4s ease-in-out',
            display: (isRemoved && 'none'),
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
            cursor: 'pointer',
            transform: (isLiked ? 'scale(1.75)' : 'scale(1)'),
            transition: 'all .1s ease-in-out',
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
            color: colors.red,
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        binIcon: {
            height: '20px',
            width: '20px',
            display: 'inline',
            cursor: 'pointer',
            transform: (isRemoved ? 'scale(1.75)' : 'scale(1)'),
            transition: 'all .1s ease-in-out',
        }
    }

    const handleLikeClick = () => {
        setIsLiked(true)
        setTimeout(() => {setIsLiked(false)}, 1000);
    }

    const handleDeleteClick = () => {
        setIsRemovedAnimation(true)
        setTimeout(() => {setIsRemoved(true)}, 1000);
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
                    <img 
                        src={likeIcon}
                        alt="like"
                        style={styles.likeIcon}
                        onClick={() => handleLikeClick()}
                    />
                    <span style={styles.likeCounter}>{likesCount ? likesCount : 0}</span>
                </div>
                <div className="comment-actions-reply" style={styles.reply}>
                    {author === currentUser && <span className="comment-actions-delete" style={styles.delete}>
                        <img 
                            src={binIcon}
                            alt="delete"
                            style={styles.binIcon}
                            onClick={() => handleDeleteClick()}
                        />
                    </span>}
                    <span className="comment-actions-reply" style={styles.reply}>reply</span>
                </div>
            </div>
        </div>
    );
}

export default Comment;
