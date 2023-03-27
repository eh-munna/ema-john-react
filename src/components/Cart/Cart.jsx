import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
  // console.log(cart);

  // calculating the total price

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  // 7 % tax
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length === 0 ? ` ` : cart.length}</p>
      {/* <p>Selected Items: {cart.length}</p> */}
      <p>Total Price : {totalPrice === 0 ? ` ` : `$${totalPrice}`}</p>
      {/* <p>Total Price : {total}</p> */}
      <p>
        Total Shipping Charge :{' '}
        {totalShipping === 0 ? ` ` : `$${totalShipping}`}
      </p>
      <p>Tax : {tax === 0 ? ` ` : `$${tax}`}</p>
      {/* <p>Tax : {tax.toFixed(2)}</p> */}
      <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
