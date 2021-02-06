import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './card-carousel.scss';
import CardItem from './../card-item/card-item';
import { UiButton } from './../../ui-button/ui-btn.jsx';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


export const CardCarousel = (props) => {

  const [cards, setCards] = useState([])
  const history = useHistory()
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
        history.push(`/search/results?keyword=${props.title}`)
    }

  const cardClickHandler = (data) => {
    history.push(`/product/view/${data.id}`)
  }

    return (
      <div className="card-carousel-slick">
          <div className="extra-information">
          <p className="card-carousel-title"> {props.title || <Skeleton width={'100%'} height={'50px'}/>} </p>
          {cards.length ? <UiButton UIStyle={actionBtnCss} text={'View More'} onBtnClick={viewAll}/> : <Skeleton width={'6rem'} height={'2.5rem'}/> }
          </div>
          <div className="carousel-looper">
            {
              cards.length ?
            cards.map((v,i) => <CardItem item={v} key={i} onCardClick={cardClickHandler} onAction={(event) => props.onCardAction(event)}/>) :
            new Array(10).fill(0).map((_,id) => <CardItem key={id}/>)
          }
          </div>
      </div>
    )
}