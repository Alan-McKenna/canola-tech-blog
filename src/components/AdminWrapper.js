import React from 'react';

import ToolbarNavLink from './ToolbarNavLink'

import { colors } from '../styles'

import config from '../config'
const _config = config[process.env.NODE_ENV];

function AdminToolbar({ navLinks }) {
    
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
        {navLinks.map((navLink, index) => {
            return (
                <ToolbarNavLink
                    key={index}
                    navLink={navLink}
                />
            )
        })
        }
    </div>
  );
}

function AdminWrapper({ component: Component, ...props }) {
    
  const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '120px auto',
        gridTemplateRows: 'minmax(100vh, 100%)',
    },
    content: {
      gridColumn: '2',
    }
  }

  return (
    <div style={styles.container}>
      <AdminToolbar navLinks={_config.adminToolbarLinks}/>

      <div className={'admin-page-content'} style={styles.content}>
        <Component {...props} /> 
      </div>
    </div>
  );
}

export default AdminWrapper;
