import React from 'react';
import ServiceList from '../serviceList/ServiceList';
import * as ProviderNames from '../../utils/helpers';

function ProviderLandingPage() {
  return (
    <div>
      <ServiceList providerName={ProviderNames.AWS} />
    </div>
  );
}

export default ProviderLandingPage;
