import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
  // receiving the property
  const handleAddToCart = props.cartHandle;
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
          <button
            onClick={() => {
              handleAddToCart(props.product);
            }}
            className="w-full"
          >
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
