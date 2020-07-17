import React from 'react';
import './side-bar.scss';

export class Sidebar extends React.Component {

    closeSidebar = () => {
        console.log('clicked on close')
        if (this.props.onClose) {
            this.props.onClose()
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
                <div className={sidebarClasses}>
                </div>
            </React.Fragment>
        )
    }
}