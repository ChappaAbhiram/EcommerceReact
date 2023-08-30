import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { Route, Routes,useLocation } from 'react-router-dom';
import About from './RoutePages/About';
import HomePage from './RoutePages/Home';
import Store from './RoutePages/Store';
import Header from './components/Header';
import './App.css';
function App() {
  const location = useLocation();
  const isHomepage= location.pathname ==='/home';
  return (
    <div>
      <Header />
      <Container fluid className="generics-container">
        <h1>THE GENERICS</h1>
        {isHomepage && (<Button style={{color : 'blue',backgroundColor : 'lightgray'}}><h4>Get our Latest Album</h4></Button>)}
        {isHomepage && (<div><img style={{width:'60px',height:'60px',borderRadius : '30px',marginTop : '10px'}} src="https://thumbs.dreamstime.com/z/music-symbol-heart-13181581.jpg?w=576" /></div>)}
      </Container>
      <Container fluid>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

