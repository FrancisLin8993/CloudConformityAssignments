import React from 'react';
import ServiceList from '../serviceList/ServiceList';
import { AWS, AZURE } from '../../utils/helpers';
import KnowledgeBaseInfo from '../knowledgeBaseInfo/KnowledgeBaseInfo';

function ProviderLandingPage() {
  return (
    <div>
      <KnowledgeBaseInfo />
      <ServiceList providerName={AWS} />
      <ServiceList providerName={AZURE} />
    </div>
  );
}

export default ProviderLandingPage;
