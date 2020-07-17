import React from 'react'
import './close-btn.scss';
import closeBtnImg from './close_icon.svg';

export default function CloseBtn(props) {
    return (
        <div className={'close-button ' + (props['classes'] || '')} onClick={props.onClick}>
            <img src={closeBtnImg} alt="close button icon" />
        </div>
    )
}