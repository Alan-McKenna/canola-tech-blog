import React from 'react';

import { button } from '../styles'

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
    submit: button
}


function ContactForm() {
    
  return (
    <form id="contact-form" style={styles.container} method="POST">
        <div className="form-group" >
            <label htmlFor="name">Name</label>
            <input style={styles.inputField} type="text" />
        </div>
        <div>
            <label htmlFor="exampleInputEmail1">Email</label>
            <input style={styles.inputField} type="email" aria-describedby="emailHelp" />
        </div>
        <div >
            <label htmlFor="message">Message</label>
            <textarea style={styles.inputField} rows="5" />
        </div>
        <button type="submit" style={styles.submit}>Submit</button>
    </form>
  );
}

export default ContactForm;
