import React from 'react';
import Announcement from '../announcement/Announcement';
import Header from '../header/Header';

function HeaderWrapper() {
  return (
    <div id="header-wrapper">
      <Announcement />
      <Header />
    </div>
  );
}

export default HeaderWrapper;
