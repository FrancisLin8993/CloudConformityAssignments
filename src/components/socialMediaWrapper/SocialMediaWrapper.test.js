import React from 'react';
import ReactDOM from 'react-dom';
import SocialMediaWrapper from './SocialMediaWrapper';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialMediaWrapper />, div);
});

it('renders children correctly', () => {
  const wrapper = shallow(<SocialMediaWrapper />);
  expect(wrapper.find('.social')).toHaveLength(1);
  expect(wrapper.find('.in')).toHaveLength(1);
  expect(wrapper.find('.yt')).toHaveLength(1);
  expect(wrapper.find('.tw')).toHaveLength(1);
  expect(wrapper.find('.gh')).toHaveLength(1);
  expect(wrapper.find('a')).toHaveLength(4);
});
