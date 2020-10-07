import React from 'react';

import Page from './Page'
import ContactForm from './ContactForm'

import { contact } from '../constants'


function Contact() {
    
    return (
      <div className="contact">
          <Page 
              title={contact.title}
              child={<ContactForm />}
          />
      </div>
    );
  }
  
  export default Contact;