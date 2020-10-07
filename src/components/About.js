import React from 'react';

import Page from './Page'

import { about } from '../constants'

function About() {
    
  return (
    <div className="about">
        <Page 
            title={about.title}
            child={about.content}
        />
    </div>
  );
}

export default About;
