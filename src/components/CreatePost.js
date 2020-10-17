import React, { useState, useEffect, useRef } from 'react';

import Page from './Page'
import PostEditor from './PostEditor'
import CustomAlert from './CustomAlert'
import SubmitButton from './SubmitButton'

import AuthService from '../services/auth.service.js'
import BlogPostService from '../services/blogPost.service.js'

import { fontSize, colors } from '../styles'

const styles = {
  title: {
    fontSize: fontSize.xxLarge,
    color: colors.red,
    border: 'none',
    width: '90%',
    textAlign: 'center'
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
      setIsWaiting(false)
    }

    return (
      <div className="contact">
        <SaveAlert isSaveSuccessful={isSaveSuccessful} showAlert={showAlert} setShowAlert={setShowAlert}/>
        <Page 
            title={
              <textarea 
                name="title" 
                className="blog-post-title-input" 
                placeholder="Title..."
                style={styles.title}
                onChange={(event) => setTitle(event.target.value)}
              />
            }
            child={<PostEditor setEditorInstance={setEditorInstance}/>}
        />
        <SubmitButton isWaiting={isWaiting} handleSave={handleSave}/>
      </div>
    );
  }
  
export default CreatePost;

