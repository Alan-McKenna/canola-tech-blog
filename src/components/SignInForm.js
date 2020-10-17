import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import CustomAlert from './CustomAlert'

import AuthService from '../services/auth.service.js'
import { button, link, colors } from '../styles'

import config from '../config'
const _config = config[process.env.NODE_ENV];

const styles = {
    container: {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        color: 'inherit',
    },
    inputContainer: {
        marginBottom: '35px',
    },
    inputField: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginTop: '6px',
        resize: 'vertical',
    },
    link: link,
    submit: button,
    tooltip: {
        textAlign: 'left',
        position: 'absolute',
        padding: 5,
        margin: 5,
        color: colors.white,
        backgroundColor: colors.red,
        borderRadius: '5px',
    }
}

function SignInAlert({ isAuthenticated, showAlert, setShowAlert, username }) {
    const handleCloseAlert = () => {
      setShowAlert(false)
    }
  
    return (
      <>
        {showAlert && isAuthenticated
            ? <CustomAlert message={`Successfully authenticated ${username}`} type={'success'} handleCloseAlert={handleCloseAlert}/>
            : showAlert && !isAuthenticated
            ? <CustomAlert message={`Failed to authenticate ${username}`} type={'error'} handleCloseAlert={handleCloseAlert}/>
            : <></>
        }
      </>
    )
}

function SignInForm({ setIsNewUser, isAuthenticated, setIsAuthenticated }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isUsernameValid, setIsUsernameValid] = useState(false)
    const [isPasswordValid, setsPasswordValid] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submissionCount, setSubmissionCount] = useState(0)
    const [showAlert, setShowAlert] = useState(false)

    const history = useHistory()

    useEffect(() => {
        setIsUsernameValid(new RegExp(/^[a-zA-Z0-9]+$/)
                        .test(username))
    }, [username]);

    useEffect(() => {
        setsPasswordValid(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
                        .test(password))
    }, [password]);
    
    useEffect(() => {
        if(isAuthenticated) {
            setIsAuthenticated(true)
            history.push(_config.routes.home)
        }
    }, [isAuthenticated, setIsAuthenticated, history]);
    
    useEffect(() => {
        const handleSubmit = async () => {
            const _isAuthenticated = await AuthService.login(username, password)
            setIsAuthenticated(_isAuthenticated)
            setShowAlert(true)
        }
        
        if(isSubmitting) {
            if(isUsernameValid && isPasswordValid) {
                handleSubmit()
            } else{
            }
            setIsSubmitting(false)
        }
    }, [isSubmitting, isUsernameValid, isPasswordValid, username, password, setIsAuthenticated]);


    return (
        <div id="sign-up-form" style={styles.container}>
            <SignInAlert isAuthenticated={isAuthenticated} showAlert={showAlert} setShowAlert={setShowAlert} username={username}/>
            <div style={styles.inputContainer}>
                <label htmlFor="username">Username</label>
                <input style={styles.inputField} type="text" onChange={(event) => setUsername(event.target.value)}/>
                {!isUsernameValid && submissionCount > 0 &&
                    <div style={styles.tooltip}>Must only contain alphanumeric characters with no spaces</div>
                }
            </div>
            <div style={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input style={styles.inputField} type="password" onChange={(event) => setPassword(event.target.value)}/>
                {!isPasswordValid && submissionCount > 0 &&
                    <div style={styles.tooltip}>Must contain at least one number and special character [!@#$%^&*]</div>
                }
            </div>
            {/* spacer */}
            <div style={{height: 30}}></div>
            {/* spacer */}
            <button 
                style={styles.submit}
                onClick={() => {
                    setIsSubmitting(true)
                    setSubmissionCount(submissionCount + 1)
                }}
            >Submit
            </button>
            
            <p>Don't have an account? <span style={styles.link} onClick={() => setIsNewUser(true)}>Sign Up</span></p>
        </div>
    );
}

export default SignInForm;
