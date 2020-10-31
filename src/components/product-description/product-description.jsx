import React, {useState, useEffect} from 'react'
import './product-description.scss'
import {useParams} from 'react-router-dom' 
import {coreService} from './../../services/core-service'
import {coreDBService} from './../../services/core-db-service'

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

    const renderTemplate = (currentProduct) => {
        if (fetchingStatus) {
            return <p>Fetching data from servers....</p>
        }
        return <div>
            <p>
            This is product page {productID}
            </p>
            {
                currentProduct && currentProduct.ok && currentProduct.status === 200 ? 
                <p>
            {JSON.stringify(currentProduct, null, '\t')}
            </p> : null
            }
    </div>
    }


    return (
        renderTemplate(currentProduct)
    )
}
