import React from 'react';
import ContentHeader from '../contentHeader/ContentHeader';
import ProviderLandingPage from '../providerLandingPage/ProviderLandingPage';
import FooterButton from '../footerButton/FooterButton';
import './BodyWrapper.css';

function BodyWrapper() {
  return (
    <div id="section-body">
      <ContentHeader className="content-header grid-section" />
      <ProviderLandingPage className="grid-section provider-landing-page" />
      <FooterButton className="grid-section" />
    </div>
  );
}

export default BodyWrapper;
