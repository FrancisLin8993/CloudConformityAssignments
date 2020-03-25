import React from 'react';
import ReactDOM from 'react-dom';
import FooterRight from './FooterRight';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterRight />, div);
});

it('renders children correctly', () => {
  const wrapper = shallow(<FooterRight />);
  expect(wrapper.find('.right')).toHaveLength(1);
  expect(wrapper.find('.footer-nav')).toHaveLength(5);
});
