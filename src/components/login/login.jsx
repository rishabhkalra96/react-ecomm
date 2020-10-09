import React, { useState, useContext } from 'react';
import './login.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {AuthContext, loginWithGoogle, firebaseInstance, loginWithFacebook} from './../../providers/auth-provider'
import {useHistory} from 'react-router-dom';

export const Login = (props) => {
    const formType = useState(props.formType)[0]
    const [passwordType, setPasswordType] = useState('password');
    const [iconToDisplay, setIconToDisplay] = useState(faEye);
    const setMessage = useState('')[1];
    const setOpen = useState(false)[1];
    const formHook = useFormHook()
    const Auth = useContext(AuthContext)
    const history = useHistory()

    const showUserPassword = () => {
        if (passwordType === 'text') {
            setPasswordType('password')
            setIconToDisplay(faEye)
        } else {
            setPasswordType('text')
            setIconToDisplay(faEyeSlash)
        }
    }

    const handleFormChange = (e) => {
        const newData = {
            ...formHook.formData,
            [e.target.name]: e.target.value
        }
        formHook.setFormData(newData)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        console.log(formHook.formData)
        if (formType === 'login') {
            try {
                await firebaseInstance.auth().signInWithEmailAndPassword(formHook.formData.email, formHook.formData.password)
                setMessage('Successfully logged in')
                setOpen(true)
                formHook.setFormData({})
                history.push('/')
            } catch(error) {
                console.error('Error occured while logginf in ', error)
            }
        }
    }

    const loginViaGoogle = async (e) => {
        e.preventDefault()
        try {
            const response = await loginWithGoogle()
            console.log('recieved response as ', response)
            setMessage('Successfully logged in via google')
            setOpen(true)
        } catch (error) {
            console.log('error while google sign in', error)
        }
    }

    const loginViaFB = async (e) => {
        e.preventDefault()
        try {
            const response = await loginWithFacebook()
            console.log('recieved response as ', response)
            setMessage('Successfully logged in via google')
            setOpen(true)
        } catch (error) {
            console.log('error while google sign in', error)
        }
    }

    /* const handleClose = () => {} */

    const renderSpecificForm = () => {
        if (Auth.isLoggedIn) {
        return <h3>Welcome back {Auth.currentUser.email}</h3>
        } else {
            if (formType === 'login') {
                return <div className="login-wrapper">
                    <form action="post">
                        <div className="input-value username">
                            <label htmlFor="email">Email</label>
                            <input name="email" placeholder="john@doe.com" onChange={handleFormChange}/>
                        </div>
                        <div className="input-value username">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={iconToDisplay} onClick={showUserPassword} />
                                <input name="password" type={passwordType} placeholder="***" onChange={handleFormChange}/>
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="login" onClick={submitForm}>Login</button>
                        </div>
                        <div className="button-container">
                            <button className="loginGoogle" onClick={loginViaGoogle}>Login with Google</button>
                        </div>
                        <div className="button-container">
                            <button className="loginGoogle" onClick={loginViaFB}>Login with Facebook</button>
                        </div>
                    </form>
                </div>
            }
            return <div className="signup-wrapper">Signup form</div>
        }
    }
    return (<div className="login-wrapper">
        <div className="formAccessWrapper">
            {renderSpecificForm()}
        </div>
        {/* <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      /> */}
    </div>
    )
}

function useFormHook() {
    const [formData, setFormData] = useState({})
    return {
        formData, setFormData
    }
}