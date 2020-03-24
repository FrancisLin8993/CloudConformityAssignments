import React from 'react';
import ServiceList from '../serviceList/ServiceList';
import { AWS, AZURE } from '../../utils/helpers';
import KnowledgeBaseInfo from '../knowledgeBaseInfo/KnowledgeBaseInfo';
import ProviderSelection from '../providerSelection/ProviderSelection';

function ProviderLandingPage() {
  return (
    <div>
      <KnowledgeBaseInfo className="grid-section" />
      <ProviderSelection className="grid grid-section" />
      <ServiceList providerName={AWS} className="grid grid-section" />
      <ServiceList providerName={AZURE} className="grid grid-section" />
    </div>
  );
}

export default ProviderLandingPage;
