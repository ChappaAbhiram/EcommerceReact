import React, { useContext, useState } from 'react';
import { Navbar, Container, Button, Nav,NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import CartContext from '../store/CartProvider';
import AuthContext from '../store/AuthContext';
import './Header.css';
import Cart from '../Cart/Cart';

const Head = () => {
  const location = useLocation();
  const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;
  const history = useNavigate();
  const isStorepage = location.pathname === '/products';
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate the cart length
  const cartLength = cartContext.cart.length;

  const logoutHandler = (event) => {
    event.preventDefault();
    authContext.logout();
    history('/auth');
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (index) => {
    cartContext.removeFromCart(index);
  };

  return (
    <>
      <div className={"homepage-header"}>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className={`custom-navbar`}
        >
          <Container fluid >
            <Nav className="nav-links">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>

              <NavLink to="/products" className="nav-link">
                Store
              </NavLink>

              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              {!isLoggedIn && (
                <NavLink to="/auth" className="nav-link">
                  Login
                </NavLink>
              )}
              {isLoggedIn && (
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
              <NavLink to="/contactus" className="nav-link">
                Contact Us
              </NavLink>
            </Nav>
            {isLoggedIn && isStorepage && (
              <div className="cart-button-container">
                <Button onClick={toggleCart} className="cart-button">
                  Cart[{cartLength}]
                </Button>
              </div>
            )}
          </Container>
        </Navbar>
      </div>
      {isStorepage && isCartOpen && <Cart onRemove={removeFromCart} />}
    </>
  );
};

export default Head;











