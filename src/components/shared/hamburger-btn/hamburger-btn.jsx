import React from 'react';
import sidebarIcon1 from './sidebar_1.svg';
import './hamburger-btn.scss';

export function HamburgerBtn() {
    return (
        <button className="hamburger-btn">
            <img src={sidebarIcon1} alt="hambuger button" />
        </button>
    )
}