import React from 'react';
import { useMediaQuery } from 'react-responsive'

import HeaderTitle from './HeaderTitle'
import HeaderNavBar from './HeaderNavBar'
import HeaderNavBarMobile from './HeaderNavBarMobile'

import { device } from '../styles'



function AppHeader({ title, navLinks, isAuthenticated }) {
    const isMobile = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
    const styles = {
        container: {
            height: '8vh',
            display: 'grid',
            boxShadow: (isMobile ? '0' : '0 5px 5px 0 rgba(0, 0, 0, 0.1)'),
            verticalAlign: 'middle'
        },
        title: {
            position: 'absolute',
            top: 10,
            left: 10,
        },
        navBar: {
            marginTop: 'auto',
            marginBottom: 'auto',
            gridColumn: '3'
        }
    }

    return (
        <div className="app-header" style={styles.container}>
            <div style={styles.title}>
                <HeaderTitle title={title} />
            </div>
            {isMobile 
            ?
            <div style={styles.navBar}>
                <HeaderNavBarMobile navLinks={navLinks} isAuthenticated={isAuthenticated} />
            </div>
            :
            <div style={styles.navBar}>
                <HeaderNavBar navLinks={navLinks} isAuthenticated={isAuthenticated} />
            </div>
            }
        </div>
    );
}

export default AppHeader;
