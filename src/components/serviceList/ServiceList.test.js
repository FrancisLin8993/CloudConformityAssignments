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

describe('<ServiceList />', () => {
  const wrapper = shallow(<ServiceList providerName="aws" />);
  const instance = wrapper.instance();

  it('loads data correctly', () => {
    const data = instance.loadData('aws');
    expect(data).toHaveLength(6);
  });

  it('calls componentDidMount', () => {
    sinon.spy(ServiceList.prototype, 'componentDidMount');
    const wrapper = mount(<ServiceList />);
    expect(ServiceList.prototype.componentDidMount).toHaveProperty(
      'callCount',
      1
    );
  });

  it('render rows and columns correctly', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(Row)).toHaveLength(3);
    expect(wrapper.find(Col)).toHaveLength(6);
  });

  it('render items correctly', () => {
    expect(wrapper.find(ServiceItem)).toHaveLength(6);
  });
});
