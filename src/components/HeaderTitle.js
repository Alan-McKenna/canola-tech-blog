import React from 'react';
import { useHistory } from "react-router-dom";

import { fontSize, routes } from '../constants'

const styles = {
    container: {
        margin: '1vw',
        fontSize: fontSize.large,
        cursor: 'pointer',
    }
}

function HeaderNavTitle( { title }) {
  const history = useHistory()
  
  function goHome() {
    history.push(routes.home)
  }

  return (
    <div className="header-nav-title" style={styles.container}
      onClick={() => goHome()}
    >
        {title}
    </div>
  );
}

export default HeaderNavTitle;
