import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './card-item.scss'
import defaultImage from './image_NA.png'
import Ratings from './../ratings/ratings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function CardItem({item}) {
    const [productImage, setProductImage] = useState(defaultImage)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (item) {
            setProduct(item)
            if (item.image_url) {
                setProductImage(item.image_url)
            }
        }

    }, [item])

    const handleHover = (e) => {
        e.preventDefault()
        // start the slideshow and make the images full width
    }

    const getDiscountedPrice = (original, percentageForDiscount) => {
        try {
            const numOrignal = parseInt(original, 10)
            const percentage = parseInt(percentageForDiscount, 10)
            return numOrignal - (percentage / 100)*numOrignal
        } catch (e) {
            return 'NA'
        }
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
                        <img src={productImage} alt={product ? product.name : ''}/>
                    </div>
                </div>
                <div className="cardItem-card-body">
                        <p className="cardItem-card-body-desc">
                        <b>{product? product.name : null}</b>
                        </p>
                    <p className="cardItem-card-body-creator">
                        <span>By </span> {product ? product.owner_details.created_by : null}
                    </p>
                    <div className="cardItem-ratings">
                        <Ratings count={5} filled={Math.floor((Math.random() * 5) + 1)} hoverEffect={true} ratingsCount={Math.floor((Math.random() * 500) + 1)} clickHandler={handleRatingsClick}/>
                    </div>
                    <div className="cartItem-desc">
                        <p>
                            {product ? product.short_description : null}
                        </p>
                    </div>
                    <div className="cartItem-price-container">
                        <p className="price-core">
                            <span className="currency-code">Rs.</span>
                            {product ? getDiscountedPrice(product.pricing_details.min, product.pricing_details.max_discount) : null}
                            <span className="pre-discount">
                            <span className="currency-code">Rs.</span>
                            {product ? product.pricing_details.min: null}
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
