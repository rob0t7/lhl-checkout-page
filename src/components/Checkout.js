import React from 'react'

import CheckoutItemList from './CheckoutItemList'
import Summary from './Summary'

var data = {
  products: [
    {
      id: 1,
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/61maom0jYqL._SL1500_.jpg",
      name: "Product 1 Name",
      description: "Nulla posuere.  Pellentesque dapibus suscipit ligula.  Donec at pede.",
      price: 10.00,
      quantity: 1
    },
    {
      id: 2,
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/61maom0jYqL._SL1500_.jpg",
      name: "Product e Name",
      description: "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Aliquam feugiat tellus ut neque.  Nulla posuere.",
      price: 5.00,
      quantity: 2
    }
  ],
  summary: {
    subtotal: 20.00,
    shipping: 6.00,
    total:    26.00
  }
}

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = data;
  }

  _calcSummary = (products) => {
    var summary = {
      subtotal: 0,
      total: 0,
      shipping: 6.00
    }
    summary.subtotal = products.reduce( (acc, i) => {
      return acc + i.price * i.quantity
    }, 0)
    summary.total = summary.subtotal + summary.shipping
    return summary
  }

  handleQtyIncrease = (id) => {
    var productIndex = this.state.products.findIndex( (p) => { return p.id === id})
    var product = this.state.products[productIndex]
    var products = [
      ...this.state.products.slice(0, productIndex),
      Object.assign({}, product, {quantity: product.quantity + 1}),
      ...this.state.products.slice(productIndex + 1)
    ]
    var summary = this._calcSummary(products)
    this.setState({products, summary})
  }

  handleQtyDecrease = (id) => {
    var productIndex = this.state.products.findIndex( (p) => { return p.id === id})
    var product = this.state.products[productIndex]
    var products = []
    product = Object.assign({}, product, {quantity: product.quantity - 1})

    if (product.quantity > 0) {
      products = [
        ...this.state.products.slice(0, productIndex),
        product,
        ...this.state.products.slice(productIndex + 1)
      ]
    } else {
      products = [
        ...this.state.products.slice(0, productIndex),
        ...this.state.products.slice(productIndex + 1)
      ]
    }
    var summary = this._calcSummary(products)
    this.setState({products, summary})
  }

  render() {
    return (
      <div className="container">
        <h1>Your Order</h1>

        <div className="row">
          <CheckoutItemList
              className="col-md-8"
              products={this.state.products}
              onQtyIncrease={this.handleQtyIncrease}
              onQtyDecrease={this.handleQtyDecrease}/>
          <Summary className="col-md-4" {...this.state.summary}/>
        </div>
      </div>
    )
  }
}

export default Checkout
