import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import { fontSize, colors, device } from '../styles'


const styles = {
    dialogBox: {
        zIndex: 1,
        margin: 'auto',
        padding: '2%',
        borderRadius: '15px',
    },
    header: {
        color: colors.white,
        fontWeight: 'bold',
    },
    message: {
        color: colors.white,
    }
}

function WarningAlert( { message }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })

    const warningStyles = {
        dialogBox: {
            width: (isTablet ? '80%' : '30%'),
            backgroundColor: colors.warningYellow
        }
    }
    return (
        <div className="dialog-box" style={{...styles.dialogBox, ...warningStyles.dialogBox}}>
            <p style={styles.header}>Warning!</p>
            <p style={styles.message}>{message}</p>
        </div>
    )
}

function ErrorAlert( { message }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
    const errorStyles = {
        dialogBox: {
            width: (isTablet ? '80%' : '30%'),
            backgroundColor: colors.errorRed
        }
    }
    return (
        <div className="dialog-box" style={{...styles.dialogBox, ...errorStyles.dialogBox}}>
            <p style={styles.header}>Error!</p>
            <p style={styles.message}>{message}</p>
        </div>
    )
}

function SuccessAlert( { message }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
    const successStyles = {
        dialogBox: {
            width: (isTablet ? '80%' : '30%'),
            backgroundColor: colors.successGreen
        }
    }
    return (
        <div className="dialog-box" style={{...styles.dialogBox, ...successStyles.dialogBox}}>
            <p style={styles.header}>Success!</p>
            <p style={styles.message}>{message}</p>
        </div>
    )
}

function InfoAlert( { message }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
    const infoStyles = {
        dialogBox: {
            width: (isTablet ? '80%' : '30%'),
            backgroundColor: colors.infoBlue
        }
    }
    return (
        <div className="dialog-box" style={{...styles.dialogBox, ...infoStyles.dialogBox}}>
            <p style={styles.header}>Info</p>
            <p style={styles.message}>{message}</p>
        </div>
    )
}

function CustomAlert( { message, type, handleCloseAlert, timeout }) {
    if(!timeout) timeout = 3000;
    const [closeHover, setCloseHover] = useState(false)
    
    const styles = {
        container: {
            position: 'fixed',
            zIndex: 1,
            paddingTop: '100px',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'auto',
            backgroundColor: colors.opaqueBlack,
        },
        closeButton: {
            position: 'absolute',
            top: 10,
            right: 10,
            color: (closeHover ? colors.white : colors.grey),
            fontSize: fontSize.xLarge,
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none'
        }
    }

    useEffect(() => {
        setTimeout(() => {
            handleCloseAlert()
        }, timeout);
    },[handleCloseAlert, timeout])

    return (
        <div className="customer-alert" style={styles.container}>
            <div 
                style={styles.closeButton}
                onMouseEnter={() => setCloseHover(!closeHover)}
                onMouseLeave={() => setCloseHover(!closeHover)}
                onClick={() => handleCloseAlert()}
            >
                &times;
            </div>
            {
                type === 'warning' 
                ? <WarningAlert message={message}/>
                : type === 'error' 
                ? <ErrorAlert message={message}/>
                : type === 'success' 
                ? <SuccessAlert message={message}/>
                : <InfoAlert message={message}/>
            }
        </div>
    );
}

export default CustomAlert;
