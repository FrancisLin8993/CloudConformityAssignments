import React from 'react';
import ReactDOM from 'react-dom';
import BodyWrapper from './BodyWrapper';
import ContentHeader from '../contentHeader/ContentHeader';
import ProviderLandingPage from '../providerLandingPage/ProviderLandingPage';
import FooterButton from '../footerButton/FooterButton';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BodyWrapper />, div);
});

it('render childrens correctly', () => {
  const wrapper = shallow(<BodyWrapper />);
  expect(wrapper.find(ContentHeader)).toHaveLength(1);
  expect(wrapper.find(ProviderLandingPage)).toHaveLength(1);
  expect(wrapper.find(FooterButton)).toHaveLength(1);
});
