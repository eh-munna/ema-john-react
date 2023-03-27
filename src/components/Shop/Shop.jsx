import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  // state is immutable so we cannot change it but using setSomething we can change
  //  we cannot push element react state so we have make new element every time
  const [cart, setCart] = useState([]);
  // const cart =[] = normal js
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newItem = [...cart, product];
    // cart.push(product) = normal js
    setCart(newItem);
  };
  return (
    <section className="shop">
      <div className="container">
        <div className="shop-container">
          <div className="products-container">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                // We can pass the function as attribute from parent
                cartHandle={handleAddToCart}
              ></Product>
            ))}
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
