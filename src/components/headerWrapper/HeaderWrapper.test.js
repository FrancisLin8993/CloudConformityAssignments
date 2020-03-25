import React from 'react';
import ReactDOM from 'react-dom';
import HeaderWrapper from './HeaderWrapper';
import Announcement from '../announcement/Announcement';
import Header from '../header/Header';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderWrapper />, div);
});

it('renders correct children', () => {
  const wrapper = shallow(<HeaderWrapper />);
  expect(wrapper.find(Announcement)).toHaveLength(1);
  expect(wrapper.find(Header)).toHaveLength(1);
});
