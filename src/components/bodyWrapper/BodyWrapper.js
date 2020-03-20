import React from 'react';
import ContentHeader from '../contentHeader/ContentHeader';
import ProviderLandingPage from '../providerLandingPage/ProviderLandingPage';
import FooterButton from '../footerButton/Footerbutton';

function BodyWrapper() {
  return (
    <div>
      <ContentHeader />
      <ProviderLandingPage />
      <FooterButton />
    </div>
  );
}

export default BodyWrapper;