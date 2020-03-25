import React from 'react';
import './Navigation.css';
import NavSubmenu from '../navSubmenu/NavSubmenu';

function Navigation() {
  return (
    <nav>
      <div className="wrp-nav">
        <div className="navigation">
          <ul>
            <li>
              <a
                className="active"
                href="/knowledge-base/"
                aria-label="Knowledge Base"
              >
                Knowledge Base
              </a>
            </li>
            <li>
              <NavSubmenu />
            </li>
            <li>
              <a href="/about.html" aria-label="About">
                About
              </a>
            </li>
            <li>
              <a href="/pricing.html" aria-label="Pricing">
                Pricing
              </a>
            </li>
          </ul>
          <div id="reg-log">
            <a
              href="/identity/sign-in.html"
              title="Existing user's sign in page"
            >
              Sign in
            </a>
            <a href="/identity/sign-up.html" title="Sign Up">
              Free trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
