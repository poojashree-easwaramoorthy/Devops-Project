import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { CartProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
