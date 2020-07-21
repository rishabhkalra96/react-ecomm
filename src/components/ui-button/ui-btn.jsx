import React from 'react';
import './ui-btn.scss';

export const UiButton = (props) => {
    return (
    <button 
    className="ui-button border-0 w-16 h-10 text-ui-btn-default items-center cursor-pointer transition duration-500" 
    style={props.UIStyle} 
    onClick={props.onBtnClick}>{props.text || 'Button'}</button>
    )
}