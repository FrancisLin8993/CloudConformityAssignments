import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import FooterLeft from '../footerLeft/FooterLeft';
import FooterRight from '../footerRight/FooterRight';
import Copyright from '../copyright/Copyright';
import SocialMediaWrapper from '../socialMediaWrapper/SocialMediaWrapper';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('renders components correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find(FooterLeft)).toHaveLength(1);
  expect(wrapper.find(FooterRight)).toHaveLength(1);
  expect(wrapper.find(Copyright)).toHaveLength(1);
  expect(wrapper.find(SocialMediaWrapper)).toHaveLength(1);
});

it('render styles and component correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('.grid')).toHaveLength(1);
  expect(wrapper.find('.grid-section')).toHaveLength(1);
  expect(wrapper.find('.wrp')).toHaveLength(1);
  expect(wrapper.find('.footer')).toHaveLength(1);
  expect(wrapper.find('.adress-social')).toHaveLength(1);
  expect(wrapper.find('.mobile')).toHaveLength(1);
});
