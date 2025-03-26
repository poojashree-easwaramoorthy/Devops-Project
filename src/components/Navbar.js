import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h3>eKart</h3>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
