import React from 'react';
import { useMediaQuery } from 'react-responsive'

import { colors, fontSize, device } from '../constants'

function Page({ title, child }) {
    const isMobile = useMediaQuery({ query: `(max-width: ${device.mobile})` })
  
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
            width: (isMobile ? '100%' :'60%'),
            paddingLeft: (isMobile ? '0%' :'20%'),
            paddingRight: (isMobile ? '0%' :'20%'),
            paddingTop: 30,
            paddingBottom: '6%',
            textAlign: 'center',
        },
    }


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
