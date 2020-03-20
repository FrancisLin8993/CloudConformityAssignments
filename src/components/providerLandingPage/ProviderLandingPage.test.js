import React from 'react';
import ReactDOM from 'react-dom';
import ProviderLandingPage from './ProviderLandingPage';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProviderLandingPage />, div);
});
