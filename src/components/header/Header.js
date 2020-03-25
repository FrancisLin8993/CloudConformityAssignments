import React from 'react';
import Navigation from '../navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header>
      <div id="logo">
        <a href="/" title="Cloud Conformith Homepage"></a>
      </div>
      <a className="icon-menu" href="#" data-target="header">
        <span>Open menu</span>
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
