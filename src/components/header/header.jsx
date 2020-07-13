import React from "react";
import './header.scss'
import {CommonFeatureSearch} from "./../common-feature-search/common-feature-search"
import { HamburgerBtn } from "../shared/hamburger-btn/hamburger-btn";

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
            isLoggedIn: false
        }
    }

    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
        console.log('sidebar now is ', this.state.showSidebar)
    }

    render() {
        return (
            <div className="header-container">
                <section className="left-section">
                    <HamburgerBtn itemClick={this.toggleSidebar}/>
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