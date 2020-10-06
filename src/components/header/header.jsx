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
import {useState, useEffect} from 'react';

export const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [sidebarConfig, setSidebarConfig] = useState(null);
    const setRedirectToLogin = useState(false)[1];
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

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const cartClickEvent = () => {
        console.log('clicked')
    }

    const login = () => {
        console.log('login')
        setIsLoggedIn(true)
        setRedirectToLogin(true)
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
                        <CartButton route={'/cart'} clickEvent={cartClickEvent} />
                        {
                        isLoggedIn ? 
                        null : 
                        <Link to="/login" >
                            <UiButton UIStyle={UIBtnCSS} text={'Login'} onBtnClick={login} />
                        </Link>
                        }
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