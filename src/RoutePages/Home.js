import React from 'react';
import { Container, Card,NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomePage=()=>{
const tourData = [
  { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
  { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE' },
  { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
  { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
  { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA' },
  { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION' },
];
return (
    <Container style={{textAlign:'center'}}>
        <h2 style={{fontFamily:'bold',marginTop:'20px'}}>TOURS</h2>
      <div style={{display:'flex',gap:'1rem',flexDirection:'column'}}>
        {tourData.map((tour, index) => (
          <Card key={index}>
            <Card.Body>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <Card.Title>{tour.date}</Card.Title>
              <Card.Text>{tour.location}</Card.Text>
              <Card.Text>{tour.venue}</Card.Text>
              <NavLink to="/home" style={{backgroundColor:'skyblue',borderRadius:'4px'}}>BUY TICKETS</NavLink>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};
export default HomePage;