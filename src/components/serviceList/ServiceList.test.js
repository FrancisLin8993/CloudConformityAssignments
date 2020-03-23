import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import ServiceList from './ServiceList';
import ServiceItem from '../serviceItem/ServiceItem';
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
    expect(data1).toHaveLength(6);
    expect(data2).toHaveLength(7);
  });

  it('render rows and columns correctly', () => {
    expect(wrapper1.find(Container)).toHaveLength(1);
    expect(wrapper2.find(Container)).toHaveLength(1);
    expect(wrapper1.find(Row)).toHaveLength(3);
    expect(wrapper2.find(Row)).toHaveLength(4);
    expect(wrapper1.find(Col)).toHaveLength(6);
    expect(wrapper2.find(Col)).toHaveLength(8);
  });

  it('render items correctly', () => {
    expect(wrapper1.find(ServiceItem)).toHaveLength(6);
    expect(wrapper2.find(ServiceItem)).toHaveLength(7);
  });
});
