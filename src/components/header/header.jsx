import React from "react";
import './header.scss'
import { CommonFeatureSearch } from "./../common-feature-search/common-feature-search"
import { HamburgerBtn } from "../shared/hamburger-btn/hamburger-btn";
import { CartButton } from "../cart-btn/cart-btn";
import { UiButton } from "../ui-button/ui-btn";
import { Sidebar } from "../side-bar/side-bar";

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
            isLoggedIn: false,
            UIBtnCSS: {
                "backgroundColor": "#494D5F",
                "color": "white",
            }
        }
    }

    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
    }

    cartClickEvent = () => {
        console.log('clicked')
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-container">
                    <section className="left-section">
                        <HamburgerBtn itemClick={this.toggleSidebar} />
                    </section>
                    <section className="middle-section">
                        <CommonFeatureSearch />
                    </section>
                    <section className="right-section">
                        <div className="right-container">
                            <CartButton route={'/cart'} clickEvent={this.cartClickEvent} />
                            <UiButton UIStyle={this.state.UIBtnCSS} text={'Login'} />
                        </div>
                    </section>
                </div>
                <Sidebar show={this.state.showSidebar} onClose={this.toggleSidebar}/>
            </React.Fragment>
        )
    }
}