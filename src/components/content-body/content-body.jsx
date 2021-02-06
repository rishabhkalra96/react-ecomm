import React, { useEffect } from 'react';
import './content-body.scss';
import { ContentBodyService } from './../../services/content-body-service'
import { SlideShow } from '../shared/slide-show/slide-show';
import { CardCarousel } from '../shared/card-carousel/card-carousel';
import { useState } from 'react';
import { coreService } from './../../services/core-service'
import { useHistory } from 'react-router-dom';
import { coreDBService } from './../../services/core-db-service';
import CONSTANTS from './../../config/constants';

export const ContentBody = () => {
    const [bannerUrls, setBannerUrls] = useState([]);
    const [bodyStrips, setBodyStrips] = useState([]);
    const history = useHistory()

    useEffect(() => {
        coreService.asyncHandler(ContentBodyService.getBannerImages, setBannerUrls)
        coreService.asyncHandler(ContentBodyService.getBodyStrips, setBodyStrips, CONSTANTS.BODY_STRIPS_ITEMS)
    }, [])

    const actionOnProduct = async (event) => {
        try {
            console.log(event);
            switch (event.type) {
                case CONSTANTS.DELETE_ITEM_ACTION:
                    {
                        const response = await coreDBService.deleteProducFromInventory(event.product.id);
                        if (response.status === 200) {
                            console.log('product deleted');
                            // refresh the items
                            coreService.asyncHandler(ContentBodyService.getBodyStrips, setBodyStrips, CONSTANTS.BODY_STRIPS_ITEMS)
                        } else {
                            console.error('An error detected whlie deleting product ', response);
                        }
                        break;
                    }
                case CONSTANTS.EDIT_ITEM_ACTION:
                    {   history.push(`/product/edit/${event.product.id}`)
                        break;
                    }
                default: {
                    console.log('invalid action, will not respond')
                }

            }
        } catch (e) {
            console.error('An error detected whlie performing action on product from code', e.toString());
        }
    }

    const getCategories = () => {
        return (
            <React.Fragment>
                {
                    bodyStrips.length ?
                        bodyStrips.map((strip, i) => <CardCarousel title={strip.category_name} items={strip.items} onCardAction={actionOnProduct} key={i} />)
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

