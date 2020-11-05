import React, {useState, useEffect} from 'react'
import './product-description.scss'
import {useParams} from 'react-router-dom' 
import {coreService} from './../../services/core-service'
import {coreDBService} from './../../services/core-db-service'
import {ContentBodyService} from './../../services/content-body-service'
import {CustomAccordion} from './../custom-accordion/custom-accordion'
const customItems = [
    {
        name: 'Some name',
        text: 'this is the text that i want to dispay, now its your wish what you wanna do about it'
    }
]
export const ProductDescription = () => {
    const [productID] = useState(useParams().productID)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [fetchingStatus, setFetchingStatus] = useState(true)

    useEffect(() => {
        // get all details of current product
        if (productID) {
            coreService.asyncHandler(coreDBService.getProductDetailsByID, setCurrentProduct, productID)
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
                {JSON.stringify(currentProduct)}
                </div>
                <div className="product-section-right">
                    <div className="container">
                      <p className="product-name">
                          {currentProduct.name}
                      </p>
                      <p className="product-owner">
                          by {currentProduct.owner_details.created_by}
                      </p>
                      <div className="product-discount-price">
                          <p>
                          Rs. {ContentBodyService.utilities.getDiscountedPrice(currentProduct.pricing_details.min, currentProduct.pricing_details.max_discount)}
                          </p>
        <span> after {currentProduct.pricing_details.max_discount} % discount</span>
                      </div>
                      <p className="product-original-price">
                        Orignal Retail price : Rs. {currentProduct.pricing_details.min}
                          </p>
                          <CustomAccordion items={customItems}/>
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
