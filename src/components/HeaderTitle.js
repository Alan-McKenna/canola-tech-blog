import React from 'react';

import { fontSize } from '../constants'

const styles = {
    container: {
        margin: '1vw',
        fontSize: fontSize.large
    }
}

function HeaderNavTitle( { title }) {
    
  return (
    <div className="header-nav-title" style={styles.container}>
        {title}
    </div>
  );
}

export default HeaderNavTitle;
