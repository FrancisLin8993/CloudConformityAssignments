import React from 'react';
import ReactDOM from 'react-dom';
import ProviderCard from './ProviderCard';
import Card from 'react-bootstrap/Card';
import { mount, shallow } from 'enzyme';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProviderCard />, div);
});

describe('test props', () => {
  let testProps = {};

  beforeEach(() => {
    testProps = {
      provider: 'aws'
    };
  });

  it('renders correct props', () => {
    const wrapper = mount(<ProviderCard provider={testProps.provider} />);

    expect(wrapper.props().provider).toEqual('aws');
  });
});

it('renders card correctly', () => {
  const wrapper = shallow(<ProviderCard />);
  expect(wrapper.find(Card)).toHaveLength(1);
});

it('renders card styles correctly', () => {
  const wrapper = shallow(<ProviderCard />);
  expect(wrapper.find('.cta')).toHaveLength(1);
  expect(wrapper.find({ border: 'light' })).toHaveLength(1);
});
