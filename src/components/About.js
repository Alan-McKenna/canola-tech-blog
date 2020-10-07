import React from 'react';

import { colors } from '../constants'

const styles = {
    container: {
    },
    title: {
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        textAlign: 'center'
    },
    contentContainer: {
        backgroundColor: colors.beige,
        width: '60%',
        paddingLeft: '20%',
        paddingRight: '20%',
        paddingTop: 30,
        paddingBottom: 30,
        textAlign: 'center'
    },
    content: {
        gridColumn: '2',
        backgroundColor: 'inherit',
        textAlign: 'left'
    },
}

function About() {
    
  return (
    <div className="about" style={styles.container}>
        <div className="about-title" style={styles.title}>
            About
        </div>
        <div className="about-content-container" style={styles.contentContainer}>
            <div style={styles.contentContainer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    </div>
  );
}

export default About;
