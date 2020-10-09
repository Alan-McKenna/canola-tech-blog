import React from 'react';

import { colors } from '../styles'

const styles = {
    container: {
        height: '25vh',
        backgroundColor: colors.black,
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
}

function AppFooter() {
    
  return (
    <div className="app-footer" style={styles.container}>
    </div>
  );
}

export default AppFooter;
