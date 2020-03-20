import React from 'react';
import ReactDOM from 'react-dom';
import HeaderWrapper from './HeaderWrapper';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderWrapper />, div);
});
