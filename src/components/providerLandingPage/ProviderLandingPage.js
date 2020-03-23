import React from 'react';
import ServiceList from '../serviceList/ServiceList';
import { AWS, AZURE } from '../../utils/helpers';

function ProviderLandingPage() {
  return (
    <div>
      <ServiceList providerName={AWS} />
      <ServiceList providerName={AZURE} />
    </div>
  );
}

export default ProviderLandingPage;
