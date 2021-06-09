import React from "react";
import './App.css';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
   <Router>
     <Header/>
     <Container>
       <Route path={'/'} component={HomeScreen} exact />
       <Route path={'/product/:id'} component={ProductScreen} exact />
     </Container>
     <Footer/>
   </Router>
  );
}

export default App;
