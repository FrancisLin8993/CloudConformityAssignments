import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Navigation from '../navigation/Navigation';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders children correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('header')).toHaveLength(1);
  expect(wrapper.find(Navigation)).toHaveLength(1);
});
