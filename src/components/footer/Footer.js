import React from 'react';
import './Footer.css';
import FooterLeft from '../footerLeft/FooterLeft';
import FooterRight from '../footerRight/FooterRight';
import Copyright from '../copyright/Copyright';
import SocialMediaWrapper from '../socialMediaWrapper/SocialMediaWrapper';

function Footer() {
  return (
    <footer>
      <div className="grid-section">
        <div className="grid">
          <div className="wrp">
            <div className="footer">
              <FooterLeft />
              <FooterRight />
              <div className="adress-social mobile">
                <Copyright />
                <SocialMediaWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
