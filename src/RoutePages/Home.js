import React from 'react';
import { Container, Table } from 'react-bootstrap';

const HomePage = () => {
  const tourData = [
    { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
    { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE' },
    { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
    { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
    { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA' },
    { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION' },
  ];
const submithandler = (event)=>{
  event.preventDefault();
}
  return (
    <Container style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'bold', marginTop: '20px' }}>TOURS</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Venue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tourData.map((tour, index) => (
            <tr key={index}>
              <td>{tour.date}</td>
              <td>{tour.location}</td>
              <td>{tour.venue}</td>
              <td>
                <a
                  href="/home"
                  style={{
                    backgroundColor: 'skyblue',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    textDecoration: 'none',
                    color: 'white',
                    whiteSpace: 'nowrap', // Ensure button text stays on one line
                  }}
                onClick={submithandler}>
                  BUY TICKETS
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HomePage;

