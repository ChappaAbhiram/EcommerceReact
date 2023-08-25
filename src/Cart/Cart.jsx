import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import CartContext from '../store/CartProvider';

const Cart = (props) => {
  const ctx = React.useContext(CartContext);

  return (
    <div style={{ position: 'fixed', zIndex: 3, right: '20px', top: '60px', overflowY: 'auto', maxHeight: '80vh', backgroundColor: 'white' }}>
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
        </div>
      )}
    </div>
  );
};

export default Cart;
