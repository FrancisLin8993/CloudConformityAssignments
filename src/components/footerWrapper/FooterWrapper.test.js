import React from 'react';
import ReactDOM from 'react-dom';
import FooterWrapper from './FooterWrapper';
import Footer from '../footer/Footer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterWrapper />, div);
});

it('renders child correctly', () => {
  const wrapper = shallow(<FooterWrapper />);
  expect(wrapper.find(Footer)).toHaveLength(1);
});
