import React from 'react';
import { useMediaQuery } from 'react-responsive'

import HeaderTitle from './HeaderTitle'
import HeaderNavBar from './HeaderNavBar'
import HeaderNavBarCompressed from './HeaderNavBarCompressed'
import HeaderNavLink from './HeaderNavLink'

import { device } from '../styles'


function AuthHeader({ isAuthenticated }) {
    const styles = {
        auth: {
            marginTop: 'auto',
            marginBottom: 'auto',
            gridColumn: '2',
            textAlign: 'right',
        }
    }

    return (
        <div style={styles.auth}>
            {isAuthenticated
            ? <HeaderNavLink navLink={{ name: "Logout", url: "/logout", protected: true }}/>
            : <HeaderNavLink navLink={{ name: "Login", url: "/auth", protected: false }}/>
            }
        </div>
    );
}

function AppHeader({ title, navLinks, isAuthenticated }) {
    const isMobile = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
    const styles = {
        container: {
            height: '8vh',
            display: 'grid',
            gridTemplateColumns: '40% auto 50px',
            boxShadow: (isMobile ? '0' : '0 5px 5px 0 rgba(0, 0, 0, 0.1)'),
            verticalAlign: 'middle'
        },
        title: {
            marginTop: 'auto',
            marginBottom: 'auto',
            gridColumn: '1'
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

            <AuthHeader isAuthenticated={isAuthenticated} />
            
            {isMobile 
            ?
            <div style={styles.navBar}>
                <HeaderNavBarCompressed navLinks={navLinks} isAuthenticated={isAuthenticated} />
            </div>
            :
            <div style={styles.navBar}>
                <HeaderNavBarCompressed navLinks={navLinks} isAuthenticated={isAuthenticated} />
            </div>
            }
        </div>
    );
}

export default AppHeader;
