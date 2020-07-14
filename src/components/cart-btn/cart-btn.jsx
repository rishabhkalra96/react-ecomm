import React from 'react';
import './cart-btn.scss';
import cartBtnImg from './shopping-cart.svg';

export const CartButton = (props) => {
    return (
        <button className="cart-btn" onClick={props.clickEvent}>
            <img src={cartBtnImg} alt="cart button"/>
    <span className="notification-count">
        <p>{props.cartItems || 4}</p>
        </span>
        </button>
    )
}