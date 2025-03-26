import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './styles.css'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
