// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, removeFromCart, checkout }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title} - ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
