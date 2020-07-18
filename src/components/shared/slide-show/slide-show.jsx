import React from 'react'
import {ContentBodyService} from './../../../services/content-body-service'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './slide-show.scss'

export default class slideShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            sliderTemplate: null,
        }
    }

    async componentDidMount() {
        if (this.props.source) {
            try {
                const response = await ContentBodyService.fetchSliderImages(this.props.source, true)
                if (Array.isArray(response) && response.length) {
                    const parsedImages = ContentBodyService.parseResponseForSliders(response)
                    console.log('parsed images look like ', parsedImages)
                    const template = this.getSlider(parsedImages)
                        this.setState({
                            sliderTemplate: template
                        })
                }
            } catch(sliderErr) {
                console.error('An error occured while rendering slider using the url ' + this.props.source)
            }
        }
    }

    visitSlideRoute = (image) => {
        console.log('image clicked is ', image)
    }

    getSlider = (images) => {
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
        return <Carousel 
                    {...option}
                    >
            {images.map(image => {
            return <div 
            className="carousel-image-container" 
            key={image.id}
            onClick={() => this.visitSlideRoute(image)}
            >
                <img src={image.url} alt={`banner_image ${image.alt}`} />
            </div>
        })}
        </Carousel>
    }
    render() {
        return (
            this.props?.source &&
            <div className="slideshow-container">
                <div className="slideshow-wrapper">
                    {this.state.sliderTemplate}
                </div>
            </div>
        )
    }
}
