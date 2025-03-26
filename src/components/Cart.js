import React from 'react';
import '../components/Cart.css'; // Optional: Add CSS for cart styling

function Cart({ cart }) {
  // Calculate the total price of items in the cart
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Rs.{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Display the total amount */}
          <div className="cart-total">
            <h2>Total Amount: Rs.{totalAmount.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
