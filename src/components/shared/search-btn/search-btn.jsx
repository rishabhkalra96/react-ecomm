import React from 'react';
import './search-btn.scss';

import searchBtnIcon from './search_icon.svg'

export function SearchBtn() {
    return (
        <button className="search-button">
            <img src={searchBtnIcon} alt="search button"/>
        </button>
    )
}