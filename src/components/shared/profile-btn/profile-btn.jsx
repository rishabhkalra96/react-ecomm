import React from 'react'
import './profile-btn.scss';
import profileBtnImg from './profile-icon.svg';

export default function ProfileBtn(props) {
    return (
        <div className={'close-button ' + (props['classes'] || '')} onClick={props.onClick}>
            <img src={profileBtnImg} alt="close button icon" />
        </div>
    )
}