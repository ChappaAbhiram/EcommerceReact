import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import CartContext from '../store/CartProvider';
import './cart.css';
const Cart = (props) => {
  const ctx = React.useContext(CartContext);
  const totalAmount = props.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
     <div className='cartstyle'>
      {props.cartItems.length > 0 && (
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
              {props.cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Card.Img src={item.imageUrl} alt={item.title} style={{ width: '50px' }} />
                  </td>
                  <td>{item.title}</td>
                  <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button variant="danger" onClick={() => props.onRemove(index)}>
                      REMOVE
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-amount" style={{marginTop:'20px',textAlign:'right',fontSize:'18px',color:'#333'}}>
            <p>Total Amount: <span style={{fontWeight:'bold',color:'#ff5722'}}>${totalAmount.toFixed(2)}</span></p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
