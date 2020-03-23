import React from 'react';
import ContentHeader from '../contentHeader/ContentHeader';
import ProviderLandingPage from '../providerLandingPage/ProviderLandingPage';
import FooterButton from '../footerButton/FooterButton';

function BodyWrapper() {
  return (
    <div id="section-body">
      <ContentHeader />
      <ProviderLandingPage />
      <FooterButton />
    </div>
  );
}

export default BodyWrapper;
