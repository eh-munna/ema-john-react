import React, { useEffect, useState } from 'react';

import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="shop">
      <div className="container">
        <div className="shop-container">
          <div className="products-container">
            <h4>{products.length}</h4>
          </div>
          <div className="cart-container">
            <h5>Order Summery</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
