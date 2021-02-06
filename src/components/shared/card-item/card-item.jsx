import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './card-item.scss'
import defaultImage from './image_NA.png'
import Ratings from './../ratings/ratings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import {ContentBodyService} from './../../../services/content-body-service'
import Skeleton from 'react-loading-skeleton';
import { OptionsMenu } from '../options-menu/options-menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {ActionDialog} from './../../shared/action-dialog/action-dialog';
import { AuthContext } from './../../../providers/auth-provider'
export default function CardItem({item, onCardClick, onAction}) {
    const Auth = React.useContext(AuthContext)
    const [productImage, setProductImage] = useState(defaultImage)
    const [product, setProduct] = useState(null)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const menuOptions = [
        {
            name: 'Edit',
            id: 'edit',
            selected: false,
        },
        {
            name: 'Delete',
            id: 'delete',
            selected: false,
        }
    ]

    useEffect(() => {
        if (item) {
            if (typeof item.getName !== 'function') {
                item.getName = function () {
                        return this.name;
                    }
                item.getDeleteMessage = function () {
                        return <p>
                            Are you sure you want to delete product "{this.getName()}" ? 
                        Once deleted, it can never be recovered.
                        </p>
                    }
            }
            setProduct(item)
            if (item.image_url) {
                setProductImage(item.image_url)
            }
        }

    }, [item])

    const handleOptionsClick = (e) => {
        e.stopPropagation();
        const clickedItemName = e.target.getAttribute('name');
        if (clickedItemName === 'delete') {
            // clicked on delete
            console.log('delete')
            setOpenDeleteDialog(true);
        } else if (clickedItemName === 'edit') {
            // clicked on edit functionality
            console.log('edit')
            emitAction('edit')
        }
    }

    const emitAction = type => {
        switch (type) {
            case 'delete':
                onAction({ type: 'DELETE_ITEM', product });
                break;
            case 'edit':
                onAction({type: 'EDIT_ITEM', product });
                break;
            default :
                console.warn('invalid option detected ', type);
        }
        setOpenDeleteDialog(false);
    }

    const handleHover = (e) => {
        e.preventDefault()
        // start the slideshow and make the images full width
    }

    const handleRatingsClick = (e) => {
        console.log('clicked on ratings', e)
    }

    const onDialogAccept = (e) => {
        console.log('accepted')
        // delete the selected product
        emitAction('delete');
    }

    const onDialogReject = (e) => {
        console.log('rejected');
    }

    return (
        <div className="cardItem-wrapper" onMouseOver={handleHover} onClick={() => onCardClick(item)}>
            <div className="cardItem-container">
                {!item ? <Skeleton width={'100%'} height={'100%'}/> : 
                <React.Fragment>
<div className="cardItem-card-top">
                    <div className="cardItem-card-top-micro"></div>
                    <div className="cardItem-card-top-macro">
                        <img loading="lazy" src={productImage} alt={product ? product.name : ''} />
                    </div>
                </div>
                <div className="cardItem-card-body">
                    <p className="cardItem-card-body-desc">
                        <b>{product ? product.name : null}</b>
                    </p>
                    <p className="cardItem-card-body-creator">
                        <span>By </span> {product ? product.owner_details.name : null}
                    </p>
                    {
                        product && product.hasRatings ? <div className="cardItem-ratings">
                        <Ratings count={product.ratings.maxCount} filled={product.ratings.average} hoverEffect={false} allowToRate={true} ratingsCount={product.ratings.ratingsBy} clickHandler={handleRatingsClick} />
                    </div> : null
                    }
        
                    <div className="cartItem-desc">
                        <p>
                            {product ? product.short_description : null}
                        </p>
                    </div>
                    <div className="cartItem-price-container">
                        <p className="price-core inline">
                            <span className="currency-code">Rs.</span>
                            {product ? ContentBodyService.utilities.getDiscountedPrice(product.pricing_details.original_price, product.pricing_details.max_discount) : null}
                            {
                            (product && !isNaN(product.pricing_details.max_discount) && product.pricing_details.max_discount !== '0')? 
                            <span className="pre-discount">
                                <span className="currency-code">Rs.</span>
                                {product.pricing_details.original_price}
                            </span>
                             : null
                             }
                        </p>
                        <div className={`cart-container ${Auth.isLoggedIn ? 'no-margin' : 'margin-right'}`}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            {Auth.isLoggedIn ? <React.Fragment>
                                <OptionsMenu
                                icon={<MoreVertIcon />}
                                onItemClick={(e) => handleOptionsClick(e, item)}
                                options={ menuOptions }
                            />
                            <ActionDialog 
                            openDialog={openDeleteDialog}
                            onClose = {() => setOpenDeleteDialog(false)}
                            mainTitle={'Delete Item'}
                            mainBody={product ? product.getDeleteMessage(): ''}
                            showAccept={true}
                            showReject={true}
                            accept={ {text: 'Yes', onClick: onDialogAccept} }
                            reject={ {text: 'Oh No !', onClick: onDialogReject} }
                            />
                            </React.Fragment> : null}
                        </div>

                    </div>
                    <div className="other-details">
                        <p className="coupon-container">+ {Math.floor((Math.random() * 5) + 1)} coupons available</p>
                    </div>
                </div>
                </React.Fragment>
                }
            </div>
        </div>
    )
}
