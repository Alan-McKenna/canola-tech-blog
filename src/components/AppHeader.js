import React from 'react';

import HeaderTitle from './HeaderTitle'
import HeaderNavBar from './HeaderNavBar'


const styles = {
    container: {
        height: '8vh',
        display: 'grid',
        boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.1)',
        verticalAlign: 'middle'
    },
    title: {
        marginTop: 'auto',
        marginBottom: 'auto',
        gridColumn: '1 / span 2'
    },
    navBar: {
        marginTop: 'auto',
        marginBottom: 'auto',
        gridColumn: '3'
    }
}

function AppHeader({ title, navLinks }) {

    return (
        <div className="app-header" style={styles.container}>
            <div style={styles.title}>
                <HeaderTitle title={title} />
            </div>
            <div style={styles.navBar}>
                <HeaderNavBar navLinks={navLinks} />
            </div>
        </div>
    );
}

export default AppHeader;
