import React from 'react';
import './side-bar.scss';
import CloseBtn from './../shared/close-btn/close-btn.jsx';

export class Sidebar extends React.Component {

    closeSidebar = () => {
        console.log('clicked on close')
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    generatelistItems(items) {
        return (
            <div className="items-container">
                {
                items.map((item, index) => {
                    return <div key={'sidebar_item_'+index} className="sidebar-item">
                        <div className="flex-item item-center">
                            <p className="item-name">
                            {item.name}
                            </p>
                        </div>
                    </div>
                })
                }
            </div>
        )
    }

    generateSidebarTemplate = (sidebarData, sidebarClasses) => {

        if (sidebarData) {
            return (
                <div className={sidebarClasses}>
                    <CloseBtn onClick={this.closeSidebar} classes={'button-right-extreme'}/>
                    <div className="sidebar-title flex-item item-center space-evenly">
                        <p>
                            {'Hi, Yashneet'}
                        </p>
                    </div>
                    <div className="sidebar-body">
                        {this.generatelistItems(sidebarData)}
                    </div>
                </div>
            )
        }
    }

    render() {
        let backdropClasses = ''
        let sidebarClasses = 'sidebar-container'
        if (this.props.show) {
            backdropClasses = 'show'
            sidebarClasses = 'sidebar-container show'
        }
        return (
            <React.Fragment>
                <div className={'sidebar-backdrop ' + backdropClasses} onClick={this.closeSidebar}>
                </div>
                {this.generateSidebarTemplate(this.props.data, sidebarClasses)}
            </React.Fragment>
        )
    }
}