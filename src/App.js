import React,{useContext,lazy,Suspense} from 'react';
import { Container,Button } from 'react-bootstrap';
import { Route, Routes,useLocation ,useNavigate} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import AuthForm from './components/Authrization/AuthForm';
import About from './RoutePages/About';
import HomePage from './RoutePages/Home';
import Store from './RoutePages/Store';
import Header from './components/Header';
import ContactUs from './RoutePages/ContactUs';
// import ProductDetails from './RoutePages/ProductDetails';
import AuthContext from './store/AuthContext';
import './App.css';
function App() {
  const authctx = useContext(AuthContext);
  const location = useLocation();
  const isHomepage= location.pathname ==='/home';
  const isLoggedIn = authctx.isLoggedIn;
  //Implementing lazy loading for Product Details
  const ProductDetails = lazy(()=>import('./RoutePages/ProductDetails'));
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="generics-container">
        <h1>THE GENERICS</h1>
        {isHomepage && (<Button style={{color : 'blue',backgroundColor : 'lightgray'}}><h4>Get our Latest Album</h4></Button>)}
        {isHomepage && (<div><img style={{width:'60px',height:'60px',borderRadius : '30px',marginTop : '10px'}} src="https://thumbs.dreamstime.com/z/music-symbol-heart-13181581.jpg?w=576" /></div>)}
      </Container>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<Store />} exact></Route>
          <Route path="/auth" element={<AuthForm />} exact></Route>
          <Route path="/products/:productId" element={<Suspense fallback={<p>Loading...</p>}><ProductDetails /></Suspense>} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;

