import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './card-item.scss'
import defaultImage from './image_NA.png'
import Ratings from './../ratings/ratings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function CardItem(props) {
    const [productImage, setProductImage] = useState(defaultImage)

    useEffect(() => {
        if (props.imageUrl) {
            setProductImage(props.imageUrl)
        }

    }, [props.imageUrl])

    const handleHover = (e) => {
        e.preventDefault()
        // start the slideshow and make the images full width
    }

    const handleRatingsClick = (e) => {
        console.log('clicked on ratings', e)
    }
    return (
        <div className="cardItem-wrapper" onMouseOver={handleHover}>
            <div className="cardItem-container">
                <div className="cardItem-card-top">
                    <div className="cardItem-card-top-micro"></div>
                    <div className="cardItem-card-top-macro">
                        <img src={productImage} alt="product-representation"/>
                    </div>
                </div>
                <div className="cardItem-card-body">
                        <p className="cardItem-card-body-desc">
                        <b>A perfect image for your home</b>
                        </p>
                    <p className="cardItem-card-body-creator">
                        <span>By </span> Artistic Boys
                    </p>
                    <div className="cardItem-ratings">
                        <Ratings count={5} filled={Math.floor((Math.random() * 5) + 1)} hoverEffect={true} ratingsCount={Math.floor((Math.random() * 500) + 1)} clickHandler={handleRatingsClick}/>
                    </div>
                    <div className="cartItem-desc">
                        <p>
                            This is a body description for the content which can be very long, is it really supposed to be that long ? so in that case we have to trim the extra data that is overflowing. i dont know what to do
                        </p>
                    </div>
                    <div className="cartItem-price-container">
                        <p className="price-core">
                            <span className="currency-code">Rs.</span>
                            200
                            <span className="pre-discount">
                            <span className="currency-code">Rs.</span>
                            300
                            </span>
                        </p>
                        <div className="cart-container">
                        <FontAwesomeIcon icon={faCartPlus} />
                        </div>

                    </div>
                    <div className="other-details">
                            <p className="coupon-container">+ {Math.floor((Math.random() * 5) + 1)} coupons available</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
