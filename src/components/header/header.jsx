import React from "react";
import './header.scss'


export class Header extends React.Component {

    render() {
        return (
            <div className="header-container">
                <section className="left-section">
                    <p>Left</p>
                </section>
                <section className="middle-section">
                <p>Middle</p>
                </section>
                <section className="right-section">
                <p>right</p>
                </section>
            </div>
        )
    }
}