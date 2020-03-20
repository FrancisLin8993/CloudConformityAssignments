import React from 'react';
import ReactDOM from 'react-dom';
import FooterButton from './FooterButton';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterButton />, div);
});
