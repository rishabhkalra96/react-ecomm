import React, { useState } from 'react';
import './login.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export const Login = (props) => {
    const formType = useState(props.formType)[0]
    const [passwordType, setPasswordType] = useState('password');
    const [iconToDisplay, setIconToDisplay] = useState(faEye);
    const formHook = useFormHook()

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
        formHook.useFormData(newData)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(formHook.formData)
    }

    const renderSpecificForm = () => {
        if (formType === 'login') {
            return <div className="login-wrapper">
                <form action="post">
                    <div className="input-value username">
                        <label htmlFor="username">Username</label>
                        <input name="username" placeholder="val1" onChange={handleFormChange}/>
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
                </form>
            </div>
        }
        return <div className="signup-wrapper">Signup form</div>
    }
    return (<div className="login-wrapper">
        <div className="formAccessWrapper">
            {renderSpecificForm(formType, passwordType, iconToDisplay)}
        </div>
    </div>
    )
}

function useFormHook() {
    const [formData, useFormData] = useState({})
    return {
        formData, useFormData
    }
}