import React, { Component } from 'react'
import './card-item.scss'

export default class CardItem extends Component {
    render() {
        return (
            <div className="cardItem-wrapper">
                <div className="cardItem-container">
                    <div className="cardItem-card-top">
                        <div className="cardItem-card-top-micro"></div>
                        <div className="cardItem-card-top-macro"></div>
                    </div>
                    <div className="cardItem-card-body">
                        <div className="cardItem-card-body-desc"></div>
                        <div className="cardItem-card-body-creator"></div>
                        <div className="cardItem-card-body-micro"></div>
                        <div className="cardItem-card-body"></div>
                    </div>
                </div>
            </div>
        )
    }
}
