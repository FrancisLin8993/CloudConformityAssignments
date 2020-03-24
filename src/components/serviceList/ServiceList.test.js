import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import ServiceList from './ServiceList';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServiceList />, div);
});

it('calls componentDidMount', () => {
  sinon.spy(ServiceList.prototype, 'componentDidMount');
  const wrapper = mount(<ServiceList />);
  expect(ServiceList.prototype.componentDidMount).toHaveProperty(
    'callCount',
    1
  );
});

describe('test children elements', () => {
  const wrapper1 = shallow(<ServiceList providerName="aws" />);
  const instance1 = wrapper1.instance();
  const wrapper2 = shallow(<ServiceList providerName="azure" />);
  const instance2 = wrapper2.instance();

  it('loads data correctly', () => {
    const data1 = instance1.loadData('aws');
    const data2 = instance2.loadData('azure');
    expect(data1).toHaveLength(72);
    expect(data2).toHaveLength(7);
  });

  it('render lists correctly', () => {
    expect(wrapper1.find('ul')).toHaveLength(1);
    expect(wrapper2.find('ul')).toHaveLength(1);
    expect(wrapper1.find('li')).toHaveLength(72);
    expect(wrapper2.find('li')).toHaveLength(7);
  });

  it('render styles correctly', () => {
    expect(wrapper1.find('.service-list')).toHaveLength(1);
    expect(wrapper1.find('.service-link')).toHaveLength(72);
  });
});
