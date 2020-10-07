import React from 'react';
import { NavLink } from "react-router-dom";

const styles = {
    container: {
        display: 'inline-block',
        margin: 15,
    },
    navLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
}

function HeaderNavLink( { navLink }) {
    
  return (
    <div className="header-nav-link" style={styles.container}>
        <NavLink to={navLink.url} style={styles.navLink}>
            {navLink.name}
        </NavLink>
    </div>
  );
}

export default HeaderNavLink;
