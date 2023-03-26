import React from 'react';
import './Product.css';
const Product = (props) => {
  const {
    img,
    name,
    price,
    quantity,
    ratingsCount,
    seller,
    shipping,
    stock,
    ratings,
  } = props.product;

  return (
    <div>
      <div className="single-product">
        <div className="product-highlight">
          <img src={img} alt="" />
          <h5>{name}</h5>
        </div>
        <div className="product-info">
          <p>Price : ${price}</p>
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings} Stars</p>
        </div>
        <div className="cart-btn ">
          <button className="w-full">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
