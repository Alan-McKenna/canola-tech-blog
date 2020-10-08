import React, { useState } from 'react';

import HeaderNavLink from './HeaderNavLink'
import useComponentVisible from './useComponentVisible'

import { colors } from '../constants'

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
        padding: 20
    }
}

function HeaderNavBarMobile( { navLinks }) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    

  return (
    <div className="header-nav-bar" 
        ref={ref}
        style={isComponentVisible ? styles.expandedContainer : styles.container} 
    >
        { isComponentVisible
        ?
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
        :
        <div 
            style={styles.navMenuButton}
            className="nav-menu-button"
            onClick={() => setIsComponentVisible(true)}
        >
            X
        </div>
        }
    </div>
  );
}

export default HeaderNavBarMobile;
