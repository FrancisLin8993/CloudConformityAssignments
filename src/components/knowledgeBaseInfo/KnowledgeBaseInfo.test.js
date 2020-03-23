import React from 'react';
import ReactDOM from 'react-dom';
import KnowledgeBaseInfo from './KnowledgeBaseInfo';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KnowledgeBaseInfo />, div);
});
