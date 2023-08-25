import React, { useContext, useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import CartContext from '../store/CartProvider';

const Head = () => {
  const ctx = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = ctx.Cart;

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (index) => {
    ctx.removefromcart(index);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ position: 'fixed', zIndex: '1', marginTop: '0px', width: '98.4%' }}
      >
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/">About</Navbar.Brand>
          <Button style={{ float: 'right' }} onClick={toggleCart}>
            Cart[{cartItems.length}]
          </Button>
        </Container>
      </Navbar>
      {isCartOpen && <Cart cartItems={cartItems} onRemove={removeFromCart} />}
      <Container
        fluid
        style={{
          textAlign: 'center',
          backgroundColor: 'lightgray',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <h1>THE GENERICS</h1>
      </Container>
    </>
  );
};

export default Head;




