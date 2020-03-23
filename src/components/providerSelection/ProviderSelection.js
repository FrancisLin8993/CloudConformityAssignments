import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import ProviderCard from '../providerCard/ProviderCard';
import { AWS, AZURE, CONFORMITY } from '../../utils/helpers';

function ProviderSelection() {
  return (
    <CardGroup>
      <ProviderCard provider={AWS} />
      <ProviderCard provider={AZURE} />
      <ProviderCard provider={CONFORMITY} />
    </CardGroup>
  );
}

export default ProviderSelection;
