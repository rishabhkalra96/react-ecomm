import React, { useEffect } from 'react';
import './content-body.scss';
import { ContentBodyService } from './../../services/content-body-service'
import { SlideShow } from '../shared/slide-show/slide-show';
import {CardCarousel} from '../shared/card-carousel/card-carousel';
import { useState } from 'react';
import {coreService} from './../../services/core-service'

export const ContentBody = () => {
    const [bannerUrls, setBannerUrls] = useState([]);
    const [bodyStrips, setBodyStrips] = useState([]);

    useEffect(() => {
        coreService.asyncHandler(ContentBodyService.getBannerImages, setBannerUrls)
        coreService.asyncHandler(ContentBodyService.getBodyStrips, setBodyStrips, ['Recommended Items', 'Best Selling', 'Recently Added'])
    }, [])

    useEffect(() => {
    }, [bodyStrips])

    const getCategories = () => {
        return (
            <React.Fragment>
                {
                    bodyStrips.length ? 
                    bodyStrips.map((strip,i) => <CardCarousel title={strip.category_name} items={strip.items} key={i}/>)
                    : null
                }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="content-container">
                {bannerUrls.length && <SlideShow source={bannerUrls} />}
                {getCategories()}
            </div>
        </React.Fragment>
    )
}

