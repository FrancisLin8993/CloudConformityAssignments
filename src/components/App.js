import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import BodyWrapper from './bodyWrapper/BodyWrapper';
import HeaderWrapper from './headerWrapper/HeaderWrapper';
import FooterWrapper from './footerWrapper/FooterWrapper';

function App() {
  return (
    <div className="App">
      <HeaderWrapper />
      <BodyWrapper />
      <FooterWrapper />
    </div>
  );
}

export default App;
