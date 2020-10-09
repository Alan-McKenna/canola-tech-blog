import React from 'react';

import Page from './Page'

import { about } from '../constants'
import { fontSize } from '../styles'

const styles = {
  content: {
        fontSize: fontSize.medium

  },
}


function About() {
    
  return (
    <div className="about">
        <Page 
            title={about.title}
            child={<span style={styles.content}>{about.content}</span>}
        />
    </div>
  );
}

export default About;
