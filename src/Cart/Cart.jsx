import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../store/CartProvider';
import './cart.css';

const Cart = (props) => {
  const ctx = useContext(CartContext);

 const cartItems = ctx.cart;
  // Function to fetch cart items from the backend
  
  // Calculate the total amount based on cartItems
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cartstyle">
      {cartItems.length > 0 && (
        <div>
          <h4>CART</h4>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Card.Img src={item.imageUrl} alt={item.title} style={{ width: '50px' }} />
                  </td>
                  <td>{item.title}</td>
                  <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button variant="danger" onClick={() => props.onRemove(item._id)}>
                      REMOVE
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="total-amount"
            style={{ marginTop: '20px', textAlign: 'right', fontSize: '18px', color: '#333' }}
          >
            <p>
              Total Amount: <span style={{ fontWeight: 'bold', color: '#ff5722' }}>${totalAmount.toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

