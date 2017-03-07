import React from 'react'
import './Summary.css'

const Summary = (props) => {
  return (
    <div className={props.className}>
      <div className="summary">
        <div className="summary__header">Summary</div>
        <div className="summary__body">
          <table className="table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{props.subtotal}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>{props.shipping}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{props.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Summary
