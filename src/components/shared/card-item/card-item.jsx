import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './card-item.scss'
import defaultImage from './image_NA.png'
import Ratings from './../ratings/ratings'

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
                    <div className="cardItem-card-body-micro"></div>
                </div>
            </div>
        </div>
    )
}
