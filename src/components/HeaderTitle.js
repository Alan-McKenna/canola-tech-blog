import React from 'react';
import { useHistory } from "react-router-dom";

import { fontSize } from '../styles'

import config from '../config'
const _config = config[process.env.NODE_ENV];

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
    history.push(_config.routes.home)
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
