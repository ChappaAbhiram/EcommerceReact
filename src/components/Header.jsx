import React, { useContext, useState } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartContext from '../store/CartProvider';
import './Header.css'; // Import custom CSS for the header

const Head = () => {
  const location = useLocation();
  const ctx = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = ctx.Cart;

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (index) => {
    ctx.removefromcart(index);
  };

  const isStorepage = location.pathname === '/products';

  return (
    <>
      <div className={`${isStorepage ? 'homepage-header' : 'header'}`}>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className={`custom-navbar ${isStorepage ? 'homepage-navbar' : ''}`}
        >
          <Container fluid>
            <Nav className="nav-links">
              <Nav.Link as={NavLink} to="/home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products" className="nav-link">
                Store
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contactus" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav>
            {isStorepage && (
              <Button onClick={toggleCart} className="cart-button">
                Cart[{cartItems.length}]
              </Button>
            )}
          </Container>
        </Navbar>
      </div>
      {isStorepage && isCartOpen && <Cart cartItems={cartItems} onRemove={removeFromCart} />}
      {/* <Container
        fluid
        className="generics-container"
      >
        <h1>THE GENERICS</h1>
      </Container> */}
    </>
  );
};

export default Head;






