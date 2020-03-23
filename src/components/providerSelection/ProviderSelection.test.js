import React from 'react';
import ReactDOM from 'react-dom';
import ProviderSelection from './ProviderSelection';
import ProviderCard from '../providerCard/ProviderCard';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProviderSelection />, div);
});

it('renders provider cards correctly', () => {
  const wrapper = shallow(<ProviderSelection />);
  expect(wrapper.find(ProviderCard)).toHaveLength(3);
});

it('renders styles correctly', () => {
  const wrapper = shallow(<ProviderSelection />);
  expect(wrapper.find('.provider-selection')).toHaveLength(1);
  expect(wrapper.find('.card')).toHaveLength(3);
});
