import React from 'react';
import ReactDOM from 'react-dom';
import Announcement from './Announcement';

import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Announcement />, div);
});

it('render components correctly', () => {
  const wrapper = shallow(<Announcement />);
  expect(wrapper.find('img')).toHaveLength(1);
  expect(wrapper.find('a')).toHaveLength(1);
});
