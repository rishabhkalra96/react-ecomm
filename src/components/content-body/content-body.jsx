import React, { useEffect } from 'react';
import './content-body.scss';
import { ContentBodyService } from './../../services/content-body-service'
import { SlideShow } from '../shared/slide-show/slide-show';
import { CardCarousel } from '../shared/card-carousel/card-carousel';
import { useState } from 'react';
import { coreService } from './../../services/core-service'
import { coreDBService } from './../../services/core-db-service';

export const ContentBody = () => {
    const [bannerUrls, setBannerUrls] = useState([]);
    const [bodyStrips, setBodyStrips] = useState([]);

    useEffect(() => {
        coreService.asyncHandler(ContentBodyService.getBannerImages, setBannerUrls)
        coreService.asyncHandler(ContentBodyService.getBodyStrips, setBodyStrips, ['Recommended Items', 'Best Selling', 'Recently Added'])
    }, [])

    const actionOnProduct = async (event) => {
        try {
            console.log(event);
            if (event.type === 'DELETE_ITEM') {
                const response = await coreDBService.deleteProducFromInventory(event.product.id);
                if (response.status === 200) {
                    console.log('product deleted');
                    // refresh the items
                    coreService.asyncHandler(ContentBodyService.getBodyStrips, setBodyStrips, ['Recommended Items', 'Best Selling', 'Recently Added'])
                } else {
                    console.error('An error detected whlie deleting product ', response);
                }
            }
        } catch (e) {
            console.error('An error detected whlie deleting product from code', e.toString());
        }
    }

    const getCategories = () => {
        return (
            <React.Fragment>
                {
                    bodyStrips.length ? 
                    bodyStrips.map((strip,i) => <CardCarousel title={strip.category_name} items={strip.items} onCardAction={actionOnProduct} key={i}/>)
                    : <CardCarousel title={undefined} items={undefined} />
                }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="content-container">
                <SlideShow source={bannerUrls} />
                {getCategories()}
            </div>
        </React.Fragment>
    )
}

