import React from 'react';
import ReactDOM from 'react-dom';
import FooterLeft from './FooterLeft';
import Copyright from '../copyright/Copyright';
import SocialMediaWrapper from '../socialMediaWrapper/SocialMediaWrapper';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterLeft />, div);
});

it('renders components correctly', () => {
  const wrapper = shallow(<FooterLeft />);
  expect(wrapper.find(Copyright)).toHaveLength(1);
  expect(wrapper.find(SocialMediaWrapper)).toHaveLength(1);
});

it('renders styles correctly', () => {
  const wrapper = shallow(<FooterLeft />);
  expect(wrapper.find('.left')).toHaveLength(1);
  expect(wrapper.find('.partner')).toHaveLength(1);
  expect(wrapper.find('.adress-social')).toHaveLength(1);
});
