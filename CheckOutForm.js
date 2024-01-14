// CheckoutForm.js
import React, { useState } from 'react';



const CheckOutForm = ({ onCheckout }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  

  const handleSubmit = () => {
    
    const order = {
      name: {name},
      address: {address},
      paymentDetails: {paymentDetails}
    };

   
    
    onCheckout(order);
  };

  return (
    <div>
     
      <h2>checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
        type="text" value={name} onChange={e => setName(e.target.value)} />

        <label>Address:</label>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} />

        <label>Payment Details:</label>
        <input type="text" value={paymentDetails} onChange={e => setPaymentDetails(e.target.value)} />

        <button onClick={ ()=> alert('you sumitted') }type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckOutForm;
