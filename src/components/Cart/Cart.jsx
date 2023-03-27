import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
  // console.log(cart);

  // calculating the total price

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length === 0 ? ` ` : cart.length}</p>
      {/* <p>Selected Items: {cart.length}</p> */}
      <p>Total Price : {total === 0 ? ` ` : `$${total}`}</p>
      {/* <p>Total Price : {total}</p> */}
      <p>Total Shipping Charge : $</p>
      <p>Tax : $</p>
      <h4>Grand Total : $</h4>
    </div>
  );
};

export default Cart;
