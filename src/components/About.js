import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Page from './Page'

import { about } from '../constants'
import { fontSize, device } from '../styles'



function About() {
  const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
  const styles = {
    content: {
          padding: (isTablet ? 30: 0),
          fontSize: fontSize.medium,
          textAlign: 'justify',
          textJustify: 'inter-word',
          lineHeight: '32px',
          letterSpacing: '-0.003em',

    },
  }
    return (
      <div className="about">
          <Page 
              title={about.title}
              child={<div style={styles.content}>{about.content}</div>}
          />
      </div>
    );
}

export default About;
