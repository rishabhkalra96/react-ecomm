import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './card-item.scss'
import defaultImage from './image_NA.png'

export default function CardItem(props) {
    const [productImage, setProductImage] = useState(defaultImage)

    useEffect(() => {
        if (props.imageUrl) {
            setProductImage(props.imageUrl)
        }

    }, [props.imageUrl])
    return (
        <div className="cardItem-wrapper">
            <div className="cardItem-container">
                <div className="cardItem-card-top">
                    <div className="cardItem-card-top-micro"></div>
                    <div className="cardItem-card-top-macro">
                        <img src={productImage} alt="product-representation"/>
                    </div>
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
