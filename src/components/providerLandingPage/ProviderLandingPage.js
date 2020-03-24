import React from 'react';
import ServiceList from '../serviceList/ServiceList';
import { AWS, AZURE } from '../../utils/helpers';
import KnowledgeBaseInfo from '../knowledgeBaseInfo/KnowledgeBaseInfo';
import ProviderSelection from '../providerSelection/ProviderSelection';

function ProviderLandingPage() {
  return (
    <div>
      <KnowledgeBaseInfo />
      <ProviderSelection />
      <ServiceList providerName={AWS} />
      <ServiceList providerName={AZURE} />
    </div>
  );
}

export default ProviderLandingPage;
