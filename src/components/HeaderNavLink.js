import React from 'react';
import { NavLink } from "react-router-dom";

const styles = {
    container: {
        display: 'inline-block',
        margin: 20,
    },
    navLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
}

function HeaderNavLink( { navLink, setIsComponentVisible }) {
    
  return (
    <div 
        className="header-nav-link" 
        style={styles.container} 
        onClick={ setIsComponentVisible ? () => setIsComponentVisible(false) : undefined}
    >
        <NavLink to={navLink.url} style={styles.navLink}>
            {navLink.name}
        </NavLink>
    </div>
  );
}

export default HeaderNavLink;
