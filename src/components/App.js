import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import BodyWrapper from './bodyWrapper/BodyWrapper';
import HeaderWrapper from './headerWrapper/HeaderWrapper';
import FooterWrapper from './footerWrapper/FooterWrapper';

function App() {
  return (
    <Container className="App">
      <HeaderWrapper />
      <BodyWrapper />
      <FooterWrapper />
    </Container>
  );
}

export default App;
