import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { button, link } from '../styles'

import config from '../config'
const _config = config[process.env.NODE_ENV];

const styles = {
    container: {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        color: 'inherit',
    },
    inputField: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginTop: '6px',
        marginBottom: '16px',
        resize: 'vertical',
    },
    link: link,
    submit: button
}


function SignUpForm({ setIsNewUser }) {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isUsernameValid, setIsUsernameValid] = useState(false)
    const [isPasswordValid, setsPasswordValid] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const history = useHistory()
    // history.push(_config.routes.admin)

    useEffect(() => {
        setIsEmailValid(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                        .test(email))
    }, [email]);

    useEffect(() => {
        setIsUsernameValid(new RegExp(/^[a-zA-Z0-9]+$/)
                        .test(username))
    }, [username]);

    useEffect(() => {
        setsPasswordValid(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
                        .test(password))
    }, [password]);
    
    useEffect(() => {
        const handleSubmit = () => {
        }
        
        if(isSubmitting && isEmailValid && isUsernameValid && isPasswordValid) {
            console.log('inputs are valid')
            handleSubmit()
        } else if (isSubmitting) {
            console.log('inputs are not valid')
        }
        setIsSubmitting(false)
    }, [isSubmitting, isEmailValid, isUsernameValid, isPasswordValid]);


    return (
        <div id="sign-up-form" style={styles.container}>
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input style={styles.inputField} type="email" onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input style={styles.inputField} type="text" onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input style={styles.inputField} type="password" onChange={(event) => setPassword(event.target.value)}/>
            </div>
            
            <button 
                style={styles.submit}
                onClick={() => setIsSubmitting(true)}
            >Submit
            </button>
            
            <p>Already have an account? <span style={styles.link}  onClick={() => setIsNewUser(false)}>Sign In</span></p>
        </div>
    );
}

export default SignUpForm;
