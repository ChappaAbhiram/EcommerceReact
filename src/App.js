import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from './RoutePages/About';
import HomePage from './RoutePages/Home';
import Store from './RoutePages/Store';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Container fluid className="generics-container">
        <h1>THE GENERICS</h1>
      </Container>
      <Container fluid>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>
      {/* Container for "THE GENERICS" */}
    </div>
  );
}

export default App;

