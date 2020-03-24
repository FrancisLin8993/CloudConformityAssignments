import React from 'react';
import ContentHeader from '../contentHeader/ContentHeader';
import ProviderLandingPage from '../providerLandingPage/ProviderLandingPage';
import FooterButton from '../footerButton/FooterButton';
import './BodyWrapper.css';

function BodyWrapper() {
  return (
    <div id="section-body">
      <ContentHeader className="content-header" />
      <ProviderLandingPage />
      <FooterButton />
    </div>
  );
}

export default BodyWrapper;
