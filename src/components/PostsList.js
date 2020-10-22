import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import moment from 'moment'

import BlogPostService from '../services/blogPost.service'
import { colors, button, fontSize } from '../styles'

import config from '../config'
const _config = config[process.env.NODE_ENV];


function RemovePrompt({ post, removePostFromList, setShowRemovePrompt }) {
    const [hover, setHover] = useState(false)
    
    const styles = {
        container: {
            position: 'fixed',
            zIndex: 99,
            paddingTop: '100px',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'auto',
            backgroundColor: colors.opaqueBlack,
        },
        promtContainer: {
            backgroundColor: colors.offWhite,
            padding: '30px',
            width: '40vw',
            margin: 'auto',
            borderRadius: '5px',
        },
        message: {
            color: colors.red,
            fontSize: fontSize.medium,
            paddingBottom: '30px',
        },
        buttonContainer: {
        },
        yesButton: {
            ...button,
            width: '30%',
            display: 'inline',
            marginLeft: '2%',
            marginRight: '2%',
            backgroundColor: (hover ? colors.red : colors.opaqueBlack),
            transition: 'all .2s ease-in-out',
        },
        noButton: {
            ...button,
            width: '30%',
            display: 'inline',
            marginLeft: '2%',
            marginRight: '2%',
            backgroundColor: (hover ? colors.opaqueBlack : colors.red),
            transition: 'all .2s ease-in-out',
        },
    }

    const handleRemove = () => {
        const removePost = async () => {
            const result = await BlogPostService.delete(post._id)
            if(result) removePostFromList(post)
        }
        setShowRemovePrompt(false)
        removePost()
    }

    return (
        <div style={styles.container} >
            <div style={styles.promtContainer} >
                <div style={styles.message}>Are you sure you want to remove "{post.title}"?</div>
                <div>
                    <div style={styles.noButton} onClick={() => setShowRemovePrompt(false)}>No</div>
                    <div 
                        style={styles.yesButton} 
                        onClick={() => handleRemove()}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >Yes</div>
                </div>
            </div>
        </div>
    )
}

function PostListItem({ post, setShowRemovePrompt }) {
    const [containerHover, setContainerHover] = useState(false)
    const [updateHover, setUpdateHover] = useState(false)
    const [removeHover, setRemoveHover] = useState(false)

    const history = useHistory()

    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: '40% 20% 20% 20%',
            width: '100%',
            backgroundColor: colors.white,
            color: colors.red,
            padding: '15px',
            marginTop: '5px',
            marginBottom: '5px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transform: (containerHover ? 'scale(1.01)' : 'scale(1)'),
            transition: 'all .1s ease-in-out',
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
            zIndex: 1,
            transition: 'all 0.25s ease-in-out',
        },
        remove: {
            backgroundColor: (removeHover ? colors.red : colors.white),
            color: (removeHover ? colors.white : colors.red),
        },
        update: {
            backgroundColor: (updateHover ? colors.red : colors.white),
            color: (updateHover ? colors.white : colors.red),
        },
    }

    const handleGoTo = (e) => {
        e.stopPropagation();
        history.push(`${_config.routes.post}/${post._id}/${post.title}`)
    }
    
    const handleRemove = (e) => {
        e.stopPropagation();
        setShowRemovePrompt(true)
    }

    
    const handleUpdate = (e) => {
        history.push(`${_config.routes.updatePost}/${post._id}`)
        e.stopPropagation();
    }
    
    return (
        <div 
            style={styles.container}
            onClick={(e) => handleGoTo(e)}
            onMouseEnter={() => setContainerHover(true)}
            onMouseLeave={() => setContainerHover(false)}
        >
            <span style={{...styles.section, ...styles.title}}>{post.title}</span>
            <span style={{...styles.section, ...styles.author}}>{post.author}</span>
            <span style={{...styles.section, ...styles.date}}>{moment(post.date).format('MMMM DD YYYY')}</span>
            <span style={{...styles.section, ...styles.actionsSection}}>
                <div 
                    style={{...styles.action, ...styles.remove}}
                    onClick={(e) => handleRemove(e)}
                    onMouseEnter={() => setRemoveHover(true)}
                    onMouseLeave={() => setRemoveHover(false)}
                >-</div>
                <div
                    style={{...styles.action, ...styles.update}}
                    onClick={(e) => handleUpdate(e)}
                    onMouseEnter={() => setUpdateHover(true)}
                    onMouseLeave={() => setUpdateHover(false)}
                >+</div>
            </span>

        </div>
    )
}

function PostsList({ posts, removePostFromList }) {
    const [remove, setRemove] = useState(false)
    const [showRemovePrompt, setShowRemovePrompt] = useState(false)
    const [counter, setCounter] = useState(0)
    
    const styles = {
        container: {
        }
    }

    useEffect(() => {
        setCounter(counter + 1)
        console.log(`counter=${counter}`)
        console.log(`posts=${posts.length}`)
    },[posts])

    return (
        <div style={styles.container}>
            {Array.isArray(posts) && posts[0] &&
                posts.map(function(post, index){
                    return (
                    <div  key={index} >
                        {showRemovePrompt && 
                            <RemovePrompt 
                                post={post}
                                removePostFromList={removePostFromList}
                                setShowRemovePrompt={setShowRemovePrompt}
                            />
                        }

                        <PostListItem 
                            post={post}
                            remove={remove}
                            setRemove={setRemove}
                            setShowRemovePrompt={setShowRemovePrompt}
                            removePostFromList={removePostFromList}
                        />
                    </div>
                    )
                }
            )}
        </div>
    );
}

export default PostsList;
