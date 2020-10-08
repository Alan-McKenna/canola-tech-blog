import React from 'react';

import { NavLink } from "react-router-dom";

import { colors } from '../constants'

const styles = {
    container: {
    },
    tag: {
      color: colors.red,
      textDecoration: 'underline'
    },
}


function TagLink({ tag }) {
    
    return (
        <NavLink style={styles.tag} to="#">{tag}</NavLink>
    );
  }
  
export default TagLink;
