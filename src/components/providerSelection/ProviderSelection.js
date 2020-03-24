import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import ProviderCard from '../providerCard/ProviderCard';
import { AWS, AZURE, CONFORMITY } from '../../utils/helpers';
import './ProviderSelection.css';

function ProviderSelection() {
  return (
    <div className="grid copy">
      <div className="provider-selection">
        <CardGroup>
          <ProviderCard provider={AWS} className="card" />
          <ProviderCard provider={AZURE} className="card" />
          <ProviderCard provider={CONFORMITY} className="card" />
        </CardGroup>
      </div>
    </div>
  );
}

export default ProviderSelection;
