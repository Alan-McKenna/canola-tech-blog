import React from 'react';

import { colors, fontSize } from '../constants'

const styles = {
    container: {
    },
    title: {
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: fontSize.xxLarge,
    },
    contentContainer: {
        backgroundColor: colors.beige,
        width: '60%',
        paddingLeft: '20%',
        paddingRight: '20%',
        paddingTop: 30,
        paddingBottom: '6%',
        textAlign: 'center',
    },
}

function Page({ title, child }) {
    
  return (
    <div className="page" style={styles.container}>
        <div className="page-title" style={styles.title}>
            {title}
        </div>
        <div className="page-content-container">
            <div style={styles.contentContainer}>
                {child}
            </div>
        </div>
    </div>
  );
}

export default Page;
