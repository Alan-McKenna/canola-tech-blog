import React from 'react';

const styles = {
    container: {
        margin: 15
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
