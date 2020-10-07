import React from 'react';

import HeaderNavLink from './HeaderNavLink'

const styles = {
    container: {
        textAlign: 'right'
    }
}

function HeaderNavBar( { navLinks }) {
    
  return (
    <div className="header-nav-bar" style={styles.container}>
        {navLinks.map((navLink, index) => {
            return (
                <HeaderNavLink
                    key={index}
                    navLink={navLink}
                />
            )
        })
        }
    </div>
  );
}

export default HeaderNavBar;
