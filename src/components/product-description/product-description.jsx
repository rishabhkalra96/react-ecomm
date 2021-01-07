import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContentBodyService } from './../../services/content-body-service'
import { coreDBService } from './../../services/core-db-service'
import { getProductReviews } from './../../services/product-description-service'
import { coreService } from './../../services/core-service'
import { CustomAccordion } from './../custom-accordion/custom-accordion'
import './product-description.scss'
import Button from '@material-ui/core/Button';

export const ProductDescription = () => {
    const [productID] = useState(useParams().productID)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [fetchingStatus, setFetchingStatus] = useState(true)
    const [productReviews, setProductReviews] = useState('fetching')

    useEffect(() => {
        // get all details of current product
        if (productID) {
            coreService.asyncHandler(coreDBService.getProductDetailsByID, setCurrentProduct, productID)
            coreService.asyncHandler(getProductReviews, setProductReviews, productID)
        }
    }, [productID])

    useEffect(() => {
        if (currentProduct) {
            setFetchingStatus(false)
        } else {
            setFetchingStatus(true)
        }
    }, [currentProduct])

    const getProductTemplate = (currentProduct) => {
        return (
            <div className="product-container-inner">
                <div className="product-section-left">
                    <div className="product-main-image-container w-full h-full">
                        <img className="img-obj w-full h-max-90" alt="product" src={currentProduct.image_url} />
                    </div>
                </div>
                <div className="product-section-right">
                    <div className="container">
                        <div className="owner-container mb-5">
                            <p className="product-name inline text-4xl">
                                {currentProduct.name}
                            </p>
                            <p className="product-owner inline ml-2">
                                by {currentProduct.owner_details.name}
                            </p>
                        </div>
                        <div className="product-discount-price">
                            <p className="inline mb-3">
                                Price Rs.{ContentBodyService.utilities.getDiscountedPrice(currentProduct.pricing_details.original_price, currentProduct.pricing_details.max_discount)}
                                <span> after {currentProduct.pricing_details.max_discount} % discount</span>
                            </p>
                        </div>
                        <p className="product-original-price">
                            Orignal Retail price : Rs. {currentProduct.pricing_details.original_price}
                        </p>
                        {
                            currentProduct.fullfilled_by ?
                                <p className="product-fullfillment">
                                    Fullfilled by : {currentProduct.fullfilled_by ? currentProduct.fullfilled_by.name : 'NA'}
                                </p> : null
                        }
                        <section className="expansion-container">
                        {
                                currentProduct.long_description ?
                                <div className="product-long-description">
                            <CustomAccordion items={[{ name: 'Description', text: currentProduct.long_description, type: 'normal' }]} /> 
                        </div> : null
                            }
                        {
                            currentProduct.has_specifications ?
                                <div className="product-specificatons">
                                    <CustomAccordion items={[{ name: 'Specifications', data: currentProduct.specifications, type: 'table' }]} />
                                </div> : null
                        }
                        {
                                currentProduct.has_reviews ?
                                <div className="product-reviews">
                            <CustomAccordion items={[{ name: 'Reviews', reviews: productReviews.length ? productReviews[0] : {}, type: 'reviews' }]} /> 
                        </div> : null
                            }
                        </section>
                        <div className="flex justify-center my-5 button-container">
                            <Button className="mr-4" variant="contained" color="secondary">Add to Cart</Button>
                            <Button variant="contained" color="primary">Buy Now</Button>
            </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderTemplate = (currentProduct) => {
        if (fetchingStatus) {
            return <p>Fetching data from servers....</p>
        }
        return <div className="product-container">
            {
                currentProduct && currentProduct.ok && currentProduct.status === 200 ?
                    getProductTemplate(currentProduct.data) : null
            }
        </div>
    }


    return (
        renderTemplate(currentProduct)
    )
}
