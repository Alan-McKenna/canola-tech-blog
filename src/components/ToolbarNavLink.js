import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import { fontSize, colors } from '../styles'

function ToolbarNavLink( { navLink }) {
    const [hover, setHover] = useState(false)

    const styles = {
        navLink: {
            textDecoration: 'none',
            textDecorationColor: 'none',
            color: colors.white,
            backgroundImage: `linear-gradient(to right, ${colors.red} 50%, ${colors.opaqueBlack} 50%)`,
            transition: 'background-position 0.75s',
            fontSize: fontSize.medium,
            display: 'inline-block',
            paddingTop: 30,
            paddingBottom: 30,
            paddingLeft: '10%',
            paddingRight: '10%',
            width: '80%',
            backgroundSize: '200% 100%',
        },
        onHover: {
            backgroundPosition: '-100% 0'// (hover ? colors.opaqueBlack : colors.red),

        }
    }

  return (
    <>
        <NavLink 
            to={navLink.url}
            style={{...styles.navLink, ...(hover ? styles.onHover : {})}}
            activeStyle={styles.navLink}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {navLink.name}
        </NavLink>
    </>
  );
}

export default ToolbarNavLink;
