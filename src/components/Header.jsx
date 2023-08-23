import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';
const Cartitems=[
    {
  
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
  ];
const Head = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control cart visibility
 // State to manage cart items
  const [cart,setCart] = useState(Cartitems);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ position: 'fixed', zIndex: '1', marginTop : '0px' ,width: '98.4%' }}>
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/">About</Navbar.Brand>
          {/* Display the cart elements when the Cart button is clicked */}
          <Button style={{ float: 'right' }} onClick={toggleCart}>Cart[{cart.length}]</Button>
        </Container>
      </Navbar>
      {/* Display the cart when isCartOpen is true */}
      {isCartOpen && <Cart cartItems={cart} onRemove={removeFromCart} />}
      <Container fluid style={{ textAlign: 'center', backgroundColor: 'lightgray', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <h1>THE GENERICS</h1>
      </Container>
    </>
  );
};

export default Head;



