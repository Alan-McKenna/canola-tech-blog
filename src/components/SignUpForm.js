import React from 'react';
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
    const history = useHistory()
    // history.push(_config.routes.admin)
    
    return (
        <form id="sign-up-form" style={styles.container} method="POST">
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input style={styles.inputField} type="text" />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input style={styles.inputField} type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input style={styles.inputField} type="text" />
            </div>
            <button type="submit" style={styles.submit}>Submit</button>
            <p>Already have an account? <span style={styles.link}  onClick={() => setIsNewUser(false)}>Sign In</span></p>
        </form>
    );
}

export default SignUpForm;
