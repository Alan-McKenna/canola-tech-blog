import React, { useState } from 'react';

import Page from './Page'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


const styles = {
    container: {
    },
}


function AuthPage({ isAuthenticated, setIsAuthenticated }) {
  const [ isNewUser, setIsNewUser ] = useState(false);
    
  return (
    <div style={styles.container} >
        <Page 
            title={isNewUser ? "Sign Up" : "Sign In"}
            child={isNewUser 
                    ? <SignUpForm 
                        setIsNewUser={setIsNewUser}
                        setIsAuthenticated={setIsAuthenticated}
                      /> 
                    : <SignInForm 
                        setIsNewUser={setIsNewUser}
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                      />
                }
        />
    </div>
  );
}

export default AuthPage;