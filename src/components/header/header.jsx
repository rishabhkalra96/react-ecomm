import React from "react";
import './header.scss'
import {CommonFeatureSearch} from "./../common-feature-search/common-feature-search"

export class Header extends React.Component {

    render() {
        return (
            <div className="header-container">
                <section className="left-section">
                    <p>Left</p>
                </section>
                <section className="middle-section">
                <CommonFeatureSearch />
                </section>
                <section className="right-section">
                <p>right</p>
                </section>
            </div>
        )
    }
}