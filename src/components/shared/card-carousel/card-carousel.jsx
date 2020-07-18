import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './card-carousel.scss';
import Slider from "react-slick";
import CardItem from './../card-item/card-item';
import PrevBtn from './prev-btn/prev-btn';
import NextBtn from './next-btn/next-btn';
import {UiButton} from './../../ui-button/ui-btn.jsx';


export default class CardCarousel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            slickSettings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 3,
                prevArrow: <PrevBtn />,
                nextArrow: <NextBtn />,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                        }
                      },
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
              },
            actionBtnCss: {
                "backgroundColor": "#494D5F",
                "color": "white",
                "width": "90px"
            }
        }
    }

    viewAll = () => {
        console.log('clicked view all for ', this.props)
    }

    render() {
        return (
            <div className="card-carousel-slick">
                <div className="extra-information">
                <p className="card-carousel-title">{this.props?.title || 'New Categories'}</p>
                <UiButton UIStyle={this.state.actionBtnCss} text={'View More'} onBtnClick={this.viewAll} />
                </div>
                <Slider {...this.state.slickSettings}>
                   {[1,2,3,4,5,6,7,8,9,0].map(v => <CardItem key={v}/>)}
                </Slider>
            </div>
        )
    }
}