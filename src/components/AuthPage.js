import React, { useState } from 'react';

import Page from './Page'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


const styles = {
    container: {
    },
}


function AuthPage({ isAuthenticated, setIsAuthenticated, setIsAdmin }) {
  const [ isNewUser, setIsNewUser ] = useState(false);
    
  return (
    <div style={styles.container} >
        <Page 
            title={isNewUser ? "Sign Up" : "Sign In"}
            child={isNewUser 
                    ? <SignUpForm 
                        setIsNewUser={setIsNewUser}
                        setIsAuthenticated={setIsAuthenticated}
                        setIsAdmin={setIsAdmin}
                      /> 
                    : <SignInForm 
                        setIsNewUser={setIsNewUser}
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        setIsAdmin={setIsAdmin}
                      />
                }
        />
    </div>
  );
}

export default AuthPage;