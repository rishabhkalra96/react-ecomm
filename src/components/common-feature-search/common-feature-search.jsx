import React from 'react'
import './common-feature-search.scss'
import {SearchBtn} from './../shared/search-btn/search-btn.jsx'

export class CommonFeatureSearch extends React.Component {
    render() {
        return (
            <div className="search-container">
            <div className="search">
                <input />
                <div className="button-container">
                    <SearchBtn />
                </div>
            </div>
        </div>
        )
    }
}