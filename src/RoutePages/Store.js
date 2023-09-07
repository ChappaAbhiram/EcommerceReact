import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../store/CartProvider"; // Update the import path

const Store = () => {
  const ctx = useContext(CartContext);

  const addToCart = (product) => {
    ctx.addtocart(product);
  };

  const productsArr = [
    {
      id:"1",
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id:"2",
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id:"3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id:"4",
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <Container fluid style={{padding:'20px'}}>
      <Row className="justify-content-center">
        {productsArr.map((product, index) => (
          <Col md={5} key={index}>
            <Card style={{border : 'transparent',textAlign:'center',padding : '15px'}}>
              <Link to = {`/products/${product.id}`}><Card.Img variant="top" src={product.imageUrl} style={{ width: '200px', height: '200px',margin: '0 auto' }}/></Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;