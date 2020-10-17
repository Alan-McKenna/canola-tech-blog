import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-loader-spinner'

import Page from './Page'
import PostEditor from './PostEditor'
import CustomAlert from './CustomAlert'

import AuthService from '../services/auth.service.js'
import BlogPostService from '../services/blogPost.service.js'

import { fontSize, colors, button } from '../styles'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const styles = {
  title: {
    fontSize: fontSize.xxLarge,
    color: colors.red,
    border: 'none',
    width: '90%',
    textAlign: 'center'
  },
  button: button,
  submitContainer: {
    paddingBottom: 30,
    backgroundColor: colors.beige,
    textAlign: 'center',
  }
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

function SubmitButton({ isWaiting, handleSave }) {

  return (
    <div>
      {isWaiting
        ?   <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
        
        :   <div onClick={() => handleSave()} style={styles.submitContainer}>
                <input type="submit" value="Save" style={styles.button}/>
            </div>
        }
    </div>
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
        console.log(`isSaveSuccessful=${isSaveSuccessful}`)
        setShowAlert(true)
      }
      firstUpdate.current = false;
    }, [firstUpdate, isSaveSuccessful]);

    useEffect(() => {
        console.log(`title=${title}`)
    }, [title]);
    useEffect(() => {
        console.log(`isSaveSuccessful=${isSaveSuccessful}`)
    }, [isSaveSuccessful]);

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
        console.log(`isSaveSuccessful=${isSaveSuccessful}`)
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

