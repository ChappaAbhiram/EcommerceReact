import React,{Fragment} from 'react';
import {Card,Button,Row,Col} from 'react-bootstrap';
const Cart = (props)=>{
    return (
        <div style={{ position: 'fixed', zIndex: 3, right: '20px', top: '60px',overflowY: 'auto',maxHeight: '80vh',backgroundColor:'white'}}>
     {props.cartItems.length > 0 && <h4>CART</h4>}
     {props.cartItems.length > 0 && (
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
              <td style={{textAlign:"center"}}>{item.quantity}</td>
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
     )}
        </div>
    )

}
export default Cart;