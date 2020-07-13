import React from 'react';
import sidebarIcon1 from './sidebar_1.svg';
import './hamburger-btn.scss';

export class HamburgerBtn extends React.Component{

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <button className="hamburger-btn" onClick={this.props.itemClick}>
                <img src={sidebarIcon1} alt="hambuger button" />
            </button>
        )
    }
}