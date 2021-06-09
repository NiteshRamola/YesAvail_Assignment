import React from "react";
import './App.css';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ShippingScreen from "./screens/ShippingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaymentScreen from "./screens/PaymentScreen";

function App() {
  return (
   <Router>
     <Header/>
     <br/>
     <Container>
       <Route path={'/'} component={HomeScreen} exact />
       <Route path={'/product/:id'} component={ProductScreen} />
       <Route path={'/cart/:id?'} component={CartScreen} />
       <Route path={'/login'} component = {LoginScreen} />
       <Route path={'/register'} component = {SignUpScreen}/>
       <Route path={'/shipping'} component = {ShippingScreen}/>
       <Route path={'/payment'} component={PaymentScreen}/>
     </Container>
     <Footer/>
   </Router>
  );
}

export default App;
