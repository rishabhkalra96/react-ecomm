import React from 'react';
import './ui-btn.scss';

export const UiButton = (props) => {
    return (
    <button className="ui-button" style={props.UIStyle} onClick={props.onBtnClick}>{props.text || 'Button'}</button>
    )
}