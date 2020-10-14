import React from 'react';

import { NavLink } from "react-router-dom";

import { link } from '../styles'

const styles = {
    container: {
    },
    tag: link,
}


function TagLink({ tag }) {
    
    return (
        <NavLink style={styles.tag} to="#">{tag}</NavLink>
    );
  }
  
export default TagLink;
