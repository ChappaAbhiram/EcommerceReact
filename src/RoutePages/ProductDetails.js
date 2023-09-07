import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Productdetails.css';

const productsArr = [
  {
    id: '1',
    title: 'Colors',
    price: 100,
    images: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    reviews: [
      'Excellent product!',
      'Good quality and fits well.',
      'Highly recommended.',
    ],
  },
  {
    id: '2',
    title: "Black and white Colors",
    price: 50,
    images: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    reviews: [
      'Excellent product!',
      'Good quality and fits well.',
      'Highly recommended.',
    ],
  },
  {
    id: '3',
    title: "Yellow and Black Colors",
    price: 70,
    images: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    reviews: [
      'Excellent product!',
      'Good quality and fits well.',
      'Highly recommended.',
    ],
  },
  {
    id: '4',
    title: "Blue Colors",
    price: 100,
    images: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    reviews: [
      'Excellent product!',
      'Good quality and fits well.',
      'Highly recommended.',
    ],
  },
  // Add more products with single image URLs
];

const ProductDetails = () => {
    const { productId } = useParams();
    const product = productsArr.find((item) => item.id === productId);
  
    if (!product) {
      // Handle the case when the product is not found (e.g., show an error message)
      return <p>Product not found.</p>;
    }
  
    return (
      <Container>
        <Row>
          <Col md={6}>
            <div className="zoom-image-container">
              <img
                src={product.images}
                alt={product.title}
                className="zoom-image"
              />
            </div>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
            <div className="product-reviews">
              <h2>Customer Reviews</h2>
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default ProductDetails;
