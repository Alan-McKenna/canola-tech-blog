import React from 'react';

import HeaderNavLink from './HeaderNavLink'
import useComponentVisible from './useComponentVisible'

import { colors, fontSize } from '../styles'

const styles = {
    container: {
        textAlign: 'right',
    },
    expandedContainer: {
        position: 'relative',
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

function HeaderNavBarMobile( { navLinks }) {
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
            X
        </div>
        { isComponentVisible
        &&
        navLinks.map((navLink, index) => {
            return (
                <div key={index}>
                    <HeaderNavLink
                        setIsComponentVisible={setIsComponentVisible}
                        navLink={navLink}
                    />
                </div>
            )
        })
        }
    </div>
  );
}

export default HeaderNavBarMobile;
