import React from 'react';
import Loader from 'react-loader-spinner'

import { colors, button } from '../styles'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const styles = {
    button: button,
    submitContainer: {
      paddingBottom: '30px',
      backgroundColor: colors.beige,
      textAlign: 'center',
    },
    loaderContainer: {
      textAlign: 'center',
    }
  }

function SubmitButton({ isWaiting, handleSubmit, value }) {
    return (
        <div>
        {isWaiting
            ?   <Loader 
                    type="BallTriangle"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    style={styles.submitContainer}
                />
            
            :   <div onClick={() => handleSubmit()} style={styles.submitContainer}>
                    <input type="submit" value={(value ? value : "Submit")} style={styles.button}/>
                </div>
            }
        </div>
    )
}

export default SubmitButton;
