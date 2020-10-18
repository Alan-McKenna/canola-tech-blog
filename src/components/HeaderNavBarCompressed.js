import React from 'react';

import HeaderNavLink from './HeaderNavLink'
import useComponentVisible from './useComponentVisible'

import { colors, fontSize } from '../styles'

const styles = {
    container: {
        textAlign: 'right',
    },
    expandedContainer: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        textAlign: 'right',
        backgroundColor: colors.white,
        zIndex: 10
    },
    navMenuButton: {
        cursor: 'pointer',
        padding: 20,
        fontSize: fontSize.large
    }
}

function HeaderNavBarCompressed( { navLinks, isAuthenticated }) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    

  return (
    <div className="header-nav-bar" 
        ref={ref}
        style={isComponentVisible ? styles.expandedContainer : styles.container} 
    >
        <div 
            style={styles.navMenuButton}
            className="nav-menu-button"
            onClick={() => setIsComponentVisible(!isComponentVisible)}
        >
            &times;
        </div>
        { isComponentVisible
        &&
        navLinks.map((navLink, index) => {
            if ((!navLink.protected && (navLink.name.toLowerCase() !=="login")) 
                || (!isAuthenticated && (navLink.name.toLowerCase() ==="login")) 
                || (navLink.protected && isAuthenticated)) {
                return (
                    <div key={index}>
                        <HeaderNavLink
                            setIsComponentVisible={setIsComponentVisible}
                            navLink={navLink}
                        />
                    </div>
                )
            } else {
                return (<span key={index}></span>)
            }
        })
        }
    </div>
  );
}

export default HeaderNavBarCompressed;
