import React from 'react';
import ReactDOM from 'react-dom';
import KnowledgeBaseInfo from './KnowledgeBaseInfo';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KnowledgeBaseInfo />, div);
});

it('renders styles correctly', () => {
  const wrapper = shallow(<KnowledgeBaseInfo />);
  expect(wrapper.find('.grid')).toHaveLength(1);
  expect(wrapper.find('.copy')).toHaveLength(1);
  expect(wrapper.find('.lead')).toHaveLength(1);
});
