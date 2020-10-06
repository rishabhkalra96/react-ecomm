import React, { useEffect } from 'react';
import './content-body.scss';
import { ContentBodyService } from './../../services/content-body-service'
import SlideShow from '../shared/slide-show/slide-show';
import {CardCarousel} from '../shared/card-carousel/card-carousel';
import { useState } from 'react';

export const ContentBody = () => {

    const [bannerUrls, setBannerUrls] = useState([]);

    useEffect(() => {
        const urls = ContentBodyService.slideUrls()
        setBannerUrls(urls)
    }, [])

    const getBannerTemplates = (urls) => {
        return urls.map((url, idx) => {
            return <SlideShow source={url} key={"slider_" + idx} />
        })
    }

    const getCategories = () => {
        return (
            <React.Fragment>
                <CardCarousel title={'Recommended Items'} />
                <CardCarousel title={'Best Selling'} />
                <CardCarousel title={'Recently Added'} />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="content-container">
                {bannerUrls.length && getBannerTemplates(bannerUrls)}
                {getCategories()}
            </div>
        </React.Fragment>
    )
}

