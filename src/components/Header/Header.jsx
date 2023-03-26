import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';

// Header Component
const Header = () => {
  return (
    <header>
      {/* menu bar structure */}

      <nav>
        <a href="">
          <img src={logo} alt="" srcset="" />
        </a>
        {/* list items */}
        <ul>
          <li>
            <a href="http://">Order</a>
          </li>
          <li>
            <a href="http://">Order Review</a>
          </li>
          <li>
            <a href="http://">Manage Inventory</a>
          </li>
          <li>
            <a href="http://">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
