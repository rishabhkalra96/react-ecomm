import React from "react";
import './header.scss'
// components
import { CommonFeatureSearch } from "./../common-feature-search/common-feature-search"
import { HamburgerBtn } from "../shared/hamburger-btn/hamburger-btn";
import { CartButton } from "../cart-btn/cart-btn";
import { UiButton } from "../ui-button/ui-btn";
import { Sidebar } from "../side-bar/side-bar";
// services
import {SidebarService} from './../../services/sidebar-service';

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
            isLoggedIn: false,
            UIBtnCSS: {
                "backgroundColor": "#494D5F",
                "color": "white",
            },
            sidebarConfig: null
        }
    }

    async componentDidMount() {
        console.log('component mounted')
        const response = await SidebarService.fetchSidebarLocal()
        if (response && response.status === 200) {
            console.log('data recieved ', response)
            this.setState({
                sidebarConfig: response.data
            })
        } else {
            console.error('No data for sidebar')
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

    login = () => {
        console.log('login')
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
                            <UiButton UIStyle={this.state.UIBtnCSS} text={'Login'} onBtnClick={this.login}/>
                        </div>
                    </section>
                </div>
                <Sidebar 
                    show={this.state.showSidebar}
                    data={this.state.sidebarConfig}
                    onClose={this.toggleSidebar}
                    />
            </React.Fragment>
        )
    }
}