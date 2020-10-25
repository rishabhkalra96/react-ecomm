import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './card-carousel.scss';
import CardItem from './../card-item/card-item';
import { UiButton } from './../../ui-button/ui-btn.jsx';


export const CardCarousel = (props) => {

  const [cards, setCards] = useState([])
  const actionBtnCss = {
    "backgroundColor": "#494D5F",
    "color": "white",
    "width": "90px"
}

useEffect(() => {
  if (props.items && props.items.length) {
    setCards(props.items)
  } else {
    setCards([])
  }
}, [props.items])
    const viewAll = () => {
        console.log('clicked view all for ', props)
    }

    return (
      <div className="card-carousel-slick">
          <div className="extra-information">
          <p className="card-carousel-title">{ props.hasOwnProperty('title') ? props.title : 'New Categories' }</p>
          <UiButton UIStyle={actionBtnCss} text={'View More'} onBtnClick={viewAll} />
          </div>
          <div className="carousel-looper">
            {cards.map(v => <CardItem key={v}/>)}
          </div>
      </div>
  )
}