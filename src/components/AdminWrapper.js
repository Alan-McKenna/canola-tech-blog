import React from 'react';

import { colors } from '../styles'

function AdminToolbar({ component: Component, ...props }) {
    
  const styles = {
    toolbar: {
      gridColumn: '1',
      backgroundColor: colors.opaqueBlack,
      height: '100%',
      width: '100%',
    },
  }

  return (
    <div className={'toolbar'} style={styles.toolbar}>

    </div>
  );
}

function AdminWrapper({ component: Component, ...props }) {
    
  const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '100px auto',
        gridTemplateRows: '100vh',
    },
    content: {
      gridColumn: '2',
    }
  }

  return (
    <div style={styles.container}>
      <AdminToolbar/>

      <div className={'admin-page-content'} style={styles.content}>
        <Component {...props} /> 
      </div>
    </div>
  );
}

export default AdminWrapper;
