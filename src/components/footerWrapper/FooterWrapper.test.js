import React from 'react';
import ReactDOM from 'react-dom';
import FooterWrapper from './FooterWrapper';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterWrapper />, div);
});
