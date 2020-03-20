import React from 'react';
import ReactDOM from 'react-dom';
import BodyWrapper from './BodyWrapper';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BodyWrapper />, div);
});
