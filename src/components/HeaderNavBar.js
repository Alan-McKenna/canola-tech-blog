import React from 'react';

import HeaderNavLink from './HeaderNavLink'

const styles = {
    container: {
        textAlign: 'right'
    }
}

function HeaderNavBar( { navLinks, isAuthenticated }) {
    
  return (
    <div className="header-nav-bar" style={styles.container}>
        {navLinks.map((navLink, index) => {
            if ((!navLink.protected && (navLink.name.toLowerCase() !=="login")) 
                || (!isAuthenticated && (navLink.name.toLowerCase() ==="login")) 
                || (navLink.protected && isAuthenticated)) {
                return (
                    <HeaderNavLink
                        key={index}
                        navLink={navLink}
                    />
                )
            } else {
                return (<span key={index}></span>)
            }
        })
        }
    </div>
  );
}

export default HeaderNavBar;
