import React from 'react';
import ReactDOM from 'react-dom';
import FooterButton from './FooterButton';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterButton />, div);
});

it('renders children correctly', () => {
  const wrapper = shallow(<FooterButton />);
  expect(wrapper.find('p')).toHaveLength(2);
  expect(wrapper.find('a')).toHaveLength(2);
});
