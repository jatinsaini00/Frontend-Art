// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        return response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    }
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
    <h2>Product List</h2>
    <div className='product-list'>
      
      {products.map(product => (
        <div  key={product.id}>
          <img  src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
