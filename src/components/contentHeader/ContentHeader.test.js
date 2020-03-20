import React from 'react';
import ReactDOM from 'react-dom';
import ContentHeader from './ContentHeader';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentHeader />, div);
});
