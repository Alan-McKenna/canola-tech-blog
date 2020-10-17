import React, { useState, useEffect, useRef } from 'react';

import Page from './Page'
import PostEditor from './PostEditor'
import CustomAlert from './CustomAlert'
import SubmitButton from './SubmitButton'

import AuthService from '../services/auth.service.js'
import BlogPostService from '../services/blogPost.service.js'

import { fontSize, colors, tooltip } from '../styles'

const styles = {
  title: {
    fontSize: fontSize.xxLarge,
    color: colors.red,
    border: 'none',
    width: '90%',
    textAlign: 'center'
  },
  tooltip: tooltip,
  titleTooltip: {
    width: '20%',
    marginRight: '60%',
    marginLeft: '20%',
    position: 'relative',
  },
}

function SaveAlert({ isSaveSuccessful, showAlert, setShowAlert }) {
  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
      {isSaveSuccessful && showAlert
        ? <CustomAlert message={`Successfully created post`} type={'success'} handleCloseAlert={handleCloseAlert}/>
        : !isSaveSuccessful && showAlert
        ? <CustomAlert message={`Failed to create post`} type={'error'} handleCloseAlert={handleCloseAlert}/>
        : <></>
      }
    </>
  )
}

function CreatePostTitle({ setTitle, title, isWaiting }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const firstUpdate = useRef(true);

  useEffect(() => {
    if (!firstUpdate.current && !title) {
      setShowTooltip(true)
    } else if (title) {
      setShowTooltip(false)
    }
    firstUpdate.current = false;
  }, [isWaiting, title]);

  return (
    <>
      <textarea 
        name="title" 
        className="blog-post-title-input" 
        placeholder="Title..."
        style={styles.title}
        onChange={(event) => setTitle(event.target.value)}
      />
      {showTooltip &&
        <div style={{...styles.tooltip, ...styles.titleTooltip}}>Post must have a title</div>
      }
    </>
  )
}

function CreatePost() {
    const [title, setTitle] = useState("")
    const [isSaveSuccessful, setIsSaveSuccessful] = useState(true);
    const [showAlert, setShowAlert] = useState(false)
    const [isWaiting, setIsWaiting] = useState(false);
    const [editorInstance, setEditorInstance] = useState("");
    const firstUpdate = useRef(true);

    useEffect(() => {
      if (!firstUpdate.current) {
        setShowAlert(true)
      }
      firstUpdate.current = false;
    }, [firstUpdate, isSaveSuccessful]);

    async function handleSave() {
      setIsWaiting(true)
      if (title) {
        const savedData = await editorInstance.save();
        const post = {
            title: title,
            author: AuthService.getCurrentUser(),
            comments: [],
            tags: [],
            blocks: savedData.blocks,
        }
        const isSaveSuccessful = await BlogPostService.save(post)
        setIsSaveSuccessful(isSaveSuccessful)
      }
      setTimeout(() => {setIsWaiting(false)}, 1);
    }

    return (
      <div className="contact">
        <SaveAlert isSaveSuccessful={isSaveSuccessful} showAlert={showAlert} setShowAlert={setShowAlert}/>
        <Page 
            title={<CreatePostTitle setTitle={setTitle} title={title} isWaiting={isWaiting}/>}
            child={<PostEditor setEditorInstance={setEditorInstance}/>}
        />
        <SubmitButton isWaiting={isWaiting} handleSave={handleSave}/>
      </div>
    );
  }
  
export default CreatePost;

