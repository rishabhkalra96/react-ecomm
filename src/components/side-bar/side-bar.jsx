import React, {useContext, useEffect, useState} from 'react';
import './side-bar.scss';
import CloseBtn from './../shared/close-btn/close-btn.jsx';
import ProfileBtn from './../shared/profile-btn/profile-btn.jsx';
import {AuthContext} from './../../providers/auth-provider'
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
    const Auth = useContext(AuthContext)
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    useEffect(() => {
        setUserLoggedIn(Auth.isLoggedIn)
    }, [Auth.isLoggedIn])

    let backdropClasses = ''
        let sidebarClasses = 'sidebar-container'

    const closeSidebar = () => {
        console.log('clicked on close')
        if (props.onClose) {
            props.onClose()
        }
    }

    const generatelistItems = (items) => {
        return (
            <div className="items-container">
                {
                items.map((item, index) => {
                    if (item.protected) {
                        return userLoggedIn ? <div key={'sidebar_item_'+index} className="sidebar-item">
                        <Link to={item.route} >
                        <div className="flex-item item-center">
                            <p className="item-name">
                            {item.name}
                            </p>
                        </div>
                        </Link>
                    </div> : null 
                    }
                    return <div key={'sidebar_item_'+index} className="sidebar-item">
                    <Link to={item.route} >
                    <div className="flex-item item-center">
                        <p className="item-name">
                        {item.name}
                        </p>
                    </div>
                    </Link>
                </div>
                })
                }
            </div>
        )
    }

    const generateSidebarTemplate = (sidebarData, sidebarClasses) => {

        if (sidebarData) {
            return (
                <div className={sidebarClasses}>
                    <CloseBtn onClick={closeSidebar} classes={'button-right-extreme'}/>
                    <div className="sidebar-title flex-item item-center space-evenly">
                        <div className="title-content-wrapper flex-item item-center">
                        <ProfileBtn />
                        <p className="title-content">
                            {userLoggedIn ? `Hi, ${Auth.currentUser?.displayName}`: 'Not Logged In'}
                        </p>
                        </div>
                    </div>
                    <div className="sidebar-body">
                        {generatelistItems(sidebarData)}
                    </div>
                </div>
            )
        }
    }

    function renderer() {
        if (props.show) {
            backdropClasses = 'show'
            sidebarClasses = 'sidebar-container show'
        }
        return (
            <React.Fragment>
                <div className={'sidebar-backdrop ' + backdropClasses} onClick={closeSidebar}>
                </div>
                {generateSidebarTemplate(props.data, sidebarClasses)}
            </React.Fragment>
        )
    }

    return renderer();
}