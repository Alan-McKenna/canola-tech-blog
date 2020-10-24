import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import { colors, fontSize, device, button } from '../styles'


function UserProfile({ isAuthenticated }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const styles = {
        container: {
            color: colors.black,
            margin: 'auto',
        },
    }

    return (
        <div className="user-profile" style={styles.container}>
        </div>
    );
}

export default UserProfile;