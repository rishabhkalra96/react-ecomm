import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './slide-show.scss'

export const SlideShow = (props) => {

    function visitSlideRoute(image) {
        console.log('image clicked is ', image.route_to)
    }

    const getSlider = (images) => {
        const option = {
            showIndicators: false,
            autoPlay: true,
            showThumbs: false,
            showArrows: false,
            showStatus: false,
            transitionTime: '700',
            interval: '5000',
            infiniteLoop: true,
            swipeable: true,
            emulateTouch: true,
        }
        return <Carousel {...option}>
            {
                images.map(image => {
                    let color = { backgroundColor: image.hasOwnProperty('color') ? image.color : 'black' }
                    return <div
                        className="carousel-image-container" style={color}
                        key={image.id}
                        onClick={() => visitSlideRoute(image)}
                    >
                        <img src={image.url} alt={`banner_image ${image.alt}`} />
                    </div>
                })}
        </Carousel>
    }
    return (
        props?.source ?
        <div className="slideshow-container">
            <div className="slideshow-wrapper">
                {getSlider(props.source)}
            </div>
        </div> : null
    )
}
