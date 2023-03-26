import React from 'react';
import './Product.css';
const Product = (props) => {
  const { img, name, price, quantity, ratingsCount, seller, shipping, stock } =
    props.product;

  return (
    <div>
      <div className="single-product">
        <img src={img} alt="" />
        <h6>{name}</h6>
        <p>Price : ${price}</p>
      </div>
    </div>
  );
};

export default Product;
