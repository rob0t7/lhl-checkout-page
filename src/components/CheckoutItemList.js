import React from 'react'

import CheckoutItem from './CheckoutItem'

const CheckoutItemList = (props) => {
  return (
    <div className={props.className}>
      { props.products.length <= 0 ?
        <div>Empty Card</div>
      : <ul>
          { props.products.map( product => {
              return <CheckoutItem
                         key={product.id}
                         {...product}
                         onQtyIncrease={props.onQtyIncrease}
                         onQtyDecrease={props.onQtyDecrease}/>
            }) }
      </ul>
      }
    </div>
  )
}

export default CheckoutItemList
