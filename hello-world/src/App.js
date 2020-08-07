import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'reactstrap';

import Header from './components/shared/Header/header.component.js';
import Footer from './components/shared/Footer/footer.component.js';
import Register from './components/Register/register.component.js'
function App() {
  return (
    
     <Container>
     <Row >
       <Col sm="12" md={{ size: 6, offset: 3 }}> 
            <Header />
       </Col>
     </Row>
     <Row>
       <Col md={4} sm="12" md={{ size: 6, offset: 3 }}> 
         <Register />
       </Col>
     </Row>
     <Row>
       <Col sm="12" md={{ size: 6, offset: 3 }}>
         <Footer />
       </Col>
     </Row>
     </Container>
     

  );
}

export default App;
