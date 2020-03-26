import React from 'react';
import './NavSubmenu.css';
import NavSubmenuItem from '../navSubmenuItem/NavSubmenuItem';
import { AWS, AZURE, GCP } from '../../utils/helpers';
import './NavSubmenu.css';

function NavSubmenu() {
  return (
    <React.Fragment>
      <span>
        {' '}
        Solutions <i className="icomoon icon-arrow-down2"></i>
      </span>
      {/* The arrow icon in icomoon is not free so that i am not using icons here */}
      <div className="submenu">
        <div className="submenu-container">
          <NavSubmenuItem provider={AWS} />
          <NavSubmenuItem provider={AZURE} />
          <NavSubmenuItem provider={GCP} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavSubmenu;
