import React from "react";
import './header.scss'
// components
import { CommonFeatureSearch } from "./../common-feature-search/common-feature-search"
import { HamburgerBtn } from "../shared/hamburger-btn/hamburger-btn";
import { CartButton } from "../cart-btn/cart-btn";
import { UiButton } from "../ui-button/ui-btn";
import { Sidebar } from "../side-bar/side-bar";
// services
import { SidebarService } from './../../services/sidebar-service';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { AuthContext, logout } from './../../providers/auth-provider';
import { useHistory } from 'react-router-dom'
export const Header = () => {
    const Auth = useContext(AuthContext);
    const [showSidebar, setShowSidebar] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(Auth.isLoggedIn);
    const [sidebarConfig, setSidebarConfig] = useState(null);
    const history = useHistory()
    const UIBtnCSS = {
        "backgroundColor": "#494D5F",
        "color": "white",
    };

    useEffect(() => {
        async function caller() {
            const config = await getSideBarData()
            if (config.length) {
                setSidebarConfig(config);
            } else {
                setSidebarConfig(null);
            }
        }
        caller()
    }, [])

    useEffect(() => {
        setIsLoggedIn(Auth.isLoggedIn)
    }, [Auth.isLoggedIn])

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const cartClickEvent = () => {
        console.log('clicked')
    }

    const logUserOut = async () => {
        await logout()
        history.push('/')

    }

    return (
        <React.Fragment>
            <div className="header-container">
                <section className="left-section">
                    <HamburgerBtn itemClick={toggleSidebar} />
                </section>
                <section className="middle-section">
                    <CommonFeatureSearch />
                </section>
                <section className="right-section">
                    <div className="right-container">
                        {
                            isLoggedIn ? <React.Fragment>
                                <CartButton route={'/cart'} clickEvent={cartClickEvent} />
                                <UiButton UIStyle={UIBtnCSS} text={'Logout'} onBtnClick={logUserOut} />
                            </React.Fragment>
                                :
                                <Link to="/login" >
                                    <UiButton UIStyle={UIBtnCSS} text={'Login'} />
                                </Link>
                        }
                        {isLoggedIn ? <Link to="/home">
                            <UiButton UIStyle={UIBtnCSS} text={'Home'} />
                        </Link> : null}
                    </div>
                </section>
            </div>
            <Sidebar
                show={showSidebar}
                data={sidebarConfig}
                onClose={toggleSidebar}
            />
        </React.Fragment>
    )
}

async function getSideBarData() {
    const response = await SidebarService.fetchSidebarLocal()
    if (response && response.status === 200) {
        return response.data;
    } else {
        console.error('No data for sidebar')
        return []
    }
}