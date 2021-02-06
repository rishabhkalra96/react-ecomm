import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './ratings.scss'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(0),
    }
  }));

export default function Ratings(props) {
    const [filledStars, setFilledStars] = useState(0);
    const [hasRated, setHasRated] = useState(false)
    const [totalRatings, setTotalRatings] = useState(0)
    const materialClasses = useStyles();
    useEffect(() => {
        if (props.filled) {
            setFilledStars(props.filled)
        }
    }, [props.filled])

    useEffect(() => {
        if (props.ratingsCount) {
            setTotalRatings(props.ratingsCount)
        }
    }, [props.ratingsCount])

    const renderStars = () => {
        const stars = new Array(props.count).fill(0)
        return stars.map((_, i) => {
            let classes = 'star'
            if (props.filled && i < filledStars) {
                classes += ' filled'
            }
            return <div className={classes} key={i} number={i+1}>
                <FontAwesomeIcon icon={faStar} onClick={ratingClickHandler}/>
            </div>
        })
    }

    const ratingClickHandler = (e) => {
        e.stopPropagation();
        if (props.allowToRate) {
            const currentVal = e.target.parentElement.parentElement.getAttribute('number') ? parseInt(e.target.parentElement.parentElement.getAttribute('number')) : 0
            if (currentVal !== props.filled) {
                setFilledStars(currentVal)
                setHasRated(true)
            }
            props.clickHandler({
                item: {},
                initialVal: props.filled,
                currentVal
            })
        } else {
            // do nothing
        }
    }

    const removeCurrentRating = (e) => {
        if (hasRated) {
            setFilledStars(props.filled)
            props.clickHandler({
                item: {},
                initialVal: props.filled,
                currentVal: props.filled,
            })
            // to let the ripple effect finish on the undo button
            window.setTimeout(() => {
                setHasRated(false)
            }, 300)
        }
    }
    return (
        <div className="ratings-core">
            {renderStars()}
            <span className="ratings-count">
                {props.ratingsCount ? totalRatings + ' user ratings' : null}
            </span>
            {
                hasRated ? <p className="ratings-remova"
                onClick={removeCurrentRating}
            >
                <Button size="small" color="secondary" className={materialClasses.padding}>
          Undo
        </Button>
            </p> : null    
            }
        </div>
    )
}