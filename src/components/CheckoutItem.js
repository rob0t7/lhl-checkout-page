import React from 'react'
import './CheckoutItem.css'

const CheckoutItem = (props) => {
  return (
    <li className="checkout-item">
      <img className="checkout-item__image"
           alt=""
           src={props.imageURL}/>
      <div className="checkout-item__description">
        <div className="checkout-item__description-title">{props.name}</div>
        <div className="checkout-item__description-body">{props.description}</div>
      </div>
      <div className="checkout-item__qty">
        <button
            className="checkout-item__qty-button btn"
            onClick={ () => { props.onQtyDecrease(props.id) } }>
          -
        </button>
        {props.quantity}
        <button
            className="checkout-item__qty-button btn"
            onClick={ () => { props.onQtyIncrease(props.id) } }>
          +
        </button>
      </div>
      <div className="checkout-item__price">{props.price * props.quantity}</div>
    </li>
  )
}

export default CheckoutItem
