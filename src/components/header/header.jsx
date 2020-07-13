import React from "react";
import './header.scss'
import {CommonFeatureSearch} from "./../common-feature-search/common-feature-search"
import { HamburgerBtn } from "../shared/hamburger-btn/hamburger-btn";

export class Header extends React.Component {

    render() {
        return (
            <div className="header-container">
                <section className="left-section">
                    <HamburgerBtn />
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