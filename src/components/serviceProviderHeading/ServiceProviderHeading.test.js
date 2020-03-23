import React from 'react';
import ReactDOM from 'react-dom';
import ServiceProviderHeading from './ServiceProviderHeading';

import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServiceProviderHeading />, div);
});

describe('test props', () => {
  let testProps = {};
  let wrapper;

  beforeEach(() => {
    testProps = {
      providerName: 'aws'
    };
    wrapper = mount(
      <ServiceProviderHeading providerName={testProps.providerName} />
    );
  });

  it('renders correct props', () => {
    expect(wrapper.props().providerName).toEqual('aws');
  });

  it('renders img and link correctly', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('renders styles correctly', () => {
    expect(wrapper.find('.cta')).toHaveLength(1);
    expect(wrapper.find('.heading')).toHaveLength(1);
  });
});
