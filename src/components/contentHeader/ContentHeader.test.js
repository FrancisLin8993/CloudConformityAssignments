import React from 'react';
import ReactDOM from 'react-dom';
import ContentHeader from './ContentHeader';

import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentHeader />, div);
});

it('renders styles correctly', () => {
  const wrapper = shallow(<ContentHeader />);
  expect(wrapper.find('.content-header')).toHaveLength(1);
  expect(wrapper.find('.grid-section')).toHaveLength(1);
  expect(wrapper.find('.table-view')).toHaveLength(1);
  expect(wrapper.find('.header')).toHaveLength(1);
  expect(wrapper.find('.grid')).toHaveLength(2);
  expect(wrapper.find('.column')).toHaveLength(2);
  expect(wrapper.find('.article')).toHaveLength(1);
});
