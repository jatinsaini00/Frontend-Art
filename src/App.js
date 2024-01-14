// App.js
import  { React,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import CheckOutForm from './CheckOutForm';

import './styles.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const checkout = () => {
    
    console.log('Checkout:', cart);
  };

  const handleCheckoutForm = (order) => {
    console.log(JSON.stringify(order));
    setCart([]);
  };
     
  

  return (
    <Router>
      <div className="App">
        
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkoutform</Link>
            </li>
        
          </ul>
        
        </div>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />}
          />
          <Route path="/checkout" element={<CheckOutForm onCheckout={handleCheckoutForm} />} />
        </Routes>
      
    </Router>
  );
};

export default App;
