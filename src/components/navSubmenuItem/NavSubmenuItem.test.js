import React from 'react';
import ReactDOM from 'react-dom';
import NavSubmenuItem from './NavSubmenuItem';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavSubmenuItem />, div);
});

describe('test props', () => {
  let testProps = {};
  let wrapper;

  beforeEach(() => {
    testProps = {
      provider: 'aws'
    };
    wrapper = mount(<NavSubmenuItem provider={testProps.provider} />);
  });

  it('renders correct props', () => {
    expect(wrapper.props().provider).toEqual('aws');
  });

  it('loads correct data', () => {
    expect(wrapper.instance().loadData('aws')).toHaveLength(5);
  });
});
