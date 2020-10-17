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

function SignUpAlert({ isRegistered, showAlert, setShowAlert, username }) {
    const handleCloseAlert = () => {
      setShowAlert(false)
    }
  
    return (
      <>
        {showAlert && isRegistered
            ? <CustomAlert message={`Successfully registered ${username}`} type={'success'} handleCloseAlert={handleCloseAlert}/>
            : showAlert && !isRegistered
            ? <CustomAlert message={`Failed to register ${username}`} type={'error'} handleCloseAlert={handleCloseAlert}/>
            : <></>
        }
      </>
    )
}

function SignUpForm({ setIsNewUser, setIsAuthenticated }) {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isUsernameValid, setIsUsernameValid] = useState(false)
    const [isPasswordValid, setsPasswordValid] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submissionCount, setSubmissionCount] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const [isRegistered, setIsRegistered] = useState(false)
    
    const history = useHistory()

    useEffect(() => {
        setIsEmailValid(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                        .test(email))
    }, [email]);

    useEffect(() => {
        setIsUsernameValid(new RegExp(/^[a-zA-Z0-9]+$/)
                        .test(username))
    }, [username]);

    useEffect(() => {
        setsPasswordValid(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
                        .test(password))
    }, [password]);

    useEffect(() => {
        if(isRegistered) {
            setIsAuthenticated(true)
            history.push(_config.routes.home)
        }
    }, [isRegistered, setIsAuthenticated, history]);
    
    useEffect(() => {
        const handleSubmit = async () => {
            const _isRegistered = await AuthService.register(username, email, password)
            setIsRegistered(_isRegistered)
            setShowAlert(true)
        }
        
        if(isSubmitting) {
            if(isEmailValid && isUsernameValid && isPasswordValid) {
                handleSubmit()
            } else{
            }
            setIsSubmitting(false)
        }
    }, [isSubmitting, isEmailValid, isUsernameValid, isPasswordValid, username, email, password]);

    
    return (
        <div id="sign-up-form" style={styles.container}>
            <SignUpAlert isRegistered={isRegistered} showAlert={showAlert} setShowAlert={setShowAlert} username={username}/>
            
            <div style={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input style={styles.inputField} type="email" onChange={(event) => setEmail(event.target.value)}/>
                {!isEmailValid && submissionCount > 0 &&
                    <div style={styles.tooltip}>Must be valid email</div>
                }
            </div>
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
            
            <p>Already have an account? <span style={styles.link} onClick={() => setIsNewUser(false)}>Sign In</span></p>
        </div>
    );
}

export default SignUpForm;
